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
import { COUNTRIES, getCountryBySlug, getCityBySlug } from "@/lib/locations";
import { getServiceBySlug } from "@/lib/services";
import { SITE_URL } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return COUNTRIES.flatMap((country) =>
    country.cities.map((city) => ({ country: country.slug, city: city.slug }))
  );
}

type Params = Promise<{ country: string; city: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { country: countrySlug, city: citySlug } = await params;
  const country = getCountryBySlug(countrySlug);
  const city = country && getCityBySlug(country, citySlug);
  if (!country || !city) return {};

  return {
    title: `Real Estate Marketing in ${city.name} — RealtMark`,
    description:
      city.heroSubhead ??
      `Real estate digital marketing in ${city.name}, ${country.name} — SEO, paid media, content, and CRM built around local buyer behaviour.`,
    alternates: { canonical: `/${country.slug}/${city.slug}` },
    robots: { index: city.status === "live", follow: true },
  };
}

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-sm";

export default async function CityHubPage({ params }: { params: Params }) {
  const { country: countrySlug, city: citySlug } = await params;
  const country = getCountryBySlug(countrySlug);
  const city = country && getCityBySlug(country, citySlug);
  if (!country || !city) notFound();

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Locations", href: "/locations" },
    { label: country.name, href: `/${country.slug}` },
    { label: city.name },
  ];

  const hasDeepContent = Boolean(city.heroHeadline && city.heroSubhead && city.marketContext);

  if (hasDeepContent) {
    const cityJsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Real Estate Digital Marketing",
      name: city.heroHeadline,
      description: city.heroSubhead,
      provider: {
        "@type": "Organization",
        name: "RealtMark",
        url: SITE_URL,
      },
      areaServed: { "@type": "Place", name: `${city.name}, ${country.name}` },
      url: `${SITE_URL}/${country.slug}/${city.slug}`,
    };

    return (
      <>
        <Navbar />
        <main>
          <section className="bg-primary">
            <div className="mx-auto max-w-content px-6 pb-16 pt-8 md:px-10 md:pb-20 md:pt-10">
              <Breadcrumbs tone="light" items={breadcrumbItems} />
              <div className="mt-8 max-w-2xl md:mt-10">
                <Eyebrow tone="light">{city.name}</Eyebrow>
                <h1 className="mt-5 text-4xl font-bold text-white md:text-5xl">{city.heroHeadline}</h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80">{city.heroSubhead}</p>
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
                <p className="mt-4 text-base leading-relaxed text-black">{city.marketContext}</p>
              </div>
            </div>
          </section>

          {city.localizedServices && city.localizedServices.length > 0 && (
            <section className="border-t border-black/10 bg-white">
              <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-24">
                <div className="max-w-2xl">
                  <Eyebrow>What we do here</Eyebrow>
                  <h2 className="mt-3 text-3xl font-bold text-black">Weighted to how this market actually buys</h2>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                  {city.localizedServices.map((entry) => {
                    const service = getServiceBySlug(entry.serviceSlug);
                    if (!service) return null;
                    const Icon = service.icon;
                    return (
                      <Link
                        key={entry.serviceSlug}
                        href={`/services/${service.slug}`}
                        className={`group block border-t-2 border-black/10 pt-6 transition-colors duration-200 hover:border-secondary ${focusRing}`}
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
          )}

          {city.faq && city.faq.length > 0 && (
            <section className="border-t border-black/10 bg-white">
              <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-24">
                <div className="max-w-2xl">
                  <Eyebrow>FAQ</Eyebrow>
                  <h2 className="mt-3 text-3xl font-bold text-black">Questions worth answering directly</h2>
                </div>
                <FaqAccordion items={city.faq} />
              </div>
            </section>
          )}

          <ClosingCta
            heading="Not sure where to start in this market?"
            subhead="Book a strategy call and we'll tell you honestly what to prioritize first."
            showForm
          />
        </main>
        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(cityJsonLd) }}
        />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="bg-white">
        <div className="mx-auto max-w-content px-6 pt-8 md:px-10">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <div className="mx-auto max-w-content px-6 pb-16 pt-10 md:px-10 md:pb-20 md:pt-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-black md:text-5xl">
              Real Estate Marketing in {city.name}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-black">
              Local strategy for every area we cover in {city.name} — organic, paid, content, and
              CRM support built around how buyers actually search neighbourhood by neighbourhood.
            </p>
          </div>

          {city.areas.length > 0 ? (
            <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {city.areas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/${country.slug}/${city.slug}/${area.slug}`}
                  className={`group block border-t-2 border-black/10 pt-6 transition-colors duration-200 hover:border-secondary ${focusRing}`}
                >
                  <h2 className="text-xl font-bold text-black">{area.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-black">{area.heroSubhead}</p>
                </Link>
              ))}
            </div>
          ) : (
            <p className="mt-14 text-sm leading-relaxed text-primary-mid">
              Area-level pages for {city.name} are coming soon. Book a strategy call for local
              scope in the meantime.
            </p>
          )}
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
