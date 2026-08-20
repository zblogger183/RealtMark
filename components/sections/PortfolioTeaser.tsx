import Image from "next/image";
import { Eyebrow } from "../Eyebrow";
import { CtaLink } from "../CtaLink";
import { LatticeField } from "../Lattice";
import { SHOW_SAMPLE_CONTENT } from "@/lib/sampleContent";
import { imageExists } from "@/lib/imageExists";

// Photos here are real Dubai-area stock images already used elsewhere on the
// site — never claim to depict these specific invented projects, just used
// as scene-setting for a card layout preview that's gated off in production.
const PROJECTS = [
  {
    name: "The Meridian, Business Bay",
    tag: "Real Estate SEO",
    summary: "Community-level SEO structure built ahead of a canal-view tower launch.",
    image: "/images/hero/locations/uae/dubai/business-bay.jpg",
  },
  {
    name: "Arjan Green Collective",
    tag: "Paid Ads (Google + Meta)",
    summary: "Always-on paid campaign built for a still-emerging, garden-themed community.",
    image: "/images/hero/locations/uae/dubai/arjan.jpg",
  },
  {
    name: "Palm Crest Residences",
    tag: "Branding & Identity",
    summary: "Positioning and identity for a branded beachfront launch on Palm Jebel Ali.",
    image: "/images/hero/locations/uae/dubai/palm-jebel-ali.jpg",
  },
];

export default function PortfolioTeaser() {
  if (!SHOW_SAMPLE_CONTENT) return null;

  return (
    <section data-sample="true" className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-24">
        <div className="max-w-2xl">
          <Eyebrow>Portfolio</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-black">Sample placeholder project preview</h2>
          <p className="mt-4 text-base leading-relaxed text-black">
            Real case studies are still being documented and cleared with clients — this previews
            the card layout with invented projects, not published work.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => {
            const hasImage = imageExists(project.image);
            return (
              <div key={project.name} className="border-t-2 border-black/10 pt-6">
                <div className="relative h-36 overflow-hidden rounded-sm bg-primary">
                  {hasImage ? (
                    <Image src={project.image} alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                  ) : (
                    <LatticeField id={`portfolio-teaser-${project.name}`} className="text-white opacity-[0.15]" scale={1.2} />
                  )}
                </div>
                <span className="mt-5 inline-block text-xs font-semibold uppercase tracking-widest text-primary-mid">
                  {project.tag}
                </span>
                <h3 className="mt-2 text-lg font-bold text-black">{project.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-black">{project.summary}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12">
          <CtaLink href="/portfolio" variant="outline-dark">
            See the Portfolio Page
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
