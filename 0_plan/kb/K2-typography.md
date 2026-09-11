# K2 Typography on the web

| Field | Value |
|---|---|
| Cluster | K2 of `18-knowledge-base-plan.md` section 1 |
| Written | 2026-09-10; reworked 2026-09-11 after Astra's E4 (see the Rework log, section 8) |
| Method | 51 web sources fetched by the agent (text fetch only, no browser, no GT or Alpha page loaded), **one partially** — CSS Fonts 4 §5 did not render in the fetched document, so F-52 cites MDN's statement of the same rule instead (OQ-5); plus 10 direct measurements of the repository's own font binaries and the macOS system fallback fonts (M-01 to M-10, M-10 added in the rework). The original scratchpad scripts no longer exist; they were recreated 2026-09-11 with Pillow's `ImageFont` (`fontTools` is not installed in this environment — checked with `python3 -c "import fontTools"`, which raises `ModuleNotFoundError`). Script, inputs and full output table: `0_plan/kb/measurements/K2/` (`measure.py`, `inputs.md`, `output.md`) |
| Feeds | `mockups/shared/tokens.css` type block; `0_plan/04` section 2; `1_spec/04` section 2; rubric row **Typography** in `17` section 6; QA tests in `1_spec/13` |
| Status | Reworked after Astra's E4; scale, weight, role and leading choices are proposals for DD-01/DD-19/DD-36 pending a fixed-copy test (R4), not settled rules |

Two kinds of evidence appear below and are never mixed. **F-numbers** are findings from a fetched
source and carry a URL, an author and a date. **M-numbers** are values the agent measured directly
from font files on this machine; the method is stated so the number can be re-derived. Nothing in
this file comes from model memory.

---

## 1. Question

Pairing display and text faces; fluid type scales (Utopia and others); measure and leading; how
Literata and Inter Tight are used well in the wild; variable fonts; performance of self-hosted
fonts — woff2 subsetting, preload, `font-display`, fallback metric tuning.

---

## 2. Findings

### 2a. Measure (line length)

