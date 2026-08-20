import { CtaLink } from "../CtaLink";
import { IconCheck } from "../icons";

export default function ContractTerms() {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-content px-6 py-8 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-black">
              <IconCheck className="h-5 w-5" />
            </span>
            <div>
              <p className="text-base font-bold text-white">No Multi-Year Lock-In.</p>
              <p className="mt-1 max-w-xl text-sm leading-relaxed text-white/70">
                Most engagements start with a three-month minimum — long enough for paid media to
                optimise and early SEO signal to show. After that, it&apos;s quarterly or
                month-to-month. No small print, no surprise renewal clause.
              </p>
            </div>
          </div>

          <div className="flex flex-shrink-0 items-center gap-8">
            <div className="text-center">
              <p className="text-2xl font-bold tabular-nums text-secondary">3 mo</p>
              <p className="text-xs uppercase tracking-wide text-white/50">Minimum term</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold tabular-nums text-secondary">1 day</p>
              <p className="text-xs uppercase tracking-wide text-white/50">Reply time</p>
            </div>
            <CtaLink href="/pricing" variant="primary">
              See Pricing
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
