"use client";

import { useState } from "react";

export type MailtoField = {
  key: string;
  label: string;
  value: string;
};

type SubmitStatus = "idle" | "submitting" | "sent";

export const fieldClasses =
  "mt-1.5 w-full rounded-sm border border-black/20 bg-white px-3.5 py-2.5 text-sm text-black transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-secondary disabled:cursor-not-allowed disabled:opacity-60";

export const labelClasses = "text-sm font-semibold text-black";

/**
 * Shared submit behaviour for every lead-capture form on the site (the full
 * /contact page form and the homepage hero's compact form). Neither sends
 * anywhere on its own yet — this hands off to the visitor's own email
 * client via a mailto: link; nothing is transmitted by the site itself and
 * no data is stored anywhere.
 *
 * TODO: replace the body of `submit` with a real POST to an API route
 * (wired to an email service or a CRM webhook, e.g. the GoHighLevel
 * integration referenced on the CRM service page) once that backend
 * decision is made, and drive `status` from its response instead of the
 * timer below. Keeping this in one place means every form that uses this
 * hook picks up that change together instead of drifting out of sync.
 */
export function useMailtoLeadForm({
  subjectPrefix,
  to = "hello@realtmark.com",
}: {
  subjectPrefix: string;
  to?: string;
}) {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const disabled = status === "submitting";

  async function submit(fields: MailtoField[]) {
    setStatus("submitting");

    const nameField = fields.find((field) => field.key === "name");
    const subject = `${subjectPrefix} — ${nameField?.value || "New inquiry"}`;
    const body = fields.map((field) => `${field.label}: ${field.value || "Not specified"}`).join("\n");
    const mailtoUrl = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    await new Promise((resolve) => setTimeout(resolve, 400));
    window.location.href = mailtoUrl;
    setStatus("sent");
  }

  return { status, disabled, submit };
}
