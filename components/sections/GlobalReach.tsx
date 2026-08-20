import { Eyebrow } from "../Eyebrow";
import { COUNTRIES } from "@/lib/locations";

export default function GlobalReach() {
  const liveCountries = COUNTRIES.filter((c) => c.status === "live");
  const totalCities = liveCountries.reduce(
    (sum, c) => sum + c.cities.filter((city) => city.status === "live").length,
    0
  );
  const totalAreas = liveCountries.reduce(
    (sum, c) =>
      sum + c.cities.reduce((citySum, city) => citySum + city.areas.filter((a) => a.status === "live").length, 0),
    0
  );

  const stats = [
    { value: `${liveCountries.length}`, label: "GCC Markets Covered" },
    { value: `${totalCities}`, label: "Cities Active" },
    { value: `${totalAreas}`, label: "Dubai Communities Mapped" },
    { value: "3", label: "Regulatory Frameworks" },
  ];

  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow tone="light">Where we work</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            We grow real estate brands
            <br />
            across <span className="text-secondary">six Gulf markets.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/70">
            Whether it&apos;s a single community launch in Dubai or a national brokerage rollout
            across the GCC, campaigns are built around local search behaviour and local
            regulation — not one template stretched across every market.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-white/10 py-6 text-center">
              <p className="text-3xl font-bold tabular-nums text-secondary">{stat.value}</p>
              <p className="mt-2 text-xs uppercase tracking-wide text-white/50">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {liveCountries.map((country) => (
            <div key={country.slug} className="rounded-xl border border-white/10 p-6">
              <div className="flex items-center gap-2.5">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-sm bg-secondary text-[10px] font-bold text-black">
                  {country.slug.slice(0, 2).toUpperCase()}
                </span>
                <p className="text-sm font-bold uppercase tracking-wide text-white">{country.name}</p>
              </div>
              <ul className="mt-4 space-y-1.5">
                {country.cities
                  .filter((city) => city.status === "live")
                  .map((city) => (
                    <li key={city.slug} className="text-sm text-white/60">
                      {city.name}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
