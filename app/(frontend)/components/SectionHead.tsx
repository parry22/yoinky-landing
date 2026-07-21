import { SERIF, TEXT, TEXT_SOFT, UI } from "./theme";
import Reveal from "./Reveal";

/**
 * Consistent section opener: liquid-glass kicker pill (same shape as the
 * hero badge), serif headline with an italic accent, soft subtext.
 */
export default function SectionHead({
  kicker,
  title,
  accent,
  sub,
  align = "center",
}: {
  kicker: string;
  /** headline text before the italic accent word/phrase */
  title: string;
  /** italic serif accent, rendered right after `title` */
  accent: string;
  sub?: string;
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <div
      style={{
        maxWidth: 760,
        margin: centered ? "0 auto" : undefined,
        textAlign: centered ? "center" : "left",
      }}
    >
      <Reveal>
        <div
          className="liquid-glass inline-flex items-center rounded-full"
          style={{ padding: "8px 18px", backgroundColor: "rgba(255,255,255,0.05)" }}
        >
          <span style={{ fontFamily: UI, fontSize: 13, color: TEXT_SOFT, letterSpacing: 0.2 }}>
            {kicker}
          </span>
        </div>
      </Reveal>
      <Reveal delay={90}>
        <h2
          style={{
            fontFamily: SERIF,
            fontWeight: 400,
            fontSize: "clamp(34px,5vw,58px)",
            lineHeight: 1.08,
            letterSpacing: "-0.01em",
            color: TEXT,
            margin: "clamp(20px,2.6vw,28px) 0 0",
          }}
        >
          {title} <em style={{ fontFamily: SERIF, fontStyle: "normal" }}>{accent}</em>
        </h2>
      </Reveal>
      {sub ? (
        <Reveal delay={180}>
          <p
            style={{
              fontFamily: UI,
              fontSize: "clamp(15px,1.6vw,17px)",
              lineHeight: 1.65,
              color: TEXT_SOFT,
              margin: centered ? "clamp(16px,2vw,20px) auto 0" : "clamp(16px,2vw,20px) 0 0",
              maxWidth: 560,
              letterSpacing: 0,
            }}
          >
            {sub}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
