"use client";

import { LINE, SERIF, TEXT, TEXT_FAINT, TEXT_SOFT, UI, signUpUrl } from "./theme";
import SectionHead from "./SectionHead";
import Reveal, { useInView } from "./Reveal";

type Plan = {
  name: string;
  price: string;
  was?: string;
  priceNote: string;
  blurb: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Open Source",
    price: "$0",
    priceNote: "Free forever,\nSelf-hosted",
    blurb: "Run Yoinky on your own infrastructure with your own API keys.",
    features: [
      "Complete web app and Telegram agent",
      "Bring your own AI and research API keys",
      "Connect your own X and LinkedIn apps",
      "Your database, infrastructure, and data",
      "MIT licensed and community supported",
    ],
    cta: "View on GitHub",
    href: "https://github.com/parry22/yoinkybot",
  },
  {
    name: "Growth",
    price: "$15",
    was: "$29",
    priceNote: "Per month,\nBilled monthly",
    blurb: "For founders and small teams building a trusted narrative.",
    features: [
      "Connect X and LinkedIn",
      "Company workspace with knowledge, narrative, briefs, and review",
      "Memory core: unlimited captures + resurfacing",
      "Buyer radar: 25 buyer leads / month",
      "Auto Agent: 30 posts per platform / month, you approve each one",
      "Unlimited voice-matched drafts",
      "30 scheduled posts / month",
      "Daily viral breakdown + trend alerts, 2–3 a day",
      "Telegram agent access",
    ],
    cta: "Start your free trial",
    href: signUpUrl("growth"),
    featured: true,
  },
  {
    name: "Scale",
    price: "$49",
    was: "$79",
    priceNote: "Per month,\nBilled monthly",
    blurb: "For teams operating a narrative across more channels and experts.",
    features: [
      "Everything in Growth",
      // 300, not "unlimited" — billing/entitlements.ts SCALE caps this at 300/mo.
      "Buyer radar: 300 buyer leads / month",
      "Auto Agent: 90 posts per platform / month, fully hands-off",
      "Unlimited scheduled posts",
      "Unlimited viral breakdowns",
      "Proactive resurfacing, 5 a week",
      "Priority support",
    ],
    cta: "Start your free trial",
    href: signUpUrl("scale"),
  },
];

function FoundingPrice({ price, was, ink, inkFaint, run }: { price: string; was?: string; ink: string; inkFaint: string; run: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 12 }}>
      <span
        style={{
          fontFamily: SERIF, fontSize: "clamp(46px,4.8vw,58px)", lineHeight: 0.95,
          letterSpacing: "-0.01em", color: ink, fontVariantNumeric: "tabular-nums",
        }}
      >
        {price}
      </span>
      {was && (
        <span style={{ position: "relative", paddingBottom: 6 }}>
          <span
            style={{
              fontFamily: SERIF, fontSize: 24, color: inkFaint,
              fontVariantNumeric: "tabular-nums", lineHeight: 1,
            }}
          >
            {was}
          </span>
          {/* the strike, drawn across when the card scrolls in */}
          <span
            style={{
              position: "absolute", left: -2, right: -2, top: "52%", height: 1.5,
              background: inkFaint,
              transform: run ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: "left",
              transition: "transform 800ms cubic-bezier(0.45,0,0.2,1) 500ms",
            }}
          />
        </span>
      )}
    </div>
  );
}

