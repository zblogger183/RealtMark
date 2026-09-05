import { Eyebrow } from "../Eyebrow";
import { CtaLink } from "../CtaLink";
import { IconCheck } from "../icons";
import { LatticeMark, LatticeField } from "../Lattice";

const ROWS = [
  { them: "Compliance bolted on after a takedown notice", us: "Trakheesi, RERA & Madhmoun built in from the first draft" },
  { them: "Arabic copy translated from English", us: "Arabic written natively by Arabic-speaking copywriters" },
  { them: "Default platform audience categories", us: "Targeting built for Gulf buyer nationality, income & life stage" },
  { them: "Reports full of reach, clicks, and impressions", us: "Reporting tied to cost per qualified lead and pipeline" },
  { them: "One community-wide campaign for the whole city", us: "Community-level strategy — JVC and Downtown run differently" },
  { them: "Multi-year lock-in contracts", us: "Three-month minimum, then month-to-month" },
];

export default function WhyUsComparison() {
  return (
    <section className="bg-black/[0.02]">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Why RealtMark</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-black md:text-4xl">
            Built for how this region
            <br />
            <span className="border-b-2 border-secondary">actually buys real estate.</span>
          </h2>
        </div>

        <div className="relative isolate mx-auto mt-14 max-w-4xl overflow-hidden rounded-3xl border border-black/10 bg-white shadow-xl shadow-black/5">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-secondary/10 blur-3xl"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-primary/5 blur-3xl"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-secondary/0 via-secondary/50 to-secondary/0 sm:block"
          />

          <div className="relative grid grid-cols-1 sm:grid-cols-2">
            <div className="flex items-center gap-2 px-5 py-4 text-sm font-semibold text-black/45 sm:px-8">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/10 text-xs font-bold text-black/40">
                ✕
              </span>
              Generic agencies
            </div>
            <div className="relative flex items-center gap-2 overflow-hidden bg-gradient-to-br from-primary to-primary-mid px-5 py-4 text-sm font-semibold text-white sm:px-8">
              <LatticeField id="whyus-header" className="text-white opacity-[0.08]" scale={0.7} />
              <LatticeMark className="relative h-5 w-5 text-secondary" />
              <span className="relative">RealtMark</span>
            </div>

            <span
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-secondary bg-white px-2.5 py-1 text-[10px] font-black tracking-wide text-primary shadow-md sm:flex"
            >
              VS
            </span>
          </div>

          {ROWS.map((row) => (
            <div
              key={row.us}
              className="group/row relative grid grid-cols-1 border-t border-black/10 sm:grid-cols-2"
            >
              <div className="flex items-start gap-3 px-5 py-5 transition-colors duration-200 group-hover/row:bg-black/[0.02] sm:px-8">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-black/10 text-xs font-bold text-black/40 transition-transform duration-200 group-hover/row:scale-110">
                  ✕
                </span>
                <p className="text-sm leading-relaxed text-black/50 line-through decoration-black/20">{row.them}</p>
              </div>
              <div className="flex items-start gap-3 bg-secondary/[0.04] px-5 py-5 transition-colors duration-200 group-hover/row:bg-secondary/10 sm:px-8">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-secondary/20 text-secondary-dark transition-transform duration-200 group-hover/row:scale-110">
                  <IconCheck className="h-3.5 w-3.5" />
                </span>
                <p className="text-sm font-medium leading-relaxed text-black">{row.us}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <CtaLink href="/contact" variant="primary">
            Get a Free Quote and See for Yourself
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
