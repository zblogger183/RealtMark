"use client";

import { useState, type FormEvent } from "react";

export function NewsletterSignup() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="bg-primary-mid">
      <div className="mx-auto max-w-content px-6 py-12 md:px-10 md:py-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-md">
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary">Newsletter</p>
            <h2 className="mt-2 text-xl font-bold text-white">
              New posts on Gulf real estate marketing, in your inbox.
            </h2>
          </div>

          {submitted ? (
            <p className="text-sm leading-relaxed text-white/80">
              Thanks — signup isn&apos;t wired to a mailing list yet, but we&apos;ve noted the interest.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="you@company.com"
                className="w-full flex-1 rounded-sm border border-white/25 bg-primary-mid px-3.5 py-2.5 text-sm text-white placeholder:text-white/50 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-secondary"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-secondary px-6 py-2.5 text-sm font-semibold text-black transition-colors duration-200 hover:bg-secondary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary-mid"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
