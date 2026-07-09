"use client";

import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { SERIF, UI } from "./theme";
import TelegramButton from "./TelegramButton";

const NAV_LINKS = [
  { label: "Blog", href: "/blog" },
  { label: "Privacy", href: "/privacy" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className="relative flex items-center justify-between px-5 py-5 sm:px-8 sm:py-6">
      <a href="/" style={{ fontFamily: SERIF, fontStyle: "italic", color: "#fff", fontSize: "clamp(20px,3vw,24px)", textDecoration: "none" }}>
        Yoinky
      </a>

      {/* desktop nav pill */}
      <div className="hidden md:flex liquid-glass items-center gap-1 rounded-full px-2 py-1.5" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
        {NAV_LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            style={{ fontFamily: UI, fontSize: 14, color: "rgba(255,255,255,0.85)", textDecoration: "none", padding: "8px 14px" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
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
        style={{ width: 42, height: 42, backgroundColor: "rgba(255,255,255,0.06)" }}
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

      {/* mobile menu overlay */}
      <div
        className="md:hidden fixed inset-0"
        style={{
          zIndex: 50,
          backgroundColor: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(6px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 500ms cubic-bezier(0.4,0,0.2,1)",
        }}
      >
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
    </header>
  );
}
