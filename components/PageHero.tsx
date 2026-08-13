import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { Eyebrow } from "./Eyebrow";
import { HeroBackground } from "./HeroBackground";
import { LeadForm } from "./LeadForm";

/**
 * Shared page hero: photo background, breadcrumbs, heading copy, and a lead
 * form on the right — the pattern already proven on the homepage. Every page
 * except blog posts (which use their own narrower editorial hero) should use
 * this so the "photo + form" structure reads as one system site-wide.
 */
export function PageHero({
  imagePath,
  breadcrumbs,
  eyebrow,
  title,
  subhead,
  formSubjectPrefix,
  showForm = true,
  children,
}: {
  imagePath?: string;
  breadcrumbs?: Crumb[];
  eyebrow: string;
  title: string;
  subhead: string;
  formSubjectPrefix?: string;
  showForm?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <HeroBackground imagePath={imagePath} lattice>
      <div className="mx-auto max-w-content px-6 pb-16 pt-8 md:px-10 md:pb-20 md:pt-10">
        {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumbs tone="light" items={breadcrumbs} />}

        <div
          className={`grid grid-cols-1 items-center gap-12 ${
            breadcrumbs && breadcrumbs.length > 0 ? "mt-8 md:mt-10" : ""
          } ${showForm ? "lg:grid-cols-[3fr_2fr] lg:gap-10" : ""}`}
        >
          <div className="max-w-2xl">
            <Eyebrow tone="light">{eyebrow}</Eyebrow>
            <h1 className="mt-5 text-4xl font-bold text-white md:text-5xl">{title}</h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80">{subhead}</p>
            {children}
          </div>

          {showForm && (
            <div className="w-full max-w-xl lg:justify-self-end">
              <LeadForm variant="hero" subjectPrefix={formSubjectPrefix} />
            </div>
          )}
        </div>
      </div>
    </HeroBackground>
  );
}
