"use client";

const PINK = "#F85BA9";
const DM = "DM Sans, sans-serif";

const G: React.CSSProperties = {
  background: "rgba(12, 12, 16, 0.30)",
  backdropFilter: "blur(28px)",
  WebkitBackdropFilter: "blur(28px)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: 18,
  padding: "clamp(12px,2vw,24px)",
};

const WRAP: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "clamp(12px,3vw,40px)",
};

const T = {
  title: { color: "white",                 fontSize: "clamp(14px,3.2vw,20px)", fontFamily: DM, fontWeight: 500, letterSpacing: "-0.3px", margin: 0 } as React.CSSProperties,
  body:  { color: "rgba(255,255,255,0.62)", fontSize: "clamp(11px,2.2vw,13px)", fontFamily: DM, lineHeight: 1.6,  margin: 0 } as React.CSSProperties,
  label: { color: "rgba(255,255,255,0.28)", fontSize: "clamp(9px,1.8vw,10px)",  fontFamily: DM, letterSpacing: "0.09em" } as React.CSSProperties,
  sub:   { color: "rgba(255,255,255,0.5)",  fontSize: "clamp(10px,2vw,12px)",   fontFamily: DM } as React.CSSProperties,
};

function FadeCard({ children }: { children: React.ReactNode }) {
  return (
    <div style={WRAP}>
      <div style={{ ...G, width: "100%", maxWidth: 420, opacity: 0, animation: "fadeIn 0.35s ease 0.04s forwards" }}>
        {children}
      </div>
    </div>
  );
}

// ─── Capture ───────────────────────────────────────────────────────────────
function CaptureVisual() {
  const rows = [
    { app: "Figma",  dot: "#A259FF", event: "Design system update detected" },
    { app: "Notion", dot: "#E8E8E8", event: "3 new notes added to workspace" },
    { app: "Slack",  dot: "#E01E5A", event: "Project discussion thread flagged" },
  ];
  return (
    <FadeCard>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "clamp(10px,2vw,16px)" }}>
        <p style={T.title}>Capturing context</p>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#00C896", boxShadow: "0 0 5px #00C896", display: "inline-block" }} />
          <span style={T.sub}>Active</span>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "clamp(4px,1vw,6px)" }}>
        {rows.map(r => (
          <div key={r.app} style={{ display: "flex", alignItems: "center", gap: "clamp(6px,1.5vw,10px)", padding: "clamp(6px,1.2vw,9px) clamp(8px,1.5vw,12px)", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 8 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: r.dot, flexShrink: 0 }} />
            <span style={{ ...T.sub, width: "clamp(34px,8vw,46px)", flexShrink: 0, color: "rgba(255,255,255,0.4)" }}>{r.app}</span>
            <span style={{ ...T.sub, color: "rgba(255,255,255,0.65)" }}>{r.event}</span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "clamp(10px,2vw,14px)", paddingTop: "clamp(8px,1.5vw,12px)", borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", justifyContent: "space-between" }}>
        <span style={T.label}><span style={{ color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>18</span> OBSERVATIONS</span>
        <span style={T.label}>LAST CAPTURED <span style={{ color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>1M AGO</span></span>
      </div>
    </FadeCard>
  );
}

// ─── Remember ──────────────────────────────────────────────────────────────
function RememberVisual() {
  const mems = [
    { tag: "Design Decision",  text: "Chose Verona for headings: more editorial, less techy",        time: "2h" },
    { tag: "Workflow Pattern",  text: "Always writes Notion brief before opening Figma",               time: "1d" },
    { tag: "Project Context",   text: "Landing page v2, targeting indie founders & early-stage PMs", time: "3d" },
  ];
  return (
    <FadeCard>
      <p style={{ ...T.label, marginBottom: "clamp(10px,2vw,14px)" }}>MEMORY LAYER</p>
      {mems.map((m, i) => (
        <div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 8, padding: "clamp(8px,1.5vw,10px) clamp(10px,2vw,14px)", marginBottom: i < mems.length - 1 ? "clamp(5px,1vw,8px)" : 0 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "clamp(3px,0.6vw,5px)" }}>
            <span style={{ color: PINK, fontSize: "clamp(9px,1.8vw,10px)", fontFamily: DM, fontWeight: 600 }}>{m.tag}</span>
            <span style={T.label}>{m.time}</span>
          </div>
          <p style={{ ...T.body, fontSize: "clamp(10px,2vw,12px)" }}>{m.text}</p>
        </div>
      ))}
    </FadeCard>
  );
}

// ─── Understand ────────────────────────────────────────────────────────────
function UnderstandVisual() {
  const steps = ["Write brief", "Prototype", "Review", "Ship"];
  return (
    <FadeCard>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: `${PINK}22`, border: `1px solid ${PINK}38`, borderRadius: 100, padding: "clamp(3px,0.6vw,4px) clamp(8px,1.5vw,12px)", marginBottom: "clamp(10px,2vw,16px)" }}>
        <span style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: PINK, flexShrink: 0 }} />
        <span style={{ color: PINK, fontSize: "clamp(9px,1.8vw,11px)", fontFamily: DM, fontWeight: 600 }}>Pattern detected · 94% confidence</span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "clamp(3px,0.8vw,5px)", marginBottom: "clamp(12px,2.5vw,18px)", flexWrap: "wrap" }}>
        {steps.map((s, i) => (
          <div key={s} style={{ display: "flex", alignItems: "center", gap: "clamp(3px,0.8vw,5px)" }}>
            <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 6, padding: "clamp(4px,0.8vw,6px) clamp(8px,1.5vw,12px)", color: "rgba(255,255,255,0.6)", fontSize: "clamp(10px,2vw,12px)", fontFamily: DM }}>
              {s}
            </div>
            {i < steps.length - 1 && <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "clamp(10px,2vw,12px)" }}>→</span>}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", paddingTop: "clamp(10px,2vw,14px)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        {[["SESSIONS","16"],["PATTERNS","23"],["ACCURACY","94%"]].map(([l, v], i) => (
          <div key={l} style={{ flex: 1, textAlign: i === 0 ? "left" : i === 2 ? "right" : "center" }}>
            <p style={{ ...T.label, marginBottom: "clamp(2px,0.4vw,3px)" }}>{l}</p>
            <p style={{ color: "white", fontSize: "clamp(16px,3.5vw,22px)", fontFamily: DM, fontWeight: 600, margin: 0 }}>{v}</p>
          </div>
        ))}
      </div>
    </FadeCard>
  );
}

