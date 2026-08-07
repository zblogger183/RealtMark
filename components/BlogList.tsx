"use client";

import { useState } from "react";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { getPostCategory, getReadTimeMinutes } from "@/lib/blog";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-sm";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export function BlogList({ posts, categories }: { posts: BlogPost[]; categories: string[] }) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const visiblePosts = activeCategory
    ? posts.filter((post) => getPostCategory(post) === activeCategory)
    : posts;

  return (
    <div>
      {categories.length > 1 && (
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory(null)}
            className={`rounded-sm border px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${focusRing} ${
              activeCategory === null
                ? "border-primary bg-primary text-white"
                : "border-black/15 text-black hover:border-secondary"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-sm border px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${focusRing} ${
                activeCategory === category
                  ? "border-primary bg-primary text-white"
                  : "border-black/15 text-black hover:border-secondary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {visiblePosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={`group block border-t-2 border-black/10 pt-6 transition-colors duration-200 hover:border-secondary ${focusRing}`}
          >
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary-mid">
              <span>{formatDate(post.publishedDate)}</span>
              <span aria-hidden="true">·</span>
              <span>{getReadTimeMinutes(post)} min read</span>
            </div>
            <h2 className="mt-3 text-xl font-bold text-black">{post.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-black">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
