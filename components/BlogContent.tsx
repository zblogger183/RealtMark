import Image from "next/image";
import type { ContentBlock } from "@/lib/blog";
import { headingSlug } from "@/lib/headingSlug";
import { imageExists } from "@/lib/imageExists";

export function BlogContent({ content }: { content: ContentBlock[] }) {
  return (
    <div className="space-y-6">
      {content.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h2 key={index} id={headingSlug(block.text)} className="scroll-mt-24 pt-4 text-3xl font-bold text-black">
              {block.text}
            </h2>
          );
        }

        if (block.type === "callout") {
          return (
            <p
              key={index}
              className="border-l-2 border-secondary bg-primary/5 py-4 pl-6 text-lg leading-relaxed text-black"
            >
              {block.text}
            </p>
          );
        }

        if (block.type === "image") {
          if (!imageExists(block.src)) return null;
          return (
            <figure key={index} className="my-2">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-primary">
                <Image
                  src={block.src}
                  alt={block.alt}
                  fill
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className="object-cover"
                />
              </div>
              {block.caption && (
                <figcaption className="mt-2 text-sm text-black/50">{block.caption}</figcaption>
              )}
            </figure>
          );
        }

        if (block.type === "list") {
          return (
            <ul key={index} className="space-y-2">
              {block.items.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-relaxed text-black">
                  <span
                    className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={index} className="text-base leading-relaxed text-black">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
