import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ClosingCta } from "@/components/ClosingCta";
import { SERVICES } from "@/lib/services";

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
        <div className="mx-auto max-w-content px-6 pt-8 md:px-10">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
        </div>

        <div className="mx-auto max-w-content px-6 pb-16 pt-10 md:px-10 md:pb-20 md:pt-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-black md:text-5xl">Services</h1>
            <p className="mt-5 text-base leading-relaxed text-black">
              Everything under RealtMark&apos;s roof, split by discipline instead of bundled into
              one vague retainer. A developer launching one tower needs a different mix than a
              40-agent brokerage — run a single service on its own, or combine several and let the
              scope and reporting adjust accordingly.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
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
