# K11 Performance and Core Web Vitals

| Field | Value |
|---|---|
| Cluster | K11 of `18-knowledge-base-plan.md` section 1 |
| Written | 2026-09-10 |
| Method | 46 web sources fetched by the agent (text fetch only, no browser, no GT or Alpha page loaded in a browser); plus 4 direct byte measurements of live third-party tag scripts over the network (GA4, Meta, TikTok's loader stub, HubSpot's banner — the HubSpot URL is a wildcard match, `js.hs-banner.com/*.js`, not one fixed resource) and 7 measurements of this repository's own assets, taken with `curl` and the standard library plus the system Pillow 12.1.1 |
| Feeds | `1_spec/03` section 9 (performance budget), REQ-073, T-059, T-065, the QA runner in `1_spec/13`, rubric row **Craft** in `17` section 6 |
| Status | Drafted by Fable; reworked by Fable after Astra's E4 (`ensemble/E4-knowledge-base.md`, `ensemble/prompts/REWORK-PACK.md`) |

Two kinds of evidence appear below and are never mixed. **F-numbers** are findings from a fetched
source and carry a URL, an author and a date. **M-numbers** are values the agent measured directly,
with the method stated so the number can be re-derived. Nothing here comes from model memory.

---

## 1. Question

Current Core Web Vitals thresholds and how they are measured (field against lab; INP, LCP, CLS);
what LCP under 2.0 s on a mid-range Android over 4G costs in bytes and requests; image strategy
(AVIF and WebP, responsive sizes, `fetchpriority`, preload, lazy-loading rules, `decoding`); font
strategy as it affects LCP and CLS, reconciled with K2; the cost of the GA4, Meta, TikTok and
HubSpot tags and how to defer them after consent without losing data; what Vercel's static hosting
gives us free and what it does not without a build step; Lighthouse and WebPageTest practice; and
the Web Almanac's field numbers.

---

## 2. Findings

### 2a. The metrics, their thresholds, and how they are measured

| # | Finding | Source |
|---|---|---|
| F-01 | The three Core Web Vitals and their "good" thresholds, verbatim: LCP "should occur within 2.5 seconds"; pages "should have a INP of 200 milliseconds or less"; pages "should maintain a CLS of 0.1. or less". All three are assessed "at the 75th percentile of page loads, segmented across mobile and desktop devices" | Philip Walton, *Web Vitals*, web.dev, pub. 2020-05-04, upd. 2024-10-31, https://web.dev/articles/vitals |
| F-02 | Lab is not a substitute for field: "lab measurement is an essential part of delivering great experiences, but it is not a substitute for field measurement." INP became a stable Core Web Vital in 2024, replacing First Input Delay | Walton, web.dev, upd. 2024-10-31 |
| F-03 | LCP bands: good ≤ 2.5 s, needs improvement 2.5–4.0 s, poor > 4.0 s. Candidate elements are `<img>`, `<image>` inside `<svg>`, `<video>`, elements with a `url()` background image, and "Block-level elements containing text nodes or other inline-level text element children". LCP "includes any unload time from the previous page, connection set up time, redirect time, and other Time To First Byte (TTFB) delays" | Philip Walton & Barry Pollard, *Largest Contentful Paint (LCP)*, web.dev, upd. 2025-09-04, https://web.dev/articles/lcp |
| F-04 | The four LCP sub-parts and their **ideal shares of total LCP**: TTFB ~40%, resource load delay < 10%, resource load duration ~40%, element render delay < 10%. Definitions: load delay is "time between TTFB and when the browser starts loading the LCP resource"; render delay is "time between when the LCP resource finishes loading and the LCP element rendering fully" | Walton & Pollard, *Optimize LCP*, web.dev, upd. 2025-03-31, https://web.dev/articles/optimize-lcp |
| F-05 | INP bands: ≤ 200 ms good, > 200 ms and ≤ 500 ms needs improvement, > 500 ms poor. Only clicks, taps and key presses are observed. A page with no qualifying interaction reports no INP at all. For pages with many interactions the metric "ignore[s] one highest interaction for every 50 interactions" | Jeremy Wagner & Barry Pollard, *INP*, web.dev, upd. 2025-09-02, https://web.dev/articles/inp |
| F-06 | CLS: `layout shift score = impact fraction * distance fraction`; the reported value is the largest *session window*, a burst "with less than 1-second in between each shift and a maximum of 5 seconds for the total window duration". Shifts within 500 ms of a user interaction, and `transform` animations, are expected and excluded | Milica Mihajlija & Philip Walton, *CLS*, web.dev, upd. 2023-04-12, https://web.dev/articles/cls |
| F-07 | Field data comes from CrUX, which only includes users who "Enable usage statistic reporting", "Sync their browser history", do "Not have a Sync passphrase set", and use a supported platform. A page appears only if "it has a minimum number of visitors… An exact number is not disclosed" | Chrome team, *CrUX* and *CrUX methodology*, developer.chrome.com, upd. 2024-02-08 and 2024-06-20, https://developer.chrome.com/docs/crux, https://developer.chrome.com/docs/crux/methodology |
| F-08 | Report percentiles, never averages: "Averages are problematic because they don't represent any single user's session. Outliers at either range of the distribution may skew the average in ways that are misleading." Report at p75; p90/p95 are worth watching | Philip Walton, *Best practices for measuring Web Vitals in the field*, web.dev, upd. 2022-05-11, https://web.dev/articles/vitals-field-measurement-best-practices |
| F-09 | The `web-vitals` library is "a tiny (~3K, brotli'd), modular library"; the attribution build "adds roughly 1.5KB"; the documented send pattern is `navigator.sendBeacon()` | Google Chrome team, `GoogleChrome/web-vitals`, https://github.com/GoogleChrome/web-vitals |
| M-01 | Measured over the wire on 2026-09-10: `web-vitals@4` standard IIFE build = **7,226 B raw / 2,600 B compressed**; the attribution build = **12,505 B raw / 4,170 B compressed** | `curl -H 'Accept-Encoding: br, gzip'` against `unpkg.com`, sizes read from `%{size_download}` |

### 2b. Lab measurement: Lighthouse and WebPageTest

| # | Finding | Source |
|---|---|---|
| F-10 | Lighthouse's **default mobile throttling preset**, verbatim: latency **150 ms**, throughput **1.6 Mbps down / 750 Kbps up**, packet loss none, and "a constant 4x CPU multiplier". The preset "represents roughly the bottom 25% of 4G connections and top 25% of 3G connections" | Lighthouse `docs/throttling.md`, GoogleChrome/lighthouse, https://raw.githubusercontent.com/GoogleChrome/lighthouse/main/docs/throttling.md |
| F-11 | Three throttling methods. **Simulated** is Lighthouse's default and "matches the defaults used by PageSpeed Insights and the Lighthouse CLI"; it is fast and deterministic but "inherently inaccurate for edge cases". **Request-level/DevTools** throttling is "not highly accurate". **Packet-level** throttling gives "the most accurate network simulation" and "is used by WebPageTest", at the cost of more variance | Lighthouse `docs/throttling.md`; mirrored at https://googlechrome-lighthouse.mintlify.app/configuration/throttling |
| F-12 | Lighthouse performance score weights: FCP 10%, Speed Index 10%, LCP 25%, Total Blocking Time 30%, CLS 25%. Bands: 0–49 red, 50–89 orange, 90–100 green. The curve is calibrated so "the 25th percentile of HTTP Archive data becomes a score of 50… and the 8th percentile becomes a score of 90" | Chrome team, *Lighthouse performance scoring*, upd. 2019-09-19, https://developer.chrome.com/docs/lighthouse/performance/performance-scoring |
| F-13 | Lighthouse's LCP colour thresholds differ by form factor: **mobile** green 0–2.5 s, orange 2.5–4 s, red > 4 s; **desktop** green 0–**1.2 s**, orange 1.2–2.4 s, red > 2.4 s | Chrome team, *Largest Contentful Paint audit*, upd. 2020-01-10, https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint |
| F-14 | Lighthouse categories are Performance, Accessibility, SEO, Best Practices and Agentic browsing; it runs from DevTools, the CLI (`npm install -g lighthouse`), as a Node module for CI, and through PageSpeed Insights | Chrome team, *Lighthouse overview*, upd. 2025-06-02, https://developer.chrome.com/docs/lighthouse/overview |

