import Link from "next/link";
import { Eyebrow } from "../Eyebrow";
import { SERVICES } from "@/lib/services";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-sm";

export default function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-2xl">
          <Eyebrow>Services</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-black">
            Full-funnel marketing, built around one outcome.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-black">
            Every service below ties back to qualified buyer and investor leads — not reach, not
            impressions, not vanity engagement.
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
                <h3 className="mt-5 text-xl font-bold text-black">{service.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black">{service.oneLiner}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
