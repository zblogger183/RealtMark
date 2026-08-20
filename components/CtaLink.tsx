import Link from "next/link";

type Variant = "primary" | "outline-light" | "outline-dark";

const variants: Record<Variant, string> = {
  primary: "bg-secondary text-black hover:bg-secondary-dark focus-visible:ring-offset-primary",
  "outline-light":
    "border border-white/30 text-white hover:border-white hover:bg-white/5 focus-visible:ring-offset-primary",
  "outline-dark":
    "border border-black/20 text-black hover:border-black focus-visible:ring-offset-white",
};

export function CtaLink({
  href,
  variant = "primary",
  className = "",
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
