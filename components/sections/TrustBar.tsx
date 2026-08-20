import { COUNTRIES } from "@/lib/locations";

const MARKETS = COUNTRIES.filter((c) => c.status === "live").flatMap((country) =>
  country.cities.filter((city) => city.status === "live").map((city) => `${city.name}, ${country.name}`)
);

export default function TrustBar() {
  const items = [...MARKETS, ...MARKETS];

  return (
    <section className="overflow-hidden border-b border-black/10 bg-white py-6">
      <p className="mx-auto max-w-content px-6 text-center text-xs font-semibold uppercase tracking-widest text-primary-mid md:px-10">
        Markets we work in
      </p>
      <div className="mt-4 overflow-hidden">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {items.map((market, i) => (
            <span key={`${market}-${i}`} className="text-sm font-medium text-black/70">
              {market}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
