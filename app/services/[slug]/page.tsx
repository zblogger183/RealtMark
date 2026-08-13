import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Eyebrow } from "@/components/Eyebrow";
import { PageHero } from "@/components/PageHero";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ClosingCta } from "@/components/ClosingCta";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ToolsStack } from "@/components/ToolsStack";
import { LeadForm } from "@/components/LeadForm";
import { PageSidebar, SidebarNav, SidebarLinks } from "@/components/PageSidebar";
import { IconCheck } from "@/components/icons";
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

const PAGE_NAV = [
  { id: "problem", label: "The problem" },
  { id: "scope", label: "What's included" },
  { id: "process", label: "How this runs" },
  { id: "who-its-for", label: "Who it's for" },
  { id: "coverage", label: "Coverage" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ" },
];

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);

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
        <PageHero
          imagePath={service.heroImage}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: service.name },
          ]}
          eyebrow={service.name}
          title={service.heroHeadline}
          subhead={service.heroSubhead}
          formSubjectPrefix={`${service.name} inquiry`}
        />

        <section className="bg-white">
          <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-24">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-[3fr_2fr] lg:gap-10">
              <div className="space-y-16 md:space-y-20">
                <div id="problem" className="scroll-mt-24">
                  <Eyebrow>The problem</Eyebrow>
                  <h2 className="mt-3 text-3xl font-bold text-black">{service.problemHeading}</h2>
                  <p className="mt-4 text-base leading-relaxed text-black">{service.problem}</p>
                  <ComparisonTable problem={service.problem} whatsIncluded={service.whatsIncluded} />
                </div>

                <div id="scope" className="scroll-mt-24 border-t border-black/10 pt-16 md:pt-20">
                  <Eyebrow>What&apos;s included</Eyebrow>
                  <h2 className="mt-3 text-3xl font-bold text-black">Scope, in practice</h2>
                  <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {service.whatsIncluded.map((item) => (
                      <li
                        key={item}
                        className="flex gap-4 border-t border-black/10 pt-4 text-sm leading-relaxed text-black"
                      >
                        <IconCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {service.tools && service.tools.length > 0 && (
                    <div className="mt-14 border-t border-black/10 pt-10">
                      <Eyebrow>Tools we use</Eyebrow>
                      <ToolsStack tools={service.tools} />
                    </div>
                  )}
                </div>

                <div id="process" className="scroll-mt-24 rounded-2xl bg-primary-mid p-8 md:p-12">
                  <Eyebrow tone="light">Process</Eyebrow>
                  <h2 className="mt-3 text-3xl font-bold text-white">How this actually runs</h2>
                  <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2">
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

                <div id="who-its-for" className="scroll-mt-24 border-t border-black/10 pt-16 md:pt-20">
                  <Eyebrow>Who it&apos;s for</Eyebrow>
                  <h2 className="mt-3 text-3xl font-bold text-black">Scope changes with who&apos;s buying it</h2>
                  <div className="mt-10 space-y-8">
                    {service.whoItsFor.map((entry) => (
                      <div key={entry.segment} className="border-l-2 border-secondary pl-6">
                        <h3 className="text-lg font-bold text-black">{entry.segment}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-black">{entry.scope}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div id="coverage" className="scroll-mt-24 border-t border-black/10 pt-16 md:pt-20">
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

                <div id="pricing" className="scroll-mt-24 border-t border-black/10 pt-16 md:pt-20">
                  <Eyebrow>Pricing</Eyebrow>
                  <h2 className="mt-3 text-3xl font-bold text-black">What this actually costs</h2>
                  <p className="mt-4 text-base leading-relaxed text-black">{service.pricingAnchor}</p>
                </div>

                <div id="faq" className="scroll-mt-24 border-t border-black/10 pt-16 md:pt-20">
                  <Eyebrow>FAQ</Eyebrow>
                  <h2 className="mt-3 text-3xl font-bold text-black">Questions worth answering directly</h2>
                  <div className="mt-10">
                    <FaqAccordion items={service.faq} />
                  </div>
                </div>
              </div>

              <PageSidebar>
                <LeadForm variant="sidebar" />
                <SidebarNav items={PAGE_NAV} />
                <SidebarLinks
                  heading="Other services"
                  items={otherServices.map((s) => ({ href: `/services/${s.slug}`, label: s.name }))}
                />
              </PageSidebar>
            </div>
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
