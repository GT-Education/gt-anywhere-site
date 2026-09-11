# K10 Responsive and fluid layout

| Field | Value |
|---|---|
| Cluster | K10 of `18-knowledge-base-plan.md` section 1 |
| Feeds | `17` section 4 (the viewport matrix), `1_spec/13` section 14 (the mock visual QA layer), `0_plan/mockups/shared/tokens.css` (fluid space), rubric row **Craft**, REQ-024 |
| Method | **63 distinct sources fetched with content** by this agent on 2026-09-11 using WebFetch and two `curl` fetches (Playwright's device-descriptor JSON, Carbon's grid page). No browser tool was opened. No `gt.school` or `alpha.school` page was loaded. Every derived number below is computed in-line from a fetched value and marked **derived**; nothing is quoted from memory |
| Relation to `kb/K1` | K1 fixed the grid, the proximity ladder and a 390×664 fold budget of 655px. K10 tests that budget against *measured* small-viewport heights and finds it fails on two devices in the matrix (K10-F27). K1's ids are cited, not re-derived |
| Relation to `kb/K2` | K2 fixed the fluid **type** ramp (360→1440, flat outside). K10 pairs a fluid **space** ramp to the same endpoints and resolves the h1 conflict between K1 and K2 (K10-F33) |
| Caution | StatCounter measures **screen resolution**; Playwright device descriptors record **viewport size**. The current matrix in `17` section 4 mixes the two. Section 5a separates them and labels every row |
| Status | Draft 2026-09-11, Fable. Astra E4 reviewed 2026-09-11 (verdict: Rework, `ensemble/E4-knowledge-base.md`); reworked 2026-09-11 per `kb/KB-RESOLUTIONS.md` — see the "Rework log (E4)" section at the end of this file |

---

## 1. Question

1. What is the real distribution of viewport sizes today, in the US and for a mobile-heavy audience?
2. What can "fits the first screen" mean once mobile browser chrome is admitted — `svh`, `lvh`, `dvh`, the address bar, and the Instagram, Facebook and TikTok webviews?
3. Are container queries, fluid space and fluid type safe to ship in production now?
4. What do the "Every Layout" primitives and intrinsic design offer a two-door routing page?
5. How do you compose a first screen against **height** as well as width?
6. What is the testing practice — Playwright device descriptors, device pixel ratio, reduced motion, forced colors?
7. How do leading sites handle 1280×720 laptops and 1920×1080 desktops without an empty or an overflowing first screen?

---

## 2. Findings

### 2a. What sizes people actually have

| # | Finding | Source |
|---|---|---|
| K10-F1 | US, all platforms, **August 2026**: `1920x1080` **16.95%**, `414x896` **9.07%**, `390x844` **5.08%**, `800x600` **4.22%**, `384x832` **4.12%**, `1536x864` **3.12%**. Only the top six are published on the page | StatCounter GlobalStats, *Screen Resolution Stats in United States Of America*, Aug 2026, https://gs.statcounter.com/screen-resolution-stats/all/united-states-of-america |
| K10-F2 | US **mobile only**, Aug 2026: `414x896` **21.26%**, `390x844` **11.95%**, `393x852` **5.55%**, `402x874` **4.99%**, `384x832` **4.87%**, `360x780` **3.72%** | StatCounter, *Mobile Screen Resolution Stats, United States*, Aug 2026, https://gs.statcounter.com/screen-resolution-stats/mobile/united-states-of-america |
| K10-F3 | US **desktop only**, Aug 2026: `1920x1080` **30.63%**, `800x600` **7.57%**, `1536x864` **5.64%**, `1280x720` **4.04%**, `1366x768` **4.00%**, `384x832` **3.71%**. The `800x600` and `384x832` rows in a *desktop* table are almost certainly mis-classified or synthetic traffic; they are noted and **not used as evidence** | StatCounter, *Desktop Screen Resolution Stats, United States*, Aug 2026, https://gs.statcounter.com/screen-resolution-stats/desktop/united-states-of-america |
| K10-F4 | US platform split, Aug 2026: **desktop 55.65%, mobile 42.21%, tablet 2.14%**. GT's own GA4 says two thirds of *its* sessions are mobile (fact 5). The market average is desktop-leaning; GT's audience is not. Design to GT's measurement, but do not treat 1280–1920 as an afterthought | StatCounter, *Desktop vs Mobile vs Tablet Market Share, United States*, Aug 2026, https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/united-states-of-america |
| K10-F5 | Device CSS-pixel sizes behind those numbers: `414x896` = iPhone XR / 11 / 11 Pro Max; `390x844` = iPhone 12/13/14/16e; `393x852` = iPhone 14 Pro/15/15 Pro/16; `402x874` = iPhone 16 Pro/17/17 Pro; `430x932` = 15/16 Plus and Pro Max; `360x780` = iPhone 12/13 mini. `375x667` = iPhone SE (2nd/3rd) | yesviz.com, *Viewport Size for iPhone*, https://yesviz.com/iphones.php ; screensize.net, *iPhone Viewport Sizes*, https://screensize.net/iphone-viewport-sizes |
| K10-F6 | Current iPhone width groups, from the same reference: **375, 390, 393, 402, 420, 430, 440**. `440x956` (16/17 Pro Max) and `420x912` (iPhone Air) are newer than anything in `17` section 4 | screensize.net, as above |
| K10-F7 | Android window size classes, with the share of devices each covers: **compact width < 600dp (99.96% of phones in portrait)**; medium 600–839dp (93.73% of tablets in portrait); expanded 840–1199dp (97.22% of tablets in landscape); large 1200–1599dp; extra-large ≥ 1600dp. **Height** classes: compact < 480dp (**99.78% of phones in landscape**); medium 480–899dp (**97.59% of phones in portrait**, 96.56% of tablets in landscape); expanded ≥ 900dp (94.25% of tablets in portrait) | Android Developers, *Window size classes*, https://developer.android.com/develop/ui/compose/layouts/adaptive/window-size-classes |
| K10-F8 | Most-used author breakpoints measured across real sites: `max-width: 767px` on **51%** of pages and `min-width: 768px` on **57%** — the iPad-portrait pair, still the single dominant breakpoint on the web | Rachel Andrew, *CSS*, HTTP Archive Web Almanac 2022, 26 Sep 2022, https://almanac.httparchive.org/en/2022/css |
| K10-F9 | A tool vendor's own telemetry of breakpoints its users tested: 2021 top ten was 320 (5.48%), 1280 (4.49%), 768 (3.41%), 1920 (2.41%), 500, 568, 800, 375, 1024, 1440; 2022 kept the same order at lower absolute shares. The recommended device-based set is **375 / 768 / 1280 / 1920** | Polypane, *The breakpoints we tested in 2021 & 2022, and the ones to test in 2023*, 19 Jan 2022 (upd. 28 Sep 2022), https://polypane.app/blog/the-breakpoints-we-tested-in-2021-and-the-ones-to-test-in-2022/ |
| K10-F10 | 88% of the top 1,000 sites get more traffic from mobile than desktop; **40% of top-1,000 mobile sites disabled zooming and scaling** (down from 45% in 2021) | Cindy Krum, *Mobile Web*, Web Almanac 2022, 26 Sep 2022, https://almanac.httparchive.org/en/2022/mobile-web |

### 2b. Browser chrome, and what "the screen" really is

