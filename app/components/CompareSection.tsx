"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import YoinkyTabIcon from "./YoinkyTabIcon";

const PINK = "#F85BA9";
const TAB_DURATION = 6000;

const FEATURES = [
  "Setup Required",
  "Background Operation",
  "Memory Depth",
  "Reduces Re-explaining Context",
  "Native Mac Agentic Execution",
  "Learns Your Personal Workflow",
  "Proactive Help",
];

const COMPETITORS: {
  id: string;
  name: string;
  image: string;
  values: string[];
}[] = [
  {
    id: "heyclicky",
    name: "Hey Clicky",
    image: "/heyclicky.png",
    values: [
      "High (need to set routines)",
      "Routine/trigger-based",
      "Basic",
      "Partially",
      "Limited",
      "Partially",
      "Medium",
    ],
  },
  {
    id: "openclaw",
    name: "OpenClaw",
    image: "/openclaw.svg",
    values: [
      "High (needs Mac Mini or server)",
      "Limited (session-based)",
      "Good persistent memory",
      "Partially",
      "Strong",
      "Partially",
      "Medium",
    ],
  },
  {
    id: "hermes",
    name: "Hermes",
    image: "/hermes.png",
    values: [
      "High",
      "Limited",
      "Good",
      "Partially",
      "Limited",
      "Partially",
      "Medium",
    ],
  },
  {
    id: "siriai",
    name: "Siri AI",
    image: "/siriai.png",
    values: [
      "None (built-in)",
      "Limited",
      "Basic (context + history)",
      "Partially",
      "Limited",
      "Limited",
      "Medium",
    ],
  },
];

const YOINKY_VALUES = [
  "Very low",
  "Yes (fully ambient)",
  "Strong (semantic + procedural)",
  "Yes",
  "Strong",
  "Yes",
  "High",
];

const CELL_STYLE: React.CSSProperties = {
  fontSize: 12,
  lineHeight: 1.45,
};

function Cell({ value, pink }: { value: string; pink?: boolean }) {
  return (
    <span
      className="dm-sans"
      style={{ ...CELL_STYLE, color: pink ? PINK : "rgba(0,0,0,0.5)" }}
    >
      {value}
    </span>
  );
}

export default function CompareSection() {
  const [active, setActive] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setTimeout(() => {
      setActive((prev) => (prev + 1) % COMPETITORS.length);
    }, TAB_DURATION);
    return () => clearTimeout(timer);
  }, [active, autoPlay]);

  const handleTabClick = (i: number) => {
    setActive(i);
    setAutoPlay(false);
  };

  const competitor = COMPETITORS[active];

  return (
    <section className="bg-white py-20 md:py-28 px-6 md:px-16">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header — two-column editorial */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-16 mb-10 md:mb-14 items-end">
          <div>
            <span
              className="inline-block dm-sans text-[12px] font-medium px-3.5 py-1 rounded-full mb-5"
              style={{ backgroundColor: "#FFF0F7", color: PINK }}
            >
              Comparison
            </span>
            <h2 className="text-[34px] md:text-[52px] leading-[1.1]">
              <span className="text-black">Yoinky vs </span>
              <span style={{ color: "rgba(0,0,0,0.35)" }}>the rest.</span>
            </h2>
          </div>
          <div className="md:pb-1">
            <p className="text-black/50 text-[15px] md:text-[17px] leading-relaxed dm-sans">
              How Yoinky compares to other tools on the real daily friction.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-5 md:mb-6 flex-wrap">
          {COMPETITORS.map((c, i) => (
            <button
              key={c.id}
              onClick={() => handleTabClick(i)}
              className="flex items-center gap-1.5 px-4 md:px-5 py-2 rounded-full text-[13px] md:text-[14px] dm-sans font-medium cursor-pointer transition-all duration-200"
              style={{
                backgroundColor: "transparent",
                color: active === i ? PINK : "rgba(0,0,0,0.35)",
                border: active === i ? `2px solid ${PINK}` : "1.5px solid rgba(0,0,0,0.15)",
              }}
            >
              <YoinkyTabIcon isActive={active === i} />
              <Image src={c.image} alt={c.name} width={18} height={18} style={{ borderRadius: 100, flexShrink: 0, objectFit: "cover" }} />
              {c.name}
            </button>
          ))}
        </div>

        {/* Table */}
        <div
          style={{
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid rgba(0,0,0,0.07)",
          }}
        >
          {/* Header row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr clamp(88px, 13vw, 160px) clamp(88px, 13vw, 160px)",
              backgroundColor: "rgba(0,0,0,0.03)",
              borderBottom: "1px solid rgba(0,0,0,0.07)",
              padding: "16px clamp(16px, 3vw, 28px)",
              alignItems: "center",
            }}
          >
            <span className="dm-sans text-[12px] font-medium" style={{ color: "rgba(0,0,0,0.45)" }}>
              Features
            </span>
            <span className="dm-sans text-[12px] font-medium flex items-center gap-1.5" style={{ color: "rgba(0,0,0,0.45)" }}>
              <Image
                src="/mark.svg"
                alt="Yoinky"
                width={16}
                height={16}
                style={{
                  flexShrink: 0,
                  filter: "brightness(0) invert(52%) sepia(52%) saturate(736%) hue-rotate(294deg) brightness(101%)",
                }}
              />
              Yoinky
            </span>
            <span
              key={competitor.id + "-header"}
              className="dm-sans text-[12px] font-medium flex items-center gap-1.5"
              style={{ color: "rgba(0,0,0,0.45)", opacity: 0, animation: "fadeIn 0.3s ease forwards" }}
            >
              <Image src={competitor.image} alt={competitor.name} width={16} height={16} style={{ borderRadius: 100, flexShrink: 0, objectFit: "cover" }} />
              {competitor.name}
            </span>
          </div>

          {/* Data rows */}
          {FEATURES.map((feature, i) => (
            <div
              key={feature}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr clamp(88px, 13vw, 160px) clamp(88px, 13vw, 160px)",
                padding: "18px clamp(16px, 3vw, 28px)",
                borderBottom: i < FEATURES.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none",
                backgroundColor: "white",
                alignItems: "center",
              }}
            >
              <span className="dm-sans" style={{ fontSize: 12, color: "rgba(0,0,0,0.75)", lineHeight: 1.45 }}>{feature}</span>
              <span style={{ fontSize: 12 }}>
                <Cell value={YOINKY_VALUES[i]} pink />
              </span>
              <span
                key={`${competitor.id}-${i}`}
                style={{ fontSize: 12, opacity: 0, animation: "fadeIn 0.35s ease 0.05s forwards" }}
              >
                <Cell value={competitor.values[i]} />
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
