import { UI, APP_SIGNIN_URL } from "./theme";

const SIZES = {
  sm: { fontSize: 14, padding: "9px 18px" },
  md: { fontSize: 14.5, padding: "11px 22px" },
  lg: { fontSize: 15, padding: "14px 32px" },
};

export default function AppButton({
  label = "Go to the app",
  size = "md",
  style,
  onClick,
}: {
  label?: string;
  size?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
  onClick?: () => void;
}) {
  return (
    <a
      href={APP_SIGNIN_URL}
      onClick={onClick}
      className="group relative inline-block overflow-hidden"
      style={{
        fontFamily: UI, fontWeight: 600, color: "#111",
        backgroundColor: "#fff", borderRadius: 100,
        textDecoration: "none",
        ...SIZES[size],
        ...style,
      }}
    >
      <span className="relative block overflow-hidden">
        <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
          {label}
        </span>
        <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
          {label}
        </span>
      </span>
    </a>
  );
}
