"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaInstagram, FaDiscord, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";

const navLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Blog", href: "/blog" },
];

const socialLinks = [
  { Icon: FaInstagram, href: "https://www.instagram.com/meetyoinky?igsh=MTU0ZnE4b3loYmlkcQ%3D%3D&utm_source=qr", label: "Instagram" },
  { Icon: FaXTwitter,  href: "https://x.com/meetyoinky?s=11", label: "X" },
  { Icon: FaDiscord,   href: "https://discord.gg/JF3bMgKzu", label: "Discord" },
  { Icon: SiSubstack,  href: "https://open.substack.com/pub/meetparry", label: "Substack" },
  { Icon: FaLinkedin,  href: "https://www.linkedin.com/company/yoinky/", label: "LinkedIn" },
];

const PINK = "#F85BA9";

export default function Nav({ light }: { light?: boolean }) {
  const [open, setOpen] = useState(false);
  const [itemsIn, setItemsIn] = useState(false);
  const lineColor = light ? PINK : "white";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Stagger items in slightly after the curtain starts dropping
  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (open) {
      t = setTimeout(() => setItemsIn(true), 120);
    } else {
      setItemsIn(false);
    }
    return () => clearTimeout(t);
  }, [open]);

  return (
    <>
      {/* ── Main nav bar ── */}
      <nav className="relative z-20 w-full flex items-center justify-between px-6 md:px-16 pt-7 md:pt-8">
        <a href="/">
          <Image
            src="/Logo Group.svg"
            alt="Yoinky"
            width={110}
            height={32}
            className="fade-in fade-in-1"
            style={{
              display: "block",
              filter: light ? "brightness(0) invert(52%) sepia(52%) saturate(736%) hue-rotate(294deg) brightness(101%)" : undefined,
            }}
            priority
          />
        </a>

        {/* Funky hamburger — asymmetric lines that morph into X */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="fade-in fade-in-1 cursor-pointer relative"
          style={{ width: 34, height: 22 }}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {/* Top line — full width */}
          <span style={{
            position: "absolute", left: 0, top: 0,
            width: "100%", height: 2, background: lineColor, borderRadius: 2,
            transformOrigin: "center",
            transition: "transform 0.45s cubic-bezier(0.77,0,0.175,1), width 0.3s ease",
            transform: open ? "translateY(10px) rotate(45deg)" : "none",
          }} />
          {/* Middle line — short, right-aligned */}
          <span style={{
            position: "absolute", right: 0, top: "50%",
            width: "55%", height: 2, background: lineColor, borderRadius: 2,
            marginTop: -1,
            transition: "opacity 0.2s ease, transform 0.2s ease",
            opacity: open ? 0 : 1,
            transform: open ? "translateX(10px)" : "none",
          }} />
          {/* Bottom line — medium width, morphs to full for X */}
          <span style={{
            position: "absolute", left: 0, bottom: 0,
            width: open ? "100%" : "75%", height: 2, background: lineColor, borderRadius: 2,
            transformOrigin: "center",
            transition: "transform 0.45s cubic-bezier(0.77,0,0.175,1), width 0.3s ease",
            transform: open ? "translateY(-10px) rotate(-45deg)" : "none",
          }} />
        </button>
      </nav>

      {/* ── Full-screen overlay — curtain drops from top ── */}
      <div
        className="fixed inset-0 z-50 flex flex-col px-7 pt-7 pb-12 md:px-12 md:pt-8 md:pb-14"
        style={{
          backgroundColor: "#FDF6EF",
          clipPath: open ? "inset(0 0 0% 0 round 0px)" : "inset(0 0 100% 0 round 0px)",
          transition: "clip-path 0.65s cubic-bezier(0.77,0,0.175,1)",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <Image
            src="/Logo Group.svg"
            alt="Yoinky"
            width={110}
            height={32}
            style={{
              display: "block",
              filter: "brightness(0) invert(52%) sepia(52%) saturate(736%) hue-rotate(294deg) brightness(101%)",
            }}
          />
          <button onClick={() => setOpen(false)} className="cursor-pointer p-1" aria-label="Close menu">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <line x1="2" y1="2" x2="24" y2="24" stroke={PINK} strokeWidth="2" strokeLinecap="round" />
              <line x1="24" y1="2" x2="2" y2="24" stroke={PINK} strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Nav links — staggered slide up */}
        <ul className="flex flex-col gap-2 mt-12 md:mt-16 flex-1">
          {navLinks.map(({ label, href }, i) => (
            <li key={label}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  color: PINK,
                  fontSize: "clamp(50px, 13vw, 90px)",
                  lineHeight: 1.05,
                  textDecoration: "none",
                  opacity: itemsIn ? 1 : 0,
                  transform: itemsIn ? "translateY(0)" : "translateY(32px)",
                  transition: `opacity 0.55s cubic-bezier(0.22,1,0.36,1) ${0.05 + i * 0.08}s, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${0.05 + i * 0.08}s`,
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social icons — fade up last */}
        <div
          className="flex items-center gap-5 md:gap-7 mt-8"
          style={{
            opacity: itemsIn ? 1 : 0,
            transform: itemsIn ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.5s ease 0.36s, transform 0.5s cubic-bezier(0.22,1,0.36,1) 0.36s",
          }}
        >
          {socialLinks.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: PINK, transition: "opacity 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.4")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <Icon size={48} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
