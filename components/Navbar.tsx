"use client";

import Link from "next/link";
import { useState } from "react";
import { LatticeMark } from "./Lattice";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Locations", href: "/locations" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-full";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className={`flex items-center gap-2.5 ${focusRing}`}
          onClick={() => setOpen(false)}
        >
          <LatticeMark className="h-7 w-7 text-secondary-dark" />
          <span className="text-lg font-bold tracking-tight text-black">RealtMark</span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium text-black/70 transition-colors duration-200 hover:text-black ${focusRing}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className={`inline-flex items-center rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-black transition-colors duration-200 hover:bg-secondary-dark ${focusRing}`}
          >
            Book a Strategy Call
          </Link>
        </div>

        <button
          type="button"
          className={`inline-flex items-center justify-center p-2 text-black lg:hidden ${focusRing}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.75}>
              <path d="M5 5 L19 19 M19 5 L5 19" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.75}>
              <path d="M4 6 H20 M4 12 H20 M4 18 H20" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-black/10 bg-white px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium text-black/70 hover:text-black ${focusRing}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`mt-2 inline-flex items-center justify-center rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-black hover:bg-secondary-dark ${focusRing}`}
              onClick={() => setOpen(false)}
            >
              Book a Strategy Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