### 2c. The critical path, preload and priority

| # | Finding | Source |
|---|---|---|
| F-15 | What the browser waits for before first render: "Part of the HTML", "Render-blocking CSS in the `<head>` element", "Render-blocking JavaScript in the `<head>` element". It does *not* wait for fonts, images, or non-render-blocking script and CSS | Chrome team, *Understanding the critical path*, web.dev, upd. 2023-11-27, https://web.dev/learn/performance/understanding-the-critical-path |
| F-16 | CSS "blocks the browser from rendering any content until the CSS Object Model (CSSOM) is constructed". Inlining critical CSS works but "extracting and maintaining critical styles can be difficult" and inlined bytes "cannot be cached as long as external stylesheets" | Chrome team, *Optimize resource loading*, web.dev, upd. 2023-11-01, https://web.dev/learn/performance/optimize-resource-loading |
| F-17 | The preload scanner is defeated by four specific patterns: JS-injected async scripts, JS lazy-loading that hides the src behind `data-src`, CSS `background-image` LCP candidates, and over-inlining. **Measured in the article's own demos**: lazy-loaded vs standard hero image ≈ **100 ms** of LCP; preloading a CSS background LCP image ≈ **250 ms**; over-inlining took LCP from **~3.5 s to ~7 s** | Jeremy Wagner, *Don't fight the browser preload scanner*, web.dev, upd. 2022-05-13, https://web.dev/articles/preload-scanner |
| F-18 | `rel=preload` must be used "sparingly and only [for] the most critical resources", because "If too many resources are prioritized, effectively none of them are… especially detrimental to those on slower networks". Fonts "preloaded without the `crossorigin` attribute will be fetched twice!" Shopify, the Financial Times and Treebo "saw 1-second improvements" | Houssein Djirdeh, Jeremy Wagner, Milica Mihajlija, *Preload critical assets*, web.dev, 2018-11-05, https://web.dev/articles/preload-critical-assets |
| F-19 | `fetchpriority` takes `high`, `low`, `auto`. Measured cases: **Google Flights LCP 2.6 s → 1.9 s** (−0.7 s); the Oodle app "decreased page load time by 2 seconds". "Preload is still required for early discovery of LCP images included as CSS backgrounds." Supported in Chrome/Edge 102+, Firefox 132+, Safari 17.2+ | Addy Osmani, Leena Sohoni, Patrick Meenan, Barry Pollard, *Fetch Priority API*, web.dev, upd. 2023-11-14, https://web.dev/articles/fetch-priority |
| F-20 | LCP optimisation checklist: set `fetchpriority="high"` on the likely LCP image; never `loading="lazy"` on it; make the LCP resource "discoverable in the initial HTML document response"; avoid synchronous scripts in `<head>`; for fonts "use `font-display` values other than `auto` or `block`" | Walton & Pollard, *Optimize LCP*, upd. 2025-03-31 |
| F-21 | Third-party loading: `async` scripts "execute at the first opportunity after they finish downloading"; `defer` executes "after HTML parsing is completely finished"; `preconnect` can "save 100–500 ms"; synchronous scripts "delay DOM construction and rendering". Casper "shaved 1.7 seconds off load times" by self-hosting; the Telegraph "improved the ad loading time by an average of four seconds" by deferring | Milica Mihajlija, *Efficiently load third-party JavaScript*, web.dev, 2019-08-14, https://web.dev/articles/efficiently-load-third-party-javascript |
| F-22 | INP is improved by reducing input delay, yielding to the main thread inside event callbacks, and minimising presentation delay — the last through a smaller DOM and `content-visibility` for lazy rendering | Jeremy Wagner, Philip Walton, Barry Pollard, *Optimize INP*, web.dev, upd. 2025-09-02, https://web.dev/articles/optimize-inp |
| F-23 | `content-visibility: auto` "enables the user agent to skip an element's rendering work (including layout and painting) until it is needed". It needs `contain-intrinsic-size` to avoid shifting, and — unlike `hidden` — off-screen content "remains in the document object model and the accessibility tree". Baseline 2024 (newly available since September 2024) | MDN, *content-visibility*, last modified 2026-07-26, https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility |

### 2d. Images

| # | Finding | Source |
|---|---|---|
| F-24 | The `<img>` attributes, verbatim. `loading`: `eager` is the default, `lazy` "Defers loading the image until it reaches a calculated distance from the viewport". `decoding`: `async` means "Decode the image asynchronously, after rendering and presenting the other DOM content"; `auto` is the default; MDN notes "It is often difficult to perceive any noticeable effect when using `decoding` on static `<img>` elements". `srcset` `w` descriptors "must match the intrinsic width of the referenced image". `sizes="auto"` "is only valid when combined with `loading=\"lazy\"`" | MDN, *`<img>`*, last modified 2026-05-09, https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img |
| F-25 | `<picture>`: "The browser will consider each child `<source>` element and choose the best match among them"; "If the user agent does not support the given type, the `<source>` element is skipped." The canonical AVIF → WebP → JPEG cascade is the first-match-wins ordering | MDN, *`<picture>`*, last modified 2026-04-24, https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/picture |
| F-26 | Lazy-loading rule and thresholds: "Don't lazy-load images that are likely to be in-viewport when the page loads, especially LCP images." Chrome's distance-from-viewport threshold is **1250 px on 4G** and **2500 px on 3G or slower**; measured, "on 4G, 97.5% of lazy-loaded images were fully loaded within 10ms of becoming visible". "we recommend adding `width` and `height` attributes to all `<img>` tags" | Addy Osmani, Houssein Djirdeh, Mathias Bynens, Barry Pollard, *Browser-level lazy loading*, web.dev, upd. 2024-08-13, https://web.dev/articles/browser-level-image-lazy-loading |
| F-27 | AVIF against JPEG, measured in the article: "1120 by 840 AVIF at 18,769 bytes" against "1120 by 840 JPEG at 20,036 bytes", with a general claim of "greater than 50% savings vs. JPEG". Recommended `avifenc` settings `--min 0 --max 63 -a end-usage=q -a cq-level=18 -a tune=ssim` at the default speed 6 | Jai Krishnan, Wan-Teh Chang, Jeremy Wagner, *Using AVIF to compress images*, web.dev, 2021-06-07, https://web.dev/articles/compress-images-avif |
| F-28 | CLS causes, in order: images without dimensions, ads/embeds/iframes without dimensions, dynamically injected content, and web fonts. Fixes: `width`/`height` or `aspect-ratio`; `min-height` for embeds; `transform` rather than `top`/`left`; for fonts, `font-display: optional`, good fallbacks and `<link rel=preload>` | Addy Osmani & Barry Pollard, *Optimize CLS*, web.dev, upd. 2025-02-07, https://web.dev/articles/optimize-cls |
| M-02 | **The repo's 25 shared photos total 2,865,162 B (2.73 MB) plus 20,984 B of SVG logos — 2.75 MB for 28 files.** Largest: `georgetown-support.webp` 264,306 B; `georgetown-crowd.webp` 240,512 B. Smallest photo: `georgetown-dscf1931.webp` 21,242 B. Three photos are under 640 px wide (`georgetown-3504` 540, `georgetown-3915` 600, `georgetown-writing` 608) | `os.path.getsize` plus a stdlib RIFF/VP8X header parse over `0_plan/mockups/shared/img/` |
| M-03 | **Re-encoded with system Pillow 12.1.1 (LANCZOS resize, no new repo dependency), at the widths a phone actually paints.** `georgetown-science.webp` (source 62,742 B) → **390w: AVIF q50 6,596 B / WebP q72 8,962 B**; 780w: AVIF 13,342 B / WebP 21,200 B; 1280w: AVIF 22,135 B / WebP 39,952 B. `anywhere-austin-intensives.webp` (73,048 B) → 390w: AVIF 10,154 B / WebP 15,120 B. `georgetown-guide.webp` (121,134 B) → 390w: AVIF 9,524 B / WebP 11,992 B. Across all six candidates and all widths tested, **AVIF q50 is 15–35% smaller than WebP q72** and both are far smaller than the Webflow-exported master | `PIL.Image.save(format='AVIF', quality=50, speed=4)` and `format='WEBP', quality=72, method=6`, sizes read from an in-memory buffer |
| M-04 | **The mirrored Anywhere home page references 47 local assets totalling 6,442,962 B (6.29 MB) on disk**, of which **4,014,478 B is SVG**. Four decorative `<img loading="lazy" alt="">` "blueprint" SVGs plus one map SVG are **3,940,048 B raw / 1,294,749 B gzip-9 (1,264 KB over the wire)**. Estimated total over the wire for the page's first-party local assets (gzip-9 for text types, raw for binary) is **≈ 2,479 KB — and that excludes the 4.30 MB of TTF fonts referenced from the stylesheets and every third-party tag** | Regex over `index.html` for `src`/`href`/`url()` under `/assets/`, then `getsize` and `gzip.compress(level=9)` |
| M-05 | The five current mockups, raw bytes: HTML 13,980–18,439 B, CSS 13,998–21,179 B. `M1-two-doors/index.html` is 15,407 B raw → **3,752 B at gzip-9**; `shared/tokens.css` 5,296 B → 2,235 B. The three SVG logos gzip to 1,300 / 3,616 / 4,369 B | `getsize` and `gzip.compress(level=9)` over `0_plan/mockups/` |

