"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import YoinkyTabIcon from "./YoinkyTabIcon";
import HowItWorksVisual from "./HowItWorksVisual";

const PINK = "#F85BA9";
const TAB_DURATION = 4000;

const TABS = [
  {
    id: "capture",
    label: "Capture",
    tagline: "It quietly watches what you do across your Mac apps.",
  },
  {
    id: "remember",
    label: "Remember",
    tagline: "It builds real memory of how you think, decide, and work.",
  },
  {
    id: "understand",
    label: "Understand",
    tagline: "It learns your patterns and recurring workflows over time.",
  },
  {
    id: "act",
    label: "Act",
    tagline: "It proactively suggests and handles repetitive steps for you.",
  },
];

export default function FeatureSection() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((prev) => (prev + 1) % TABS.length);
    }, TAB_DURATION);
    return () => clearTimeout(timer);
  }, [active]);

  const prev = () => setActive((a) => (a - 1 + TABS.length) % TABS.length);
  const next = () => setActive((a) => (a + 1) % TABS.length);

  const tab = TABS[active];

  return (
    <section id="how-it-works" className="bg-[#FDF6EF] py-20 md:py-28 px-6 md:px-16">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header — editorial two-column */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-16 mb-10 md:mb-14 items-end">
          <div>
            <span
              className="inline-block dm-sans text-[12px] font-medium px-3.5 py-1 rounded-full mb-5"
              style={{ backgroundColor: "#FFF0F7", color: PINK }}
            >
              How it works
            </span>
            <h2 className="text-[34px] md:text-[52px] leading-[1.1]">
              <span className="text-black">Your Mac, </span>
              <span style={{ color: "rgba(0,0,0,0.35)" }}>working ahead of you.</span>
            </h2>
          </div>
          <div className="md:pb-1">
            <p className="text-black/50 text-[15px] md:text-[17px] leading-relaxed dm-sans md:text-right">
              Yoinky learns your workflows over time and proactively handles the small decisions, repetitive tasks, and next steps that slow you down.
            </p>
          </div>
        </div>

        {/* Tabs row — selected = black text + border, no fill */}
        <div className="flex gap-2 mb-5 md:mb-6 flex-wrap">
          {TABS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className="flex items-center gap-1.5 px-5 md:px-6 py-2 rounded-full text-[13px] md:text-[14px] dm-sans font-medium cursor-pointer transition-all duration-200"
              style={{
                backgroundColor: "transparent",
                color: active === i ? PINK : "rgba(0,0,0,0.35)",
                border: active === i ? `2px solid ${PINK}` : "1.5px solid rgba(0,0,0,0.15)",
              }}
            >
              <YoinkyTabIcon isActive={active === i} />
              {t.label}
            </button>
          ))}
        </div>

        {/* Mockup box — rounded container */}
        <div
          className="w-full overflow-hidden"
          style={{ borderRadius: 20 }}
        >
          <div
            className="relative w-full"
            style={{ height: "clamp(300px, 50vw, 560px)" }}
          >
            <Image
              src="/howitworks.png"
              alt=""
              fill
              className="object-cover object-center hidden md:block"
            />
            <Image
              src="/howitworks2.png"
              alt=""
              fill
              className="object-cover object-center block md:hidden"
            />
            <HowItWorksVisual active={active} />
          </div>
        </div>

        {/* Nav bar — sits BELOW the box on white */}
        <div
          className="flex items-center justify-between px-1 py-4 md:py-5 mt-1"
          style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}
        >
          <button
            onClick={prev}
            aria-label="Previous"
            className="flex items-center justify-center rounded-full cursor-pointer transition-all duration-200 flex-shrink-0 hover:bg-black/5"
            style={{
              width: 40, height: 40,
              border: "1.5px solid rgba(0,0,0,0.15)",
            }}
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M9 11.5L5 7.5L9 3.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <p
            key={`tag-${active}`}
            className="dm-sans text-[13px] md:text-[15px] text-center px-4"
            style={{
              color: "rgba(0,0,0,0.45)",
              opacity: 0,
              animation: "fadeIn 0.4s ease 0.05s forwards",
            }}
          >
            {tab.tagline}
          </p>

          <button
            onClick={next}
            aria-label="Next"
            className="flex items-center justify-center rounded-full cursor-pointer transition-all duration-200 flex-shrink-0 hover:bg-black/5"
            style={{
              width: 40, height: 40,
              border: "1.5px solid rgba(0,0,0,0.15)",
            }}
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M6 3.5L10 7.5L6 11.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
