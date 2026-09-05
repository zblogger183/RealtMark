import { Eyebrow } from "../Eyebrow";
import { IconSeo, IconWebsite, IconAds, IconCrm } from "../icons";

const STEPS = [
  {
    number: "01",
    title: "Discovery",
    copy: "We audit the asset, the competitive set, the target buyer profile, and the compliance requirements for your specific market before any spend is committed.",
    icon: IconSeo,
  },
  {
    number: "02",
    title: "Strategy",
    copy: "Channel mix, budget allocation, targeting model, and creative direction get benchmarked against real cost-per-lead targets, not industry averages.",
    icon: IconWebsite,
  },
  {
    number: "03",
    title: "Launch",
    copy: "Campaigns, sites, and content go live with the correct permit numbers and disclosures already in place — nothing retrofitted after the fact.",
    icon: IconAds,
  },
  {
    number: "04",
    title: "Scale",
    copy: "Budget shifts toward what is converting. Reporting connects spend directly to the qualified leads already in your pipeline.",
    icon: IconCrm,
  },
];

export default function Process() {
  return (
    <section className="bg-primary-mid">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow tone="light">The process</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            From strategy call to live campaign,
            <br />
            <span className="text-secondary">in under three weeks.</span>
          </h2>
        </div>

        <div className="relative mt-20">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent md:block"
          />
          <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 md:grid-cols-4">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="group relative text-center">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 -top-6 select-none text-7xl font-black leading-none text-white/[0.06]"
                  >
                    {step.number}
                  </span>

                  {index < STEPS.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-3 top-8 hidden -translate-y-1/2 text-secondary/50 md:block"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                        <path d="M9 5 L16 12 L9 19 L7.5 17.5 L13 12 L7.5 6.5 Z" />
                      </svg>
                    </span>
                  )}

                  <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-primary shadow-lg shadow-black/20 ring-8 ring-primary-mid transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold tabular-nums text-secondary ring-2 ring-primary-mid">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="relative z-10 mt-6 text-lg font-bold text-white">{step.title}</h3>
                  <p className="relative z-10 mx-auto mt-3 max-w-xs text-sm leading-relaxed text-white/70">
                    {step.copy}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
