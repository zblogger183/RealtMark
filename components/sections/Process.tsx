import { Eyebrow } from "../Eyebrow";

const STEPS = [
  {
    number: "01",
    title: "Discovery",
    copy: "We audit the asset, the competitive set, the target buyer profile, and the compliance requirements for your specific market before any spend is committed.",
  },
  {
    number: "02",
    title: "Strategy",
    copy: "Channel mix, budget allocation, targeting model, and creative direction get benchmarked against real cost-per-lead targets, not industry averages.",
  },
  {
    number: "03",
    title: "Launch",
    copy: "Campaigns, sites, and content go live with the correct permit numbers and disclosures already in place — nothing retrofitted after the fact.",
  },
  {
    number: "04",
    title: "Scale",
    copy: "Budget shifts toward what is converting. Reporting connects spend directly to the qualified leads already in your pipeline.",
  },
];

export default function Process() {
  return (
    <section className="bg-primary-mid">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-2xl">
          <Eyebrow tone="light">Process</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-white">How an engagement actually runs</h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-4">
          {STEPS.map((step) => (
            <div key={step.number}>
              <div className="flex items-center gap-3">
                <span className="text-base font-bold tabular-nums text-secondary">{step.number}</span>
                <span className="h-px flex-1 bg-white/25" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">{step.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
