# Hero background images — what to supply and where

Hero photography is a **progressive, optional layer**. Every hero on the site currently
renders with no photo — solid brand background, existing copy, nothing broken. Drop a real
JPG/PNG at any path below (matching the filename exactly) and that page's hero will pick it
up automatically on the next build/deploy, with a brand-tinted scrim over it for text
legibility. No code changes, no second prompt needed.

Work through this incrementally, in any order — nothing here is required for the site to
function or look correct today.

**Recommended specs:** landscape, ~1920×1080 or wider, JPG. Each path is relative to
`public/`, so `/images/hero/home.jpg` means `public/images/hero/home.jpg`.

## Homepage (1)

- [ ] `/images/hero/home.jpg`

## Services (6)

- [ ] `/images/hero/services/real-estate-seo.jpg`
- [ ] `/images/hero/services/website-landing-pages.jpg`
- [ ] `/images/hero/services/paid-ads.jpg`
- [ ] `/images/hero/services/branding-identity.jpg`
- [ ] `/images/hero/services/content-production.jpg`
- [ ] `/images/hero/services/crm-automation.jpg`

## Locations (35)

### Countries (6)

- [ ] `/images/hero/locations/uae.jpg`
- [ ] `/images/hero/locations/saudi-arabia.jpg`
- [ ] `/images/hero/locations/qatar.jpg`
- [ ] `/images/hero/locations/bahrain.jpg`
- [ ] `/images/hero/locations/oman.jpg`
- [ ] `/images/hero/locations/kuwait.jpg`

### Cities (9)

- [ ] `/images/hero/locations/uae/dubai.jpg`
- [ ] `/images/hero/locations/uae/abu-dhabi.jpg`
- [ ] `/images/hero/locations/uae/sharjah.jpg`
- [ ] `/images/hero/locations/saudi-arabia/riyadh.jpg`
- [ ] `/images/hero/locations/saudi-arabia/jeddah.jpg`
- [ ] `/images/hero/locations/qatar/doha.jpg`
- [ ] `/images/hero/locations/bahrain/manama.jpg`
- [ ] `/images/hero/locations/oman/muscat.jpg`
- [ ] `/images/hero/locations/kuwait/kuwait-city.jpg`

### Areas — Dubai (20)

- [ ] `/images/hero/locations/uae/dubai/dubai-marina.jpg`
- [ ] `/images/hero/locations/uae/dubai/downtown-dubai.jpg`
- [ ] `/images/hero/locations/uae/dubai/business-bay.jpg`
- [ ] `/images/hero/locations/uae/dubai/palm-jumeirah.jpg`
- [ ] `/images/hero/locations/uae/dubai/jvc.jpg`
- [ ] `/images/hero/locations/uae/dubai/dubai-hills-estate.jpg`
- [ ] `/images/hero/locations/uae/dubai/arabian-ranches.jpg`
- [ ] `/images/hero/locations/uae/dubai/jlt.jpg`
- [ ] `/images/hero/locations/uae/dubai/al-furjan.jpg`
- [ ] `/images/hero/locations/uae/dubai/mbr-city-meydan.jpg`
- [ ] `/images/hero/locations/uae/dubai/dubai-south.jpg`
- [ ] `/images/hero/locations/uae/dubai/motor-city.jpg`
- [ ] `/images/hero/locations/uae/dubai/al-barsha.jpg`
- [ ] `/images/hero/locations/uae/dubai/jumeirah.jpg`
- [ ] `/images/hero/locations/uae/dubai/difc.jpg`
- [ ] `/images/hero/locations/uae/dubai/arjan.jpg`
- [ ] `/images/hero/locations/uae/dubai/dubailand.jpg`
- [ ] `/images/hero/locations/uae/dubai/the-valley.jpg`
- [ ] `/images/hero/locations/uae/dubai/palm-jebel-ali.jpg`
- [ ] `/images/hero/locations/uae/dubai/dubai-silicon-oasis.jpg`

## Pricing (1)

- [ ] `/images/hero/pricing.jpg`

## About (1)

- [ ] `/images/hero/about.jpg`

## Blog (4)

- [ ] `/images/hero/blog.jpg` — blog index
- [ ] `/images/hero/blog/real-estate-seo-for-dubai-developers.jpg`
- [ ] `/images/hero/blog/whatsapp-automation-for-broker-follow-up.jpg`
- [ ] `/images/hero/blog/marketing-an-off-plan-project-in-jvc-vs-downtown-dubai.jpg`

---

## How this works

- Paths come from the `heroImage` field on each `Service`/`Country`/`City`/`Area` entry in
  `lib/services.ts` / `lib/locations.ts`, and from `lib/heroImages.ts` for the pages above
  that aren't backed by those files (homepage, pricing, about, blog index, blog posts).
- `components/HeroBackground.tsx` checks `fs.existsSync` against `public/` at render time.
  No file → today's plain brand-colour hero, unchanged. File present → the photo renders
  with a scrim, and (on the homepage) the Lattice motif steps aside for it.
- New blog posts or location/service entries added later automatically get a conventional
  path the moment they're added to the data files — extend this checklist to match.
