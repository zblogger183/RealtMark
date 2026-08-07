/**
 * Gate for every component built with invented numbers, names, or results
 * (stats band, testimonials, team, portfolio teaser). Defaults off — unset
 * in the committed .env and never set in Vercel's production/preview
 * environment, so nothing fabricated is visible or crawlable on the live
 * site. Enable locally via .env.local (gitignored) to preview and design
 * against the full set of placeholder sections.
 */
export const SHOW_SAMPLE_CONTENT = process.env.NEXT_PUBLIC_SHOW_SAMPLE_CONTENT === "true";