| # | Finding | Source |
|---|---|---|
| K10-F11 | Spec definitions. **Large viewport**: "the viewport sized assuming any UA interfaces that are dynamically expanded and retracted to be **retracted**". **Small viewport**: "…to be **expanded**". **Dynamic viewport**: "sized with dynamic consideration of any UA interfaces". The spec adds that the small and large sizes "remain stable unless the viewport itself changes", while "the sizes of the dynamic viewport-percentage units are **not stable** even while the viewport itself is unchanged" | W3C, *CSS Values and Units Module Level 4*, §viewport-variants, https://www.w3.org/TR/css-values-4/#viewport-variants |
| K10-F12 | **`vh` is `lvh`.** MDN: "`vh` is equivalent to `lvh`, representing the viewport-percentage length unit based on the large viewport size." So `100vh` is, by definition, the height *with the browser bars gone* — which is why `100vh` overflows on load | MDN, *`<length>`*, https://developer.mozilla.org/en-US/docs/Web/CSS/length |
| K10-F13 | MDN's warning on `dvh`: "using viewport-percentage units based on the dynamic viewport size can cause the content to resize while a user is scrolling a page. This can lead to degradation of the user interface and cause a performance hit." Bramus adds: "The values for the dynamic viewport do not update at 60fps. In all browsers updating is throttled as the UA UI expands or retracts" | MDN as above; Bramus Van Damme, *The large, small, and dynamic viewport units*, web.dev, 29 Nov 2022, https://web.dev/blog/viewport-units |
| K10-F14 | Shadeed's rule for heroes is `svh`, not `vh` or `dvh`: `min-height: calc(100svh - var(--header-height))`, with the caveat that "the dynamic viewport unit might impact the performance of the page, as it will be a lot of work for the browser to recalculate the styles which the user is scrolling" | Ahmad Shadeed, *New Viewport Units*, 8 Jul 2023, https://ishadeed.com/article/new-viewport-units/ |
| K10-F15 | The underlying mechanism, from the Chrome engineer who implemented it: "Lengths defined in viewport units (i.e. `vh`) will **not** resize in response to the URL bar being shown or hidden", because `vh` is computed from the largest possible viewport while the Initial Containing Block is sized to the smallest. One exception: "a `position: fixed` element whose containing block is the ICB **will** resize" | David Bokan, *URL Bar Resizing*, Chrome Developers, 16 Dec 2016, https://developer.chrome.com/blog/url-bar-resizing |
| K10-F16 | Support: the small/large/dynamic viewport variants are at **94.97%** global, from Safari iOS 15.4, Firefox 101, Samsung Internet 21, Chrome/Edge 108 | caniuse, *Small, Large, and Dynamic viewport units*, https://caniuse.com/viewport-unit-variants ; versions cross-checked against web.dev (K10-F13) |
| K10-F17 | **Measured browser chrome.** Playwright's device registry records the *visible viewport*, not the screen. Subtracting it from the device CSS height gives the chrome each browser takes (derived from K10-F5 and K10-F18): iPhone 13/14 844→**664 = 180px (21.3%)**; iPhone 15/15 Pro 852→**659 = 193px (22.7%)**; iPhone 15 Plus 932→**739 = 193px**; iPhone 14 Pro Max 932→**740 = 192px**; iPhone 12/13 mini 812→**629 = 183px (22.5%)**; iPhone 11 896→**715 = 181px**; Pixel 5 851→**727 = 124px**; Pixel 7 915→**839 = 76px (8.3%)**; Galaxy S8 800→**740 = 60px (7.5%)** | Derived. Viewports from K10-F18; device heights from K10-F5 |
| K10-F18 | Playwright's descriptors, verbatim (release-1.55): `iPhone 13` 390×664 dpr 3; `iPhone 13 Mini` 375×629 dpr 3; `iPhone 14 Pro` 393×660; `iPhone 15` / `iPhone 15 Pro` 393×659; `iPhone 15 Plus` 430×739; `iPhone 11` 414×715 dpr 2; `iPhone SE (3rd gen)` 375×667 dpr 2; `Pixel 7` 412×839 dpr 2.625; `Galaxy S8` 360×740 dpr 3; `iPad (gen 5)` 768×1024 dpr 2; `iPad Pro 11` 834×1194 dpr 2; `iPhone 13 landscape` **750×342**; `iPad (gen 5) landscape` 1024×768; and **`Desktop Chrome` 1280×720 dpr 1**, `Desktop Chrome HiDPI` 1280×720 dpr 2, `Desktop Safari` 1280×720 dpr 2. 143 descriptors in total | Microsoft Playwright, `packages/playwright-core/src/server/deviceDescriptorsSource.json`, branch `release-1.55`, https://raw.githubusercontent.com/microsoft/playwright/release-1.55/packages/playwright-core/src/server/deviceDescriptorsSource.json |
| K10-F19 | Some legacy descriptors were never chrome-corrected — `iPhone XR` is listed as 414×896 (the full screen) with dpr 3 where the real device is dpr 2. Treat entries for devices older than the iPhone 11 as unverified | Same file; cross-checked against K10-F5 |
| K10-F20 | **iOS costs roughly three times what Android costs.** 180–193px on modern iPhones against 60–124px on Pixel and Galaxy (K10-F17). The binding case for a fold budget is always an iPhone | Derived from K10-F17 |
| K10-F21 | Safe-area insets, portrait, in points: iPhone 16 Pro Max top **62** bottom **34**; 16 Plus top **59** bottom 34; 16 Pro top 62 bottom 34; iPhone 16 top 59 bottom 34 | Keith Harrison, *iPhone 16 Screen Sizes*, useyourloaf.com, 16 Sep 2024, https://useyourloaf.com/blog/iphone-16-screen-sizes/ |
| K10-F22 | `env(safe-area-inset-*)` is "the safe distance from the top, right, bottom, or left inset edge of the viewport… The values are `0` if the viewport is a rectangle **and no features — such as toolbars or dynamic keyboards — are occupying viewport space**". `viewport-fit=cover` scales the viewport to fill the display and is the mode in which those insets become non-zero | MDN, *env()*, https://developer.mozilla.org/en-US/docs/Web/CSS/env ; MDN, *viewport meta element*, https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Viewport_meta_element |
| K10-F23 | The keyboard is a viewport event too. `interactive-widget` takes `resizes-visual` (default), `resizes-content`, `overlays-content`; `env(keyboard-inset-*)` exposes the on-screen keyboard's geometry | MDN, *viewport meta element*, as above |
| K10-F24 | **No published measurement of Instagram, Facebook or TikTok webview chrome exists.** Six fetches across vendor blogs, a GitHub issue and two in-app-browser reference sites returned user-agent tokens (`Instagram`, `FBAN/FBIOS`, `FB_IAB/FB4A`, `musical_ly`, `BytedanceWebview`, the Android `; wv)` marker) and prose about "100vh lying", but not one pixel value. The closest published figure is a general "hero sections overflow by **56–80px** on initial load" | Karan Bhakuni, *Instagram In-App Browser*, flyn.to, 6 Aug 2026, https://www.flyn.to/blog/instagram-in-app-browser ; useragent.in, *In-app browser user agents*, https://useragent.in/in-app-browser-user-agents ; OpenReplay Team, *When 100vh Lies*, 5 Mar 2026, https://blog.openreplay.com/fix-100vh-mobile-viewport/ |
| K10-F25 | **Derived floor, plus Judgment beyond it.** An iOS webview cannot lose less than its safe areas: 59–62 + 34 = **93–96px** (K10-F21) — that much is arithmetic, and it sits comfortably inside Safari's measured **180–193px** (K10-F17), so Safari's number is at minimum not an under-estimate. Beyond that floor, two further claims are **Judgment**, not established by the safe-area figures: that "Instagram and Facebook draw the same number of bars Safari draws," and that the small-viewport heights in K10-F18 are "a sound proxy ± about 15px." No source measures the three apps' chrome directly (K10-F24), so neither claim is more than a plausible inference. TikTok's webview has no bottom toolbar and should therefore cost *less*, not more, on the same inferential basis. Conclusion, restated as judgment rather than derivation: on current evidence there is no *measured* separate in-app height class, only the small and large viewport rows already in the matrix — but that is the hypothesis REQ-024 tests, not a proven equivalence. See OQ-1 | K10-F17, F21, F24 (arithmetic); the "same bars"/"±15px" claims are Judgment, unsupported by any of the three |
| K10-F26 | The in-app differences the fetched sources actually document are not about height: stripped referrers, a non-Safari user agent, no shared cookie jar, and app-handoff blocking. Those belong to K8, not to the viewport matrix — this documents what the sources cover, not proof that a height difference is absent (K10-F25) | flyn.to (K10-F24); useragent.in (K10-F24) |
| K10-F27 | **K1's fold budget fails on measured heights.** K1 section 5b budgets 655px for the fold set at 390. Against K10-F18: iPhone 13/14 664 → **9px headroom**; iPhone 15/16 659 → **4px**; iPhone SE 3 667 → 12px; iPhone 12/13 mini **629 → −26px, it does not fit**, and the mini is 375px wide so the h1 takes *more* lines, not fewer. Galaxy S8 740 → 85px; Pixel 7 839 → 184px | Derived from K1 §5b and K10-F18 |

### 2c. Container queries, fluid type and fluid space in production

| # | Finding | Source |
|---|---|---|
| K10-F28 | Container queries are at **94.79% + 0.08% = 94.87%** global support, from Chrome 106, Safari 16.0, Safari iOS 16.0, Firefox 110, Samsung Internet 20 | caniuse, *CSS Container Queries*, https://caniuse.com/css-container-queries |
| K10-F29 | `container-type` values and their cost: `size` queries both axes and "applies layout, style, and **size** containment"; `inline-size` queries the inline axis and applies "layout, style, and **inline-size** containment"; `normal` is the default. Layout containment makes the element a containing block for absolutely positioned descendants | MDN, *CSS container queries*, https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries |
| K10-F30 | Container query units: `cqw`, `cqh`, `cqi`, `cqb`, `cqmin`, `cqmax`. And the graceful part: "**If no eligible container is available… the container query length unit defaults to the small viewport unit (`sv*`) for that axis**" — `cqi` falls back to `svi` | MDN, as above |
| K10-F31 | The current guidance on which to use: "CSS works best when the relationships established in code match the goals and purpose of the design"; container queries for components that must adapt to their immediate context, media queries "for consistent sizing relative to the overall viewport"; "Most websites will likely involve a mix of both" | Miriam Suzanne, *Container queries and units in action*, web.dev, 23 Oct 2025, https://web.dev/articles/baseline-in-action-container-queries |
| K10-F32 | Fluid scales are generated between two viewport endpoints, not at breakpoints: "Breakpoint-based type sizing has always felt a bit arbitrary… equal parts guesswork and compromise". Utopia's own default space ramp is **360px → 1240px**, base space **18px → 20px**, with t-shirt steps 3xs…3xl as multipliers of the base (`m` = 1.5×, `l` = 2×) and "one-up pairs" for the space *between* steps, e.g. `s…m` = `clamp(1.125rem, 0.8182rem + 1.3636vw, 1.875rem)` | James Gilyead, *Designing with fluid type scales*, utopia.fyi, 1 Feb 2020, https://utopia.fyi/blog/designing-with-fluid-type-scales/ ; Utopia, *Fluid space calculator*, https://utopia.fyi/space/calculator/ |
| K10-F33 | The interpolation runs between **two ratios**, not one: 1.2 at the small viewport and 1.33 at the large. K2's GT ramp does the same thing with 1.11 and 1.20 | Trys Mudford, *CSS Modular Scales*, utopia.fyi, 2 Feb 2020, https://utopia.fyi/blog/css-modular-scales/ |
| K10-F34 | `clamp(MIN, VAL, MAX)` "is resolved as `max(MIN, min(VAL, MAX))`". MDN's accessibility note: the maximum "is a relative length unit that is **no less than twice the minimum**… This ensures that text size can scale to at least 200% if the page is zoomed" | MDN, *clamp()*, https://developer.mozilla.org/en-US/docs/Web/CSS/clamp |
| K10-F35 | The same warning, sharper: "Limiting maximum font sizes using `max()` or `clamp()` **can cause a WCAG failure under 1.4.4 Resize text (AA)**, because it might prevent users from scaling text to 200% of its original size." Kravets also gives the measure pattern `width: clamp(45ch, 50%, 75ch)` | Una Kravets, *min(), max(), and clamp()*, web.dev, upd. 14 Oct 2020, https://web.dev/articles/min-max-clamp |
| K10-F36 | Roselli's underlying case: with `vw` in the font size, "at 200% zoom with responsive type: text increases only ~6–25%" and at 300% it reaches about 150% rather than 200%. Remedy: prefer `rem` in the calculation, and if using `clamp()` make the maximum at least double the minimum. He cites WCAG technique **F94**, "Failure of Success Criterion 1.4.4 due to incorrect use of viewport units to resize text" | Adrian Roselli, *Responsive Type and Zoom*, 6 Dec 2019 (upd. 20 Oct 2025), https://adrianroselli.com/2019/12/responsive-type-and-zoom.html |
| K10-F37 | SC **1.4.4 Resize Text (AA)**: "Except for captions and images of text, text can be resized without assistive technology up to 200 percent without loss of content or functionality." SC **1.4.10 Reflow (AA)**: content without loss and without two-dimensional scrolling at "a width equivalent to **320 CSS pixels**" and "a height equivalent to **256 CSS pixels**"; the document states "320 CSS pixels is equivalent to a starting viewport width of 1280 CSS pixels wide at 400% zoom" and 256 to 1024 at 400% | W3C WAI, *Understanding SC 1.4.4*, https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html ; *Understanding SC 1.4.10*, https://www.w3.org/WAI/WCAG22/Understanding/reflow.html |
| K10-F38 | **K2's zoom arithmetic, cited here rather than independently recomputed.** K10 originally re-derived this figure by a different mechanism — halving the CSS viewport width to model page zoom — which happened to reproduce the same 195.5% shortfall K2's own arithmetic had before Astra's E4 finding. Matching K2's method and figure instead: K2 §5f models 200% as **doubling the root font size** (a stand-in for a larger-text accessibility setting, not real browser page zoom, which shrinks the effective viewport and is a different, still-untested mechanism). For `--text-base` = `clamp(1rem, 0.9583rem + 0.1852vw, 1.125rem)` at 390 CSS px: the 100% preferred value is 0.9583rem×16px + 0.1852vw×3.90px/vw = 15.333 + 0.722 = **16.055px**. Doubling the root font size doubles every `rem`-anchored term — the min bound (32px), the max bound (36px), and the preferred value's rem term (30.666px) — but leaves the `vw` term unchanged, since the viewport did not move: preferred(200%) = 30.666 + 0.722 = **31.388px**, which falls *below* the doubled 32px minimum, so `clamp()` floors at **32px**. Ratio = 32 / 16.055 = **199.3%**, not 195.5%. Full working and the per-token table (196.2% to 199.7% across every fluid step): K2 §5f and `0_plan/kb/measurements/K2/output.md` | K2 §5f (`0_plan/kb/K2-typography.md`); `0_plan/kb/measurements/K2/` |
| K10-F39 | `text-wrap: balance` "is only supported for blocks of text spanning a limited number of lines (**six or less for Chromium** and ten or less for Firefox)". `text-wrap: pretty` "has a negative effect on performance" and is for body copy | MDN, *text-wrap-style*, https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap-style |

