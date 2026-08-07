import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-sm";

export function RelatedArticles({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <div className="rounded-xl border border-black/10 bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary-mid">Related articles</p>
      <ul className="mt-4 space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className={`block text-sm font-semibold text-black transition-colors duration-200 hover:text-primary ${focusRing}`}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
