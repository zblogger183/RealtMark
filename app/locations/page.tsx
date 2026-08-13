import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Eyebrow } from "@/components/Eyebrow";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";
import { PageSidebar, SidebarCta } from "@/components/PageSidebar";
import { COUNTRIES } from "@/lib/locations";
import { HERO_IMAGES } from "@/lib/heroImages";

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
        <PageHero
          imagePath={HERO_IMAGES.locationsIndex}
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Locations" }]}
          eyebrow="Locations"
          title="Six markets, six regulatory realities"
          subhead="Each market has its own regulatory rules, search behaviour, and buyer mix. Start at the country level, or go straight to a specific city."
          formSubjectPrefix="Locations inquiry"
        />

        <div className="mx-auto max-w-content px-6 pb-16 pt-16 md:px-10 md:pb-20 md:pt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[3fr_2fr] lg:gap-10">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
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

            <PageSidebar>
              <SidebarCta
                heading="Not sure which market to start in?"
                subhead="Tell us where you're launching and we'll tell you honestly what to prioritize first."
              />
              <nav aria-label="Quick jump" className="rounded-xl border border-black/10 bg-white p-5">
                <Eyebrow>Quick jump</Eyebrow>
                <ul className="mt-4 space-y-4">
                  {COUNTRIES.filter((country) => country.status === "live").map((country) => (
                    <li key={country.slug}>
                      <Link
                        href={`/${country.slug}`}
                        className={`text-sm font-semibold text-black hover:text-primary ${focusRing}`}
                      >
                        {country.name}
                      </Link>
                      <ul className="mt-2 space-y-1.5 border-l-2 border-black/10 pl-4">
                        {country.cities
                          .filter((city) => city.status === "live")
                          .map((city) => (
                            <li key={city.slug}>
                              <Link
                                href={`/${country.slug}/${city.slug}`}
                                className={`block text-sm text-primary-mid hover:text-primary ${focusRing}`}
                              >
                                {city.name}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </nav>
            </PageSidebar>
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
