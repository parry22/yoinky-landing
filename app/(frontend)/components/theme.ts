// Yoinky brand tokens: cinematic dark relaunch, matched to the video hero.
export const BG = "#0A0A0A";
export const TEXT = "#FFFFFF";
export const TEXT_SOFT = "rgba(255,255,255,0.7)";
export const TEXT_FAINT = "rgba(255,255,255,0.45)";
export const LINE = "rgba(255,255,255,0.14)";
export const SURFACE = "rgba(255,255,255,0.05)";

export const SERIF = "var(--font-denton), 'Denton', serif";
export const UI = "var(--font-delight), 'Delight', sans-serif";

// telegram.me, not t.me: t.me is DNS-blocked (NXDOMAIN) on several ISPs
// (notably in India), so the bot link broke for a large share of visitors.
// telegram.me is Telegram's official alternate domain with the same destination
// and servers (149.154.167.99), and is not caught by those blocks.
export const TELEGRAM_URL = "https://telegram.me/yoinkyybot";

// Root of the web app redirects to /login (Google or X) or /app if already signed in.
export const APP_URL = "https://app.meetyoinky.com";

// Every "go to the app" CTA on the site lands on the app root, which sends a
// new visitor to Clerk sign-in and an already-signed-in visitor straight to /app.
export const APP_SIGNIN_URL = APP_URL;

// Plan CTAs deep-link to Clerk sign-up, which starts the 7-day free trial. The
// `?plan=` is forwarded into the app after sign-up so the chosen plan is recorded
// on the trial and the in-app upgrade is preselected.
export function signUpUrl(plan?: string): string {
  return plan ? `${APP_URL}/sign-up?plan=${encodeURIComponent(plan)}` : `${APP_URL}/sign-up`;
}
