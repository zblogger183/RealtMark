"use client";

import type { FormEvent } from "react";
import { fieldClasses, labelClasses, useMailtoLeadForm } from "@/lib/useMailtoLeadForm";

const ROLE_OPTIONS = ["Agent / Broker", "Brokerage", "Developer", "Other"];

const BUDGET_OPTIONS = [
  "Not sure yet",
  "Under AED 10,000/month",
  "AED 10,000–25,000/month",
  "AED 25,000+/month",
];

export function ContactForm() {
  const { status, disabled, submit } = useMailtoLeadForm({ subjectPrefix: "Strategy call request" });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    submit([
      { key: "name", label: "Name", value: String(data.get("name") ?? "") },
      { key: "email", label: "Email", value: String(data.get("email") ?? "") },
      { key: "phone", label: "Phone / WhatsApp", value: String(data.get("phone") ?? "") },
      { key: "role", label: "Role", value: String(data.get("role") ?? "") },
      { key: "budget", label: "Budget range", value: String(data.get("budget") ?? "") },
      { key: "message", label: "Message", value: String(data.get("message") ?? "") },
    ]);
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
