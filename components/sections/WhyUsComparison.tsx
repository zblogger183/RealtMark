import { Eyebrow } from "../Eyebrow";
import { CtaLink } from "../CtaLink";
import { IconCheck } from "../icons";

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

        <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
          <div className="grid grid-cols-2">
            <div className="border-r border-black/10 bg-black/[0.03] px-5 py-4 text-sm font-semibold text-black/50 sm:px-8">
              Generic agencies
            </div>
            <div className="bg-primary px-5 py-4 text-sm font-semibold text-white sm:px-8">RealtMark</div>
          </div>

          {ROWS.map((row) => (
            <div key={row.us} className="grid grid-cols-2 border-t border-black/10">
              <div className="flex items-start gap-3 border-r border-black/10 px-5 py-5 sm:px-8">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-black/10 text-xs font-bold text-black/40">
                  ✕
                </span>
                <p className="text-sm leading-relaxed text-black/50">{row.them}</p>
              </div>
              <div className="flex items-start gap-3 bg-primary/[0.03] px-5 py-5 sm:px-8">
                <IconCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary-dark" />
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
