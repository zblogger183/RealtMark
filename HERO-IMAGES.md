# Hero background images — what's there and how to replace it

Every hero slot below is currently filled with a **royalty-free stock photo** (Unsplash),
picked and reused thematically across similar pages (e.g. one villa-community photo covers
Dubai Hills Estate, Arabian Ranches, Al Furjan, The Valley, and Jumeirah). These are placeholders,
not RealtMark's own work or licensed campaign photography — swap them for real photography before
the site is indexed for real.

**To replace a photo:** overwrite the file at the path below with your own JPG/PNG of the same
name. `components/HeroBackground.tsx` reads directly off disk, so there's no code change and no
second prompt needed — the next build just picks up whatever file is there.

**Recommended specs:** landscape, ~1920×1080 or wider, JPG.

## Homepage (1)

- [x] `/images/hero/home.jpg`

## Services (6)

- [x] `/images/hero/services/real-estate-seo.jpg`
- [x] `/images/hero/services/website-landing-pages.jpg`
- [x] `/images/hero/services/paid-ads.jpg`
- [x] `/images/hero/services/branding-identity.jpg`
- [x] `/images/hero/services/content-production.jpg`
- [x] `/images/hero/services/crm-automation.jpg`

## Locations (35)

### Countries (6)

- [x] `/images/hero/locations/uae.jpg`
- [x] `/images/hero/locations/saudi-arabia.jpg`
- [x] `/images/hero/locations/qatar.jpg`
- [x] `/images/hero/locations/bahrain.jpg`
- [x] `/images/hero/locations/oman.jpg`
- [x] `/images/hero/locations/kuwait.jpg`

### Cities (9)

- [x] `/images/hero/locations/uae/dubai.jpg`
- [x] `/images/hero/locations/uae/abu-dhabi.jpg`
- [x] `/images/hero/locations/uae/sharjah.jpg`
- [x] `/images/hero/locations/saudi-arabia/riyadh.jpg`
- [x] `/images/hero/locations/saudi-arabia/jeddah.jpg`
- [x] `/images/hero/locations/qatar/doha.jpg`
- [x] `/images/hero/locations/bahrain/manama.jpg`
- [x] `/images/hero/locations/oman/muscat.jpg`
- [x] `/images/hero/locations/kuwait/kuwait-city.jpg`

### Areas — Dubai (20)

- [x] `/images/hero/locations/uae/dubai/dubai-marina.jpg`
- [x] `/images/hero/locations/uae/dubai/downtown-dubai.jpg`
- [x] `/images/hero/locations/uae/dubai/business-bay.jpg`
- [x] `/images/hero/locations/uae/dubai/palm-jumeirah.jpg`
- [x] `/images/hero/locations/uae/dubai/jvc.jpg`
- [x] `/images/hero/locations/uae/dubai/dubai-hills-estate.jpg`
- [x] `/images/hero/locations/uae/dubai/arabian-ranches.jpg`
- [x] `/images/hero/locations/uae/dubai/jlt.jpg`
- [x] `/images/hero/locations/uae/dubai/al-furjan.jpg`
- [x] `/images/hero/locations/uae/dubai/mbr-city-meydan.jpg`
- [x] `/images/hero/locations/uae/dubai/dubai-south.jpg`
- [x] `/images/hero/locations/uae/dubai/motor-city.jpg`
- [x] `/images/hero/locations/uae/dubai/al-barsha.jpg`
- [x] `/images/hero/locations/uae/dubai/jumeirah.jpg`
- [x] `/images/hero/locations/uae/dubai/difc.jpg`
- [x] `/images/hero/locations/uae/dubai/arjan.jpg`
- [x] `/images/hero/locations/uae/dubai/dubailand.jpg`
- [x] `/images/hero/locations/uae/dubai/the-valley.jpg`
- [x] `/images/hero/locations/uae/dubai/palm-jebel-ali.jpg`
- [x] `/images/hero/locations/uae/dubai/dubai-silicon-oasis.jpg`

## Pricing (1)

- [x] `/images/hero/pricing.jpg`

## About (1)

- [x] `/images/hero/about.jpg`

## Portfolio (1)

- [x] `/images/hero/portfolio.jpg`

## Blog (4)

- [x] `/images/hero/blog.jpg` — blog index
- [x] `/images/hero/blog/real-estate-seo-for-dubai-developers.jpg`
- [x] `/images/hero/blog/whatsapp-automation-for-broker-follow-up.jpg`
- [x] `/images/hero/blog/marketing-an-off-plan-project-in-jvc-vs-downtown-dubai.jpg`

---

## How this works

- Paths come from the `heroImage` field on each `Service`/`Country`/`City`/`Area` entry in
  `lib/services.ts` / `lib/locations.ts`, and from `lib/heroImages.ts` for the pages above
  that aren't backed by those files (homepage, pricing, about, portfolio, blog index, blog posts).
- `components/HeroBackground.tsx` checks `fs.existsSync` against `public/` at render time.
  File present → the photo renders with a brand-tinted scrim. New blog posts or location/service
  entries added later automatically get a conventional path the moment they're added to the data
  files — extend this checklist to match.
- Landmark-specific communities (Downtown Dubai, Palm Jumeirah, Business Bay/DIFC) got a
  distinct, recognizable stock photo. Less distinguishable mid-market and villa communities share
  a themed photo across several pages (apartment towers for JVC/Arjan/Al Barsha/Motor
  City/Dubai South/Dubailand/Dubai Silicon Oasis; villas for Dubai Hills Estate/Arabian
  Ranches/Al Furjan/The Valley/Jumeirah) rather than pretending each has a uniquely sourced shot.
