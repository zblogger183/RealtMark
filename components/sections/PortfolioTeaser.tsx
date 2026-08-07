import { Eyebrow } from "../Eyebrow";
import { LatticeField } from "../Lattice";
import { SHOW_SAMPLE_CONTENT } from "@/lib/sampleContent";

const PROJECTS = [
  {
    name: "The Meridian, Business Bay",
    tag: "Real Estate SEO",
    summary: "Community-level SEO structure built ahead of a canal-view tower launch.",
  },
  {
    name: "Arjan Green Collective",
    tag: "Paid Ads (Google + Meta)",
    summary: "Always-on paid campaign built for a still-emerging, garden-themed community.",
  },
  {
    name: "Palm Crest Residences",
    tag: "Branding & Identity",
    summary: "Positioning and identity for a branded beachfront launch on Palm Jebel Ali.",
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
            A full portfolio page is still pending — this previews the layout only.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <div key={project.name} className="border-t-2 border-black/10 pt-6">
              <div className="relative h-36 overflow-hidden rounded-sm bg-primary">
                <LatticeField id={`portfolio-teaser-${project.name}`} className="text-white opacity-[0.15]" scale={1.2} />
              </div>
              <span className="mt-5 inline-block text-xs font-semibold uppercase tracking-widest text-primary-mid">
                {project.tag}
              </span>
              <h3 className="mt-2 text-lg font-bold text-black">{project.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-black">{project.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
