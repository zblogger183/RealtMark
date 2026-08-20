import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "../Eyebrow";
import { LatticeField } from "../Lattice";
import { getLiveBlogPosts, getReadTimeMinutes, getPostCategory } from "@/lib/blog";
import { getBlogPostHeroImage } from "@/lib/heroImages";
import { imageExists } from "@/lib/imageExists";

export default function BlogTeaser() {
  const posts = getLiveBlogPosts();
  if (posts.length === 0) return null;

  const [featured, ...rest] = posts;
  const listPosts = rest.slice(0, 2);
  const featuredImage = getBlogPostHeroImage(featured.slug);
  const hasFeaturedImage = imageExists(featuredImage);

  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Eyebrow tone="light">From the blog</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-white">Insights that drive pipeline.</h2>
          </div>
          <Link
            href="/blog"
            className="flex-shrink-0 text-sm font-semibold text-white hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm"
          >
            All Articles →
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Link
            href={`/blog/${featured.slug}`}
            className="group block overflow-hidden rounded-xl border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            <div className="relative flex h-56 items-end overflow-hidden bg-primary-mid p-6">
              {hasFeaturedImage ? (
                <Image
                  src={featuredImage}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              ) : (
                <LatticeField id="blog-teaser-featured" className="text-white opacity-[0.12]" scale={1.4} />
              )}
              {hasFeaturedImage && (
                <div className="absolute inset-0 bg-primary/50" aria-hidden="true" />
              )}
              {getPostCategory(featured) && (
                <span className="absolute left-6 top-6 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-black">
                  {getPostCategory(featured)}
                </span>
              )}
            </div>
            <div className="bg-white/[0.04] p-6">
              <h3 className="text-xl font-bold text-white transition-colors duration-200 group-hover:text-secondary">
                {featured.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{featured.excerpt}</p>
              <p className="mt-4 text-xs uppercase tracking-wide text-white/40">
                {getReadTimeMinutes(featured)} min read
              </p>
            </div>
          </Link>

          <div className="flex flex-col gap-6">
            {listPosts.map((post) => {
              const postImage = getBlogPostHeroImage(post.slug);
              const hasPostImage = imageExists(postImage);
              return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex gap-5 rounded-xl border border-white/10 p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                <span className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-primary-mid">
                  {hasPostImage ? (
                    <Image src={postImage} alt="" fill sizes="64px" className="object-cover" />
                  ) : (
                    <LatticeField id={`blog-teaser-${post.slug}`} className="text-white opacity-[0.15]" scale={1.2} />
                  )}
                </span>
                <div className="min-w-0">
                  {getPostCategory(post) && (
                    <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                      {getPostCategory(post)}
                    </p>
                  )}
                  <h3 className="mt-1 truncate text-base font-bold text-white transition-colors duration-200 group-hover:text-secondary">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/50">{getReadTimeMinutes(post)} min read</p>
                </div>
              </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
