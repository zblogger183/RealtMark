// Sourced from the NEXT_PUBLIC_SITE_URL env var so the domain only needs to
// change in Vercel's project settings when a custom domain gets attached,
// not here. The fallback below is a safety net for a missing env var, not
// a second source of truth — .env carries the local dev value, and Vercel's
// dashboard setting takes priority over it in every deployed environment.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://realt-mark.vercel.app";
