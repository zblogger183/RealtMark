import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Eyebrow } from "@/components/Eyebrow";
import { PageHero } from "@/components/PageHero";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ClosingCta } from "@/components/ClosingCta";
import { LeadForm } from "@/components/LeadForm";
import { PageSidebar, SidebarNav, SidebarLinks } from "@/components/PageSidebar";
import { COUNTRIES, getCountryBySlug, getCityBySlug, getAreaBySlug, getAreaByName } from "@/lib/locations";
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

const PAGE_NAV = [
  { id: "local-market", label: "Local market" },
  { id: "what-we-do", label: "What we do here" },
  { id: "nearby", label: "Nearby" },
  { id: "faq", label: "FAQ" },
];

export default async function AreaDetailPage({ params }: { params: Params }) {
  const { country: countrySlug, city: citySlug, area: areaSlug } = await params;
  const country = getCountryBySlug(countrySlug);
  const city = country && getCityBySlug(country, citySlug);
  const area = city && getAreaBySlug(city, areaSlug);
  if (!country || !city || !area) notFound();

  const nearbyLinks = area.nearbyAreas
    .map((name) => {
      const nearbyArea = getAreaByName(city, name);
      if (!nearbyArea || nearbyArea.status !== "live") return null;
      return { href: `/${country.slug}/${city.slug}/${nearbyArea.slug}`, label: nearbyArea.name };
    })
    .filter((entry): entry is { href: string; label: string } => entry !== null);

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
        <PageHero
          imagePath={area.heroImage}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Locations", href: "/locations" },
            { label: country.name, href: `/${country.slug}` },
            { label: city.name, href: `/${country.slug}/${city.slug}` },
            { label: area.name },
          ]}
          eyebrow={area.name}
          title={area.heroHeadline}
          subhead={area.heroSubhead}
          formSubjectPrefix={`${area.name} inquiry`}
        />

        <section className="bg-white">
          <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-24">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-[3fr_2fr] lg:gap-10">
              <div className="space-y-16 md:space-y-20">
                <div id="local-market" className="scroll-mt-24">
                  <Eyebrow>Local market</Eyebrow>
                  <h2 className="mt-3 text-3xl font-bold text-black">What this market actually looks like</h2>
                  <p className="mt-4 text-base leading-relaxed text-black">{area.marketContext}</p>
                </div>

                <div id="what-we-do" className="scroll-mt-24 border-t border-black/10 pt-16 md:pt-20">
                  <Eyebrow>What we do here</Eyebrow>
                  <h2 className="mt-3 text-3xl font-bold text-black">Weighted to how this market actually buys</h2>
                  <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
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

                <div id="nearby" className="scroll-mt-24 border-t border-black/10 pt-16 md:pt-20">
                  <Eyebrow>Nearby</Eyebrow>
                  <h2 className="mt-3 text-3xl font-bold text-black">Also active nearby</h2>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {area.nearbyAreas.map((nearby) => {
                      const linked = nearbyLinks.find((entry) => entry.label === nearby);
                      return linked ? (
                        <Link
                          key={nearby}
                          href={linked.href}
                          className="rounded-sm border border-black/15 px-4 py-2 text-sm text-black transition-colors duration-200 hover:border-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                        >
                          {nearby}
                        </Link>
                      ) : (
                        <span key={nearby} className="rounded-sm border border-black/15 px-4 py-2 text-sm text-black">
                          {nearby}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div id="faq" className="scroll-mt-24 border-t border-black/10 pt-16 md:pt-20">
                  <Eyebrow>FAQ</Eyebrow>
                  <h2 className="mt-3 text-3xl font-bold text-black">Questions worth answering directly</h2>
                  <div className="mt-10">
                    <FaqAccordion items={area.faq} />
                  </div>
                </div>
              </div>

              <PageSidebar>
                <LeadForm variant="sidebar" />
                <SidebarNav items={PAGE_NAV} />
                <SidebarLinks heading="Nearby areas" items={nearbyLinks} />
              </PageSidebar>
            </div>
          </div>
        </section>

        <ClosingCta
          heading="Ready to talk local strategy?"
          subhead="Book a strategy call and we'll tell you honestly whether this is the right place to start."
          showForm
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
