import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy — RealtMark",
  description: "How RealtMark collects, uses, and protects information from visitors and clients across our website and marketing services.",
  alternates: { canonical: "/privacy-policy" },
};

const LAST_UPDATED = "August 20, 2026";

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-black/10 pt-8">
      <h2 className="text-xl font-bold text-black">{heading}</h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-black/80">{children}</div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <div className="mx-auto max-w-content px-6 pt-8 md:px-10">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
        </div>

        <div className="mx-auto max-w-content px-6 pb-20 pt-10 md:px-10 md:pb-28 md:pt-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-black md:text-5xl">Privacy Policy</h1>
            <p className="mt-4 text-sm text-primary-mid">Last updated {LAST_UPDATED}</p>
            <p className="mt-6 text-base leading-relaxed text-black/80">
              This policy explains what information RealtMark collects through this website and our
              marketing work, why we collect it, and how you can control it. It applies to
              realtmark.com and to inquiries sent through our forms, email, phone, or WhatsApp.
            </p>

            <div className="mt-10 space-y-10">
              <Section heading="1. Information we collect">
                <p>
                  <strong className="font-semibold text-black">Information you give us directly</strong> —
                  when you submit a form on this site (the strategy-call form, sidebar lead forms, or the
                  contact page) or message us, we receive your name, phone/WhatsApp number, email address,
                  and whatever you tell us about your project. If you sign up for our newsletter, we
                  receive your email address.
                </p>
                <p>
                  <strong className="font-semibold text-black">Information collected automatically</strong>{" "}
                  — like most business websites, this site may use standard analytics and advertising
                  tools (for example Google Analytics, Google Ads, and Meta/Facebook Pixel) to understand
                  how the site is used and to measure our own marketing performance. These tools can set
                  cookies and collect information such as your IP address, browser and device type, pages
                  visited, and how you arrived at the site.
                </p>
              </Section>

              <Section heading="2. How we use your information">
                <ul className="list-disc space-y-2 pl-5">
                  <li>To respond to your inquiry and prepare a scope or quote.</li>
                  <li>To follow up by email, phone, or WhatsApp about a project you&apos;ve asked us about.</li>
                  <li>To run and improve our own website and marketing, and measure what&apos;s working.</li>
                  <li>To meet legal, accounting, or regulatory obligations we&apos;re subject to.</li>
                </ul>
                <p>We do not sell your personal information to anyone.</p>
              </Section>

              <Section heading="3. Who we share information with">
                <p>
                  We share information only with the service providers we use to actually run the
                  business — email hosting, our CRM (GoHighLevel), WhatsApp Business, our website host
                  (Vercel), and analytics/advertising platforms (Google, Meta) once those are active. Each
                  of these providers only receives what it needs to do its job, and none of them is
                  permitted to use your information for their own unrelated marketing.
                </p>
                <p>
                  We may also disclose information if required to by law, or to protect the rights,
                  safety, or property of RealtMark or others.
                </p>
              </Section>

              <Section heading="4. Cookies">
                <p>
                  Cookies set by analytics and advertising tools fall into two rough categories:
                  performance cookies (how the site is being used) and advertising cookies (measuring and
                  targeting ad campaigns). You can block or delete cookies through your browser settings
                  at any time; doing so may affect how some parts of the site work but won&apos;t stop you from
                  reaching us by email, phone, or WhatsApp.
                </p>
              </Section>

              <Section heading="5. International data transfers">
                <p>
                  RealtMark serves clients across the UAE and the wider GCC, and our team and service
                  providers may be located in different countries. Where information is transferred across
                  borders, we take reasonable steps to keep it as secure as it would be if it stayed in one
                  place.
                </p>
              </Section>

              <Section heading="6. How long we keep information">
                <p>
                  We keep inquiry and client information for as long as it&apos;s genuinely useful — to answer
                  your inquiry, deliver a service you&apos;ve engaged us for, or meet a legal/accounting
                  requirement — and delete or anonymise it once none of those apply.
                </p>
              </Section>

              <Section heading="7. Your rights">
                <p>
                  You can ask us what information we hold about you, ask us to correct it, or ask us to
                  delete it, by emailing{" "}
                  <a href="mailto:hello@realtmark.com" className="font-semibold text-primary hover:text-primary-mid">
                    hello@realtmark.com
                  </a>
                  . Depending on where you&apos;re located, you may have additional rights under local data
                  protection law — we&apos;ll honour those requests the same way regardless of jurisdiction.
                </p>
              </Section>

              <Section heading="8. Security">
                <p>
                  We use reasonable technical and organisational measures to protect the information we
                  hold. No method of transmission or storage is completely secure, and we can&apos;t guarantee
                  absolute security.
                </p>
              </Section>

              <Section heading="9. Children&apos;s privacy">
                <p>
                  This site is intended for businesses and professionals in the real estate industry, not
                  children. We don&apos;t knowingly collect information from anyone under 18.
                </p>
              </Section>

              <Section heading="10. Third-party links">
                <p>
                  This site links to third-party portals and platforms (for example Bayut, Property
                  Finder, Dubizzle, Google, and Meta). We aren&apos;t responsible for the privacy practices of
                  sites we don&apos;t operate — check their own policies before sharing information with them.
                </p>
              </Section>

              <Section heading="11. Changes to this policy">
                <p>
                  We may update this policy as the business and the tools we use evolve. We&apos;ll update the
                  &quot;last updated&quot; date above whenever we do — we won&apos;t make material changes without
                  updating this page.
                </p>
              </Section>

              <Section heading="12. Contact us">
                <p>
                  Questions about this policy or your information — email{" "}
                  <a href="mailto:hello@realtmark.com" className="font-semibold text-primary hover:text-primary-mid">
                    hello@realtmark.com
                  </a>
                  , or use the{" "}
                  <Link href="/contact" className="font-semibold text-primary hover:text-primary-mid">
                    contact page
                  </Link>
                  .
                </p>
              </Section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
