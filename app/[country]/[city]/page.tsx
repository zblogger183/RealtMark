import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Eyebrow } from "@/components/Eyebrow";
import { PageHero } from "@/components/PageHero";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ClosingCta } from "@/components/ClosingCta";
import { PageSidebar, SidebarNav, SidebarLinks, SidebarCta } from "@/components/PageSidebar";
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

const PAGE_NAV = [
  { id: "local-market", label: "Local market" },
  { id: "what-we-do", label: "What we do here" },
  { id: "faq", label: "FAQ" },
];

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

  const otherCities = country.cities.filter((c) => c.slug !== city.slug && c.status === "live");
  const otherCitiesLinks = otherCities.map((c) => ({
    href: `/${country.slug}/${c.slug}`,
    label: c.name,
  }));

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
          <PageHero
            imagePath={city.heroImage}
            breadcrumbs={breadcrumbItems}
            eyebrow={city.name}
            title={city.heroHeadline ?? city.name}
            subhead={city.heroSubhead ?? ""}
            formSubjectPrefix={`${city.name} inquiry`}
          />

          <section className="bg-white">
            <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-24">
              <div className="grid grid-cols-1 gap-16 lg:grid-cols-[3fr_2fr] lg:gap-10">
                <div className="space-y-16 md:space-y-20">
                  <div id="local-market" className="scroll-mt-24">
                    <Eyebrow>Local market</Eyebrow>
                    <h2 className="mt-3 text-3xl font-bold text-black">What this market actually looks like</h2>
                    <p className="mt-4 text-base leading-relaxed text-black">{city.marketContext}</p>
                  </div>

                  {city.localizedServices && city.localizedServices.length > 0 && (
                    <div id="what-we-do" className="scroll-mt-24 border-t border-black/10 pt-16 md:pt-20">
                      <Eyebrow>What we do here</Eyebrow>
                      <h2 className="mt-3 text-3xl font-bold text-black">Weighted to how this market actually buys</h2>
                      <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
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
                  )}

                  {city.faq && city.faq.length > 0 && (
                    <div id="faq" className="scroll-mt-24 border-t border-black/10 pt-16 md:pt-20">
                      <Eyebrow>FAQ</Eyebrow>
                      <h2 className="mt-3 text-3xl font-bold text-black">Questions worth answering directly</h2>
                      <div className="mt-10">
                        <FaqAccordion items={city.faq} />
                      </div>
                    </div>
                  )}
                </div>

                <PageSidebar>
                  <SidebarNav items={PAGE_NAV} />
                  {city.areas.length > 0 && (
                    <SidebarLinks
                      heading="Areas in this city"
                      items={city.areas
                        .filter((a) => a.status === "live")
                        .map((a) => ({ href: `/${country.slug}/${city.slug}/${a.slug}`, label: a.name }))}
                    />
                  )}
                  <SidebarLinks heading="Other cities" items={otherCitiesLinks} />
                </PageSidebar>
              </div>
            </div>
          </section>

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
        <PageHero
          imagePath={city.heroImage}
          breadcrumbs={breadcrumbItems}
          eyebrow={city.name}
          title={`Real Estate Marketing in ${city.name}`}
          subhead={`Local strategy for every area we cover in ${city.name} — organic, paid, content, and CRM support built around how buyers actually search neighbourhood by neighbourhood.`}
          formSubjectPrefix={`${city.name} inquiry`}
        />

        <div className="mx-auto max-w-content px-6 pb-16 pt-16 md:px-10 md:pb-20 md:pt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[3fr_2fr] lg:gap-10">
            <div>
              {city.areas.length > 0 ? (
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
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
                <p className="text-sm leading-relaxed text-primary-mid">
                  Area-level pages for {city.name} are coming soon. Book a strategy call for local
                  scope in the meantime.
                </p>
              )}
            </div>

            <PageSidebar>
              <SidebarCta
                heading="Not sure where to start in this market?"
                subhead="Book a strategy call and we'll tell you honestly what to prioritize first."
              />
              <SidebarLinks
                heading="Other cities"
                items={[{ href: `/${country.slug}`, label: `All of ${country.name}` }, ...otherCitiesLinks]}
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
