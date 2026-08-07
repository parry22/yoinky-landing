"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { LINE, SERIF, TEXT, TEXT_FAINT, TEXT_SOFT, UI } from "./theme";
import SectionHead from "./SectionHead";
import Reveal, { useInView } from "./Reveal";

/* ── helpers ─────────────────────────────────────────────── */

function useCountUp(target: number, run: boolean, duration = 1900) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      setVal(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target, duration]);
  return val;
}

/** cycles 0..steps-1 while `run` is true */
function useLoop(stepMs: number, steps: number, run: boolean) {
  const [s, setS] = useState(0);
  useEffect(() => {
    if (!run) return;
    const id = setInterval(() => setS((v) => (v + 1) % steps), stepMs);
    return () => clearInterval(id);
  }, [run, stepMs, steps]);
  return s;
}

const fmt = (n: number) => n.toLocaleString("en-US");

function YAvatar({ size = 30 }: { size?: number }) {
  return (
    <span
      style={{
        width: size, height: size, borderRadius: "50%", flexShrink: 0,
        background: "rgba(255,255,255,0.09)",
        border: `1px solid ${LINE}`,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/mark.svg" alt="" aria-hidden style={{ width: size * 0.55, height: size * 0.55 }} />
    </span>
  );
}

function Bubble({ children, side = "left" }: { children: React.ReactNode; side?: "left" | "right" }) {
  const isUser = side === "right";
  return (
    <div
      style={{
        alignSelf: isUser ? "flex-end" : "flex-start",
        maxWidth: "88%",
        animation: "msgIn 550ms cubic-bezier(0.22,1,0.36,1) both",
        background: isUser ? "#fff" : "rgba(255,255,255,0.07)",
        color: isUser ? "#111" : TEXT,
        border: isUser ? "none" : `1px solid ${LINE}`,
        borderRadius: 13,
        borderBottomLeftRadius: isUser ? 13 : 4,
        borderBottomRightRadius: isUser ? 4 : 13,
        padding: "9px 12px",
        fontFamily: UI, fontSize: 12, lineHeight: 1.5,
      }}
    >
      {children}
    </div>
  );
}

/* ── minimalist, self-explanatory mocks ──────────────────── */

type MockProps = { active: boolean };

/** memory: ask a question, your own words come back */
function MockMemory({ active }: MockProps) {
  const step = useLoop(1500, 5, active);
  return (
    <div style={{ width: "86%", display: "flex", flexDirection: "column", gap: 8 }}>
      {step >= 1 && <Bubble side="right">What did I say about pricing?</Bubble>}
      {step >= 2 && (
        <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
          <YAvatar size={24} />
          <Bubble>
            <span style={{ fontFamily: UI, fontSize: 9.5, color: TEXT_FAINT, letterSpacing: 1, textTransform: "uppercase" }}>
              You, 3 weeks ago
            </span>
            <div style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 14, color: TEXT, marginTop: 5, lineHeight: 1.45 }}>
              “Price for the rewrite, not the demo. The demo is Tuesday; the rewrite is forever.”
            </div>
          </Bubble>
        </div>
      )}
    </div>
  );
}

