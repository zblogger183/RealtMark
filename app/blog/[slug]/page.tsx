import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogContent } from "@/components/BlogContent";
import { ClosingCta } from "@/components/ClosingCta";
import { LeadForm } from "@/components/LeadForm";
import { HeroBackground } from "@/components/HeroBackground";
import { TableOfContents } from "@/components/TableOfContents";
import { RelatedArticles } from "@/components/RelatedArticles";
import { PageSidebar, SidebarLinks } from "@/components/PageSidebar";
import { NewsletterSignup } from "@/components/sections/NewsletterSignup";
import { BLOG_POSTS, getBlogPostBySlug, getReadTimeMinutes, getRelatedPosts } from "@/lib/blog";
import { getServiceBySlug } from "@/lib/services";
import { getAreaByPath } from "@/lib/locations";
import { getBlogPostHeroImage } from "@/lib/heroImages";
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

  const relatedPosts = getRelatedPosts(post);

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
        <HeroBackground imagePath={getBlogPostHeroImage(post.slug)}>
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
              <p className="mt-4 text-sm text-white/60">
                By RealtMark Team · Published {formatDate(post.publishedDate)} ·{" "}
                {getReadTimeMinutes(post)} min read
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80">{post.excerpt}</p>
            </div>
          </div>
        </HeroBackground>

        <section className="bg-white">
          <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-24">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[3fr_2fr] lg:gap-10">
              <div className="max-w-2xl">
                <BlogContent content={post.content} />
              </div>

              <PageSidebar>
                <LeadForm variant="sidebar" />

                <TableOfContents content={post.content} />

                <SidebarLinks
                  heading="Related services"
                  items={relatedServices.map((service) => ({
                    href: `/services/${service.slug}`,
                    label: service.name,
                  }))}
                />

                <SidebarLinks
                  heading="Related locations"
                  items={relatedLocations.map(({ country, city, area }) => ({
                    href: `/${country.slug}/${city.slug}/${area.slug}`,
                    label: area.name,
                  }))}
                />

                <RelatedArticles posts={relatedPosts} />
              </PageSidebar>
            </div>
          </div>
        </section>

        <NewsletterSignup />

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
