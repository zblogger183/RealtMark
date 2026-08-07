import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ClosingCta } from "@/components/ClosingCta";
import { HeroBackground } from "@/components/HeroBackground";
import { COUNTRIES, getCountryBySlug } from "@/lib/locations";

export const dynamicParams = false;

export function generateStaticParams() {
  return COUNTRIES.map((country) => ({ country: country.slug }));
}

type Params = Promise<{ country: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { country: countrySlug } = await params;
  const country = getCountryBySlug(countrySlug);
  if (!country) return {};

  return {
    title: `Real Estate Marketing in ${country.name} — RealtMark`,
    description:
      country.intro ??
      `Real estate digital marketing across ${country.name}: ${country.cities
        .map((city) => city.name)
        .join(", ")}.`,
    alternates: { canonical: `/${country.slug}` },
    robots: { index: country.status === "live", follow: true },
  };
}

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-sm";

export default async function CountryHubPage({ params }: { params: Params }) {
  const { country: countrySlug } = await params;
  const country = getCountryBySlug(countrySlug);
  if (!country) notFound();

  return (
    <>
      <Navbar />
      <main className="bg-white">
        <HeroBackground imagePath={country.heroImage} tone="light">
          <div className="mx-auto max-w-content px-6 pt-8 md:px-10">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Locations", href: "/locations" },
                { label: country.name },
              ]}
            />
          </div>

          <div className="mx-auto max-w-content px-6 pt-10 md:px-10 md:pt-12">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold text-black md:text-5xl">
                Real Estate Marketing in {country.name}
              </h1>
              <p className="mt-5 text-base leading-relaxed text-black">
                {country.intro ??
                  "Local strategy by city, built around how buyers actually search in each market rather than one country-wide campaign."}
              </p>
            </div>
          </div>
        </HeroBackground>

        <div className="mx-auto max-w-content px-6 pb-16 md:px-10 md:pb-20">
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {country.cities.map((city) => (
              <Link
                key={city.slug}
                href={`/${country.slug}/${city.slug}`}
                className={`group block border-t-2 border-black/10 pt-6 transition-colors duration-200 hover:border-secondary ${focusRing}`}
              >
                <h2 className="text-xl font-bold text-black">{city.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-black">
                  {city.areas.length > 0
                    ? `${city.areas.length} area${city.areas.length === 1 ? "" : "s"} covered`
                    : city.heroSubhead ?? "Coming soon."}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <ClosingCta
          heading="Not sure where to start in this market?"
          subhead="Book a strategy call and we'll tell you honestly what to prioritize first."
          showForm
        />
      </main>
      <Footer />
    </>
  );
}