function PlanCard({ plan, run, delay }: { plan: Plan; run: boolean; delay: number }) {
  const featured = Boolean(plan.featured);
  const ink = featured ? "#111111" : TEXT;
  const inkSoft = featured ? "rgba(0,0,0,0.62)" : TEXT_SOFT;
  const inkFaint = featured ? "rgba(0,0,0,0.45)" : TEXT_FAINT;

  return (
    <div
      className="pricing-card"
      style={{
        position: "relative",
        height: "100%",
        borderRadius: 24,
        border: `1px solid ${featured ? "transparent" : LINE}`,
        background: featured
          ? "linear-gradient(180deg, #FFFFFF 0%, #F4F2EE 100%)"
          : "rgba(255,255,255,0.03)",
        boxShadow: featured ? "0 30px 70px rgba(255,255,255,0.09), 0 8px 30px rgba(0,0,0,0.5)" : "none",
        padding: "clamp(24px,2.6vw,32px)",
        display: "flex", flexDirection: "column",
        transition: "transform 500ms cubic-bezier(0.22,1,0.36,1), border-color 400ms ease",
      }}
    >
      {/* plan label + founding tag */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "clamp(18px,2.2vw,24px)" }}>
        <span
          style={{
            fontFamily: UI, fontSize: 12, fontWeight: 600,
            letterSpacing: 1.4, textTransform: "uppercase",
            color: featured ? "rgba(10,10,10,0.55)" : TEXT_SOFT,
          }}
        >
          {plan.name}
        </span>
        {featured && (
          <span
            style={{
              fontFamily: UI, fontSize: 10.5, fontWeight: 600,
              color: "#fff", background: "#111", borderRadius: 100,
              padding: "4px 11px", letterSpacing: 0.4,
              animation: "foundingPulse 2.6s ease-in-out infinite",
            }}
          >
            Most popular
          </span>
        )}
      </div>

      {/* founding price */}
      <FoundingPrice price={plan.price} was={plan.was} ink={ink} inkFaint={inkFaint} run={run} />
      <div style={{ fontFamily: UI, fontSize: 12.5, lineHeight: 1.45, color: inkFaint, whiteSpace: "pre-line", marginTop: 8 }}>
        {plan.priceNote}
      </div>
      {plan.was && (
        <div
          style={{
            display: "flex", alignItems: "center", gap: 6, marginTop: 10,
            fontFamily: UI, fontSize: 11.5, color: inkFaint, letterSpacing: 0.3,
          }}
        >
          <span style={{ width: 4, height: 4, borderRadius: "50%", background: featured ? "rgba(10,10,10,0.55)" : TEXT_SOFT, flexShrink: 0 }} />
          Early-bird price, first 50 users
        </div>
      )}

      {/* blurb */}
      <p style={{ fontFamily: UI, fontSize: 14.5, lineHeight: 1.55, color: ink, margin: "clamp(16px,2vw,20px) 0 0" }}>
        {plan.blurb}
      </p>

      {/* features, staggering in */}
      <ul style={{ listStyle: "none", padding: 0, margin: "clamp(20px,2.4vw,26px) 0 0", display: "grid", gap: 12, flex: 1 }}>
        {plan.features.map((f, i) => (
          <li
            key={f}
            style={{
              display: "flex", gap: 12, alignItems: "flex-start",
              opacity: run ? 1 : 0,
              transform: run ? "translateY(0)" : "translateY(8px)",
              transition: `opacity 500ms ease ${delay + 300 + i * 90}ms, transform 500ms cubic-bezier(0.22,1,0.36,1) ${delay + 300 + i * 90}ms`,
            }}
          >
            <span
              style={{
                width: 5, height: 5, borderRadius: "50%", flexShrink: 0, marginTop: 7,
                background: featured ? "#111" : "rgba(255,255,255,0.7)",
              }}
            />
            <span style={{ fontFamily: UI, fontSize: 13.5, lineHeight: 1.55, color: inkSoft }}>
              {f}
            </span>
          </li>
        ))}
      </ul>

      {/* cta */}
      <a
        href={plan.href}
        className="pricing-cta"
        style={{
          marginTop: "clamp(24px,3vw,30px)",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          fontFamily: UI, fontSize: 14.5, fontWeight: 600,
          color: featured ? "#fff" : "#111",
          background: featured ? "#111" : "#fff",
          borderRadius: 100, padding: "14px 20px",
          textDecoration: "none",
          transition: "transform 350ms cubic-bezier(0.22,1,0.36,1), box-shadow 350ms ease",
        }}
      >
        {plan.cta} <span aria-hidden>→</span>
      </a>
    </div>
  );
}

export default function HomePricing() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <section style={{ background: "transparent", position: "relative" }}>
      <div
        className="px-6 md:px-12"
        style={{
          maxWidth: 1180, margin: "0 auto",
          paddingTop: "clamp(80px,11vw,140px)", paddingBottom: "clamp(20px,3vw,32px)",
        }}
      >
        <SectionHead
          kicker="Pricing"
          title="Use Yoinky your way."
          accent="Free or fully managed."
          sub="Self-host Yoinky for free with your own keys, or choose a managed plan and let us run it for you."
        />

        

        <div
          ref={ref}
          className="grid md:grid-cols-3"
          style={{ gap: 18, marginTop: "clamp(36px,4.5vw,52px)", alignItems: "stretch", position: "relative" }}
        >
          {/* brand glow anchoring the featured card */}
          <div
            aria-hidden
            style={{
              // Growth is the featured managed plan in the middle column.
              position: "absolute", left: "33%", top: "-6%", width: "34%", height: "112%",
              background: "radial-gradient(ellipse at 50% 40%, rgba(255,255,255,0.07) 0%, transparent 68%)",
              filter: "blur(24px)", pointerEvents: "none",
            }}
          />
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 110} style={{ height: "100%", position: "relative" }}>
              <PlanCard plan={p} run={inView} delay={i * 110} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p
            style={{
              fontFamily: UI, fontSize: 13, color: TEXT_FAINT, textAlign: "center",
              margin: "clamp(26px,3.4vw,36px) auto 0", maxWidth: 520, lineHeight: 1.6,
            }}
          >
            Open Source is free and runs on your infrastructure. Managed plans include a 7-day trial and can be
            cancelled anytime. Your data can be exported or permanently deleted.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
