"use client";

import { useState } from "react";
import { Eyebrow } from "../Eyebrow";
import { SHOW_SAMPLE_CONTENT } from "@/lib/sampleContent";

const TESTIMONIALS = [
  {
    initials: "RS",
    name: "Rania Al Suwaidi",
    role: "Marketing Director, Meridian Properties",
    quote:
      "The community-level SEO structure was the difference between our JVC launch competing on price and it actually ranking. Six months in, organic is now our second-largest lead source.",
  },
  {
    initials: "OH",
    name: "Omar Haddad",
    role: "Founder, Haddad & Co. Realty",
    quote:
      "We went from every agent running their own WhatsApp habit to an actual pipeline we can see across the whole team. Follow-up stopped depending on who remembered to check their phone.",
  },
  {
    initials: "SM",
    name: "Sofia Marchetti",
    role: "Head of Growth, Skyline Developments",
    quote:
      "Our Downtown launch and our JVC launch got genuinely different campaigns, not the same template with the address swapped. That distinction alone justified the engagement.",
  },
  {
    initials: "FM",
    name: "Faisal Al Marri",
    role: "Sales Director, Palm Vista Realty",
    quote:
      "Reporting finally ties back to qualified pipeline instead of impressions. It's the first time a marketing partner's numbers matched what our sales team was actually seeing.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  if (!SHOW_SAMPLE_CONTENT) return null;

  const current = TESTIMONIALS[index];

  function prev() {
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }

  function next() {
    setIndex((i) => (i + 1) % TESTIMONIALS.length);
  }

  return (
    <section data-sample="true" className="bg-white">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-2xl">
          <Eyebrow>What clients say</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-black">Sample placeholder testimonials</h2>
        </div>

        <div className="mt-12 max-w-3xl border-t-2 border-secondary pt-8">
          <p className="text-xl leading-relaxed text-black">&ldquo;{current.quote}&rdquo;</p>
          <div className="mt-6 flex items-center gap-4">
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
              {current.initials}
            </span>
            <div>
              <p className="text-sm font-bold text-black">{current.name}</p>
              <p className="text-sm text-primary-mid">{current.role}</p>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="rounded-sm border border-black/20 px-4 py-2 text-sm font-semibold text-black transition-colors duration-200 hover:border-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="rounded-sm border border-black/20 px-4 py-2 text-sm font-semibold text-black transition-colors duration-200 hover:border-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
            >
              Next
            </button>
            <span className="text-xs tabular-nums text-primary-mid">
              {index + 1} / {TESTIMONIALS.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
