import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Eyebrow } from "@/components/Eyebrow";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";
import { HERO_IMAGES } from "@/lib/heroImages";

export const metadata: Metadata = {
  title: "Portfolio — RealtMark",
  description:
    "How RealtMark documents and reports on real estate marketing engagements across Dubai and the GCC. Case studies are being published as engagements complete.",
  alternates: { canonical: "/portfolio" },
};

const CASE_STUDY_STEPS = [
  {
    step: "Starting position",
    description:
      "Where the listings, launch, or brokerage stood before we started — rankings, lead flow, or campaign performance, with real numbers, not a vague \"before\" claim.",
  },
  {
    step: "What we built",
    description:
      "The actual scope: which services ran, over what timeline, and why that mix fit the market and the client — not a generic list of deliverables.",
  },
  {
    step: "How we measured it",
    description:
      "Cost per qualified lead, ranking movement, or pipeline data tied to the engagement — the same reporting standard we hold ourselves to on every live account.",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          imagePath={HERO_IMAGES.portfolio}
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Portfolio" }]}
          eyebrow="Portfolio"
          title="Case studies, documented as engagements complete"
          subhead="We'd rather publish real, permission-cleared results than placeholder project cards. This page fills in as engagements wrap and clients sign off on sharing their numbers — want proof sooner? Ask on the form and we'll walk you through current work directly."
          formSubjectPrefix="Portfolio inquiry"
        />

        <section className="bg-white">
          <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-24">
            <div className="max-w-2xl">
              <Eyebrow>What&apos;s here today</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold text-black">Honest, not padded</h2>
              <p className="mt-4 text-base leading-relaxed text-black">
                Most agency portfolio pages fill this space with stock photography and invented
                results before a single real client has signed off. We&apos;d rather leave this
                page sparse and honest than do that. Every service page on this site is built
                entirely from real scope and real pricing — the same standard applies here once
                there&apos;s a case study to publish.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-black/10 bg-primary-mid">
          <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
            <div className="max-w-2xl">
              <Eyebrow tone="light">What a case study covers</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold text-white">The structure every one will follow</h2>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-3">
              {CASE_STUDY_STEPS.map((entry, i) => (
                <div key={entry.step}>
                  <div className="flex items-center gap-3">
                    <span className="text-base font-bold tabular-nums text-secondary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-white/25" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">{entry.step}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">{entry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ClosingCta
          heading="Want proof before the case studies are published?"
          subhead="Book a strategy call and we'll walk you through current, in-progress work directly — no case study write-up required."
          showForm
        />
      </main>
      <Footer />
    </>
  );
}
