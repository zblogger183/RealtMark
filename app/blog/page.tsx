import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ClosingCta } from "@/components/ClosingCta";
import { HeroBackground } from "@/components/HeroBackground";
import { BlogList } from "@/components/BlogList";
import { NewsletterSignup } from "@/components/sections/NewsletterSignup";
import { HERO_IMAGES } from "@/lib/heroImages";
import { getLiveBlogPosts, getBlogCategories } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — RealtMark",
  description:
    "Notes on real estate marketing across Dubai and the GCC — SEO, paid media, and CRM strategy, by market and by channel.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const posts = getLiveBlogPosts();
  const categories = getBlogCategories();

  return (
    <>
      <Navbar />
      <main className="bg-white">
        <HeroBackground imagePath={HERO_IMAGES.blogIndex} tone="light">
          <div className="mx-auto max-w-content px-6 pt-8 md:px-10">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
          </div>

          <div className="mx-auto max-w-content px-6 pt-10 md:px-10 md:pt-12">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold text-black md:text-5xl">Blog</h1>
              <p className="mt-5 text-base leading-relaxed text-black">
                Notes on running real estate marketing across Dubai and the GCC — what actually
                works by market and by channel, not general advice repackaged for real estate.
              </p>
            </div>
          </div>
        </HeroBackground>

        <div className="mx-auto max-w-content px-6 pb-16 pt-14 md:px-10 md:pb-20">
          <BlogList posts={posts} categories={categories} />
        </div>

        <NewsletterSignup />

        <ClosingCta
          heading="Have a specific market or channel question?"
          subhead="Book a strategy call and we'll answer it directly, not with another blog post."
        />
      </main>
      <Footer />
    </>
  );
}
