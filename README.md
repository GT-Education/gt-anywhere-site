# gt-anywhere-site

A self-hosted static replica of **anywhere.gt.school** — the GT Anywhere paid-social
landing site — captured to move the site **off Webflow** onto infrastructure we control.

This is **commit 1: a faithful baseline.** It is a byte-for-byte-visual mirror of the
live Webflow site as of **2026-07-24**, with every Webflow-served asset localized. No
design or performance changes have been made yet — those land as separate, reviewable
PRs (see *Roadmap*).

## What's here

```
index.html                     Homepage
advisors/  academics/          Same-domain pages, each as <page>/index.html
intensives/  academic-calendar/     (clean URLs: /advisors resolves to advisors/index.html)
privacy-policy/  terms-of-use/  refund-policy/
assets/                        All Webflow-served CSS, JS, fonts, images (localized)
  cdn.prod.website-files.com/  Webflow CDN assets (CSS, webflow.js, images, fonts)
  d3e54v103j8qbb.cloudfront.net/  Webflow-hosted jQuery
tools/
  mirror.mjs                   The dependency-free crawler used to build this mirror
  MIRROR-LOG.json              Crawl provenance (pages, asset count, what stayed remote)
```

8 pages, ~236 localized assets.

## What is and isn't local

**Localized** (so the site no longer depends on Webflow to serve them): all HTML, CSS,
the Webflow runtime JS, jQuery, fonts, and images.

**Left remote on purpose** — genuinely third-party services the site *calls*, not
Webflow hosting: Google Tag Manager / gtag, the Facebook & TikTok pixels, the HubSpot
suite, the Vidzflow player (`app.vidzflow.com`), Google Fonts, and the application flow
on `apply.gt.school`. These keep working as-is and are addressed in the Core Web Vitals
work, not the mirror.

Two mechanical changes were applied during mirroring, both required for self-hosting:
- **`integrity` (SRI) attributes stripped** — the hashes were computed for Webflow's
  original files; self-hosting rewritten/relocated copies would otherwise be blocked.
- **Asset URLs rewritten** from `cdn.prod.website-files.com/...` to local `/assets/...`.

## Run locally

```bash
cd gt-anywhere-site
python3 -m http.server 8080     # then open http://localhost:8080/
```

Any static host works (Vercel, Netlify, GitHub Pages, S3/CloudFront). The `<page>/index.html`
layout gives clean URLs out of the box.

## Re-mirror (refresh from the live site)

```bash
node tools/mirror.mjs "https://anywhere.gt.school/" ./out
```

Requires Node ≥18 (global `fetch`). No dependencies.

## Known issues (carried over from the live site — reproduced faithfully)

- **`$ is not defined`** in the console: a custom accordion script runs before jQuery
  loads. This bug exists on the live Webflow site too; it's a candidate fix in the
  cleanup PR, not a mirror artifact.

## Roadmap

1. **This baseline** — faithful mirror. ✅
2. **Core Web Vitals fixes** — defer the marketing tags, make the hero eager +
   `fetchpriority` (it's currently `loading="lazy"`), remove the GSAP entrance animation
   on the LCP hero, lazy-load Vidzflow behind a facade, drop the unused preconnect. See
   the remediation runbook for the full P1–P7 plan.
3. **Full cutover** — localize the remaining `og:image`/social meta, decide the tag
   stack (GTM vs in-place), wire up the forms/application flow, then point DNS.
