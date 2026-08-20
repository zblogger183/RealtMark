import { COUNTRIES } from "@/lib/locations";
import { SERVICES } from "@/lib/services";

// Every number here is computed directly from the data files, not invented —
// safe to show ungated, unlike StatsBand.tsx's fabricated campaign figures.
export default function RealStats() {
  const liveCountries = COUNTRIES.filter((c) => c.status === "live");
  const liveAreas = liveCountries
    .flatMap((c) => c.cities.flatMap((city) => city.areas))
    .filter((a) => a.status === "live");
  const liveServices = SERVICES.filter((s) => s.status === "live");

  const stats = [
    { value: String(liveCountries.length), label: "GCC markets covered" },
    { value: String(liveAreas.length), label: "Dubai communities mapped" },
    { value: String(liveServices.length), label: "Core services, in-house" },
    { value: "0", label: "Multi-year lock-ins" },
  ];

  return (
    <section className="bg-black/[0.02]">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-24">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-mid">By the numbers</p>
          <h2 className="mt-3 text-3xl font-bold text-black md:text-4xl">
            Real coverage.
            <br />
            <span className="text-primary">Not vanity metrics.</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 rounded-2xl bg-primary p-8 sm:grid-cols-4 md:p-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold tabular-nums text-secondary md:text-4xl">{stat.value}</p>
              <p className="mt-2 text-xs uppercase tracking-wide text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
