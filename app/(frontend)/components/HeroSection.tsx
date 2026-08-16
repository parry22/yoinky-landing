"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { SERIF, UI } from "./theme";
import AppButton from "./AppButton";

const NAV_LINKS = [
  { label: "Blog", href: "/blog" },
  { label: "Privacy", href: "/privacy" },
];

// Single static hero: the founders scene. Heading + subtext are fixed.
const HERO_HEADING = "Automate your founder-led marketing";
const HERO_SUBTEXT =
  "Yoinky turns everything a company knows into content and distribution.";
const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_081127_0992a171-d3c6-4978-8213-0ec5df8b6d63.mp4";

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    const startVideo = () => video.play().catch(() => undefined);
    startVideo();
    video.addEventListener("canplay", startVideo, { once: true });
    return () => video.removeEventListener("canplay", startVideo);
  }, []);

  const contentColor = "#FFFFFF";
  // Subtle lift so text stays legible over whatever the video is doing underneath.
  const textGlow = "0 1px 12px rgba(0,0,0,0.35)";
  const glassTint = "rgba(0,0,0,0.24)";

  return (
    <section className="relative w-full h-dvh overflow-hidden bg-black">

      {/* ── Background video layer ── */}
      <video
        ref={videoRef}
        src={HERO_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        controlsList="nodownload noplaybackrate"
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* ── Content layer ── */}
      <div className="relative h-full flex flex-col" style={{ zIndex: 2 }}>

        {/* Nav */}
        <nav className="flex items-center justify-between px-5 pt-5 sm:px-8 sm:pt-8">
          <Link href="/" style={{ fontFamily: SERIF, fontStyle: "italic", color: "#fff", fontSize: "clamp(20px,3vw,24px)", textDecoration: "none", textShadow: "0 1px 8px rgba(0,0,0,0.35)" }}>
            Yoinky
          </Link>

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
            <AppButton label="Get Started" size="sm" style={{ marginLeft: 4 }} />
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
          {/* Dedicated close button, always reachable independently of the hamburger underneath. */}
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
              <AppButton size="lg" style={{ fontSize: 16 }} onClick={() => setMenuOpen(false)} />
            </div>
          </div>
        </div>

        {/* Hero content, vertically centered in the remaining space */}
        <div className="flex-1 flex items-center justify-center px-5 sm:px-8">
          <div className="flex flex-col items-center text-center" style={{ maxWidth: 860 }}>

            {/* Badge */}
            <div
              className="liquid-glass inline-flex items-center rounded-full"
              style={{ padding: "8px 18px", marginBottom: "clamp(20px,3vw,28px)", backgroundColor: glassTint }}
            >
              <span style={{ fontFamily: UI, fontSize: 13, color: contentColor, textShadow: textGlow }}>
                For founder-led and marketing teams
              </span>
            </div>

            {/* Heading */}
            <h1
              style={{
                fontFamily: SERIF,
                fontWeight: 300,
                lineHeight: 1.08,
                letterSpacing: "0.015em",
                color: contentColor,
                textShadow: textGlow,
                fontSize: "clamp(40px,11vw,58px)",
                maxWidth: 780,
                margin: 0,
              }}
            >
              {HERO_HEADING}
            </h1>

            {/* Subtext */}
            <p
              style={{
                fontFamily: UI,
                fontSize: "clamp(14.5px,1.8vw,17px)",
                lineHeight: 1.6,
                color: contentColor,
                opacity: 0.9,
                textShadow: textGlow,
                maxWidth: 500,
                margin: "clamp(16px,2.2vw,20px) 0 0",
              }}
            >
              {HERO_SUBTEXT}
            </p>

            {/* CTA is a standalone button, with no input field. */}
            <div style={{ marginTop: "clamp(26px,4vw,36px)" }}>
              <AppButton size="lg" />
            </div>
          </div>
        </div>
      </div>
      <div className="hero-section-blend" aria-hidden="true" />
    </section>
  );
}
