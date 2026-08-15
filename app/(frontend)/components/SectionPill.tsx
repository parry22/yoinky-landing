export default function SectionPill({ children }: { children: string }) {
  return (
    <span className="section-pill">
      <i aria-hidden="true" />
      {children}
    </span>
  );
}
