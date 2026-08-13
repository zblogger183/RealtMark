# Placeholder / sample content — what to replace before shipping

Every section on this checklist uses invented numbers, names, or results, and is gated
behind `NEXT_PUBLIC_SHOW_SAMPLE_CONTENT`. That flag is **off by default** — unset in the
committed `.env` and never set in Vercel's production/preview environment — so none of this
renders, is crawlable, or appears in page source on the live site. It's on locally (via the
gitignored `.env.local`) so it can be reviewed and designed against.

Every component below is also tagged `data-sample="true"` on its root element, so a future
`grep -r 'data-sample="true"'` (or a DOM search on a locally-flagged preview) finds every
instance even without this file.

To preview locally: confirm `.env.local` contains `NEXT_PUBLIC_SHOW_SAMPLE_CONTENT=true`,
then `npm run dev`.

## Checklist

- [ ] **Homepage stats band** — `components/sections/StatsBand.tsx`, rendered on `/`.
      Replace `150+` campaigns, `38%` avg. lead increase, and `AED 40M+` ad spend managed
      with real, defensible figures (or drop the ones that can't be substantiated). The
      "Markets served" figure is already real — it's computed from `COUNTRIES.length`.

- [ ] **Testimonial carousel** — `components/sections/Testimonials.tsx`, rendered on `/`.
      All 4 quotes, names, roles, and company names (Meridian Properties, Haddad & Co.
      Realty, Skyline Developments, Palm Vista Realty) are fictional. Replace with real
      client testimonials and get explicit permission to use each client's name before
      publishing — do not ship real names without sign-off.

- [ ] **Team section** — `components/sections/Team.tsx`, rendered on `/about`.
      All 4 people (Yasmin Khoury, Tariq Al Zaabi, Nadia Petrova, Hassan Bakr) and their
      roles are fictional. Replace with the real team, real roles, and — if photos are
      wanted instead of initials — real headshots with consent.

- [ ] **Portfolio teaser** — `components/sections/PortfolioTeaser.tsx`, rendered on both
      `/` and `/about`. All 3 projects (The Meridian, Arjan Green Collective, Palm Crest
      Residences) are fictional; the service tags on each card are real service names used
      as placeholders. `/portfolio` is now a real page (`app/portfolio/page.tsx`) — it does
      not include these fabricated cards; it's honest, real copy about how case studies get
      published. Once real, permission-cleared case studies exist, replace this teaser's
      fictional projects with real ones and add matching project detail content to
      `/portfolio` itself.

## Explicitly NOT on this list (real, ungated, safe to ship as-is)

- Service-page comparison table, icon feature grid, and "Tools we use" section — built
  entirely from `lib/services.ts` copy already on the site (the `tools` field only contains
  platform/portal names already named in each service's own text, e.g. Bayut, GoHighLevel,
  Google Ads).
- Blog callouts, table of contents, related articles, byline, and read time — all derived
  from real post content and real cross-references in `lib/blog.ts`, nothing invented.
- Blog category filter — categories are each post's primary related service name, not a
  separate fabricated taxonomy.
- Newsletter signup form — real UI, but not wired to an email service yet (same category as
  the `/contact` form's mailto stub). Submitting shows an honest "not wired yet" message
  instead of pretending to subscribe anyone.

## Vercel environment check

I could not verify Vercel's dashboard environment variable settings directly (same
limitation noted previously for `NEXT_PUBLIC_SITE_URL`). `NEXT_PUBLIC_SHOW_SAMPLE_CONTENT`
was **not** added to the committed `.env`, so unless it has been manually added to Vercel's
project settings, production will correctly default to off. Worth a manual check in the
Vercel dashboard (Project → Settings → Environment Variables) to confirm it isn't set there.
