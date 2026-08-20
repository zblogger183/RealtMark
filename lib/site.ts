// Sourced from the NEXT_PUBLIC_SITE_URL env var so the domain only needs to
// change in Vercel's project settings when a custom domain gets attached,
// not here. The fallback below is a safety net for a missing env var, not
// a second source of truth — .env carries the local dev value, and Vercel's
// dashboard setting takes priority over it in every deployed environment.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://realt-mark.vercel.app";

/**
 * Placeholder UAE number — a real one is being arranged. Swap PHONE_DISPLAY
 * and PHONE_TEL below for the real thing the moment it exists; every page
 * that shows a phone number reads from here, so that's the only edit
 * needed. Deliberately NOT included in the Organization JSON-LD in
 * app/layout.tsx — that's machine-read as fact by search engines, and a
 * placeholder there would be the same problem the Dubai address was.
 */
export const PHONE_DISPLAY = "+971 4 XXX XXXX";
export const PHONE_TEL: string | null = null;
export const PHONE_WHATSAPP: string | null = null;
