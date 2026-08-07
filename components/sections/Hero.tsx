import { Eyebrow } from "../Eyebrow";
import { CtaLink } from "../CtaLink";
import { LeadForm } from "../LeadForm";
import { HeroBackground } from "../HeroBackground";
import { HERO_IMAGES } from "@/lib/heroImages";

export default function Hero() {
  return (
    <HeroBackground imagePath={HERO_IMAGES.home} lattice>
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[3fr_2fr] lg:gap-10">
          <div className="max-w-2xl">
            <Eyebrow tone="light">Real Estate Marketing — Dubai &amp; the GCC</Eyebrow>
            <h1 className="mt-5 text-4xl font-bold text-white md:text-5xl">
              Digital growth partner for real estate across Dubai and the Gulf.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80">
              SEO, paid media, and content systems built to turn regional and international demand
              into qualified buyer and investor leads — for developers, brokerages, and agents.
            </p>
            <div className="mt-9">
              <CtaLink href="/portfolio" variant="outline-light">
                See Our Work
              </CtaLink>
            </div>
          </div>

          <div className="w-full max-w-xl">
            <LeadForm variant="hero" />
          </div>
        </div>
      </div>
    </HeroBackground>
  );
}
