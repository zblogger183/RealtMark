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

type CardVariant = {
  card: string;
  blob: string;
  iconWrap: string;
  heading: string;
  body: string;
  tag: string;
  number: string;
};

const VARIANTS: CardVariant[] = [
  {
    card: "bg-gradient-to-br from-primary via-primary to-primary-mid border-primary",
    blob: "bg-secondary/25",
    iconWrap: "bg-secondary text-primary",
    heading: "text-white",
    body: "text-white/75",
    tag: "bg-white/10 text-secondary ring-1 ring-white/20",
    number: "text-white/10",
  },
  {
    card: "bg-gradient-to-br from-secondary/15 via-white to-white border-secondary/40",
    blob: "bg-primary/10",
    iconWrap: "bg-primary text-secondary",
    heading: "text-black",
    body: "text-black/65",
    tag: "bg-secondary/20 text-primary ring-1 ring-secondary/40",
    number: "text-primary/10",
  },
  {
    card: "bg-gradient-to-br from-primary-mid/10 via-white to-white border-primary-mid/30",
    blob: "bg-secondary/20",
    iconWrap: "bg-gradient-to-br from-primary-mid to-primary text-white",
    heading: "text-black",
    body: "text-black/65",
    tag: "bg-primary-mid/10 text-primary-mid ring-1 ring-primary-mid/30",
    number: "text-primary-mid/10",
  },
];

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
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const v = VARIANTS[index % VARIANTS.length];
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary hover:shadow-xl ${v.card} ${focusRing}`}
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full blur-2xl transition-transform duration-500 group-hover:scale-125 ${v.blob}`}
                />
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute -bottom-5 -right-2 select-none text-7xl font-black leading-none ${v.number}`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-xl shadow-lg transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105 ${v.iconWrap}`}
                >
                  <Icon className="h-6 w-6" />
                </span>

                <h3 className={`mt-6 text-lg font-bold ${v.heading}`}>{service.name}</h3>
                <p className={`mt-2 flex-1 text-sm leading-relaxed ${v.body}`}>{service.oneLiner}</p>

                {TAGS[service.slug] && (
                  <span
                    className={`mt-5 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${v.tag}`}
                  >
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
