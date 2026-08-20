import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "../Eyebrow";
import { COUNTRIES } from "@/lib/locations";
import { SERVICES } from "@/lib/services";
import { HERO_IMAGES } from "@/lib/heroImages";
import { imageExists } from "@/lib/imageExists";

export default function WhoWeAre() {
  const liveCountries = COUNTRIES.filter((c) => c.status === "live");
  const liveAreas = liveCountries
    .flatMap((c) => c.cities.flatMap((city) => city.areas))
    .filter((a) => a.status === "live");
  const liveServices = SERVICES.filter((s) => s.status === "live");
  const hasPhoto = imageExists(HERO_IMAGES.about);

  const stats = [
    { value: `${liveCountries.length}`, label: "GCC markets" },
    { value: `${liveAreas.length}`, label: "Dubai communities" },
    { value: `${liveServices.length}`, label: "Services, in-house" },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-black md:text-4xl">
              The specialist real estate marketing team
              <br />
              <span className="border-b-2 border-secondary">built around your pipeline.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-black">
              Most real estate marketing gets split across a website agency, a paid media
              freelancer, a photographer, and whoever&apos;s willing to touch the CRM — four
              separate relationships that rarely talk to each other. We run SEO, paid media,
              content production, branding, and CRM automation as one coordinated system instead.
            </p>
            <p className="mt-4 text-base leading-relaxed text-black">
              We combine <strong>SEO, Google Ads, paid social, web design, content production, and
              CRM automation</strong> into a single accountable team — not five vendors that happen
              to share a client.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-mid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-sm"
            >
              See how we work
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-primary">
              {hasPhoto && (
                <Image
                  src={HERO_IMAGES.about}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
              )}
            </div>
            <div className="absolute -bottom-6 left-1/2 flex w-[92%] -translate-x-1/2 divide-x divide-black/10 rounded-xl border border-black/10 bg-white p-5 shadow-lg sm:w-4/5">
              {stats.map((stat) => (
                <div key={stat.label} className="flex-1 px-3 text-center first:pl-0 last:pr-0">
                  <p className="text-2xl font-bold tabular-nums text-primary">{stat.value}</p>
                  <p className="mt-1 text-xs text-primary-mid">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
