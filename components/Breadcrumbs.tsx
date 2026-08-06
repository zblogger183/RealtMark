import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export type Crumb = {
  label: string;
  href?: string;
};

type Tone = "light" | "dark";

const focusRing = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-sm";

export function Breadcrumbs({ items, tone = "dark" }: { items: Crumb[]; tone?: Tone }) {
  const linkColor =
    tone === "light" ? "text-white/70 hover:text-white" : "text-primary-mid hover:text-primary";
  const currentColor = tone === "light" ? "text-white" : "text-black";
  const separatorColor = tone === "light" ? "text-white/40" : "text-black/30";
  const ringOffset = tone === "light" ? "focus-visible:ring-offset-primary" : "focus-visible:ring-offset-white";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  };

  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm">
          {items.map((item, index) => (
            <li key={item.label} className="flex items-center gap-2">
              {item.href ? (
                <Link href={item.href} className={`${linkColor} ${ringOffset} ${focusRing}`}>
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className={currentColor}>
                  {item.label}
                </span>
              )}
              {index < items.length - 1 && (
                <span aria-hidden="true" className={separatorColor}>
                  /
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
