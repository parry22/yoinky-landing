"use client";

import { useEffect, useRef, useState } from "react";
import { LINE, TEXT_FAINT, TEXT_SOFT, UI } from "./theme";
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
      // Deliberately use a long travel distance. The reveal should reward a
      // measured scroll, never jump through the thesis in one wheel movement.
      const travel = Math.max(1, rect.height - window.innerHeight * 0.25);
      const next = Math.max(0, Math.min(1, (window.innerHeight * 0.58 - rect.top) / travel));
      setProgress((previous) => Math.abs(previous - next) < 0.002 ? previous : next);
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
    <section ref={ref} style={{ minHeight: "185vh", position: "relative", padding: "clamp(84px,12vw,154px) 24px" }}>
      <div
        aria-hidden
        style={{
          position: "absolute", inset: "12% 0 auto", height: "68%", pointerEvents: "none",
          background: "radial-gradient(45% 36% at 76% 38%, rgba(255,255,255,0.075), transparent 72%), radial-gradient(32% 30% at 18% 70%, rgba(255,255,255,0.035), transparent 75%)",
        }}
      />
      <div style={{ position: "sticky", top: "10vh", maxWidth: 1080, margin: "0 auto" }}>
        <SectionHead kicker="The thesis" title="Why we started" accent="Yoinky." align="left" />
        <div
          style={{
            display: "grid", gridTemplateColumns: "3px minmax(0, 1fr)", gap: "clamp(20px,4vw,48px)",
            marginTop: "clamp(42px,6vw,76px)", padding: "clamp(22px,3.2vw,34px)",
            border: `1px solid ${LINE}`, borderRadius: 26,
            background: "linear-gradient(135deg, rgba(255,255,255,0.055), rgba(255,255,255,0.012) 48%, rgba(255,255,255,0.035))",
            boxShadow: "0 30px 100px rgba(0,0,0,0.22)",
          }}
        >
          <div style={{ position: "relative", borderRadius: 999, background: "rgba(255,255,255,0.12)", overflow: "hidden" }}>
            <div
              style={{
                position: "absolute", inset: "auto 0 0", height: `${progress * 100}%`, borderRadius: 999,
                background: "linear-gradient(#fff, rgba(255,255,255,0.55))", transition: "height 180ms ease-out",
              }}
            />
          </div>
          <div style={{ display: "grid", gap: "0.9em", paddingRight: "clamp(0px,3vw,30px)" }}>
            {LINES.map((line, index) => {
              const fill = Math.max(0, Math.min(1, progress * (LINES.length + 0.8) - index));
              return (
                <p
                  key={line}
                  style={{
                    margin: 0,
                    fontFamily: UI,
                    fontSize: "clamp(19px,2.25vw,31px)",
                    fontWeight: 400,
                    letterSpacing: "-0.026em",
                    lineHeight: 1.32,
                    backgroundImage: `linear-gradient(90deg, #fff ${fill * 100}%, ${TEXT_FAINT} ${fill * 100}%)`,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    transition: "background-image 220ms ease-out",
                  }}
                >
                  {line}
                </p>
              );
            })}
            <div style={{ marginTop: 8, color: TEXT_SOFT, fontFamily: UI, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Keep scrolling
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
