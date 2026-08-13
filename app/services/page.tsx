import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";
import { PageSidebar, SidebarLinks, SidebarCta } from "@/components/PageSidebar";
import { SERVICES } from "@/lib/services";
import { COUNTRIES } from "@/lib/locations";
import { HERO_IMAGES } from "@/lib/heroImages";

export const metadata: Metadata = {
  title: "Services — RealtMark",
  description:
    "SEO, paid media, web design, branding, content production, and CRM systems for real estate developers, brokerages, and agents across Dubai and the GCC.",
  alternates: { canonical: "/services" },
};

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-sm";

export default function ServicesHubPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <PageHero
          imagePath={HERO_IMAGES.servicesIndex}
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
          eyebrow="Services"
          title="Everything under RealtMark's roof"
          subhead="Split by discipline instead of bundled into one vague retainer. A developer launching one tower needs a different mix than a 40-agent brokerage — run a single service on its own, or combine several and let the scope and reporting adjust accordingly."
          formSubjectPrefix="Services inquiry"
        />

        <div className="mx-auto max-w-content px-6 pb-16 pt-16 md:px-10 md:pb-20 md:pt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[3fr_2fr] lg:gap-10">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
              {SERVICES.map((service, i) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className={`group block border-t-2 border-black/10 pt-6 transition-colors duration-200 hover:border-secondary ${focusRing}`}
                  >
                    <div className="flex items-start justify-between">
                      <Icon className="h-7 w-7 text-primary transition-colors duration-200 group-hover:text-primary-mid" />
                      <span className="text-xs font-semibold tabular-nums text-primary-mid">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 className="mt-5 text-xl font-bold text-black">{service.name}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-black">{service.oneLiner}</p>
                  </Link>
                );
              })}
            </div>

            <PageSidebar>
              <SidebarCta
                heading="Not sure which service fits first?"
                subhead="Tell us about the launch or the brokerage and we'll tell you honestly where to start."
              />
              <SidebarLinks
                heading="Explore by market"
                items={COUNTRIES.filter((c) => c.status === "live").map((c) => ({
                  href: `/${c.slug}`,
                  label: c.name,
                }))}
              />
            </PageSidebar>
          </div>
        </div>

        <ClosingCta
          heading="Not sure which service fits first?"
          subhead="Tell us about the launch or the brokerage and we'll tell you honestly where to start."
        />
      </main>
      <Footer />
    </>
  );
}
