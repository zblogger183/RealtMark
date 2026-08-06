import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Eyebrow } from "@/components/Eyebrow";
import { CtaLink } from "@/components/CtaLink";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ClosingCta } from "@/components/ClosingCta";
import { SERVICES, getServiceBySlug } from "@/lib/services";
import { SITE_URL } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.name} — RealtMark`,
    description: service.heroSubhead,
    alternates: { canonical: `/services/${service.slug}` },
    robots: { index: service.status === "live", follow: true },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.heroSubhead,
    provider: {
      "@type": "Organization",
      name: "RealtMark",
      url: SITE_URL,
    },
    areaServed: ["United Arab Emirates", "Saudi Arabia", "Qatar", "Bahrain", "Oman", "Kuwait"],
    url: `${SITE_URL}/services/${service.slug}`,
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
                { label: "Services", href: "/services" },
                { label: service.name },
              ]}
            />
            <div className="mt-8 max-w-2xl md:mt-10">
              <Eyebrow tone="light">{service.name}</Eyebrow>
              <h1 className="mt-5 text-4xl font-bold text-white md:text-5xl">{service.heroHeadline}</h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80">{service.heroSubhead}</p>
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
              <Eyebrow>The problem</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold text-black">{service.problemHeading}</h2>
              <p className="mt-4 text-base leading-relaxed text-black">{service.problem}</p>
            </div>
          </div>
        </section>

        <section className="border-t border-black/10 bg-white">
          <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-24">
            <div className="max-w-2xl">
              <Eyebrow>What&apos;s included</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold text-black">Scope, in practice</h2>
            </div>
            <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {service.whatsIncluded.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 border-t border-black/10 pt-4 text-sm leading-relaxed text-black"
                >
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-primary-mid">
          <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
            <div className="max-w-2xl">
              <Eyebrow tone="light">Process</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold text-white">How this actually runs</h2>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-4">
              {service.process.map((step, i) => (
                <div key={step.step}>
                  <div className="flex items-center gap-3">
                    <span className="text-base font-bold tabular-nums text-secondary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-white/25" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">{step.step}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-24">
            <div className="max-w-2xl">
              <Eyebrow>Who it&apos;s for</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold text-black">Scope changes with who&apos;s buying it</h2>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-3">
              {service.whoItsFor.map((entry) => (
                <div key={entry.segment} className="border-l-2 border-secondary pl-6">
                  <h3 className="text-xl font-bold text-black">{entry.segment}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-black">{entry.scope}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-black/10 bg-white">
          <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-20">
            <Eyebrow>Coverage</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-black">Applied across Dubai and the wider Gulf</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {service.relatedLocations.map((location) => (
                // TODO: once /uae/dubai/... (and equivalent per-market) location pages exist,
                // wrap each chip in a Link to its location page instead of a plain span.
                <span
                  key={location}
                  className="rounded-sm border border-black/15 px-4 py-2 text-sm text-black"
                >
                  {location}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-black/10 bg-white">
          <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-24">
            <div className="max-w-2xl">
              <Eyebrow>Pricing</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold text-black">What this actually costs</h2>
              <p className="mt-4 text-base leading-relaxed text-black">{service.pricingAnchor}</p>
            </div>
          </div>
        </section>

        <section className="border-t border-black/10 bg-white">
          <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-24">
            <div className="max-w-2xl">
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold text-black">Questions worth answering directly</h2>
            </div>
            <FaqAccordion items={service.faq} />
          </div>
        </section>

        <ClosingCta
          heading="Ready to talk scope and pricing?"
          subhead="Book a strategy call and we'll tell you honestly whether this is the right place to start."
          showForm
        />
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
    </>
  );
}
