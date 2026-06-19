"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Phase = "hidden" | "idle" | "landing" | "leaping";

interface Props {
  isActive: boolean;
}

export default function YoinkyTabIcon({ isActive }: Props) {
  const [phase, setPhase] = useState<Phase>(() => (isActive ? "idle" : "hidden"));
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    if (isActive) {
      setPhase("landing");
      const t = setTimeout(() => setPhase("idle"), 600);
      return () => clearTimeout(t);
    } else {
      setPhase("leaping");
      const t = setTimeout(() => setPhase("hidden"), 280);
      return () => clearTimeout(t);
    }
  }, [isActive]);

  if (phase === "hidden") return null;

  const iconAnim =
    phase === "landing" ? "yoinky-land 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards" :
    phase === "leaping" ? "yoinky-leap 0.28s ease-in forwards" :
    "yoinky-idle-jump 1.3s linear infinite";

  const shadowAnim =
    phase === "landing" ? "yoinky-shadow-land 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards" :
    phase === "idle"    ? "yoinky-idle-shadow 1.3s linear infinite" :
    "none";

  return (
    <span
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        flexShrink: 0,
        overflow: "visible",
      }}
    >
      <span
        key={phase}
        style={{
          display: "block",
          width: 13,
          height: 13,
          animation: iconAnim,
          transformOrigin: "bottom center",
        }}
      >
        <Image
          src="/Favicon.png"
          alt=""
          width={13}
          height={13}
          style={{ display: "block", objectFit: "contain" }}
        />
      </span>
      <span
        key={`shadow-${phase}`}
        style={{
          display: "block",
          width: 7,
          height: 3,
          borderRadius: "50%",
          backgroundColor: "rgba(0,0,0,0.18)",
          animation: shadowAnim,
          opacity: phase === "leaping" ? 0 : undefined,
          transformOrigin: "center center",
        }}
      />
    </span>
  );
}
