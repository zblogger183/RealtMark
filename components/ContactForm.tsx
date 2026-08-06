"use client";

import { useState, type FormEvent } from "react";

const ROLE_OPTIONS = ["Agent / Broker", "Brokerage", "Developer", "Other"];

const BUDGET_OPTIONS = [
  "Not sure yet",
  "Under AED 10,000/month",
  "AED 10,000–25,000/month",
  "AED 25,000+/month",
];

const fieldClasses =
  "mt-1.5 w-full rounded-sm border border-black/20 bg-white px-3.5 py-2.5 text-sm text-black transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-secondary disabled:cursor-not-allowed disabled:opacity-60";

const labelClasses = "text-sm font-semibold text-black";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");
  const disabled = status === "submitting";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const role = String(data.get("role") ?? "");
    const budget = String(data.get("budget") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `Strategy call request — ${name || "New inquiry"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone / WhatsApp: ${phone}`,
      `Role: ${role}`,
      `Budget range: ${budget || "Not specified"}`,
      "",
      "Message:",
      message,
    ].join("\n");
    const mailtoUrl = `mailto:hello@realtmark.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // TODO: this is a client-only stub. It hands off to the visitor's own
    // email client via a mailto: link — nothing is transmitted by the site
    // itself, and no data is stored anywhere. Replace with a real POST to
    // an API route (wired to an email service or a CRM webhook, e.g. the
    // GoHighLevel integration referenced on the CRM service page) once
    // that backend decision is made, and drive `status` from its response
    // instead of the timer below.
    await new Promise((resolve) => setTimeout(resolve, 400));
    window.location.href = mailtoUrl;
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className={labelClasses}>
          Name
        </label>
        <input id="name" name="name" type="text" autoComplete="name" required disabled={disabled} className={fieldClasses} />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            disabled={disabled}
            className={fieldClasses}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone / WhatsApp number
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" required disabled={disabled} className={fieldClasses} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="role" className={labelClasses}>
            You are a
          </label>
          <select id="role" name="role" required disabled={disabled} defaultValue="" className={fieldClasses}>
            <option value="" disabled>
              Select one
            </option>
            {ROLE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className={labelClasses}>
            Monthly budget range
          </label>
          <select id="budget" name="budget" disabled={disabled} defaultValue="Not sure yet" className={fieldClasses}>
            {BUDGET_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          What are you looking to achieve?
        </label>
        <textarea id="message" name="message" rows={4} required disabled={disabled} className={fieldClasses} />
      </div>

      <div>
        <button
          type="submit"
          disabled={disabled}
          className="inline-flex items-center justify-center rounded-sm bg-secondary px-6 py-3 text-sm font-semibold text-black transition-colors duration-200 hover:bg-secondary-dark disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          {disabled ? "Opening your email…" : "Send"}
        </button>

        {status === "sent" && (
          <p className="mt-4 text-sm leading-relaxed text-primary-mid">
            We just opened your email client with this pre-filled — hit send from there to reach
            us. If nothing opened, email us directly at{" "}
            <a href="mailto:hello@realtmark.com" className="text-primary underline hover:text-primary-mid">
              hello@realtmark.com
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
