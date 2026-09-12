# Go-live checklist — deferred audit findings

Findings from the site audit (checked against the "Common Failures in Vibe-Coded Websites"
report) that are real but weren't urgent enough to block the immediate fix pass. The three
critical/high-priority items from that audit — a critical Next.js RCE, missing HTTP security
headers, and WCAG AA color-contrast failures — are already fixed. This tracks what's left.

## Before going live

- [ ] **Add a CI pipeline.** There is currently no `.github/workflows` and no test suite of any
      kind. At minimum, a workflow that runs `npm ci`, `npm run lint`, `npm run build`, and
      `npm audit --omit=dev` (failing the build on any vulnerability) on every push/PR would have
      caught the critical Next.js CVE fixed in this PR automatically, before it ever reached
      production. This is the single biggest structural gap the audit found — everything else
      slips through more easily without it.

- [ ] **Add a cookie consent gate the moment analytics is added — not after.** There are
      currently zero analytics/ad-tech/tracking scripts anywhere in the codebase, so nothing
      needs gating today. But the first time GA4, GTM, Meta Pixel, or similar gets wired in,
      build the consent banner (freely-given, specific, reject-available, no pre-ticked boxes —
      per GDPR/EDPB guidance) in the same PR, not as a follow-up. It's much easier to ship both
      together than to retrofit consent onto tracking that's already live.

## Lower priority, worth revisiting

- [ ] **Tighten the CSP once there's room to test it properly.** The `Content-Security-Policy`
      added in this PR keeps `'unsafe-inline'` for `script-src`/`style-src` because Next.js App
      Router relies on inline hydration/RSC scripts without a nonce-based setup in place. It's a
      real improvement over no CSP at all (blocks cross-origin script/style injection and
      framing), but a nonce- or hash-based policy would be stricter. Needs middleware changes and
      careful testing to avoid breaking hydration — not a quick fix, so left for later.

- [ ] **Re-check Core Web Vitals against the real production URL.** LCP measured 3.2–3.5s in this
      sandboxed dev environment (Lighthouse, mobile) — above the 2.5s "good" threshold, though
      CLS is a perfect 0 and TBT is low, so this isn't a JS-weight problem. This number is likely
      worse than what Vercel's actual edge network produces for real visitors; re-run Lighthouse
      against `realt-mark.vercel.app` (or the final custom domain) once it's live to see the real
      figure before deciding whether it needs work.

- [ ] **Run a live security scan against the deployed domain.** This audit was code + local-tool
      based (static review, axe-core, Lighthouse, `npm audit` — all against a local production
      build). A live OWASP ZAP pass and a Search Console URL Inspection check both need the real
      deployed URL and/or Search Console access, which weren't available during this audit.
