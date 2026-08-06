const CITIES = [
  { code: "DXB", name: "Dubai" },
  { code: "AUH", name: "Abu Dhabi" },
  { code: "RUH", name: "Riyadh" },
  { code: "DOH", name: "Doha" },
  { code: "BAH", name: "Manama" },
  { code: "MCT", name: "Muscat" },
  { code: "KWI", name: "Kuwait City" },
];

export default function TrustBar() {
  return (
    <section className="border-b border-black/10 bg-white">
      <div className="mx-auto max-w-content px-6 py-8 md:px-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-medium text-black">
            Working across Dubai, Abu Dhabi, and the wider GCC.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {CITIES.map((city) => (
              <li key={city.code} className="flex items-baseline gap-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {city.code}
                </span>
                <span className="text-xs text-primary-mid">{city.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
