import { TEXT, TEXT_SOFT, LINE, SERIF, UI } from "./theme";
import TelegramButton from "./TelegramButton";

const INCLUDED = [
  "Unlimited messages, in English, Hindi, and Hinglish",
  "The full brand diagnosis of your entire public history",
  "Proactive resurfacing of your old ideas, with reasoning",
  "Drafts, repurposing, and consistency checks in your own voice",
  "Browser extension for one-click capture from any webpage",
  "Reputation monitoring, macro-moment matching, and analytics",
  "Full data export and permanent deletion, anytime",
];

export default function PricingSection() {
  return (
    <div className="px-6 md:px-12">
      {/* headline */}
      <h1
        style={{
          fontFamily: SERIF, fontWeight: 400,
          fontSize: "clamp(48px,8vw,84px)", lineHeight: 1,
          letterSpacing: "-0.01em", color: TEXT,
          margin: "clamp(24px,4vw,44px) 0 0",
        }}
      >
        Pricing
      </h1>
      <p style={{ fontFamily: UI, fontSize: "clamp(15px,1.6vw,17px)", lineHeight: 1.55, color: TEXT_SOFT, margin: "clamp(14px,2vw,18px) 0 0", maxWidth: 460, letterSpacing: 0 }}>
        Everything below, at no cost, while Yoinky is in beta. Paid plans come later,
        and early users keep a founding discount.
      </p>

      {/* price block */}
      <div style={{ marginTop: "clamp(32px,5vw,52px)", borderTop: `1px solid ${LINE}`, maxWidth: 620 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 10, padding: "clamp(20px,3vw,28px) 2px 0" }}>
          <span style={{ fontFamily: SERIF, fontSize: "clamp(44px,6.5vw,60px)", fontWeight: 400, letterSpacing: "-0.01em", color: TEXT, lineHeight: 1 }}>
            $0
          </span>
          <span style={{ fontFamily: UI, fontSize: 14, color: TEXT_SOFT, letterSpacing: 0 }}>
            during beta
          </span>
        </div>
        <p style={{ fontFamily: UI, fontSize: 14, color: TEXT_SOFT, margin: "6px 2px clamp(20px,3vw,28px)", letterSpacing: 0 }}>
          The full product. No trial clock, no locked features.
        </p>

        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {INCLUDED.map((item) => (
            <li
              key={item}
              style={{
                display: "flex", gap: 14, alignItems: "flex-start",
                borderTop: `1px solid ${LINE}`, padding: "16px 2px",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
                <path d="M3 8.5L6.5 12L13 4.5" stroke={TEXT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{ fontFamily: UI, fontSize: 14.5, lineHeight: 1.5, color: TEXT, letterSpacing: 0 }}>
                {item}
              </span>
            </li>
          ))}
        </ul>
        <div style={{ borderTop: `1px solid ${LINE}` }} />

        <div style={{ marginTop: "clamp(24px,3.5vw,32px)" }}>
          <TelegramButton />
        </div>
      </div>
    </div>
  );
}
