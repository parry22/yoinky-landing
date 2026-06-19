"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

const PINK = "#F85BA9";
const DM = "DM Sans, sans-serif";

const G: React.CSSProperties = {
  background: "rgba(12, 12, 16, 0.30)",
  backdropFilter: "blur(28px)",
  WebkitBackdropFilter: "blur(28px)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: 16,
  padding: "clamp(12px,2vw,22px)",
};

const WRAP: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "clamp(12px,2.5vw,32px)",
};

const T = {
  title: { color: "white",                 fontSize: "clamp(13px,2.6vw,17px)", fontFamily: DM, fontWeight: 500, letterSpacing: "-0.3px", margin: 0 } as React.CSSProperties,
  body:  { color: "rgba(255,255,255,0.60)", fontSize: "clamp(10px,1.9vw,12px)", fontFamily: DM, lineHeight: 1.55, margin: 0 } as React.CSSProperties,
  label: { color: "rgba(255,255,255,0.28)", fontSize: "clamp(8px,1.5vw,10px)",  fontFamily: DM, letterSpacing: "0.08em" } as React.CSSProperties,
  sub:   { color: "rgba(255,255,255,0.50)", fontSize: "clamp(10px,1.8vw,12px)", fontFamily: DM } as React.CSSProperties,
};

// ─── Memory ───────────────────────────────────────────────────────────────────
// 8 entries so the pool takes ~18 seconds before cycling back
const MEM_POOL = [
  { tag: "Design Decision",    text: "Chose Verona for brand headings",        time: "2h"  },
  { tag: "Workflow Pattern",   text: "Notion brief before opening Figma",       time: "1d"  },
  { tag: "Project Context",    text: "Landing page v2, indie founders",          time: "3d"  },
  { tag: "Tool Preference",    text: "Raycast over Spotlight, always",           time: "4d"  },
  { tag: "Meeting Preference", text: "Async-first, 15-min sync if needed",     time: "5d"  },
  { tag: "Communication",      text: "Loom for async updates, not Slack walls", time: "6d"  },
  { tag: "Focus Block",        text: "Deep work 9am–12pm, no meetings",         time: "1w"  },
  { tag: "Review Pattern",     text: "Weekly retro every Friday afternoon",      time: "1w"  },
];

