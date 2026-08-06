import { Eyebrow } from "../Eyebrow";

const REASONS = [
  {
    title: "Compliance built in, not bolted on",
    copy: "Campaigns are structured around Dubai's Trakheesi permit system, RERA broker and project registration, and Abu Dhabi's Madhmoun approval process from the first draft — not adjusted after a takedown notice.",
  },
  {
    title: "Genuinely bilingual, not translated",
    copy: "Arabic creative is written natively by Arabic-speaking copywriters and reviewed independently of the English version — not run through English copy after the fact.",
  },
  {
    title: "Targeting built for this region's buyers",
    copy: "Audience models account for nationality, income bracket, and life stage — the variables that actually predict who buys real estate in the Gulf, not default platform categories.",
  },
  {
    title: "Reporting tied to pipeline, not impressions",
    copy: "Every report traces spend to cost per qualified lead and where that lead sits in your sales pipeline — not reach, clicks, or engagement.",
  },
];

export default function WhyRealtMark() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-2xl">
          <Eyebrow>Why RealtMark</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-black">
            Built for how this region actually buys and regulates real estate.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2">
          {REASONS.map((reason) => (
            <div key={reason.title} className="border-l-2 border-secondary pl-6">
              <h3 className="text-xl font-bold text-black">{reason.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-black">{reason.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
