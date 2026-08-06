type Tone = "light" | "dark";

export function Eyebrow({
  children,
  tone = "dark",
  className = "",
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const color = tone === "light" ? "text-secondary" : "text-primary-mid";
  return (
    <p className={`text-xs font-semibold uppercase tracking-widest ${color} ${className}`}>
      {children}
    </p>
  );
}
