"use client";

import type { FormEvent } from "react";
import { fieldClasses, labelClasses, useMailtoLeadForm } from "@/lib/useMailtoLeadForm";

export type LeadFormVariant = "hero" | "section" | "sidebar";

const CARD_CLASSES: Record<LeadFormVariant, string> = {
  hero: "rounded-xl bg-white p-6 shadow-2xl sm:p-7",
  section: "rounded-xl bg-white p-6 shadow-xl sm:p-7",
  sidebar: "rounded-xl bg-white p-5 shadow-xl",
};

// The 'section' variant sits right next to ClosingCta's own heading/subhead,
// so it skips repeating one. 'hero' and 'sidebar' have no other heading
// nearby, so they carry their own.
const SHOW_HEADING: Record<LeadFormVariant, boolean> = {
  hero: true,
  section: false,
  sidebar: true,
};

const DEFAULT_SUBJECT_PREFIX: Record<LeadFormVariant, string> = {
  hero: "Hero inquiry",
  section: "Strategy call request",
  sidebar: "Blog inquiry",
};

export function LeadForm({
  variant = "hero",
  subjectPrefix,
}: {
  variant?: LeadFormVariant;
  subjectPrefix?: string;
}) {
  const { status, disabled, submit } = useMailtoLeadForm({
    subjectPrefix: subjectPrefix ?? DEFAULT_SUBJECT_PREFIX[variant],
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    submit([
      { key: "name", label: "Name", value: String(data.get("name") ?? "") },
      { key: "phone", label: "Phone / WhatsApp", value: String(data.get("phone") ?? "") },
      { key: "email", label: "Email", value: String(data.get("email") ?? "") },
      { key: "interest", label: "Looking to grow", value: String(data.get("interest") ?? "") },
    ]);
  }

  const idPrefix = `leadform-${variant}`;
  const showHeading = SHOW_HEADING[variant];

  return (
    <div className={CARD_CLASSES[variant]}>
      {showHeading && (
        <>
          <p className="text-base font-bold text-black">Book a Strategy Call</p>
          <p className="mt-1 text-sm text-primary-mid">Tell us the basics — we&apos;ll take it from there.</p>
        </>
      )}

      <form onSubmit={handleSubmit} className={showHeading ? "mt-5 space-y-4" : "space-y-4"}>
        <div>
          <label htmlFor={`${idPrefix}-name`} className={labelClasses}>
            Name
          </label>
          <input
            id={`${idPrefix}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            disabled={disabled}
            className={fieldClasses}
          />
        </div>

        <div>
          <label htmlFor={`${idPrefix}-phone`} className={labelClasses}>
            Phone / WhatsApp
          </label>
          <input
            id={`${idPrefix}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            disabled={disabled}
            className={fieldClasses}
          />
        </div>

        <div>
          <label htmlFor={`${idPrefix}-email`} className={labelClasses}>
            Email
          </label>
          <input
            id={`${idPrefix}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            disabled={disabled}
            className={fieldClasses}
          />
        </div>

        <div>
          <label htmlFor={`${idPrefix}-interest`} className={labelClasses}>
            What are you looking to grow?
          </label>
          <input
            id={`${idPrefix}-interest`}
            name="interest"
            type="text"
            required
            disabled={disabled}
            placeholder="Listings, a launch, brand…"
            className={fieldClasses}
          />
        </div>

        <button
          type="submit"
          disabled={disabled}
          className="inline-flex w-full items-center justify-center rounded-sm bg-secondary px-6 py-3 text-sm font-semibold text-black transition-colors duration-200 hover:bg-secondary-dark disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          {disabled ? "Opening your email…" : "Book a Strategy Call"}
        </button>

        {status === "sent" && (
          <p className="text-xs leading-relaxed text-primary-mid">
            We just opened your email client with this pre-filled. If nothing opened, email us
            directly at{" "}
            <a href="mailto:hello@realtmark.com" className="text-primary underline hover:text-primary-mid">
              hello@realtmark.com
            </a>
            .
          </p>
        )}
      </form>
    </div>
  );
}