function MemoryVisual() {
  const clipRef  = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const busy = useRef(false);

  // Clip container to exactly 2 rows after first layout
  useLayoutEffect(() => {
    const inner = innerRef.current;
    const clip  = clipRef.current;
    if (!inner || !clip) return;
    const rows = inner.children;
    if (rows.length < 2) return;
    const r0 = rows[0] as HTMLElement;
    const r1 = rows[1] as HTMLElement;
    const gap = r1.offsetTop - r0.offsetTop - r0.offsetHeight;
    clip.style.height = `${r0.offsetHeight + gap + r1.offsetHeight}px`;
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      const inner = innerRef.current;
      if (busy.current || !inner) return;
      busy.current = true;

      const r0  = inner.children[0] as HTMLElement;
      const r1  = inner.children[1] as HTMLElement;
      if (!r0 || !r1) { busy.current = false; return; }
      const gap    = r1.offsetTop - r0.offsetTop - r0.offsetHeight;
      const moveBy = r0.offsetHeight + gap;

      // Slide the list up one row
      inner.style.transition = "transform 0.38s cubic-bezier(0.4,0,0.2,1)";
      inner.style.transform  = `translateY(-${moveBy}px)`;

      setTimeout(() => {
        if (!innerRef.current) return;
        // Update content THEN snap — prevents flash of old top entry
        flushSync(() => setIdx(i => i + 1));
        innerRef.current.style.transition = "none";
        innerRef.current.style.transform  = "translateY(0)";
        void innerRef.current.offsetHeight; // force reflow
        busy.current = false;
      }, 400);
    }, 2200);

    return () => clearInterval(id);
  }, []);

  const entries = [0, 1, 2].map(i => MEM_POOL[(idx + i) % MEM_POOL.length]);

  const rowStyle: React.CSSProperties = {
    display: "flex", alignItems: "center",
    gap: "clamp(8px,1.5vw,12px)",
    padding: "clamp(7px,1.3vw,10px) clamp(10px,1.8vw,14px)",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 8,
    flexShrink: 0,
  };

  return (
    <div style={WRAP}>
      <div style={{ ...G, width: "100%", maxWidth: 400 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "clamp(8px,1.5vw,14px)" }}>
          <p style={T.title}>Memory saved</p>
          <span style={T.label}>47 THIS WEEK</span>
        </div>
        {/* overflow:hidden clips inner list to exactly 2 rows */}
        <div ref={clipRef} style={{ overflow: "hidden" }}>
          <div ref={innerRef} style={{ display: "flex", flexDirection: "column", gap: "clamp(5px,1vw,7px)" }}>
            {entries.map((e, i) => (
              <div key={i} style={rowStyle}>
                <span style={{ color: PINK, fontSize: "clamp(9px,1.6vw,10px)", fontFamily: DM, fontWeight: 600, flexShrink: 0 }}>{e.tag}</span>
                <span style={{ ...T.body, flex: 1, minWidth: 0 }}>{e.text}</span>
                <span style={{ ...T.label, flexShrink: 0 }}>{e.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Context (Cross Session Context) ─────────────────────────────────────────
// Progress bar fills → context items slide in one by one → loop
const CONTEXT_ITEMS = [
  "Working on Yoinky landing v2",
  "Last decision: Chose Verona font",
  "Figma file: UI Kit v3 open",
];

function ContextVisual() {
  const [barFill, setBarFill] = useState(false);
  const [cycle, setCycle]     = useState(0);

  useEffect(() => {
    const ids: ReturnType<typeof setTimeout>[] = [];
    const push = (fn: () => void, ms: number) => { const id = setTimeout(fn, ms); ids.push(id); };

    const run = () => {
      // instant reset
      setBarFill(false);
      setCycle(c => c + 1);
      // slight delay so bar starts at 0 before transition fires
      push(() => setBarFill(true), 60);
      // restart next cycle
      push(run, 5000);
    };

    run();
    return () => ids.forEach(clearTimeout);
  }, []);

  return (
    <>
    <style>{`@keyframes contextItemIn{from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)}}`}</style>
    <div style={WRAP}>
      <div style={{ ...G, width: "100%", maxWidth: 400 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "clamp(8px,1.5vw,12px)" }}>
          <p style={T.title}>Context restored</p>
          <span style={{ ...T.sub, color: "#00C896", fontSize: "clamp(9px,1.6vw,11px)" }}>2h ago</span>
        </div>

        {/* Filling progress bar */}
        <div style={{ height: 3, background: "rgba(255,255,255,0.08)", borderRadius: 4, overflow: "hidden", marginBottom: "clamp(10px,1.8vw,14px)" }}>
          <div style={{
            height: "100%",
            background: `linear-gradient(90deg, ${PINK}, #FF9FD8)`,
            borderRadius: 4,
            width: barFill ? "100%" : "0%",
            transition: barFill ? "width 1.5s cubic-bezier(0.4,0,0.2,1)" : "none",
          }} />
        </div>

        {/* Items slide in after bar completes — key forces remount each cycle */}
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(5px,1vw,8px)" }}>
          {CONTEXT_ITEMS.map((text, i) => (
            <div
              key={`${cycle}-${i}`}
              style={{
                display: "flex", alignItems: "center",
                gap: "clamp(8px,1.5vw,10px)",
                padding: "clamp(6px,1.2vw,9px) clamp(10px,1.8vw,12px)",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 8,
                opacity: 0,
                animation: "contextItemIn 0.3s ease both",
                animationDelay: `${1.6 + i * 0.22}s`,
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: PINK, flexShrink: 0 }} />
              <span style={T.body}>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

// ─── Workflow ─────────────────────────────────────────────────────────────────
// Steps advance every 1.6s — snappy enough to feel like it's actually running
const WF_STEPS = [
  "Draft weekly update",
  "Pull Linear tickets",
  "Format for Notion",
  "Post Slack summary",
];

function WorkflowVisual() {
  const [done, setDone] = useState(2);
  useEffect(() => {
    const id = setInterval(() => setDone(d => (d >= 4 ? 1 : d + 1)), 1600);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={WRAP}>
      <div style={{ ...G, width: "100%", maxWidth: 400 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "clamp(10px,1.8vw,16px)" }}>
          <p style={T.title}>Workflow running</p>
          <span style={T.label}>{done} OF 4 DONE</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(6px,1.1vw,9px)" }}>
          {WF_STEPS.map((label, i) => {
            const isDone   = i < done;
            const isActive = i === done;
            return (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "clamp(8px,1.5vw,10px)" }}>
                <div style={{ position: "relative", width: 16, height: 16, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {isActive && (
                    <div style={{
                      position: "absolute", inset: -3, borderRadius: "50%",
                      border: `1.5px solid ${PINK}`,
                      opacity: 0,
                      animation: "activePulse 1.4s ease-out infinite",
                    }} />
                  )}
                  <div style={{
                    width: 16, height: 16, borderRadius: "50%",
                    background: isDone ? "#00C896" : "transparent",
                    border: isDone ? "none" : isActive ? `1.5px solid ${PINK}` : "1.5px solid rgba(255,255,255,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "background 0.3s ease, border-color 0.3s ease",
                  }}>
                    {isDone && (
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1.5 4L3 5.5L6.5 2.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    {isActive && <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: PINK, display: "inline-block" }} />}
                  </div>
                </div>
                <span style={{
                  ...T.body,
                  color: isDone ? "rgba(255,255,255,0.35)" : isActive ? "white" : "rgba(255,255,255,0.28)",
                  transition: "color 0.3s ease",
                  fontWeight: isActive ? 500 : undefined,
                }}>
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Privacy ──────────────────────────────────────────────────────────────────
// Toggles animate in when card enters viewport, then loop
const PRIVACY_ITEMS = ["Work context", "App activity", "Personal notes"];

function PrivacyVisual() {
  const [ons, setOns] = useState([false, false, false]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let t1: ReturnType<typeof setTimeout>;
    let t2: ReturnType<typeof setTimeout>;
    let loopTimer: ReturnType<typeof setTimeout>;
    let started = false;

    const runCycle = () => {
      setOns([false, false, false]);
      t1 = setTimeout(() => setOns([true, false, false]), 500);
      t2 = setTimeout(() => setOns([true, true, false]),  1000);
      // hold for ~3s then repeat
      loopTimer = setTimeout(runCycle, 4500);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          runCycle();
        }
      },
      { threshold: 0.35 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(loopTimer);
    };
  }, []);

  // Compact WRAP + card padding so 3 rows fit the 16:10 container on mobile
  const privWRAP: React.CSSProperties = { ...WRAP, padding: "clamp(8px,2vw,28px)" };
  const privG: React.CSSProperties = { ...G, padding: "clamp(10px,1.8vw,20px)" };

  return (
    <div style={privWRAP} ref={ref}>
      <div style={{ ...privG, width: "100%", maxWidth: 400 }}>
        <p style={{ ...T.title, marginBottom: "clamp(8px,1.5vw,14px)" }}>Memory controls</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(5px,1vw,8px)" }}>
          {PRIVACY_ITEMS.map((label, i) => (
            <div
              key={i}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "clamp(6px,1.2vw,10px) clamp(10px,1.8vw,14px)",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 8,
              }}
            >
              <span style={T.body}>{label}</span>
              <div style={{
                width: 32, height: 18, borderRadius: 100,
                background: ons[i] ? PINK : "rgba(255,255,255,0.15)",
                position: "relative", flexShrink: 0,
                transition: "background 0.3s ease",
              }}>
                <div style={{
                  position: "absolute", width: 12, height: 12, borderRadius: "50%",
                  background: "white", top: 3,
                  left: ons[i] ? 17 : 3,
                  transition: "left 0.3s ease",
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const VISUALS: Record<string, React.FC> = {
  memory:   MemoryVisual,
  context:  ContextVisual,
  automate: WorkflowVisual,
  control:  PrivacyVisual,
};

export default function FeatureVisual({ id }: { id: string }) {
  const Visual = VISUALS[id];
  if (!Visual) return null;
  return (
    <div style={{ position: "absolute", inset: 0 }}>
      <Visual />
    </div>
  );
}
