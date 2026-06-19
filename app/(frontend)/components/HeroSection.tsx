"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Nav from "./Nav";

export default function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let raf: number;

    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;

        // Background drifts up at 45% of scroll speed — classic parallax depth
        if (bgRef.current) {
          bgRef.current.style.transform = `translate3d(0, ${y * 0.45}px, 0)`;
        }

        // Content drifts up slightly + fades out as hero leaves viewport
        if (contentRef.current) {
          contentRef.current.style.transform = `translate3d(0, ${y * 0.12}px, 0)`;
          contentRef.current.style.opacity = String(Math.max(0, 1 - y / 520));
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <main className="relative flex flex-col items-center justify-between min-h-screen min-h-dvh overflow-hidden">
      {/* Parallax background */}
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
        style={{ pointerEvents: "none" }}
      >
        <Image
          src="/image 9.png"
          alt=""
          fill
          className="object-cover object-center hidden md:block"
          priority
        />
        <Image
          src="/image 10.png"
          alt=""
          fill
          className="object-cover object-center block md:hidden"
          priority
        />
      </div>

      {/* Nav sits above parallax layers */}
      <Nav />

      {/* Hero content — subtle upward drift + fade-out on scroll */}
      <section
        ref={contentRef}
        className="hero-section will-change-transform relative z-10 flex flex-col items-center text-center px-5 flex-1 justify-center"
      >
        <h1 className="fade-in fade-in-2 text-white text-[42px] md:text-[70px] leading-[1.1] max-w-[18ch] md:max-w-[22ch]">
          You shouldn&apos;t have to keep explaining your work to AI
        </h1>

        <p className="fade-in fade-in-3 text-white/85 text-[18px] md:text-[28px] mt-5 md:mt-6 max-w-xs sm:max-w-sm md:max-w-2xl leading-snug">
          Yoinky runs quietly in the background, learns how you think, and handles
          repetitive work so you don&apos;t have to re-explain everything.
        </p>

        <a
          href="https://tally.so/r/Ek6zbo"
          target="_blank"
          rel="noopener noreferrer"
          className="fade-in fade-in-4 group relative mt-8 md:mt-10 bg-white text-black text-[18px] font-medium px-8 md:px-9 py-3.5 md:py-3 rounded-full overflow-hidden dm-sans"
        >
          <span className="relative block overflow-hidden">
            <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
              Apply for private beta access
            </span>
            <span className="absolute inset-0 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 flex items-center justify-center">
              Apply for private beta access
            </span>
          </span>
        </a>
      </section>

      {/* Bottom spacer */}
      <div className="relative z-10 pb-10 md:pb-12" />
    </main>
  );
}
