import type { ContentBlock } from "@/lib/blog";
import { headingSlug } from "@/lib/headingSlug";

export function TableOfContents({ content }: { content: ContentBlock[] }) {
  const headings = content.filter((block): block is { type: "heading"; text: string } => block.type === "heading");

  if (headings.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="rounded-xl border border-black/10 bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary-mid">In this article</p>
      <ul className="mt-4 space-y-2.5">
        {headings.map((heading) => (
          <li key={heading.text}>
            <a
              href={`#${headingSlug(heading.text)}`}
              className="block text-sm font-medium text-black transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-sm"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
