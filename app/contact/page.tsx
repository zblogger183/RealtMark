import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Eyebrow } from "@/components/Eyebrow";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { HERO_IMAGES } from "@/lib/heroImages";

export const metadata: Metadata = {
  title: "Contact — RealtMark",
  description:
    "Book a strategy call with RealtMark. Tell us about your launch, brokerage, or listings and we'll reply within one business day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          imagePath={HERO_IMAGES.contact}
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
          eyebrow="Contact"
          title="Book a Strategy Call"
          subhead="Tell us about the launch, the brokerage, or the listings you're working with. We reply within one business day, and we'll tell you honestly whether we're the right fit."
          showForm={false}
        />

        <section className="bg-white">
          <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-24">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-[3fr_2fr]">
              <div>
                <Eyebrow>Get in touch</Eyebrow>
                <h2 className="mt-3 text-3xl font-bold text-black">Tell us about the project</h2>
                <div className="mt-8 max-w-xl">
                  <ContactForm />
                </div>
              </div>

              <div className="lg:border-l lg:border-black/10 lg:pl-16">
                <Eyebrow>Direct</Eyebrow>
                <h2 className="mt-3 text-xl font-bold text-black">Prefer to reach out directly?</h2>
                <div className="mt-5 space-y-1.5 text-sm">
                  <p>
                    <a
                      href="mailto:hello@realtmark.com"
                      className="font-semibold text-primary hover:text-primary-mid"
                    >
                      hello@realtmark.com
                    </a>
                  </p>
                  <p className="text-primary-mid">Dubai, United Arab Emirates</p>
                </div>

                <h3 className="mt-10 text-base font-bold text-black">What happens next</h3>
                <ol className="mt-4 space-y-3 text-sm leading-relaxed text-black">
                  <li className="flex gap-3">
                    <span className="font-bold tabular-nums text-primary-mid">01</span>
                    <span>We read what you send — no auto-reply, no sales queue.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold tabular-nums text-primary-mid">02</span>
                    <span>
                      We reply within one business day, usually with a couple of direct questions.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold tabular-nums text-primary-mid">03</span>
                    <span>
                      If it&apos;s a fit, we book a short call. If it isn&apos;t, we&apos;ll say so
                      — no hard sell either way.
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
