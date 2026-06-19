"use client";

import { FaInstagram, FaDiscord, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";
import {
  FiFileText, FiMessageSquare, FiEye, FiGitPullRequest,
  FiServer, FiSearch, FiMap, FiShare2, FiGitCommit,
  FiCalendar, FiBarChart2, FiList, FiLayout, FiCode, FiDatabase,
  FiUsers, FiMail, FiClipboard, FiTarget, FiTrendingUp,
  FiBook, FiCpu, FiPackage, FiSliders, FiActivity,
} from "react-icons/fi";
import type { IconType } from "react-icons";

const PINK = "#F85BA9";

const TICKER_ITEMS: { Icon: IconType; color: string; text: string }[] = [
  { Icon: FiFileText,       color: PINK,      text: "Draft investor update" },
  { Icon: FiMessageSquare,  color: "#6366F1", text: "Summarize user feedback" },
  { Icon: FiEye,            color: "#F97316", text: "Brief a design review" },
  { Icon: FiGitPullRequest, color: "#10B981", text: "Review PR diffs" },
  { Icon: FiServer,         color: "#0EA5E9", text: "Draft technical specs" },
  { Icon: FiSearch,         color: PINK,      text: "Research competitors" },
  { Icon: FiMap,            color: "#6366F1", text: "Prioritize your roadmap" },
  { Icon: FiShare2,         color: "#F97316", text: "Prep design handoffs" },
  { Icon: FiGitCommit,      color: "#10B981", text: "Write commit messages" },
  { Icon: FiCalendar,       color: "#0EA5E9", text: "Plan your sprint" },
  { Icon: FiBarChart2,      color: PINK,      text: "Write your pitch deck" },
  { Icon: FiList,           color: "#6366F1", text: "Organize sprint tickets" },
  { Icon: FiLayout,         color: "#F97316", text: "Document UI decisions" },
  { Icon: FiCode,           color: "#10B981", text: "Summarize release notes" },
  { Icon: FiDatabase,       color: "#0EA5E9", text: "Map your architecture" },
];

const FOOTER_LINKS = [
  {
    heading: "Product",
    links: [
      { label: "How it Works", href: "/#how-it-works" },
      { label: "Features", href: "/#features" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Community", href: "https://discord.gg/JF3bMgKzu" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms of service", href: "/terms" },
    ],
  },
];

const SOCIALS = [
  { Icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/meetyoinky?igsh=MTU0ZnE4b3loYmlkcQ%3D%3D&utm_source=qr" },
  { Icon: FaXTwitter,  label: "X",         href: "https://x.com/meetyoinky?s=11" },
  { Icon: FaDiscord,   label: "Discord",   href: "https://discord.gg/JF3bMgKzu" },
  { Icon: SiSubstack,  label: "Substack",  href: "https://open.substack.com/pub/meetparry" },
  { Icon: FaLinkedin,  label: "LinkedIn",  href: "https://www.linkedin.com/company/yoinky/" },
];

const TICKER_ITEMS_2: { Icon: IconType; color: string; text: string }[] = [
  { Icon: FiUsers,      color: PINK,      text: "Prepare your board deck" },
  { Icon: FiMail,       color: "#6366F1", text: "Draft a cold outreach" },
  { Icon: FiClipboard,  color: "#F97316", text: "Write your project brief" },
  { Icon: FiTarget,     color: "#10B981", text: "Define your OKRs" },
  { Icon: FiTrendingUp, color: "#0EA5E9", text: "Analyze your metrics" },
  { Icon: FiBook,       color: PINK,      text: "Outline a blog post" },
  { Icon: FiCpu,        color: "#6366F1", text: "Debug error traces" },
  { Icon: FiPackage,    color: "#F97316", text: "Plan a product launch" },
  { Icon: FiSliders,    color: "#10B981", text: "Tune your API config" },
  { Icon: FiActivity,   color: "#0EA5E9", text: "Recap your week" },
  { Icon: FiUsers,      color: PINK,      text: "Write job descriptions" },
  { Icon: FiMail,       color: "#6366F1", text: "Reply to stakeholders" },
  { Icon: FiClipboard,  color: "#F97316", text: "Prep for your 1:1s" },
  { Icon: FiTarget,     color: "#10B981", text: "Write your changelog" },
  { Icon: FiTrendingUp, color: "#0EA5E9", text: "Research a new market" },
];

const DOUBLED   = [...TICKER_ITEMS,   ...TICKER_ITEMS];
const DOUBLED_2 = [...TICKER_ITEMS_2, ...TICKER_ITEMS_2];

function TickerRow({ items, className }: { items: typeof DOUBLED; className: string }) {
  return (
    <div
      className={className}
      style={{ display: "inline-flex", alignItems: "center", whiteSpace: "nowrap" }}
    >
      {items.map((item, i) => (
        <div
          key={i}
          style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "0 28px", flexShrink: 0 }}
        >
          <span
            style={{
              width: 26,
              height: 26,
              borderRadius: 100,
              backgroundColor: `${item.color}20`,
              border: `1px solid ${item.color}35`,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <item.Icon size={13} color={item.color} />
          </span>
          <span className="dm-sans" style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", letterSpacing: "-0.2px" }}>
            {item.text}
          </span>
          <span style={{ color: "rgba(255,255,255,0.1)", marginLeft: 8, fontSize: 18 }}>|</span>
        </div>
      ))}
    </div>
  );
}

export default function CTAFooter() {
  return (
    <div style={{ backgroundColor: "#0C0C0C" }}>
      <style>{`
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes ticker-scroll-reverse {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .ticker-track {
          animation: ticker-scroll 55s linear infinite;
        }
        .ticker-track-reverse {
          animation: ticker-scroll-reverse 55s linear infinite;
        }
        .ticker-track:hover,
        .ticker-track-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* ── CTA ── */}
      <div
        className="text-center"
        style={{ padding: "clamp(64px, 10vw, 120px) clamp(24px, 8vw, 120px) clamp(40px, 6vw, 72px)" }}
      >
        <h2
          className="text-[42px] md:text-[72px] leading-[1.05] mb-6 md:mb-8"
          style={{ color: "white" }}
        >
          The proactive AI
          <br className="hidden md:block" />
          {" "}<span style={{ color: "rgba(255,255,255,0.28)" }}>your Mac deserves.</span>
        </h2>
        <p
          className="dm-sans text-[15px] md:text-[18px] leading-relaxed mb-8 md:mb-10 mx-auto"
          style={{ color: "rgba(255,255,255,0.4)", maxWidth: 480 }}
        >
          Stop prompting. Start flowing. Yoinky works before you have to ask.
        </p>
        <a
          href="https://tally.so/r/Ek6zbo"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-block dm-sans text-[15px] md:text-[16px] font-medium px-8 py-3.5 rounded-full overflow-hidden"
          style={{ backgroundColor: PINK, color: "white" }}
        >
          <span className="relative block overflow-hidden">
            <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
              Apply for early access
            </span>
            <span className="absolute inset-0 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 flex items-center justify-center">
              Apply for early access
            </span>
          </span>
        </a>
      </div>

      {/* ── Ticker strips ── */}
      <div
        style={{
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: 0,
        }}
      >
        {/* Row 1 — left to right */}
        <div style={{ overflow: "hidden", padding: "14px 0" }}>
          <TickerRow items={DOUBLED} className="ticker-track" />
        </div>
        {/* Row 2 — right to left */}
        <div style={{ overflow: "hidden", padding: "10px 0" }}>
          <TickerRow items={DOUBLED_2} className="ticker-track-reverse" />
        </div>
      </div>

      {/* ── Footer ── */}
      <div
        className="px-6 md:px-16"
        style={{}}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* Links grid */}
          <div
            className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-6"
            style={{ padding: "48px 0 40px" }}
          >
            {FOOTER_LINKS.map(col => (
              <div key={col.heading}>
                <p
                  className="dm-sans text-[11px] font-semibold mb-4"
                  style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}
                >
                  {col.heading.toUpperCase()}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map(link => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="dm-sans text-[13px] transition-colors duration-150"
                        style={{ color: "rgba(255,255,255,0.45)" }}
                        onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "white"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)"; }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 24 }}
          >
            <p
              className="dm-sans text-[12px]"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              © 2026 Yoinky. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              {SOCIALS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-150"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "white"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.3)"; }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
