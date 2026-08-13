import { COUNTRIES } from "@/lib/locations";
import { SERVICES } from "@/lib/services";

// Every number here is computed directly from the data files, not invented —
// safe to show ungated, unlike StatsBand.tsx's fabricated campaign figures.
export default function RealStats() {
  const liveCountries = COUNTRIES.filter((c) => c.status === "live");
  const liveAreas = liveCountries.flatMap((c) => c.cities.flatMap((city) => city.areas)).filter(
    (a) => a.status === "live"
  );
  const liveServices = SERVICES.filter((s) => s.status === "live");

  const stats = [
    { value: String(liveCountries.length), label: "GCC markets covered" },
    { value: String(liveAreas.length), label: "Dubai communities mapped" },
    { value: String(liveServices.length), label: "Core services, run in-house" },
  ];

  return (
    <section className="border-b border-black/10 bg-white">
      <div className="mx-auto max-w-content px-6 py-14 md:px-10">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold tabular-nums text-primary md:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-black">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