| # | Finding | Source |
|---|---|---|
| F-01 | Bringhurst's rule, quoted verbatim: "Anything from 45 to 75 characters is widely regarded as a satisfactory length of line for a single-column page set in a serifed text face in a text size. The 66-character line (counting both letters and spaces) is widely regarded as ideal." Rutter's web gloss: the reader controls text size and page width, so a measure fixed in `px` is not a measure at all; he prefers em-based (elastic) widths | Richard Rutter, *The Elements of Typographic Style Applied to the Web*, §2.1.2, http://webtypography.net/2.1.2 |
| F-02 | Butterick: line length should be "45–90 characters or 2–3 alphabets" including spaces, because "as line length increases, your eye has to travel farther from the end of one line to the beginning of the next, making it harder to track your progress vertically." He explicitly rejects measuring in inches or centimetres | Matthew Butterick, *Practical Typography*, https://practicaltypography.com/line-length.html |
| F-03 | WCAG 2.2 SC 1.4.8 Visual Presentation (Level AAA) requires, for blocks of text, that "Width is no more than 80 characters or glyphs (40 if CJK)" | W3C WAI, *Understanding SC 1.4.8*, WCAG 2.2, https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html |
| F-04 | Baymard's practitioner range is 50–60 characters after Emil Ruder, "up to 75" acceptable, 80 as the WCAG ceiling; too-short lines are named as a failure in their own right — "if a line is too short the eye will have to travel back too often, breaking the reader's rhythm." Their CSS advice is a `max-width` of "around `70ch` or `34em`" | Edward Scott (Research Lead), Baymard Institute, 2022-05-10, https://baymard.com/blog/line-length-readability |
| F-05 | Franz widens the web band to "45 to 85 characters (including spaces and punctuation)" and makes the tradeoff explicit: when measure and size fight, "retaining a comfortable font size as much as possible and simply narrowing the column's width instead are better" | Laura Franz, Smashing Magazine, 2014-09-29, https://www.smashingmagazine.com/2014/09/balancing-line-length-font-size-responsive-web-design/ |
| F-06 | `1ch` is **not one character**: MDN defines it as "the width or, more precisely, the advance measure of the glyph `0` (zero, the Unicode character U+0030) in the element's font", falling back to `0.5em` when unmeasurable. `1ex` is the x-height; `1cap` is the cap height | MDN, *CSS length*, last modified 2026-07-08, https://developer.mozilla.org/en-US/docs/Web/CSS/length |
| M-01 | Re-measured 2026-09-11 (original scratchpad script lost; see Method). Advance of `0` versus the mean advance over a 410-character sample (the umbrella sentence + both door lines + one full upper/lower alphabet, current copy deck — the original's stated 177-character sample is not recoverable at that length; see `measurements/K2/inputs.md`): **Literata Regular** `0` = 0.5790 em, mean advance 0.51186 em (ratio 0.884). **Inter Tight Regular** `0` = 0.5780 em, mean 0.45822 em (ratio 0.793). **Inconsolata Regular** 0.5000/0.5000 (ratio 1.000, unaffected by sample choice — monospace). So `66ch` sets ≈ **75** characters in Literata, ≈ **83** in Inter Tight, exactly 66 in Inconsolata | Pillow `ImageFont.getlength()` at size 1000 on the repo's TTFs (`fontTools` not installed). Script, sample and full output: `0_plan/kb/measurements/K2/measure.py`, `output.md` |

### 2b. Leading (line spacing)

| # | Finding | Source |
|---|---|---|
| F-07 | Butterick: "For most text, the optimal line spacing is between 120% and 145% of the point size" | *Practical Typography*, https://practicaltypography.com/line-spacing.html |
| F-08 | WCAG 2.2 SC 1.4.8 (AAA) requires "Line spacing (leading) is at least space-and-a-half within paragraphs" and "paragraph spacing is at least 1.5 times larger than the line spacing" | W3C WAI, https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html |
| F-09 | WCAG 2.2 SC 1.4.12 Text Spacing (Level **AA** — mandatory for this project) requires no loss of content or function when the user sets "Line height (line spacing) to at least 1.5 times the font size; Spacing following paragraphs to at least 2 times the font size; Letter spacing (tracking) to at least 0.12 times the font size; Word spacing to at least 0.16 times the font size" | W3C WAI, *Understanding SC 1.4.12*, https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html |
| F-10 | Franz's rule of thumb for the web: "A good rule of thumb is to set it at approximately 150% of the font size", with more leading for smaller type | Smashing Magazine, 2014-09-29 |
| F-11 | Capsize's premise: `font-size` does not describe what the reader sees, because the visible cap height is a fraction of the em that differs per face; it computes line-height from `capHeight`, `ascent`, `descent`, `lineGap` and `unitsPerEm` so that spacing is tied to the typeface's real dimensions "rather than arbitrary multipliers" | SEEK, *Capsize*, https://seek-oss.github.io/capsize/ |
| M-02 | Re-verified 2026-09-11, unchanged. Default (`line-height: normal`) line box: **Literata 1.485 em**, **Inter Tight 1.210 em**, **Inconsolata 1.049 em**, Georgia 1.136 em, Arial 1.150 em. The three GT faces disagree with each other by up to 0.44 em at the same `font-size` | Pillow has no direct `hhea.lineGap` accessor; `ImageFont.FreeTypeFont.font.height` at size 1000 was checked against these five faces and reproduces the original figures to 4 decimal places, including Arial's nonzero lineGap (`ascent+descent` alone omits it — confirmed by comparing the two on Arial, where they differ by 0.032 em). `measurements/K2/measure.py`, `output.md` |
| M-03 | Re-verified 2026-09-11, unchanged. x-height and cap height as a fraction of the em: **Literata** x 0.507, cap 0.701. **Inter Tight** x 0.546, cap 0.728. **Inconsolata** x 0.457, cap 0.623. Consequences: set at the same `font-size`, Inter Tight's lowercase looks **7.7% larger** than Literata's (Inter Tight needs 92.9% of Literata's size to match x-height), and Inconsolata's capitals look **14% smaller** than Inter Tight's (Inconsolata needs **116.8%** of Inter Tight's size to match cap height) | Pillow has no direct `OS/2.sxHeight`/`sCapHeight` accessor; approximated as `(ascent − getbbox("x" or "H")[top]) / size`, i.e. how far the glyph's ink extends below the ascender line. Reproduced the original figures exactly on first run. `measurements/K2/measure.py`, `output.md` |

### 2c. Fluid type scales

| # | Finding | Source |
|---|---|---|
| F-12 | Utopia's thesis: "Breakpoint-based type sizing has always felt a bit arbitrary to me. It seems like equal parts guesswork and compromise, where the better we want it to work, the more stuff we need to design." The method is three steps — "Define a type scale for a small screen", "Define a type scale for a large screen", "Tell the browser to interpolate between the two scales, based on the current viewport width" — so that "we can just say H2s are always 'size 4' and trust the calculation to generate a suitable size heading for everybody." Worked example: "a typographic scale of 1.2x at 320px (mobile-ish) and 1.333x at 1500px (desktop-ish)". Explicit caveat: it is "not a substitute for good design, rather it encourages focusing design effort into the creation of a robust system" | James Gilyead (with Trys Mudford), Utopia, 2020-02-01, https://utopia.fyi/blog/designing-with-fluid-type-scales/ |
| F-13 | The Utopia calculator's shipped defaults are min viewport **360px**, min font **18px**, min ratio **1.2**; max viewport **1240px**, max font **20px**, max ratio **1.25**; 5 steps up and 2 down. Output form: `--step-0: clamp(1.125rem, 1.0739rem + 0.2273vw, 1.25rem);` | Utopia, https://utopia.fyi/type/calculator/ |
| F-14 | The Smashing write-up of Utopia names the disease: "Rigid 'magic numbers' tied to real-world devices plagued our CSS", producing "a seemingly infinite number of similar values." It contains **no** discussion of zoom or accessibility — the gap F-16 fills | Gilyead & Mudford, Smashing Magazine, 2021-04-01, https://www.smashingmagazine.com/2021/04/designing-developing-fluid-type-space-scales/ |
| F-15 | The exact clamp math. With a minimum size y₁ at viewport x₁ and a maximum y₂ at x₂, the preferred value is the line `y = (v/100)·x + r`, where the slope `v = 100·(y₂−y₁)/(x₂−x₁)` and the intercept `r = (x₁y₂ − x₂y₁)/(x₁−x₂)`. Worked example: 36px at 600px and 52px at 1400px gives `clamp(2.25rem, 2vw + 1.5rem, 3.25rem)` | Adrian Bece, Smashing Magazine, 2022-01-17, https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/ |
| F-16 | The accessibility trap: "When you use `vw` units or limit how large text can get with `clamp()`, there is a chance a user may be unable to scale the text to 200% of its original size" — a WCAG 1.4.4 failure. Roselli's test: at 300% zoom in Firefox the viewport-scaled text "cannot get to truly 200% its original size" while statically sized text can. His advice is to prefer `%`, `em` or `rem`, to be "careful when using `vw` or `vh` units", and that you "must test it by zooming" | Adrian Roselli, 2019-12-06, updated 2025-10-20, https://adrianroselli.com/2019/12/responsive-type-and-zoom.html; and Bece 2022-01-17 |
| F-17 | The practical mitigation is to anchor the preferred value in `rem` and let `vw` supply only the increment: `font-size: clamp(var(--fluid-type-min, 1rem), calc(1rem + var(--fluid-type-target, 3vw)), var(--fluid-type-max, 1.3rem))`. Bell: "if you just use a viewport unit to size your type, it can cause problems in zooming, which in turn, creates a WCAG accessibility failure" | Andy Bell, Piccalilli, 2021-02-05, https://piccalil.li/blog/fluid-typography-with-css-clamp/ |
| F-18 | Fluid type is a tool for display type, not a replacement for the whole system: it "excels for large and prominent text elements" with substantial size differences and should "not be treated as a replacement for responsive typography" | Bece, Smashing Magazine, 2022-01-17 |
| F-19 | The minimal form exists and is legitimate — `font-size: clamp(100%, 1rem + 2vw, 24px)` — but Coyier notes you should "slip a `font-size` declaration before this to set an acceptable fallback value with no fancy functions" | Chris Coyier, CSS-Tricks, 2019-11-29, https://css-tricks.com/simplified-fluid-typography/ |
| F-20 | Utopia's own follow-on tool exists for projects that want fluid tokens without adopting the whole system: the Clamp Calculator lets you "define any number of custom fluid tokens between a set min/max viewport and export them as CSS" | Trys Mudford, Utopia, 2023-10-03, https://utopia.fyi/blog/clamp-calculator/ |
| F-21 | Utopia's earlier modular-scale post demonstrates the two-ratio idea (1.2 small, 1.33 large) but gives **no** guidance on choosing a ratio. Ratio choice is therefore a design judgment this file must make explicitly, not a sourced fact | Trys Mudford, Utopia, 2020-02-02, https://utopia.fyi/blog/css-modular-scales/ |
| F-22 | `text-wrap: balance` "is only supported for blocks of text spanning a limited number of lines (six or less for Chromium and ten or less for Firefox)". `text-wrap: pretty` is the body-copy variant, using "a slower algorithm that favors better layout over speed… when the number of orphans should be kept to a minimum." Baseline since March 2024 | MDN, *text-wrap*, last modified 2026-08-27, https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap |

### 2d. Pairing display and text faces

| # | Finding | Source |
|---|---|---|
| F-23 | Brown's method is judgment trained by use, not a formula: choose "based on real design goals, to truly understand why a combination works or doesn't", and identify successful combinations "by using them and looking at them carefully." The posture he asks for is "selective, patient, and reasonable" | Tim Brown, *Combining Typefaces* (Five Simple Steps, 2013), announcement and summary at Typekit Blog, 2016-04-29, https://blog.typekit.com/2016/04/29/combining-typefaces-free-guide-to-great-typography/. The PDF itself exceeded the fetch size limit — **not fetched**; nothing below rests on its interior |
| F-24 | Literata's design brief is long-form reading: commissioned by Google as "the brand typeface for Google Play Books", redrawn "from the ground up as a variable font", intended for "intensive editorial use", and claimed to exceed "the strict needs of a comfortable reading experience on any device, screen resolution, or font size." 48 styles across four optical-size cuts — Display, Subhead, Text, Caption | TypeTogether, *Literata*, https://www.type-together.com/literata-font |
| F-25 | Literata 3's optical cuts differ structurally, not just in size: the headline cut has "increased contrast, slightly compressed lettershapes, and tightened spacing", the caption cut's serifs are "much more robust and flat". The family's own usage rule: "extra-bold weights should never be used in caption printing sizes and thin typographic styles are not ideal for body copy" | TypeTogether, *Literata 3: a full digital publishing toolbox*, 2020-09, https://www.type-together.com/literata-3 |
| F-26 | Designers of record: "Veronika Burian and José Scaglione (Latin), Vera Evstafieva and Kiril Zlatkov (Cyrillic), Irene Vlachou and Gerry Leonidas (Greek)", commissioned by Google, first released 2015; version 3.103 released 2023-05-19; default font of Google Play Books since v3.4.5 | Wikipedia, *Literata*, last edited 2026-02-25, https://en.wikipedia.org/wiki/Literata |
| F-27 | Literata's variable axes as shipped by Google Fonts: **`opsz` 7–72** and **`wght` 200–900** | `google/fonts` `ofl/literata/METADATA.pb`, https://raw.githubusercontent.com/google/fonts/main/ofl/literata/METADATA.pb |
| F-28 | Documented Literata uses in the wild are editorial and institutional, not marketing: *SIDELINED: A Space to Rethink Togetherness* (2025, Dutch pavilion, Venice Biennale, Gabriel Fontana); *Network Imaginaries* (2021, Hackers and Designers); *RuT – Rad und Tat Berlin* (2023, studiokwi, listed as accessible/barrier-free design); *Posterwomxn* (2021, online magazine); *Tribute to Vietnam's Great Prime Ministers* (2024) | Fonts In Use, https://fontsinuse.com/typefaces/168709/literata |
| F-29 | Inter's brief: "a typeface carefully crafted & designed for computer screens. Inter features a tall x-height to aid in readability of mixed-case and lower-case text." Text cuts add "ink traps and bridges"; display cuts have "clean lines, smooth curves and delicate details for excellent rhythm of large text" | Rasmus Andersson, https://rsms.me/inter/ and https://github.com/rsms/inter |
| F-30 | **Inter Tight is the tight-spaced cut of Inter**: it was "specifically designed for Google Workspace and other applications that do not support control over letter spacing" and shares "the same glyph shapes as Inter" with tighter spacing. Inter itself was released 2017-08-22 "to improve on-screen readability for user interface text, especially at small sizes" and carries an optical-size axis; **Inter Tight does not**. Google Fonts' own metadata files it under category *Display, Sans Serif*, not *Text*. **Judgment, not established by this citation:** the source describes an origin (a letter-spacing-constrained environment) and a metadata category — it does not state that Inter Tight is unusable for body prose. Whether it reads well at body sizes is a design call this file makes, to be tested on the fixed copy, not a prohibition the source establishes | Wikipedia, *Inter (typeface)*, last edited 2026-07-04, https://en.wikipedia.org/wiki/Inter_(typeface); confirmed by `google/fonts` `ofl/intertight/METADATA.pb` (single axis `wght` 100–900, category *Display, Sans Serif*, designer Rasmus Andersson, added 2022-07-22), https://raw.githubusercontent.com/google/fonts/main/ofl/intertight/METADATA.pb |
| F-31 | Inter in the wild is overwhelmingly product and UI: Figma, Notion, GitLab, Mozilla, NASA, GNOME, elementary OS; 414 billion Google Fonts accesses in the twelve months to May 2025. Typewolf's independent gallery shows the same pattern — startups, platforms, portfolios — and its one house pairing recommendation for Inter is a serif (Bluu) | Wikipedia, *Inter (typeface)*; Typewolf, https://www.typewolf.com/inter |
| M-04 | Re-measured 2026-09-11 on the 410-character sample (see M-01): **Literata 0.512 em, Inter Tight 0.458 em** — Inter Tight sets the same sample **≈10% narrower** than Literata at the same size (10.5% on this sample; 10.0% on a prose-only sensitivity check with no alphabet, so the comparison is stable across sample choice even though the absolute means moved from the original 0.545/0.490), which corroborates F-30's "tighter spacing" claim with a number | Pillow `ImageFont.getlength()`, method as M-01 |

### 2e. Variable fonts

| # | Finding | Source |
|---|---|---|
| F-32 | The five registered axes are `wght`, `wdth`, `slnt`, `opsz`, `ital`. Measured payoff: "Storing 48 individual fonts in a single variable font file meant a 88% reduction in file size" — but "if you are using a single font such as Roboto Regular and nothing else, you might not see a net gain." `font-weight` drives `wght`, `font-stretch` drives `wdth`, `font-optical-sizing` drives `opsz`; `font-variation-settings` is a low-level escape hatch where "every property you *don't explicitly set* will automatically be reset to its default" | Dave Crossland, Mustafa Kurtuldu, Roel Nieskens, Thomas Steiner, web.dev, last updated 2018-02-19, https://web.dev/articles/variable-fonts |
| F-33 | `font-optical-sizing: auto` is the default and applies automatically to any font with an `opsz` axis: "small text sizes are often rendered with thicker strokes and larger serifs, whereas larger text is often rendered more delicately with more contrast between thicker and thinner strokes." Baseline widely available since March 2020 | MDN, *font-optical-sizing*, last modified 2026-09-10, https://developer.mozilla.org/en-US/docs/Web/CSS/font-optical-sizing |
| F-34 | Variable fonts are now the majority practice's fastest-growing lever: **39.4%** of desktop and **41.3%** of mobile sites used them in 2025, up from **33%** in 2024 | Charles Berret (analysis with Ivan Ukhov, reviewed by Bram Stein and José Solé), *Web Almanac 2025*, Fonts, https://almanac.httparchive.org/en/2025/fonts; Bram Stein & Charles Berret, *Web Almanac 2024*, Fonts, https://almanac.httparchive.org/en/2024/fonts |
| F-35 | web.dev's caveat, verbatim: a "single variable font replaces multiple files but contains larger file size; beneficial only for sites using multiple font weights/styles" | Katie Hempenius & Barry Pollard, web.dev, updated 2022-10-04, https://web.dev/articles/font-best-practices |
| F-36 | Google Fonts CSS v2 serves axis ranges with `..` (`family=Crimson+Pro:wght@200..900`), takes `display=auto\|block\|swap\|fallback\|optional`, and supports a `text=` parameter that "can reduce the size of the font file by up to 90%" (one `text=` per request, applied to all families) | Google, *Google Fonts CSS API v2*, https://developers.google.com/fonts/docs/css2 |

### 2f. Self-hosted font performance

| # | Finding | Source |
|---|---|---|
| F-37 | Format: "Use only WOFF2 and forget about everything else… WOFF2 is now supported everywhere"; WOFF2 "compresses 30% better than WOFF due to Brotli compression" | Hempenius & Pollard, web.dev, 2022-10-04 |
| F-38 | `font-display` strategy: `optional` is "most performant" — "text renders within 100ms with no layout shift risk"; `swap` for "branding and other visually distinctive page elements"; `block` when text must appear in the web font. "All strategies except `optional` risk layout shifts during font swapping" | Hempenius & Pollard, web.dev, 2022-10-04 |
| F-39 | Block-period durations: `block` blocks "up to 3 seconds (Chromium/Firefox); indefinite (Safari)"; `optional` blocks "100 milliseconds"; `fallback` is "extremely short". MDN's normative framing is the three periods — block, swap, failure — with `optional` giving "an extremely small block period and no swap period" | web.dev *Optimize web fonts*, Chrome team, updated 2023-11-01, https://web.dev/learn/performance/optimize-web-fonts; MDN *font-display*, last modified 2026-04-20, https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display |
| F-40 | Preload is a loaded gun: it is "highly effective at making fonts discoverable early… but takes away browser resources from loading other resources", and inlining the `@font-face` declarations may address the root cause better. The `crossorigin` attribute "is required for fonts — even self-hosted ones, as fonts are considered CORS resources" | Hempenius & Pollard, 2022-10-04; Chrome team, 2023-11-01 |
| F-41 | Practitioner ceiling on preloads: "limited to the most important one or two web fonts" (Leatherman); "preloaded requests will cannibalise bandwidth from other early requests", so limit to "two or three font files" (Hearne) | Zach Leatherman, *A Comprehensive Guide to Font Loading Strategies*, 2016-07-12, updated 2017-07-27, https://www.zachleat.com/web/comprehensive-webfonts/; Simon Hearne, 2021-01-19, https://simonhearne.com/2021/layout-shifts-webfonts/ |
| F-42 | Measured subsetting gains: Roboto from **66 KB to 11 KB** (Hearne); `LatoLatin-Regular` from **145.06 KB to 70.25 KB** subset, and to **28.73 KB** as WOFF2 (glyphhanger's own output); Latin faces typically carry 100–1,000 glyphs against CJK's 10,000+ | Hearne 2021-01-19; Zach Leatherman, *glyphhanger*, https://github.com/zachleat/glyphhanger; Hempenius & Pollard 2022-10-04 |
| F-43 | The subsetting toolchain: `pyftsubset` takes `--unicodes` ("comma/whitespace-separated list of Unicode codepoints or ranges as hex numbers"), `--text` ("characters to include in the subset, as UTF-8 string"), `--layout-features`, `--flavor` ("may be 'woff' or 'woff2'"), `--desubroutinize` and `--drop-tables` | fontTools, *subset*, https://fonttools.readthedocs.io/en/latest/subset/index.html |
| F-44 | `unicode-range` defers the download until a codepoint in the range is actually used: `@font-face { font-family: 'Awesome Font'; unicode-range: U+000-5FF; src: url('/fonts/awesome-l.woff2') format('woff2'); }`. Fonts "are static resources that are infrequently updated. Make sure that your servers provide a long-lived max-age timestamp" | Ilya Grigorik, web.dev, updated 2019-08-16, https://web.dev/articles/optimize-webfont-loading |
| F-45 | The fallback-metric descriptors and what each does. `size-adjust` "defines a multiplier for glyph outlines and metrics associated with this font… all metrics… are scaled by the given percentage", initial `100%`. `ascent-override` "defines the ascent metric", the height CSS uses to lay out line boxes, initial `normal`; `descent-override` and `line-gap-override` are its siblings | MDN, *size-adjust* and *ascent-override*, both last modified 2026-04-20, https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/size-adjust, https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/ascent-override |
| F-46 | How to derive them, and the disagreement about how. Stefanov: "Malte's tool brute forces the discovery of `size-adjust`… then does the same for `ascent-override` to correct the height. Katie's article suggests… we should use the font meta data instead." His own tool starts from metadata, computes `size-adjust`, then corrects the height. A real shipped block looks like `ascent-override: 89.7%; descent-override: 35%; line-gap-override: 10%; size-adjust: 111.66%`. Caveats he names: "Arial is missing from some Android distributions"; "`local()` is a strange beast… browser- and OS-dependent"; "Safari only supports `size-adjust`" and using it alone "will more often lead to worse results"; results "really depend on the actual text being rendered" | Stoyan Stefanov, Web Performance Calendar, 2024-12-31, https://calendar.perfplanet.com/2024/fabulous-font-face-fallbacks/ |
| F-47 | Hearne's limit on the technique: "F-mods only really modify vertical spacing" and cannot fix horizontal differences without fragile JavaScript — which is why `size-adjust` (a horizontal *and* vertical multiplier) has to be part of the set | Simon Hearne, 2021-01-19 |
| F-48 | Even `font-display: block` shifts layout, because "the browser still reserves space for the web font text" using fallback metrics; the fix is `swap` plus metric overrides derived from the real font metrics (e.g. `ascent-override: 110%` from `1100 / 10 = 110%`) | Umar Hansa, DebugBear, 2024-06-06, updated 2025-11-30, https://www.debugbear.com/blog/web-font-layout-shift |
| F-49 | The Core Web Vitals framing: "sites should strive to have a CLS of 0.1 or less for at least 75% of page visits", and the four font remedies are `font-display: optional`, well-chosen fallbacks, "size-adjust, ascent-override, descent-override, and line-gap-override", and `<link rel=preload>` for critical faces | Addy Osmani & Barry Pollard, web.dev, 2020-05-05, updated 2025-02-07, https://web.dev/articles/optimize-cls |
| F-50 | `font-size-adjust` (the property, distinct from the `size-adjust` descriptor) normalises a chosen metric across faces — `font-size-adjust: ex-height 0.5`, or `cap-height`, `ch-width`, `ic-width`, `ic-height`, plus `from-font`. "This property is intended for adjusting fallback fonts to have similar metrics as the first-choice font." Baseline newly available since July 2024 | MDN, *font-size-adjust*, last modified 2026-09-01, https://developer.mozilla.org/en-US/docs/Web/CSS/font-size-adjust |
| F-51 | Field baseline, 2025: **88%** of sites use web fonts; WOFF2 is about **65%** of font requests; `font-display` splits `swap` 49.6% / `block` 24.7% / `auto` 9.1% / `fallback` 5.1% / `optional` **0.4–0.5%**; preload hints on **12.0%** of desktop pages; median font file in the mid-to-upper 30s KB compressed. 2024's comparable numbers: 87% web font use, `swap` 44%, preload 11%, median font file 39 KB / p75 76 KB / p90 116 KB | *Web Almanac 2025*, Fonts, Charles Berret et al.; *Web Almanac 2024*, Fonts, Bram Stein & Charles Berret |
| F-52 | CSS weight fallback is directional, and the direction differs above and below 500. "If a weight greater than `500` is given: look for available weights greater than the target, in ascending order. If no match is found, look for available weights less than the target, in descending order." For a target between 400 and 500 inclusive the search runs up to 500 first, then **down**, then above 500 | MDN, *font-weight*, last modified 2026-08-11, https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight. (The normative CSS Fonts 4 §5 text was **not fetched** — the section did not render in the fetched document; MDN is used as the citable statement of the same rule) |

### 2g. Measurements of this repository's own font payload

| # | Measurement | Method |
|---|---|---|
| M-05 | Re-verified 2026-09-11, unchanged. The mirror self-hosts **18 raw TTF files totalling 4,506,720 bytes (4.30 MB)**: 8 Literata (248–261 KB each), 7 Inter Tight (305–317 KB each), 3 Inconsolata (~102 KB each). **Zero WOFF2.** gzip at level 9 halves them to 2,193,883 bytes (48.7%) — a conservative proxy, since WOFF2's Brotli plus glyph-aware preprocessing beats generic gzip (F-37) | Standard library only, no font-parsing tool needed: `os.walk` + `os.path.getsize` + `gzip.compress(level=9)`. `measurements/K2/measure.py`, `output.md` |
| M-06 | Re-verified 2026-09-11, unchanged. **None of the 18 files is a variable font** — all are static | Pillow raises `OSError` from `get_variation_axes()` on every one of the 18 (a variable font would return axis data instead); no direct `fvar`-presence accessor exists in Pillow, so this exception is the static/variable test. `measurements/K2/measure.py`, `output.md` |
| M-07 | Corrected 2026-09-11: **18 of the 19** `@font-face` blocks in `gt-anywhere.webflow.shared.b79022343.min.css` declare `font-display: swap`, not all 19 — the 19th is the inline base64 `webflow-icons` glyph font (not one of the three text faces), which sets no `font-display` at all (defaults to `auto`). `index.html` still contains **zero** `rel="preload"` links | Parsed each `@font-face{...}` block with a regex over the CSS text and checked each for `font-display:swap`, rather than a line-count `grep -c` (which undercounts a minified, mostly-one-line file). `measurements/K2/measure.py`, `output.md` |
| M-08 | Re-verified 2026-09-11, unchanged. Declared weights: Literata 300/400/500/**700** (roman + italic), Inter Tight 300/400/500/**700** (roman + italic, 300-italic missing), Inconsolata 300/400/**600** (roman only). **Neither Literata nor Inter Tight has a 600 face on Anywhere.** The five current mockups write `font-weight: 600` **58 times**; 45 of them sit in Literata or Inter Tight rules and by F-52 render at **700**; the other 13 sit in `--font-mono` rules and use Inconsolata's shipped 600 (corrected after E5c, 2026-09-11). The live sites' CTA rule asks for Inconsolata 500 (R1-design-tokens.md line 263, the shared `.button`/`.button-2`/`.menu_button` rule), which by the same rule falls **down** to 400, not up to 600 | Regex over the shared stylesheet's `@font-face` blocks; regex `font-weight:\s?[0-9]{3}` over every file under `0_plan/mockups/M*/`. `measurements/K2/measure.py`, `output.md` |
| M-09 | Re-measured 2026-09-11 with the M-01/M-04 sample (size-adjust changed; ascent/descent/line-gap-override recomputed from the unchanged M-02 figures divided by the new size-adjust, so they moved only slightly): **Literata over Georgia** — `size-adjust: 108.40%`, `ascent-override: 108.58%`, `descent-override: 28.41%`, `line-gap-override: 0%`. **Inter Tight over Arial** — `96.28% / 100.64% / 25.13% / 0%` (the raw output shows −0.10%, which is a single-unit Pillow rounding artifact at size 1000 on a face whose real lineGap is 0, not a measured negative gap). **Inconsolata over Courier New** — `83.33% / 103.08% / 22.80% / 0%`. Each set still reproduces the web font's own default line box (1.485 em, 1.210 em, 1.049 em) | `size-adjust = webfont_mean_advance / fallback_mean_advance` (same sample as M-01/M-04); `ascent-override = webfont_ascent_em / size-adjust`, and likewise for descent and line-gap (Stefanov 2024-12-31, F-46). Confirmed by re-deriving the *original* Literata-over-Georgia figures from this formula before trusting it on new inputs. `measurements/K2/measure.py`, `output.md` |
| M-10 (new, added in the rework) | Literata Bold (700) sets the same sample **≈6.4% wider** than Literata Regular (0.544 em vs 0.512 em mean advance), not the 5% the file previously cited from a mislabeled M-04 (M-04 is a Literata-vs-Inter-Tight comparison, not a weight comparison — Astra's E4 finding). Used in 5b to justify Literata 400 over 700 for the h1 | Pillow `ImageFont.getlength()` on Literata Regular and Literata Bold, same sample as M-01. `measurements/K2/measure.py`, `output.md` |

---

## 3. Principles the studio adopts

Read as reasoning the sources and measurements below support, not as a settled rule set. Where
a principle assigns a specific role to a specific face (P7 in particular) or a specific number
(P2, P3, P9), it is a proposal for DD-01/DD-19/DD-36, to be confirmed by testing the fixed copy
at the QA matrix widths (R4, `KB-RESOLUTIONS.md`) before it becomes a shared rule; briefs may
choose differently within DD-01's three retained families until that test runs.

| # | Principle | Traces to |
|---|---|---|
| P1 | **Fluid where it is display, anchored where it is read.** Every type token is a `clamp()` whose preferred value is ≥90% `rem` for reading steps; `vw` supplies the increment only. Small steps (`xs`, `sm`) barely move at all | F-12, F-16, F-17, F-18 |
| P2 | **Two ratios, not one.** A tighter scale on the phone and a more open one on the desktop, because a 360px screen cannot hold the contrast a 1440px screen invites | F-12, F-13, F-21 |
| P3 | **The scale serves the sentence.** A 132-character umbrella sentence takes a smaller top step than a three-word headline would. Where the modular ratio and the line count disagree, the line count wins | F-05, F-12 (the caveat), M-01 |
| P4 | **Measure is set in characters, then expressed in `ch` with the face's own correction factor.** Never assume `66ch` is 66 characters | F-01, F-02, F-06, M-01 |
| P5 | **Leading is a property of the face, not a global number.** Literata's natural line box is 1.485 em and Inter Tight's is 1.210; one `--leading-body` applied to both is a design decision that must be made per role, not inherited | F-07, F-08, F-11, M-02 |
| P6 | **Pair by optical size, not by nominal size.** Inter Tight needs 92.9% of Literata's `font-size` to match x-height; Inconsolata needs 116.8% of Inter Tight's to match cap height. Matching numbers do not match eyes | F-11, F-23, M-03 |
| P7 | **Each face works where it was drawn to work.** Literata carries reading copy (it is a book face with an `opsz` axis); Inter Tight carries UI, labels and nav (it is the tight display cut of a UI face, with no `opsz`); Inconsolata carries small structural labels. A long paragraph set in Inter Tight is using the wrong tool | F-24, F-25, F-29, F-30, F-31, M-04 |
| P8 | **WOFF2, subset, and only the faces the page uses.** Raw TTF is not a shipping format; unused weights are not a design system | F-37, F-42, F-43, M-05, M-08 |
| P9 | **Preload two faces at most, and prove the fallback with metrics.** Preload exactly the faces that paint above the fold at 390px, and give every one of them a metric-matched local fallback so the swap is invisible | F-40, F-41, F-45, F-46, F-48, F-49, M-09 |
| P10 | **Zoom is a test, not a claim.** No fluid scale ships until body text has been measured at 200% in the browser, at the zoom viewports already in the QA matrix | F-16, F-09 |

---

## 4. Anti-patterns

| # | Anti-pattern | Why it is one | Where it already bites GT |
|---|---|---|---|
| A1 | Sizing type from `vw` with no `rem` floor, or clamping the maximum below 2× the base | Users cannot reach 200% text — a WCAG 1.4.4 failure (F-16) | Not yet present; the proposed scale is built to avoid it |
| A2 | Treating `ch` as "characters" | `1ch` is the advance of `0`, which is 13% wider than Literata's mean character and 26% wider than Inter Tight's (re-measured 2026-09-11, M-01). A `66ch` column sets 75 and 83 characters respectively — the second **exceeds** the WCAG 80 ceiling, not merely approaches it (F-03, F-06, M-01) | Any `max-width: 66ch` written from habit |
| A3 | One `line-height` for all three faces | The faces' own line boxes differ by 0.44 em (M-02). The current single `--leading-body: 1.25` under-leads Literata badly | `tokens.css` today |
| A4 | Body leading below 1.5 | Butterick's 120–145% is a print rule for a controlled measure; on the web F-08 asks 1.5 within paragraphs and F-10 calls 150% the rule of thumb. 1.25 also leaves no headroom for the SC 1.4.12 (AA) 1.5× user override | `--leading-body: 1.25` in `tokens.css` |
| A5 | Shipping raw TTF | 4.30 MB across 18 files, when the field median font file is 39 KB (F-51) and WOFF2 plus subsetting routinely cuts a Latin face to ~29 KB (F-42) | M-05 — the live Anywhere site today |
| A6 | Declaring weights the design does not use, and using weights the fonts do not have | 58 uses of `font-weight: 600` silently render 700; Inconsolata 500 silently renders 400 (F-52, M-08) | The five current mockups and both live sites' CTA rule |
| A7 | A mono fallback that is not monospaced | `--font-mono: Inconsolata, Arial, sans-serif` falls back to a proportional sans, so every tabular label reflows if Inconsolata fails | `tokens.css` line 7 |
| A8 | `WebFont.load()` re-fetching a face that is already self-hosted | R1 §2 found both live sites pulling Inconsolata 400/700 from Google Fonts on top of local files — pure wasted weight, and a third-party connection on a page that does not need one | Both live sites; already logged as T-065 |
| A9 | A stock "big type" hero with a long sentence in it | At 52px in a 768px column the umbrella sentence runs to five lines and 299px; Nari's own named failure mode is "big type over thin content" | `0_plan/06` M3 risk row |
| A10 | Relying on `text-wrap: balance` for the phone h1 | Chromium only balances blocks of six lines or fewer (F-22); the umbrella sentence is exactly six lines at 360px, so the effect silently disappears one word later | The proposed h1 setting — mitigated by treating balance as an enhancement, never as layout |

---

## 5. How it applies to GT

**Status per R4 (`KB-RESOLUTIONS.md`):** the specific scale steps, display weight, body/UI role
split and leading below are a proposal for DD-01/DD-19/DD-36, not a necessity this file's
measurements establish on their own. DD-01's three families stand; the display weight (Literata
300 or 400), which face carries body prose, and the specific leading values are to be tested by
rendering the fixed copy at the QA matrix widths before any of them becomes a shared rule. Until
that test runs, a brief may choose differently within the three families.

### 5a. The fluid type scale

Ramp endpoints are **360px and 1440px**, not 360 and 1920. 360px is the narrowest device in the
QA matrix (`17` section 4); 1440px is `--container-max` and this project's desktop verification
width (R1 C5). Above 1440 the column stops growing, so type that kept growing would shrink the
measure below the band in F-01 — the scale therefore **holds flat from 1440 to 1920 by design**,
and the 1920 column of the QA matrix tests that nothing looks empty, not that the type is larger.

```css
/* Fluid type — ramp 360px → 1440px, flat outside it.
   Preferred value = rem intercept + vw slope (F-15, F-17); the rem share is
   quoted per step because it is what keeps 200% zoom reachable (F-16). */
--text-xs:    clamp(0.7500rem, 0.7292rem + 0.0926vw, 0.8125rem); /* 12 → 13px, 97% rem */
--text-sm:    clamp(0.8750rem, 0.8542rem + 0.0926vw, 0.9375rem); /* 14 → 15px, 98% rem */
--text-base:  clamp(1.0000rem, 0.9583rem + 0.1852vw, 1.1250rem); /* 16 → 18px, 96% rem */
--text-md:    clamp(1.1250rem, 1.0833rem + 0.1852vw, 1.2500rem); /* 18 → 20px, 96% rem */
--text-lg:    clamp(1.2500rem, 1.1667rem + 0.3704vw, 1.5000rem); /* 20 → 24px, 93% rem */
--text-xl:    clamp(1.3750rem, 1.2500rem + 0.5556vw, 1.7500rem); /* 22 → 28px, 91% rem */
--text-2xl:   clamp(1.5000rem, 1.2917rem + 0.9259vw, 2.1250rem); /* 24 → 34px, 86% rem */
--text-3xl:   clamp(1.6875rem, 1.2917rem + 1.7593vw, 2.8750rem); /* 27 → 46px, 77% rem */
--text-btn:   clamp(1.0625rem, 1.0417rem + 0.0926vw, 1.1250rem); /* 17 → 18px, 98% rem — Inconsolata only */
```

Rendered sizes (px) at the QA matrix widths:

| token | 360 | 390 | 412 | 768 | 1024 | 1280 | 1440 | 1920 | role |
|---|---|---|---|---|---|---|---|---|---|
| `--text-xs` | 12.0 | 12.0 | 12.0 | 12.4 | 12.6 | 12.9 | 13.0 | 13.0 | Inconsolata micro-labels, legal |
| `--text-sm` | 14.0 | 14.0 | 14.0 | 14.4 | 14.6 | 14.9 | 15.0 | 15.0 | provenance line, captions, table row labels |
| `--text-base` | 16.0 | 16.1 | 16.1 | 16.8 | 17.2 | 17.7 | 18.0 | 18.0 | body prose, table cells |
| `--text-md` | 18.0 | 18.1 | 18.1 | 18.8 | 19.2 | 19.7 | 20.0 | 20.0 | door lines, lead paragraphs |
| `--text-lg` | 20.0 | 20.1 | 20.2 | 21.5 | 22.5 | 23.4 | 24.0 | 24.0 | h5, card titles |
| `--text-xl` | 22.0 | 22.2 | 22.3 | 24.3 | 25.7 | 27.1 | 28.0 | 28.0 | h4, door school names |
| `--text-2xl` | 24.0 | 24.3 | 24.5 | 27.8 | 30.1 | 32.5 | 34.0 | 34.0 | h3, section headings |
| `--text-3xl` | 27.0 | 27.5 | 27.9 | 34.2 | 38.7 | 43.2 | 46.0 | 46.0 | h1, the umbrella sentence |

Implied ratio ≈ 1.11 at 360px and ≈ 1.20 at 1440px — P2's two ratios. Three departures from the
fixed values now in `tokens.css`, each with its reason: `--text-xl` 24 → 22–28 (h4 was jumping a
whole step on the phone), `--text-2xl` 32 → 24–34, `--text-3xl` 52 → 27–46 (see 5b). `--text-btn`
is new and exists only because of M-03. Keep `--font-serif`, `--font-sans`, `--font-mono` and the
palette exactly as they are; this is a scale departure under DD-19, not a families departure.

Fallback line for F-19: `font-size: 1rem;` immediately before each `clamp()` in the reset, so a
parser that chokes on `clamp()` still gets a readable page.

### 5b. Measure and leading, per element

All character counts are the real copy from `mockups/shared/copy.md`: the umbrella sentence is
**132 characters**, door line 1 is **115**, door line 2 is **108**, the longest table cell is
**155**. `ch` values below already carry the correction factor re-measured for M-01 (Literata
×0.884, Inter Tight ×0.793, Inconsolata ×1.000 — see M-01 for the sample and why these replace
the original 0.941/0.848), so a stated character target is the number the reader actually sees.

| Element | Face / weight | Size | `max-width` | Leading | Modelled result |
|---|---|---|---|---|---|
| **Umbrella sentence (h1)** | Literata 400 (not 700 — M-10 shows bold sets ≈6.4% wider and costs a line) | `--text-3xl` | `35ch` (≈ 40 characters) | `1.15` | 6 lines / 186px at 360; 6 / 190 at 390; 4 / 157 at 768; 4 / 212 at 1440 and 1920 — not re-simulated in this pass (word-wrap depends on per-word widths, not the mean-character ratio corrected here); treat as a rendered-test item, not a fact this file re-establishes. `text-wrap: balance` as an enhancement only (A10) |
| **Provenance line** | Inter Tight 400 | `--text-sm` | `56ch` (≈ 71 chars) | `1.4` | 46 characters — one line at every width |
| **Door name** | Inter Tight 500 | `--text-xl` | none (short) | `1.2` | one line at every width |
| **Door line** | Literata 400 | `--text-md` | `62ch` (≈ 70 chars) | `1.5` | 4 lines at 360–768, 3 at 1024, 2 at 1440 — not re-simulated (see the h1 row's note). The cap never binds inside a half-width panel; it exists so a full-width panel cannot exceed the band |
| **Table cell** | Literata 400 | `--text-base` | cell width | `1.5` | Recomputed with the new ratio, same modelled column widths as before (390/768/1024 px, held constant): **44 chars/line at 390 (stacked); 27 chars/line at 768 and 39 at 1024 in the two-column layout — all three still below the 45 floor (F-01, F-05)** |
| **Table row label** | Inconsolata 400, uppercase | `--text-sm`, `letter-spacing: .04em` | — | `1.3` | — |
| **Button label** | Inconsolata 400 uppercase (**not 500** — M-08) | `--text-btn` | — | `1.15`, `min-height: 44px` | "Explore the Georgetown campus" = 246px of glyphs at 360px; 311px with 20px padding each side and 0.04em tracking. Fits a 328px column with 17px to spare |

Two consequences, recomputed with the new ratio; per R6 (`KB-RESOLUTIONS.md`) neither is a fixed
rule this file can set on its own — the actual switch point is measured against the fixed copy
and the available width in the runner, not asserted here as a universal number:

1. **The comparison table's two-column layout clears the 45-character floor later than 768px,
   and not before roughly the low 1100s px.** The copy deck's current breakpoint puts a
   155-character cell into a modelled 232px column at 768px — now 27 characters a line (was 25),
   six lines deep (was seven). Extrapolating the same modelled column-width growth used above, the
   45-character floor is crossed around **1150px**, not the previously stated 1280px — but per R6
   this is still this file's model, not a measurement; DD-06's readable stacked-block layout stays
   the fallback until the actual breakpoint is measured in the runner against the real CSS grid.
2. **`--leading-body` moves from 1.25 to 1.5 for prose and table cells**, keeping 1.25 only for
   compact UI strings that are never more than two lines. Literata's own default line box is 1.485
   em (M-02, unchanged by this rework); 1.25 fights the face, and SC 1.4.12 (AA) means the layout
   must survive the user forcing 1.5 anyway (F-09). Add `--leading-ui: 1.25` rather than
   overloading one token (A3). Per R4/DD-36, this leading choice is a proposal to confirm on the
   fixed copy, not a shared rule yet.

### 5c. The font-loading plan

**Faces to ship — five, down from eighteen.** Literata 400 and 700; Inter Tight 400 and 500;
Inconsolata 400. Drop the six Literata/Inter Tight italics and all four 300-weight faces unless a
mock actually calls for them (M-08 shows no mock does). Then fix the mocks' 58 `font-weight: 600`
declarations to 500 or 700 deliberately, so the rendered weight is the designed weight (A6).

**Format and subsetting.** Convert every kept face to WOFF2 (F-37) and subset with `pyftsubset`
(F-43) to Basic Latin plus the punctuation the copy deck actually uses:

```
pyftsubset Literata-Regular.ttf --flavor=woff2 --desubroutinize \
  --unicodes="U+0020-007E,U+00A0,U+00A9,U+2013,U+2014,U+2018,U+2019,U+201C,U+201D,U+2026,U+2192" \
  --layout-features="kern,liga,calt,onum,tnum" \
  --output-file=literata-400.latin.woff2
```

`U+2192` is the right arrow in "Explore the Georgetown campus →"; `tnum` is kept because the
comparison table carries `$10,400` and `90th`. Expect a face in the 25–40 KB band on the evidence
of F-42 and F-51 — **measure it, do not assume it**; the raw starting point is 255 KB (M-05).
`unicode-range` splitting (F-44) is not worth it for one Latin subset; revisit only if a Spanish
page ships.

**A variable alternative, flagged as a departure.** Literata's variable font carries `opsz` 7–72
and `wght` 200–900 (F-27), which would let the umbrella sentence take a display optical size and
the table cells a text one from a single file, with `font-optical-sizing: auto` doing it for free
(F-33). Inter Tight's variable is `wght`-only (F-30). Against it: F-35's caveat that a variable
font wins only across several weights, and this page uses three. Recommendation: **build static
first, then measure a variable build against it and keep whichever is smaller**, per F-32's honest
framing. Adoption is 39.4% of desktop sites (F-34), so neither choice is exotic.

**Preload — exactly two.** The two faces that paint above the fold at 390px: **Literata 400** (the
umbrella sentence) and **Inter Tight 500** (the header lockup and door names). Both need
`crossorigin` even though they are same-origin (F-40):

```html
<link rel="preload" as="font" type="font/woff2" crossorigin
      href="/fonts/literata-400.latin.woff2">
<link rel="preload" as="font" type="font/woff2" crossorigin
      href="/fonts/intertight-500.latin.woff2">
```

Inconsolata is **not** preloaded: it sets button labels, which are short, and F-41's ceiling is two
to three. A QA assertion should fail the build if the page carries more than two font preloads.

**`font-display`.** Keep `swap` on the two preloaded display faces (F-38: swap for "branding and
other visually distinctive page elements") and use `optional` for Inconsolata, whose absence costs
nothing (F-38, F-39). Note the field context: `optional` is used by 0.4–0.5% of pages (F-51), so
this is a deliberate minority choice, not a default — it is defensible here only because the
fallback is metric-matched below.

**Fallback stacks with metric overrides.** Measured, not brute-forced (M-09, re-measured
2026-09-11). Each block's ascent/descent/line-gap overrides reproduce the web font's own default
line box, so the swap should not shift the line vertically — that is an overridden-metrics claim,
not a claim about every glyph. `size-adjust` matches the fallback's *average* advance to the web
font's; it does not match every individual glyph, so the fallback can still wrap a paragraph
differently (a different word may fall at the end of a line) even with the vertical metrics
aligned. Overstating this as "moves nothing" was Astra's E4 finding; the corrected claim is
vertical-only, and reflow still needs the same rendered check T-K2-7 already asks for:

```css
@font-face { font-family: "Literata Fallback"; src: local("Georgia"), local("Times New Roman");
  size-adjust: 108.40%; ascent-override: 108.58%; descent-override: 28.41%; line-gap-override: 0%; }
@font-face { font-family: "Inter Tight Fallback"; src: local("Arial"), local("Helvetica");
  size-adjust: 96.28%; ascent-override: 100.64%; descent-override: 25.13%; line-gap-override: 0%; }
@font-face { font-family: "Inconsolata Fallback"; src: local("Courier New");
  size-adjust: 83.33%; ascent-override: 103.08%; descent-override: 22.80%; line-gap-override: 0%; }

--font-serif: Literata, "Literata Fallback", Georgia, "Times New Roman", serif;
--font-sans:  "Inter Tight", "Inter Tight Fallback", Arial, Helvetica, sans-serif;
--font-mono:  Inconsolata, "Inconsolata Fallback", "Courier New", ui-monospace, monospace;
```

Three corrections to the current `tokens.css` are folded in: the mono stack now ends in a
monospace instead of `Arial, sans-serif` (A7); the serif stack keeps Georgia first because M-09's
overrides are computed against Georgia; and the `"Intertight"` / `"Inter Tight"` string mismatch
R1 §2 flagged must be resolved to `"Inter Tight"` when the faces are rebuilt. Carry F-46's caveats
into the QA notes: Safari honours only `size-adjust`, `local()` resolution is OS-dependent, and
Arial is absent from some Android builds — which is why each stack names a second `local()` and a
generic.

**What this is worth.** 18 raw TTFs at 4.30 MB become 5 subset WOFF2 faces; on F-42's evidence
that is roughly 4.15 MB of font weight removed from the critical path, against a `swap`-with-
matched-metrics path that should keep font-attributable CLS at zero (F-48, F-49). Verify against
REQ-073 and T-059 rather than quoting this paragraph as a result.

### 5d. A calibrated 5 for the rubric row **Typography**

`17` section 6 asks the critic: *"Are the scale, measure and pairing deliberate? Does the display
type carry personality without hurting reading?"* — evidenced by zoomed crops of the h1, a table
row and a button. Calibration:

| Score | What it looks like |
|---|---|
| **1** | Browser defaults or one size doing three jobs. Headings distinguished by bold alone. Measure unbounded — a full-width paragraph at 1440. No `ch` or `max-width` anywhere |
| **2** | A scale exists but is copied, not chosen: fixed px steps, a mobile jump at one breakpoint, `line-height` set once globally. Body text under 16px somewhere. Faces used interchangeably |
| **3** | The tokens are used consistently and the page reads cleanly, but the numbers are inherited rather than reasoned: `66ch` written as if it were 66 characters, one leading for serif and sans alike, the h1 at whatever the top step happens to be regardless of how many lines the sentence takes |
| **4** | Every element takes a named step; measure is capped per face with the correction factor applied; leading differs for reading text and UI text; the pairing follows P7 (Literata reads, Inter Tight labels, Inconsolata structures); the scale is fluid and `rem`-anchored; 200% zoom has been run |
| **5** | Everything in 4, **and** the type is doing argument-work. The umbrella sentence is set at a size chosen from its own character count, holding a stable 4–6 lines from 360 to 1920 with no orphan and no widow at any matrix width. Optical relationships are corrected, not nominal — the Inconsolata label beside an Inter Tight one has matching cap heights (M-03), the sans deck under the serif h1 does not out-shout it. The three faces read as one voice with three registers, and a crop of the h1, a table row and a button, shown without context, would let a designer name which school-facing surface each came from. Nothing is bold that could be a size change; nothing is a size change that could be a space change. The whole scale fits on one screen of CSS and every step has a job |

Exemplar to keep beside the rubric: Fonts In Use's Literata entries (F-28) are the register to aim
at — editorial and institutional. `RuT – Rad und Tat Berlin` is listed there specifically as
barrier-free design, which is the exact intersection GT needs: serious, warm, and legible under
the user's own text settings.

### 5e. QA tests this cluster adds to `1_spec/13`

| Test | Assertion |
|---|---|
| T-K2-1 | At every matrix width, no text block exceeds its face's 80-character cap (`71ch` Literata, `63ch` Inter Tight, `80ch` Inconsolata — recomputed 2026-09-11 from the re-measured M-01 ratio) — F-03, M-01 |
| T-K2-2 | At 390 width with the root font size doubled (a stand-in for a user's larger-text setting, not real page zoom — see 5f), every fluid step should clamp to its `rem`-only minimum bound and land at 196–200% of its 100% value; flag anything under 196% for the escalation table — F-16, and the corrected 199.3% figure for `--text-base` in 5f |
| T-K2-3 | The umbrella sentence renders 4–6 lines at every matrix width, with no final line shorter than two words |
| T-K2-4 | Exactly two `<link rel="preload" as="font">` elements; both `crossorigin`; both WOFF2 — F-40, F-41 |
| T-K2-5 | No `@font-face` references a `.ttf`; no page requests a font from a third-party host — F-37, A8 |
| T-K2-6 | Every `font-weight` used in CSS matches a declared `@font-face` weight for that family — F-52, M-08 |
| T-K2-7 | Font-attributable layout shift is zero: compare element positions with the web fonts blocked and loaded — F-48, F-49, M-09 |

### 5f. Honest ledger of what this proposal costs

| Item | Cost | Position |
|---|---|---|
| Corrected 2026-09-11 (Astra's E4 finding: the original 195.5% omitted the clamp minimum). Full working for `--text-base` at 390px, root font size doubled (T-K2-2's model — a stand-in for a larger-text accessibility setting, which changes the root font size but not the viewport width; real browser page zoom is a different mechanism and still needs its own rendered test): at 100%, preferred = 0.9583rem × 16px + 0.1852vw × 3.90px/vw = 15.3328 + 0.7223 = **16.055px**. Doubling the root font size doubles every `rem`-anchored value in the clamp — the min bound (1.0000rem → 32px), the max bound (1.1250rem → 36px), *and* the rem term of the preferred value (0.9583rem → 30.666px) — but leaves the `vw` term unchanged, since the viewport width itself did not move: preferred(200%) = 30.666 + 0.7223 = **31.388px**. Because 31.388px is *below* the doubled min bound of 32px, `clamp()` floors the result at the minimum: the rendered size is **32px**, not 31.388px — the step Astra's item says the original calculation skipped. Ratio = 32 / 16.055 = **199.3%**, not 195.5%. Every other fluid step behaves the same way at 390px (each clamps to its doubled minimum) and lands between 196.2% (`--text-3xl`) and 199.7% (`--text-btn`) — see `0_plan/kb/measurements/K2/output.md` for the per-token table | Effectively no shortfall against SC 1.4.4 at this model (≥196% throughout, not the ≤195.5% originally reported) | This is a CSS-clamp arithmetic model, not a rendered measurement, and it tests a root-font-size change, not real browser page zoom, which shrinks the effective viewport width in CSS px as it zooms and behaves differently again. T-K2-2 still needs to run in an actual browser before this is treated as settled |
| `--text-3xl` maximum (46px) is below the live sites' 52px h1 | A visible reduction on desktop | Defended: at 52px the umbrella sentence takes 5 lines and 299px in a 768px column (modelled). This is a DD-19 departure and needs a flag, not a silent change |
| Dropping italics and 300-weights | Removes options | Reversible; re-add a face the moment a mock needs it. Nothing in the copy deck uses italic today |
| `font-display: optional` on Inconsolata | 0.4–0.5% of the web does this (F-51) | Deliberate minority choice, defensible only with the matched fallback; drop to `swap` if button labels visibly fail to upgrade in testing |

---

## 6. Open questions

| # | Question | Why it is not evidence | Route |
|---|---|---|---|
| OQ-1 | Which Literata optical cut do the shipped static files correspond to? | The files carry no `fvar` (M-06) and no name-table cue was parsed. F-25 says the four cuts differ structurally, so the answer changes whether the 46px h1 looks right | Read the `name` table, or rebuild from the Google Fonts variable source and pin `opsz` explicitly |
| OQ-2 | Exact WOFF2 byte sizes after subsetting | gzip (M-05) is a proxy, not WOFF2. No converter was available in this environment and none was installed | Measure in the build step; record in `1_spec/10` |
| OQ-3 | Whether Georgia and Arial are present on the Android devices in GT's traffic | F-46 warns Arial is missing from some Android builds; the fallback stack depends on it | Check GA4 device data (`0_plan/10`); the second `local()` and the generic already hedge it |
| OQ-4 | Whether Nari reads a 46px h1 as a reduction from 52px or simply as the design | Aesthetic judgment, not a sourced fact | Show both in the R1 concept grid and let G1 decide |
| OQ-5 | The normative CSS Fonts 4 §5 matching text | The section did not render in the fetched document (**not fetched**); F-52 uses MDN's statement of the same rule | Re-fetch the dated Working Draft if a register row ever turns on the exact wording |
| OQ-6 | Whether Inter Tight or plain Inter is the right sans | Both live sites ship Inter Tight, so continuity says keep it (DD-19). But F-30 says Inter Tight exists for environments that cannot control letter-spacing — which a hand-built CSS site is not, and Google Fonts files it under *Display* | Raise as a DD row after G1. Plain Inter would bring an `opsz` axis and looser, more readable body spacing; the cost is a real departure from both live sites |
| OQ-7 | A second, distinct letter-spacing system | R1 §9 could not determine one; Anywhere declares `wide .125rem` / `wider .25rem` but nothing in this file establishes a value for uppercase Inconsolata beyond the 0.04em proposed from cap-height reasoning | Decide in the mocks and log as an MD row |

---

## 7. Sources fetched

Fifty-one URLs were fetched for this file, **one of them partial**: CSS Fonts 4 was reached, but
its §5 (the section F-52 needed) did not render in the fetched document, so F-52 cites MDN's
statement of the same normative rule instead (OQ-5). Every finding above names its own source;
this list exists so Astra's E4 pass can check the set rather than re-read the tables.

Utopia (Gilyead/Mudford): `/blog/designing-with-fluid-type-scales/`, `/type/calculator/`,
`/blog/clamp-calculator/`, `/blog/css-modular-scales/` · Smashing Magazine: Gilyead & Mudford
2021-04-01, Bece 2022-01-17, Franz 2014-09-29 · CSS-Tricks: Coyier 2019-11-29 · Piccalilli: Bell
2021-02-05 · Adrian Roselli 2019-12-06/2025-10-20 · Butterick, *Practical Typography*: line-length,
line-spacing · Rutter, webtypography.net §2.1.2 · Baymard: Scott 2022-05-10 · W3C WAI: Understanding
1.4.8, Understanding 1.4.12 · W3C: CSS Fonts 4 (partial — §5 not returned) · MDN: `length`,
`text-wrap`, `font-display`, `size-adjust`, `ascent-override`, `font-optical-sizing`,
`font-size-adjust`, `font-weight` · web.dev: `font-best-practices` (Hempenius & Pollard),
`optimize-webfont-loading` (Grigorik), `learn/performance/optimize-web-fonts` (Chrome team),
`variable-fonts` (Crossland, Kurtuldu, Nieskens, Steiner), `optimize-cls` (Osmani & Pollard) ·
HTTP Archive Web Almanac: Fonts 2024 (Stein & Berret), Fonts 2025 (Berret et al.) · Simon Hearne
2021-01-19 · Zach Leatherman: comprehensive-webfonts, glyphhanger · Stoyan Stefanov, Web Performance
Calendar 2024-12-31 · DebugBear: Hansa 2024-06-06/2025-11-30 · fontTools subset docs · Capsize
(SEEK) · TypeTogether: Literata, Literata 3 · Wikipedia: Literata, Inter (typeface) · Google Fonts:
CSS API v2 docs, `ofl/literata/METADATA.pb`, `ofl/intertight/METADATA.pb` · rsms.me/inter ·
github.com/rsms/inter · Typewolf: Inter · Fonts In Use: Literata · Typekit Blog 2016-04-29 (Brown).

**Not fetched at all, and nothing above rests on them:** `fonts.google.com/specimen/Literata/about`
and `/Inter+Tight/about` (JavaScript-rendered, returned title only); `fonts.google.com/knowledge/
choosing_type/pairing_typefaces` (same); Tim Brown's *Combining Typefaces* PDF (exceeded the fetch
size limit); `industrialempathy.com/posts/high-performance-web-fonts` (404); the `googlefonts/
literata` `DESCRIPTION.en_us.html` (404); `fontsinuse.com/typefaces/119452/literata` (404 — the
live entry is 168709, which was fetched). CSS Fonts 4 itself is not in this list — it is the one
partial fetch counted in the 51 above, not an unfetched source; only its §5 failed to render.

**Measurement scripts** for M-01 to M-10 no longer live in a session scratchpad. The original
scripts (`ttfmetrics.py`, `avgwidth.py`) were lost with the authoring session; this rework
recreated them at `0_plan/kb/measurements/K2/measure.py`, with inputs documented in `inputs.md`
and the full re-run captured in `output.md`. `fontTools` is not installed in this environment
(`python3 -c "import fontTools"` raises `ModuleNotFoundError`); Pillow's `ImageFont` is used
throughout instead, which is already part of this environment, not a dependency newly added to
the repository. M-02 and M-03's original "parse `head`/`hhea`/`OS/2` directly" method could not
be reproduced exactly as stated — Pillow has no raw-table accessor for those — but every figure
either reproduced exactly (M-02, M-03, M-05, M-06, M-08) or was recomputed and updated in place
(M-01, M-04, M-09, and the new M-10) using the substitute method each row now documents. Re-run
`measure.py` against any rebuilt font set or copy-deck change before trusting the numbers in 5b,
5c or 5f.

---

## 8. Rework log (E4)

Every item in Astra's E4 row for K2 (`0_plan/ensemble/E4-knowledge-base.md` section A) and this
cluster's entry in the rework pack, addressed in order. All of Astra's items checked out against
the file as described — none is recorded as a disagreement.

| E4 item | What changed | Where |
|---|---|---|
| F-30 "Inter Tight is...not a body face" overstates what the citation establishes | Reworded to state the source's facts (origin, metadata category) and labelled the "not a body face" conclusion **Judgment**, to be tested at body sizes rather than treated as established | F-30 (section 2d) |
| 5b "M-04 shows bold sets 5% wider" cites the wrong measurement (M-04 compares Literata to Inter Tight, not weights) | Added **M-10** (new): Literata Regular vs Bold, measured on the same sample — bold sets the text ≈6.4% wider, not 5%. The h1 row in 5b now cites M-10 | M-04 (section 2d), new M-10 (section 2g), 5b h1 row |
| 5f zoom figure (195.5%) omits the clamp minimum | Recomputed in full: doubling the root font size doubles every `rem`-anchored clamp bound *and* the preferred value's rem term, but not its `vw` term; the preferred value then falls below the doubled minimum, so `clamp()` floors it there. Corrected result **199.3%**, with the full working shown; noted this is a CSS model, not a rendered browser test. T-K2-2 updated to match and to describe the mechanism (clamps to the minimum, 196–200% across all steps) rather than a single threshold tied to the old figure | 5f, T-K2-2 (5e) |
| Fallback stacks "reproduce...exactly, so the swap moves nothing vertically" overstates the guarantee | Reworded: the metric overrides guarantee the *vertical* line box only; `size-adjust` matches average advance, not every glyph, so wrapping can still differ. Pointed at T-K2-7 (already existed) for the rendered check | 5c, "Fallback stacks with metric overrides" |
| Font roles, display weight, leading and fluid scale presented as necessities rather than proposals pending a fixed-copy test (R4) | Added a status note atop section 3 (principles) and a longer one atop section 5 ("How it applies to GT"), naming DD-01/DD-19/DD-36 and R4 explicitly; the header Status field now carries the same framing | Top of section 3, top of section 5, header table |
| Source count (51, including a partially fetched CSS Fonts 4) needed the partial labelled, not just footnoted | Header Method field and section 7's opening sentence now both state the partial explicitly; removed the confusing duplicate listing of CSS Fonts 4 under "not fetched" (it is the one *partial* fetch inside the 51, not an unfetched source) | Header table, section 7 |
| Reproducibility: recreate M-01 to M-09's scripts, re-run, make the file's numbers match the output | Recreated under `0_plan/kb/measurements/K2/` (`measure.py`, `inputs.md`, `output.md`), using Pillow (`fontTools` not installed — checked with `python3 -c "import fontTools"`). M-02, M-03, M-05, M-06, M-08 reproduced exactly or matched on the same conclusion; M-01, M-04, M-09 recomputed on a re-derived sample (the original 177-character sample is not recoverable — see M-01 and `inputs.md`) and their new values propagated through every place the file cites them: A2's percentages and character counts; T-K2-1's ch caps; 5b's correction factor, the h1/provenance/door-line character annotations, and the table-cell chars-per-line figures (recomputed holding the same modelled column widths); 5b's point-1 breakpoint discussion (reworded to point to R6 rather than assert a fixed px value); and 5c's fallback-override CSS block. Added M-10 (see above). No number in this file was left citing an M-row that no longer supports it | Throughout; primarily 2a, 2d, 2g, A2, 5b, 5c, 5e |

### Proposed register follow-ups

| Register row | Proposal | Evidence | Recommended by |
|---|---|---|---|
| RF-03 | Update the cited advance-correction factors from "Literata 0.941, Inter Tight 0.848" to "Literata 0.884, Inter Tight 0.793" (the figures RF-03 quotes come directly from K2 2a/M-01, re-measured in this rework) | `0_plan/kb/K2-typography.md` section 2a (M-01); `0_plan/kb/measurements/K2/output.md` | Fable |

### Correction after E5c (2026-09-11)

| Item | Change | Where |
|---|---|---|
| Astra E5c on D-038: M-08 said all 58 mock declarations of weight 600 render at 700 | 45 do (Literata and Inter Tight have no 600); 13 are in `--font-mono` rules and use Inconsolata's shipped 600 face (`0_plan/mockups/shared/fonts.css`) | M-08 |
