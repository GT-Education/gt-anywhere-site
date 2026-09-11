# K4 Motion: restraint, orientation and choice in craft-led and educational sites

| Field | Value |
|---|---|
| Cluster | K4 in `18-knowledge-base-plan.md` section 1 |
| Question | Where restrained motion demonstrably serves orientation and choice; the durations and easings craft-led sites *actually ship*, measured from fetched stylesheets; what reads as promotional; reduced-motion practice; what Material, Apple, IBM Carbon, Val Head and Rachel Nabors say purposeful animation is; the performance rules (compositor-only properties, no layout thrash, LCP protection); and how a one-time reveal is built with `IntersectionObserver` without hijacking the scroll |
| Feeds | **D-031** (motion reopened) and `17` section 7; rubric row **Motion** (`17` section 6); MN-01 to MN-15 in `07`; `mockups/shared/tokens.css`; the QA matrix in `1_spec/13` |
| Extends | `kb/K5-education-exemplars.md` §3.1, which measured the *education* set (16 stylesheets, `0.3s` mode, `prefers-reduced-motion` in 3 of 20, no scroll-choreographed signature moment). K4 measures **29 craft-led sites outside education** with the same instrument, so the two tables are directly comparable. K4 also owns **K5-Q3** (are the field's values intent, or vendor defaults?) and answers it in §2.8 |
| Method | `curl` text fetch of 30 home pages; every `<link rel=stylesheet>` and every inline `<style>` over 2 KB extracted and fetched (128 stylesheet files, 21.4 MB); a parser over `transition`, `transition-duration`, `transition-property`, `animation`, `animation-duration`, `@keyframes`, `cubic-bezier()`, `prefers-reduced-motion`, `will-change`, `animation-timeline`, `scroll-behavior`, `@container` and `clamp()`. First-party JavaScript bundles fetched for 12 sites and fingerprinted for `IntersectionObserver`, GSAP, Lenis/Locomotive/ScrollMagic and scroll listeners. GT's own baseline measured from all ten stylesheets in this repo's mirror. Documentation read by `WebFetch` or `curl`. **No browser tool was opened. No `gt.school` or `alpha.school` page was fetched** |
| Observation vs inference | Every value in §2 and §4 is **measured from fetched bytes** and is reproducible. §3 quotes documents. §5 to §8 are **inference** |
| Read date | Everything fetched **2026-09-10** |
| Status | Complete. 30 of 30 target sites fetched; 29 had measurable CSS (ramp.com returned a bot-challenge page with no stylesheet and is recorded, not counted) |
| Version | 0.1, 2026-09-10 |

## 1. Sources

### 1.1 Sites measured (fetched by K4, 2026-09-10)

`tr` = `transition` + `transition-duration` declarations across every sheet fetched for that site. `prm` = `prefers-reduced-motion` blocks. `props` = distinct custom properties.

| # | Site | URL | tr | `@keyframes` | prm | `will-change` | props | Duration modes (measured) |
|---|---|---|---|---|---|---|---|---|
| S1 | Stripe | [stripe.com](https://stripe.com/) | 132 | 10 | **74** | 18 | 917 | 300ms ×49, 500ms ×12, 150ms ×9 |
| S2 | Linear | [linear.app](https://linear.app/) | 14 | 313 | 6 | 3 | 24 | 220ms ×2, 120ms ×2, 160ms ×1 |
| S3 | Vercel | [vercel.com](https://vercel.com/) | 203 | 58 | 15 | 17 | 787 | 150ms ×32, 200ms ×27, 100ms ×11 |
| S4 | Apple | [apple.com](https://www.apple.com/) | 99 | 18 | **0** | 6 | 293 | 240ms ×47, 320ms ×35, 80ms ×15 |
| S5 | Airbnb | [airbnb.com](https://www.airbnb.com/) | 494 | 372 | 11 | 14 | 1,933 | 200ms ×136, 300ms ×117, 150ms ×64 |
| S6 | Figma | [figma.com](https://www.figma.com/) | 51 | 2 | 2 | 0 | 116 | 180ms ×44, 250ms ×26 |
| S7 | Notion | [notion.so](https://www.notion.so/) | 68 | 22 | 17 | 4 | 1,544 | 150ms ×5, 300ms ×3, 200ms ×3 |
| S8 | IBM | [ibm.com/us-en](https://www.ibm.com/us-en) | 289 | 19 | **70** | 21 | 1,382 | 110ms ×89, 70ms ×82, 150ms ×42 |
| S9 | IBM Carbon Design System | [carbondesignsystem.com](https://carbondesignsystem.com/) | 522 | 223 | **63** | 40 | 1,223 | 100ms ×295, 110ms ×114, 70ms ×91 |
| S10 | Tate | [tate.org.uk](https://www.tate.org.uk/) | 91 | 8 | **0** | 0 | 169 | 500ms ×25, 200ms ×24, 300ms ×17 |
| S11 | MoMA | [moma.org](https://www.moma.org/) | 55 | 6 | **0** | 5 | 619 | 200ms ×29, 100ms ×15, 300ms ×7 |
| S12 | Rijksmuseum | [rijksmuseum.nl/en](https://www.rijksmuseum.nl/en) | 127 | 6 | 43 | 0 | 49 | **1ms ×43** (the reduced-motion override), 250ms ×34, 500ms ×31 |
| S13 | Cooper Hewitt | [cooperhewitt.org](https://www.cooperhewitt.org/) | 60 | 5 | 1 | 9 | 87 | 200ms ×31, 150ms ×9, 300ms ×8 |
| S14 | The Met | [metmuseum.org](https://www.metmuseum.org/) | **0** | 1 | 0 | 0 | 4 | — |
| S15 | Cloudflare | [cloudflare.com](https://www.cloudflare.com/) | 125 | 54 | 11 | 5 | 571 | 160ms ×28, 200ms ×15, 150ms ×7 |
| S16 | Basecamp | [basecamp.com](https://basecamp.com/) | 6 | 0 | 2 | 1 | 97 | (no duration tokens; inherits defaults) |
| S17 | Ghost | [ghost.org](https://ghost.org/) | 24 | 0 | **0** | 2 | 124 | 150ms ×12, 400ms ×4 |
| S18 | Raycast | [raycast.com](https://www.raycast.com/) | 190 | 57 | 10 | 17 | 127 | 300ms ×108, 200ms ×58, 150ms ×29 |
| S19 | Framer | [framer.com](https://www.framer.com/) | 5 | 5 | **0** | **104** | 428 | 200ms ×1, 150ms ×1 |
| S20 | Sanity | [sanity.io](https://www.sanity.io/) | 39 | 9 | 3 | 3 | 289 | 250ms ×9, 150ms ×8, 200ms ×7 |
| S21 | GOV.UK | [gov.uk](https://www.gov.uk/) | 16 | 0 | 14 (all `no-preference`) | 0 | 133 | 300ms ×2 |
| S22 | Shopify Polaris | [polaris.shopify.com](https://polaris.shopify.com/) | 28 | 12 | 1 | 3 | 2,228 | 200ms ×9, 100ms ×2, 500ms ×2 |
| S23 | Atlassian Design System | [atlassian.design](https://atlassian.design/) | 44 | 28 | 18 | 8 | 639 | 300ms ×9, 400ms ×8, 200ms ×5 |
| S24 | Guggenheim | [guggenheim.org](https://www.guggenheim.org/) | 8 | 2 | **0** | 0 | 0 | 400ms ×2, 500ms ×2 |
| S25 | Whitney Museum | [whitney.org](https://whitney.org/) | 69 | 33 | 1 | 2 | 218 | 100ms ×1 (durations mostly in JS-driven classes) |
| S26 | SFMOMA | [sfmoma.org](https://www.sfmoma.org/) | 125 | 103 | 5 | 6 | 278 | 200ms ×57, 300ms ×36, 400ms ×21 |
| S27 | Barbican | [barbican.org.uk](https://www.barbican.org.uk/) | 51 | 17 | **0** | 0 | 195 | 200ms ×22, 100ms ×7, 300ms ×7 |
| S28 | Serpentine Galleries | [serpentinegalleries.org](https://www.serpentinegalleries.org/) | 202 | 18 | **0** | 1 | 79 | 250ms ×90, 100ms ×67, 150ms ×41 |
| S29 | Mailchimp | [mailchimp.com](https://mailchimp.com/) | 123 | 21 | 29 | 6 | 110 | 300ms ×55, 150ms ×27, 200ms ×23 |
| S30 | Ramp | [ramp.com](https://ramp.com/) | — | — | — | — | — | Fetched; 14,081 bytes, bot-challenge shell, **no stylesheet**. Recorded, not counted |
| S31 | **GT Anywhere baseline** | this repo's mirror, all 10 sheets in `assets/…/css/` | 37 | 1 | **0** | 0 | 150 | **300ms ×17, 100ms ×10, 200ms ×10** |

### 1.2 Documents read

| # | Source | Author and date | What it gave |
|---|---|---|---|
| S32 | [MDN, `prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) | MDN contributors, last modified 2026-06-10 | Definition, `no-preference` / `reduce` semantics, vestibular framing |
| S33 | [W3C, Understanding SC 2.3.3 Animation from Interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html) | W3C WAI, WCAG 2.2 | Level AAA normative text; scroll is user-controlled and allowed |
| S34 | [W3C, Understanding SC 2.2.2 Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html) | W3C WAI, WCAG 2.2 | Level A; the five-second rule |
| S35 | [IBM Carbon, Motion overview](https://carbondesignsystem.com/elements/motion/overview/) | IBM, page states "Last updated 09 September 2026" | Six duration tokens, six easing curves, the evaluation checklist |
| S36 | [Apple, HIG: Motion](https://developer.apple.com/design/human-interface-guidelines/motion) | Apple, fetched as `motion.json` | "Add motion purposefully", "Make motion optional", "Let people cancel motion" |
| S37 | [Apple, HIG: Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility) | Apple, fetched as `accessibility.json` | Reduce Motion behaviour; "Replacing transitions in x-, y-, and z-axes with fades" |
| S38 | [Material 3 motion tokens, `_md-sys-motion.scss`](https://raw.githubusercontent.com/material-components/material-web/main/tokens/versions/v0_192/_md-sys-motion.scss) | Google, material-web v0.192 | All 16 duration tokens and 10 easing curves, generated from the design system |
| S39 | [Material Components Android, `motion/res/values/attrs.xml`](https://raw.githubusercontent.com/material-components/material-components-android/master/lib/java/com/google/android/material/motion/res/values/attrs.xml) | Google, 2022– | What short / medium / long / extra-long durations are *for* |
| S40 | [Val Head, "Designing Safer Web Animation For Motion Sensitivity"](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/) | Val Head, A List Apart, 2015-09-08 | Which effects trigger vestibular symptoms; the opacity/colour/blur exemption |
| S41 | [Val Head, "How fast should your UI animations be?"](https://valhead.com/2016/05/05/how-fast-should-your-ui-animations-be/) | Val Head, 2016-05-05 | "200ms to 500ms… is a good range"; 230ms human visual perception |
| S42 | [NN/g, "Executing UX Animations: Duration and Motion Characteristics"](https://www.nngroup.com/articles/animation-duration/) | Page Laubheimer, 2020-02-09 | "100–500 ms"; ease-out for entering, ease-in for exiting; 500ms "a real drag" |
| S43 | [NN/g, "Animation for Attention and Comprehension"](https://www.nngroup.com/articles/animation-usability/) | Aurora Harley, 2014-09-21 | The three jobs of animation; the 0.1s cause-and-effect threshold |
| S44 | [NN/g, "Scrolling and Attention"](https://www.nngroup.com/articles/scrolling-and-attention/) | Therese Fessenden, 2018-04-15 | 57% of viewing time above the fold; 74% in the first two screenfuls |
| S45 | [NN/g, "Scrolljacking 101"](https://www.nngroup.com/articles/scrolljacking-101/) | NN/g | Definition and the seven mitigations, including "Avoid Scrolljacking on Mobile" |
| S46 | [NN/g, "What Parallax Lacks"](https://www.nngroup.com/articles/parallax-usability/) | Katie Sherwin, 2019-01-20 | Users scroll past parallax; "can even cause people to feel sick" |
| S47 | [web.dev, "Animations guide"](https://web.dev/articles/animations-guide) | Kayce Basques and Rachel Andrew, updated 2020-10-06 | `transform` and `opacity` only; `will-change` is a last resort |
| S48 | [web.dev, "Optimize Largest Contentful Paint"](https://web.dev/articles/optimize-lcp) | Philip Walton and Barry Pollard, updated 2025-03-31 | 2.5 s threshold; element render delay; JS delaying the LCP element |
| S49 | [web.dev, "Cumulative Layout Shift"](https://web.dev/articles/cls) | Milica Mihajlija and Philip Walton, updated 2023-04-12 | 0.1 threshold; transform animations do not shift layout |
| S50 | [web.dev, "Optimize CLS"](https://web.dev/articles/optimize-cls) | Addy Osmani and Barry Pollard, updated 2025-02-07 | "Composited animations using `translate` can't impact other elements, and so don't count toward CLS" |
| S51 | [web.dev, "Animation and motion" (Learn Accessibility)](https://web.dev/learn/accessibility/motion) | web.dev, updated 2022-09-30 | Three-flashes rule; pause/stop/hide obligation; "Consider defaulting such a toggle to off" |
| S52 | [MDN, Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) | MDN contributors, last modified 2026-09-02 | Why it exists instead of scroll handlers; `root` / `rootMargin` / `threshold`; `unobserve` for one-time work |
| S53 | [Emil Kowalski, "Great Animations"](https://emilkowal.ski/ui/great-animations) | Emil Kowalski | "shorter than 300ms"; ease-out; interruptibility; do not animate frequent actions |
| S54 | [Josh W. Comeau, "An Interactive Guide to CSS Transitions"](https://www.joshwcomeau.com/animation/css-transitions/) | Josh W. Comeau, 2021-02-09, updated 2026-05-05 | 250ms default; timing-function hierarchy; the "doom flicker"; cheap vs expensive properties |
| S55 | [GSAP, "Accessible animation"](https://gsap.com/resources/a11y/) | GreenSock | `matchMedia` gating in JS; simplify if informational, remove if decorative |
| S56 | [Chrome for Developers, "Scroll-driven animations"](https://developer.chrome.com/docs/css-ui/scroll-driven-animations) | Bramus Van Damme, 2023-05-05 | `animation-timeline`, `scroll()`, `view()`; runs off the main thread |
| S57 | [Web Almanac 2025, Accessibility](https://almanac.httparchive.org/en/2025/accessibility) | Bogdan Lazar and Mike Gifford, published 2026-01-15 | `prefers-reduced-motion` on 49.99% of desktop and 50.55% of mobile pages |
| S58 | [Smashing Magazine, "Respecting Users' Motion Preferences"](https://www.smashingmagazine.com/2021/10/respecting-users-motion-preferences/) | Michelle Barker, 2021-10-21 | The `no-preference` opt-in pattern; gating `scroll-behavior: smooth`; "reduced motion doesn't necessarily mean removing *all* transforms" |
| S59 | [The A11Y Project, "Understanding vestibular disorders"](https://www.a11yproject.com/posts/understanding-vestibular-disorders/) | Dennis Gaebel, 2013-05-05 | "As many as 35% of adults aged 40 years or older in the United States have experienced some form of vestibular dysfunction" |
| S60 | [Tailwind CSS `theme.css`](https://raw.githubusercontent.com/tailwindlabs/tailwindcss/main/packages/tailwindcss/theme.css) | Tailwind Labs, main branch | `--default-transition-duration: 150ms`; `--default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)` |
| S61 | [Motionographer, "What is web animation? Rachel Nabors explains it all"](https://motionographer.com/2015/08/17/what-is-web-animation-rachel-nabors-explains-it-all/) | Rachel Nabors, interviewed by Justin Cone, 2015-08-17 | "There are many properties that can be animated that do not involve movement (opacity, color, blur, form)" |
| S62 | [A Book Apart, *Animation at Work*](https://abookapart.com/products/animation-at-work) | Rachel Nabors, 2017 | "Animation isn't merely decorative"; animation that "works to ease cognitive load" |

**61 sources: 30 sites fetched (29 measurable) plus 31 documents.**

## 2. Findings — what the craft-led field actually ships

### 2.1 The duration distribution

**K4-F1 — 3,497 transition duration values were measured across 29 sites. 80.5% fall between 100 ms and 400 ms.** The distribution has three near-equal modes and a hard right tail.

| Duration | Count | Share | Cumulative |
|---|---|---|---|
| 70 ms | 173 | 4.9% | 7.9% |
| **100 ms** | **483** | **13.8%** | 24.6% |
| 110 ms | 203 | 5.8% | 30.4% |
| **150 ms** | **325** | **9.3%** | 42.4% |
| 180 ms | 48 | 1.4% | 45.7% |
| **200 ms** | **517** | **14.8%** | 60.5% |
| 240 ms | 95 | 2.7% | 63.8% |
| **250 ms** | **274** | **7.8%** | 71.6% |
| **300 ms** | **495** | **14.2%** | 86.1% |
| 400 ms | 115 | 3.3% | 91.2% |
| 500 ms | 151 | 4.3% | 95.8% |
| over 500 ms | 145 | 4.1% | 100% |

**K4-F2 — the three modes are 100 ms, 200 ms and 300 ms, which together are 42.8% of every measured value.** These are the exact three durations already in `mockups/shared/tokens.css` (`--duration-fast: 100ms`, `--duration-base: 200ms`, `--duration-slow: 300ms`) and the exact three in GT's own mirror (300 ms ×17, 100 ms ×10, 200 ms ×10, S31). GT's extracted scale is the field's scale. Nothing needs to change about the numbers.

**K4-F3 — only 4.1% of values exceed 500 ms, and those are almost all loops.** Separating `@keyframes` durations (n = 1,360) from transitions: 31.0% of animation durations are 1 s or longer, and they are spinners (`--animate-spin: spin 1s linear infinite`, S60), skeleton shimmers (`--dls-shimmer-duration: 1.35s`, Airbnb) and marquees (`--marquee-animation-duration: 60s`, Notion). **Nothing in the set uses a multi-second duration for a one-off, content-carrying move.**

**K4-F4 — on hover, focus, active and `[data-state]` rules specifically (n = 138 values), 200 ms and 300 ms are 52.2% of all values; 74.6% sit in 100–400 ms; 6.5% exceed 500 ms.** The four most-instrumented sites on this measure: Airbnb 200 ms ×30, Mailchimp 300 ms ×16, IBM 70 ms ×8, Cooper Hewitt 200 ms ×5. IBM is the outlier and it is deliberate — Carbon's own checklist asks "Do micro-interactions fall within a static duration ranging from 90–120 ms?" (S35).

### 2.2 The easings

**K4-F5 — `cubic-bezier()` is the most common easing in the craft-led set (35.7% of 3,427 easing keywords), where the education set used it in only 5 of 20 sheets (K5-F58).** Full frequency: `cubic-bezier` 1,223 (35.7%), `ease-out` 559 (16.3%), `linear` 548 (16.0%), `ease` 509 (14.9%), `ease-in-out` 371 (10.8%), `steps()` 157 (4.6%), `ease-in` 60 (1.8%). Authoring a curve is the single clearest craft signal separating the two sets.

**K4-F6 — one curve is near-universal: `cubic-bezier(0.4, 0, 0.2, 1)`, used by 11 of 29 sites** (Airbnb, Cloudflare, Cooper Hewitt, Ghost, IBM, Raycast, Sanity, Serpentine, Stripe, Vercel, Whitney) — more distinct sites than any other curve. It is Material's `easing-legacy` (S38) and it is Tailwind's `--default-transition-timing-function` (S60). Its decelerating half, `cubic-bezier(0, 0, 0.2, 1)`, is Material's `easing-legacy-decelerate` and Tailwind's `--ease-out`, and appears on 6 sites.

**K4-F7 — the highest-volume single curve is IBM's, not Material's.** `cubic-bezier(0.2, 0, 0.38, 0.9)` occurs 321 times (22.0% of all `cubic-bezier()` uses in the set) because Carbon and ibm.com both ship it as `motion(standard, productive)` (S35). The next is Apple's `cubic-bezier(0.4, 0, 0.6, 1)` at 138 uses (9.5%), on 6 sites.

**K4-F8 — the authored curves cluster as ease-out, and nobody in the set ships bounce as a default.** Overshoot curves (final control point above 1, e.g. `cubic-bezier(0.34, 1.56, 0.64, 1)`) appear on 5 sites but only inside `@keyframes` for toasts and badges, never on a hover or a disclosure. Carbon states the rule directly: "Do not use easing curves that suggest bounce, stretch, or sudden stops" (S35).

### 2.3 Reduced motion

**K4-F9 — 20 of 29 craft-led sites declare `prefers-reduced-motion` (69%), against 3 of 20 education stylesheets (15%, K5-F58) and 50.55% of mobile pages on the open web (S57).** The nine declaring none: Apple, Barbican, Framer, Ghost, Guggenheim, The Met, MoMA, Serpentine, Tate. **Seven of those nine are museums or arts organisations** — the arts sector is as bad as the schools sector, and the software sector is not.

**K4-F10 — Stripe has the deepest reduced-motion practice in the set: 74 blocks, and it uses the opt-in direction.** Measured verbatim from `stripe.com`'s fetched stylesheet: `@media (prefers-reduced-motion:no-preference){.case-study-card:hover{--hds-hover-active:1}}` — the hover effect only exists when the user has *not* asked for less motion. Its opt-out blocks zero the duration rather than deleting the rule: `@media (prefers-reduced-motion:reduce){.stats-section{--stats-section-transition-duration:0s}}`. Both patterns keep the state change and remove only the movement, which is exactly Michelle Barker's recommendation (S58) and Apple's ("Replacing transitions in x-, y-, and z-axes with fades", S37).

**K4-F11 — four distinct reduced-motion patterns are in production, and they are not equally good.**

| Pattern | Measured example | Verdict |
|---|---|---|
| **Opt in** — motion only inside `no-preference` | GOV.UK: `@media(prefers-reduced-motion: no-preference){.im-c-panel::after{transition:opacity var(--duration) ease}}` — all 14 of its blocks are this shape. Linear: `@media (prefers-reduced-motion:no-preference){.Fzcv4W_smooth-scroll{scroll-behavior:smooth}}` | **Best.** Safe by default, and older browsers that do not support the query simply get no motion (S58) |
| **Token zeroing** — keep the rule, set the duration to zero | Stripe: `--stats-section-transition-duration:0s`. Atlassian: `@media (prefers-reduced-motion:reduce){._6lagkb7n{--transform-scale:1}}` | **Good.** The state still changes; only the movement goes |
| **Targeted `none`** | Airbnb: `@media (prefers-reduced-motion:reduce),(update:slow),(update:none){…:focus-visible{transition:none}}` — note it also covers slow-refresh displays | **Good**, and Airbnb's `update:` addition is the only performance-aware variant measured |
| **Blanket 1 ms `!important` nuke** | Rijksmuseum, 43 blocks: `@media screen and (prefers-reduced-motion:reduce){.link span{animation-delay:0s!important;animation-duration:1ms!important;transition-delay:0s!important;transition-duration:1ms!important}}` | **Worst of the four.** It is honest but indiscriminate: it removes the focus and hover feedback a keyboard user needs along with the decoration (S58: "reduced motion doesn't necessarily mean removing *all* transforms") |

**K4-F12 — `scroll-behavior: smooth` is the field's most common unguarded motion.** 17 of 29 sites declare it (25 declarations). Only **3 declarations on 2 sites** (Linear, Mailchimp) are gated behind `no-preference`; Basecamp and Polaris instead override to `auto` under `reduce`. **13 of 17 sites smooth-scroll users who have asked their operating system for less motion.** This is the cheapest possible differentiator and almost nobody takes it.

**K4-F13 — the best reduced-motion check measured is in JavaScript, not CSS.** Whitney's first-party bundle guards a *timed* class toggle: `…setTimeout(()=>{l.classList.add('active')}, getReducedMotion()?0:window…)`. When the user prefers reduced motion the delay collapses to zero and the state still applies. GSAP documents the same idea as `gsap.matchMedia()` with paired `no-preference` and `reduce` branches (S55), and MDN/Smashing document the primitive: `window.matchMedia('(prefers-reduced-motion: reduce)')` (S58).

### 2.4 What is animated

**K4-F14 — 4,143 animated-property mentions across 29 sites. `opacity` (18.0%) and `transform` (15.1%) are the top two, together 33.1%; adding `filter` gives 36.1% compositor-only.** Paint-only properties (colour, background, border-colour, box-shadow, visibility, fill) are 33.2%. **Layout-triggering properties (`width`, `height`, `top`, `left`, `max-height`, `margin`) are only 11.3%**, and where they appear they are mostly on nav drawers rather than on content.

**K4-F15 — `transition: all` is 11.8% of the field but 89% of GT.** GT's mirror animates `all` in 33 of 37 declarations; the field's four heaviest users are Carbon 54%, Barbican 34%, Cooper Hewitt 26%, SFMOMA 21%, and every other site is under 20%. `transition: all` is what lets an unrelated layout property start animating the moment a class changes — it is the direct mechanism for motion-induced CLS, which S50 says composited `translate` cannot cause.

**K4-F16 — `will-change` is rare and deliberate everywhere except Framer.** Median across the set is 4 declarations; Framer has 104, Carbon 40, IBM 21, Stripe 18, Vercel 17. web.dev is explicit that this is an optimisation of last resort: "we don't recommend using it early in your optimization process" (S47). GT has zero, which is correct.

### 2.5 What is not there

**K4-F17 — zero of the 29 craft-led sites load GSAP, ScrollTrigger, Lenis, Locomotive Scroll or ScrollMagic in the home document.** Fingerprinting 12 first-party JavaScript bundles found GSAP in exactly two sites and both are museums: **Barbican (129 GSAP/ScrollTrigger references, `gsap.registerPlugin` ×3)** and MoMA (6). None of Stripe, Vercel, Linear, Sanity, Cloudflare, Raycast, GOV.UK, SFMOMA, Tate or Whitney ship one. **GT Anywhere's document loads GSAP, ScrollTrigger, SplitText, Splide, Splide auto-scroll and jQuery — six, the most of any site in either K4's or K5's set.**

**K4-F18 — scroll-driven CSS timelines are essentially unused: `animation-timeline` appears on 4 of 29 sites** (Notion 13, Airbnb 5, Cloudflare 5, Stripe 5) and always for progress indicators, never for content reveals. The feature runs off the main thread and is genuinely fast (S56), but it is not yet how this field builds. `view-transition` is on 2 sites (Airbnb, Raycast).

**K4-F19 — no site in the set carries a scroll-choreographed signature moment in its authored CSS.** This reproduces K5's finding on a completely different population. Across 29 craft-led sites, `@keyframes` are spinners, shimmers, marquees, toasts and fades — the same inventory K5 found on 16 school sites.

### 2.6 Token scales

**K4-F20 — 14 of 29 sites ship a named motion token scale, and the four published systems agree on the shape.**

| System | Duration tokens, measured | Easing tokens, measured |
|---|---|---|
| **IBM Carbon** (S35, and its shipped CSS) | `duration-fast-01` 70 ms, `duration-fast-02` 110 ms, `duration-moderate-01` 150 ms, `duration-moderate-02` 240 ms, `duration-slow-01` 400 ms, `duration-slow-02` 700 ms | standard `cubic-bezier(0.2, 0, 0.38, 0.9)`, entrance `cubic-bezier(0, 0, 0.38, 0.9)`, exit `cubic-bezier(0.2, 0, 1, 0.9)` (productive); `(0.4, 0.14, 0.3, 1)`, `(0, 0, 0.3, 1)`, `(0.4, 0.14, 1, 1)` (expressive) |
| **Atlassian Design System** | `--ds-duration-xxshort: 50ms`, `xshort: 100ms`, `short: 150ms`, `medium: 200ms`, `long: 250ms`, `xlong: 400ms`, `xxlong: 600ms`, `instant: 0ms` | 10 named easing custom properties |
| **Material 3** (S38) | short1 50, short2 100, short3 150, short4 200; medium1 250, medium2 300, medium3 350, medium4 400; long1 450 … long4 600; extra-long1 700 … extra-long4 1000 ms | `easing-standard` `cubic-bezier(0.2, 0, 0, 1)`, `standard-decelerate` `(0, 0, 0, 1)`, `standard-accelerate` `(0.3, 0, 1, 1)`, `emphasized` `(0.2, 0, 0, 1)`, `emphasized-decelerate` `(0.05, 0.7, 0.1, 1)`, `emphasized-accelerate` `(0.3, 0, 0.8, 0.15)`, `legacy` `(0.4, 0, 0.2, 1)` |
| **Vercel** | `--ds-motion-popover-duration: .2s`, `--ds-motion-overlay-duration: .3s`, `--ds-motion-timing-swift: cubic-bezier(.175, .885, .32, 1.1)` | named per component role |
| **Stripe** | `--graphic-reveal-duration: 300ms`, `--hds-accordion-duration: 0.36s`, `--card-duration: 800ms` | `--ease: cubic-bezier(0.25,1,0.5,1)`, `--graphic-reveal-easing: cubic-bezier(0.25,1,0.5,1)`, `--hds-accordion-ease: cubic-bezier(0.65,0.05,0.36,1)` |

Every scale is three to seven steps. None is open-ended. Both Carbon and Atlassian include a **zero** step, which is what the reduced-motion branch swaps in.

### 2.7 The field's promotional tell

**K4-F21 — what reads as promotional is not duration, it is *unrequested* motion.** Separating the set by whether motion starts without a user action: the sites that read as considered (Stripe, Linear, Vercel, GOV.UK, Figma, Polaris, Atlassian, Carbon, Basecamp) animate almost exclusively in response to hover, focus, or a state the user changed. The sites that read as marketing (Serpentine 202 transitions with zero reduced-motion; Castilleja's 228 in K5) run motion the visitor did not ask for. NN/g states the mechanism: parallax-presented content is "often… ignored" and users "scroll quickly, scanning for keywords of interest" (S46). Carbon states the test: "Is your motion frequently noticed by average users? If so, consider removing or minimizing it" (S35). Nabors states the consequence: animation should "ease cognitive load" (S62), and praise for an animation means the opposite happened.

### 2.8 Answering K5-Q3: intent or vendor default?

K5 left this to K4: are `0.3s` and `ease` the field's *intent*, or the defaults of Finalsite, Blackbaud, Bootstrap and Webflow?

**K4-F22 — it is both, and the two are separable by whether the value has a name.** The evidence:

- **Vendor defaults are real and measurable.** Tailwind v4 ships `--default-transition-duration: 150ms` and `--default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)` (S60), and those exact strings appear in the fetched stylesheets of Vercel, Sanity and Cloudflare. The most-shared curve in the whole set (K4-F6) is therefore partly a framework artefact, not 11 independent decisions.
- **Authored intent is also real and is legible as named tokens.** Carbon's 70/110/150/240/400/700 ms scale is documented *and* shipped, and its stylesheet's top three durations are 100 ms ×295, 110 ms ×114, 70 ms ×91 — the spec and the bytes agree. Atlassian's eight `--ds-duration-*` tokens are a deliberate scale, not a default.
- **The discriminator is the token, not the number.** Fourteen sites (K4-F20) name their durations; those are decisions. Fifteen do not; those numbers are inherited.

**So K5-Q3 resolves as: the 100 / 200 / 300 ms band is genuine convergence — it is where both the vendor defaults and the authored scales land, and where 42.8% of all measured values sit (K4-F2). The `ease` keyword, by contrast, is a default. Every site in the craft-led set that authored its motion authored a curve.** GT's `tokens.css` therefore has the right numbers and an un-decided easing, which is exactly what its own comment says: "`--ease-emphasized: ease; /* NOT DETERMINABLE as a distinct curve */`".

## 3. Findings — what the guidance says

**K4-F23 — all four systems define motion by its job, and all four say the same job.** Carbon: "Is your motion purposeful? What problem is motion solving? Does it enhance the user's understanding of an action?" (S35). Apple: "Add motion purposefully, supporting the experience without overshadowing it. Don't add motion for the sake of adding motion" (S36). NN/g gives the three legitimate jobs: draw attention to a state change, aid comprehension of how elements relate, and show cause and effect (S43). Nabors: "Animation isn't merely decorative" (S62).

**K4-F24 — the duration guidance converges on 100–400 ms and is corroborated by the measurement.** NN/g: "the duration of most animations should be in the range of 100–500 ms"; simple feedback "roughly 100 ms"; "At 500ms, animations start to feel like a real drag" (S42). Val Head: "200ms to 500ms seconds is a good range to start with", citing the Model Human Processor's 230 ms visual-perception figure (S41). Emil Kowalski: "Your animations should also usually be shorter than 300ms" (S53). Comeau's default is 250 ms (S54). Carbon's micro-interaction band is 90–120 ms (S35). The measured field puts 80.5% in 100–400 ms (K4-F1). **The guidance and the bytes agree; 400 ms is the practical ceiling for anything a user triggered.**

**K4-F25 — easing guidance is asymmetric and everyone agrees on the direction.** NN/g: ease-out for entering ("the object slows down before it comes to rest, allowing the eye to predict where it will stop"), ease-in for exiting (S42). Carbon: "Do micro-interactions use `ease-out` on user input?" (S43 in its checklist, S35). Kowalski: ease-out "starts fast and slows down at the end, which gives the impression of a quick response" (S53). Comeau ranks `linear` last: "pretty much nothing in the real world moves this way" (S54). Material names the same three shapes: standard, decelerate (entering), accelerate (leaving) (S38, S39). **The measured field agrees: `ease-out` 16.3% against `ease-in` 1.8% (K4-F5).**

**K4-F26 — reduced motion means replace, not delete.** Apple's list of what to do when Reduce Motion is on: "Tightening animation springs to reduce bounce effects / Tracking animations directly with people's gestures / Avoiding animating depth changes in z-axis layers / **Replacing transitions in x-, y-, and z-axes with fades to avoid motion** / Avoiding animating into and out of blurs" (S37). Val Head, ten years earlier: "Animation that involves only non-moving properties, like opacity, color, and blurs, are unlikely to be problematic" (S40). Nabors: "There are many properties that can be animated that do not involve movement (opacity, color, blur, form)" (S61). GSAP: "If an animation provides important information… consider keeping it, but simplifying the animation down. If it's just decorative, removing it entirely is the best option" (S55). Barker: "reduced motion doesn't necessarily mean removing *all* transforms" (S58).

**K4-F27 — the accessibility floor is two WCAG criteria, one of them Level A.** SC 2.2.2 Pause, Stop, Hide (**Level A**): "For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it" (S34). SC 2.3.3 Animation from Interactions (Level AAA): "Motion animation triggered by interaction can be disabled, unless the animation is essential" — and crucially, "Moving new content into the viewport is essential for scrolling. The user controls the essential scrolling movement so it is allowed" (S33). **Scrolling itself is never the problem; motion bolted onto scrolling is.** REQ-074 sets WCAG 2.1 AA, so 2.2.2 is mandatory and 2.3.3 is the standard GT should hold anyway.

**K4-F28 — the affected population is large and is GT's population.** "As many as 35% of adults aged 40 years or older in the United States have experienced some form of vestibular dysfunction" (S59, citing vestibular.org). Val Head cites "approximately 8 million American adults report a chronic problem with balance, while an additional 2.4 million report a chronic problem with dizziness" (S40). GT's visitor is a parent, on a phone, arriving from Instagram (fact 5) — squarely in that age band, in the browsing context where motion sickness is worst.

## 4. Findings — performance

**K4-F29 — two properties are free; everything else costs.** web.dev: animate `transform` (translate, rotate, scale) and `opacity`; "Avoid any property that triggers layout or paint unless it's absolutely necessary" (S47). Comeau's ranking: `transform` and `opacity` very cheap, `background-color` moderate, `height` / `width` / `left` / `margin-top` "very expensive" (S54). This is already MN-10's rule; the measurement (K4-F14) shows the field obeys it at 36.1% compositor-only against 11.3% layout-triggering.

**K4-F30 — composited motion cannot cause CLS, and that is a formal guarantee, not a hope.** "Composited animations using `translate` can't impact other elements, and so don't count toward CLS" (S50). "Changing the `top` and `left` properties also cause layout shifts" (S50). The threshold is 0.1 (S49). **Any move written as `transform` plus `opacity` is CLS-zero by construction**, which is how MN-10's "zero layout shift from motion" gets *proved* rather than asserted.

**K4-F31 — the LCP risk is render delay, not download.** LCP should be "2.5 seconds or less for at least 75% of page visits", and element render delay is one of its four parts: "The LCP resource has finished loading, but the LCP element has not yet been added to the DOM (it's waiting for some JavaScript code to load)" and "even if your image resource is fully downloaded, it may still have to wait until an unrelated script finishes executing before it can render" (S48). **An entrance animation that starts the hero at `opacity: 0` converts a fast page into a slow one on the metric, with no change to the bytes.** This is exactly what REQ-073 and MN-02 already record about GT's hero; K4 adds the mechanism.

**K4-F32 — the entrance-reveal pattern is widespread but is kept below the fold.** 24 of 29 sites contain at least one rule combining `opacity: 0` with `animation` or `transition` (IBM 34, Raycast 30, Carbon 23, Serpentine 23, Figma 21, Mailchimp 21, Apple 17). The pattern itself is normal. What separates the fast sites is that none of them apply it to the first screen — and the measurement cannot prove that from CSS alone, which is K4-Q1.

**K4-F33 — the attention data says motion below the fold buys little.** 57% of page-viewing time is above the fold, 74% in the first two screenfuls, 81% in the first three (S44). A reveal placed at screen four is seen by a small minority of visitors; a reveal placed at screen one is a Core Web Vitals liability. **The usable window for a scroll-triggered move is screens two and three, and it is narrow.**

## 5. Findings — one-time reveals without scroll hijacking

**K4-F34 — `IntersectionObserver` exists precisely to avoid the main-thread cost of scroll handlers.** MDN: past implementations used "event handlers and loops calling methods like `Element.getBoundingClientRect()`… Since all this code runs on the main thread, even one of these can cause performance problems"; with the observer, "sites no longer need to do anything on the main thread to watch for this kind of element intersection" (S52).

**K4-F35 — "one-time" is a single line: `observer.unobserve(entry.target)` inside the `isIntersecting` branch.** MDN's own example: `if (entry.isIntersecting) { … observer.unobserve(img); // Stop observing once loaded }` (S52). The measured field does this: unobserve/disconnect counts are Vercel 6, MoMA 3+16, Raycast 3+2, Whitney 1+6.

**K4-F36 — a reveal is not scroll hijacking, and the distinction is precise.** Scrolljacking is "a design pattern that changes the speed and, sometimes, the direction of scrolling on a web page", and it threatens "user control and freedom, discoverability, attention, efficiency, and task success"; NN/g's seventh mitigation is "Avoid Scrolljacking on Mobile" (S45). An `IntersectionObserver` reveal changes **neither speed nor direction** — the page scrolls at exactly the rate the finger moves; a class is added when an element crosses a line. WCAG agrees that user-controlled scrolling is "essential" and therefore exempt (S33). **The test is one question: does the page still move exactly one pixel per pixel of input? If yes, it is a reveal. If no, it is hijacking.**

**K4-F37 — the measured field uses `IntersectionObserver` for orientation, not decoration.** Whitney's own bundle uses it to activate a compact header when the top bar leaves the viewport (`d.intersectionRatio===0 && window.scrollY>0 → classList.add('will-be-active')`), to toggle a scroll-gradient overlay on a horizontally scrollable list (`d.classList.toggle('scroll-gradient__overlay--active', !l.isIntersecting)`), and to show or hide a "read less" control with a negative `rootMargin`. Every one of those tells the reader *where they are*. None of them is a fade-up.

**K4-F38 — the three failure modes of a reveal are all avoidable in CSS, and the third is the one people forget.** (a) *Hiding content from no-JS and from crawlers* — solved by putting the initial `opacity: 0` on a `.js`-scoped selector the script adds, so the default document is fully visible. (b) *Hiding content from reduced-motion users* — solved by wrapping the whole reveal in `@media (prefers-reduced-motion: no-preference)` (S58), so the hidden state never exists for them. (c) *Hiding content the observer never fires on* — a tall element whose threshold is never met, or a browser that fails to fire on restore from bfcache, leaves content permanently invisible; solved by `threshold: 0` with a negative `rootMargin` rather than a high threshold, and by never gating anything essential on the observer.

## 6. Principles the studio adopts

| # | Principle | Traceable to |
|---|---|---|
| K4-P1 | **Motion must name its job before it is built: orientation, state change, or cause and effect. If the job cannot be named in one sentence, the move does not ship.** | K4-F23, S35, S36, S43, S62 |
| K4-P2 | **Keep the three durations GT already has — 100, 200, 300 ms — and treat 400 ms as a hard ceiling.** They are the field's three modes (42.8% of 3,497 measured values) and they match every published scale | K4-F1, K4-F2, K4-F24, K4-F20 |
| K4-P3 | **Author one curve and use ease-out semantics.** `ease` is a default, not a decision; every craft-led site that authored its motion authored a curve. Entering decelerates, leaving accelerates, and nothing bounces | K4-F5, K4-F6, K4-F8, K4-F25, K4-F22 |
| K4-P4 | **`transform` and `opacity` only. Never `transition: all`.** Composited moves are CLS-zero by construction; `all` is the mechanism that lets a layout property animate by accident | K4-F14, K4-F15, K4-F29, K4-F30 |
| K4-P5 | **Reduced motion replaces movement with a fade; it never deletes the state change.** A keyboard user must still see focus move, a switcher must still switch | K4-F10, K4-F11, K4-F26, S37, S58 |
| K4-P6 | **Prefer the opt-in direction: declare motion inside `@media (prefers-reduced-motion: no-preference)`.** The page is then motion-free by default, including on browsers that do not know the query | K4-F11, S58 |
| K4-P7 | **Gate `scroll-behavior: smooth` too.** 13 of 17 sites that use it smooth-scroll people who asked for less motion; this is free to get right | K4-F12 |
| K4-P8 | **Nothing moves above the fold, and nothing moves before first paint.** An entrance animation on the LCP element turns a fast page slow on the metric without changing a byte | K4-F31, K4-F33, MN-02, REQ-073 |
| K4-P9 | **A reveal is legitimate only if the page scrolls one pixel per pixel of input.** Anything that changes scroll speed or direction is hijacking and is out | K4-F36, S45, S33 |
| K4-P10 | **A one-time reveal is `threshold: 0`, a negative `rootMargin`, `unobserve` on first intersection, and a `.js`-scoped hidden state.** Nothing essential is ever gated on the observer firing | K4-F34, K4-F35, K4-F38 |
| K4-P11 | **No motion library.** Zero of 29 craft-led sites load one in the home document; the two that do are museums. CSS plus at most twenty lines of inline `IntersectionObserver` covers the entire vocabulary | K4-F17, MN-09, `05` §9 |
| K4-P12 | **Every hover move has a touch and keyboard equivalent, or the information it reveals is simply visible on small screens.** Two thirds of GT's sessions are phones (fact 5) | MN-12, K4-F4 |
| K4-P13 | **If a visitor notices the motion, it failed.** Carbon's own checklist asks whether motion is "frequently noticed by average users" and says to remove it if so; Nabors' test is whether it eased cognitive load | K4-F21, S35, S62 |
| K4-P14 | **Stillness is a score, not an absence.** A direction that carries no motion and says why in one sentence is scored the same as one that carries motion well | `17` §6 rubric wording, K4-F19 |

## 7. Anti-patterns

| # | Anti-pattern | Seen at | Why it fails |
|---|---|---|---|
| K4-A1 | Six motion libraries on a routing page | **GT Anywhere today**: GSAP, ScrollTrigger, SplitText, Splide, Splide auto-scroll, jQuery (S31). Zero of 29 craft-led sites load any (K4-F17) | The motion cannot be turned off by a media query, so `prefers-reduced-motion` is structurally unenforceable (K5-P15). It is also the heaviest payload in either research set |
| K4-A2 | `transition: all` | GT 33 of 37 declarations (89%); Carbon 54%, Barbican 34% (K4-F15) | Any class change can start animating a layout property, which is the CLS mechanism S50 says composited transforms cannot cause |
| K4-A3 | Entrance animation on the hero | GT's hero entrance, already logged as a defect (REQ-073, MN-02) | Element render delay is a named LCP component; a hero that starts at `opacity: 0` is slow on the metric with identical bytes (K4-F31) |
| K4-A4 | Parallax and scroll-linked background movement | NN/g's parallax study; the whole vestibular literature | "Most users in our testing don't wait for parallax effects to load"; it "can even cause people to feel sick" (S46); it is Val Head's first named trigger (S40) |
| K4-A5 | Scrolljacking, page-level scroll snapping, "cinematic" pinned sections | NN/g's scrolljacking study | It "contradict[s] user expectations, control, and freedom", and NN/g's explicit mitigation is "Avoid Scrolljacking on Mobile" (S45) — where two thirds of GT's traffic is |
| K4-A6 | Blanket `!important` motion nuke under `reduce` | Rijksmuseum, 43 blocks setting `transition-duration:1ms!important` (K4-F11) | It takes the keyboard user's focus feedback away with the decoration. Replace movement; keep the state change (S58, S37) |
| K4-A7 | Ungated `scroll-behavior: smooth` | 13 of 17 sites that declare it (K4-F12) | It is motion the user explicitly asked their OS not to have, on the one interaction they perform most |
| K4-A8 | Counting numbers up | Proposed in MN-08 and withdrawn there | A figure mid-count is unreadable, cannot carry its sentence label, and cannot be clicked to its evidence page (K5-P5, REQ-022). 2hourlearning.com presents its own figures statically (R2 S26) |
| K4-A9 | Auto-advancing carousels, looping marquees, ambient logo walls | Notion `--marquee-animation-duration: 60s`; Airbnb `--dls-shimmer-duration: 1.35s` | SC 2.2.2 is **Level A**: anything automatic, over five seconds, alongside other content needs a pause control (S34). A logo marquee with no pause fails AA |
| K4-A10 | Motion that only exists on hover | The half of the field whose durations sit only on `:hover` rules | Hover does not exist on a phone. MN-12 already forbids it; K4-F4's hover-only measurements are desktop-only motion |
| K4-A11 | Bounce, overshoot and elastic easing as a default | 5 sites ship overshoot curves, all inside `@keyframes`, none on a hover or disclosure (K4-F8) | Carbon states the rule: "Do not use easing curves that suggest bounce, stretch, or sudden stops" (S35). Overshoot on a routing door reads as a toy |
| K4-A12 | Durations over 400 ms on anything the user triggered | 8.7% of the field's values; Tate's 500 ms ×25 and 800 ms ×11 are the set's slowest (S10) | "At 500ms, animations start to feel like a real drag for users" (S42); Kowalski's ceiling is 300 ms (S53) |
| K4-A13 | A reveal that hides content when JavaScript or the observer fails | Not measurable from CSS; the structural risk in every naive fade-up | The routing page's whole job is one choice in ten seconds (REQ-012). Content that is invisible with JS off is content that is gone |

## 8. How it applies to GT

### 8.1 The motion vocabulary the studio may use

Ten moves, and no others without a new register row. Every one is `transform` and/or `opacity` only, inside the 100–300 ms scale already in `tokens.css`, with a stated reduced-motion behaviour and a stated touch/keyboard equivalent. **A direction may use any subset; it may use none. Every move a mock uses goes in that mock's motion table with these five columns, as `17` §7 requires.**

The proposed token set these reference (`tokens.css`, extended — see §8.5):

```css
--duration-fast: 100ms;   --duration-base: 200ms;   --duration-slow: 300ms;
--ease-standard: cubic-bezier(0.2, 0, 0, 1);      /* Material easing-standard (S38) */
--ease-out:      cubic-bezier(0, 0, 0.2, 1);      /* entering: decelerate (S42, S56) */
--ease-in:       cubic-bezier(0.4, 0, 1, 1);      /* leaving: accelerate (S42) */
```

| # | Move | What it serves on a routing page | Trigger | Duration and easing | Reduced-motion behaviour | Implementation |
|---|---|---|---|---|---|---|
| **V1** | **Door state change** — border colour, surface tint, underline | Tells the parent which of the two schools their pointer or keyboard is on. This is the choice, so it must be unmissable | `:hover`, `:focus-visible` | `--duration-fast` (100 ms), `--ease-standard`. Paint-only; no movement at all | Unchanged — this carries information, so it is essential under SC 2.3.3 (S33) | CSS. `transition: border-color 100ms, background-color 100ms` — **named properties, never `all`** |
| **V2** | **Door supporting line reveal** — the one sentence under the school name fades and rises 4 px | Keeps the first screen to two names and two CTAs while the detail is one hover or focus away. The §7-sanctioned move | `:hover`, `:focus-within` on the door | `--duration-base` (200 ms), `--ease-out`. `opacity: 0 → 1`, `translateY(4px → 0)` | Fade only; `translateY` drops to 0 (Apple: "Replacing transitions in x-, y-, and z-axes with fades", S37) | CSS. Space for the line is **reserved at all times** so nothing shifts. Below 768 px and on `(hover: none)` the line is simply always visible (K4-P12) |
| **V3** | **Focus ring** | The keyboard path through the choice | `:focus-visible` | **0 ms — never animated** | Unchanged | CSS. The ring appears instantly; only its colour may transition, at 100 ms |
| **V4** | **Campus / school switcher indicator slide** | Shows which of N campuses is selected and that the two are peers on one control. The §7-sanctioned move, and the one M5 exists for | `change` on the control; also keyboard arrow keys | `--duration-base` (200 ms), `--ease-standard`. `transform: translateX()` on a single absolutely-positioned indicator | `transition: none` on the indicator; it jumps. The panel content still swaps | CSS, driven by a `data-selected` attribute on the container. Zero JS beyond setting that attribute |
| **V5** | **Panel crossfade on switch** | The content under the switcher changes without the page jumping under a thumb mid-decision | The same `change` | `--duration-fast` (100 ms) out, `--duration-base` (200 ms) in, `--ease-out`. `opacity` only | `transition: none`; instant swap (this is MN-05's current position, preserved as the reduced-motion branch) | CSS. **Both panels occupy the same reserved grid cell**, so height never changes — MN-05's "reserved space", now the mechanism rather than the constraint |
| **V6** | **One-time section reveal** — a below-fold block fades and rises 8 px, once | Marks that a new section has begun on a long phone scroll. Orientation, not decoration. **Maximum three per page, never on the first two screens** | First intersection, `threshold: 0`, `rootMargin: '0px 0px -15% 0px'` | `--duration-slow` (300 ms), `--ease-out`. `opacity` + `translateY(8px)` | The hidden state never exists — the whole rule lives inside `@media (prefers-reduced-motion: no-preference)` | Inline `IntersectionObserver`, under 20 lines. The hidden state is scoped to a `.js` class the script adds, so the no-JS document is complete (K4-F38). `observer.unobserve(entry.target)` on first hit |
| **V7** | **Disclosure — comparison row or accordion opens** | Lets the comparison table stay short on a phone while every fact is one tap away | `click` / `Enter` on a `<summary>` or `aria-expanded` button | `--duration-base` (200 ms), `--ease-out`. `opacity` on the content; the container uses `grid-template-rows: 0fr → 1fr` | `transition: none`; opens instantly | CSS with `<details>`/`<summary>` or a button plus `aria-expanded`. **Never `max-height`** — it animates layout and is the classic CLS source |
| **V8** | **Schedule or day diagram draws its segments once** | Makes a timetable readable as a sequence rather than a stack of bars. The §7-sanctioned move | First intersection, same observer as V6 | `--duration-slow` (300 ms) per segment, **60 ms stagger, maximum 5 segments** (total under 600 ms), `--ease-out`. `transform: scaleX(0 → 1)` with `transform-origin: left` | Segments render at their final state; no draw | The same inline observer as V6, `unobserve` after the first hit. `scaleX` is compositor-only; an SVG `stroke-dashoffset` draw is **not** and is out |
| **V9** | **Photo strip that scrolls with the page** | Lets a photo essay show six images in the width of one, at the reader's own pace. The §7-sanctioned move | The user's own drag or swipe | **No animation at all.** `overflow-x: auto`, `scroll-snap-type: x proximity` | Unchanged — it is user-driven, which SC 2.3.3 explicitly permits (S33) | CSS only. **No autoplay, no auto-advance, no marquee** (K4-A9) |
| **V10** | **In-page anchor scroll** | "Compare the two" in the hero jumps to the comparison without losing the reader's place | Click on an in-page link | Browser-native smooth scroll | **Gated**: `@media (prefers-reduced-motion: no-preference) { html { scroll-behavior: smooth } }` | CSS. This is the 13-of-17 failure (K4-F12) and costs one media query to get right |

**Sticky-header compaction is deliberately not in the vocabulary.** Whitney's `IntersectionObserver` sentinel (K4-F37) is the right technique and would be a legitimate V11, but a sticky header on a 664 px in-app-browser viewport (`17` §4) costs first-screen height the routing page cannot spare. If a direction wants it, it is a new register row with an in-app-browser measurement attached.

### 8.2 The moves that are forbidden, and why

| Forbidden | Why, in one line |
|---|---|
| Any entrance animation on the hero, headline, umbrella sentence or door CTAs | LCP element render delay (K4-F31); already MN-02 and REQ-073 |
| Any motion at all above the fold on any viewport in `17` §4 | K4-P8; 57% of viewing time is spent there (S44) and the choice happens there |
| Counting or animating figures | K4-A8; a mid-count figure cannot carry its label or its evidence link (REQ-022, DEL-018) |
| Parallax, scroll-linked backgrounds, Ken Burns on photographs | K4-A4; the first-named vestibular trigger (S40, S46) |
| Scrolljacking, page-level scroll snap, pinned "cinematic" sections | K4-A5; NN/g says avoid on mobile, which is two thirds of GT (S45, fact 5) |
| Door expansion, shrink or lift | MN-03; it changes the comparison during the comparison, and it is the CLS shape |
| Animating `width`, `height`, `top`, `left`, `margin`, `max-height` | K4-F29, K4-F30; they are the only way composited motion can shift layout |
| `transition: all` anywhere | K4-A2; GT's current 89% pattern |
| Bounce, overshoot, elastic and spring easing | K4-A11; Carbon forbids it by name (S35) |
| Any duration over 400 ms on a user-triggered move | K4-A12; 8.7% of the field, and NN/g's "real drag" line (S42) |
| Autoplaying carousels, marquees, logo walls, ambient video | K4-A9; SC 2.2.2 is Level A and REQ-074 requires AA (S34) |
| Any external motion library — GSAP, ScrollTrigger, SplitText, Lottie, Splide, Velocity | K4-P11, K4-A1; `05` §9 already forbids external JS in mocks, and zero of 29 craft-led sites need one |
| Information that exists only on hover | K4-A10, MN-12 |
| A reveal whose hidden state survives with JS off or with reduced motion on | K4-A13, K4-F38 |

### 8.3 Which directions earn motion

**The rule: a direction earns motion only if its thesis contains a choice or a state the visitor operates. If its thesis is about tone, restraint, type or a single linear read, motion is decoration by definition and the direction stays still.** Applying it to the twelve directions that are named today — the five built (`05` §4) and the seven proposed in `17` §3 — with the eight remaining slots left to G-C:

| # | Direction | Thesis | Verdict | Vocabulary allowed |
|---|---|---|---|---|
| M1 | **Two Doors** | "The fastest correct choice wins" | **Motion, minimal.** The whole page is one choice; the choice deserves feedback | V1, V2, V3, V10 |
| M2 | **The Institute** | "Proof of rigor is the brand" | **Still, with one exception.** Evidence is read, not watched; a count-up would contradict the claims register | V1, V3, and **V6 once** on the proof ledger block only |
| M3 | **Private Quiet** | "Prestige is restraint" | **Still. Deliberately.** Motion here argues against the thesis. This is the direction that proves K4-P14 — a designed stillness scores 5 | V1 (paint-only), V3 |
| M4 | **Builders** | "Show children building" | **Motion, user-driven only.** The strip is the move; nothing animates the photographs | V1, V3, V9 |
| M5 | **One School, Two Campuses** | "Coherence itself is the message" | **Motion, and it is the point.** The switcher is the §7 exemplar and the DD-21 N-campus component | V1, V2, V3, **V4, V5**, V10 |
| C1 | Campus map led | Geography is the router | **Motion, restricted.** Marker and panel state only; **no map pan, zoom or fly-to** — that is K4-A4 with a different name | V1, V3, V4-style indicator, V5 |
| C2 | Day-in-the-life timeline | A schedule is the proof | **Motion, once.** The timeline is the one artefact in the whole set that a draw genuinely clarifies | V1, V3, **V8**, V6 |
| C3 | Letter from the head of school | One voice, one page | **Still.** It is a letter. Motion on prose is noise (K4-P13) | V1, V3 |
| C4 | Typographic manifesto | The words are the design | **Still.** Any motion here is decoration by its own definition | V1, V3 |
| C5 | Proof ledger | Every figure with its evidence | **Still, with one exception.** V6 once on the ledger as a block; **never per figure, never a count-up** (K4-A8) | V1, V3, V6 ×1 |
| C6 | Photo essay | The photographs argue | **Motion, user-driven only.** V9 is the direction; no reveal on an image (LCP and CLS) | V1, V3, V9, V6 on captions only |
| C7 | System shell with motion | The shared shell is the product | **Motion, the full vocabulary.** This direction's thesis *is* the vocabulary, so it demonstrates every move with its motion table visible | V1–V8, V10 |
| C8–C15 | *Not yet named* (G-C derives them from `kb/CONCEPTS.md`) | — | **Apply the rule above.** Default is still | Recorded as K4-Q6 |

Counted: **six of the twelve named directions earn motion; six stay still; and the two that are allowed exactly one move (M2, C5) are both proof-led.** That distribution is deliberate — it keeps D-031 a widening of the option set, not a mandate, and it preserves MN-08's core finding that mocks differ through layout, hierarchy, density, imagery and copy (DD-19), never through motion.

### 8.4 Calibrating the rubric row **Motion**

Rubric question (`17` §6): *If present, does it serve orientation or choice, stay in budget and degrade cleanly? If absent, is the stillness deliberate?*

| Score | What it looks like | Anchor |
|---|---|---|
| 1 | Motion present with no motion table. Durations unbounded or over 400 ms. `transition: all`, or a layout property animated. No `prefers-reduced-motion`. Something above the fold moves | **GT Anywhere today** (S31): 33 of 37 transitions on `all`, zero reduced-motion declarations, six motion libraries, a hero entrance already logged as a defect (K4-A1, K4-A2, K4-A3) |
| 2 | `transform` and `opacity` only, and inside the duration scale — but the moves are decorative: reveals with no informational job, a fade for its own sake. No reduced-motion path | Serpentine (S28): 202 transitions, an authored curve on 161 of them, and **zero** `prefers-reduced-motion` blocks. Craft without care |
| 3 | In budget, and reduced motion honoured — but honoured with a blanket `!important` nuke that also removes focus and hover feedback; **or** the page is static with no stated reason for the stillness | Rijksmuseum (S12): 43 blocks of `transition-duration:1ms!important` (K4-F11). Also: any mock that simply has no motion and does not say so |
| 4 | Every move is in the mock's motion table with trigger, duration, easing and reduced-motion behaviour. All compositor-only, all ≤ 400 ms, nothing above the fold, nothing on the LCP element. Reduced motion verified in the Playwright run, not assumed. `scroll-behavior` gated | IBM Carbon (S9): a named six-step duration scale, three named easing pairs, 63 reduced-motion blocks, and a published checklist the CSS actually matches (K4-F20, K4-F22) |
| **5** | **All of 4, and:** (a) **every move is traceable to an orientation-or-choice job named in the Design Director brief**, in one sentence, before it was built; (b) **reduced motion *replaces* movement with a fade and keeps the state change** — the switcher still switches, focus still moves; (c) **every hover move has a touch and keyboard equivalent, or its information is simply visible under 768 px**; (d) **the reveals are gated behind both `no-preference` and a `.js` class, so the page is complete with JavaScript off and with motion off**; (e) **measured CLS from motion is 0.000 and the LCP element is never animated**; (f) **the motion is not noticeable** — the critic, on first view, cannot say what moved. **And a mock with no motion at all reaches 5 on the same row** if its brief states the stillness in one sentence and its state and focus feedback still pass every QA test | **Stripe** (S1) for the `no-preference` opt-in gate on hover effects and for zeroing a duration token instead of deleting a rule; **Whitney** (S25) for checking the preference in JavaScript before a timed class toggle (`getReducedMotion()?0:…`); **Apple's HIG** (S37) for "Replacing transitions in x-, y-, and z-axes with fades"; **Carbon** (S35) for "Is your motion frequently noticed by average users? If so, consider removing or minimizing it"; and **M3 Private Quiet** as the stillness anchor |

For GT specifically, a 5 on Motion means a parent on an iPhone in the Instagram in-app browser, with Reduce Motion on, gets a page where **nothing moves, everything works, and the two doors still tell them which one their thumb is on** — and a parent on a laptop with motion on gets the same page plus a supporting line that fades in under a cursor and a switcher indicator that slides 200 ms. The two experiences differ by three properties and nothing else.

### 8.5 Into the brief, the tokens, the register and the QA

| Target | Change |
|---|---|
| **Design Director brief** (`17` §5, Motion row) | The Motion row is filled from §8.1 by **move number**, not prose: "V1, V3 only" or "V1, V2, V3, V4, V5, V10". It names the orientation-or-choice job for each in one sentence. A brief that cannot name the job writes "none" and the reason, which is a valid 5 (§8.4) |
| **`mockups/shared/tokens.css`** | Keep `--duration-fast: 100ms`, `--duration-base: 200ms`, `--duration-slow: 300ms` — the field's three modes (K4-F2) and already correct. **Add**: `--ease-standard: cubic-bezier(0.2, 0, 0, 1)`, `--ease-out: cubic-bezier(0, 0, 0.2, 1)`, `--ease-in: cubic-bezier(0.4, 0, 1, 1)`, and `--duration-none: 0ms` for the reduced-motion branch (Carbon and Atlassian both ship a zero step, K4-F20). **Add a `@media (prefers-reduced-motion: reduce)` block that sets the duration tokens to `0ms`** — one block, and the whole vocabulary degrades. The file's own comment says `--ease-emphasized` is "NOT DETERMINABLE"; K4 resolves it by *decision* rather than extraction, which needs a register row (K4-Q5) |
| **Register `07`** | **MN-13** currently fixes `ease` as the only easing because it is the only value in either site's CSS. K4-F22 shows `ease` is a default, not a decision, and K4-F5 shows every craft-led site that authored motion authored a curve. **Proposed amendment to MN-13**: three durations unchanged; easing becomes the three named curves above, recorded as a deliberate brand extension. **MN-01, MN-03, MN-04, MN-05, MN-08** are widened by D-031 exactly to the extent §8.1 allows and no further — V2 widens MN-03, V4/V5 widen MN-05, V6/V8 widen MN-04, and MN-08's "no signature animation per mock" stands unchanged. **MN-10 and MN-12 are strengthened, not relaxed**: add "never `transition: all`" and "`scroll-behavior: smooth` only inside `no-preference`". **MN-15** is unaffected |
| **Claims register** (`12-claims-register.md`) | No change, but K4-A8 gives the reason a figure may never animate: a counting number cannot carry the sentence label and evidence link REQ-022 requires |
| **QA** (`1_spec/13` and the Playwright runner, D-028) | Add as assertions, all mechanically checkable: (1) **zero `transition: all`** in any mock stylesheet; (2) **no `transition-duration` or `animation-duration` over 400 ms** except a documented loop with a pause control; (3) **no `width`/`height`/`top`/`left`/`margin`/`max-height` in any `transition-property`**; (4) **`prefers-reduced-motion: reduce` emulation run shows zero elements with a non-zero computed `transition-duration` or a running animation**; (5) **the same run shows the switcher still switching and focus still visible** — this is the (b) clause of a 5 and the one a blanket nuke fails; (6) **`scroll-behavior: smooth` appears only inside a `no-preference` block**; (7) **layout-shift score from motion is 0.000** across a scripted scroll; (8) **with JavaScript disabled, every element is visible** — the V6/V8 no-JS test; (9) **no element inside the first viewport at any of the 13 sizes in `17` §4 has a transition or animation applied on load** |
| **`kb/EXEMPLARS.md`** | Add three motion captures to the education eight: **Stripe** (the `no-preference` hover gate), **IBM Carbon's motion page** (the token scale and the checklist), **GOV.UK** (14 blocks, all opt-in, on a page with 16 transitions total — the minimum-viable correct implementation) |

## 9. Open questions

| # | Question | Why K4 could not resolve it | What would resolve it |
|---|---|---|---|
| K4-Q1 | Do any of these sites animate their *rendered* first screen? | CSS alone cannot say which selectors land above the fold. 24 of 29 have an `opacity: 0` + animation rule somewhere (K4-F32); whether any of them is the LCP element is unknowable from bytes | A computed-style probe on the LCP element during the `18` §3 capture pass, at 390 and 1440. This is the remaining half of K5-Q3 |
| K4-Q2 | What do the Instagram, Facebook and TikTok in-app browsers report for `prefers-reduced-motion`? | Not observable by text fetch, and the webviews may not inherit the OS setting the way Safari and Chrome do | The REQ-024 in-app matrix run. If a webview reports `no-preference` regardless of the OS setting, the **opt-in** pattern (K4-P6) silently becomes motion-on for those users, which would argue for also honouring a `[data-reduce-motion]` attribute |
| K4-Q3 | Apple declares **zero** `prefers-reduced-motion` in its fetched home stylesheet (S4) while publishing the strictest motion guidance in the set (S36, S37). Is the handling in JavaScript, or is it a genuine gap? | Only the first five first-party scripts were fetched and none contained a `matchMedia` motion check | Fetch apple.com's full script graph, or a rendered probe. It matters only as a caution against treating any single site as an authority; the guidance stands on its own |
| K4-Q4 | Does a one-time reveal (V6) measurably help or hurt GT's routing? | No A/B capability, and GA4's current configuration cannot isolate it | Nothing available before S32. Treated as **judgment**, which is why V6 is capped at three per page and barred from the first two screens |
| K4-Q5 | Should GT adopt an authored `cubic-bezier` at all, given MN-13 fixed `ease` on extracted evidence? | K4-F22 shows `ease` is a default rather than a decision, but changing it is a **brand extension**, not a research finding | A register row through the ensemble (`0_plan/12-register-loop.md`), with Astra's independent read. §8.5 proposes the amendment; K4 does not make it |
| K4-Q6 | Which of the eight unnamed directions (C8–C15) earn motion? | They do not exist yet; G-C derives them from `kb/CONCEPTS.md` | Apply §8.3's rule when each brief is written. The default is still |
| K4-Q7 | Is a sticky, compacting header worth its first-screen cost on a 664 px in-app viewport? | Whitney's `IntersectionObserver` sentinel (K4-F37) is the right technique, but the height budget is decided by measurement, not by preference | A measurement in the `17` §4 matrix at 390 × 664 and 412 × 780, before any direction proposes it |

Not blocked. All 30 target sites were fetched; the one that returned no stylesheet (S30, ramp.com) is recorded as a finding rather than a gap, and the craft-led set at 29 measurable sites exceeds the 12 the cluster asked for.
