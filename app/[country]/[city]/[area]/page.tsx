import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Eyebrow } from "@/components/Eyebrow";
import { CtaLink } from "@/components/CtaLink";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ClosingCta } from "@/components/ClosingCta";
import { COUNTRIES, getCountryBySlug, getCityBySlug, getAreaBySlug } from "@/lib/locations";
import { getServiceBySlug } from "@/lib/services";
import { SITE_URL } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return COUNTRIES.flatMap((country) =>
    country.cities.flatMap((city) =>
      city.areas.map((area) => ({ country: country.slug, city: city.slug, area: area.slug }))
    )
  );
}

type Params = Promise<{ country: string; city: string; area: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { country: countrySlug, city: citySlug, area: areaSlug } = await params;
  const country = getCountryBySlug(countrySlug);
  const city = country && getCityBySlug(country, citySlug);
  const area = city && getAreaBySlug(city, areaSlug);
  if (!country || !city || !area) return {};

  return {
    title: `${area.name} Real Estate Marketing — RealtMark`,
    description: area.heroSubhead,
    alternates: { canonical: `/${country.slug}/${city.slug}/${area.slug}` },
    robots: { index: area.status === "live", follow: true },
  };
}

export default async function AreaDetailPage({ params }: { params: Params }) {
  const { country: countrySlug, city: citySlug, area: areaSlug } = await params;
  const country = getCountryBySlug(countrySlug);
  const city = country && getCityBySlug(country, citySlug);
  const area = city && getAreaBySlug(city, areaSlug);
  if (!country || !city || !area) notFound();

  const areaJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Real Estate Digital Marketing",
    name: area.heroHeadline,
    description: area.heroSubhead,
    provider: {
      "@type": "Organization",
      name: "RealtMark",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Place",
      name: `${area.name}, ${city.name}, ${country.name}`,
    },
    url: `${SITE_URL}/${country.slug}/${city.slug}/${area.slug}`,
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-primary">
          <div className="mx-auto max-w-content px-6 pb-16 pt-8 md:px-10 md:pb-20 md:pt-10">
            <Breadcrumbs
              tone="light"
              items={[
                { label: "Home", href: "/" },
                { label: "Locations", href: "/locations" },
                { label: country.name, href: `/${country.slug}` },
                { label: city.name, href: `/${country.slug}/${city.slug}` },
                { label: area.name },
              ]}
            />
            <div className="mt-8 max-w-2xl md:mt-10">
              <Eyebrow tone="light">{area.name}</Eyebrow>
              <h1 className="mt-5 text-4xl font-bold text-white md:text-5xl">{area.heroHeadline}</h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80">{area.heroSubhead}</p>
              <div className="mt-9">
                <CtaLink href="/contact" variant="primary">
                  Book a Strategy Call
                </CtaLink>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-24">
            <div className="max-w-2xl">
              <Eyebrow>Local market</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold text-black">What this market actually looks like</h2>
              <p className="mt-4 text-base leading-relaxed text-black">{area.marketContext}</p>
            </div>
          </div>
        </section>

        <section className="border-t border-black/10 bg-white">
          <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-24">
            <div className="max-w-2xl">
              <Eyebrow>What we do here</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold text-black">Weighted to how this market actually buys</h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {area.localizedServices.map((entry) => {
                const service = getServiceBySlug(entry.serviceSlug);
                if (!service) return null;
                const Icon = service.icon;
                return (
                  <Link
                    key={entry.serviceSlug}
                    href={`/services/${service.slug}`}
                    className="group block border-t-2 border-black/10 pt-6 transition-colors duration-200 hover:border-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-sm"
                  >
                    <Icon className="h-7 w-7 text-primary transition-colors duration-200 group-hover:text-primary-mid" />
                    <h3 className="mt-5 text-xl font-bold text-black">{service.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-black">{entry.note}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-black/10 bg-white">
          <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-20">
            <Eyebrow>Nearby</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-black">Also active nearby</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {area.nearbyAreas.map((nearby) => (
                // TODO: once sibling area pages exist (e.g. /uae/dubai/downtown-dubai),
                // wrap each chip in a Link to its area page instead of a plain span.
                <span
                  key={nearby}
                  className="rounded-sm border border-black/15 px-4 py-2 text-sm text-black"
                >
                  {nearby}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-black/10 bg-white">
          <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-24">
            <div className="max-w-2xl">
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold text-black">Questions worth answering directly</h2>
            </div>
            <FaqAccordion items={area.faq} />
          </div>
        </section>

        <ClosingCta
          heading="Ready to talk local strategy?"
          subhead="Book a strategy call and we'll tell you honestly whether this is the right place to start."
        />
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaJsonLd) }}
      />
    </>
  );
}
