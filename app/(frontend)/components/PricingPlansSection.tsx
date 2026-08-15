"use client";

import { useState, useSyncExternalStore } from "react";
import { APP_SIGNIN_URL } from "./theme";
import SectionPill from "./SectionPill";
import styles from "./PricingPlansSection.module.css";

const PLANS = [
  { name: "Self-hosted", description: "For technical teams who want to run Yoinky on their own infrastructure.", cta: "View the source", href: APP_SIGNIN_URL, features: ["Full open-source codebase", "Bring and manage your own model keys", "Configure every integration yourself", "Handle hosting, updates, and support in-house"] },
  { name: "Founder", description: "For one founder or a small team turning expertise into clear market-facing content.", cta: "Start your workspace", href: APP_SIGNIN_URL, popular: true, features: ["Hosted Yoinky workspace", "Capture calls, docs, and customer proof", "Turn source material into briefs and drafts", "Keep your voice and evidence connected"] },
  { name: "Teams", description: "For multiple teams who need one shared narrative across campaigns and channels.", cta: "Build with your team", href: APP_SIGNIN_URL, features: ["Everything in Founder", "Shared workspaces and team permissions", "Cross-team narrative and campaign workflows", "Priority onboarding and ongoing support"] },
];

type CurrencyCode = "USD" | "INR" | "EUR" | "GBP" | "CAD" | "AUD" | "SGD" | "JPY";

const LOCAL_PRICES: Record<CurrencyCode, { solo: number; teams: number; locale: string; original?: { solo: number; teams: number } }> = {
  USD: { solo: 15, teams: 69, locale: "en-US" },
  INR: { solo: 1249, teams: 5749, locale: "en-IN", original: { solo: 1499, teams: 6899 } },
  EUR: { solo: 14, teams: 64, locale: "de-DE" },
  GBP: { solo: 12, teams: 55, locale: "en-GB" },
  CAD: { solo: 20, teams: 94, locale: "en-CA" },
  AUD: { solo: 23, teams: 105, locale: "en-AU" },
  SGD: { solo: 20, teams: 92, locale: "en-SG" },
  JPY: { solo: 2200, teams: 10000, locale: "ja-JP" },
};

function getCurrency(): CurrencyCode {
  const locale = navigator.language.toUpperCase();
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (locale.endsWith("-IN") || timeZone === "Asia/Kolkata") return "INR";
  if (locale.endsWith("-GB")) return "GBP";
  if (locale.endsWith("-CA")) return "CAD";
  if (locale.endsWith("-AU")) return "AUD";
  if (locale.endsWith("-SG")) return "SGD";
  if (locale.endsWith("-JP")) return "JPY";
  if (locale.includes("-DE") || locale.includes("-FR") || locale.includes("-ES") || locale.includes("-IT") || locale.includes("-NL")) return "EUR";
  return "USD";
}

export default function PricingPlansSection() {
  const [yearly, setYearly] = useState(false);
  const currency = useSyncExternalStore<CurrencyCode>(
    () => () => undefined,
    getCurrency,
    () => "USD",
  );

  const pricing = LOCAL_PRICES[currency];
  const formatPrice = (amount: number) => new Intl.NumberFormat(pricing.locale, { style: "currency", currency, maximumFractionDigits: 0 }).format(amount);

  return (
    <section id="pricing" className={styles.section} aria-labelledby="pricing-heading">
      <div className={styles.header}>
        <SectionPill>Pricing</SectionPill>
        <h2 id="pricing-heading">Choose how your team <span>puts its expertise to work.</span></h2>
        <button type="button" className={styles.toggle} role="switch" aria-checked={yearly} onClick={() => setYearly((current) => !current)}>
          <span className={!yearly ? styles.active : ""}>Monthly</span>
          <i aria-hidden="true"><b /></i>
          <span className={yearly ? styles.active : ""}>Yearly</span>
          <em>20% off</em>
        </button>
      </div>

      <div className={styles.grid}>
        {PLANS.map((plan) => {
          const planIndex = PLANS.indexOf(plan);
          const monthlyPrice = planIndex === 0 ? 0 : planIndex === 1 ? pricing.solo : pricing.teams;
          const price = yearly && planIndex > 0 ? Math.round(monthlyPrice * 0.8) : monthlyPrice;
          const original = planIndex > 0 && pricing.original
            ? yearly
              ? Math.round((planIndex === 1 ? pricing.original.solo : pricing.original.teams) * 0.8)
              : planIndex === 1 ? pricing.original.solo : pricing.original.teams
            : undefined;
          return (
            <article className={styles.card} key={plan.name}>
              <div className={styles.topline}><h3>{plan.name}</h3>{plan.popular && <span className={styles.popular}>Popular</span>}</div>
              <div className={styles.price}>{formatPrice(price)}{planIndex > 0 && <small>/month</small>}</div>
              {original && <p className={styles.indiaPrice}><s>{formatPrice(original)}</s><span>Standard price</span><b title="Set with regional purchasing power in mind">India price</b></p>}
              <p className={styles.description}>{plan.description}</p>
              <a href={plan.href} className={`${styles.cta} ${plan.popular ? styles.primary : ""}`}>{plan.cta}</a>
              <div className={styles.divider}><span>Features</span></div>
              <ul className={styles.features}>{plan.features.map((feature) => <li key={feature}>✓ <span>{feature}</span></li>)}</ul>
            </article>
          );
        })}
      </div>
      <p className={styles.customLine}>If you need something custom, just <a href="mailto:parry@meetyoinky.com">contact us.</a></p>
    </section>
  );
}
