import Link from "next/link";
import { Eyebrow } from "./Eyebrow";
import { CtaLink } from "./CtaLink";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-sm";

/** Sticky wrapper — same positioning already proven on the blog post template. */
export function PageSidebar({ children }: { children: React.ReactNode }) {
  return <aside className="space-y-8 lg:sticky lg:top-24 lg:h-fit lg:self-start">{children}</aside>;
}

export type SidebarNavItem = { id: string; label: string };

/** In-page jump nav — anchors to section ids on the same page. */
export function SidebarNav({
  heading = "On this page",
  items,
}: {
  heading?: string;
  items: SidebarNavItem[];
}) {
  if (items.length === 0) return null;

  return (
    <nav aria-label={heading} className="rounded-xl border border-black/10 bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary-mid">{heading}</p>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block text-sm font-medium text-black transition-colors duration-200 hover:text-primary ${focusRing}`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export type SidebarLinkItem = { href: string; label: string };

/** A titled list of related links — related services, related locations, sibling areas. */
export function SidebarLinks({ heading, items }: { heading: string; items: SidebarLinkItem[] }) {
  if (items.length === 0) return null;

  return (
    <div className="rounded-xl border border-black/10 bg-white p-5">
      <Eyebrow>{heading}</Eyebrow>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`block border-l-2 border-black/10 py-1 pl-4 text-sm font-medium text-black transition-colors duration-200 hover:border-secondary hover:text-primary ${focusRing}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Compact conversion prompt for sidebars that don't already carry a full LeadForm (index/hub pages). */
export function SidebarCta({
  heading,
  subhead,
  href = "/contact",
  label = "Book a Strategy Call",
}: {
  heading: string;
  subhead: string;
  href?: string;
  label?: string;
}) {
  return (
    <div className="rounded-xl bg-primary p-6">
      <p className="text-base font-bold text-white">{heading}</p>
      <p className="mt-2 text-sm leading-relaxed text-white/70">{subhead}</p>
      <CtaLink href={href} variant="primary" className="mt-5 w-full">
        {label}
      </CtaLink>
    </div>
  );
}
