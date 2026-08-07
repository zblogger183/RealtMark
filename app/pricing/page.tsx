import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ClosingCta } from "@/components/ClosingCta";
import { HeroBackground } from "@/components/HeroBackground";
import { HERO_IMAGES } from "@/lib/heroImages";
import type { FaqItem } from "@/lib/services";

export const metadata: Metadata = {
  title: "Pricing — RealtMark",
  description:
    "Real estate marketing pricing for solo agents, brokerages, and developers across Dubai and the GCC — starting anchors in AED, not fixed packages.",
  alternates: { canonical: "/pricing" },
};

type Tier = {
  name: string;
  price: string;
  builtFor: string;
  included: string[];
};

const TIERS: Tier[] = [
  {
    name: "Solo Agent / Broker",
    price: "AED 3,000–6,000/month",
    builtFor: "Built for one person managing their own listings and lead flow, not a team.",
    included: [
      "One primary channel — SEO or paid ads — focused on your active listings and one or two communities",
      "WhatsApp-first lead capture and basic automated follow-up",
      "A single listing or personal-brand landing page",
      "Monthly reporting tied to leads, not impressions",
    ],
  },
  {
    name: "Brokerage",
    price: "AED 8,000–18,000/month",
    builtFor: "Built for multiple agents and an active listings pipeline across several communities.",
    included: [
      "Coordinated SEO and paid media across the full community set you operate in",
      "Multi-agent CRM routing and shared pipeline visibility",
      "A standing site structure covering multiple agents and listings",
      "Ongoing content coverage, not one-off shoots",
      "Consolidated reporting across agents and channels",
    ],
  },
  {
    name: "Developer / Off-Plan Launch",
    price: "AED 20,000–40,000+/month",
    builtFor: "Built around a specific launch date, not an ongoing retainer rhythm.",
    included: [
      "Multi-channel campaign management — SEO, paid, content, and CRM — coordinated around the launch timeline",
      "A dedicated launch page and launch-specific creative, including 3D renders and virtual tours where the project isn't built yet",
      "High-volume lead capture and routing built for a launch-week spike, not steady-state flow",
      "Reporting cadence tied to the launch window, not a generic monthly cycle",
    ],
  },
];

const FAQS: FaqItem[] = [
  {
    question: "How long is the contract?",
    answer:
      "Most engagements start with a three-month minimum — long enough for paid media to optimise and for early SEO signal to show. After that, it runs quarterly or month-to-month depending on the service. No multi-year lock-in.",
  },
  {
    question: "What happens if scope changes mid-engagement?",
    answer:
      "The retainer gets reassessed and adjusted, not left mismatched to what's actually happening. If a brokerage's listings volume grows or a developer's launch timeline shifts, we requote before the next billing cycle, not after you've noticed the scope no longer fits.",
  },
  {
    question: "Does pricing differ by GCC country?",
    answer:
      "Not by a fixed formula, but scope often does. A market that's still opening to foreign buyers, like Saudi Arabia, or one with a smaller freehold zone list, like Bahrain or Qatar, typically needs a different mix of services than an established market like Dubai — and that shapes the quote more than the country itself does.",
  },
  {
    question: "Is this a fixed package, or a custom quote?",
    answer:
      "A custom quote, in the end — the same disclosure we use on every service page. These are starting anchors, not fixed packages. Exact scope depends on how many markets, channels, and listings are actually in play.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroBackground imagePath={HERO_IMAGES.pricing}>
          <div className="mx-auto max-w-content px-6 pb-16 pt-8 md:px-10 md:pb-20 md:pt-10">
            <Breadcrumbs tone="light" items={[{ label: "Home", href: "/" }, { label: "Pricing" }]} />
            <div className="mt-8 max-w-2xl md:mt-10">
              <Eyebrow tone="light">Pricing</Eyebrow>
              <h1 className="mt-5 text-4xl font-bold text-white md:text-5xl">
                Three ways to work with us, scoped to who&apos;s buying
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80">
                A solo agent, a multi-agent brokerage, and a developer running an off-plan launch
                need genuinely different scope, not the same package at three price points.
              </p>
            </div>
          </div>
        </HeroBackground>

        <section className="bg-white">
          <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-24">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
              {TIERS.map((tier) => (
                <div key={tier.name} className="border-t-2 border-black/10 pt-6">
                  <h2 className="text-xl font-bold text-black">{tier.name}</h2>
                  <p className="mt-2 text-lg font-bold tabular-nums text-primary">{tier.price}</p>
                  <p className="mt-3 text-sm leading-relaxed text-primary-mid">{tier.builtFor}</p>
                  <ul className="mt-6 space-y-3">
                    {tier.included.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-black">
                        <span
                          className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary-mid">
          <div className="mx-auto max-w-content px-6 py-12 md:px-10 md:py-14">
            <div className="max-w-2xl">
              <Eyebrow tone="light">One disclosure, every tier</Eyebrow>
              <p className="mt-3 text-base leading-relaxed text-white">
                Ad spend on Google and Meta is separate from every figure above and paid directly
                by you, not folded into the retainer. None of the ranges on this page include
                media budget.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-24">
            <div className="max-w-2xl">
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold text-black">Questions worth answering directly</h2>
            </div>
            <FaqAccordion items={FAQS} />
          </div>
        </section>

        <ClosingCta
          heading="Not sure which tier actually fits?"
          subhead="Book a strategy call and we'll tell you honestly what scope your launch or your listings actually need."
          showForm
        />
      </main>
      <Footer />
    </>
  );
}