### 2e. Third-party tags — what they actually cost

| # | Finding | Source |
|---|---|---|
| M-06 | **Measured over the wire on 2026-09-10, with a Pixel 6 user agent, both uncompressed and with `Accept-Encoding: br, gzip`:** GA4 `gtag/js?id=G-494D3VN0SF` = **594,750 B raw / 193,537 B compressed (189.0 KB)**. Meta `connect.facebook.net/en_US/fbevents.js` = **419,882 B raw / 110,080 B compressed (107.5 KB)**. TikTok `analytics.tiktok.com/i18n/pixel/events.js` (the loader stub only) = **7,878 B raw / 1,885 B compressed (1.8 KB)**. HubSpot `js.hs-banner.com/*.js` (the consent banner alone) = **61,810 B raw / 14,890 B compressed (14.5 KB)**. **Sum of the three ad/analytics libraries: 298.3 KB compressed.** | `curl -sL -A '<Pixel 6 UA>' -w '%{size_download}'`, two passes per URL |
| F-29 | The Google tag snippet, verbatim, with placement "immediately after the opening `<head>` HTML tag": `<script async src="https://www.googletagmanager.com/gtag/js?id=TAG_ID"></script>` followed by `window.dataLayer = window.dataLayer \|\| []; function gtag(){dataLayer.push(arguments);}`. **The queue is bootstrapped before the remote library arrives** | Google, *Install the Google tag*, upd. 2026-07-30, https://developers.google.com/tag-platform/gtagjs/install |
| F-30 | Consent Mode v2 has four parameters — `ad_storage`, `analytics_storage`, plus the two added in November 2023, `ad_user_data` ("consent for sending user data related to advertising to Google") and `ad_personalization`. Defaults must be set "on every page of your site before any commands that send measurement data". Even with `ad_storage` denied, "Data sent to Google will still include the full page URL" | Google, *Consent mode*, upd. 2026-07-30, https://developers.google.com/tag-platform/security/guides/consent; command syntax `gtag('consent', {<consent_arg>}, {<consent_params>})` per Google, *gtag.js API reference*, upd. 2026-04-17 |
| F-31 | Meta's pixel loads `https://connect.facebook.net/en_US/fbevents.js`, sets `t.async=!0`, and Meta asks for it "between the opening and closing `<head>` tags on every page" because that "executes the code sooner, increasing the chance that your visitors are tracked before they leave your page". The `<noscript>` fallback is a 1×1 `https://www.facebook.com/tr?…&noscript=1` image | Meta, *Meta Pixel — Get started*, https://developers.facebook.com/docs/meta-pixel/get-started |
| F-32 | HubSpot asks you to "paste the code before the closing `</body>` tag in the HTML code for each page of your site"; the tracking code "allows HubSpot to monitor your website traffic", tracks HubSpot and non-HubSpot form submissions, and may enable the live chat widget | HubSpot, *Install the HubSpot tracking code*, upd. 2026-07-21, https://knowledge.hubspot.com/reports/install-the-hubspot-tracking-code |
| F-33 | Field context: "Around 90%-92% pages use third-parties across different rank groups". `googletagmanager.com` and `google-analytics.com` are in the top ten third-party hosts. Unique third-party domains fell year over year while total third-party requests rose — "individual vendors are making more requests per page" | Muhammad Jazlan & Muhammad Abu Bakar Aziz, *Web Almanac 2025: Third Parties*, HTTP Archive, 2026-01-15, https://almanac.httparchive.org/en/2025/third-parties |

### 2f. Vercel: what static hosting gives us and what it does not

| # | Finding | Source |
|---|---|---|
| F-34 | Compression is automatic and negotiated: Brotli "takes precedence over gzip", and Vercel's own measured deltas are "brotli compressed JavaScript files are 14% smaller than gzip; HTML files are 21% smaller; CSS files are 17% smaller". The **allowlist** covers `javascript`, `css`, `plain`, `xml`, `json`, `svg+xml`, `otf`, `ttf`, `wasm` and others — **it deliberately excludes JPEG, PNG and WebP** because "most image formats are already compressed" | Vercel, *Vercel CDN Compression*, upd. 2026-03-05, https://vercel.com/docs/how-vercel-cdn-works/compression |
| F-35 | **The default is not a caching header.** "The default value is `cache-control: public, max-age=0, must-revalidate` which instructs both the CDN and the browser not to cache." Vercel's own recommendation for "Immutable static assets (hashed JS, CSS, fonts)" is `max-age=31536000, immutable`, and it notes "Frameworks like Next.js set this automatically" — which this dependency-free repo is not | Vercel, *Cache-Control headers*, upd. 2026-08-11, https://vercel.com/docs/caching/cache-control-headers |
| F-36 | Static files are "automatically cached on Vercel's global network for the lifetime of the deployment after the first request", and "If a static file is unchanged, the cached value can persist across deployments due to the hash used in the filename". Custom headers for a non-Next project go in `vercel.json` under `headers` | Vercel, *Vercel CDN Cache*, upd. 2026-08-11, https://vercel.com/docs/caching/cdn-cache |
| F-37 | **Image Optimization requires a framework Image component.** "If you use a standard HTML `img` element, the browser will be instructed to bypass optimization and serve the image directly from its source." It "works with many frameworks, including Next.js, Astro, and Nuxt"; every miss "Billed as an image transformation". A CLI path exists (`vercel blob put-image … --format webp`) but "Each write is billed as one image transformation plus a regular blob upload" | Vercel, *Image Optimization*, upd. 2026-08-13, https://vercel.com/docs/image-optimization |
| F-38 | The network: "126 Points of Presence (PoPs) across 51 countries", TLS 1.2/1.3, always-on DDoS mitigation, and "Pre-render pages at build time and serve them from the CDN without invoking your origin" as a named use case | Vercel, *Vercel CDN overview*, upd. 2026-08-11, https://vercel.com/docs/cdn |
| F-39 | The cache-busting contract, stated normatively: `immutable` "indicates that the response will not be updated while it's fresh"; the recommended pattern is `Cache-Control: max-age=31536000, immutable` on `/assets/*` and `Cache-Control: no-cache` on `index.html`, with version or hash in the asset filename | MDN, *Cache-Control*, last modified 2026-08-12, https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cache-Control |
| F-40 | CDN adoption and effect: 35% of HTML is CDN-served; for CDN-served content "TLS negotiation: CDN median desktop time is 57ms vs. 177ms for origins", DNS is "19% faster on mobile, 60% faster on desktop", and HTTP/3 adoption is 29–45% on CDNs against under 7% on origins | Joe Viggiano, Alex Moening, Nick McCord, *Web Almanac 2025: CDN*, 2026-01-15, https://almanac.httparchive.org/en/2025/cdn |

### 2g. The field, from the Web Almanac

