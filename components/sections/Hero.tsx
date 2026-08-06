import { LatticeField } from "../Lattice";
import { Eyebrow } from "../Eyebrow";
import { CtaLink } from "../CtaLink";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <LatticeField id="hero-lattice-base" className="text-white opacity-[0.02]" scale={1.6} />
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 md:block">
        <LatticeField id="hero-lattice-accent" className="text-white opacity-[0.05]" scale={1.6} />
      </div>

      <div className="relative mx-auto max-w-content px-6 py-24 md:px-10 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <Eyebrow tone="light">Real Estate Marketing — Dubai &amp; the GCC</Eyebrow>
          <h1 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Digital growth partner for real estate across Dubai and the Gulf.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80">
            SEO, paid media, and content systems built to turn regional and international demand
            into qualified buyer and investor leads — for developers, brokerages, and agents.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <CtaLink href="/contact" variant="primary">
              Book a Strategy Call
            </CtaLink>
            <CtaLink href="/portfolio" variant="outline-light">
              See Our Work
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
