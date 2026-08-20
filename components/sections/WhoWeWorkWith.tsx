import { Eyebrow } from "../Eyebrow";

const SEGMENTS = [
  {
    name: "Solo Agent / Broker",
    copy: "Built for one person managing their own listings and lead flow, not a team.",
  },
  {
    name: "Brokerage",
    copy: "Built for multiple agents and an active listings pipeline across several communities.",
  },
  {
    name: "Developer / Off-Plan Launch",
    copy: "Built around a specific launch date, not an ongoing retainer rhythm.",
  },
];

export default function WhoWeWorkWith() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-24">
        <div className="max-w-2xl">
          <Eyebrow>Who we work with</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-black">We speak your side of the business.</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {SEGMENTS.map((segment) => (
            <div key={segment.name} className="rounded-xl border border-black/10 p-6">
              <h3 className="text-lg font-bold text-black">{segment.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-black/70">{segment.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