/** viral impressions: a breakout sparkline that draws itself */
function MockViral({ active }: MockProps) {
  const views = useCountUp(2418204, active);
  return (
    <div style={{ width: "76%", display: "grid", gap: 12, justifyItems: "center" }}>
      <svg viewBox="0 0 300 92" style={{ width: "100%", height: "auto", display: "block" }}>
        <path
          d="M 4 80 C 60 80, 90 76, 122 67 C 154 58, 168 50, 192 34 C 216 18, 244 9, 296 6"
          fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"
          pathLength={1} strokeDasharray="1"
          style={{
            strokeDashoffset: active ? 0 : 1,
            transition: "stroke-dashoffset 1.7s cubic-bezier(0.45,0,0.2,1) 0.2s",
          }}
        />
        <circle
          cx="296" cy="6" r="4.5" fill="#fff"
          style={{
            opacity: active ? 1 : 0,
            transition: "opacity 350ms ease 1.75s",
            animation: active ? "blipPing 2s ease-out 2.1s infinite" : "none",
          }}
        />
      </svg>
      <div style={{ fontFamily: SERIF, fontSize: 34, color: TEXT, lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>
        {fmt(views)}
      </div>
    </div>
  );
}

/** buyer radar: people light up one by one with their intent */
const RADAR_ROWS = [
  { n: "Dan R.", q: "“Anyone know a good landing page dev?”", t: "Looking to hire" },
  { n: "Priya N.", q: "“What do you use to schedule posts?”", t: "Asking for recs" },
  { n: "Tom B.", q: "“My launch got 200 views, help”", t: "Has your problem" },
];

function MockRadar({ active }: MockProps) {
  const step = useLoop(1500, 5, active);
  return (
    <div style={{ width: "88%", display: "grid", gap: 8 }}>
      {RADAR_ROWS.map((r, i) => {
        const lit = step === 3 || i < step;
        const just = step === i;
        return (
          <div
            key={r.n}
            style={{
              borderRadius: 13, padding: "10px 13px",
              display: "flex", alignItems: "center", gap: 9,
              background: lit ? "rgba(183,245,205,0.06)" : "rgba(255,255,255,0.03)",
              border: `1px solid ${lit ? "rgba(183,245,205,0.24)" : "rgba(255,255,255,0.07)"}`,
              opacity: lit ? 1 : 0.5,
              transform: lit ? "translateX(4px)" : "translateX(0)",
              transition: "all 500ms cubic-bezier(0.22,1,0.36,1)",
              position: "relative",
            }}
          >
            {just && (
              <span
                key={`p-${step}`}
                style={{
                  position: "absolute", inset: -1.5, borderRadius: 14,
                  border: "1.5px solid rgba(183,245,205,0.7)",
                  animation: "pingOnce 1s ease-out forwards", pointerEvents: "none",
                }}
              />
            )}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: UI, fontSize: 12, color: TEXT, fontWeight: 600 }}>{r.n}</div>
              <div style={{ fontFamily: UI, fontSize: 11, color: TEXT_SOFT, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {r.q}
              </div>
            </div>
            <span
              style={{
                fontFamily: UI, fontSize: 10, flexShrink: 0,
                color: "#B7F5CD", border: "1px solid rgba(183,245,205,0.3)",
                borderRadius: 100, padding: "3px 8px", background: "rgba(183,245,205,0.07)",
                opacity: lit ? 1 : 0, transform: lit ? "scale(1)" : "scale(0.7)",
                transition: "all 400ms cubic-bezier(0.34,1.56,0.64,1) 150ms",
              }}
            >
              {r.t}
            </span>
          </div>
        );
      })}
    </div>
  );
}

/** skills: the specialist capabilities light up as one coordinated system. */
function MockSkills({ active }: MockProps) {
  const step = useLoop(650, 6, active);
  const skills = ["Hooks", "Research", "Voice", "Trends", "LinkedIn", "Timing"];
  return (
    <div style={{ width: "82%", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
      {skills.map((skill, index) => {
        const lit = active && index <= step;
        return (
          <div
            key={skill}
            style={{
              padding: "12px 8px", borderRadius: 12, textAlign: "center",
              border: `1px solid ${lit ? "rgba(255,255,255,0.52)" : "rgba(255,255,255,0.10)"}`,
              background: lit ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.03)",
              color: lit ? "#fff" : TEXT_FAINT,
              fontFamily: UI, fontSize: 11,
              transform: lit ? "translateY(-2px)" : "translateY(0)",
              transition: "all 420ms cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            {skill}
          </div>
        );
      })}
      <div style={{ gridColumn: "1 / -1", textAlign: "center", marginTop: 7, fontFamily: SERIF, color: TEXT, fontSize: 18 }}>
        20+ skills, one growth system
      </div>
    </div>
  );
}

/** real-time trends: the radar, with trends lighting up on it as they break */
const RADAR_TRENDS = [
  { t: "GPT-5.6", x: "64%", y: "26%" },
  { t: "Fable 5 ban", x: "28%", y: "60%" },
];

function MockTrends({ active }: MockProps) {
  const step = useLoop(1600, 4, active);
  return (
    <div
      style={{
        position: "relative", width: 172, height: 172, borderRadius: "50%",
        border: `1px solid ${LINE}`, overflow: "hidden",
        background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
      }}
    >
      {[106, 62].map((d) => (
        <span
          key={d}
          style={{
            position: "absolute", left: "50%", top: "50%",
            width: d, height: d, marginLeft: -d / 2, marginTop: -d / 2,
            borderRadius: "50%", border: "1px solid rgba(255,255,255,0.1)",
          }}
        />
      ))}
      <div className="radar-sweep" style={{ position: "absolute", inset: 0, borderRadius: "50%" }} />
      <span
        style={{
          position: "absolute", left: 10, top: 10,
          fontFamily: UI, fontSize: 9.5, color: TEXT_FAINT, letterSpacing: 1.1, textTransform: "uppercase",
        }}
      >
        Live
      </span>
      {RADAR_TRENDS.map((tr, i) => {
        const on = step > i;
        return (
          <span
            key={tr.t}
            style={{ position: "absolute", left: tr.x, top: tr.y, transform: "translate(-50%,-50%)" }}
          >
            <span
              style={{
                display: "flex", alignItems: "center", gap: 6,
                opacity: on ? 1 : 0,
                transform: on ? "scale(1)" : "scale(0.6)",
                transition: "opacity 450ms ease, transform 550ms cubic-bezier(0.34,1.56,0.64,1)",
              }}
            >
              <span
                style={{
                  width: 6, height: 6, borderRadius: "50%", flexShrink: 0,
                  background: "#fff", boxShadow: "0 0 10px rgba(255,255,255,0.9)",
                  animation: on ? "blipPing 2.2s ease-out infinite" : "none",
                }}
              />
              <span
                style={{
                  fontFamily: SERIF, fontStyle: "italic", fontSize: 13.5, color: TEXT, whiteSpace: "nowrap",
                  background: "rgba(10,10,10,0.72)", border: `1px solid ${LINE}`,
                  borderRadius: 100, padding: "3px 10px",
                  backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)",
                }}
              >
                {tr.t}
              </span>
            </span>
          </span>
        );
      })}
    </div>
  );
}

/** viral breakdowns: the post gets scanned, the numbers come out */
function MockBreakdown({ active }: MockProps) {
  const step = useLoop(1350, 6, active);
  const chips = ["Hook 92", "Saves 312 / 1k", "Velocity 4.2k/h"];
  return (
    <div style={{ width: "80%", display: "grid", gap: 12 }}>
      {/* the post under inspection */}
      <div style={{ position: "relative", borderRadius: 14, border: `1px solid ${LINE}`, background: "rgba(255,255,255,0.03)", padding: "12px 14px", overflow: "hidden" }}>
        {step === 1 && (
          <span
            style={{
              position: "absolute", left: 0, right: 0, height: 34, marginTop: -17,
              background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.14), transparent)",
              borderTop: "1px solid rgba(255,255,255,0.25)",
              borderBottom: "1px solid rgba(255,255,255,0.25)",
              animation: "scanOnce 1.15s ease-in-out forwards",
              pointerEvents: "none",
            }}
          />
        )}
        <div style={{ display: "flex", gap: 9, alignItems: "center", marginBottom: 9 }}>
          <span style={{ width: 22, height: 22, borderRadius: "50%", background: "linear-gradient(135deg, hsla(205,60%,65%,0.9), hsla(255,55%,45%,0.9))" }} />
          <div style={{ height: 6, width: "34%", borderRadius: 4, background: "rgba(255,255,255,0.18)" }} />
        </div>
        <div style={{ display: "grid", gap: 6 }}>
          <div style={{ height: 6, width: "92%", borderRadius: 4, background: "rgba(255,255,255,0.13)" }} />
          <div style={{ height: 6, width: "64%", borderRadius: 4, background: "rgba(255,255,255,0.13)" }} />
        </div>
      </div>
      {/* what the scan found */}
      <div style={{ display: "flex", gap: 7, flexWrap: "wrap", justifyContent: "center" }}>
        {chips.map((c, i) => {
          const on = step > i + 1;
          return (
            <span
              key={c}
              style={{
                fontFamily: UI, fontSize: 11, color: TEXT,
                border: `1px solid ${LINE}`, borderRadius: 100, padding: "6px 12px",
                background: "rgba(255,255,255,0.06)",
                opacity: on ? 1 : 0,
                transform: on ? "translateY(0) scale(1)" : "translateY(8px) scale(0.9)",
                transition: "all 450ms cubic-bezier(0.34,1.4,0.64,1)",
              }}
            >
              {c}
            </span>
          );
        })}
      </div>
    </div>
  );
}

/** proactive agent: yoinky texts first */
function MockProactive({ active }: MockProps) {
  const step = useLoop(1650, 4, active);
  return (
    <div style={{ width: "86%", display: "flex", gap: 10, alignItems: "flex-start" }}>
      <YAvatar />
      <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
        {step >= 1 && <Bubble>⚡ “Claude Code” is peaking in your niche right now.</Bubble>}
        {step >= 2 && (
          <Bubble>
            Your angle is ready. Best window: before 6pm.
          </Bubble>
        )}
        {step === 0 && (
          <div style={{ display: "flex", gap: 5, padding: "10px 4px" }}>
            {[0, 1, 2].map((i) => (
              <span key={i} style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(255,255,255,0.6)", animation: `typingDot 1.2s ease-in-out ${i * 0.18}s infinite` }} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/** drafts in your voice: you ask, yoinky delivers */
function MockVoice({ active }: MockProps) {
  const step = useLoop(1400, 5, active);
  return (
    <div style={{ width: "86%", display: "flex", flexDirection: "column", gap: 8 }}>
      {step >= 1 && <Bubble side="right">Draft something about my launch week</Bubble>}
      {step === 2 && (
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <YAvatar size={24} />
          <div style={{ display: "flex", gap: 5, padding: "8px 4px" }}>
            {[0, 1, 2].map((i) => (
              <span key={i} style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(255,255,255,0.6)", animation: `typingDot 1.2s ease-in-out ${i * 0.18}s infinite` }} />
            ))}
          </div>
        </div>
      )}
      {step >= 3 && (
        <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
          <YAvatar size={24} />
          <Bubble>
            Everyone ships the demo. Nobody ships the week after. That’s the part that compounds.
            <div style={{ marginTop: 7 }}>
              <span style={{ fontFamily: UI, fontSize: 9.5, color: TEXT_SOFT, border: `1px solid ${LINE}`, borderRadius: 100, padding: "2px 8px" }}>
                Voice match 96%
              </span>
            </div>
          </Bubble>
        </div>
      )}
    </div>
  );
}

/** scheduling: posts dropping into the right days */
function MockSchedule({ active }: MockProps) {
  const step = useLoop(1350, 5, active);
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const booked = [2, 4];
  return (
    <div style={{ width: "84%", display: "grid", gap: 12 }}>
      <div style={{ display: "flex", gap: 7 }}>
        {days.map((d, i) => {
          const has = booked.includes(i) && step > booked.indexOf(i);
          const confirmed = booked.includes(i) && step >= 3;
          return (
            <div
              key={i}
              style={{
                flex: 1, height: 46, borderRadius: 10,
                border: `1px solid ${confirmed ? "rgba(183,245,205,0.4)" : LINE}`,
                background: confirmed ? "rgba(183,245,205,0.07)" : "rgba(255,255,255,0.03)",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5,
                transition: "all 500ms ease",
              }}
            >
              <span style={{ fontFamily: UI, fontSize: 9.5, color: TEXT_FAINT }}>{d}</span>
              {has && (
                <span
                  style={{
                    width: 12, height: 12, borderRadius: 4,
                    background: confirmed ? "#7BE2A0" : "#fff",
                    animation: "msgIn 450ms cubic-bezier(0.34,1.56,0.64,1) both",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
      <div style={{ textAlign: "center", fontFamily: UI, fontSize: 11, color: TEXT_SOFT, opacity: step >= 3 ? 1 : 0.5, transition: "opacity 400ms ease" }}>
        {step >= 3 ? "Queued for the hours your audience is awake" : "Finding the right hours"}
      </div>
    </div>
  );
}

/** auto-agent: flip the switch, yoinky does the rest */
const AUTO_ROWS = ["Analyzing trending posts", "Drafting in your voice", "Scheduled · Tue 6:00 PM"];

function MockAuto({ active }: MockProps) {
  const step = useLoop(1150, 7, active);
  const on = step >= 1;
  const shrunk = step >= 2;
  return (
    <div style={{ width: "80%", display: "grid", gap: 12, justifyItems: "center" }}>
      {/* the switch */}
      <span
        style={{
          width: 62, height: 34, borderRadius: 100, position: "relative", flexShrink: 0,
          background: on ? "rgba(123,226,160,0.22)" : "rgba(255,255,255,0.1)",
          border: `1px solid ${on ? "rgba(123,226,160,0.5)" : LINE}`,
          boxShadow: on ? "0 0 22px rgba(123,226,160,0.18)" : "none",
          transform: shrunk ? "scale(0.6)" : "scale(1)",
          opacity: shrunk ? 0.7 : 1,
          transition: "all 600ms cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <span
          style={{
            position: "absolute", top: 3, left: on ? 32 : 3,
            width: 26, height: 26, borderRadius: "50%",
            background: on ? "#7BE2A0" : "rgba(255,255,255,0.55)",
            boxShadow: "0 2px 10px rgba(0,0,0,0.45)",
            transition: "all 600ms cubic-bezier(0.22,1,0.36,1)",
          }}
        />
      </span>

      {/* what it does once it's on */}
      <div style={{ display: "grid", gap: 8, width: "100%", minHeight: 124 }}>
        {AUTO_ROWS.map((r, i) => {
          const shown = step >= i + 3;
          const done = step >= i + 4;
          return (
            <div
              key={r}
              style={{
                display: "flex", alignItems: "center", gap: 9,
                borderRadius: 11, padding: "9px 12px",
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${done ? "rgba(123,226,160,0.3)" : "rgba(255,255,255,0.08)"}`,
                opacity: shown ? 1 : 0,
                transform: shown ? "translateY(0)" : "translateY(10px)",
                transition: "all 500ms cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              {done ? (
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                  <path d="M3 8.5L6.5 12L13 4.5" stroke="#7BE2A0" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <span style={{ display: "flex", gap: 3, flexShrink: 0 }}>
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      style={{
                        width: 3.5, height: 3.5, borderRadius: "50%",
                        background: "rgba(255,255,255,0.65)",
                        animation: `typingDot 1.1s ease-in-out ${d * 0.16}s infinite`,
                      }}
                    />
                  ))}
                </span>
              )}
              <span style={{ fontFamily: UI, fontSize: 12, color: done ? TEXT : TEXT_SOFT, transition: "color 400ms ease" }}>
                {r}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── the features ────────────────────────────────────────── */

const FEATURES: { mock: React.ComponentType<MockProps>; title: string; body: string }[] = [
  {
    mock: MockMemory,
    title: "Company knowledge",
    body: "Founder interviews and customer evidence become traceable insights, claims, proof and stories.",
  },
  {
    mock: MockViral,
    title: "Narrative architecture",
    body: "Build the category thesis, point of view, promise and territories your company can repeat with conviction.",
  },
  {
    mock: MockRadar,
    title: "Buyer radar",
    body: "People asking for exactly what you do, flagged the hour they post.",
  },
  {
    mock: MockTrends,
    title: "Real-time trends",
    body: "Same-day trends, volume-verified, with the driving post attached.",
  },
  {
    mock: MockBreakdown,
    title: "Grounded briefs",
    body: "Every asset starts with an audience, belief shift, approved insight, proof and strategic job.",
  },
  {
    mock: MockProactive,
    title: "Editorial governance",
    body: "Claims, confidential sources and narrative alignment are checked before content leaves the workspace.",
  },
  {
    mock: MockVoice,
    title: "Drafts in your voice",
    body: "Every moment becomes a draft that reads like you, never like AI.",
  },
  {
    mock: MockSchedule,
    title: "Scheduling",
    body: "Your X and LinkedIn posts, queued from the same chat at the hours that land.",
  },
  {
    mock: MockAuto,
    title: "Auto-agent mode",
    body: "Flip the switch and Yoinky posts for you, checked against your positions.",
  },
  {
    mock: MockSkills,
    title: "Built for growth",
    body: "More than 20 specialist skills work together to find stronger ideas and give every post a better chance to travel.",
  },
];

const COPIES = 3; // triple-render for the seamless infinite loop

/* ── the section ─────────────────────────────────────────── */

export default function FeatureCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const setWidth = useRef(0);
  const { ref: viewRef, inView } = useInView<HTMLDivElement>(0.2);

  const measure = () => {
    const el = trackRef.current;
    if (!el) return;
    const first = el.children[0] as HTMLElement | undefined;
    const second = el.children[FEATURES.length] as HTMLElement | undefined;
    if (first && second) setWidth.current = second.offsetLeft - first.offsetLeft;
  };

  // start centered on the middle copy so both directions can scroll forever
  useLayoutEffect(() => {
    measure();
    const el = trackRef.current;
    if (el && setWidth.current) el.scrollLeft = setWidth.current;
  }, []);

  useEffect(() => {
    const onResize = () => {
      measure();
      const el = trackRef.current;
      if (el && setWidth.current) el.scrollLeft = setWidth.current;
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // teleport back by one copy when crossing a boundary (invisible: copies are identical)
  const onScroll = () => {
    const el = trackRef.current;
    const sw = setWidth.current;
    if (!el || !sw) return;
    if (el.scrollLeft >= sw * 2) el.scrollLeft -= sw;
    else if (el.scrollLeft <= 0) el.scrollLeft += sw;
  };

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("article");
    const w = card ? card.getBoundingClientRect().width + 20 : 420;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  const arrowStyle: React.CSSProperties = {
    width: 44, height: 44, borderRadius: "50%", flexShrink: 0,
    display: "flex", alignItems: "center", justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.05)",
    cursor: "pointer", border: "none",
  };

  return (
    <section style={{ background: "transparent", position: "relative", overflow: "hidden" }}>
      <div style={{ paddingTop: "clamp(80px,11vw,140px)", paddingBottom: "clamp(40px,5vw,64px)" }}>
        {/* header: centered heading, arrows below */}
        <div className="px-6 md:px-12" style={{ maxWidth: 1180, margin: "0 auto" }}>
          <SectionHead
            align="center"
            kicker="The full feature set"
            title="Everything your narrative needs,"
            accent="in one place."
            sub="Capture what the company knows, decide what it stands for, and turn both into traceable work across X and LinkedIn."
          />
          <Reveal delay={200}>
            <div className="flex justify-center md:justify-end" style={{ gap: 10, marginTop: 20 }}>
              <button aria-label="Previous features" onClick={() => scroll(-1)} className="liquid-glass" style={arrowStyle}>
                <FiChevronLeft size={18} color={TEXT} />
              </button>
              <button aria-label="Next features" onClick={() => scroll(1)} className="liquid-glass" style={arrowStyle}>
                <FiChevronRight size={18} color={TEXT} />
              </button>
            </div>
          </Reveal>
        </div>

        {/* the infinite track */}
        <Reveal delay={150}>
          <div ref={viewRef}>
            <div
              ref={trackRef}
              onScroll={onScroll}
              className="no-scrollbar pl-6 md:pl-[max(3rem,calc((100vw-1180px)/2+3rem))]"
              style={{
                display: "flex", gap: 20,
                overflowX: "auto",
                scrollSnapType: "x mandatory",
                marginTop: "clamp(40px,5vw,56px)",
                paddingRight: 24,
                paddingBottom: 8,
                maskImage: "linear-gradient(90deg, #000 93%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(90deg, #000 93%, transparent 100%)",
              }}
            >
              {Array.from({ length: COPIES }).flatMap((_, copy) =>
                FEATURES.map((f, i) => {
                  const Mock = f.mock;
                  return (
                    <article
                      key={`${f.title}-${copy}`}
                      style={{ flex: "0 0 auto", width: "min(400px, 78vw)", scrollSnapAlign: "start" }}
                    >
                      {/* visual */}
                      <div
                        style={{
                          position: "relative",
                          height: 264,
                          borderRadius: 22,
                          border: `1px solid ${LINE}`,
                          background:
                            "radial-gradient(120% 120% at 80% 0%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.015) 45%, rgba(0,0,0,0) 100%)",
                          overflow: "hidden",
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}
                      >
                        <Mock active={inView} />
                        {/* travelling sheen */}
                        <div
                          aria-hidden
                          style={{
                            position: "absolute", inset: 0, pointerEvents: "none",
                            background:
                              "linear-gradient(115deg, transparent 32%, rgba(255,255,255,0.05) 45%, rgba(255,255,255,0.09) 50%, rgba(255,255,255,0.05) 55%, transparent 68%)",
                            backgroundSize: "260% 100%",
                            animation: `sheenSweep 7s ease-in-out ${i * 0.75}s infinite`,
                          }}
                        />
                      </div>
                      {/* caption */}
                      <h3
                        style={{
                          fontFamily: SERIF, fontWeight: 400, letterSpacing: "-0.01em",
                          fontSize: 23, color: TEXT,
                          margin: "18px 0 0",
                        }}
                      >
                        {f.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: UI, fontSize: 14, lineHeight: 1.6, color: TEXT_SOFT,
                          margin: "8px 0 0", maxWidth: 320,
                        }}
                      >
                        {f.body}
                      </p>
                    </article>
                  );
                })
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
