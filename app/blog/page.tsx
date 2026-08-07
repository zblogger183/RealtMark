import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ClosingCta } from "@/components/ClosingCta";
import { HeroBackground } from "@/components/HeroBackground";
import { HERO_IMAGES } from "@/lib/heroImages";
import { getLiveBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — RealtMark",
  description:
    "Notes on real estate marketing across Dubai and the GCC — SEO, paid media, and CRM strategy, by market and by channel.",
  alternates: { canonical: "/blog" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-sm";

export default function BlogIndexPage() {
  const posts = getLiveBlogPosts();

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

        <div className="mx-auto max-w-content px-6 pb-16 md:px-10 md:pb-20">
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`group block border-t-2 border-black/10 pt-6 transition-colors duration-200 hover:border-secondary ${focusRing}`}
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-primary-mid">
                  {formatDate(post.publishedDate)}
                </span>
                <h2 className="mt-3 text-xl font-bold text-black">{post.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-black">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>

        <ClosingCta
          heading="Have a specific market or channel question?"
          subhead="Book a strategy call and we'll answer it directly, not with another blog post."
        />
      </main>
      <Footer />
    </>
  );
}