### 2d. Primitives, intrinsic design, and composing against height

| # | Finding | Source |
|---|---|---|
| K10-F40 | The axiom behind Every Layout: "Even the most complex geometries are founded on simple, irreducible axioms… Unless your design is founded on axioms, your output will be inconsistent and malformed", and "designing for the web is designing without seeing". On units: there is "no relationship between character length and pixel width", so `ch` is the measure unit | Heydon Pickering & Andy Bell, *Every Layout — Axioms*, https://every-layout.dev/rudiments/axioms/ |
| K10-F41 | The thirteen primitives: **The Stack, The Box, The Center, The Cluster, The Sidebar, The Switcher, The Cover, The Grid, The Frame, The Reel, The Imposter, The Icon, The Container.** The Stack, The Sidebar and The Switcher are readable free; the rest are paywalled and are **not cited here** | Every Layout, *Layouts*, https://every-layout.dev/layouts/ |
| K10-F42 | **The Stack.** "Flow elements require space… to physically and conceptually separate them from the elements that come before and after them", solved with the owl selector `.stack > * + * { margin-block-start: 1.5rem; }` so no last child carries a redundant margin; the value normally matches body line-height, and dropping the child combinator makes it recursive | Every Layout, *The Stack*, https://every-layout.dev/layouts/stack/ |
| K10-F43 | **The Sidebar.** `flex-basis` on the sidebar, `flex-grow: 999` on the content, `min-inline-size: 50%` on the content to force the wrap. "Media queries based on viewport width fail because they don't account for actual available container space" | Every Layout, *The Sidebar*, https://every-layout.dev/layouts/sidebar/ |
| K10-F44 | **The Switcher.** For two or three items that must go from one row straight to one column with no intermediate state: `flex-basis: calc((var(--threshold) - 100%) * 999)`, which resolves to a huge positive number (wrap) or a huge negative one (don't). The authors call the result a "quantum layout" and argue it lets "the browser make the right decision for the content, and the user, reading that content, given their circumstances" | Every Layout, *The Switcher*, https://every-layout.dev/layouts/switcher/ |
| K10-F45 | Jen Simmons's six characteristics of **intrinsic web design**, as recorded from the talk: "fluid **and** fixed"; "stages of squishiness" (fixed → `fr` → `minmax()` → `auto`); "truly two-dimensional layouts"; "nested contexts" (flow, flex, grid and multicol together); "expand and contract content"; and "**media queries, as needed**" | Jeremy Keith, *Everything You Know About Web Design Just Changed, by Jen Simmons*, adactio.com, 3 Apr 2018, https://adactio.com/journal/13671 |
| K10-F46 | The same posture stated as a rule of practice: "Creating type scales that respond to the viewport, rather than setting explicit values… allows you to set rules once and forget about them"; "be the browser's mentor, not its micromanager" | Andy Bell, *Be the browser's mentor, not its micromanager*, Set Studio, 2022, https://buildexcellentwebsit.es/ |
| K10-F47 | The breakpoint-free grid: `grid-template-columns: repeat(auto-fill, minmax(15em, 1fr))`. Writing media queries at 30em, 45em and 60em for the same card layout is "quite tedious and difficult to maintain" | web.dev Learn Responsive Design, *Macro layouts*, upd. 3 Nov 2021, https://web.dev/learn/design/macro-layouts |
| K10-F48 | Height is a first-class query. "Using `min-height` you can introduce more rules as more viewport height becomes available", with the worked case of a header "you want to anchor to the top of the browser window if there's enough vertical space" at `@media (min-height: 30em)`. `orientation: landscape` also matches "a full-screen browser window on a typical laptop" | web.dev Learn Responsive Design, *Media features*, upd. 23 Aug 2025, https://web.dev/learn/design/media-features |
| K10-F49 | The `height` media feature "can be used to apply styles based on the height of the viewport"; it is a range feature with `min-height` / `max-height` variants | MDN, *@media height*, https://developer.mozilla.org/en-US/docs/Web/CSS/@media/height |
| K10-F50 | Content, not devices, sets breakpoints: "Don't define breakpoints based on device classes, or any product, brand name, or operating system… let the content determine how its layout changes to fit the container." The same page gives the reading rule — "an ideal column should contain 70 to 80 characters per line" — and the meta tag `width=device-width, initial-scale=1` | Pete LePage & Rachel Andrew, *Responsive web design basics*, web.dev, upd. 12 Feb 2019, https://web.dev/articles/responsive-web-design-basics |
| K10-F51 | Guidance against fixed breakpoint values entirely: detect breakpoints from content, design mobile-first with `min-width` so CSS stays additive, and prefer `em` over `px` in height queries "because they scale properly when users zoom" | Polypane, *The complete guide to CSS media queries*, upd. 19 Jun 2026, https://polypane.app/blog/the-complete-guide-to-css-media-queries/ |
| K10-F52 | Beyond rectangles: `horizontal-viewport-segments` / `vertical-viewport-segments` detect a folding device, and "environment variables in CSS allow you to factor awkward device intrusions into your styles" | web.dev Learn Responsive Design, *Screen configurations*, upd. 23 Dec 2021, https://web.dev/learn/design/screen-configurations |

### 2e. What leading sites and design systems do at 1280 and at 1920

| # | Finding | Source |
|---|---|---|
| K10-F53 | **GOV.UK caps hard and low.** "The default maximum page width is **1020px**, but you can make it wider if your content requires it", with the layout rule "use either a 'two-thirds' or a 'two-thirds and one-third' layout. That stops lines of text getting so long that the page becomes difficult to read on desktop devices. This would usually mean **no more than 75 characters per line**" | GOV.UK Design System, *Layout*, https://design-system.service.gov.uk/styles/layout/ |
| K10-F54 | **USWDS** caps its grid container at the `desktop` breakpoint, **1024px**, over a 12-column system; breakpoints are `mobile` 320, `mobile-lg` 480, `tablet` 640, `tablet-lg` 880, `desktop` 1024, `desktop-lg` 1200, `widescreen` 1400 | U.S. Web Design System, *Layout grid*, https://designsystem.digital.gov/utilities/layout-grid/ |
| K10-F55 | **Carbon** runs to 1584 but changes only margins above 1056: breakpoints **Small 320/20rem (4 cols, margin 0)**, **Medium 672/42rem (8 cols, margin 16px)**, **Large 1056/66rem (16 cols, margin 16px)**, **X-Large 1312/82rem (16 cols, margin 16px)**, **Max 1584/99rem (16 cols, margin 24px)**; padding is always 16px; "the basic unit of 2x Grid geometry is the **8-pixel square mini unit**" | IBM Carbon Design System, *2x Grid — Overview*, https://carbondesignsystem.com/elements/2x-grid/overview/ |
| K10-F56 | **Bootstrap 5.3** stops at `xxl` ≥ **1400px**; **Tailwind** stops at `2xl` = 96rem/**1536px**, and its container-query sizes run 16rem to 80rem. Neither ships a breakpoint above 1536 | Bootstrap, *Breakpoints*, https://getbootstrap.com/docs/5.3/layout/breakpoints/ ; Tailwind CSS, *Responsive design*, https://tailwindcss.com/docs/responsive-design |
| K10-F57 | Every one of those five systems does the same thing at 1920: **cap the content, let the surface run full-bleed.** None grows the reading column past ~1024–1584px. GT's own `--container-max` of 90rem/1440px is inside that band | Synthesis of K10-F53 to F56 |
| K10-F58 | What has to be above the fold, measured: "the 100 pixels just above the fold were **viewed 102% more** than the 100 pixels just below"; ads just above the fold reached **73%** viewability against **44%** below; "**84% is the average difference in how users treat info above vs. below the fold**". The top of the page should carry "signposts" and avoid a "false floor" | Amy Schade, *The Fold Manifesto*, Nielsen Norman Group, 1 Feb 2015, https://www.nngroup.com/articles/page-fold-manifesto/ |
| K10-F59 | The pre-`svh` era's workaround, still found in production code: `let vh = window.innerHeight * 0.01; document.documentElement.style.setProperty('--vh', vh + 'px')` then `height: calc(var(--vh, 1vh) * 100)`. It costs a script, a reflow on every resize and a layout shift on orientation change. Obsolete since K10-F16 | Louis Hoebregts, *The trick to viewport units on mobile*, CSS-Tricks, 31 Jul 2018, https://css-tricks.com/the-trick-to-viewport-units-on-mobile/ |

### 2f. Testing practice

| # | Finding | Source |
|---|---|---|
| K10-F60 | Playwright's emulation surface, with exact accepted values: `reducedMotion` = `'reduce' | 'no-preference' | null`; `forcedColors` = `'active' | 'none' | null`; `colorScheme` = `'light' | 'dark' | 'no-preference' | null`; `contrast` = `'no-preference' | 'more' | null`; `deviceScaleFactor` number, default **1**; `viewport` default **1280×720**; `isMobile` boolean default false; `hasTouch` boolean default false | Playwright, *TestOptions*, https://playwright.dev/docs/api/class-testoptions |
| K10-F61 | `isMobile` is not cosmetic: it determines "whether the **meta viewport tag is taken into account** and touch events are enabled". A 390-wide desktop context is therefore **not** the same page a phone gets | Playwright, *Emulation*, https://playwright.dev/docs/emulation |
| K10-F62 | Visual comparison is `await expect(page).toHaveScreenshot()`, with `maxDiffPixels`, a `stylePath` option that applies a custom stylesheet while the screenshot is taken, and snapshot names that carry browser and platform (`example-test-1-chromium-darwin.png`) "due to different rendering, fonts and more" | Playwright, *Visual comparisons*, https://playwright.dev/docs/test-snapshots |
| K10-F63 | `forced-colors: active` forces `background-image` to `none` for non-URL values, `box-shadow` and `text-shadow` to `none`, `color-scheme` to `light dark`, and draws "backplates" behind text over images. `prefers-reduced-motion: reduce` means **tone down, not remove**: MDN's own example replaces a pulse with a dissolve rather than deleting the animation | MDN, *forced-colors*, https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors ; MDN, *prefers-reduced-motion*, https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion |
| K10-F64 | Field baseline for the two features GT must get right: **28% of mobile home pages and 23% of desktop home pages attempt to disable zoom** (40% among the top 1,000 mobile), and **34% of sites use `prefers-reduced-motion`** | Saptak Sengupta, Thibaud Colas & Scott Davis, *Accessibility*, Web Almanac 2022, 26 Sep 2022, https://almanac.httparchive.org/en/2022/accessibility |

---

## 3. Principles the studio adopts

| # | Principle | Traces to |
|---|---|---|
| K10-P1 | **The matrix holds viewports, never screens.** Every row states which it is and where the number came from. A phone row is a measured *small* viewport; a desktop row is a viewport, and the screen it implies is written beside it | K10-F1–F3, F17, F18 |
| K10-P2 | **Fold fit is defined on `100svh`, with headroom.** Sizing is `min-block-size: 100svh`; `100vh` is banned because `vh` *is* `lvh`; `dvh` is allowed only for decoration that may resize mid-scroll | K10-F11, F12, F13, F14, F15 |
| K10-P3 | **The small/large viewport rows are the matrix's stress stand-in for in-app browsers, not proof no separate class exists.** No source measures Instagram, Facebook or TikTok chrome directly (K10-F24); that their chrome matches Safari's band is Judgment, not derivation (K10-F25). Per runbook `17` §4 and DD-44, V2 to V8 with 24px headroom stand in **until REQ-024 measures all three apps on iOS and Android** (device, app version, toolbar state recorded) — a requirement this principle does not narrow | K10-F24, F25 (Judgment), F26; `17` §4; DD-44; MN-15; REQ-024 |
| K10-P4 | **Height is a query, not an accident.** Every first screen carries at least one `max-height` rule, and the band edges are 480px and 900px because those are the measured Android height classes | K10-F7, F48, F49 |
| K10-P5 | **Component switching belongs to the container, not the viewport.** The doors and the comparison table switch on their own inline size, so they survive being moved into a narrower column later | K10-F28, F29, F30, F31, F43, F44 |
| K10-P6 | **Fluid, between two endpoints, flat outside them.** Type and space share the 360→1440 ramp; above 1440 both hold and only the margins grow. One ramp, two scales | K10-F32, F33, F57, K2 §5a |
| K10-P7 | **The `rem` term carries the scale; the `vw` term only tilts it.** Every clamp is `Arem + Bvw` and is verified by an actual zoom run, because the "max ≥ 2× min" rule of thumb is written for pure-`vw` preferred values and does not by itself prove compliance | K10-F34, F35, F36, F37, F38 |
| K10-P8 | **Cap the column, spend the surplus on margin.** At 1920 the content box is identical to 1440's and the extra width is margin. Nothing is invented to fill a big screen | K10-F53, F54, F55, F56, F57 |
| K10-P9 | **Stages of squishiness before breakpoints.** `minmax()`, `fr`, `auto`, `ch` and the Switcher threshold first; a media query only where the browser genuinely cannot decide | K10-F40, F44, F45, F46, F47, F50 |
| K10-P10 | **Emulation is part of the viewport.** A phone row without `isMobile`, `hasTouch` and a real `deviceScaleFactor` is not a phone; a mock is not verified until it has also been rendered with `reducedMotion: 'reduce'` and `forcedColors: 'active'` | K10-F60, F61, F62, F63 |

---

## 4. Anti-patterns

| # | Anti-pattern | Why, and where it shows |
|---|---|---|
| K10-A1 | `height: 100vh` or `min-height: 100vh` on a first screen | `vh` equals `lvh` by definition, so the last 180–193px of an iPhone first screen is under the browser bars on load (K10-F12, F17). This is the exact defect `17` section 1 records as "pages do not fit the screen" |
| K10-A2 | Swapping `100vh` for `100dvh` as the fix | The value is unstable by spec, throttled below 60fps, and moves the layout while the reader scrolls (K10-F11, F13). It turns a clipping bug into a jitter bug |
| K10-A3 | The `--vh` JavaScript trick | A script, a resize listener and a shift on rotate, for something `svh` does in CSS at 94.97% support (K10-F16, F59). It also violates the repo's dependency-free rule |
| K10-A4 | Treating `390x844` as a phone viewport | It is a *screen*. No iPhone browser ever presents 844px of viewport on load; Safari gives 664 (K10-F17, F18). Every fold budget written against 844 is wrong by 180px |
| K10-A5 | A separate "in-app browser" row invented from a guess | `17` section 4 currently asserts webviews "take 150 to 180px" with no source. The number happens to be close, but it is Safari's number, and the row it creates duplicates the small-viewport row it should have been (K10-F24, F25) |
| K10-A6 | Fixed `rem` heights on sections, tuned at one or two sizes | The root cause `17` section 1 names. A section's height must come from its content plus fluid padding, never from a number typed at 1440 |
| K10-A7 | `container-type: size` on the first-screen wrapper | Size containment makes the element stop taking its block size from its content, which is precisely what a `100svh` first screen must keep doing (K10-F29) |
| K10-A8 | Font sizes in pure `vw`, or `clamp()` with a `vw`-only preferred value | Zoom stops working: about 6–25% growth at 200% instead of 200% (K10-F36), and WCAG technique F94 names it as a failure |
| K10-A9 | `user-scalable=no` or `maximum-scale=1` | 28% of mobile home pages do it and it is a plain 1.4.4 failure (K10-F64, F37). iOS has ignored it since iOS 10, so it breaks Android users only |
| K10-A10 | `text-wrap: balance` on anything that may exceed six lines | Chromium silently stops balancing past six lines (K10-F39). K1 budgets the h1 at up to five lines at 390 and K2 at up to six — the rule is at its limit, so balance must be treated as an enhancement that may not fire |
| K10-A11 | Growing type or the reading column past 1440 to "fill" a desktop | No major design system does it; GOV.UK caps at 1020 and states the 75-character reason (K10-F53, F57). Growth past the cap produces a 120-character line, which is a legibility regression sold as a layout improvement |
| K10-A12 | Screenshots at `deviceScaleFactor: 1` used to judge craft | Playwright's default is 1 (K10-F60) while every modern iPhone is 3. Hairlines, focus rings and text rendering all differ; a 1× capture cannot support a Craft score |
| K10-A13 | Testing "200% text zoom" by halving the viewport | Page zoom and text zoom are different mechanisms. Page zoom at 200% on a 390 device is a 195 CSS px viewport, which is below WCAG's 320px reflow floor (K10-F37) and tests nothing anyone experiences. Text zoom is emulated by raising the root font size, not by resizing |

---

## 5. How it applies to GT

### 5a. The final viewport matrix

Every row is a **viewport in CSS pixels**. Phone rows are measured small viewports (browser bars expanded), which is the state a page loads in. `R` = required for every mock; `E` = extended, run on the survivors and before G1.

| # | Viewport | Class | dpr | Emulation | Source for this size |
|---|---|---|---|---|---|
| V1 | **360 × 740** | Phone R | 3 | mobile, touch | Playwright `Galaxy S8` (K10-F18). Narrowest common width; StatCounter `360x780` = 3.72% of US mobile (K10-F2) |
| V2 | **375 × 629** | Phone R | 3 | mobile, touch | Playwright `iPhone 13 Mini` (K10-F18). **The binding fold case** — the shortest modern iPhone viewport (K10-F27) |
| V3 | **390 × 664** | Phone R | 3 | mobile, touch | Playwright `iPhone 13` / `iPhone 14` (K10-F18). Device `390x844` = 11.95% of US mobile (K10-F2). This replaces the matrix's "390 × 844" **and** its "in-app 390 × 664" rows |
| V4 | **393 × 659** | Phone R | 3 | mobile, touch | Playwright `iPhone 15` / `15 Pro` (K10-F18). Device `393x852` = 5.55% (K10-F2) |
| V5 | **414 × 715** | Phone R | 2 | mobile, touch | Playwright `iPhone 11` (K10-F18). Device `414x896` is **the single most common US mobile resolution at 21.26%** (K10-F2) and is absent from the current matrix |
| V6 | **412 × 839** | Phone R | 2.625 | mobile, touch | Playwright `Pixel 7` (K10-F18). The roomiest common phone; proves the first screen does not look starved when Android gives 76px of chrome instead of 193 (K10-F20) |
| V7 | **402 × 681** | Phone E | 3 | mobile, touch | **Derived**: device `402x874` = 4.99% of US mobile (K10-F2) minus the 193px iPhone-15-class chrome (K10-F17). No descriptor exists yet |
| V8 | **430 × 739** | Phone E | 3 | mobile, touch | Playwright `iPhone 15 Plus` (K10-F18) |
| V9 | **390 × 844** | Phone, **large viewport** R | 3 | mobile, touch | Same device as V3 with the bars retracted (K10-F5, F11). Not a fold test — an emptiness test (T-K10-3) |
| V10 | **750 × 342** | Phone landscape R | 3 | mobile, touch | Playwright `iPhone 13 landscape` (K10-F18). Android's compact-height class covers **99.78% of phones in landscape** (K10-F7) and the current matrix has no landscape row at all |
| V11 | **768 × 1024** | Tablet R | 2 | mobile, touch | Playwright `iPad (gen 5)` (K10-F18); `min-width: 768px` is the web's most common breakpoint at **57% of pages** (K10-F8) |
| V12 | **834 × 1194** | Tablet E | 2 | mobile, touch | Playwright `iPad Pro 11` (K10-F18). **Replaces `820x1180`**, which is a device screen with no descriptor behind it |
| V13 | **1024 × 768** | Tablet landscape R | 2 | mobile, touch | Playwright `iPad (gen 5) landscape` (K10-F18). **Replaces `1024x1366`**: wide-and-short is the harder fold and the commoner posture |
| V14 | **1280 × 720** | Laptop R | 1 | desktop | Playwright's own default viewport (K10-F18, F60); StatCounter desktop `1280x720` = 4.04% (K10-F3). The hardest common fold — kept |
| V15 | **1366 × 648** | Laptop R | 1 | desktop | **Derived**: screen `1366x768` = 4.00% of US desktop (K10-F3) less a declared 120px of browser and OS chrome. The short-laptop case |
| V16 | **1440 × 900** | Laptop R | 2 | desktop | The project's design width (`--container-max` 90rem) and the capture size fixed by `18` §3. Labelled a **design width, not a device** — it is not in StatCounter's US desktop top six (K10-F3) |
| V17 | **1920 × 960** | Desktop R | 1 | desktop | **Derived**: screen `1920x1080` = **30.63% of US desktop** (K10-F3) less the same declared 120px. Replaces the raw `1920x1080` row, which is a screen |
| V18 | **320 × 256** | Reflow R | 1 | desktop | WCAG SC 1.4.10 verbatim (K10-F37). **Replaces "390 × 844 at 200% text"**, which tests nothing WCAG defines |
| V19 | **1024 × 576** | Zoom R | 1 | desktop | 1280 × 720 at 125% page zoom, computed. **Replaces "1280 × 720 at 125 percent"** — Playwright has no page-zoom option, so zoom is expressed as a viewport (K10-F60) |

**Removed and why.** `390x844` and `412x915` as *phone* rows (screens, not viewports — K10-A4); `430x932` as a phone row (screen; its viewport is V8); the two "phone in an app browser" rows (no in-app height class has been *measured* — K10-P3 treats the small-viewport rows as the stress stand-in, and their heights were the small-viewport heights already); `1366x768`, `1536x864` and `1920x1080` as raw rows (screens — V15, V17 carry them as viewports); `820x1180` and `1024x1366` (unsourced device screens — V12, V13 replace them); `1536x864`'s fold is strictly easier than V15's and it is dropped rather than derived. **Net: 16 rows become 19, of which 16 are measured and 3 are declared derivations shown in full.**

### 5b. Fold fit, defined in `svh` terms

> **Fold fit.** With the first-screen wrapper sized `min-block-size: 100svh` and no `100vh` anywhere in the stylesheet, the **fold set** — the header, the h1 umbrella sentence, the provenance line, and both door CTAs in their entirety — has `getBoundingClientRect().bottom ≤ viewportHeight − 24` at every required phone, tablet and laptop row of 5a, where `viewportHeight` is the row's height and equals `100svh` under Playwright (a headless context has no retracting chrome, so the matrix height *is* the small viewport). The 24px is declared headroom against the in-app uncertainty in K10-F25, not a measured inset.

**Scope, reconciled with DD-44.** "Every required phone, tablet and laptop row" means every row of 5a except two named, sourced exceptions: **V10** (750×342, landscape phone), where Android's compact-height class treats scrolling as normal (K10-F7) and T-K10-14 tests it on that basis instead of the strict fold assertion; and **V18** (320×256, reflow), where WCAG SC 1.4.10 itself permits content to scroll (K10-F37) and T-K10-5 governs it. **V19** (1024×576, zoom) is *not* an exception — the fold rule applies there exactly as it does at every other required row, and T-K10-6 asserts it. This is the reconciliation DD-44 (`07-design-decisions.md`) records as still owed between "universal fold language" and the reflow/zoom rows; it is settled here, in the file DD-44 cites.

Three consequences, all arithmetic:

| Consequence | Numbers |
|---|---|
| **K1's 655px budget must come down to 605px.** V2 is 629px tall; 629 − 24 = **605px** of usable fold | K1 §5b budgets 655. The 50px is found by: the h1 on K2's ramp instead of K1's (−4px at 390, K10-F33 below), the door scent line folded onto the door name line, and the provenance line moved to `--space-fluid-xs` above rather than `--space-6` below |
| **The h1 clamp conflict resolves to K2.** K1 proposes `clamp(1.75rem, 1.25rem + 2.22vw, 3.25rem)`; K2 proposes `--text-3xl: clamp(1.6875rem, 1.2917rem + 1.7593vw, 2.875rem)`. Computed side by side: 28.0 vs 27.0 at 360, 28.7 vs **27.5** at 390, 42.7 vs 38.7 at 1024, 48.4 vs **43.2** at 1280, 52.0 vs **46.0** at 1440 and 1920. K1's is larger at every width and costs fold height everywhere. **K2's scale wins** — it is the typography cluster's authority and it is the cheaper of the two on the axis that is failing | Derived from K1 §5a and K2 §5a |
| **K1's height query survives, generalised.** Keep `@media (min-width: 1024px) and (max-height: 800px)` in spirit but move the edges to the sourced ones: `@media (max-height: 899px)` compresses, `@media (min-height: 900px)` relaxes, `@media (max-height: 479px)` is the short-viewport case — it fires on height alone, so it catches both **V10** (landscape) and **V18** (reflow), not landscape only | K10-F7, F48 |

```css
/* The first screen. Grid, not flex, so the middle row can absorb slack. */
.first-screen {
  min-block-size: 100svh;              /* never 100vh (K10-A1), never 100dvh (K10-A2) */
  display: grid;
  grid-template-rows: auto 1fr auto;   /* header | thesis+doors | compare anchor */
  padding-block-end: var(--space-fluid-s);
  padding-inline: var(--page-margin);
}
@supports not (height: 100svh) { .first-screen { min-block-size: 100vh; } }

@media (max-height: 899px) { .first-screen { --fold-density: compressed; } }
@media (min-height: 900px) { .first-screen { --fold-density: relaxed; } }
@media (max-height: 479px) { .first-screen { min-block-size: auto; } } /* short first screen — V10 landscape and V18 reflow both land here; let it scroll instead of forcing the fold */
```

The `@supports` fallback is the only place `100vh` may appear, and the QA grep allows it only inside that block.

### 5c. The fluid space scale, paired with K2's type scale

Same ramp as K2 — **360 → 1440, flat outside** (K10-P6). Every endpoint is a value already on the existing 4px token ladder, so nothing here invents a spacing value; it interpolates between two that already exist.

```css
/* Fluid space — ramp 360px → 1440px, flat outside it. Pairs with K2 §5a. */
--space-fluid-3xs: clamp(0.25rem,   0.1667rem + 0.3704vw, 0.5rem);  /*  4 →   8 */
--space-fluid-2xs: clamp(0.5rem,    0.4167rem + 0.3704vw, 0.75rem); /*  8 →  12 */
--space-fluid-xs:  clamp(0.75rem,   0.6667rem + 0.3704vw, 1rem);    /* 12 →  16 */
--space-fluid-s:   clamp(1rem,      0.8333rem + 0.7407vw, 1.5rem);  /* 16 →  24 */
--space-fluid-m:   clamp(1.5rem,    1.3333rem + 0.7407vw, 2rem);    /* 24 →  32 */
--space-fluid-l:   clamp(2rem,      1.6667rem + 1.4815vw, 3rem);    /* 32 →  48 */
--space-fluid-xl:  clamp(3rem,      2.6667rem + 1.4815vw, 4rem);    /* 48 →  64 */
--space-fluid-2xl: clamp(4rem,      3.3333rem + 2.963vw,  6rem);    /* 64 →  96 */
--space-fluid-3xl: clamp(6rem,      5.3333rem + 2.963vw,  8rem);    /* 96 → 128 */
```

Rendered px at the matrix widths:

| token | 360 | 390 | 412 | 768 | 1024 | 1280 | 1440 | 1920 |
|---|---|---|---|---|---|---|---|---|
| `--space-fluid-xs` | 12.0 | 12.1 | 12.2 | 13.5 | 14.5 | 15.4 | 16.0 | 16.0 |
| `--space-fluid-s` | 16.0 | 16.2 | 16.4 | 19.0 | 20.9 | 22.8 | 24.0 | 24.0 |
| `--space-fluid-m` | 24.0 | 24.2 | 24.4 | 27.0 | 28.9 | 30.8 | 32.0 | 32.0 |
| `--space-fluid-l` | 32.0 | 32.4 | 32.8 | 38.0 | 41.8 | 45.6 | 48.0 | 48.0 |
| `--space-fluid-xl` | 48.0 | 48.4 | 48.8 | 54.0 | 57.8 | 61.6 | 64.0 | 64.0 |
| `--space-fluid-2xl` | 64.0 | 64.9 | 65.5 | 76.1 | 83.7 | 91.3 | 96.0 | 96.0 |

**How this coexists with K1's multiple-of-8 rule (CP6).** The stepped tokens `--space-1` … `--space-12` are unchanged and remain the only thing CP6 tests: every *block gap between elements* is still a stepped token and still a multiple of 8. The fluid set is permitted in exactly three places — section `padding-block`, the page inline margin, and the gap between the two door cards — which is a widening of K1's single declared exemption from one property to three, stated here so the grep in CP6 can be written against a list rather than a hunch.

**One replacement.** K1's bespoke `padding-block: clamp(4rem, 2rem + 5vw, 8rem)` becomes `--space-fluid-2xl`. Computed: K1's gives 64 / 64 / 83.2 / 96.0 / 104 / **128** at 360 / 390 / 1024 / 1280 / 1440 / 1920; the token gives 64 / 64.9 / 83.7 / 91.3 / 96 / **96**. They agree to within 1px on phones and diverge only above 1280, where K1's keeps growing past the ramp while K2's type holds flat. Holding both flat above 1440 is the consistent choice (K10-P6, K10-P8); if the 1920 screen then reads as tight rather than empty, the fix is the height band in 5b, not more padding.

**The zoom ledger, carried forward honestly.** None of these clamps satisfies MDN's "max ≥ 2× min" heuristic (`--space-fluid-s` is 1.5×, `--text-base` is 1.125×, `--text-3xl` is 1.70×) — and neither does K1's h1 clamp at 1.86×. That heuristic is written for `clamp(min, Xvw, max)` with a pure-`vw` preferred value (K10-F34, F35); every clamp here is `rem`-dominant, which is exactly Roselli's remedy (K10-F36). The heuristic therefore does not settle the question either way, and the only thing that does is the measured zoom run — corrected to **199.3%** for `--text-base` (K2 §5f, cited at K10-F38, not re-derived here), comfortably clear of the ≥196% floor T-K2-2 sets and not the shortfall the original 195.5% implied. T-K10-9 below still needs to run in an actual browser to confirm the arithmetic model — K2's own caveat, carried forward — and K2 §5f's conservative variant (fix `--text-xs`, `--text-sm`, `--text-base` in `rem`; keep fluidity from `--text-md` up) remains the fallback if that rendered run comes in under the floor.

### 5d. The layout primitives the twenty mocks use

| Region | Primitive | Implementation | Why this one |
|---|---|---|---|
| First screen shell | **Grid with a slack row** | `min-block-size: 100svh; grid-template-rows: auto 1fr auto` | The `1fr` is Simmons's squishiness: the slack lands in one declared place instead of being distributed by accident (K10-F45) |
| Thesis block | **The Stack** | `.stack > * + * { margin-block-start: var(--space-4) }`, with `--space-6` on the provenance/doors boundary | K1's proximity ladder is a stack with two different gap values; the owl selector makes the last-child margin impossible (K10-F42) |
| The two doors | **The Switcher**, `--threshold: 34rem` | `flex-wrap: wrap; > * { flex-basis: calc((34rem - 100%) * 999); flex-grow: 1 }` with `gap: var(--space-fluid-l)` | Two equal items that must go from one row straight to one column with no half-state — the exact case the Switcher exists for (K10-F44). Threshold 34rem = 544px: side by side needs 2 × 544 + 48 = 1136px of container, so the doors stack until a 1232px viewport at the ≥1024 page margin, and never produce a cramped pair. Equality is structural, which is what K1's A3 requires |
| Door internals | **Container query** | `.door { container-type: inline-size }` then `@container (inline-size >= 30rem) { .door__media { aspect-ratio: 5/1 } }` | K1's rule "5:1 at ≥1280 with a short viewport, 3:1 at ≥1024, a 48px round inset below 768" is three *viewport* rules describing one *card-width* fact. Expressed on the container it survives the door being reused in the comparison section (K10-F29, F31) |
| Comparison block | **Container query**, `inline-size >= 69rem` (starting hypothesis, not a mandate — see note) | `.compare { container-type: inline-size }`; stacked below, two columns at or above | K2 §5b found the two-column table clears the 45-character floor at about a 1200px viewport as a first estimate; at the ≥1024 page margin of `--space-7` 48px, 1200 − 96 = 1104px = **69rem** of container. Per **R6** (`kb/KB-RESOLUTIONS.md`) the comparison breakpoint is determined by the actual cell content and available width in the runner, not by a fixed number — so 69rem is the starting hypothesis a mock tests against its own copy, kept or replaced by whatever the rendered table actually needs, expressed as a container threshold instead of R6's viewport one (K10-F30) |
| Comparison rows | **`auto-fit` grid** | `grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr))` | The row set has nine rows and two columns; `auto-fit` removes the need for a second breakpoint inside the block (K10-F47) |
| Prose measure | **`clamp` on width** | `max-inline-size: clamp(45ch, 100%, 65ch)` | K1's OQ-2 asks for a `65ch` measure separate from `--container-narrow`; Kravets's pattern is the idiom, and GOV.UK's ≤75 characters is the ceiling (K10-F35, F53) |
| Proof strip and footer | **The Sidebar** | `flex-grow: 999` on the text, `min-inline-size: 50%` | Label-plus-value pairs that must wrap on their own rather than at a viewport number (K10-F43) |
| Page margin | Fluid token | `--page-margin: var(--space-fluid-l)` → 32px at 360, 48px at 1440, flat to 1920 | K1 §5a's own grid table (an Option, R15) actually steps in **four** bands — 24px (360–767), 32px (768–1023), 48px (1024–1439), **64px (≥1440)** — not a flat 48 from 1024 up. This fluid token is a *different*, also-optional margin schedule that tops out 16px lower at ≥1440; a brief states in its rationale which option it adopts, per K1's own P1 |
| Above 1440 | Nothing changes | `--container-max: 90rem`, margins absorb the rest | K10-P8, F57. The 1920 capture should differ from the 1440 capture only by margin |

Every mock's rationale states which primitive each region uses and the threshold it carries. A mock that reaches its layout through viewport media queries alone cannot score above 3 on Craft (5f).

### 5e. The Playwright test list, with exact assertions

Added to `1_spec/13` section 14. `V*` refer to 5a. All assertions run after `page.waitForLoadState('networkidle')` and a four-step scroll to the bottom and back.

| Test | Runs at | Exact assertion |
|---|---|---|
| **T-K10-1 Fold fit** | V1–V8, V11–V17 (V10 excluded — T-K10-14 governs it instead, per the `max-height: 479px` exception in 5b) | For each of `header`, `h1`, `[data-fold="provenance"]`, `[data-door] a.cta` (both): `el.getBoundingClientRect().bottom <= page.viewportSize().height - 24`, and `el.getBoundingClientRect().top >= 0`. Report the worst element and its overshoot in px |
| **T-K10-2 No `vh` outside the fallback** | once | Parse every stylesheet: zero occurrences of `vh`, `dvh` or `-webkit-fill-available` except inside an `@supports not (height: 100svh)` block. At least one `svh` present |
| **T-K10-3 Not empty at the large viewport** | V9 | `document.querySelector('[data-fold="compare-anchor"]').getBoundingClientRect().top >= 0.55 * innerHeight` — the first screen must still reach a little over half the screen once the bars retract, so the retraction reads as more content rather than as a gap |
| **T-K10-4 No horizontal overflow** | all V | `document.documentElement.scrollWidth === page.viewportSize().width`, and no element has `getBoundingClientRect().right > width + 0.5` |
| **T-K10-5 Reflow** | V18 (320 × 256) | T-K10-4 passes, no text node is clipped, and every interactive control is reachable. The first screen may scroll here; nothing may be lost (K10-F37) |
| **T-K10-6 Zoom viewport** | V19 (1024 × 576) | T-K10-1 and T-K10-4 pass |
| **T-K10-7 Content box capped** | V16, V17 | The content box's rendered width at 1920 equals its rendered width at 1440, within 2px — margins absorb the extra 480px of viewport; the content box itself does not grow (K10-P8). Under K1's page-margin option (§5a, 64px at ≥1440 — an Option, R15, not a shared mandate), that width is **1312 ± 2px** with a left offset of **64 ± 2px** at 1440 and **304 ± 2px** at 1920 (`--container-max` 90rem less a 64px margin each side); a brief using a different margin schedule (for example this file's own flat 48px fluid token, 5c) asserts its own equivalent numbers in its rationale instead |
| **T-K10-8 Height bands fire** | V2 (629), V14 (720), V11 (1024) | `getComputedStyle(firstScreen).getPropertyValue('--fold-density')` is `compressed` at 629 and 720 and `relaxed` at 1024 |
| **T-K10-9 Text zoom reaches 200%** | V3 | Capture `fontSize` of `body p` with default root, then re-run with `page.addStyleTag({ content: 'html{font-size:32px}' })` (Playwright's `stylePath` does the same for screenshots, K10-F62). Assert the second value ≥ **196%** of the first, matching K2's own T-K2-2 floor (§5f, corrected), and **flag anything below 200%** for the escalation table. This is K2's T-K2-2 made executable |
| **T-K10-10 Container queries resolve** | V3, V14, V16 | `.compare` has `container-type: inline-size`; the two-column rule is inactive at 1280 and active at 1440. No element on the first screen has `container-type: size` (K10-A7) |
| **T-K10-11 Device emulation is real** | V1–V13 | The context was created from `devices[...]` or an equivalent object with `isMobile: true`, `hasTouch: true` and the dpr in 5a. Assert `window.devicePixelRatio` equals the row's dpr and `navigator.maxTouchPoints > 0` (K10-F60, F61) |
| **T-K10-12 Reduced motion** | V3, V16, with `reducedMotion: 'reduce'` | No element reports a non-zero `transition-duration` or `animation-duration`, including `::before` and `::after`; the capture is pixel-identical to the static capture at the same size |
| **T-K10-13 Forced colors** | V3, V16, with `forcedColors: 'active'` | T-K10-1 and T-K10-4 still pass; every door card still has a visible boundary (a `border-*-width` > 0, since `box-shadow` is forced to `none`); no text is unreadable over a backplate (K10-F63). This is the test that proves K1's choice of a 1px border over a shadow was structural, not stylistic |
| **T-K10-14 Landscape does not trap** | V10 (750 × 342) | The page scrolls, the header is not `position: fixed` with a height over 15% of the viewport, and both door CTAs are reachable within two screenfuls |
| **T-K10-15 Balance is an enhancement** | V1, V3, V16 | Where `text-wrap: balance` is declared, the element renders ≤ 6 lines; otherwise the declaration is removed (K10-F39, K10-A10) |
| **T-K10-16 Screenshot grid** | all V | `expect(page).toHaveScreenshot()` at the row's dpr, viewport and full page, named with browser and platform (K10-F62); `maxDiffPixels: 100` |

`17` section 4's existing tests (overlap, clipped text, 44×44 targets, contrast, focus, one h1, images, console, links, video) are unchanged and continue to run at every `V`.

### 5f. A calibrated 5 for the rubric row **Craft**, as it concerns responsiveness

`17` section 6 asks the critic for "zero clipped text, orphans in the h1, misaligned baselines, inconsistent radii or spacing". K1 §5e calibrates ten craft lines from composition. These are the ten K10 adds; a mock must satisfy both sets.

| Score | What responsiveness looks like |
|---|---|
| **1** | `100vh` on the hero. Fixed rem heights. The page is designed at one width and checked at a second |
| **2** | Media queries at 768 and 1024 copied from a framework; the fold "fits" at 390 × 844 because 844 was mistaken for a viewport; nothing was rendered at 629 or at 342 |
| **3** | `svh` is used and the matrix passes, but every adaptation is a viewport media query, the space scale is stepped-only, the 1920 capture is the 1440 capture with stretched content, and zoom was never run |
| **4** | Every row of 5a passes with headroom. Type and space share one ramp and hold flat above 1440. The doors and the comparison block switch on their own container. `reducedMotion` and `forcedColors` runs are clean. The rationale names each primitive and its threshold |
| **5** | Everything in 4, **and** the layout is legibly *intrinsic*. (a) The fold set clears `100svh − 24px` at **375 × 629**, the worst row, and the mock's rationale states the budget in px with the slack named. (b) No more than **three** viewport media queries exist in the whole stylesheet, and each is justified in one sentence; everything else is `minmax`, `clamp`, `ch`, a Switcher threshold or a container query. (c) The two doors are provably equal by construction, not by two matching numbers — same rule, same threshold, same gap token. (d) At **1920 × 960** the content bounding box is byte-for-byte the 1440 one (T-K10-7) and the screen reads as composed rather than centred-by-default, because the extra height, not the extra width, was spent. (e) At **750 × 342** the page degrades to a scroll without a trapped fixed header and without a single clipped control. (f) The `forcedColors: 'active'` capture is still recognisably the same page: boundaries survive because they were drawn as borders (T-K10-13). (g) The reduced-motion capture is pixel-identical to the static one. (h) `text-wrap: balance` is present and provably firing at ≤ 6 lines, or absent with a reason. (i) The zoom run reports the actual percentage (T-K10-9), and if it is under 200% the mock carries the shortfall in its rationale rather than hiding it. (j) A reader handed the 360, 768 and 1440 captures side by side sees three *compositions of the same argument*, not one layout squeezed three ways — the door photograph's aspect changes, the thesis measure stays inside 45–75 characters at all three, and the proximity ladder's order is intact at all three |

Exemplar for this row is deferred to `EXEMPLARS.md`: K10 read no third-party page in a browser and will not assign a visual exemplar it did not see. The closest sourced calibration available is **GOV.UK** for the cap-and-margin behaviour at large widths (K10-F53) and **Carbon** for the 8px mini unit surviving five breakpoints unchanged (K10-F55).

### 5g. What this changes upstream and downstream

| Artefact | Change |
|---|---|
| `17` section 4 | Replace the matrix with 5a: 19 viewport rows, each sourced, phone rows measured rather than screen-derived, the two in-app rows collapsed, landscape and 320 × 256 added, zoom rows restated as viewports. Restate "fits the screen" as 5b |
| `1_spec/13` section 14 | Add T-K10-1 to T-K10-16. Four of them (T-K10-2, T-K10-8, T-K10-10, T-K10-11) are new categories, not new sizes |
| `tokens.css` | **Proposal, not an edit**: add the nine `--space-fluid-*` tokens from 5c. Stepped tokens unchanged. Flag as a DD-19 departure in the same batch as K2's type ramp, since they share one ramp |
| `kb/K1` | §5a's h1 clamp is superseded by K2's `--text-3xl` (5b). §5b's 655px budget is superseded by 605px. §5a's bespoke section-padding clamp is superseded by `--space-fluid-2xl`. Three corrections, all arithmetic, none touching K1's grid, proximity ladder or section-weight table |
| `kb/K2` | T-K2-2 becomes executable as T-K10-9. The corrected **199.3%** figure (K2 §5f, Astra's E4 finding) is cited here, not re-derived independently (K10-F38) |
| `07` register | Nothing here contradicts an existing row. MN-01…MN-15 and D-031 are unaffected: T-K10-12 only enforces what they already require. The in-app-browser height claim in `17` §4 is a runbook statement, not a register row, so correcting it needs no ensemble pass |
| REQ-024 | Restate: REQ-024 verifies the landing in all three in-app browsers on iOS and Android outright (MN-15) — it is not narrowed to **user agent, referrer and handoff** (K10-F26), which are simply the differences the fetched sources document with confidence. The height case has no in-app measurement yet (K10-F24); V2 to V8 with 24px headroom are the matrix's stress stand-in until REQ-024 supplies real numbers (`17` §4, DD-44) |

---

## 6. Open questions

| # | Question | Why it is not evidence | Route |
|---|---|---|---|
| K10-OQ-1 | What is the **actual** `window.innerHeight` inside the Instagram, Facebook and TikTok in-app browsers on a modern iPhone and a modern Android? | Six fetches found user-agent tokens and prose but no measurement (K10-F24). The 180–193px envelope in K10-F25 is derived from safe areas plus Safari's measured chrome, not observed | One measurement each: open a page that prints `innerHeight`, `screen.height` and `visualViewport.height` from the three apps. Johnny or Nari, five minutes, one device. Until then the 24px headroom in 5b stands as the safety factor |
| K10-OQ-2 | Is the 120px browser-plus-OS chrome allowance behind V15 and V17 right for GT's desktop visitors? | Declared, not sourced. StatCounter publishes screens; nobody publishes the maximised-window viewport distribution | GA4 can be made to report `window.innerHeight` on a sample of sessions (AN row needed). Until then V14's 720 and V15's 648 bracket the plausible range |
| K10-OQ-3 | Does the 34rem Switcher threshold produce the right stacking point once real copy is in the doors? | The 34rem is chosen from K1's 624px card at 1440 and its 560px card at 1280, then rounded down. It is a starting value, not a measurement | Measure at R1: the threshold is correct when the doors stack exactly once, with no width at which they are side by side and the scent line wraps to three lines |
| K10-OQ-4 | Should the space ramp end at 1440 like the type ramp, or at 1920? | 5c argues 1440 for consistency (K10-P6) and K1 implicitly argued 1920. Both are defensible; neither is sourced, because no source addresses a two-site routing page | Decide from the 1920 captures at R1. If the page reads empty, the answer is the height band, then the ramp — in that order |
| K10-OQ-5 | Do `container-type: inline-size` containers interact badly with the mocks' focus rings or sticky elements? | Layout containment makes the container a containing block for absolutely positioned descendants (K10-F29); no mock has been built with containers yet, so there is nothing to observe | T-K10-13 and the existing focus test will catch it at R1. If it bites, the fallback is a viewport media query at the same threshold, recorded as a departure |
| K10-OQ-6 | Foldables | `viewport-segments` exists (K10-F52) but no share figure for the US was findable, and Android's size classes do not break them out | Not tested. Excluded deliberately, recorded so it is a choice and not an oversight |

---

## 7. Sources fetched

All fetched by this agent on 2026-09-11 via WebFetch, except S10 and S39 which were fetched with `curl`. Sixty-three distinct sources.

| # | Source | Author / publisher | Date | URL |
|---|---|---|---|---|
| S1 | Screen Resolution Stats, United States | StatCounter GlobalStats | Aug 2026 | https://gs.statcounter.com/screen-resolution-stats/all/united-states-of-america |
| S2 | Mobile Screen Resolution Stats, United States | StatCounter | Aug 2026 | https://gs.statcounter.com/screen-resolution-stats/mobile/united-states-of-america |
| S3 | Desktop Screen Resolution Stats, United States | StatCounter | Aug 2026 | https://gs.statcounter.com/screen-resolution-stats/desktop/united-states-of-america |
| S4 | Desktop vs Mobile vs Tablet Market Share, United States | StatCounter | Aug 2026 | https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/united-states-of-america |
| S5 | CSS `<length>` | MDN Web Docs | accessed 2026-09-11 | https://developer.mozilla.org/en-US/docs/Web/CSS/length |
| S6 | The large, small, and dynamic viewport units | Bramus Van Damme, web.dev | 2022-11-29 | https://web.dev/blog/viewport-units |
| S7 | CSS Values and Units Module Level 4, §viewport-variants | W3C | accessed 2026-09-11 | https://www.w3.org/TR/css-values-4/#viewport-variants |
| S8 | The Large, Small, and Dynamic Viewports | Bramus Van Damme | 2021-07-08 (upd. 2022-11-10) | https://www.bram.us/2021/07/08/the-large-small-and-dynamic-viewports/ |
| S9 | New Viewport Units | Ahmad Shadeed | 2023-07-08 | https://ishadeed.com/article/new-viewport-units/ |
| S10 | `deviceDescriptorsSource.json`, branch `release-1.55` | Microsoft Playwright | accessed 2026-09-11 | https://raw.githubusercontent.com/microsoft/playwright/release-1.55/packages/playwright-core/src/server/deviceDescriptorsSource.json |
| S11 | Emulation | Playwright | accessed 2026-09-11 | https://playwright.dev/docs/emulation |
| S12 | TestOptions | Playwright | accessed 2026-09-11 | https://playwright.dev/docs/api/class-testoptions |
| S13 | Visual comparisons | Playwright | accessed 2026-09-11 | https://playwright.dev/docs/test-snapshots |
| S14 | `@media/forced-colors` | MDN | accessed 2026-09-11 | https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors |
| S15 | `@media/prefers-reduced-motion` | MDN | accessed 2026-09-11 | https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion |
| S16 | CSS container queries | MDN | accessed 2026-09-11 | https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries |
| S17 | `env()` | MDN | accessed 2026-09-11 | https://developer.mozilla.org/en-US/docs/Web/CSS/env |
| S18 | Viewport meta element | MDN | accessed 2026-09-11 | https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Viewport_meta_element |
| S19 | `text-wrap-style` | MDN | accessed 2026-09-11 | https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap-style |
| S20 | `clamp()` | MDN | accessed 2026-09-11 | https://developer.mozilla.org/en-US/docs/Web/CSS/clamp |
| S21 | `@media/height` | MDN | accessed 2026-09-11 | https://developer.mozilla.org/en-US/docs/Web/CSS/@media/height |
| S22 | Small, Large, and Dynamic viewport units | caniuse | accessed 2026-09-11 | https://caniuse.com/viewport-unit-variants |
| S23 | CSS Container Queries | caniuse | accessed 2026-09-11 | https://caniuse.com/css-container-queries |
| S24 | Responsive Type and Zoom | Adrian Roselli | 2019-12-06 (upd. 2025-10-20) | https://adrianroselli.com/2019/12/responsive-type-and-zoom.html |
| S25 | Understanding SC 1.4.10 Reflow | W3C WAI | accessed 2026-09-11 | https://www.w3.org/WAI/WCAG22/Understanding/reflow.html |
| S26 | Understanding SC 1.4.4 Resize Text | W3C WAI | accessed 2026-09-11 | https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html |
| S27 | Fluid space calculator | Utopia (Trys Mudford, James Gilyead) | accessed 2026-09-11 | https://utopia.fyi/space/calculator/ |
| S28 | Designing with fluid type scales | James Gilyead, Utopia | 2020-02-01 | https://utopia.fyi/blog/designing-with-fluid-type-scales/ |
| S29 | CSS Modular Scales | Trys Mudford, Utopia | 2020-02-02 | https://utopia.fyi/blog/css-modular-scales/ |
| S30 | Every Layout — Axioms | Heydon Pickering & Andy Bell | accessed 2026-09-11 | https://every-layout.dev/rudiments/axioms/ |
| S31 | Every Layout — Layouts index | Pickering & Bell | accessed 2026-09-11 | https://every-layout.dev/layouts/ |
| S32 | Every Layout — The Stack | Pickering & Bell | accessed 2026-09-11 | https://every-layout.dev/layouts/stack/ |
| S33 | Every Layout — The Sidebar | Pickering & Bell | accessed 2026-09-11 | https://every-layout.dev/layouts/sidebar/ |
| S34 | Every Layout — The Switcher | Pickering & Bell | accessed 2026-09-11 | https://every-layout.dev/layouts/switcher/ |
| S35 | Be the browser's mentor, not its micromanager | Andy Bell, Set Studio | 2022 | https://buildexcellentwebsit.es/ |
| S36 | Everything You Know About Web Design Just Changed, by Jen Simmons | Jeremy Keith | 2018-04-03 | https://adactio.com/journal/13671 |
| S37 | Layout | GOV.UK Design System | accessed 2026-09-11 | https://design-system.service.gov.uk/styles/layout/ |
| S38 | Layout grid | U.S. Web Design System | accessed 2026-09-11 | https://designsystem.digital.gov/utilities/layout-grid/ |
| S39 | 2x Grid — Overview | IBM Carbon Design System | accessed 2026-09-11 | https://carbondesignsystem.com/elements/2x-grid/overview/ |
| S40 | Breakpoints | Bootstrap 5.3 | accessed 2026-09-11 | https://getbootstrap.com/docs/5.3/layout/breakpoints/ |
| S41 | Responsive design | Tailwind CSS | accessed 2026-09-11 | https://tailwindcss.com/docs/responsive-design |
| S42 | Responsive web design basics | Pete LePage & Rachel Andrew, web.dev | upd. 2019-02-12 | https://web.dev/articles/responsive-web-design-basics |
| S43 | Learn Responsive Design — Macro layouts | web.dev | upd. 2021-11-03 | https://web.dev/learn/design/macro-layouts |
| S44 | Learn Responsive Design — Media features | web.dev | upd. 2025-08-23 | https://web.dev/learn/design/media-features |
| S45 | Learn Responsive Design — Screen configurations | web.dev | upd. 2021-12-23 | https://web.dev/learn/design/screen-configurations |
| S46 | Container queries and units in action | Miriam Suzanne, web.dev | 2025-10-23 | https://web.dev/articles/baseline-in-action-container-queries |
| S47 | min(), max(), and clamp() | Una Kravets, web.dev | upd. 2020-10-14 | https://web.dev/articles/min-max-clamp |
| S48 | The Fold Manifesto | Amy Schade, Nielsen Norman Group | 2015-02-01 | https://www.nngroup.com/articles/page-fold-manifesto/ |
| S49 | The trick to viewport units on mobile | Louis Hoebregts, CSS-Tricks | 2018-07-31 | https://css-tricks.com/the-trick-to-viewport-units-on-mobile/ |
| S50 | URL Bar Resizing | David Bokan, Chrome Developers | 2016-12-16 | https://developer.chrome.com/blog/url-bar-resizing |
| S51 | CSS, Web Almanac 2022 | Rachel Andrew, HTTP Archive | 2022-09-26 | https://almanac.httparchive.org/en/2022/css |
| S52 | Accessibility, Web Almanac 2022 | Sengupta, Colas & Davis | 2022-09-26 | https://almanac.httparchive.org/en/2022/accessibility |
| S53 | Mobile Web, Web Almanac 2022 | Cindy Krum | 2022-09-26 | https://almanac.httparchive.org/en/2022/mobile-web |
| S54 | The complete guide to CSS media queries | Polypane | upd. 2026-06-19 | https://polypane.app/blog/the-complete-guide-to-css-media-queries/ |
| S55 | The breakpoints we tested in 2021 & 2022 | Polypane | 2022-01-19 (upd. 2022-09-28) | https://polypane.app/blog/the-breakpoints-we-tested-in-2021-and-the-ones-to-test-in-2022/ |
| S56 | iPhone 16 Screen Sizes | Keith Harrison, Use Your Loaf | 2024-09-16 | https://useyourloaf.com/blog/iphone-16-screen-sizes/ |
| S57 | Window size classes | Android Developers | accessed 2026-09-11 | https://developer.android.com/develop/ui/compose/layouts/adaptive/window-size-classes |
| S58 | iPhone Viewport Sizes | screensize.net | accessed 2026-09-11 | https://screensize.net/iphone-viewport-sizes |
| S59 | Viewport Size for iPhone | YesViz | accessed 2026-09-11 | https://yesviz.com/iphones.php |
| S60 | When 100vh Lies: Fixing Mobile Viewport Issues | OpenReplay Team | 2026-03-05 | https://blog.openreplay.com/fix-100vh-mobile-viewport/ |
| S61 | Instagram In-App Browser: Why Links Break and the Fix | Karan Bhakuni, Flyn | 2026-08-06 | https://www.flyn.to/blog/instagram-in-app-browser |
| S62 | In-app browser user agents | useragent.in | accessed 2026-09-11 | https://useragent.in/in-app-browser-user-agents |
| S63 | Polypane 26: device emulation with safe area and small viewport units | Polypane | 2025-09-29 | https://polypane.app/blog/polypane-26-accurate-device-emulation-with-safe-area-and-small-viewport-units/ |

**Fetched and rejected.** `almanac.httparchive.org/en/2024/css` and `/en/2025/css` (404 — no CSS chapter published for those years); `smashingmagazine.com/2019/02/algorithmic-layouts/` and `/2019/01/` (404); `every-layout.dev/layouts/cover/` (paywalled — **The Cover is therefore not cited anywhere above**, and the first-screen shell in 5b is built from grid and Simmons's squishiness instead); `developer.apple.com/design/human-interface-guidelines/layout` and `/toolbars` (returned no content — bar heights in points are **not** cited, which is why K10-F25 derives from safe areas only); `screensizechecker.com` (403); `m3.material.io/.../window-size-classes` (404 — the Android Developers page S57 carries the same numbers); a Medium article on svh in in-app browsers (403).

**S63, separately.** Polypane's *Polypane 26: device emulation with safe area and small viewport units* was fetched successfully — it is not one of the rejected fetches above — but its post states no numerical values for viewport or safe-area behavior. It carries no finding here and is listed in the sources table only for completeness.

---

## 8. Rework log (E4)

Every item in Astra's E4 row for K10 (`0_plan/ensemble/E4-knowledge-base.md` section A) and this
cluster's entry in the rework pack (`0_plan/ensemble/prompts/REWORK-PACK.md`), addressed in order.
All six items checked out against the file as described — none is recorded as a disagreement.

| E4 item | What changed | Where |
|---|---|---|
| F25: "Instagram and Facebook draw the same number of bars Safari draws" and "a sound proxy ± about 15px" are not established by the safe-area figures | Kept the safe-area floor (93–96px) and the observation that it sits inside Safari's measured band, both of which the arithmetic does support. Relabelled the "same bars" and "±15px" claims **Judgment** in their own words, since no source measures the three apps' chrome directly (K10-F24). Restated the conclusion as the hypothesis REQ-024 tests, not a proven equivalence | Finding K10-F25 |
| F38: 195.5% omits the clamp minimum, same fix as K2 — match K2's method and figure, cite rather than recompute | Replaced the independent viewport-halving derivation with K2 §5f's actual method (doubling the root font size at a fixed 390px viewport, not shrinking the viewport). Cited K2's corrected **199.3%** rather than re-deriving a number; the old 195.5% figure and its "4.5% shortfall" framing are removed everywhere they were repeated | Finding K10-F38; 5c "the zoom ledger" paragraph; 5g `kb/K2` row; T-K10-9's threshold (195% → 196%, matching K2's own T-K2-2 floor) |
| P3: narrows app testing; MN-15/REQ-024 cover iOS and Android; correct | Reworded from an assertion ("there is no in-app height class") to the studio's actual position: the small/large viewport rows are a stress stand-in per runbook `17` §4 and DD-44, until REQ-024 measures all three apps on iOS and Android. Cited DD-44, MN-15 and REQ-024 directly. Lightly reworded F26 (not itself an E4 item, but resting on the same claim) to scope it to what the fetched sources document, not a proof that height differences are absent. Fixed the downstream "REQ-024" row in 5g, which had narrowed the requirement to user agent/referrer/handoff, and the "Removed and why" note in 5a, which cited the old, unhedged P3 | Principle K10-P3; Finding K10-F26; section 5a "Removed and why"; section 5g "REQ-024" row |
| Landscape: the fold rule applies to every matrix row including V19; reconcile the landscape scrolling note with the matrix | Added an explicit scope statement to 5b: the fold rule applies to every required row except two named, sourced exceptions — V10 (landscape, Android's compact-height class treats scrolling as normal, T-K10-14 governs) and V18 (reflow, WCAG SC 1.4.10 itself permits scrolling, T-K10-5 governs) — and confirmed V19 (zoom) is not an exception, per DD-44. Removed V10 from T-K10-1's "Runs at" list, since T-K10-14 already tests that row on scroll-permitted criteria that T-K10-1's strict bottom-fit assertion would otherwise contradict. Broadened the `max-height: 479px` CSS comment and the "K1's height query" prose from "landscape-phone case" to name both V10 and V18, since the query fires on height alone and already caught V18 too | Section 5b (new scope paragraph, CSS comment, "K1's height query survives" row); T-K10-1 "Runs at" column |
| Component thresholds and test expectations that disagree with the supplied CSS: reconcile to `tokens.css` and the mocks, or mark as proposals | Two concrete disagreements found and fixed. (1) The comparison-block container threshold (69rem) was stated as settled; **R6** (`kb/KB-RESOLUTIONS.md`) requires the breakpoint to come from actual cell content and available width in the runner, not a fixed number — reworded to mark 69rem a starting hypothesis a mock tests, not a mandate. (2) 5d's "Page margin" row misstated K1 §5a's own grid table as "48 at ≥1024 flat" when K1 actually steps to a fourth band, 64px at ≥1440 — the same 64px T-K10-7 already (correctly) cited from K1. Corrected 5d's description of K1's endpoints to the real four bands, noted K10's own fluid `--page-margin` token is a *different*, also-optional schedule that tops out 16px lower, and reworded T-K10-7 itself from a single mandatory pixel target to the general principle (content box does not grow past 1440's, margins absorb the surplus), keeping K1's option's numbers as the worked example, per R15 | Section 5d "Comparison block" and "Page margin" rows; T-K10-7 |
| S63 supplied no numerical evidence; label it | The label already existed, appended to the end of the "Fetched and rejected" paragraph — but S63 was not one of the rejected fetches, so the placement read as if it were. Split it into its own sentence, named the source (Polypane 26) and stated plainly that it was fetched successfully but carries no finding | Section 7, closing sentences |

### Disagreements with Astra

None. All six items checked out against the file: the two in-app claims bundled into F25 are not derivable from the safe-area arithmetic alone; F38's independent derivation reproduced K2's pre-correction error by a different route (halving the viewport instead of doubling the root font size); P3 overstated a stress stand-in as a settled absence; the fold-rule scope and the "landscape" CSS comment really did conflict with T-K10-14 and with V18's own scrolling allowance; the comparison-block and page-margin numbers really did disagree with R6 and with K1's own table respectively; and S63's label existed but was misplaced inside the rejected-fetches paragraph.

### Proposed register follow-ups

| Register row | Proposal | Evidence | Recommended by |
|---|---|---|---|
| New (relates to K10-OQ-4; a DD-19 departure either way) | Resolve which page-margin schedule the shared token set adopts above 1024px: K1 §5a's stepped table (24 / 32 / 48 / **64** px across four bands) or K10 §5c's fluid `--space-fluid-l` token (flat at **48**px from 1440 up). The two disagree by 16px at ≥1440, and neither is yet in `tokens.css` or `tokens-v2.css` | `0_plan/kb/K1-composition.md` §5a grid table; `0_plan/kb/K10-responsive.md` §5c fluid-space table and T-K10-7 | Fable, K10 rework, 2026-09-11 |
