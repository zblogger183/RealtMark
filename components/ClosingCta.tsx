import { CtaLink } from "./CtaLink";
import { LeadForm } from "./LeadForm";

export function ClosingCta({
  heading,
  subhead,
  showForm = false,
}: {
  heading: string;
  subhead: string;
  showForm?: boolean;
}) {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-24">
        <div
          className={
            showForm
              ? "grid grid-cols-1 items-center gap-10 lg:grid-cols-[3fr_2fr]"
              : "flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
          }
        >
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-white">{heading}</h2>
            <p className="mt-4 text-base leading-relaxed text-white/80">{subhead}</p>
          </div>
          {showForm ? (
            <div className="w-full max-w-xl">
              <LeadForm variant="section" />
            </div>
          ) : (
            <CtaLink href="/contact" variant="primary" className="shrink-0">
              Book a Strategy Call
            </CtaLink>
          )}
        </div>
      </div>
    </section>
  );
}
