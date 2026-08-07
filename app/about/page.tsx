import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ClosingCta } from "@/components/ClosingCta";
import { HeroBackground } from "@/components/HeroBackground";
import { HERO_IMAGES } from "@/lib/heroImages";
import Team from "@/components/sections/Team";
import PortfolioTeaser from "@/components/sections/PortfolioTeaser";

export const metadata: Metadata = {
  title: "About — RealtMark",
  description:
    "RealtMark is a complete digital growth partner for real estate across Dubai and the GCC — SEO, paid media, content, branding, and CRM run as one coordinated team.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroBackground imagePath={HERO_IMAGES.about}>
          <div className="mx-auto max-w-content px-6 pb-16 pt-8 md:px-10 md:pb-20 md:pt-10">
            <Breadcrumbs tone="light" items={[{ label: "Home", href: "/" }, { label: "About" }]} />
            <div className="mt-8 max-w-2xl md:mt-10">
              <Eyebrow tone="light">About</Eyebrow>
              <h1 className="mt-5 text-4xl font-bold text-white md:text-5xl">
                A complete digital growth partner for real estate across Dubai and the GCC
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80">
                One team running SEO, paid media, content, branding, and CRM together — not five
                vendors that happen to share a client.
              </p>
            </div>
          </div>
        </HeroBackground>

        <section className="bg-white">
          <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-24">
            <div className="max-w-2xl">
              <Eyebrow>Positioning</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold text-black">What &quot;complete&quot; actually means here</h2>
              <p className="mt-4 text-base leading-relaxed text-black">
                Most real estate marketing gets split across a website agency, a paid media
                freelancer, a photographer, and whoever&apos;s willing to touch the CRM — four
                separate relationships that rarely talk to each other, each optimising for their
                own slice of the funnel. We run SEO, paid media, content production, branding, and
                CRM automation as one coordinated system instead, because a paid campaign that
                drives traffic to a slow page, or a CRM that has no idea which channel a lead came
                from, is a coordination problem more than a tools problem. One team means the
                handoffs that usually get lost between vendors don&apos;t happen here.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-primary-mid">
          <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-24">
            <div className="max-w-2xl">
              <Eyebrow tone="light">How we work</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold text-white">Built for how this region actually works</h2>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                Every Gulf market we work in has its own advertising rules, and they&apos;re not
                optional footnotes. Dubai&apos;s Trakheesi system requires a permit number on
                property advertising before it runs, RERA governs how brokers and projects get
                registered and represented, and Abu Dhabi&apos;s Madhmoun process adds its own
                approval layer on top. We treat that regulatory literacy as part of the actual
                marketing work, not a compliance checkbox handled by someone else after the
                creative is already signed off.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                The same applies to language. When a campaign runs in Arabic, it&apos;s written in
                Arabic from the first draft by people who think in the language, not translated
                afterward from an English version and hoped nothing was lost in the process. A
                campaign that reads as translated reads as an afterthought, and that&apos;s not the
                impression a serious developer or brokerage wants attached to a launch.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-24">
            <div className="max-w-2xl">
              <Eyebrow>Who we are</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold text-black">A focused team, not a generalist shop</h2>
              <p className="mt-4 text-base leading-relaxed text-black">
                RealtMark is a focused, specialist agency — not a generalist shop that happens to
                also do real estate, and not a team so large that campaigns get routed through
                account layers before reaching the person actually doing the work. We&apos;d
                rather be direct about being a smaller, specialised team than pad this page with a
                headcount or a founding story for the sake of looking bigger than we are.
              </p>
              <p className="mt-4 text-base leading-relaxed text-black">
                What we can tell you directly: every service on this site is something we do
                in-house, across six Gulf markets, and every claim on this site — the compliance
                literacy, the bilingual capability, the reporting approach — is something you can
                test on a strategy call, not just read about here.
              </p>
            </div>
          </div>
        </section>

        <Team />
        <PortfolioTeaser />

        <ClosingCta
          heading="Want to see if we're actually the right fit?"
          subhead="Book a strategy call — we'll ask about your market and your goals before we talk about ourselves."
          showForm
        />
      </main>
      <Footer />
    </>
  );
}