| # | Finding | Source |
|---|---|---|
| F-41 | 2025 CWV pass rates: **LCP good on 62% of mobile** and 74% of desktop origins (13% of mobile are "poor"); INP good on 77% mobile / 97% desktop; CLS good on 81% mobile / 72% desktop. FCP good on 55% mobile; **TTFB good on only 44% of mobile**. By rank: top 1,000 sites 51% good mobile CWV, top 10,000 42%, top 100,000 37% | Himanshu Jariyal, Prathamesh Rasam, Humaira, Aaron T. Grogg, *Web Almanac 2025: Performance*, 2026-01-15, https://almanac.httparchive.org/en/2025/performance |
| F-42 | LCP element composition, 2025: images are the LCP element on **85.3% of desktop and 76.0% of mobile** pages; text on 23.7% of mobile. LCP image formats: JPG 57%, PNG 26%, WebP 11%, **AVIF 0.7%**. `fetchpriority="high"` is on 17.3% of mobile pages; preload on 2.1–2.2%; **16–17% of pages lazy-load their own LCP image**; and "62% of mobile pages fail to set explicit dimensions on at least one image" | *Web Almanac 2025: Performance* |
| F-43 | Page weight, median mobile home page 2025: **2,559 KB total**, made of **images 911 KB, JavaScript 632 KB, fonts 122 KB, CSS 77 KB, HTML 22 KB**, across **72 requests** (22 JS, 12 images, 8 CSS, 3 fonts). Up 8.4% year over year | Richard Barret & Jamie Indigo, *Web Almanac 2025: Page Weight*, 2026-01-15, https://almanac.httparchive.org/en/2025/page-weight |
| F-44 | Image formats and efficiency, 2024 (the last year with a Media chapter): mobile format share JPEG 32.4%, PNG 28.4%, GIF 16.8%, WebP 12.0%, SVG 6.4%, **AVIF 1.0%** — AVIF up 386% in two years. Median bits-per-pixel: AVIF 1.4, WebP 1.3, JPEG 2.0, PNG 3.8. Median image 12 KB; **median largest image per page 135 KB, p90 1,002 KB**. `srcset` on 42% of pages, `<picture>` on 9.3%; native lazy-loading ~35%; **only 32% of images carry both `width` and `height`**; median 13 `<img>` per page | Stefan Judis & Eric Portis, *Web Almanac 2024: Media*, 2024-12-29, https://almanac.httparchive.org/en/2024/media |
| F-45 | Fonts, 2025: 88% of mobile pages use web fonts; WOFF2 is ~65% of font requests; `font-display` splits `swap` ~50% / `block` ~25% / `auto` ~8.5–9.1% / `fallback` ~5.1% / `optional` **0.4–0.5%**; preload hints on 11.7% of mobile pages; median font file ~35–36 KB gzip, p75 ~76–77 KB, p90 ~115–116 KB; 72% of sites self-host at least some fonts | Charles Berret, *Web Almanac 2025: Fonts*, 2026-01-15, https://almanac.httparchive.org/en/2025/fonts |
| F-46 | Google Ads defines landing page experience as "How relevant and useful your landing page is to people who click your ad" and names three Quality Score components (expected CTR, ad relevance, landing page experience). **The page does not name page load speed as a factor** — so any claim that speed feeds ad quality is unsourced here | Google Ads Help, *About Quality Score*, https://support.google.com/google-ads/answer/2404197 |

---

## 3. Principles the studio adopts

| # | Principle | Traces to |
|---|---|---|
| P1 | **The budget is a number in a file, not an intention.** Every resource type has a byte ceiling and a request ceiling, and the QA runner fails on breach. A page that is fast on the day it ships and unmeasured thereafter is not fast | F-01, F-12, F-43 |
| P2 | **Design the first screen against 200 KB/s and 150 ms of latency.** Lighthouse's Slow 4G preset is the design condition, not the worst case: 1.6 Mbps is 200,000 bytes a second, so every 20 KB is 100 ms | F-10, F-11 |
| P3 | **Decide the LCP element on purpose, then spend the whole preload allowance on it.** Preload and `fetchpriority` are a fixed allowance shared across fonts and images; naming the LCP element is the decision that allocates it | F-04, F-18, F-19, F-20 |
| P4 | **Nothing that paints in the first viewport is lazy, and nothing outside it is eager.** `loading="lazy"` on the LCP image is the single most common self-inflicted regression in the field | F-20, F-26, F-42 |
| P5 | **Every image ships at the width it is painted, in AVIF with a WebP fallback.** Serving a 1440 px master into a 358 px slot is a 6× waste that no format choice can recover | F-24, F-25, F-27, M-03 |
| P6 | **Reserve space for everything, always.** `width` and `height` on every `<img>`, `aspect-ratio` on every media box, metric-matched font fallbacks. CLS 0 is a budget of zero, not a target | F-06, F-28, F-44, MN-10 |
| P7 | **Third-party bytes are guests, and guests arrive after the party has started.** Zero third-party bytes before consent; zero before the `load` event. The queue, not the library, is what must exist early | F-21, F-29, F-30, M-06 |
| P8 | **A static host gives compression and edge caching free, and image optimisation only for money and a framework.** Take the free half deliberately (`vercel.json` headers) and do the other half at authoring time | F-34, F-35, F-36, F-37 |
| P9 | **Lab is a gate, field is the truth, and neither is one run.** Median of five Lighthouse runs to gate a PR; packet-level throttling as a second opinion; CrUX at p75 as the only claim we make about real users | F-02, F-07, F-08, F-11 |
| P10 | **Simplicity is the performance strategy.** No framework, no build step, no external script means there is nothing to defer, split, tree-shake or hydrate. Every byte on the page was written by a person who chose it | F-15, F-16, F-43 |

---

## 4. Anti-patterns

| # | Anti-pattern | Why it is one | Where it already bites GT |
|---|---|---|---|
| A1 | Decorative SVG shipped as a photograph would be | Four `alt=""` "blueprint" SVGs plus a map cost **1,264 KB over the wire** on a page whose entire job could be done in 130 KB (M-04). They are lazy, so they do not hurt LCP — they take the phone's bandwidth away from everything that does | The live Anywhere home page today |
| A2 | Shipping the Webflow master as the responsive image | `georgetown-support.webp` is 258 KB for a slot no phone paints wider than 358 CSS px; at 390w AVIF the same picture is single-digit KB (M-02, M-03) | `shared/img/` if a mock references it directly |
| A3 | `loading="lazy"` on the hero | ≈100 ms of LCP measured in the demo (F-17); 16–17% of the field does it anyway (F-42) | Not yet present; the mocks must be checked, because the Webflow export lazy-loads almost everything |
| A4 | The LCP image behind a CSS `background-image` | The preload scanner "only scans markup, not CSS"; recovering it costs a preload and ≈250 ms if you forget (F-17, F-19) | Any mock that puts the door photo in `background-image` for cropping convenience |
| A5 | Tags in `<head>` because the vendor asked | Meta and Google both ask for `<head>` placement (F-29, F-31). Honouring both puts **296.5 KB** of compressed JavaScript in contention with the first screen (M-06) | The mirrored `index.html`, which carries gtag, Meta and TikTok inline in `<head>` |
| A6 | Relying on Vercel's defaults for caching | The default is `public, max-age=0, must-revalidate` (F-35) — that marks the response stale immediately, not unstorable: the browser still holds it and must revalidate before reuse, and F-36 confirms Vercel's CDN already caches the same static file at the edge for the deployment's lifetime regardless of this header. What survives as a real cost is a revalidation round trip per asset on every repeat visit, not a full re-download of every font and image | Any deploy of this repo without a `vercel.json` `headers` block that sets `immutable` on hashed assets |
| A7 | Expecting Vercel to optimise `<img>` | It explicitly does not: a plain `img` "will be instructed to bypass optimization" (F-37). Waiting for the platform to fix image weight means never fixing it | The assumption behind "we're on Vercel, images are handled" |
| A8 | Quoting a single Lighthouse run | Simulated throttling is "inherently inaccurate for edge cases" (F-11) and the score is a weighted composite dominated by TBT and LCP (F-12). One run is an anecdote | Any RUN-LOG row that carries one number |
| A9 | `font-display: block` for brand fidelity | Blocks up to 3 s in Chromium/Firefox and indefinitely in Safari (K2 F-39), delaying a text LCP past the whole 2.0 s budget. 25% of the field does this (F-45) | A tempting "fix" if the fallback looks wrong at G1 |
| A10 | Treating the 400 KB first-screen line in `1_spec/03` §9 as the target | It is a ceiling set before this research. The measured evidence supports ~130 KB. Building to 400 KB would ship a page three times heavier than it needs to be | `1_spec/03` section 9 as written |

