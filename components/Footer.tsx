import Link from "next/link";
import { LatticeMark } from "./Lattice";
import { SERVICES } from "@/lib/services";

const LOCATIONS = ["United Arab Emirates", "Saudi Arabia", "Qatar", "Bahrain", "Oman", "Kuwait"];

const COMPANY = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm";

function FooterColumn({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-white/50">{heading}</p>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary">
      <div className="mx-auto max-w-content px-6 py-16 md:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <Link href="/" className={`flex items-center gap-2.5 ${focusRing}`}>
              <LatticeMark className="h-7 w-7 text-secondary" />
              <span className="text-lg font-bold tracking-tight text-white">RealtMark</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Digital marketing for real estate developers, brokerages, and agents across Dubai and
              the wider Gulf.
            </p>
            <div className="mt-6 space-y-1.5 text-sm text-white/60">
              <p>Dubai, United Arab Emirates</p>
              <a href="mailto:hello@realtmark.com" className={`inline-block hover:text-white ${focusRing}`}>
                hello@realtmark.com
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" aria-label="RealtMark on LinkedIn" className={`text-white/60 hover:text-white ${focusRing}`}>
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <rect x="3" y="3" width="18" height="18" />
                  <path d="M8 10.5 V17 M8 7.5 V7.6" strokeLinecap="round" />
                  <path d="M12 17 V13 C12 11.5 14.5 11.5 14.5 13 V17" />
                </svg>
              </a>
              <a href="#" aria-label="RealtMark on Instagram" className={`text-white/60 hover:text-white ${focusRing}`}>
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <rect x="3" y="3" width="18" height="18" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17" cy="7" r="0.6" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          <FooterColumn heading="Services">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className={`text-sm text-white/70 hover:text-white ${focusRing}`}
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn heading="Locations">
            {LOCATIONS.map((location) => (
              <li key={location}>
                <Link href="/locations" className={`text-sm text-white/70 hover:text-white ${focusRing}`}>
                  {location}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn heading="Company">
            {COMPANY.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={`text-sm text-white/70 hover:text-white ${focusRing}`}>
                  {item.label}
                </Link>
              </li>
            ))}
          </FooterColumn>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/50">
            Campaigns built in line with DLD/RERA and Madhmoun advertising regulations.
          </p>
          <p className="text-xs text-white/50">© {year} RealtMark. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
