"use client";

import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { SERIF, UI, TELEGRAM_URL } from "./theme";
import TelegramButton from "./TelegramButton";

const NAV_LINKS = [
  { label: "Blog", href: "/blog" },
  { label: "Privacy", href: "/privacy" },
];

// Placeholder footage — swap for Yoinky-shot b-roll before launch.
const PERSONAS = [
  {
    key: "founders",
    label: "Founders",
    video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_081127_0992a171-d3c6-4978-8213-0ec5df8b6d63.mp4",
    heading: ["Your build in public", "went quiet."],
    subtext: "Somewhere between shipping and surviving, the updates stopped. Yoinky pulls the story back out of your head and keeps it going, even on the weeks you can't.",
    dark: false,
  },
  {
    key: "creators",
    label: "Creators",
    video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_092026_dd05b805-ea0f-40b2-8c52-332b88502592.mp4",
    heading: ["You already had", "the idea."],
    subtext: "It's buried somewhere in your last six months of posts. Yoinky digs it out and brings it back right when it matters.",
    dark: false,
  },
  {
    key: "consultants",
    label: "Consultants",
    video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_081042_df7202bf-bd80-4b2b-bbc6-1f09ba2870e9.mp4",
    heading: ["Nobody can find", "your expertise."],
    subtext: "You solve hard problems for a living and it barely shows up anywhere. Yoinky turns what you already know into work people can actually see.",
    dark: true,
  },
  {
    key: "everyone",
    label: "Everyone",
    video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_080959_4cac5234-3573-464e-a5b7-76b94b8a7d61.mp4",
    heading: ["You don't really have", "a brand online."],
    subtext: "Just scattered posts, no throughline anyone would recognize as you. Yoinky finds the version of you that's already there and helps you actually show it.",
    dark: false,
  },
];

const STATS = ["Storytelling Agent", "Find Trends Fast", "Repurpose across X & LinkedIn", "Guest blogs & Podcasts Reachouts"];

