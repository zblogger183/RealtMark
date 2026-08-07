import { SHOW_SAMPLE_CONTENT } from "@/lib/sampleContent";
import { COUNTRIES } from "@/lib/locations";

const STATS = [
  { value: "150+", label: "Campaigns launched" },
  { value: "38%", label: "Avg. lead increase" },
  { value: "AED 40M+", label: "Ad spend managed" },
];

export default function StatsBand() {
  if (!SHOW_SAMPLE_CONTENT) return null;

  return (
    <section data-sample="true" className="border-b border-black/10 bg-white">
      <div className="mx-auto max-w-content px-6 py-14 md:px-10">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold tabular-nums text-primary md:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-black">{stat.label}</p>
            </div>
          ))}
          <div>
            <p className="text-3xl font-bold tabular-nums text-primary md:text-4xl">
              {COUNTRIES.length}
            </p>
            <p className="mt-2 text-sm text-black">Markets served</p>
          </div>
        </div>
      </div>
    </section>
  );
}
