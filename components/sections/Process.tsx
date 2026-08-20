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

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 md:grid-cols-4">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="text-center">
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-secondary">
                  <Icon className="h-6 w-6" />
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-[10px] font-bold tabular-nums text-black">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{step.copy}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
