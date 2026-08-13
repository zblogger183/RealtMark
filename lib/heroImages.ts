/**
 * Expected hero background photo paths for pages not driven by lib/services.ts
 * or lib/locations.ts. Same convention as those files' heroImage fields —
 * these paths don't need to exist yet; HeroBackground checks on render.
 */
export const HERO_IMAGES = {
  home: "/images/hero/home.jpg",
  servicesIndex: "/images/hero/services.jpg",
  locationsIndex: "/images/hero/locations-index.jpg",
  pricing: "/images/hero/pricing.jpg",
  about: "/images/hero/about.jpg",
  portfolio: "/images/hero/portfolio.jpg",
  contact: "/images/hero/contact.jpg",
  blogIndex: "/images/hero/blog.jpg",
} as const;

export function getBlogPostHeroImage(slug: string): string {
  return `/images/hero/blog/${slug}.jpg`;
}