---

## 5. How it applies to GT

### 5a. The byte and request budget

Arithmetic first, so the numbers are auditable. Lighthouse's design condition is **1.6 Mbps down and
150 ms RTT** (F-10), which is **200,000 bytes a second — 20 KB per 100 ms**. REQ-073 asks for LCP
under **2.0 s**, stricter than the 2.5 s "good" threshold (F-01). Applying F-04's sub-part shares to
2,000 ms gives **TTFB ≤ 800 ms, load delay ≤ 200 ms, load duration ≤ 800 ms, render delay ≤ 200 ms**.
A cold TLS 1.3 connection to a Vercel PoP costs roughly two round trips before the request leaves
(F-38), so ~300 ms, plus one RTT and a small transfer for the HTML — call TTFB ~500 ms, inside
budget. That leaves ~800 ms of transfer, which at 200 KB/s is **160 KB** — and that is the number the
first screen must fit inside, not the 400 KB now in `1_spec/03` §9.

The tables below work that ceiling through one example composition (two preloaded fonts, two door
images). The ceiling itself and the LCP outcome are what a runner enforces, not this specific request
count or resource mix — a typographic or fewer-image direction is not penalized for landing on a
different mix under the same bytes (R13; RF-30).

**First screen (above the door CTAs at 390×844), over the wire:**

| Resource | Requests | Budget | Evidence |
|---|---|---|---|
| HTML document, including inlined critical CSS and the inlined header lockup SVG | 1 | **16 KB** | M-05: M1's HTML is 3.75 KB gzipped and `tokens.css` 2.2 KB; the lockup adds ~3.6 KB gzipped |
| woff2 faces, preloaded | 2 | **70 KB** | K2 5c expects 25–40 KB per subset face; F-45's field median is 35–36 KB |
| Door images, 2 at 390w AVIF | 2 | **32 KB** | M-03: 6.6 KB and 10.2 KB measured for the two named candidates; 16 KB each is a generous ceiling |
| JavaScript on the critical path | 0 | **0 KB** | REQ-070, MN-09 |
| Third-party anything | 0 | **0 KB** | P7 |
| **First screen total** | **5** | **118 KB (proposal), hard ceiling 150 KB** | 118 KB ≈ 590 ms of transfer; with a 500 ms TTFB that is ~1.1 s, a 45% margin under 2.0 s. 5 requests describes this composition, not a ceiling of its own |

**Whole page, first-party, over the wire:**

| Resource | Requests | Budget |
|---|---|---|
| First screen (above) | 5 | 118 KB |
| Below-fold photographs, 3 at 780w AVIF, lazy | 3 | 60 KB |
| Third woff2 face (Inconsolata, button labels) | 1 | 20 KB |
| First-party script: consent gate, tag loader, `data-event` delegation | 1 (or inlined) | 3 KB |
| **Whole page, first-party** | **≤ 10** | **201 KB (proposal), hard ceiling 250 KB** |

**Deferred third-party, after consent and after `load` — measured, not estimated (M-06):**
gtag.js **189.0 KB**, fbevents.js **107.5 KB**, TikTok loader **1.8 KB**, plus whatever the TikTok
loader then fetches and HubSpot if Nari requires it (its consent banner alone is 14.5 KB). **≥ 298 KB.**
Whole page including tags ≈ **500 KB**, half the 1 MB line in `1_spec/03` §9 — but every one of
those bytes arrives after the page is complete and interactive.

For scale: the field median mobile home page is **2,559 KB across 72 requests** (F-43); the live
Anywhere home page is **≈ 2,479 KB of first-party local assets alone**, before its 4.30 MB of TTF
fonts and before any tag (M-04). Against that page, the proposed landing's **whole first-party page
is one twelfth the weight (201 KB against 2,479 KB) and its first screen one twenty-first
(118 KB)**; against the field median it is **one seventh of the requests** (≤ 10 against 72).

**Recommended amendment to `1_spec/03` §9:** replace "Under 400 KB / under 1 MB" with a byte ceiling
(150 KB first screen, 250 KB first-party page) scored together with REQ-073's LCP target — bytes and
LCP are the outcome that gates a build, not a fixed request count or resource mix (R13). This is
recorded as **AN-19** (`0_plan/07-design-decisions.md`, status Proposed) and **RF-30**
(`0_plan/kb/REGISTER-FOLLOWUPS.md`); the 118 KB and 201 KB figures above are K11's derived proposal
feeding that row, not measurements in their own right — M-06 supplies the only measured figures in
this section, for the deferred third-party libraries.

### 5b. The image pipeline for the 25 assets

**Widths, worked for one composition.** Where a brief uses the two-doors slot shape (358 CSS px doors
at 390; ~640 CSS px each at 1440 inside `--container-max`, plus a below-fold proof or builders image
at full container width), R13's rule — CSS width times DPR against source resolution, no universal
ladder — resolves to **400 / 800 / 1200**: 400 covers 1× phones, 800 covers 2× phones and the 768
checkpoint, 1200 covers a 2× desktop door, and nothing above 1200 is produced because no slot in
*this* composition is wider than 640 CSS px at 1440. **This is one worked example, not a fixed ladder
for every direction** (R13; D-037): a typographic mock, a different crop, or no doors at all gets its
own per-slot arithmetic and is not penalized for shipping a different set of widths.

**Tiers, for that same composition.** Of the 28 files in `shared/img/`:

| Tier | Files | What ships | Why |
|---|---|---|---|
| A — door and proof | `georgetown-science.webp`, `anywhere-austin-intensives.webp` (source caps at 1080w), `georgetown-crowd.webp` | 400/800/1200 in **AVIF and WebP** = up to 18 files | ASSETS.md names these the three strongest; A and B are the two doors |
| B — below the fold | at most 5 of `georgetown-guide`, `georgetown-student-writing`, `anywhere-academics`, `anywhere-slider-2`, `gtschool-3993` | **780w only**, AVIF + WebP, `loading="lazy"` | One width is enough for a lazy image the reader reaches after scrolling |
| C — too small to enlarge | `georgetown-3504` (540w), `georgetown-3915` (600w), `georgetown-writing` (608w) | **nothing, until a mock places them**; then 390w only | ASSETS.md: "too soft to use as a hero" |
| D — excluded | `anywhere-student-home`, `georgetown-kid-writing` | nothing | Reads as stock; DD-08 and Nari's rule |
| E — masters | the remaining 12 photos | nothing | Kept as source; never referenced by a built page |
| F — logos | 3 SVG | the header lockup **inlined** into the HTML; the other two only where used | Removes a request; 8,559 B raw is 3,616 B gzipped inside the document (M-05) |

Worst case for this composition is 18 + 10 + 1 = **29 derivative files, of which any one page load
fetches 5**; a direction with a different slot shape sizes its own files the same way (R13) and is
not held to this count.

**Markup shape** (F-24, F-25, F-26, F-19, F-20):

```html
<!-- door image: the LCP candidate. Eager, high priority, sized, no picture-element
     indirection on the src so the preload scanner sees it in the raw markup (F-17). -->
<picture>
  <source type="image/avif" srcset="/img/georgetown-science-400.avif 400w,
    /img/georgetown-science-800.avif 800w, /img/georgetown-science-1200.avif 1200w"
    sizes="(min-width: 768px) 46vw, calc(100vw - 32px)">
  <img src="/img/georgetown-science-800.webp"
       srcset="/img/georgetown-science-400.webp 400w, /img/georgetown-science-800.webp 800w,
               /img/georgetown-science-1200.webp 1200w"
       sizes="(min-width: 768px) 46vw, calc(100vw - 32px)"
       width="1440" height="1208" fetchpriority="high" decoding="async"
       alt="students run a science experiment">
</picture>

<!-- below the fold -->
<img src="…-780.webp" width="1440" height="960" loading="lazy" decoding="async"
     sizes="auto" alt="…">
```

