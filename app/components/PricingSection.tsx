"use client";

import { useState } from "react";
import Image from "next/image";

const PINK = "#F85BA9";

const PLANS = [
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: 0,
    annualPrice: 0,
    description: "Perfect for individuals just getting started with AI-assisted productivity.",
    features: [
      { text: "Up to 15 requests per day", included: true },
      { text: "Basic ambient learning", included: true },
      { text: "3 app integrations", included: true },
      { text: "7-day memory retention", included: true },
      { text: "Proactive suggestions", included: false },
      { text: "Priority support", included: false },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    monthlyPrice: 23,
    annualPrice: 18,
    description: "For power users who want the full Yoinky experience.",
    features: [
      { text: "Unlimited AI requests", included: true },
      { text: "Advanced ambient learning", included: true },
      { text: "Unlimited app integrations", included: true },
      { text: "Persistent memory (forever)", included: true },
      { text: "Proactive suggestions", included: true },
      { text: "Priority support", included: true },
    ],
  },
  {
    id: "team",
    name: "Team",
    monthlyPrice: 103,
    annualPrice: 82,
    description: "Everything your team needs to stay ahead, together.",
    features: [
      { text: "Everything in Pro", included: true },
      { text: "Up to 10 team seats", included: true },
      { text: "Admin dashboard & permissions", included: true },
      { text: "Dedicated onboarding specialist", included: true },
      { text: "Live chat support (7 days/week)", included: true },
      { text: "Custom integrations", included: true },
    ],
  },
];

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="bg-white px-6 md:px-16 pb-20 md:pb-28">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header — two-column editorial */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-16 mb-10 md:mb-12 items-end">
          <div>
            <h2 className="text-[34px] md:text-[52px] leading-[1.1]">
              <span className="text-black">Fair Pricing, Real </span>
              <span style={{ color: "rgba(0,0,0,0.35)" }}>Results.</span>
            </h2>
          </div>
          <div className="md:pb-1">
            <p className="text-black/45 text-[15px] md:text-[17px] dm-sans leading-relaxed md:text-right">
              Start free. Upgrade when ready. No hidden fees, no long contracts.
            </p>
          </div>
        </div>

        {/* Monthly / Annual toggle */}
        <div className="flex items-center gap-3 mb-8 md:mb-10">
          <span
            className="dm-sans text-[14px] md:text-[15px]"
            style={{ color: isAnnual ? "rgba(0,0,0,0.35)" : "black" }}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(v => !v)}
            aria-label="Toggle billing period"
            style={{
              width: 44,
              height: 26,
              borderRadius: 13,
              backgroundColor: isAnnual ? PINK : "rgba(0,0,0,0.14)",
              position: "relative",
              transition: "background-color 0.22s ease",
              flexShrink: 0,
              cursor: "pointer",
              border: "none",
              padding: 0,
            }}
          >
            <span
              style={{
                position: "absolute",
                top: 3,
                left: isAnnual ? 21 : 3,
                width: 20,
                height: 20,
                borderRadius: "50%",
                backgroundColor: "white",
                transition: "left 0.22s ease",
                boxShadow: "0 1px 4px rgba(0,0,0,0.18)",
                display: "block",
              }}
            />
          </button>
          <span
            className="dm-sans text-[14px] md:text-[15px] flex items-center gap-1.5"
            style={{ color: isAnnual ? "black" : "rgba(0,0,0,0.35)" }}
          >
            Annual
            <span
              className="dm-sans text-[12px] font-medium px-2 py-0.5 rounded-full"
              style={{ backgroundColor: "#F0FDF4", color: "#16A34A" }}
            >
              save 20%
            </span>
          </span>
        </div>

        {/* Cards container with background image */}
        <div
          style={{
            borderRadius: 20,
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Background image */}
          <div style={{ position: "absolute", inset: 0 }}>
            <Image src="/pricing1.png" alt="" fill className="object-cover object-center hidden md:block" />
            <Image src="/pricing2.png" alt="" fill className="object-cover object-center block md:hidden" />
            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.08)" }} />
          </div>

          {/* Cards grid */}
          <div
            className="relative grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4"
            style={{ padding: "clamp(16px, 3vw, 32px)" }}
          >
            {PLANS.map(plan => {
              const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
              return (
                <div
                  key={plan.id}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.88)",
                    borderRadius: 12,
                    padding: "clamp(20px, 3vw, 32px)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 0,
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.6)",
                  }}
                >
                  {/* Plan name */}
                  <p className="dm-sans text-[13px] text-black/50 mb-3">{plan.name}</p>

                  {/* Price */}
                  <div className="flex items-end gap-2 mb-3">
                    <span className="text-[42px] md:text-[48px] leading-none text-black">
                      {price === 0 ? "$0" : `$${price}`}
                    </span>
                    {price > 0 && (
                      <span className="dm-sans text-[14px] text-black/40 mb-1.5">/mo</span>
                    )}
                    {isAnnual && plan.monthlyPrice > 0 && (
                      <span
                        className="text-[42px] md:text-[48px] leading-none"
                        style={{ color: "rgba(0,0,0,0.28)", textDecoration: "line-through" }}
                      >
                        ${plan.monthlyPrice}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="dm-sans text-[12px] md:text-[13px] text-black/45 leading-relaxed mb-5">
                    {plan.description}
                  </p>

                  {/* Features */}
                  <ul className="flex flex-col gap-2.5 flex-1 mb-6">
                    {plan.features.map(f => (
                      <li key={f.text} className="flex items-start gap-2.5">
                        {f.included ? (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
                            <path d="M3 8.5L6.5 12L13 5" stroke={PINK} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ) : (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
                            <path d="M4.5 4.5L11.5 11.5M11.5 4.5L4.5 11.5" stroke="rgba(0,0,0,0.22)" strokeWidth="1.6" strokeLinecap="round" />
                          </svg>
                        )}
                        <span
                          className="dm-sans text-[12px] md:text-[13px] leading-snug"
                          style={{ color: f.included ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.3)" }}
                        >
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA button */}
                  <a
                    href="https://tally.so/r/Ek6zbo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block w-full text-center dm-sans text-[14px] font-medium py-3 rounded-full overflow-hidden"
                    style={{ backgroundColor: PINK, color: "white" }}
                  >
                    <span className="relative block overflow-hidden">
                      <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                        Get Started
                      </span>
                      <span className="absolute inset-0 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 flex items-center justify-center">
                        Get Started
                      </span>
                    </span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
