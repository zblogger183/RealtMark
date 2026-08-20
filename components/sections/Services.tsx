import Link from "next/link";
import { Eyebrow } from "../Eyebrow";
import { SERVICES } from "@/lib/services";

const TAGS: Record<string, string> = {
  "real-estate-seo": "20 areas covered",
  "website-landing-pages": "Core Web Vitals",
  "paid-ads": "Google + Meta",
  "branding-identity": "Positioning & identity",
  "content-production": "Drone & 3D tours",
  "crm-automation": "GoHighLevel",
};

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-sm";

export default function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <Eyebrow>What we offer</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-black">
              Digital services,
              <br />
              <span className="border-b-2 border-secondary">engineered for pipeline.</span>
            </h2>
          </div>
          <Link
            href="/services"
            className={`flex-shrink-0 text-sm font-semibold text-primary hover:text-primary-mid ${focusRing}`}
          >
            All Services →
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group flex flex-col rounded-xl border border-black/10 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-secondary hover:shadow-lg ${focusRing}`}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/5 text-primary transition-colors duration-200 group-hover:bg-secondary/15">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-black">{service.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-black/70">{service.oneLiner}</p>
                {TAGS[service.slug] && (
                  <span className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-secondary/15 px-3 py-1 text-xs font-bold text-primary">
                    <span aria-hidden="true">↑</span> {TAGS[service.slug]}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
