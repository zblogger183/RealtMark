import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";
import { PageSidebar, SidebarLinks, SidebarCta } from "@/components/PageSidebar";
import { COUNTRIES, getCountryBySlug } from "@/lib/locations";
import { SERVICES } from "@/lib/services";

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

  const otherCountries = COUNTRIES.filter((c) => c.slug !== country.slug && c.status === "live");

  return (
    <>
      <Navbar />
      <main className="bg-white">
        <PageHero
          imagePath={country.heroImage}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Locations", href: "/locations" },
            { label: country.name },
          ]}
          eyebrow={country.name}
          title={`Real Estate Marketing in ${country.name}`}
          subhead={
            country.intro ??
            "Local strategy by city, built around how buyers actually search in each market rather than one country-wide campaign."
          }
          formSubjectPrefix={`${country.name} inquiry`}
        />

        <div className="mx-auto max-w-content px-6 pb-16 pt-16 md:px-10 md:pb-20 md:pt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[3fr_2fr] lg:gap-10">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
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

            <PageSidebar>
              <SidebarCta
                heading="Not sure where to start in this market?"
                subhead="Book a strategy call and we'll tell you honestly what to prioritize first."
              />
              <SidebarLinks
                heading="Other markets"
                items={otherCountries.map((c) => ({ href: `/${c.slug}`, label: c.name }))}
              />
              <SidebarLinks
                heading="Services"
                items={SERVICES.filter((s) => s.status === "live").map((s) => ({
                  href: `/services/${s.slug}`,
                  label: s.name,
                }))}
              />
            </PageSidebar>
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
