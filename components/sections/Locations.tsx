import Link from "next/link";
import { Eyebrow } from "../Eyebrow";

const COUNTRIES = [
  { name: "United Arab Emirates", note: "Dubai, Abu Dhabi & Northern Emirates" },
  { name: "Saudi Arabia", note: "Riyadh & Jeddah" },
  { name: "Qatar", note: "Doha" },
  { name: "Bahrain", note: "Manama" },
  { name: "Oman", note: "Muscat" },
  { name: "Kuwait", note: "Kuwait City" },
];

export default function Locations() {
  return (
    <section id="locations" className="bg-primary">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Eyebrow tone="light">Locations</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-white">Where we work</h2>
            <p className="mt-4 text-base leading-relaxed text-white/80">
              Six markets, one region-specific approach to search behaviour, regulation, and buyer
              intent.
            </p>
          </div>
          <p className="text-5xl font-bold tabular-nums text-secondary md:text-6xl">06</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COUNTRIES.map((country) => (
            <Link
              key={country.name}
              href="/locations"
              className="group flex flex-col justify-between border border-white/15 p-6 transition-colors duration-200 hover:border-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              <span className="text-lg font-semibold text-white">{country.name}</span>
              <span className="mt-2 text-sm text-white/60">{country.note}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
