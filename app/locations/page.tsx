import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ClosingCta } from "@/components/ClosingCta";
import { COUNTRIES } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Locations — RealtMark",
  description:
    "Real estate digital marketing across the UAE, Saudi Arabia, Qatar, Bahrain, Oman, and Kuwait.",
  alternates: { canonical: "/locations" },
};

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-sm";

export default function LocationsIndexPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <div className="mx-auto max-w-content px-6 pt-8 md:px-10">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Locations" }]} />
        </div>

        <div className="mx-auto max-w-content px-6 pb-16 pt-10 md:px-10 md:pb-20 md:pt-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-black md:text-5xl">Locations</h1>
            <p className="mt-5 text-base leading-relaxed text-black">
              Six markets, each with its own regulatory rules, search behaviour, and buyer mix.
              Start at the country level, or go straight to a specific city.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {COUNTRIES.map((country) => (
              <Link
                key={country.slug}
                href={`/${country.slug}`}
                className={`group block border-t-2 border-black/10 pt-6 transition-colors duration-200 hover:border-secondary ${focusRing}`}
              >
                <h2 className="text-xl font-bold text-black">{country.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-black">
                  {country.cities.map((city) => city.name).join(", ")}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <ClosingCta
          heading="Not sure which market to start in?"
          subhead="Tell us where you're launching and we'll tell you honestly what to prioritize first."
        />
      </main>
      <Footer />
    </>
  );
}
