import Image from "next/image";
import { LatticeField } from "./Lattice";
import { imageExists } from "@/lib/imageExists";

type Tone = "dark" | "light";

const TONE_BASE: Record<Tone, string> = {
  dark: "bg-primary",
  light: "bg-white",
};

// Flat, brand-tinted scrim rather than a gradient — guarantees legibility for
// text anchored anywhere in the hero (breadcrumbs at top, CTA at bottom),
// regardless of what a future photo's composition looks like.
const TONE_SCRIM: Record<Tone, string> = {
  dark: "bg-primary/80",
  light: "bg-white/80",
};

/**
 * Shared hero wrapper: renders a real photo (with brand scrim) when one
 * exists on disk at `imagePath`, otherwise falls back to the plain
 * bg-primary/bg-white + optional Lattice treatment already live in
 * production. Photo and Lattice are mutually exclusive.
 */
export function HeroBackground({
  imagePath,
  tone = "dark",
  lattice = false,
  children,
}: {
  imagePath?: string;
  tone?: Tone;
  lattice?: boolean;
  children: React.ReactNode;
}) {
  const hasImage = Boolean(imagePath) && imageExists(imagePath!);

  return (
    <section className={`relative overflow-hidden ${TONE_BASE[tone]}`}>
      {hasImage && (
        <>
          <Image src={imagePath!} alt="" fill priority sizes="100vw" className="object-cover" />
          <div className={`absolute inset-0 ${TONE_SCRIM[tone]}`} aria-hidden="true" />
        </>
      )}
      {!hasImage && tone === "dark" && lattice && (
        <>
          <LatticeField id="hero-lattice-base" className="text-white opacity-[0.02]" scale={1.6} />
          <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 md:block">
            <LatticeField id="hero-lattice-accent" className="text-white opacity-[0.05]" scale={1.6} />
          </div>
        </>
      )}
      <div className="relative">{children}</div>
    </section>
  );
}
