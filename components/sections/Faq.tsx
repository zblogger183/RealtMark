import { Eyebrow } from "../Eyebrow";
import { FaqAccordion } from "../FaqAccordion";
import type { FaqItem } from "@/lib/services";

const FAQS: FaqItem[] = [
  {
    question: "What does a typical engagement cost?",
    answer:
      "It depends on scope. A focused engagement — a single paid media campaign or an SEO sprint — typically starts around AED 15,000 per month. Full-service retainers covering SEO, paid media, content, and CRM together usually run AED 30,000–80,000 per month, depending on how many markets and channels are involved. We scope to the launch or the brokerage, not a fixed package.",
  },
  {
    question: "How long until we see results?",
    answer:
      "Paid media can generate qualified leads within one to two weeks of launch. SEO is slower, and we won't pretend otherwise — meaningful ranking movement on competitive terms, such as “apartments for sale Dubai Marina,” realistically takes four to six months, longer for the most contested head terms.",
  },
  {
    question: "Do you understand the regulatory side — Trakheesi, RERA, Madhmoun?",
    answer:
      "Yes, and it shapes campaigns from the first draft. Every ad carries the correct permit references for its market, and creative is checked against Dubai's Trakheesi rules, RERA requirements, and Abu Dhabi's Madhmoun process before launch, not after a complaint.",
  },
  {
    question: "Can you actually work in Arabic, or is it translated English?",
    answer:
      "Arabic creative is written by native Arabic-speaking copywriters as original copy, reviewed independently of the English version. We treat it as a first-language market, not a translation pass on top of an English campaign.",
  },
  {
    question: "How long is the contract?",
    answer:
      "Most engagements start with a three-month minimum — long enough for paid media to optimise and for early SEO signal to show. After that, it runs quarterly or month-to-month depending on the service. No multi-year lock-in.",
  },
];

export default function Faq() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-2xl">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-black">Questions worth answering directly</h2>
        </div>
        <FaqAccordion items={FAQS} />
      </div>
    </section>
  );
}