`sizes="auto"` is legal only with `loading="lazy"` (F-24), so it is used on tier B and never on the
doors. `decoding="async"` is cheap and honest — MDN is clear the effect on static `<img>` is small
(F-24), so it is hygiene, not a headline.

**How the files are produced, without adding a repo dependency.** A ~40-line script in
`0_plan/tools/` driven by the **system Python's Pillow 12.1.1, which was measured to have working
AVIF and WebP encoders on this machine** (M-03). It reads the master, resizes with LANCZOS, writes
AVIF at `quality=50, speed=4` and WebP at `quality=72, method=6`, and the outputs are committed.
Nothing enters `package.json` (there is none), no lockfile, no CI step — the same precedent K2 sets
with `pyftsubset`. What **would** need Nari's and Johnny's go-ahead, and is therefore named rather
than assumed:

| Option | Why it needs approval |
|---|---|
| `sharp` or `squoosh` via npm | Adds a dependency and a build step to the repository — an explicit stop-and-ask |
| Vercel Image Optimization | Requires a framework `Image` component; a plain `<img>` is told to "bypass optimization" (F-37), so adopting it means adopting a framework, and every miss is billed |
| `vercel blob put-image` | Spends money per transformation and moves assets out of the repo (F-37) |
| Homebrew `avifenc` / `libavif` | A developer-machine install only, but it changes the reproducible output; if Pillow's AVIF support is missing on another machine this is the fallback, with F-27's settings |

**Caching, which is the other half of image weight.** Vercel's default is
`public, max-age=0, must-revalidate` (F-35) — stale immediately, not uncached; see A6's correction
above. Add to `vercel.json`:

```json
{ "headers": [
  { "source": "/img/(.*)",   "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }] },
  { "source": "/fonts/(.*)", "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }] },
  { "source": "/(.*)",       "headers": [{ "key": "Cache-Control", "value": "public, max-age=0, must-revalidate" }] }
] }
```

`immutable` is only safe with a hash or version in the filename (F-39), so derivative filenames
carry the width and a short content hash. Note also F-34: Vercel does **not** compress AVIF or WebP
— correctly, they are already compressed — but it **does** compress `svg+xml`, which is why the
inlined lockup and any inline SVG are counted at their gzipped size in 5a.

This authoring-time production plan plus `vercel.json` caching is recorded as **D-037**
(`0_plan/03-decisions-and-open-questions.md`, status Proposed).

### 5c. The font plan, reconciled with K2

K2 §5c is adopted unchanged in its substance: five faces down from eighteen, subset woff2 by
`pyftsubset`, preload exactly two, metric-matched fallbacks from the measured overrides in K2 M-09.
K11 adds four reconciliations that only appear once you look at the fonts through LCP and CLS:

1. **The preload allowance is shared with the image, not additional to it.** F-18 and K2 F-41 cap
   the page at two or three preloads *in total*. If the winning mock's LCP element is a door
   photograph, that photograph takes a slot and `fetchpriority="high"`, and **Inter Tight 500 loses
   its preload** — the header lockup is an inline SVG, and the door names sit below the h1 and can
   swap without moving anything, because the fallback is metric-matched. K2's test T-K2-4 ("exactly
   two font preloads") must therefore become "at most two font preloads, and at most three preloads
   of any kind."

2. **`font-display: swap` is LCP-friendly and must not be "upgraded".** If the LCP element is the
   umbrella sentence, `swap` paints it in the metric-matched fallback immediately and the LCP entry
   is emitted then; `block` would withhold it for up to 3 s in Chromium and Firefox and indefinitely
   in Safari (K2 F-39), which alone would blow the 2.0 s budget. F-20 says it outright: use
   "`font-display` values other than `auto` or `block`". A9 in section 4 exists to stop this being
   re-litigated at G1 on brand grounds.

3. **K11 asks K2 to flip Inconsolata from `optional` to `swap`.** `optional`'s single benefit is
   guaranteed absence of a swap — and that benefit is already bought by K2 M-09's metric overrides,
   which reproduce each face's own line box exactly. The cost of `optional` is that the button
   labels — the conversion surface — may render in Courier New for an entire session. K2 §5f already
   concedes the fallback ("drop to `swap` if button labels visibly fail to upgrade in testing"); K11
   recommends starting at `swap` rather than ending there. **This is a K2↔K11 difference and goes
   through the ensemble, not straight into `tokens.css`.**

4. **Budget check.** Two preloaded faces at K2's expected 25–40 KB is 50–80 KB against the 70 KB
   line in 5a; F-45's field median is 35–36 KB, so the expectation is reasonable but unproven
   (K2 OQ-2: no WOFF2 converter was available). If the measured pair exceeds 80 KB, the fix order is:
   subset harder → drop Inter Tight 500 to 400 → drop the third face from the first screen entirely.

This font plan (five faces, subset woff2, two preloads, metric-matched fallbacks) is recorded as
**D-038** (`0_plan/03-decisions-and-open-questions.md`, status Proposed); the K2/K11 preload-count
difference in point 3 above is tracked separately as **RF-33**.

### 5d. The tag deferral pattern

The mechanism is that **`dataLayer` is a plain array and `gtag()` is a shim that pushes to it**
(F-29). Consent defaults can exist from the first line of the page — inline roughly 300 bytes in
`<head>`, nothing else loaded — while the heavier remote code arrives later in the same page view, or
never. **Production loads the one GTM container AN-03 and MD-08 decide, not `gtag.js` directly** —
GA4, Meta, TikTok and HubSpot are configured as tags inside that container; no container exists yet
(AN-03), so the id below is a stand-in.

```html
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('consent','default',{ ad_storage:'denied', analytics_storage:'denied',
    ad_user_data:'denied', ad_personalization:'denied', wait_for_update:500 });
  gtag('js', new Date());
</script>
```

Every `door_click`, `compare_view` and `cta_apply_click` from `1_spec/03` §7 pushes into `dataLayer`
immediately, whether or not the container has loaded. Then, and only then:

```js
addEventListener('load', () => {
  onConsentGranted(() => {                       // first-party banner, no vendor script
    gtag('consent','update', { analytics_storage:'granted', /* … per the AN rows */ });
    const s = document.createElement('script'); s.async = true;
    s.src = 'https://www.googletagmanager.com/gtm.js?id=<container id, AN-03>';
    // GA4, Meta, TikTok and HubSpot fire as tags from inside it, only for channels marked Approved (AD-04)
    document.head.appendChild(s);
  });
});
```

**Correction (E4):** `dataLayer` is in-memory and does not survive a navigation — a new page starts a
new, empty array, so nothing pushed on a page the visitor leaves carries to the next one. Within one
page view the queue only bridges the gap between first paint and the container loading; it is not a
durable event log, and per R12, AN-10 and Q-016, replaying whatever sat in it before consent is not
an approved pattern in any case — if consent is denied, those pushed events are never reported to any
vendor, queued or not. What the pattern actually buys, measured: **298.3 KB of compressed
third-party JavaScript** (M-06) kept off the critical path for as long as consent takes to decide,
which is 2.5× the entire first-party first-screen budget — and, under the container, GA4's tag still
fetches the same 189.0 KB `gtag.js` measured in M-06; AN-03 decides *when* it loads, not whether.

Two things must be said plainly rather than hidden in the implementation:

- **The consent-mode trade-off is real, and now has a register row.** "Advanced" consent mode loads
  gtag.js with denied defaults so Google still receives cookieless pings and can model conversions
  (F-30) — at a cost of the full 189 KB on every load whether or not anyone consents. "Basic" loads
  nothing until consent — zero bytes, no modelling. Given that two thirds of sessions are mobile,
  K11's recommendation is **basic plus the inline consent-default queue**, now recorded as **AN-19**
  (`0_plan/07-design-decisions.md`, status Proposed) rather than asserted here as settled.
- **Do not take HubSpot's banner to get a banner.** Its consent script alone measured **14.5 KB
  compressed** (M-06) before HubSpot's own tracking code, which loads more and is asked to sit
  before `</body>` (F-32). A first-party banner is a few hundred bytes and does not need approval
  from anyone but Nari on wording.

