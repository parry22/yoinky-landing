"use client";

import { useEffect, useRef, useState } from "react";
import { SERIF, TEXT_FAINT, UI } from "./theme";

const LINES = [
  "Growing a point of view should not mean becoming a full-time content machine.",
  "Founders and operators already have the raw material: sharp takes, customer conversations, hard-won lessons, and work worth sharing.",
  "What they lack is the time to catch the right moment, turn it into a useful post, and keep showing up across X and LinkedIn.",
  "Yoinky keeps the context, finds the signal, and helps ship the work without sanding off the person behind it.",
];

export default function WhyYoinky() {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight * 0.45);
      setProgress(Math.max(0, Math.min(1, (window.innerHeight * 0.72 - rect.top) / travel)));
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section ref={ref} style={{ minHeight: "140vh", position: "relative", padding: "clamp(80px,12vw,150px) 24px" }}>
      <div style={{ position: "sticky", top: "18vh", maxWidth: 940, margin: "0 auto" }}>
        <div style={{ fontFamily: UI, color: TEXT_FAINT, fontSize: 12, letterSpacing: "0.13em", textTransform: "uppercase", marginBottom: 28 }}>
          Why we started Yoinky
        </div>
        <div style={{ display: "grid", gap: "0.36em" }}>
          {LINES.map((line, index) => {
            const fill = Math.max(0, Math.min(1, progress * LINES.length - index));
            return (
              <p
                key={line}
                style={{
                  margin: 0,
                  fontFamily: SERIF,
                  fontSize: "clamp(28px,4.1vw,58px)",
                  letterSpacing: "-0.035em",
                  lineHeight: 1.08,
                  backgroundImage: `linear-gradient(270deg, #fff ${fill * 100}%, rgba(255,255,255,0.2) ${fill * 100}%)`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {line}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
