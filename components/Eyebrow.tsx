type Tone = "light" | "dark" | "onMid";

/**
 * "onMid" is for the "light" (secondary/lime) role specifically on a
 * bg-primary-mid section: text-secondary only clears ~4.3:1 against
 * primary-mid, short of WCAG AA's 4.5:1 for this text size, while it
 * clears 6.7:1+ against bg-primary/bg-black — so bg-primary-mid sections
 * need white instead of the lime accent.
 */
export function Eyebrow({
  children,
  tone = "dark",
  className = "",
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const color = tone === "light" ? "text-secondary" : tone === "onMid" ? "text-white" : "text-primary-mid";
  return (
    <p className={`text-xs font-semibold uppercase tracking-widest ${color} ${className}`}>
      {children}
    </p>
  );
}
