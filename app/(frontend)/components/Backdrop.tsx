/**
 * Ambient backdrop for everything below the video hero: soft drifting nebula
 * glows and film grain. Decorative only, sits behind all section content.
 */
const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/></svg>\")";

export default function Backdrop() {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {/* nebula glows, drifting slowly */}
      <div
        className="backdrop-glow-a"
        style={{
          position: "absolute", top: "-6%", left: "-12%",
          width: "54vw", height: "54vw", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(122,152,255,0.09) 0%, transparent 62%)",
          filter: "blur(30px)",
        }}
      />
      <div
        className="backdrop-glow-b"
        style={{
          position: "absolute", top: "24%", right: "-16%",
          width: "56vw", height: "56vw", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,186,140,0.07) 0%, transparent 62%)",
          filter: "blur(36px)",
        }}
      />
      <div
        className="backdrop-glow-c"
        style={{
          position: "absolute", top: "56%", left: "-14%",
          width: "54vw", height: "54vw", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(146,255,196,0.055) 0%, transparent 62%)",
          filter: "blur(36px)",
        }}
      />
      <div
        className="backdrop-glow-d"
        style={{
          position: "absolute", bottom: "-8%", right: "6%",
          width: "50vw", height: "50vw", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(196,150,255,0.075) 0%, transparent 62%)",
          filter: "blur(30px)",
        }}
      />

      {/* film grain */}
      <div
        style={{
          position: "absolute", inset: 0,
          backgroundImage: GRAIN,
          backgroundRepeat: "repeat",
          mixBlendMode: "overlay",
          opacity: 0.9,
        }}
      />
    </div>
  );
}