const DARK = "#182C41";
const TRANSITION_MS = 1000;

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const cooldownRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => () => { if (cooldownRef.current) clearTimeout(cooldownRef.current); }, []);

  const selectPersona = (index: number) => {
    if (index === active || isTransitioning) return;
    setActive(index);
    setIsTransitioning(true);
    cooldownRef.current = setTimeout(() => setIsTransitioning(false), TRANSITION_MS);
  };

  const persona = PERSONAS[active];
  const contentColor = persona.dark ? DARK : "#FFFFFF";
  // Subtle lift so text stays legible over whatever the video is doing underneath.
  const textGlow = persona.dark
    ? "0 1px 10px rgba(255,255,255,0.4)"
    : "0 1px 12px rgba(0,0,0,0.35)";
  const glassTint = persona.dark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.24)";

  return (
    <section className="relative w-full h-dvh overflow-hidden bg-black">

      {/* ── Background video layer ── */}
      {PERSONAS.map((p, i) => (
        <video
          key={p.key}
          src={p.video}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: i === active ? 1 : 0, transition: `opacity ${TRANSITION_MS}ms ease-in-out`, zIndex: 0 }}
        />
      ))}

      {/* ── Transparent PNG overlay, gentle bob ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://soft-zoom-63098134.figma.site/_assets/v11/0b4a435b2df2747593c43d7a1c9b4578f7d8d90c.png"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover pointer-events-none hero-overlay-bob"
        style={{ zIndex: 1 }}
      />

      {/* ── Content layer ── */}
      <div className="relative h-full flex flex-col" style={{ zIndex: 2 }}>

        {/* Nav */}
        <nav className="flex items-center justify-between px-5 pt-5 sm:px-8 sm:pt-8">
          <a href="/" style={{ fontFamily: SERIF, fontStyle: "italic", color: "#fff", fontSize: "clamp(20px,3vw,24px)", textDecoration: "none", textShadow: "0 1px 8px rgba(0,0,0,0.35)" }}>
            Yoinky
          </a>

          {/* desktop nav pill */}
          <div className="hidden md:flex liquid-glass items-center gap-1 rounded-full px-2 py-1.5" style={{ backgroundColor: "rgba(0,0,0,0.24)" }}>
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{ fontFamily: UI, fontSize: 14, color: "rgba(255,255,255,0.9)", textDecoration: "none", padding: "8px 14px" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
              >
                {l.label}
              </a>
            ))}
            <TelegramButton label="Get Started" size="sm" style={{ marginLeft: 4 }} />
          </div>

          {/* mobile hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="md:hidden liquid-glass flex items-center justify-center rounded-full"
            style={{ width: 42, height: 42, backgroundColor: "rgba(0,0,0,0.24)" }}
          >
            <span style={{ position: "relative", width: 18, height: 18, display: "inline-block" }}>
              <FiMenu
                size={18}
                color="#fff"
                style={{
                  position: "absolute", inset: 0,
                  transition: "transform 300ms ease, opacity 300ms ease",
                  transform: menuOpen ? "rotate(90deg) scale(0.75)" : "rotate(0deg) scale(1)",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <FiX
                size={18}
                color="#fff"
                style={{
                  position: "absolute", inset: 0,
                  transition: "transform 300ms ease, opacity 300ms ease",
                  transform: menuOpen ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0.75)",
                  opacity: menuOpen ? 1 : 0,
                }}
              />
            </span>
          </button>
        </nav>

        {/* Mobile menu overlay */}
        <div
          className="md:hidden fixed inset-0"
          style={{
            zIndex: 50,
            backgroundColor: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(6px)",
            opacity: menuOpen ? 1 : 0,
            pointerEvents: menuOpen ? "auto" : "none",
            transition: "opacity 500ms cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          {/* dedicated close button — always reachable, independent of the hamburger underneath */}
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="liquid-glass flex items-center justify-center rounded-full"
            style={{ position: "absolute", top: 20, right: 20, width: 42, height: 42, backgroundColor: "rgba(255,255,255,0.12)" }}
          >
            <FiX size={18} color="#fff" />
          </button>

          <div className="flex flex-col items-center justify-center h-full gap-8">
            {NAV_LINKS.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: UI, fontSize: 28, color: "#fff", textDecoration: "none",
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 500ms cubic-bezier(0.4,0,0.2,1) ${menuOpen ? 100 + i * 50 : 0}ms, transform 500ms cubic-bezier(0.4,0,0.2,1) ${menuOpen ? 100 + i * 50 : 0}ms`,
                }}
              >
                {l.label}
              </a>
            ))}
            <div
              style={{
                marginTop: 12,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "scale(1)" : "scale(0.9)",
                transition: `opacity 500ms cubic-bezier(0.4,0,0.2,1) ${menuOpen ? 300 : 0}ms, transform 500ms cubic-bezier(0.4,0,0.2,1) ${menuOpen ? 300 : 0}ms`,
              }}
            >
              <TelegramButton size="lg" style={{ fontSize: 16 }} onClick={() => setMenuOpen(false)} />
            </div>
          </div>
        </div>

        {/* Hero content, vertically centered in the remaining space */}
        <div className="flex-1 flex items-center justify-center px-5 sm:px-8">
          <div className="flex flex-col items-center text-center" style={{ maxWidth: 860 }}>

            {/* Badge */}
            <div
              className="liquid-glass inline-flex items-center rounded-full"
              style={{ padding: "8px 18px", marginBottom: "clamp(20px,3vw,28px)", backgroundColor: glassTint, transition: `background-color ${TRANSITION_MS - 300}ms ease` }}
            >
              <span style={{ fontFamily: UI, fontSize: 13, color: contentColor, textShadow: textGlow, transition: `color ${TRANSITION_MS - 300}ms ease` }}>
                A full brand team, built into Telegram
              </span>
            </div>

            {/* Heading */}
            <h1
              style={{
                fontFamily: SERIF,
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                color: contentColor,
                textShadow: textGlow,
                transition: `color ${TRANSITION_MS - 300}ms ease`,
                fontSize: "clamp(38px,7vw,88px)",
                maxWidth: 780,
                margin: 0,
              }}
            >
              {persona.heading[0]}
              <br />
              {persona.heading[1]}
            </h1>

            {/* Subtext */}
            <p
              style={{
                fontFamily: UI,
                fontSize: "clamp(14.5px,1.8vw,17px)",
                lineHeight: 1.6,
                color: contentColor,
                opacity: persona.dark ? 0.85 : 0.9,
                textShadow: textGlow,
                transition: `color ${TRANSITION_MS - 300}ms ease`,
                maxWidth: 500,
                margin: "clamp(16px,2.2vw,20px) 0 0",
              }}
            >
              {persona.subtext}
            </p>

            {/* CTA — standalone button, no input field */}
            <div style={{ marginTop: "clamp(26px,4vw,36px)" }}>
              <TelegramButton size="lg" />
            </div>

            {/* Persona switcher — always white, independent of the dark-mode content shift */}
            <div className="flex items-center justify-center flex-wrap" style={{ gap: "clamp(18px,3vw,32px)", marginTop: "clamp(28px,4vw,40px)" }}>
              {PERSONAS.map((p, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={p.key}
                    onClick={() => selectPersona(i)}
                    style={{
                      fontFamily: UI, fontSize: 13, fontWeight: 500,
                      color: isActive ? "#fff" : "rgba(255,255,255,0.55)",
                      textShadow: "0 1px 8px rgba(0,0,0,0.35)",
                      background: "none", border: "none", cursor: "pointer",
                      paddingBottom: 8,
                      borderBottom: isActive ? "1.5px solid #fff" : "1.5px solid transparent",
                      transition: "color 200ms ease, border-color 200ms ease, opacity 200ms ease",
                    }}
                    onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.opacity = "0.8"; }}
                    onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.opacity = "1"; }}
                  >
                    {p.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom stats — always white, honest for pre-launch */}
        <div className="flex items-center justify-center flex-wrap px-5 pb-6 sm:pb-8" style={{ gap: 10 }}>
          {STATS.map((stat, i) => (
            <span key={stat} className="flex items-center" style={{ gap: 10 }}>
              {i > 0 && <span className="hidden sm:inline" style={{ color: "rgba(255,255,255,0.3)", fontFamily: UI, fontSize: 13 }}>|</span>}
              <span style={{ fontFamily: UI, fontSize: 12.5, color: "rgba(255,255,255,0.7)", textShadow: "0 1px 6px rgba(0,0,0,0.35)" }}>{stat}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
