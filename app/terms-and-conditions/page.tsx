import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms & Conditions — RealtMark",
  description: "The terms that govern use of the RealtMark website and our real estate marketing services.",
  alternates: { canonical: "/terms-and-conditions" },
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

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <div className="mx-auto max-w-content px-6 pt-8 md:px-10">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]} />
        </div>

        <div className="mx-auto max-w-content px-6 pb-20 pt-10 md:px-10 md:pb-28 md:pt-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-black md:text-5xl">Terms &amp; Conditions</h1>
            <p className="mt-4 text-sm text-primary-mid">Last updated {LAST_UPDATED}</p>
            <p className="mt-6 text-base leading-relaxed text-black/80">
              These terms govern your use of realtmark.com and, in outline, the marketing services we
              provide. They sit alongside — not instead of — the specific service agreement or scope of
              work we sign with a client before starting paid engagement.
            </p>

            <div className="mt-10 space-y-10">
              <Section heading="1. Acceptance of these terms">
                <p>
                  By using this website, you agree to these terms. If you don&apos;t agree with them, please
                  don&apos;t use the site — you&apos;re still welcome to reach us directly by email.
                </p>
              </Section>

              <Section heading="2. What we do">
                <p>
                  RealtMark provides digital marketing services for real estate developers, brokerages,
                  and agents — real estate SEO, website and landing page design, paid advertising (Google
                  and Meta), branding and identity, content production, and CRM and marketing automation.
                  The scope of any specific engagement is set out in a separate signed agreement, not on
                  this website.
                </p>
              </Section>

              <Section heading="3. Pricing on this site is a starting anchor, not a quote">
                <p>
                  Figures on our{" "}
                  <Link href="/pricing" className="font-semibold text-primary hover:text-primary-mid">
                    pricing page
                  </Link>{" "}
                  and elsewhere on the site are indicative starting ranges based on typical scope, not
                  binding quotes. Actual pricing depends on the markets, channels, and volume involved and
                  is confirmed in writing before any engagement starts. Ad spend on Google and Meta is
                  separate from our fees and paid directly by the client.
                </p>
              </Section>

              <Section heading="4. No guarantee of results">
                <p>
                  We won&apos;t promise a specific ranking, lead volume, or return on ad spend, and you should
                  treat anyone who does with suspicion. Search engine and advertising platform algorithms
                  change, and results depend on factors outside our control — including market conditions
                  and competitor activity. Where we give a timeline (for example, typical SEO ranking
                  movement), it&apos;s a realistic estimate based on experience, not a commitment.
                </p>
              </Section>

              <Section heading="5. Engagement terms">
                <p>
                  Most engagements start with a three-month minimum, then continue quarterly or
                  month-to-month depending on the service, as described on our{" "}
                  <Link href="/pricing" className="font-semibold text-primary hover:text-primary-mid">
                    pricing page
                  </Link>
                  . Specific notice periods, deliverables, and payment terms are set out in the signed
                  agreement for each engagement.
                </p>
              </Section>

              <Section heading="6. Acceptable use of this site">
                <p>
                  You agree not to scrape, reverse-engineer, or misuse this website, attempt to gain
                  unauthorised access to it, or use it for any unlawful purpose. Contact forms are for
                  genuine inquiries — automated or bulk submissions may be blocked.
                </p>
              </Section>

              <Section heading="7. Intellectual property">
                <p>
                  The text, design, and branding on this site belong to RealtMark unless stated otherwise.
                  You&apos;re welcome to link to it; please don&apos;t reproduce substantial parts of it elsewhere
                  without asking first.
                </p>
              </Section>

              <Section heading="8. Regulatory compliance">
                <p>
                  We build campaigns with Trakheesi, RERA, and Madhmoun requirements in mind, and we take
                  that seriously. That said, the legal responsibility for holding the correct permits and
                  licences for a specific property, project, or brokerage sits with the licensed developer
                  or broker client, not with RealtMark as their marketing provider.
                </p>
              </Section>

              <Section heading="9. Third-party links and platforms">
                <p>
                  This site links to portals and platforms we don&apos;t control — Bayut, Property Finder,
                  Dubizzle, Google, Meta, and others. We&apos;re not responsible for their content, availability,
                  or terms.
                </p>
              </Section>

              <Section heading="10. Limitation of liability">
                <p>
                  To the fullest extent permitted by law, RealtMark isn&apos;t liable for indirect, incidental,
                  or consequential loss arising from your use of this website. Nothing here limits
                  liability that can&apos;t legally be limited.
                </p>
              </Section>

              <Section heading="11. Governing law">
                <p>
                  We&apos;re finalising the specific legal entity and jurisdiction these terms sit under as
                  RealtMark&apos;s operating structure develops. Until that&apos;s confirmed here, any specific
                  client engagement is governed by the jurisdiction stated in that engagement&apos;s own signed
                  agreement.
                </p>
              </Section>

              <Section heading="12. Changes to these terms">
                <p>
                  We may update these terms as the business grows. We&apos;ll update the &quot;last updated&quot; date
                  above whenever we do.
                </p>
              </Section>

              <Section heading="13. Contact us">
                <p>
                  Questions about these terms — email{" "}
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
