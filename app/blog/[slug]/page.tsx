import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogContent } from "@/components/BlogContent";
import { ClosingCta } from "@/components/ClosingCta";
import { BLOG_POSTS, getBlogPostBySlug } from "@/lib/blog";
import { getServiceBySlug } from "@/lib/services";
import { getAreaByPath } from "@/lib/locations";
import { SITE_URL } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} — RealtMark`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    robots: { index: post.status === "live", follow: true },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-sm";

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const relatedServices = post.relatedServiceSlugs
    .map((serviceSlug) => getServiceBySlug(serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));

  const relatedLocations = post.relatedLocationSlugs
    .map((path) => getAreaByPath(path))
    .filter((location): location is NonNullable<typeof location> => Boolean(location));

  const postJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedDate,
    author: { "@type": "Organization", name: "RealtMark" },
    publisher: { "@type": "Organization", name: "RealtMark", url: SITE_URL },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    url: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-primary">
          <div className="mx-auto max-w-content px-6 pb-16 pt-8 md:px-10 md:pb-20 md:pt-10">
            <Breadcrumbs
              tone="light"
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: post.title },
              ]}
            />
            <div className="mt-8 max-w-2xl md:mt-10">
              <Eyebrow tone="light">Blog</Eyebrow>
              <h1 className="mt-5 text-4xl font-bold text-white md:text-5xl">{post.title}</h1>
              <p className="mt-4 text-sm text-white/60">Published {formatDate(post.publishedDate)}</p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80">{post.excerpt}</p>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-24">
            <div className="max-w-2xl">
              <BlogContent content={post.content} />
            </div>
          </div>
        </section>

        {(relatedServices.length > 0 || relatedLocations.length > 0) && (
          <section className="border-t border-black/10 bg-white">
            <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-24">
              {relatedServices.length > 0 && (
                <div>
                  <Eyebrow>Related services</Eyebrow>
                  <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                    {relatedServices.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className={`group block border-t-2 border-black/10 pt-6 transition-colors duration-200 hover:border-secondary ${focusRing}`}
                        >
                          <Icon className="h-7 w-7 text-primary transition-colors duration-200 group-hover:text-primary-mid" />
                          <h3 className="mt-4 text-lg font-bold text-black">{service.name}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-black">{service.oneLiner}</p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {relatedLocations.length > 0 && (
                <div className="mt-16">
                  <Eyebrow>Related locations</Eyebrow>
                  <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                    {relatedLocations.map(({ country, city, area }) => (
                      <Link
                        key={area.slug}
                        href={`/${country.slug}/${city.slug}/${area.slug}`}
                        className={`group block border-t-2 border-black/10 pt-6 transition-colors duration-200 hover:border-secondary ${focusRing}`}
                      >
                        <h3 className="text-lg font-bold text-black">{area.name}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-black">{area.heroSubhead}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        <ClosingCta
          heading="Have a specific market or channel question?"
          subhead="Book a strategy call and we'll answer it directly, not with another blog post."
        />
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postJsonLd) }}
      />
    </>
  );
}
