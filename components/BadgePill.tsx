type Tone = "light" | "dark";

export function BadgePill({
  children,
  tone = "light",
  className = "",
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const toneClasses =
    tone === "light"
      ? "border-white/15 text-white/80"
      : "border-black/15 text-black/70";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wide ${toneClasses} ${className}`}
    >
      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" aria-hidden="true" />
      {children}
    </span>
  );
}
