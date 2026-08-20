import Link from "next/link";
import { Eyebrow } from "../Eyebrow";
import { CtaLink } from "../CtaLink";
import { SERVICES } from "@/lib/services";

const TAGS: Record<string, string> = {
  "real-estate-seo": "20 areas covered",
  "website-landing-pages": "Core Web Vitals",
  "paid-ads": "Google + Meta",
  "branding-identity": "Positioning & identity",
  "content-production": "Drone & 3D tours",
  "crm-automation": "GoHighLevel",
};

export default function ServicesIntro() {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[2fr_3fr] lg:gap-10">
          <div>
            <Eyebrow tone="light">Our services</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-white md:text-4xl">
              Your listings.
              <br />
              <span className="text-secondary">Every channel.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/70">
              SEO, paid media, web design, branding, content production, and CRM automation. One
              accountable team, run across six Gulf markets. No lock-in contracts.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Google Ads", "Meta Ads", "Bayut", "Property Finder"].map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-white/70"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-6">
              <CtaLink href="/services" variant="primary">
                View All Services
              </CtaLink>
              <Link
                href="/contact"
                className="text-sm font-semibold text-white hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm"
              >
                Free Strategy Call
              </Link>
            </div>
          </div>

          <div className="divide-y divide-white/10 border-t border-white/10">
            {SERVICES.filter((s) => s.status === "live").map((service, i) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex items-center gap-5 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm"
                >
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-white/5 text-secondary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-base font-bold text-white">
                      {String(i + 1).padStart(2, "0")}. {service.name}
                    </span>
                    <span className="mt-0.5 block truncate text-sm text-white/50">{service.oneLiner}</span>
                  </span>
                  {TAGS[service.slug] && (
                    <span className="hidden flex-shrink-0 text-xs font-semibold uppercase tracking-wide text-secondary sm:block">
                      {TAGS[service.slug]}
                    </span>
                  )}
                  <span
                    aria-hidden="true"
                    className="flex-shrink-0 text-white/30 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-secondary"
                  >
                    →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
