import { CtaLink } from "../CtaLink";
import { BadgePill } from "../BadgePill";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-primary-mid/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-content px-6 py-24 text-center md:px-10 md:py-28">
        <BadgePill tone="light" className="mx-auto w-fit">
          Free, no-obligation proposal within 24 hours
        </BadgePill>

        <h2 className="mx-auto mt-6 max-w-2xl text-4xl font-bold leading-tight text-white md:text-5xl">
          Let&apos;s build the{" "}
          <span className="inline-block rounded-md bg-secondary px-3 py-1 text-black">pipeline</span>
          <br />
          your next launch needs.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70">
          Tell us about the project, the market, and the timeline. We will tell you honestly
          whether we are the right fit.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <CtaLink href="/contact" variant="primary">
            Book a Strategy Call
          </CtaLink>
          <a
            href="mailto:hello@realtmark.com"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            Email Us Directly
          </a>
        </div>
      </div>

      <div className="relative border-t border-secondary/40 bg-secondary/10 py-3 text-center text-xs font-semibold uppercase tracking-wide text-secondary">
        Reply within one business day — no auto-reply, no sales queue.
      </div>
    </section>
  );
}