// ─── Act ───────────────────────────────────────────────────────────────────
function ActVisual() {
  return (
    <FadeCard>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "clamp(8px,1.5vw,12px)" }}>
        <p style={T.title}>Before you asked</p>
        <span style={{ color: "rgba(255,255,255,0.28)", fontSize: "clamp(16px,3vw,20px)", lineHeight: 1, cursor: "pointer", marginTop: 1 }}>×</span>
      </div>

      <p style={{ ...T.body, marginBottom: "clamp(14px,3vw,22px)" }}>
        It&apos;s Thursday. I&apos;ve drafted your weekly update based on this week&apos;s activity across Notion, Figma, and Linear. Want to review it?
      </p>

      <div style={{ display: "flex", gap: "clamp(6px,1.5vw,10px)", flexWrap: "wrap" }}>
        <button style={{ display: "inline-flex", alignItems: "center", gap: 6, backgroundColor: "white", color: "#111", border: "none", borderRadius: 100, padding: "clamp(7px,1.5vw,10px) clamp(14px,2.5vw,20px)", fontSize: "clamp(11px,2.2vw,13px)", fontFamily: DM, fontWeight: 500, cursor: "pointer" }}>
          🚀 Review draft
        </button>
        <button style={{ backgroundColor: "transparent", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 100, padding: "clamp(7px,1.5vw,10px) clamp(14px,2.5vw,20px)", fontSize: "clamp(11px,2.2vw,13px)", fontFamily: DM, cursor: "pointer" }}>
          Maybe later
        </button>
      </div>
    </FadeCard>
  );
}

const VISUALS = [CaptureVisual, RememberVisual, UnderstandVisual, ActVisual];

export default function HowItWorksVisual({ active }: { active: number }) {
  const Visual = VISUALS[active];
  return (
    <div key={active} style={{ position: "absolute", inset: 0 }}>
      <Visual />
    </div>
  );
}
