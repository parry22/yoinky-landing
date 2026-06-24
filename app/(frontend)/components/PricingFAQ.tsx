"use client";

import { useState } from "react";

const PINK = "#F85BA9";

const FAQS = [
  {
    q: "How does Yoinky's pricing work?",
    a: "Yoinky offers subscription plans that include a monthly credit allowance. Credits are used to run agentic tasks. You can also buy extra credits anytime through pay-as-you-go.",
  },
  {
    q: "What are credits used for?",
    a: "Credits are consumed only when Yoinky executes agentic tasks (such as automating workflows or performing actions across your apps). Memory building and suggestions do not use credits.",
  },
  {
    q: "How many credits do I get every month?",
    a: "Each plan comes with a fixed number of monthly credits. Higher-tier plans include more credits.",
  },
  {
    q: "What happens if I run out of credits?",
    a: "You can either upgrade your plan or purchase additional credits through the pay-as-you-go option.",
  },
  {
    q: "How does pay-as-you-go work?",
    a: "Pay-as-you-go allows you to buy extra credits on demand without changing your plan. You only pay for what you use.",
  },
  {
    q: "Can I control how many credits are used?",
    a: "Yes. You can set usage limits and choose to get confirmation before Yoinky runs high-credit tasks.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes. We offer a limited free trial so you can test Yoinky's core memory and suggestion features before subscribing.",
  },
  {
    q: "Can I cancel or change my plan anytime?",
    a: "Yes. You can upgrade, downgrade, or cancel your plan at any time. Changes take effect from the next billing cycle.",
  },
];

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#FDF6EF] px-6 md:px-16 pb-20 md:pb-28">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <div className="grid md:grid-cols-2 gap-6 md:gap-16 mb-10 md:mb-14 items-end">
          <div>
            <span
              className="inline-block dm-sans text-[12px] font-medium px-3.5 py-1 rounded-full mb-5"
              style={{ backgroundColor: "#FFF0F7", color: PINK }}
            >
              FAQ
            </span>
            <h2 className="text-[34px] md:text-[52px] leading-[1.1]">
              <span className="text-black">Pricing </span>
              <span style={{ color: "rgba(0,0,0,0.35)" }}>questions.</span>
            </h2>
          </div>
          <div className="md:pb-1">
            <p className="text-black/50 text-[15px] md:text-[17px] leading-relaxed dm-sans md:text-right">
              Everything you need to know about credits, plans, and billing.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  borderRadius: 12,
                  border: "1px solid rgba(0,0,0,0.07)",
                  backgroundColor: "#FDF6EF",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                  style={{ padding: "clamp(16px, 2vw, 22px)", background: "none", border: "none" }}
                >
                  <span className="text-[14px] md:text-[16px] text-black leading-snug">
                    {item.q}
                  </span>
                  <span
                    className="flex-shrink-0"
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      border: "1.5px solid rgba(0,0,0,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "transform 0.25s ease, background-color 0.2s ease",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      backgroundColor: isOpen ? PINK : "transparent",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2.5 4.5L6 8L9.5 4.5"
                        stroke={isOpen ? "white" : "rgba(0,0,0,0.5)"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: isOpen ? "400px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  <p
                    className="dm-sans text-[13px] md:text-[15px] leading-relaxed text-black/50"
                    style={{ padding: "0 clamp(16px, 2vw, 22px) clamp(16px, 2vw, 22px)" }}
                  >
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