### 5e. What the QA runner must check

**Lighthouse**, run against the preview URL (`noindex`, SE-13), mobile preset — the default Slow 4G
and 4× CPU of F-10 — **five runs, assert on the median** (F-11's inaccuracy caveat, A8):

| Assertion | Value | Source |
|---|---|---|
| `largest-contentful-paint` | **< 2,000 ms** on mobile; **< 1,200 ms** on the desktop preset | REQ-073; F-13 |
| `cumulative-layout-shift` | **= 0** | MN-10; F-06 |
| `total-blocking-time` | < 200 ms (it carries the heaviest score weight, 30%) | F-12 |
| Performance score | ≥ the baseline captured from today's Anywhere home before any change | REQ-073 |
| `render-blocking-resources` | zero items | F-15, F-16 |
| `lcp-lazy-loaded` / `prioritize-lcp-image` | pass | F-20, F-26, A3 |
| `unsized-images` | zero items | F-28, F-44 |
| `modern-image-formats`, `uses-responsive-images` | zero savings offered | F-27, M-03 |
| `font-display` | pass; and no face declares `block` or `auto` | F-20, K2 F-39 |
| `uses-long-cache-ttl` | zero items, proving the `vercel.json` headers landed | F-35, F-36, F-39 |
| `third-party-summary` | **zero third-party bytes on a load where consent is pending** | P7, M-06 |
| Budget file | `lighthouse --budget-path` with the 5a table, so a breach fails the run | P1 |

**WebPageTest**, as the second opinion, because it is the tool that applies **packet-level
throttling — "the most accurate network simulation"** where Lighthouse's default is simulated
(F-11). At least three runs, first view **and repeat view** (the repeat view is what actually proves
the immutable cache headers), with the filmstrip read for two things: the first screen complete
before 2.0 s, and nothing moving after it. **Caveat recorded honestly:** WebPageTest's own
documentation could not be fetched in this session (see §7), so every WebPageTest specific beyond
F-11's sentence is a judgment, not a sourced claim.

**Field**, after go-live: CrUX will not report gt.school for some time — it needs "a minimum number
of visitors" (F-07) and gt.school is untagged today (the five facts, #5). So the go-live gate is
lab-only, and the field claim waits. If RUM is wanted sooner, the `web-vitals` attribution build
costs a measured **4,170 B compressed** (M-01) and is loaded like every other tag: after `load`,
after consent.

**In-app browsers.** REQ-024's Instagram, Facebook and TikTok webview matrix is a *performance*
matrix too, not only a layout one: those webviews start cold, often on a worse connection, and a
budget met in Chrome is not automatically met there. T-060 should capture the same five numbers.

**Tests G-D must run before any number above is trusted as fact, not a budget:**

- **DPR.** Confirm each shipped image's rendered CSS size times the device's actual pixel ratio
  against the file produced for it (R13) — measured on the built mock, not assumed from the
  400/800/1200 ladder in 5b.
- **Fonts.** Measure the real subsetted woff2 byte sizes once `pyftsubset` runs (OQ-3); the 70 KB
  line in 5a is K2's expectation, not yet a measurement, and the two-preload allocation in 5c depends
  on it.
- **LCP element.** Read the actual `largest-contentful-paint` element from the Lighthouse JSON per
  mock (OQ-6) before assuming a door photograph, rather than the umbrella sentence, owns the preload
  allocation in 5c.

### 5f. A calibrated 5 for the rubric row **Craft**, as it concerns performance

| Score | What it looks like |
|---|---|
| **1** | No budget. Webflow masters served at source resolution; TTF fonts; three tag libraries in `<head>`. Nobody has run a measurement. This is the live page today (M-04, M-06) |
| **2** | Somebody compressed the images once, by hand, to one size. `width`/`height` missing on half the `<img>`. Lighthouse run once on a laptop on office wifi and the score quoted in a PR |
| **3** | The page meets the 2.5 s "good" threshold in the lab. WebP everywhere, `loading="lazy"` applied uniformly — including, invisibly, to the hero. Caching left at Vercel's default. One Lighthouse run, mobile only |
| **4** | LCP under 2.0 s at the median of five mobile runs; CLS 0; AVIF with a WebP fallback at three widths; two font preloads with metric-matched fallbacks; zero third-party bytes before consent; `vercel.json` sets immutable caching; the budget is asserted by the runner |
| **5** | Everything in 4, **and** the page is *provably* small rather than merely fast: the first screen is **under 130 KB, in however many requests that composition takes**, and you can say which byte is in which. The LCP sub-parts have been read individually — TTFB is under 40% of the total, load delay under 10% — rather than inferred from the headline number. The filmstrip on **packet-level** throttling, not just the simulated run, shows the first screen complete and stationary before 2.0 s. With web fonts blocked entirely, nothing on the page moves a pixel. The repeat view is a near-empty waterfall, because the cache headers are real. The budget lives in a file the runner reads, so exceeding it fails the build instead of being discovered at go-live. The measured numbers — not the score — are in the PR body. And the same page is still inside budget in a real in-app browser (Instagram, Facebook or TikTok) on a real Android handset — two thirds of sessions are mobile and Instagram is one of the organic channels this traffic already arrives from, but the GA snapshot supports the mobile share, not a webview-by-OS segmentation (the five facts) |

Calibration exemplar to keep beside the rubric: the **live Anywhere home page as the anti-exemplar**
(M-04 — 1,264 KB of `alt=""` decoration), and the Web Almanac's top-1,000 cohort as the honest bar:
even among the thousand most popular sites in the world, only **51% pass mobile Core Web Vitals**
(F-41). A landing page with ten requests and no framework should not be scoring like a 2 MB one.

---

## 6. Open questions

| # | Question | Why it is not evidence | Route |
|---|---|---|---|
| OQ-1 | Core Web Vitals data for the **education vertical** specifically | The Web Almanac has no education chapter, and the 2025 Performance chapter segments by rank, not by industry. The session's WebSearch budget was exhausted before a CrUX-by-vertical source could be located | Query the CrUX BigQuery dataset, or the HTTP Archive Core Web Vitals Technology Report, directly; until then use F-41's rank cohorts and say so |
| OQ-2 | WebPageTest's own defaults — locations, connection profiles, run counts, Opportunities and Experiments | Three separate hosts failed to fetch: `docs.webpagetest.org` (TLS certificate mismatch), `product.webpagetest.org` (TLS internal error), `www.webpagetest.org` (403). **Nothing in §5e rests on an unfetched WebPageTest claim** | Re-fetch from a working host before T-059, or run one test and record the actual settings |
| OQ-3 | Actual woff2 byte sizes after subsetting | Inherited from K2 OQ-2; no WOFF2 converter was available in either session. The 70 KB font line in 5a is an expectation, not a measurement | Measure at T-009 and feed the number back into 5a before the budget file is written |
| OQ-4 | What the TikTok loader fetches after the 1.8 KB stub | Only the stub was measurable without a live pixel id; the real SDK is fetched by the stub at runtime | Measure in DevTools during T-056, or drop TikTok from the landing if AD rows do not require it |
| OQ-5 | HubSpot's full tracking payload | `js.hs-scripts.com` returns 410 for a fabricated portal id, and no real id was used. Only the 14.5 KB banner was measured | Measure with the real portal id at T-056; treat 14.5 KB as a floor, not the total |
| OQ-6 | Whether the LCP element on the winning mock is the h1 or a door photograph | It differs by mock (M3 is type-led, M4 is image-led), and it decides the whole preload allocation in 5c.1 | Read `largest-contentful-paint` element from the Lighthouse JSON on each mock at T-048, before G1 |
| OQ-7 | Whether Vercel's PoPs serve HTTP/3 to US mobile carriers, and the real TTFB from Texas | F-38 lists 126 PoPs but publishes no TTFB figure; F-40's CDN medians are cross-vendor. The 500 ms TTFB assumption in 5a is arithmetic, not a measurement | Measure TTFB against the preview URL from a phone on cellular during T-060 |
| OQ-8 | Whether the three SVG logos are efficiently authored | `gt-anywhere-logo-h.svg` is 9,830 B for a wordmark, which suggests un-simplified path data. No SVG optimiser was available and none was installed | Hand-inspect, or add an optimiser as a developer-machine tool; flag if it needs approval |
| OQ-9 | Whether ad platforms reward landing page speed | F-46 shows Google Ads does **not** name speed among its landing-page-experience factors, and no Meta or TikTok equivalent was fetched | Do not claim it. If AD rows want the claim, source it first |

---

## 7. Sources fetched

Forty-six URLs were fetched for this file; every finding names its own. Grouped so Astra's E4 pass
can check the set rather than re-read the tables.

**web.dev / Chrome team:** `articles/vitals` (Walton) · `articles/lcp`, `articles/optimize-lcp`
(Walton & Pollard) · `articles/inp`, `articles/optimize-inp` (Wagner, Walton, Pollard) ·
`articles/cls` (Mihajlija & Walton) · `articles/optimize-cls` (Osmani & Pollard) ·
`articles/fetch-priority` (Osmani, Sohoni, Meenan, Pollard) · `articles/browser-level-image-lazy-loading`
(Osmani, Djirdeh, Bynens, Pollard) · `articles/preload-critical-assets` (Djirdeh, Wagner, Mihajlija) ·
`articles/preload-scanner` (Wagner) · `articles/efficiently-load-third-party-javascript` (Mihajlija) ·
`articles/compress-images-avif` (Krishnan, Chang, Wagner) · `articles/vitals-field-measurement-best-practices`
(Walton) · `learn/performance/understanding-the-critical-path` · `learn/performance/optimize-resource-loading`.

**developer.chrome.com:** `docs/lighthouse/overview` · `docs/lighthouse/performance/performance-scoring` ·
`docs/lighthouse/performance/lighthouse-largest-contentful-paint` · `docs/crux` · `docs/crux/methodology`.

**Lighthouse source:** `raw.githubusercontent.com/GoogleChrome/lighthouse/main/docs/throttling.md`;
mirrored at `googlechrome-lighthouse.mintlify.app/configuration/throttling`.

**HTTP Archive Web Almanac:** Performance 2025 (Jariyal, Rasam, Humaira, Grogg) · Page Weight 2025
(Barret & Indigo) · Third Parties 2025 (Jazlan & Aziz) · CDN 2025 (Viggiano, Moening, McCord) ·
Fonts 2025 (Berret) · Media 2024 (Judis & Portis).

**MDN:** `Elements/img` · `Elements/picture` · `CSS/content-visibility` · `HTTP/Reference/Headers/Cache-Control`.

**Vercel:** `docs/cdn` · `docs/how-vercel-cdn-works/compression` · `docs/caching/cdn-cache` ·
`docs/caching/cache-control-headers` · `docs/headers` · `docs/image-optimization`.

**Vendors:** Google `tag-platform/gtagjs/install`, `tag-platform/gtagjs/reference`,
`tag-platform/security/guides/consent` · Google Ads Help `answer/2404197` · Meta
`developers.facebook.com/docs/meta-pixel/get-started` · HubSpot
`knowledge.hubspot.com/reports/install-the-hubspot-tracking-code` · `github.com/GoogleChrome/web-vitals`.

**Fetched but did not contain what was asked, and nothing above rests on them:**
`ads.tiktok.com/help/article/get-started-pixel` (an overview, not the install guide);
`thirdpartyweb.today` and `/entity-data` (the data tables did not render in a text fetch).

**Not fetched — failures, disclosed so no claim leans on them:** `github.com/GoogleChrome/lighthouse/blob/main/docs/throttling.md`
(connection refused; the raw file was used instead) · `fossies.org/linux/lighthouse/docs/throttling.md` (401) ·
`docs.webpagetest.org` (TLS certificate mismatch), `product.webpagetest.org` (TLS internal error),
`www.webpagetest.org` (403) — see OQ-2 · `almanac.httparchive.org/en/2025/media`, `/en/2025/caching`,
`/en/2024/caching`, `/en/2022/caching` (404 — **there is no Media chapter in 2025 and no Caching
chapter in the years checked**, which is why F-44 cites 2024) · `web.dev/articles/codelab-avif` and
`web.dev/articles/optimize-lcp-lazy-loading` (404) · `business-api.tiktok.com` pixel doc (not the
install guide). The session's WebSearch budget (200 calls) was exhausted, which is the direct cause
of OQ-1.

**Measurement methods** for M-01 to M-06 used only `curl`, the Python standard library, and the
**already-installed** system Pillow 12.1.1; the scripts live in this session's scratchpad
(`enc.py` plus inline heredocs) and add nothing to the repository. Re-run them against the built
page before quoting any number in 5a as a result rather than a budget.

---

## 8. Rework log (E4)

| E4 item | What changed | Where |
|---|---|---|
| A6: "no browser caching at all… repeat visits re-download every font and image" | Reworded: `must-revalidate` marks the response stale, not unstorable; the browser still stores and conditionally revalidates it, and F-36's edge caching already applies regardless of this header. Restated the real cost as a revalidation round trip, not a re-download. The same overstated claim, repeated in 5b, got the matching fix | Section 4, row A6; Section 5b, "Caching" paragraph |
| §5d "nothing that happened before consent is lost" | Corrected: an in-memory `dataLayer` does not survive a navigation and bridges only one page view; pre-consent replay is not an approved pattern (R12, AN-10, Q-016) regardless of the technical mechanism, so queued events are never sent later on the strength of having been queued | Section 5d |
| Rubric row 5 put two thirds of traffic in "the Instagram webview on a real Android handset" | Reworded to what the GA snapshot supports: two thirds of sessions are mobile; Instagram is one organic channel; no webview-by-OS segmentation exists | Section 5f, score **5** row |
| Direct `gtag.js` loading bypasses AN-03/MD-08's container architecture | Rewrote the deferred-load code sample to load the GTM container (`gtm.js?id=…`) rather than `gtag.js` directly, dropped the direct GA4 `config` call, and noted GA4, Meta, TikTok and HubSpot fire as tags inside the one container | Section 5d, both code blocks and surrounding prose |
| Exact request-count and format prescriptions penalize typographic variants | Labelled the 5-request/10-request compositions as one worked example, not a mandate, with the byte ceiling plus REQ-073's LCP target as the actual gate; reworded "Recommended amendment" to drop the request-ceiling ask; reworded the width ladder and tier table as one composition's arithmetic, not a universal ladder (R13); dropped the same "five requests" anchor from the rubric's score-5 row for consistency | Section 5a (intro paragraph, both tables, "Recommended amendment"); Section 5b ("Widths", "Tiers", worst-case line); Section 5f (score **5** row) |
| M-06 itemizes four script payloads versus six claimed; HubSpot URL is a wildcard | Header "Method" field corrected from 6 to 4, named the four (GA4, Meta, TikTok stub, HubSpot banner), and labelled the HubSpot URL as a wildcard match rather than one fixed resource | Header field table, Method row |
| Keep the measured byte evidence; list the DPR, font and LCP-element tests G-D must run | Added a short list naming the three unproven numbers G-D must measure before treating them as fact: per-slot DPR against produced widths (R13), actual subsetted woff2 sizes (OQ-3), and the actual Lighthouse-reported LCP element per mock (OQ-6) | Section 5e, new paragraph before 5f |

Also cited rather than re-proposed, per this pack's note: **AN-19** (consent-first tag loading, byte
ceilings, absolute vitals targets, `0_plan/07-design-decisions.md`), **D-037** (image delivery and
caching) and **D-038** (font delivery, both `0_plan/03-decisions-and-open-questions.md`) — the
register rows this cluster fed, now cited in 5a, 5b, 5c and 5d instead of proposed again. The M-06
byte figures (189.0 KB gtag.js, 107.5 KB fbevents.js compressed) already matched AN-19's citation of
this file; no number needed changing there.

### Register row follow-ups

None. AN-19, D-037 and D-038 already carry K11's byte-budget, image-delivery and font-delivery
proposals; this rework cites them in place rather than proposing duplicates.

### Disagreements with Astra's E4 items

None. All seven K11 items verified against the file as Astra described them; each is corrected above
rather than kept.
