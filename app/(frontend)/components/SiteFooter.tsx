import { TEXT, TEXT_SOFT, UI } from "./theme";
import AppButton from "./AppButton";

export default function SiteFooter() {
  // No borderTop here on purpose: PersonasSection (the section directly above)
  // already closes itself with a divider, so adding one here drew a double line.
  return (
    <footer className="px-6 md:px-12" style={{ marginTop: "clamp(56px,8vw,96px)" }}>
      <div
        className="flex flex-col md:flex-row md:items-center md:justify-between"
        style={{ padding: "clamp(20px,3vw,28px) 0", gap: 16 }}
      >
        <p style={{ fontFamily: UI, fontSize: 13, color: TEXT_SOFT, margin: 0, letterSpacing: 0 }}>
          © 2026 Yoinky. All rights reserved.
        </p>
        <div className="flex items-center" style={{ gap: 22 }}>
          <a href="/privacy" style={{ fontFamily: UI, fontSize: 13, fontWeight: 500, color: TEXT, textDecoration: "none", letterSpacing: 0 }}>
            Privacy
          </a>
          <a href="/terms" style={{ fontFamily: UI, fontSize: 13, fontWeight: 500, color: TEXT, textDecoration: "none", letterSpacing: 0 }}>
            Terms
          </a>
          <AppButton size="sm" />
        </div>
      </div>
    </footer>
  );
}
