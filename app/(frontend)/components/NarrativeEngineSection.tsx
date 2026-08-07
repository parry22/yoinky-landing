import { FiArrowRight, FiBookOpen, FiCheckCircle, FiFileText, FiLayers, FiTrendingUp } from "react-icons/fi";
import { LINE, TEXT, TEXT_FAINT, TEXT_SOFT, UI } from "./theme";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

const STEPS = [
  { icon: FiFileText, label: "Capture", copy: "Founder interviews, customer calls and market evidence." },
  { icon: FiLayers, label: "Structure", copy: "Insights, claims, proof and stories with source lineage." },
  { icon: FiBookOpen, label: "Narrative", copy: "One governed point of view and clear editorial territories." },
  { icon: FiCheckCircle, label: "Produce", copy: "Grounded briefs and channel-native founder content." },
  { icon: FiTrendingUp, label: "Learn", copy: "Performance feeds better narrative decisions." },
];

export default function NarrativeEngineSection() {
  return (
    <section style={{ position: "relative", padding: "clamp(80px,11vw,140px) 24px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <SectionHead
          align="center"
          kicker="The operating system"
          title="From company knowledge"
          accent="to market authority."
          sub="Yoinky connects the work your company is already doing to the narrative your market actually remembers."
        />
        <Reveal delay={130}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(175px, 1fr))",
              gap: 10,
              marginTop: "clamp(42px,6vw,68px)",
            }}
          >
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.label} style={{ position: "relative" }}>
                  <article
                    style={{
                      minHeight: 210,
                      height: "100%",
                      padding: 20,
                      border: `1px solid ${LINE}`,
                      borderRadius: 22,
                      background: index === 2
                        ? "radial-gradient(120% 110% at 50% 0%, rgba(255,255,255,0.11), rgba(255,255,255,0.025) 60%)"
                        : "rgba(255,255,255,0.025)",
                    }}
                  >
                    <div
                      className="liquid-glass"
                      style={{
                        width: 38,
                        height: 38,
                        display: "grid",
                        placeItems: "center",
                        borderRadius: 12,
                        background: "rgba(255,255,255,0.06)",
                      }}
                    >
                      <Icon size={17} color={TEXT} />
                    </div>
                    <span style={{ display: "block", marginTop: 30, fontFamily: UI, color: TEXT_FAINT, fontSize: 10.5 }}>
                      0{index + 1}
                    </span>
                    <h3 style={{ margin: "6px 0 0", fontFamily: UI, color: TEXT, fontSize: 16, fontWeight: 520 }}>
                      {step.label}
                    </h3>
                    <p style={{ margin: "8px 0 0", fontFamily: UI, color: TEXT_SOFT, fontSize: 12.5, lineHeight: 1.55 }}>
                      {step.copy}
                    </p>
                  </article>
                  {index < STEPS.length - 1 && (
                    <span
                      aria-hidden
                      className="hidden lg:grid"
                      style={{
                        position: "absolute",
                        zIndex: 2,
                        top: "50%",
                        right: -15,
                        width: 28,
                        height: 28,
                        placeItems: "center",
                        border: `1px solid ${LINE}`,
                        borderRadius: "50%",
                        background: "#0A0A0A",
                      }}
                    >
                      <FiArrowRight size={12} color={TEXT_FAINT} />
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

