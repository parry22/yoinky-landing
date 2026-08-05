"use client";

import { useEffect, useRef, useState } from "react";
import { TEXT_FAINT, UI } from "./theme";
import SectionHead from "./SectionHead";

const LINES = [
  "Growing a point of view should not mean becoming a full-time content machine.",
  "Founders and operators already have the raw material: sharp takes, customer conversations, hard-won lessons, and work worth sharing.",
  "What they lack is the time to catch the moment, turn it into a useful post, and keep showing up across X and LinkedIn.",
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
      const travel = Math.max(1, rect.height - window.innerHeight * 0.3);
      const next = Math.max(0, Math.min(1, (window.innerHeight * 0.62 - rect.top) / travel));
      setProgress((previous) => (Math.abs(previous - next) < 0.002 ? previous : next));
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
    <section ref={ref} style={{ minHeight: "170vh", position: "relative", padding: "clamp(80px,11vw,140px) 24px" }}>
      <div style={{ position: "sticky", top: "17vh", maxWidth: 920, margin: "0 auto" }}>
        <SectionHead kicker="The thesis" title="Why we started" accent="Yoinky." />
        <div style={{ display: "grid", gap: "1.18em", marginTop: "clamp(46px,6vw,74px)", textAlign: "center" }}>
          {LINES.map((line, index) => {
            const fill = Math.max(0, Math.min(1, progress * (LINES.length + 0.65) - index));
            return (
              <p
                key={line}
                style={{
                  margin: 0,
                  fontFamily: UI,
                  fontSize: "clamp(19px,2.15vw,30px)",
                  fontWeight: 400,
                  letterSpacing: "-0.022em",
                  lineHeight: 1.35,
                  backgroundImage: `linear-gradient(90deg, #fff ${fill * 100}%, ${TEXT_FAINT} ${fill * 100}%)`,
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
