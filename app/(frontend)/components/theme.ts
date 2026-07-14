// Yoinky brand tokens: cinematic dark relaunch — matches the video hero everywhere else on the site
export const BG = "#0A0A0A";
export const TEXT = "#FFFFFF";
export const TEXT_SOFT = "rgba(255,255,255,0.7)";
export const TEXT_FAINT = "rgba(255,255,255,0.45)";
export const LINE = "rgba(255,255,255,0.14)";
export const SURFACE = "rgba(255,255,255,0.05)";

export const SERIF = "var(--font-instrument-serif), 'Instrument Serif', serif";
export const UI = "system-ui, sans-serif";

// telegram.me, not t.me: t.me is DNS-blocked (NXDOMAIN) on several ISPs
// (notably in India), so the bot link broke for a large share of visitors.
// telegram.me is Telegram's official alternate domain — same destination,
// same servers (149.154.167.99) — and isn't caught by those blocks.
export const TELEGRAM_URL = "https://telegram.me/yoinkyybot";
