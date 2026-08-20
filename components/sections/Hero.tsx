import { CtaLink } from "../CtaLink";
import { BadgePill } from "../BadgePill";
import { LeadForm } from "../LeadForm";
import { RotatingWord } from "../RotatingWord";
import { HeroBackground } from "../HeroBackground";
import { IconCheck } from "../icons";
import { HERO_IMAGES } from "@/lib/heroImages";
import { SERVICES } from "@/lib/services";
import { COUNTRIES } from "@/lib/locations";

const BULLETS = [
  "Senior specialists on your account — no juniors or offshore handoffs.",
  "Live in weeks, not months. Every service page has a real, honest scope.",
  "Quarterly or month-to-month after a three-month minimum. No multi-year lock-in.",
];

// Short enough to always render on one line in the rotating headline —
// the full service names (e.g. "Content (Photography, Drone, Video, 3D
// Tours)") wrap to a second line at this font size and shift the layout
// below it as the word rotates.
const ROTATOR_LABELS: Record<string, string> = {
  "real-estate-seo": "SEO",
  "website-landing-pages": "Web Design",
  "paid-ads": "Paid Ads",
  "branding-identity": "Branding",
  "content-production": "Content",
  "crm-automation": "CRM & Automation",
};

export default function Hero() {
  const liveCountries = COUNTRIES.filter((c) => c.status === "live");
  const liveAreas = liveCountries
    .flatMap((c) => c.cities.flatMap((city) => city.areas))
    .filter((a) => a.status === "live");
  const liveServices = SERVICES.filter((s) => s.status === "live");

  const stats = [
    { value: `${liveCountries.length}`, label: "GCC markets covered" },
    { value: `${liveAreas.length}`, label: "Dubai communities mapped" },
    { value: `${liveServices.length}`, label: "Core services, in-house" },
    { value: "0", label: "Multi-year lock-ins" },
  ];

  return (
    <HeroBackground imagePath={HERO_IMAGES.home} lattice>
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-24 lg:py-28">
        <BadgePill tone="light">Real estate marketing — Dubai &amp; the GCC</BadgePill>

        <div className="mt-10 grid grid-cols-1 items-start gap-12 lg:grid-cols-[3fr_2fr] lg:gap-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold leading-[1.1] text-white md:text-5xl">
              We grow <span className="text-white/45">your</span> pipeline with
              <br />
              <RotatingWord
                words={liveServices.map((s) => ROTATOR_LABELS[s.slug] ?? s.name)}
              />
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
              RealtMark is a{" "}
              <strong className="font-semibold text-white">specialist digital marketing agency</strong>{" "}
              for real estate developers, brokerages, and agents across Dubai and the wider Gulf —{" "}
              <strong className="font-semibold text-white">
                SEO, paid media, content production, branding, and CRM
              </strong>{" "}
              run as one coordinated team.
            </p>

            <ul className="mt-7 space-y-3">
              {BULLETS.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-sm text-white/80">
                  <IconCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <CtaLink href="/contact" variant="primary">
                Book a Strategy Call
              </CtaLink>
              <CtaLink href="/portfolio" variant="outline-light">
                See Our Work
              </CtaLink>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold tabular-nums text-white">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-white/50">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full max-w-xl lg:justify-self-end">
            <LeadForm variant="hero" />
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/60">
              <span className="flex items-center gap-1.5">
                <IconCheck className="h-4 w-4 text-secondary" /> Privacy protected
              </span>
              <span className="flex items-center gap-1.5">
                <IconCheck className="h-4 w-4 text-secondary" /> No commitment
              </span>
              <span className="flex items-center gap-1.5">
                <IconCheck className="h-4 w-4 text-secondary" /> 1 business-day reply
              </span>
            </div>
          </div>
        </div>
      </div>
    </HeroBackground>
  );
}
