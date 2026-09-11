# K12 Existing GT and Alpha branding

| Field | Value |
|---|---|
| Cluster | K12 of `18-knowledge-base-plan.md` section 1 |
| Feeds | Rubric row **Continuity (L2)** (`17` section 6); `04-brand-and-naming.md`; `mockups/shared/tokens.css`; DD-01, DD-02, DD-19, DD-21, MN-13, MD-17, MD-05, DD-17; `1_spec/04-design-system-spec.md` sections 2 and 3 |
| Method | Repo mirror read directly (`index.html` and the eight page folders, `assets/**`); Georgetown HTML and `G:shared.css` read from the `curl` capture made for `research/R1` on 2026-09-10 (`.../scratchpad/r1/gt-school/`); Georgetown SVG assets and `alpha.school` pages fetched fresh with `curl` on **2026-09-11 (UTC)**. **No browser was opened. `gt.school`, `anywhere.gt.school` and `alpha.school` were never loaded in a browser tool.** No JavaScript executed |
| Measurement | CSS values are quoted from the declaration as shipped (both sites ship minified single-line CSS, so rules are cited by *selector*, which is verifiable by grep, not by line). HTML is cited by line number in the mirror. SVG geometry is read from the file's own `width`/`height`/`viewBox`/`fill` attributes. Contrast ratios are computed by this agent with the WCAG 2.x relative-luminance formula and shown to two decimals |
| Builds on, does not repeat | `research/R1` (tokens), `research/R4` (page and claim inventories), `mockups/shared/ASSETS.md` (photo audit), `kb/K7` section 5 (the architecture). Where this file **corrects** one of them the row says so explicitly (F30, F52, F69) |
| Caution | Facts about Alpha School and the press marks are facts about other organisations. Nothing here is a claim GT may make. REQ-022 and DEL-018 still govern every figure |
| Status | Draft 2026-09-11, Fable. Astra E4 reviewed 2026-09-11 (verdict: Rework, `ensemble/E4-knowledge-base.md`); reworked 2026-09-11 per `kb/KB-RESOLUTIONS.md` — see the "Rework log (E4)" section at the end of this file |

Shorthand: **A:** = the Anywhere mirror in this repo. **A:index.css** = `assets/cdn.prod.website-files.com/697d45ef94e91c0acce00654/css/gt-anywhere.webflow.697d45f094e91c0acce006e7.aa5a8a3ea.opt.min.css`. **G:shared.css** = `gt-school-2026.webflow.shared.28a9a320d.css`. **G:home** = `https://www.gt.school/` as captured 2026-09-10.

---

## 1. Question

1. **The identity as it is.** What are the marks and their variants, the clear space and minimum sizes actually shipped, the colour role of every component, the type role of every component, the button and link styles, the icon style, the decorative devices, the photo treatment, and the header and footer conventions — on both gt.school and anywhere.gt.school?
2. **The network marks.** Where do the Alpha and Cognia marks sit, at what size, with what words attached, and what does the placement claim?
3. **Alpha's own brand,** and how Alpha presents GT from its side.
4. **The voice** of the founders and staff on both sites.
5. **What a GT brand guideline would say** if one were written from this evidence alone — and what it could not say, because the evidence does not agree with itself.

---

## 2. Findings

### 2a. The marks: what exists, and how each one is constructed

| # | Finding | Source |
|---|---|---|
| F1 | Five GT mark files exist in the two estates. **GT Anywhere horizontal, dark-surface-ready** `69e43690020daedfb99c797e_GT Anywhere - Logo Horizontal.svg`, `width="1258" height="240"` (aspect 5.242:1). **GT Anywhere horizontal, light variant** `69e4366b170f6066edd440db_… Light.svg`, same canvas. **GT icon alone** `69e437469307477974e94cae_GT Icon orange.svg`, `1198 × 1080` (aspect 1.109:1). **A fifth, unrendered mark** `69809fef7db611f904a879ac_GT-logo.svg`, `178 × 32`. **GT School horizontal** `69f0cf1c0b26450276dfcfde_GT School - Logo H.svg`, `139 × 32` (aspect 4.344:1) | The four A: files in `assets/cdn.prod.website-files.com/697d45ef94e91c0acce00654/`; the fifth fetched from Georgetown's CDN 2026-09-11 |
| F2 | **Every GT mark is one drawing: a four-path swirl icon plus a two-part wordmark.** In `GT School - Logo H` the four icon paths and one wordmark path carry `fill="#E48B53"` and one wordmark path carries `fill="#002A3A"`. In `GT Anywhere - Logo Horizontal` the same split holds: four icon paths `#E48B53`, one wordmark path `#E48B53`, one wordmark path `#002A3A` | The two SVG files, `fill` attributes counted |
| F3 | **The light and dark GT Anywhere variants differ by exactly two `fill` attributes, nothing else.** Diffed: the dark file's `#002A3A` wordmark path becomes `#E48B53`, and its `#E48B53` wordmark path becomes `white`. The four icon paths are byte-identical and stay `#E48B53` in both. This is a **two-step shift, not a monochrome flip** | `diff` of the two files, this agent, 2026-09-11 |
| F4 | Georgetown ships the same dark-surface Anywhere lockup under a different filename and canvas: `69fcae2e93530ce86de2a5fe_GT Anywhere - H Full.svg`, `252 × 48` (aspect 5.25:1), icon `#E48B53`, one wordmark path `#E48B53`, one `white`. **The two estates agree on the on-dark Anywhere lockup** | Fetched 2026-09-11 |
| F5 | The two estates **disagree on the icon's artboard**. Georgetown's `6a02368187feef28a0528e04_gt-icon.svg` is `32 × 32` (square, glyph inset). Anywhere's `GT Icon orange.svg` is `1198 × 1080` (1.109:1). A mock that sets `aspect-ratio:1` on the icon will letterbox Anywhere's file | Both files, `width`/`height` attributes |
| F6 | `GT-logo.svg` (178 × 32) is **never rendered on any of the nine mirrored pages.** Its only reference is the `"logo"` field of the `EducationalOrganization` JSON-LD, present on seven of nine pages. Its construction is different again: the icon is drawn in `#002A3A` with a single `#E48B53` accent path, and the wordmark is `#002A3A` + `#E48B53` | `index.html` line 2 (JSON-LD); `grep -o 'GT-logo.svg'` across all nine pages returns one hit per page, all inside the JSON-LD |
| F7 | So **the machine-readable logo for "GT Anywhere" is a different artwork, at a different aspect ratio, with a different icon colour, from the logo a human sees.** Structured data and the visible identity disagree | F1, F6 |
| F8 | Anywhere's header carries **both** Anywhere variants stacked: `.logo.is-relative` (dark) and `.logo.is-ab` (light) at `opacity:0; position:absolute; inset:0%`, i.e. a cross-fade swap wired by Webflow interactions | `index.html` line 585; A:index.css `.logo.is-ab` |
| F9 | The Alpha mark shipped inside the Anywhere mirror, `69846c31b5ca6c312dc4435a_alpha-logo.svg`, is `104 × 35` with all 48 glyph paths `fill="#004F71"` | The file |
| F10 | Alpha's own mark, fetched from `https://alpha.school/wp-content/uploads/2024/03/logowhite-2.svg` (2026-09-11), is `153 × 52`, 48 paths, all `fill="white"`. The path coordinates are the same drawing scaled by 0.6797 (`41.6491 / 61.273 = 0.6797`; `104 / 153 = 0.6797`) | Both files, compared by this agent |
| F11 | **GT therefore rescales Alpha's mark and recolours it into GT's own palette** — `#004F71` is GT's `--brand--blue`, not an Alpha colour (Alpha's own primary is `#0000EF`, F73). Georgetown instead ships `69f93f534e39169f03a46b39_Alpha logo white.svg`, `286 × 37`, 50 paths all `white` — a wider lockup than Alpha's own file | F9, F10, F73; Georgetown file fetched 2026-09-11 |
| F12 | Anywhere's favicon is `69e673597f582beca591d77b_favicon.png`, `32 × 32`, 1,352 bytes; the Apple touch icon is `69e6735f62df138d96f690d0_webclip.png`, `256 × 256` | `index.html` head; file headers read by this agent |
| F13 | Neither estate ships a vertical or stacked lockup, a monogram, a crest, a seal, or a one-colour/knockout master. **The only variants that exist are: horizontal-on-light, horizontal-on-dark, and icon-alone** | Full asset listing of `697d45ef94e91c0acce00654/` and the Georgetown CDN files referenced by `www-home.html` |
| F14 | In running text both sites always write **"GT School"**, two words, both capitalised. `GTSCHOOL` appears 51 times on G:home and only ever inside photo filenames (`GTSCHOOL-3993 1.webp`). **There is no typed "GTschool" wordmark**: the set-solid treatment exists only as drawn SVG art | `grep` of G:home and of `index.html`; `ASSETS.md` file list |

### 2b. Clear space, minimum size and placement — what is actually enforced

| # | Finding | Source |
|---|---|---|
| F15 | **No clear-space rule is published or encoded anywhere.** What exists is a fixed box per placement plus `object-fit:contain`, so the "clear space" is whatever slack the box leaves | A:index.css, G:shared.css — no padding, margin or guard rule attaches to any `.logo` selector |
| F16 | Anywhere header: `.logo_wrap{width:11.125rem;height:2rem;position:relative}`; `.logo{object-fit:contain;object-position:0% 50%;width:100%;height:100%}`. At 178 × 32 px with a 5.242:1 mark, the mark renders **167.7 × 32 px, flush left, leaving 10.3 px of empty box on the right** | A:index.css; arithmetic by this agent |
| F17 | Anywhere header at ≤767 px: `.logo_wrap{width:9rem;height:2rem}` → the mark scales to **144 × 27.5 px** (contain-limited by width), leaving 2.3 px above and below | A:index.css `@media screen and (max-width:767px)` |
| F18 | Anywhere footer: `.footer-logo_wrap{width:10rem;height:2rem}` → **160 × 30.5 px** | A:index.css |
| F19 | Georgetown header: `.logo-wrap{width:8.625rem;height:2rem;overflow:hidden}` around a 139 × 32 mark → **138 × 31.8 px**, effectively edge-to-edge. At ≤479 px the box becomes `7.75rem × 2rem` → **124 × 28.6 px** | G:shared.css |
| F20 | **The smallest the horizontal mark is ever rendered on either live site is ≈27.5 px tall** (F17). The icon alone is rendered at `3.5rem` (56 px) in `.page-loader_icon` and the Alpha mark at `2.25rem` (36 px) in `.hero_badge-logo` | A:index.css `.page-loader_icon{width:3.5rem;height:3.5rem}`, `.hero_badge-logo{height:2.25rem}` |
| F21 | The surrounding geometry that functions as clear space on Anywhere: `.navbar_wrap{padding:1.25rem var(--_layout---spacing--global-padding)}` (global-padding `2.5rem` desktop, `1.25rem` ≤767 px), `.navbar_left-wrap{grid-column-gap:2rem;height:3.25rem;place-items:center start}` — so 32 px to the next element and 10 px above/below the 32 px logo box | A:index.css |

### 2c. Colour roles per component — and where the two sites contradict each other

| # | Finding | Source |
|---|---|---|
| F22 | Both sites declare the same theme-role layer (`--_theme---*`). R1 §7 mapped the **background** and **border** roles. Two **text** roles were not mapped and they conflict harder than any background role | R1 §7; this agent's read of both `:root` blocks |
| F23 | **`--_theme---text-color--alternate` is `var(--brand--gold)` = `#e48b53` on Anywhere and `var(--neutral--white)` = `#fff` on Georgetown.** The same class, `.text-color-alternate`, renders gold on one site and white on the other | A:index.css `:root`; G:shared.css `:root` |
| F24 | That role is load-bearing on both sites in opposite ways: Anywhere's `.span-gold-italic{color:var(--_theme---text-color--alternate);font-style:italic}` is the gold italic half of the h1; Georgetown's `.hero_wrap{color:var(--_theme---text-color--alternate)}` and `.split-cta_left/_right{color:var(--_theme---text-color--alternate)}` are white text over photographs | A:index.css; G:shared.css |
| F25 | **`--_theme---text-color--secondary` is `var(--neutral--white)` = `#fff` on Anywhere and `var(--neutral--grey-dark)` = `#5b5b5b` on Georgetown.** On Georgetown `.text-color-secondary` is the muted-body colour used in the footer and card subtitles; on Anywhere it produces white text and is used inside `.tag.is-card-feat` (a transparent, gold-text pill) and on four dark cards | A:index.css (7 consuming rules: `.text-color-secondary`, `.card.is-section.is-blue`, `.card.is-sticky-half`, `.card.is-blue-lg`, `.card.is-card-xlarge`, `.card.is-cta`, `.tag.is-blue`); G:shared.css |
| F26 | Neither site has a *portable* muted-text colour. Anywhere's nearest equivalents are two literals: `.text-color-grey{color:#00111780}` (navy-dark at 50 % alpha) and `.button-text.is-light{color:#001117b3}` (70 % alpha) | A:index.css |
| F27 | **`--_theme---link-color--primary` (`--brand--gold`) is declared on Anywhere and consumed by zero rules.** `grep 'var(--_theme---link-color--primary)'` over A:index.css returns 0 | A:index.css |
| F28 | The only link style actually in force on Anywhere is the element rule `a{color:var(--_theme---text-color--primary);font-weight:var(--font-weight--medium);text-decoration:underline}` with `a:hover{text-decoration:none}` — **navy, weight 500, underlined at rest and un-underlined on hover**, which inverts the web convention | A:index.css |
| F29 | The one shadow recipe both sites share verbatim is `box-shadow:1px 2px 14px #00000008` (Anywhere `.menu_wrap`, Georgetown `.mobile-menu_wrap`). Anywhere adds `0 -2px 16px #0000000d` on `.section.home-intro` | A:index.css; G:shared.css; corroborates R1 §5f |
| F30 | **Correction to R1 §3b.** R1 recorded `#ab683e` as "new, real, not on Anywhere". It *is* on Anywhere — as the dark stop of the icon gradients in `velocity.svg`, `Activities.svg` and `1400+ SAT Target.svg` in the mirror's own asset directory. `#AB683E` is a shared brand value in both estates; it is simply carried in SVG assets on Anywhere rather than in a CSS variable | The three A: SVG files, `stop-color` attributes |
| F31 | Radii tokens are **numerically aligned but named one rung apart**, which makes a shared component silently change shape: `--_sizes---border-radius--medium` is `.75rem` on Anywhere and `.5rem` on Georgetown; `--large` is `1rem` vs `.75rem`; `--small` is `.25rem` on both. Georgetown's `.split-cta` and `.navbar` both use `--large`, i.e. `.75rem`; the same token on Anywhere would render `1rem` | Both `:root` blocks; extends R1 §5c from "matched by value" to "mis-matched by name in live components" |
| F32 | `--_layout---spacing--global-padding` (`2.5rem` desktop / `1.25rem` ≤767 px) and the whole `--_layout---section-padding--*` ladder (`small` 3/3/2 rem, `medium` 5/4/3 rem, `large` 8/6/4 rem across desktop/991/767) are **identical on both sites** | `grep` of both stylesheets |

### 2d. Type roles per component

| # | Finding | Source |
|---|---|---|
| F33 | **Heading weights are identical on both sites and are not in R1.** `h1`, `h2`, `h3` = `var(--font-weight--light)` = **300**; `h4`, `h5` = `400`; `h6` = `500`. Literata Light is the display voice of the whole estate | A:index.css `:root`; G:shared.css `:root` |
| F34 | `h1` letter-spacing is `--_typography---letter-spacing--tight` = `-.1rem` on both; `h2`–`h6` are `0rem` on both. Only the h1 is tracked | Both `:root` blocks (corroborates R1 §4) |
| F35 | Body is Inter Tight 400 at `1rem`, leading `--_typography---font-height--large` — which is **1.25 on Anywhere and 1.3 on Georgetown** (R1 C1) | Both `:root` blocks |
| F36 | **Inconsolata is the utility face, never body and never headings.** Its three roles are identical on both sites: buttons (`.button` / `.menu_button`, 1rem/500, uppercase), pills (`.tag`, 1rem/400, uppercase) and eyebrow labels (A: `.text-tag`, 600, uppercase, `line-height:1`; G: `.text-style-utility`, 500, uppercase, `line-height:1`) | A:index.css; G:shared.css |
| F37 | Anywhere additionally sets **form fields in Inconsolata**: `.form_text-field` and `.form_select-field` both `font-family:Inconsolata`, `height:2.75rem`, `padding:.75rem 1rem`, `border-radius:var(--_sizes---border-radius--regular)` (`.5rem`), `background-color:var(--brand--gold-lightest)` | A:index.css |
| F38 | `.hero_heading{text-wrap:balance;font-size:6.5svh;line-height:1.2}` — **the Anywhere h1 is sized off the viewport height, not the type scale.** It is overridden to `3rem` ≤991 px, `2.5rem` ≤767 px, `2.25rem` ≤479 px, so the `svh` rule is live only above 991 px | A:index.css |
| F39 | Anywhere's second-tier text roles are `.text-size-large{font-size:var(--…--large);font-weight:var(--font-weight--light)}` and `.text-size-medium{…;font-weight:light}` — **large-set body is Light (300) Inter Tight**, not regular | A:index.css |
| F40 | Georgetown's nav links are `.nav-link{font-size:var(--_typography---font-size--tiny);font-weight:var(--font-weight--medium)}` — on Georgetown `tiny` is `.875rem` (R1 §4), so nav is 14 px/500 | G:shared.css |

### 2e. Buttons, pills, links and forms

| # | Finding | Source |
|---|---|---|
| F41 | The primary button is one design across both estates: navy fill, near-white text, uppercase Inconsolata 1rem/500, `.5rem` radius, `2.5rem` tall, `overflow:hidden`, `position:relative`. Anywhere `.button{background-color:var(--brand--navy);color:#fbfbfb;padding:.75rem 1rem}`; Georgetown `.button{background-color:var(--brand--navy);color:var(--_theme---text-color--alternate);padding:.5rem 1rem;border-radius:var(--_sizes---border-radius--medium)}`. **Only the vertical padding differs** (`.75rem` vs `.5rem`) | A:index.css; G:shared.css |
| F42 | The secondary/attention button is **gold fill with the same near-white text**: A: `.button.is-secondary`, `.button.is-gold`, `.button.is-nav-cta` all `background-color:var(--brand--gold)`; G: `.menu_button{background-color:var(--brand--orange);color:#fbfbfb}` | A:index.css; G:shared.css |
| F43 | Every button carries a **duplicated label** for the hover swap: `.button-text` plus `.button-text-ab{position:absolute;inset:0%}`, both `line-height:1.1`. This is why an accessible name appears twice | A:index.css; `index.html` line 585 onward |
| F44 | The hover mechanism is a sliding colour plane, not a colour change: `.button-overlay{background-color:var(--neutral--navy-dark);position:absolute;inset:-2% 0%}` with variants `.is-gold`, `.is-gold-lighter`, `.is-blue` (`--brand--blue-dark` `#003b5c`) | A:index.css |
| F45 | A second button family exists whose **only** affordance is a 1 px grey border: `.button.is-contact{border:1px solid var(--neutral--grey);text-transform:none;background-color:#ebba9b00;font-family:Intertight;transition:all .3s}` with `:hover{border-color:var(--brand--gold);background-color:var(--brand--gold-lighter)}` | A:index.css |
| F46 | The pill is identical on both sites: `.tag{border:1.5px solid var(--brand--gold-lighter);background-color:#f8e8de;color:#001117;text-transform:uppercase;border-radius:.5rem;padding:.25rem .5rem;font-family:Inconsolata;font-size:1rem;font-weight:400;line-height:1}` — Georgetown's declaration is the same values with the literals written out | A:index.css `.tag`; G:shared.css `.tag` |
| F47 | Pill variants: `.tag.is-light` (off-white fill, no border), `.tag.is-blue` (`--brand--blue-dark` fill, `--_theme---text-color--secondary` text), `.tag.is-gold` (transparent fill, gold text), `.tag.is-card-feat` (transparent, gold text, 1 px border, Inter Tight, `line-height:1.2`) | A:index.css |
| F48 | **Exactly two CTAs per page are rendered as `<div class="button">`, not `<a>` or `<button>`** — on Anywhere they are the header `BEGIN APPLICATION` (`.button.is-nav-cta`, line 587) and its mobile twin (`.button.is-mobile-app`); on Georgetown they are the two halves of the split-CTA. Every other button on every page is an `<a>` (25 on `index.html`, 12 on G:home). The page's single most prominent CTA is therefore not keyboard-reachable | Tag-and-class census of nine mirror pages and two Georgetown pages by this agent |
| F49 | **No project-authored focus style exists on either site.** Anywhere declares `--focus--width:.125rem`, `--focus--offset:.125rem` and `--_theme---system--focus-state:var(--brand--blue)` and **consumes none of them** (`grep 'var(--focus--'` → 0 matches; `grep 'outline'` in authored rules → 0). Georgetown declares no focus token at all. Both ship the browser default ring only | A:index.css; G:shared.css; sharpens R1 C11 from "Georgetown has none" to "neither site wires one" |

### 2f. Icons, decorative devices and texture

| # | Finding | Source |
|---|---|---|
| F50 | **Icons are filled, gradient-filled glyphs on a square canvas — never stroked line icons.** Canvases found: 32, 40, 44, 48, 64 px. Sizing classes: `.icon-1x1-small/medium/regular/large/xlarge/xxlarge`, e.g. `.icon-1x1-medium{width:1.5rem;height:1.5rem}`, `.icon-1x1-xlarge` → `3.5rem` at ≤767 px | A: `velocity.svg` (40), `engineering.svg` (32), `H&R blue.svg` (44), `Activities.svg` (64); G: `Rocket.svg` (32), `H&R - blue.svg` (48) |
| F51 | **The icon gradient is a fixed two-stop recipe, identical on both sites:** gold `#E48B53 → #AB683E`, blue `#004F71 → #003B5C`, or flat `white → white` for the on-dark variant. Verified across three Anywhere icons and two Georgetown icons | `stop-color` attributes of the five files |
| F52 | Small interface glyphs are the one stroked exception: `stroke="currentcolor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"` (the card arrow, inline in G:home) and a `17 × 8` filled arrow inline in `index.html` | G:home `.card-arrow` embed; `index.html` line 585 |
| F53 | **The estate's signature device is a notched convex corner**, built as a three-cell grid, not a border-radius: `.edge-bg_wrap{grid-template-rows:3.25rem minmax(0,1fr);grid-template-columns:minmax(0,1fr) 3.25rem;height:5rem;border-top-left-radius:var(--_sizes---border-radius--medium|--large);overflow:hidden}` with `.edge-bg_corner{width:3.35rem;height:3.35rem;margin-left:-1px}` holding a quarter-round `fill="currentcolor"` path. It shrinks to `2.5rem` at ≤767 px and `3.5rem` at ≤479 px | A:advisors.css / A:academics.css / A:intensives.css `.edge-bg_*`; G:shared.css `.edge-bg_*` |
| F54 | The corner SVGs are embedded with `width="currentwidth" height="currentheight"` — invalid attribute values, and the documented source of the `Expected length, "currentwidth"` console errors | `CLAUDE.md` known-noise list; the embed in G:home and in `advisors/index.html` |
| F55 | **A film-grain overlay is a shared, load-bearing texture:** `.static-noise{opacity:.3;mix-blend-mode:hard-light;background-image:url(… static noise 2.webp);background-size:64px 64px;position:absolute;inset:0%}` — byte-equivalent rules on both sites, with tuned variants `.is-btn{opacity:.1}`, `.is-navy-bg{opacity:.05}`, `.is-feat-card{opacity:.05;width:90%}` | A:index.css; G:shared.css |
| F56 | Other decorative artwork, all in-palette and all vector: `bg-grid.svg` (1440 × 1153, 41 ruled lines `stroke="#EBBA9B" stroke-opacity="0.2"` — graph paper), `Hero BG.svg` (1538 × 627, radial and linear gradients between `#FCF4EF`, `#8F8D8D` and white with 177 low-opacity soft shapes), `map.svg` (897 × 800 dot map, `#EBBA9B` + black), `lg card corner.svg` (100 × 100, `#002A3A`), `slider-star.svg` (14 × 14 four-point star, `#004F71`), four `blueprint N.svg` technical drawings (444 × 842, `#EBEBEB` on white at `opacity:0.2`) | The eight A: files, read directly |

### 2g. Photography, as treated

| # | Finding | Source |
|---|---|---|
| F57 | **No photograph on either site is greyscaled, duotoned or colour-filtered.** `grep 'filter:'` over A:index.css returns only `backdrop-filter:blur(8px)`; over G:shared.css only `backdrop-filter:blur(5px)`. There is no `grayscale()`, `sepia()` or `saturate()` anywhere | Both stylesheets |
| F58 | Photographs are always `object-fit:cover` inside a wrapper with a small radius — `.feat-card-xl_image-wrap{aspect-ratio:50/56;border-radius:var(--_sizes---border-radius--small);min-height:500px;max-height:78vh;overflow:hidden}`, `.divider-image_wrap{border-radius:var(--_sizes---border-radius--medium);height:60vh}` | A:index.css |
| F59 | **Two scrim recipes exist and they differ by site.** Anywhere: `.cta-card_image-overlay{background-image:linear-gradient(#0000001a,#000000e6)}` — a vertical black ramp from 10 % to 90 %, used only where text sits on a photo. Georgetown: a flat `linear-gradient(#00000080,#00000080)` 50 % black layer baked into `.split-cta_left`/`_right` **plus** `.split-cta_bg-overlay{backdrop-filter:blur(5px);background-color:#002a3a4d}` | A:index.css; G:shared.css |
| F60 | Anywhere's own hero has **no photograph at all**: `.section_home-hero{height:250vh}` with `.hero_bg-image` painting the `Hero BG.svg` gradient artwork, and a cut-out student PNG positioned over it (`.hero_student-image{object-fit:contain;width:32vw;max-height:80vh}`). Georgetown's hero is a full-bleed photograph with white text and the grain overlay. **The two estates' first screens do not share a treatment** (R1 C12, now with the Anywhere mechanism named) | A:index.css; G:shared.css `.hero_bg-image.is-home` |

### 2h. Header and footer conventions

| # | Finding | Source |
|---|---|---|
| F61 | **The two headers are different components.** Anywhere: `.navbar_wrap{position:fixed;padding:1.25rem global-padding}`, `.navbar_inner{display:grid;grid-template-columns:1fr 1fr}` — logo + "TEFA Approved School." microcopy on the left, and on the right a white card `.menu_wrap{background:var(--neutral--white);border-radius:.75rem;padding:.375rem;box-shadow:1px 2px 14px #00000008}` holding a `MENU` dropdown and one gold `BEGIN APPLICATION`. **No inline navigation at any width.** Georgetown: `.navbar{border-radius:var(--_sizes---border-radius--large);background:var(--_theme---background--primary);padding:.75rem .75rem .75rem 1rem}` — a floating white pill with the full nav visible at desktop | A:index.css; G:shared.css; `index.html` line 585 |
| F62 | Anywhere's menu opens as a `304 px` minimum-width panel (`93vw` ≤767 px, `90vw` ≤479 px) of off-white pill links (`.button.is-menu`), positioned `inset:3.5rem 0% auto auto`. The hamburger is a **Lottie animation with `data-duration="1.5"`** (1,500 ms) driven by Webflow IX2 | A:index.css `.menu_dropdown-nav.w--open`; `index.html` line 585 |
| F63 | Anywhere's footer order is: mark (`10rem × 2rem`) → "TEFA Approved School." → gold `Begin Application` → a `Navigate` link column → a `Contact` column (email, phone) → a hidden accreditation block → divider → copyright + four legal links. `.footer_title{font-family:var(--font-family--heading)}` — the column headings are Literata | `index.html` line 755–757; A:index.css |
| F64 | Georgetown's footer is a three-column grid (`.footer{grid-template-columns:.85fr 1fr .85fr;padding:3rem 0 2.5rem}`) whose third block is a **Locations list**: `Georgetown, Texas (Now enrolling)` as an `<a href="#">`, then `Miami, FL`, `New York, NY`, `Bay Area, CA` each `(Coming soon)` as plain `<div>`s. Each card is an `.edge-bg_wrap.is-card-small` notch + `.heading-style-h5` name + a status line | G:home; G:shared.css `.footer`, `.location-link` |
| F65 | The status convention in that list is encoded in colour: `(Now enrolling)` is `.text-size-small.text-color-gold` where `.text-color-gold{color:var(--brand--orange)}` = `#e48b53`; `(Coming soon)` is `.text-color-secondary` = `#5b5b5b`. Only the enrolling row is a link, and its `href` is `#` | G:home; G:shared.css |
| F66 | **A live two-door component already exists on gt.school**: `.split-cta{display:flex;grid-template-columns:1fr 1fr;height:80vh;padding:1.5rem;border-radius:var(--_sizes---border-radius--large);background:var(--brand--navy)}` containing `.split-cta_left` (GT School mark, `Apply Now`) and `.split-cta_right` (GT Anywhere mark, `Learn more`, `href="https://anywhere.gt.school/" target="_blank"`). Each half: `.split-cta_logo-wrap{height:3rem}`, a `max-width:28rem` text block, `text-align:center`, white type on a scrimmed photograph | G:home; G:shared.css |

### 2i. The accreditation and network marks

| # | Finding | Source |
|---|---|---|
| F67 | Anywhere's hero carries a three-part endorsement lockup: `.hero_badge-wrap{display:flex;align-items:center;gap:var(--_layout---gaps--regular)}` → Alpha mark at `height:2.25rem` (`alt="Alpha School"`) → `.hero_badge-divider{background-color:var(--neutral--grey);width:.9px;height:2.25rem}` → `.hero_badge-text{max-width:11.1rem}` reading **"The Gifted Academy of Alpha School"** | `index.html` line 591; A:index.css |
| F68 | Georgetown's hero carries the Alpha mark **alone** — white, no divider, no words, `alt="Alpha School Partner"`, placed by grid node into the hero over the photograph. **The same relationship, two different devices and two different words** | G:home |
| F69 | **Correction to R4 §3i.** R4 describes the "GT School - Virtual is a Candidate for Accreditation with Cognia…" paragraph as "visible fine print". It is not visible. On all five Anywhere content pages that paragraph sits inside `<div class="w-layout-vflex hide">`, and `.hide{display:none!important}`. A parent never sees it; only the unqualified "fully accredited" FAQ answer renders. **This is verified against the mirror committed in this repo (A:), not a fresh fetch of the live site** — confirming the hidden qualifier is still hidden on anywhere.gt.school today needs a new text fetch, the same way the 3X speed claim was re-checked live on 2026-09-10 (`00` five facts, row 3) | `index.html` line 757 and the same construction on `advisors`, `academics`, `intensives`, `academic-calendar`; A:index.css `.hide` |
| F70 | Anywhere ships **no Cognia mark**. Georgetown ships one: `cognia-accreditation.webp` at `.footer-accreditation{width:4rem;height:4rem;object-fit:contain}` with `alt=""` (no accessible name), and `order:9999` at ≤991 px so it falls to the bottom on mobile | `grep -c cognia index.html` → 2, both in the hidden paragraph's link; G:home; G:shared.css |
| F71 | Anywhere's copyright names a **third** parent: "© 2026 GT Anywhere. **Part of the 2 Hour Learning Network.** All rights reserved." The hero of the same page says "The Gifted Academy of **Alpha School**". Two different network parents, one page | `index.html` line 757 and line 591 |
| F72 | The "As seen in:" strip on Anywhere is a three-times-duplicated marquee of seven third-party marks — Yahoo, TODAY, SXSW, The Washington Times, NBC, Fox News, Dr Phil — every one with `alt=""`. `.ticker_logo-img{height:2.5rem}` (`2.25rem` ≤767 px), and Georgetown ships the identical rule. The label is `.text-tag` (Inconsolata 600 uppercase) | `index.html` line 715; A:index.css; G:shared.css |

### 2j. Alpha School's own brand, and how it presents GT

| # | Finding | Source |
|---|---|---|
| F73 | Alpha's design tokens: primary `#0000EF` (electric blue), accents `#47C4E6`, `#C2ECFD`, `#F2FBFF`, neutrals `#F8F8F8`, `#7A7A7A`, `#2D2D2D`. **One typeface, Montserrat**, at 400/600/700; display `4rem`/700, body `16px`/400, accent `1rem`/600 with `letter-spacing:0.2em` | `https://alpha.school/wp-content/uploads/elementor/css/post-8.css?ver=1789087367`, fetched 2026-09-11 |
| F74 | **Correction, softened.** Of the one Alpha stylesheet fetched, none of its brand hues match GT's, and the typefaces and radii differ too: GT is Literata + Inter Tight + Inconsolata on navy/gold/off-white; the fetched Alpha CSS (F73) is Montserrat on electric blue/cyan/light-grey neutrals. **The one colour the two estates do share is white** — Alpha's own mark file is drawn in literal `white` (F10), and GT's own on-dark text role and the Anywhere lockup's light-variant wordmark path are `white` too (F3, G8). Four of Alpha's five Elementor stylesheets were never fetched (section 6), so this compares GT against one Alpha file, not "Alpha's system" | F73, F3, F10, G8; R1 §2–3 |
| F75 | Alpha presents GT at **token strength**: a bare "GT School" link to `https://gt.school` in a "Specialty Schools" dropdown and in a footer icon-list, plus a `SiteNavigationElement` entry `{"name":"GT School","url":"https://gt.school"}` in Alpha's JSON-LD. No description, no logo, no campus card | `alpha.school/` home, fetched 2026-09-11; corroborates K7 F47 |
| F76 | **`alpha.school/locations/` does not list GT School or Georgetown.** Its campus list runs to ~45 named cities across 17 states plus Puerto Rico; GT appears only in the nav, the footer and the founder bio | `https://alpha.school/locations/`, fetched 2026-09-11 (HTTP 200, `last-modified: Fri, 11 Sep 2026 02:41:55 GMT`) |
| F77 | Alpha's FAQ routes online families to GT: *"Alpha Anywhere enrollment is paused through the end of 2026. Families looking for an online option can explore GT Anywhere."* | `https://alpha.school/faq/`, fetched 2026-09-11 |
| F78 | Alpha's founder bio, repeated on the home, FAQ and locations pages, claims GT as an implementation of her model: *"Her model is also used at Alpha High, Sports Academy, NextGen Academy, and GT School."* | `alpha.school/`, fetched 2026-09-11 |
| F79 | Alpha's own three-part promise is *"Love School / Learn 2x in 2hrs / Learn Life Skills"*, headed **"Alpha's 3 Commitments"**. gt.school's About page is the same structure with the multiplier raised: **"Three promises. One formula."** → *"Your child will love school / Your child will learn 3X faster / Your child will master life skills through the sciences and humanities."* **GT's Georgetown messaging architecture is inherited from Alpha, not independent of it** | `alpha.school/` and `https://www.gt.school/about-us` (R4 crawl text, 2026-09-10) |

### 2k. The founder and staff voice

| # | Finding | Source |
|---|---|---|
| F80 | **gt.school's founder voice is plain, concrete and low-adjective.** *"In every system we touched, we kept meeting the same child. The one who finishes the worksheet in four minutes and waits… Schools aren't cruel to these kids. They're calibrated to the middle, and calibration is destiny."* Signed "— Arvind Nagarajan & David Chen, GT School" | `https://www.gt.school/about-us` |
| F81 | It states the formula as a rule, not a boast: *"high standards and high support and never one without the other. Raising the bar without coaching a child over it is pressure; support without a bar worth clearing is babysitting."* It names the coinage *"joyful intensity"* | same |
| F82 | It also states the Alpha relationship in **prose**, twice: *"GT School is the gifted academy of the Alpha School family"* and *"GT School was created inside the Alpha family."* No mark, no badge | same |
| F83 | The staff bios on gt.school end with a self-deprecating device — *"What was his GT? Arvind took 4th place in his district spelling bee in 5th grade. Top 2 moved on… He went out on 'mongrel.'"* That is the warmest, least corporate writing anywhere in the estate | same |
| F84 | **Anywhere's voice is materially hotter.** Same estate, same week: *"see your bright young learner unleash their full potential"*; *"This is a high-end coach"*; *"A distinguished academic sentinel, Ruchi has heroically championed over 250 scholars through the gauntlet of elite admissions"*; closing CTA *"Ready to Give Your Child an Elite Education?"* | `advisors/index.html` (mirror text) |
| F85 | The adult title differs by site for the same people: Georgetown says **Guides** ("Meet our Expert Guides"), Anywhere says **Academic Advisors** — with word-for-word identical bios for at least Anjelina Belakovskaia and Norberto Troncoso | R4 §3k, re-confirmed against `advisors/index.html` this session |
| F86 | The same five student quotes appear on **both** sites, in different order, each attributed *"2 Hour Learning Student"* — never "GT School Student" or "GT Anywhere Student" | `index.html` mirror text and `https://www.gt.school/about-us`; sharpens MD-05's provenance flag from "verify whether" to "confirmed shared, network-attributed" |

### 2l. Measured contrast of the identity as shipped

All ratios computed by this agent with the WCAG 2.x formula. AA normal text = 4.5:1; AA large text and non-text UI = 3:1.

| # | Pair | Ratio | Verdict | Where it is live |
|---|---|---|---|---|
| F87 | `#fbfbfb` on `#e48b53` (gold fill) | **2.50** | fails AA and fails 3:1 | `.button.is-nav-cta` / `.is-secondary` / `.is-gold` (Anywhere), `.menu_button` (Georgetown) — the primary conversion CTA on both sites. Closes the item R1 §9 deferred to T-072 |
| F88 | `#e48b53` on `#fcf4ef` (page background) | **2.38** | fails AA and fails 3:1 | `--_theme---text-color--alternate` on Anywhere: the gold italic half of the h1 (`.span-gold-italic`), `.tag.is-gold`. The hero also paints a grey-shaded gradient behind it, which can only lower the ratio |
| F89 | `#e48b53` on `#ffffff` | **2.59** | fails AA and fails 3:1 | `.text-color-gold` — Georgetown's `(Now enrolling)` status line in the footer |
| F90 | `#e48b53` on `#f8e8de` (gold-lightest surface) | **2.17** | fails AA and fails 3:1 | `.tag.is-card-feat` gold text on the light card |
| F91 | `#ab683e` (the darker gold) on `#fcf4ef` / on `#ffffff` | **4.04 / 4.39** | passes 3:1, **still fails AA 4.5** | Currently used only as a gradient stop, never as text. Even the dark gold is not an AA body colour |
| F92 | The palette's safe pairs | `#001117` on `#fcf4ef` **17.69**; `#001117` on `#f8e8de` **16.10**; `#001117` on `#e48b53` **7.43**; `#fbfbfb` on `#002a3a` **14.58**; `#fbfbfb` on `#003b5c` **11.40**; `#e48b53` on `#002a3a` **5.83**; `#5b5b5b` on `#fff` **6.79**; `#004f71` on `#fcf4ef` **8.20** | all pass AA | **Navy text on gold is 7.43:1** — the fix for F87 is navy, not near-white |
| F93 | `#cac6c4` on `#fcf4ef` **1.56**; `#d9d9d9` on `#fff` **1.41** | fails 1.4.11 (3:1) | The border colours. Acceptable as decoration; **not** acceptable as the sole boundary of a control, which is exactly what `.button.is-contact` does (F45) |

### 2m. Where the two sites disagree — the full list, with a ruling

| # | Point | Anywhere | Georgetown | Follow | Why |
|---|---|---|---|---|---|
| X1 | `--_theme---text-color--alternate` | gold `#e48b53` | white `#fff` | **Georgetown** | "Alternate" must mean "the text colour for dark and photographic surfaces". White is that; gold is a *decorative* colour that fails contrast on every light surface (F88, F90). Anywhere's usage is the reason the h1's second clause is unreadable |
| X2 | `--_theme---text-color--secondary` | white `#fff` | grey `#5b5b5b` | **Georgetown** | A "secondary" text role that is white is unusable on the light page it shares a stylesheet with. `#5b5b5b` passes AA on both backgrounds (F92) and is the estate's only real muted colour |
| X3 | Header pattern | logo + collapsed `MENU` + one gold CTA, at every width | floating white pill with full nav visible at desktop | **Neither as shipped — DD-12's minimal shell** | **Correction.** DD-12 already decided the landing header is minimal — lockup, "Current families", admissions contact — not a destinations menu (`kb/KB-RESOLUTIONS.md` R11). Anywhere's all-hidden nav is a mobile pattern applied at 1440 px, and Georgetown's fully visible nav is more than DD-12 allows; neither live pattern is "the" model. Keep Anywhere's `menu_wrap` card *geometry* (radius `.75rem`, padding `.375rem`, shadow `1px 2px 14px #00000008`), the one shadow both sites already share (F29), as the container for DD-12's minimal content |
| X4 | Hero treatment | gradient artwork + cut-out PNG, dark type | full-bleed photograph, white type, grain | **Escalate** — unchanged from R1 C12, now with both mechanisms named (F60). The mocks vary this axis deliberately; neither is "the incumbent" |
| X5 | Alpha endorsement device | mark + 0.9 px divider + "The Gifted Academy of Alpha School", in the hero | mark alone, white, no words, in the hero | **Neither** — G0.5 already fixed one prose line, no mark (K7 5e). Record both as the two things the landing replaces |
| X6 | Network parent named | "Part of the 2 Hour Learning Network" (footer) | "the gifted academy of the Alpha School family" (About, prose) | **Escalate to Nari** | These are two different parents stated by the same company. The landing's provenance line names Alpha; the footer must not silently introduce a second one (F71) |
| X7 | Radius token names | `medium`=.75rem, `large`=1rem | `medium`=.5rem, `large`=.75rem | **Merge by value, never by name** | A shared component written against `--radius-md` changes shape between sites today (F31). This is the same failure mode R1 found in the spacing and label ladders |
| X8 | Icon artboard | 1198 × 1080 | 32 × 32 square | **Georgetown** | A square artboard is what every layout assumes; Anywhere's 1.109:1 file letterboxes in any `aspect-ratio:1` slot (F5) |
| X9 | Adult title | "Academic Advisor" | "Guide" | **Guides**, per G0.5 item 5 | Already decided; recorded here because the mocks will copy bios verbatim from pages that use the other word (F85) |
| X10 | Voice register | promotional, superlative-heavy | plain, concrete, low-adjective | **Georgetown** | F80–F84. The founder letter is the best writing in the estate and the closest to DD-16's "institutional and warm" |
| X11 | Accreditation disclosure | "fully accredited" visible; "Candidate for Accreditation" present but `display:none` | Cognia mark, `alt=""`, footer | **Neither ships on the landing** | G0.5 item 3 already removed the claim; F69 is the reason the hold must stay until Q-033 resolves |
| X12 | Cognia mark | absent | present at 4rem | **Absent** | Follows X11 |

---

## 3. Principles the studio adopts

| # | Principle | From |
|---|---|---|
| P1 | **The mark is drawn art with a fixed internal colour split. Never retype it, never recolour one half, never separate the icon from the wordmark except to use the icon file that already exists.** | F1–F6, F13 |
| P2 | **Dark surfaces get the shipped light variant file, not a CSS filter.** The light variant is a two-step recolour, not an inversion; `filter:invert()` or `brightness(0) invert(1)` produces a mark GT does not own | F3, F4 |
| P3 | **Gold is a surface and an object colour, not a text colour.** Everything gold-on-light in the estate today fails 3:1 (F88–F90). Gold may fill, outline, underline and illustrate; navy and white carry the words | F87–F92 |
| P4 | **Three faces, three jobs, no exceptions: Literata for headings (Light 300 at h1–h3), Inter Tight for body, Inconsolata for anything uppercase and small — buttons, pills, eyebrows.** This is the single strongest agreement between the two sites | F33, F36, F37 |
| P5 | **Merge tokens by measured value, never by token name.** Three ladders — spacing, label type and radii — carry different numbers under the same names on the two sites | F31; R1 §4, §5b |
| P6 | **Icons are filled two-stop gradient glyphs on a square canvas: `#E48B53 → #AB683E` or `#004F71 → #003B5C`, or flat white on dark. No outline icon set enters the estate.** | F50, F51, F30 |
| P7 | **Photographs are shown as taken: cover-cropped in a small-radius frame, never desaturated, duotoned or tinted. Where type must sit on one, use a gradient scrim, and state the ramp.** | F57–F59 |
| P8 | **The notched convex corner and the 64 px grain tile are the estate's two signature textures** (F53, F55, measured on both sites). *Judgment, not measured:* that either one, used once, is enough to make a new page read as GT — no recognition study supports that specific claim | F53, F55 |
| P9 | **Every interactive element is a real `<a>` or `<button>` with a visible focus ring.** The estate ships neither today; both are departures the design system owns, not options | F48, F49 |
| P10 | **The network relationship is carried by one sentence in GT's own voice, never by a mark, a divider or a badge.** Both live devices are lockups; both are superseded | F67, F68, F82; K7 5e |
| P11 | **Write like the founders' letter, not like the advisors page.** Plain nouns, short sentences, a named mechanism, no superlative | F80–F84, X10 |
| P12 | **Status is a colour convention the estate already has: gold = open, grey = not yet.** Reuse it for campuses rather than inventing one — but recolour it, because the gold text fails contrast | F65, F89 |

---

## 4. Anti-patterns

| # | Anti-pattern | Where it is live today |
|---|---|---|
| A1 | Near-white text on a gold fill. 2.50:1 on the primary CTA of both sites | F87 |
| A2 | Gold as heading or status text on a light background. 2.38:1 in the h1; 2.59:1 in Georgetown's footer | F88, F89 |
| A3 | A primary CTA rendered as `<div class="button">` | F48 |
| A4 | Declaring focus tokens and consuming none of them | F49 |
| A5 | A control whose only boundary is a 1.56:1 border | F45, F93 |
| A6 | A legal disclaimer shipped inside `display:none` while the unqualified claim renders | F69 |
| A7 | Two different network parents named on one page | F71 |
| A8 | A structured-data `logo` that is a different artwork from the visible mark | F6, F7 |
| A9 | `alt=""` on every third-party mark in an "As seen in" strip, and on the accreditation badge | F70, F72 |
| A10 | A heading sized in `svh` so its size is a function of the device, not the type scale | F38 |
| A11 | Borrowed proof presented as the school's own: five quotes attributed "2 Hour Learning Student" used as GT testimonials on both sites | F86 |
| A12 | A duplicated label for a hover swap, which doubles the accessible name | F43 |
| A13 | `href="#"` on the one location card that is meant to be clickable | F64 |
| A14 | An `overflow:hidden` logo box sized ~1 px narrower than the mark it holds | F19 |

---

## 5. How it applies to GT

### 5a. The brand guideline the twenty mocks must obey

This is the guideline a reader would write from the evidence, with nothing invented. Every value is measured; every row cites the finding that produced it. A mock that breaks a **MUST** row is rejected before it is scored. Rows marked **(Option, R15)** are proposals a brief may adopt, vary or skip — extracted estate practice offered as a default, not a mandate; the rubric scores the outcome (`kb/KB-RESOLUTIONS.md` R15).

| # | Element | Rule | Value | Basis |
|---|---|---|---|---|
| **G1** | **Marks — which files** | MUST use the shipped SVGs unmodified: `gt-school-logo-h.svg`, `gt-anywhere-logo-h.svg`, `gt-icon.svg` from `mockups/shared/img/`. No redraw, no monogram, no crest, no new lockup | 3 files | F1, F13, `ASSETS.md` |
| **G2** | **Marks — light vs dark** | On any surface darker than `#f8e8de`, swap to the shipped light variant file. Never apply a CSS filter to a mark | `GT Anywhere - Logo Horizontal Light.svg` / `GT Anywhere - H Full.svg` | F3, F4, P2 |
| **G3** | **Marks — internal colour** | The icon is always `#E48B53`. The wordmark is `#002A3A` on light and `white` on dark. Never recolour one half alone | 2 fills only | F2, F3 |
| **G4** | **Marks — geometry** | Horizontal marks render at **32 px tall** on desktop and never below **27 px**; the icon alone renders at **56 px** (the one size the estate uses it at). Set a fixed box and `object-fit:contain`; never stretch | 32 / 27 / 56 px | F16–F20 |
| **G5** | **Clear space** | No published rule exists, so the studio adopts the geometry the estate already produces: **minimum 1× the mark's height (32 px) of clear space on every side, and 2rem (32 px) to the next element horizontally.** Stated as a new rule, derived from `.navbar_left-wrap{grid-column-gap:2rem;height:3.25rem}` | 32 px / 2rem | F15, F21 — **derived, not extracted** |
| **G6** | **Colour — page** | `--color-bg` `#fcf4ef`; `--color-surface` `#f8e8de`; `--color-text` `#001117`; navy `#002a3a` for dark bands | 4 values | R1 C7–C9 |
| **G7** | **Colour — muted text** | `#5b5b5b`, Georgetown's `--neutral--grey-dark`. Do **not** use Anywhere's `--_theme---text-color--secondary` semantics | `#5b5b5b`, 6.79:1 on white | X2, F25, F92 |
| **G8** | **Colour — on dark / on photo** | `#ffffff` (or the estate's `#fbfbfb`). Do **not** use gold | 14.58:1 on navy | X1, F92 |
| **G9** | **Colour — accent** | `#e48b53` MUST NOT carry text on any surface lighter than navy. Permitted: fills, 1.5 px pill borders, icon gradients, rules, underlines, the mark's own icon. On navy (`5.83:1`) gold may be text | 2.38:1 light / 5.83:1 navy | P3, F87–F91 |
| **G10** | **Colour — accent-on-dark pair** | Gold fills take **navy `#001117` text (7.43:1)**, never near-white | 7.43:1 | F87, F92 |
| **G11** | **Colour — borders** | `#cac6c4` on off-white is decoration only. Any control whose boundary is its only affordance needs a 3:1 boundary or a fill | 1.56:1 | F93, A5 |
| **G12** | **Type — families** | Literata (headings), Inter Tight (body), Inconsolata (utility). Exactly three. No fourth face, no synthetic bold | 3 | P4, F33–F37 |
| **G13** | **Type — display (Option, R15: today's default, not yet a fixed rule)** | Both sites currently render h1–h3 in **Literata Light 300**, h4–h5 in 400, h6 in 500, with h1 alone tracked `-.1rem` — measured, identical on both sites (F33, F34). DD-01 fixes the three type families; it does not fix this display weight. `kb/KB-RESOLUTIONS.md` R4 keeps this pending a fixed-copy test (DD-38): "until then briefs may choose within the families." Tracking is unchallenged and travels with the default | 300/400/500, current default | F33, F34; R4 |
| **G14** | **Type — body** | Inter Tight 400, 1rem, leading **1.25** (Anywhere's live value, R1 C1). Large-set body may drop to Light 300 | 1rem / 1.25 | F35, F39 |
| **G15** | **Type — utility** | Inconsolata, uppercase, `line-height:1`: buttons 1rem/500, pills 1rem/400, eyebrows 1rem/600. Nothing else is uppercase | 3 roles | F36 |
| **G16** | **Type — h1 sizing** | h1 is a token, never `svh`. 3.25rem desktop / 2.5rem ≤767 / 2.25rem ≤479 | rem only | A10, F38; R1 §4 |
| **G17** | **Buttons — primary (fill, label and radius are Option, R15 — F41's measured default; the height is a floor, not a choice)** | Navy `#002a3a` fill, `#fbfbfb` text, Inconsolata 1rem/500 uppercase, radius `.5rem`, padding `.75rem 1rem` — all measured estate practice (F41). The estate's own shipped height, `2.5rem`/40px, is below the runbook's 44×44 minimum interactive target; whichever styling a brief takes, the button (or its hit area) MUST be at least `2.75rem`/44px | 14.58:1; **44px is the floor per runbook §4, not the shipped 40px** | F41; R15; `17` §4 |
| **G18** | **Buttons — attention** | Gold `#e48b53` fill with **navy text** (the departure, D2 below), same metrics | 7.43:1 | F42, G10 |
| **G19** | **Buttons — markup** | `<a>` or `<button>`. One label node, not two. Visible focus ring on every one | MUST | F43, F48, P9 |
| **G20** | **Pills** | `1.5px solid #f5ddcd` border, `#f8e8de` fill, `#001117` text, radius `.5rem`, padding `.25rem .5rem`, Inconsolata 1rem/400 uppercase | 16.10:1 | F46 |
| **G21** | **Links** | Navy, weight 500, underlined at rest **and on hover**. The estate's `a:hover{text-decoration:none}` is not carried forward | departure D4 | F28 |
| **G22** | **Icons** | Filled glyphs, square canvas, two-stop gradient `#E48B53→#AB683E` or `#004F71→#003B5C`, or flat white on dark. Sizes from the `icon-1x1-*` ladder (1.5rem / 2rem / 2.75rem / 3.5rem). No outline set | fixed recipe | F50, F51, P6 |
| **G23** | **Decorative devices (Option, R15: the two-per-page cap)** | Permitted, from the estate: the notched convex corner (`3.25rem` grid cell, `3.35rem` corner, `2.5rem` ≤767); the 64 px grain tile at `opacity:.3; mix-blend-mode:hard-light`; the `#EBBA9B` 20 %-opacity rule grid — all three measured estate practice (F53, F55, F56). A brief MAY cap itself at two per page as a starting discipline; the rubric's Composition and Craft rows score restraint and intent, not a fixed count | up to 2, a default not a ceiling | F53, F55, F56, P8; R15 |
| **G24** | **Photography** | Only the files in `mockups/shared/img/`. Cover-cropped, small radius, **no** greyscale, duotone or tint. Type on a photo uses one scrim: `linear-gradient(#0000001a,#000000e6)`. Never the two "avoid" stock-looking files | MUST | F57–F59, `ASSETS.md` |
| **G25** | **Header (Option, R15, for the container only — the content is fixed by DD-12/DD-13, not this file)** | **Correction.** DD-12 already decided the landing header's content: lockup, "Current families", admissions contact — not a destinations nav (`kb/KB-RESOLUTIONS.md` R11). A brief MAY reuse Georgetown's floating-pill *container* for that minimal content — `background --color-bg`, radius `.75rem`, padding `.75rem .75rem .75rem 1rem`, `position:fixed`, `padding-top:1rem`, shadow `1px 2px 14px #00000008` (the one shadow both sites already share, F29) — or Anywhere's collapsed-menu container. Reusing the geometry does not require importing a school-site menu | measured geometry; content per DD-12/DD-13 | X3, F29, F61; DD-12 |
| **G26** | **Footer** | Both real marks — GT School on light, GT Anywhere on `--color-navy`. Column headings in Literata. No accreditation mark, no Cognia badge, no second network parent | MUST | F63, F70, X6, X11; `copy.md` §8 |
| **G27** | **Campus list** | Reuse the live component's shape and status convention — name in `heading-style-h5`, status underneath, open campuses link and future ones do not — with the status colour fixed to an AA value | measured + departure D3 | F64, F65, P12 |
| **G28** | **Network mark** | **No Alpha mark, badge, divider, pill or border anywhere.** The relationship is one sentence in GT's voice | 0 assets | P10, F67, F68; K7 5e |
| **G29** | **Accreditation** | No Cognia mark and no accreditation sentence on any new surface until Q-033 resolves. Nothing goes in `display:none` | 0 | F69, F70, X11; G0.5 item 3 |
| **G30** | **Third-party marks** | No press strip. If one is ever approved, every mark needs a real `alt` and a claims-register row | 0 | F72, A9 |
| **G31** | **Structured data** | One `EducationalOrganization` "GT School" with two `subOrganization` entries; its `logo` is the mark the page actually shows | MUST | F6, F7; K7 C7 |
| **G32** | **Names** | "GT School", "Georgetown Campus", "GT Anywhere", "Guides". Never "GTschool" set solid, never "GT School - Virtual", never bare "Anywhere" as a name | MUST | F14, F85; K7 5c |

**What never changes, in one list.** A mock that alters any of these is off-brief, not a variation: the three typefaces (G12); the mark files and their two-colour construction (G1, G3); the palette's four surfaces and `#001117` text (G6); Inconsolata-uppercase as the only uppercase (G15); the `.5rem` button/pill radius (G17, G20) and the 44px minimum interactive target (`17` §4); photographs from `shared/img/` only, untinted (G24); no Alpha mark and no accreditation claim (G28, G29); the four names (G32). Literata Light 300 for h1–h3 (G13) is today's default within the fixed families, not yet a fixed rule — see G13.

### 5b. Departures the design system may make, each with its reason

| # | Departure | From what is live | Reason | Cost if not made |
|---|---|---|---|---|
| **D1** | **`--_theme---text-color--alternate` becomes white, not gold; `--secondary` becomes `#5b5b5b`, not white** | Anywhere's `:root` | The two role names carry opposite meanings across the estate, and Anywhere's choices are the ones that fail contrast | Every shared component renders differently on the two sites; the h1's second clause stays at 2.38:1 (X1, X2, F88) |
| **D2** | **Gold fills take navy text, not `#fbfbfb`** | `.button.is-nav-cta`, `.menu_button` | 2.50:1 → 7.43:1. The estate already proves navy-on-gold is legible (`.tag` is navy on a gold tint at 16.10:1) | The primary conversion CTA fails AA on the landing as it does on both live sites (F87, F92) |
| **D3** | **Status colour for "open" is darkened from `#e48b53`** | Georgetown `.text-color-gold` | 2.59:1 on white. Even `#ab683e` only reaches 4.39:1, so the value must be picked against the actual surface and recorded in `tokens.css` | The campus list's only differentiating cue is unreadable (F89, F91) |
| **D4** | **Links stay underlined on hover** | `a:hover{text-decoration:none}` | Removing an affordance on hover is backwards and costs the only non-colour cue a link has | A colour-blind user loses the link on hover (F28) |
| **D5** | **A real focus ring: 2 px `#004f71` at 2 px offset on light surfaces; on navy, or anything crossing it, the on-dark focus role proposed in RF-07 (`--color-focus-on-dark` `#fbfbfb`)** | both sites (none) | Anywhere already declares exactly the light-surface values (`--focus--width`/`--offset` `.125rem`, `focus-state` `--brand--blue`) and consumes none of them; `#004f71` is 8.20:1 on the page background but only **1.69:1 on navy** (`kb/K3-color-accessibility.md` §5e), so one universal blue ring fails wherever the estate's own navy bands sit. Honouring the estate's own intent on light surfaces, extended with K3's on-dark proposal (RF-07) where it does not reach | **Correction.** WCAG **2.4.7 Focus Visible** fails on every interactive element today (2.4.13 Focus Appearance is the related AAA criterion with size/contrast minimums); 2.4.11 Focus Not Obscured concerns a focused element being hidden by other content, not an absent ring (F49, F92) |
| **D6** | **Every CTA is `<a>`/`<button>` with a single label node** | `<div class="button">` ×2 per page, duplicated labels | Keyboard reach and a single accessible name | The landing's main action is unreachable by keyboard, exactly as today (F48, F43) |
| **D7** | **h1 sized in rem, not `svh`** | `.hero_heading{font-size:6.5svh}` | A heading that resizes with browser chrome cannot be QA'd against a viewport matrix, and the estate already overrides it below 991 px anyway | Non-deterministic first-screen tests (F38) |
| **D8** | **Radii referenced by value (`--radius-sm/md/lg` = .25/.5/.75rem) with a 1rem fourth step** | the two conflicting name ladders | The same token name is `.5rem` on one site and `.75rem` on the other | Shared components change shape between sites (F31, X7) |
| **D9** | **Icon files normalised to a square artboard** | Anywhere's 1198 × 1080 | So a single `icon-1x1-*` class works with either estate's file | Letterboxing in any square slot (F5, X8) |
| **D10** | **Correction. Header borrows Georgetown's floating-pill container, not Anywhere's collapsed menu or Georgetown's full destination nav** | Anywhere's all-hidden `MENU` toggle at every width; Georgetown's fully visible nav in the same pill shape | DD-12/DD-13 already fix the landing header's content to a minimal set — lockup, "Current families", admissions contact — not a destinations menu (`kb/KB-RESOLUTIONS.md` R11); the geometry is reusable, the nav is not | Without this correction, the landing either repeats Anywhere's mobile-first-everywhere nav at 1440 px or imports Georgetown's unapproved destination nav (X3, F61) |
| **D11** | **Corner-notch cell sizes become tokens (R15: a per-page decorative-device cap is a brief's own choice, not a fixed rule — see G23)** | ad-hoc `3.25/3.35/2.5/3.5rem` values across four stylesheets | The device is worth keeping; the four hand-tuned sizes are not; how many devices one page carries is a composition choice the rubric scores, not a ceiling this file sets | Drift, and the `currentwidth` console error propagating (F53, F54) |
| **D12** | **No press strip, no borrowed testimonials** | "As seen in" ×7 marks; five "2 Hour Learning Student" quotes | Third-party marks with `alt=""` and network-attributed quotes are borrowed proof, which MD-05 and DD-07 already restrict | Unverifiable proof on a claims-controlled surface (F72, F86) |

Each departure is declared in the mock's `RATIONALE.md` with its row id (`D1`–`D12`) and its finding, per DD-19's departure procedure. None of them touches the type families, the palette swatches, the marks, or the photography rule — the four things DD-19 fixes.

### 5c. Calibrated 5 for the rubric row **Continuity (L2)**

The rubric asks: *"Does it look like the front door of the two sites it leads to, and could the sites inherit its shell?"* K7 5h calibrated the architecture half (C1–C10). These ten are the **visual-identity** half, each one a check a reader can run without judgement. A 5 requires all ten; a 4 allows one `Partial` with a named reason; any `Fail` caps the row at 3.

| # | What a 5 requires | How it is checked |
|---|---|---|
| **V1** | **The marks are byte-identical to `shared/img/`.** Zero CSS filters, zero `<svg>` re-inlining with edited fills, zero recolouring of either wordmark half | `sha256` of each mark in the DOM against `shared/img/`; grep the stylesheet for `filter:` on any logo selector — must be zero |
| **V2** | **Every mark meets the geometry rule.** Horizontal marks 32 px tall at 1440 and ≥27 px at 390; the icon at 56 px; ≥32 px clear space on all four sides; `object-fit:contain` and no distortion | Measured box of each mark at 390 and 1440; ratio of rendered to intrinsic aspect within 1 % |
| **V3** | **Three typefaces, correct roles, no fourth.** Literata only on h1–h6 and `.footer_title`; Inter Tight only on body; Inconsolata only on buttons, pills and eyebrows; h1–h3 at weight 300; no `font-weight` above 600 anywhere | Computed `font-family` and `font-weight` per text node, tabulated in the QA file |
| **V4** | **Every colour used resolves to a `tokens.css` variable.** Zero literal hex values in the mock's own CSS except inside inherited SVG art | Stylesheet grep: count of `#[0-9a-f]{3,8}` outside `:root` must be 0 |
| **V5** | **Zero contrast failures, and gold carries no text on any surface lighter than navy.** Every text/background pair ≥4.5:1 (≥3:1 for ≥24 px), every control boundary ≥3:1, focus ring ≥3:1 against both the control and the page | Runner contrast sweep over all text nodes plus a targeted assertion that no node with `color:#e48b53` sits on a background lighter than `#002a3a` |
| **V6** | **Interaction is real.** Every CTA is `<a>` or `<button>`; every focusable element shows the D5 ring; one accessible name per control; tab order runs h1 → provenance line → door 1 → door 2 | Keyboard tab-through recorded; accessible-name dump showing no duplicates |
| **V7** | **The estate's signature devices appear, and are not over-spent.** At least one of {notched convex corner, 64 px grain at `opacity:.3`, `#EBBA9B` 20 % rule grid} is present; no more than two; the corner is the estate's convex quarter-round, not a plain `border-radius` | Element census in the QA file, with a crop of each device |
| **V8** | **Photography obeys the estate.** Only `shared/img/` files; every one cover-cropped in a ≤`.75rem` frame; zero `filter:`; any type-over-photo uses the one approved scrim; neither "avoid" file appears; no two files from the same redundancy cluster in one mock | Image manifest with computed filter and radius per image, checked against `ASSETS.md` |
| **V9** | **The shell is inheritable.** Header and footer are marked `@partial`, use the `1_spec/04` component names, and contain no landing-only selector; the campus list is a `<ul>` whose third item needs no new CSS; the mock's stylesheet has no `#id` selectors | Diff of the header/footer block against `1_spec/04` section 3; markup inspection; the third-campus cost stated in `RATIONALE.md` |
| **V10** | **Placed beside 390 and 1440 captures of both live sites, a reader names the mock as the same estate on at least three of: mark treatment, palette, Literata Light display, `.5rem` uppercase-Inconsolata button, notched corner or grain, navy band.** And a reader who knows the live sites cannot name a single thing the mock borrowed from an anti-pattern in section 4 | Side-by-side grid in the QA file; the critic's answer recorded verbatim, both halves |

**Exemplars for this row, from the estate itself.** The strongest continuity artefact GT already owns is Georgetown's `.split-cta` (F66): two equal halves, each led by its school's real mark at a fixed 48 px, one line of copy, one CTA, in one navy frame — it is a two-door component built from the estate's own parts. **This is a case for reusing the pattern, not the implementation.** The shipped version has three defects a mock must not copy: its enrolling link targets `href="#"` (A13, shared with F64's location card), its `height:80vh` fails the fold rule (`17` §4, DD-44), and it sits in the same footer as accreditation copy that cannot appear under G0.5 item 3 (G29). DD-45 already records this distinction for the register. The strongest *anti*-exemplar is Anywhere's hero badge (F67): the same relationship expressed as a lockup, which is the device G0.5 retired. A 5 looks like the split-cta's two-door shape and single-CTA discipline, rebuilt clean, with the hero-badge lockup removed.

### 5d. What this changes in the brief, the register and the QA

| Artefact | Change |
|---|---|
| `17` §5 brief | Gains a **Brand** field: the mock's declared position on G1–G32 plus the list of `D1`–`D12` departures it takes. A brief without it is incomplete |
| `17` §6 rubric | The Continuity row gets V1–V10 (5c); the critic scores against those, not against impression |
| `mockups/shared/tokens.css` | Six edits: `--color-text-muted:#5b5b5b` (D1); `--color-on-accent:#001117` replacing `#fbfbfb` for gold fills (D2); `--color-status-open` as a darkened gold, value to be chosen against its surface (D3); `--color-focus:#004f71` for light surfaces plus RF-07's `--color-focus-on-dark:#fbfbfb` for navy and any straddling element, with `--focus-width/offset:.125rem` now actually consumed (D5); radii by value with a `1rem` fourth step (D8); `--brand--gold-dark:#ab683e` recorded as a real shared value (F30) |
| `1_spec/04` §2 | The theme-role table must state that `text-color--alternate` and `text-color--secondary` are **re-defined**, not inherited, and say from which site each value comes (X1, X2) |
| `1_spec/04` §3 | Add three components the estate already has and the spec does not name: the notched `edge-bg` corner, the grain overlay, and the campus/location card with its status convention (F53, F55, F64) |
| `1_spec/13` + the runner | Five new deterministic tests: (1) zero `filter:` on any logo selector; (2) no node with `color:#e48b53` on a background lighter than `#002a3a`; (3) every element with class `button` is `<a>` or `<button>`; (4) every focusable element has a computed `outline-width ≥ 2px` on `:focus-visible`; (5) zero mark assets whose `sha256` differs from `shared/img/` |
| `07` register | **No row is contradicted.** Four rationale additions are proposed, not edited in: **DD-01** gains F33 (the estate's display weight is Literata **Light**, which no register row states today); **DD-02** gains F60 (Anywhere's hero is gradient art plus a cut-out, not a photo — which is *why* C12 reads as a conflict); **DD-17** gains F69 (the accreditation disclaimer is `display:none`, so the hold is firmer than R4 recorded); **MN-13** gains F62 (a 1,500 ms Lottie nav icon sits outside the three-tier duration proposal). All go through `12-register-loop.md` |
| `12-claims-register.md` | CR-002 needs a status correction: the "Candidate for Accreditation" text is **present but not rendered** on all five Anywhere content pages (F69). CR-003's reach is wider than recorded — the unqualified "Accredited" is what Georgetown's `.split-cta_right` broadcasts to every Georgetown visitor (F66) |
| `15` positioning brief | Gains F79: GT's own three-promise structure is Alpha's "3 Commitments" with the multiplier raised. That is an argument for a *distinct* GT thesis, not a decorative observation |

---

## 6. Sources

**Read from this repo (no fetch):** `index.html`, `advisors/index.html`, `academics/index.html`, `intensives/index.html`, `academic-calendar/index.html`, `privacy-policy/index.html`, `terms-of-use/index.html`, `refund-policy/index.html`, `404.html`; `assets/cdn.prod.website-files.com/697d45ef94e91c0acce00654/css/*.css` (10 files); 40 SVG and 2 PNG assets in the same directory; `0_plan/research/R1-design-tokens.md`, `R4-content-and-proof.md`; `0_plan/mockups/shared/ASSETS.md`; `0_plan/kb/K7-brand-architecture.md`.

**Read from the `research/R1` capture (curl, 2026-09-10):** `www-home.html`, `about-us.html`, `academics.html`, `programs.html`, `gt-school-2026.webflow.shared.28a9a320d.css`. **Read from the `research/R4` capture (curl, 2026-09-10):** `gt_text/*.txt`, `mirror_text/*.txt`.

**Fetched fresh by this agent with `curl`, 2026-09-11 (UTC):** `https://alpha.school/` (HTTP 200, `last-modified: Fri, 11 Sep 2026 02:46:21 GMT`); `https://alpha.school/faq/` (200); `https://alpha.school/locations/` (200, `last-modified: Fri, 11 Sep 2026 02:41:55 GMT`); `https://alpha.school/wp-content/uploads/elementor/css/post-8.css?ver=1789087367`; `https://alpha.school/wp-content/uploads/2024/03/logowhite-2.svg`; and six Georgetown CDN assets — `GT School - Logo H.svg`, `GT Anywhere - H Full.svg`, `Alpha logo white.svg`, `gt-icon.svg`, `H&R - blue.svg`, `Rocket.svg`.

### Sources that could not be fetched or read

| Item | Why | What would resolve it |
|---|---|---|
| `https://alpha.school/schools/` | HTTP 404 on 2026-09-11. The real path is `/locations/`, which was fetched | — |
| Alpha School's full stylesheet | The page's 15 inline `<style>` blocks total 19,555 bytes and contain no brand tokens; the real values live in per-post Elementor CSS files. One (`post-8.css`) was fetched and gave the global colour and typography kit. The other four were not | Fetch `post-76/77/3657/3713.css` if a deeper Alpha audit is ever needed |
| Georgetown's rendered logo box below 479 px | Computed from the declared box and the SVG's intrinsic aspect, not observed. Contain-scaling is deterministic, so the arithmetic is sound, but it is arithmetic | A screenshot pass, which this task's rules forbid |
| The hero's true local luminance behind the gold h1 clause | `Hero BG.svg` is a 245 KB gradient artwork; the ratio in F88 is computed against the declared page background `#fcf4ef`, which is the **best case**. The artwork's grey stop (`#8F8D8D`) can only lower it | A rendered contrast probe (T-072) |
| Whether Anywhere's `.tag.is-card-feat` white sub-text is legible in place | It resolves to `#fff` on a transparent pill; the card behind it could not be resolved to a single colour from static CSS | A rendered check |
| GSAP/IX2 timing beyond the 1,500 ms Lottie | Unchanged from R1 §9 — no literal `gsap.*()` call exists in any inline script | Unchanged |
| Which three Georgetown "Guides" match Anywhere "Advisors" | Two confirmed (Anjelina, Norberto); Chazz Roper, Grant Cain and Josh Goldstein appear on gt.school and not in the nine Anywhere bios read this session | A name-by-name diff, which R4 §7 already owns |

---

## 7. Open questions

| # | Question | Why it is open, not answered | Who |
|---|---|---|---|
| OQ-1 | Is there a GT brand guideline document, a Figma library or a logo pack that this reverse-engineering should defer to? | Nothing in either estate references one. Everything above is inferred from shipped artefacts, which is evidence of practice, not of intent | Nari, Holly (Q-001) |
| OQ-2 | Which network parent is correct — "the Alpha School family" (gt.school, prose) or "the 2 Hour Learning Network" (Anywhere, footer)? | Both are live, on the same company, in the same month (F71, F82). The landing names one; the footer must not silently name the other | Nari |
| OQ-3 | Is the four-location footer list (Georgetown enrolling; Miami, New York, Bay Area coming soon) approved and current? | It is live on every gt.school page (F64) and is the estate's only concrete expansion statement. DD-21 assumes N campuses; this is the N | Nari |
| OQ-4 | What darker gold should `--color-status-open` be? | `#ab683e` reaches only 4.39:1 on white (F91). Picking a value is a new brand decision, not an extraction, so it is not made here | Holly / Nari, via `07` |
| OQ-5 | May the Alpha mark be recoloured at all? | GT already rescales it and recolours it to `#004F71` (F11). Whether Alpha permits that is a permission question, not a design one — and the landing avoids it entirely by using no mark (G28) | Nari |
| OQ-6 | Does a clear-space rule exist, or is G5's 1× derivation the rule? | G5 is **derived** from the navbar's grid gap, flagged as such. It is the only defensible number the evidence supports | Holly (Q-001) |
| OQ-7 | Should the landing keep the `svh`-sized display type as an intentional device at desktop? | The estate uses it (F38) and it is genuinely distinctive, but it is untestable against a fixed viewport matrix. D7 removes it; a mock that wants it must argue for it | Johnny, via the mock brief |
| OQ-8 | Is Anywhere's voice (F84) a deliberate segment choice or drift? | The two sites address the same parent in the same month with materially different registers (X10). The landing must pick one, and the founder letter is the better model — but that is a recommendation, not a finding | Nari |
| OQ-9 | Which mark is correct for JSON-LD `logo` — `GT-logo.svg` or the visible lockup? | They are different artworks (F6, F7). G31 says "the mark the page shows"; whether `GT-logo.svg` is an earlier master worth keeping is unknown | Nari / Holly |

---

## Rework log (E4)

Verified every item in K12's row of `ensemble/E4-knowledge-base.md` and the per-cluster list in `ensemble/prompts/REWORK-PACK.md` against this file before changing anything (rule 1). **No disagreements**: every one of Astra's K12 findings checked out against the file and the register as written — the quoted text and numbers were where Astra said they were, and each cited register row (DD-12, DD-19, K3 §5e, runbook §4) says what Astra said it says.

| E4 item | What changed | Where |
|---|---|---|
| F74 "Alpha's system shares nothing with GT's": one Alpha token stylesheet was fetched and both palettes share white; soften to what was measured | Reworded to scope the claim to the one Alpha stylesheet actually fetched (post-8.css; four of five Elementor files were never fetched, per section 6), and to name white as the one colour the two estates do share — Alpha's own mark file is literal `white` (F10), GT's on-dark text role and the Anywhere light-variant wordmark path are `white` too (F3, G8) | Section 2j, F74 |
| P8 (a signature texture "used once makes a new page read as GT"): mark Judgment | Split the row: the two textures being estate-wide is kept as measured (F53, F55); the "either one, used once, is enough" claim is now labelled Judgment, with the reason (no recognition study) stated | Section 3, P8 |
| D5 cites WCAG 2.4.11 (Focus Not Obscured) for the absence of an authored focus ring; the applicable criterion is 2.4.7 Focus Visible (2.4.13 Focus Appearance at AAA); correct | Corrected the citation and added what 2.4.11 actually covers (an obscured focus indicator, not an absent one), so the departure's stated cost matches the criterion it violates | Section 5b, D5 |
| Mandatory weight, tracking, button height, fixed pill header and decorative devices: separate "extracted practice" from "proposed rule"; proposals become Options (R15); the minimum target is 44px per runbook section 4, not 40px | G13 (display weight and h1 tracking) tagged "(Option, R15)": the measured fact (F33, F34) stays, the normative claim is now scoped to "today's default, pending DD-38's fixed-copy test (R4)". G23 (decorative devices) and D11 (its cap) tagged "(Option, R15)": the three devices stay as measured estate practice, the "at most two" ceiling becomes a brief's own choice. G25 (header) tagged "(Option, R15)" for the *container* only, with the destination-nav content corrected — see the next row. G17 (button height) corrected, not optioned: the shipped `2.5rem`/40px is below the runbook's 44×44 floor, so the height (not the fill, label or radius) is now stated as a MUST at `2.75rem`/44px regardless of which styling option a brief takes. Removed "Literata Light for h1–h3 (G13)" and the fixed "`2.5rem` button height" from the "what never changes" list, since both are now corrected/optioned; added the 44px floor there instead. Added one sentence to the section intro explaining the new "(Option, R15)" tag | Section 5a, G13, G17, G23, G25, and the "what never changes" paragraph; section 5b, D11 |
| Destination-heavy header guidance conforms to DD-12 (R11) | Corrected three places that recommended a destinations-visible header at desktop, which DD-12 already decided against (minimal shell: lockup, "Current families", admissions contact — explicitly narrower than a full nav): X3's ruling (was "Georgetown"; now "neither as shipped — DD-12's minimal shell"), G25 (content now points to DD-12/DD-13, geometry stays reusable), and D10 (was "header shows its destinations at desktop"; now "borrows Georgetown's floating-pill container, not Anywhere's collapsed menu or Georgetown's full destination nav") | Section 2m, X3; section 5a, G25; section 5b, D10 |
| A universal blue focus ring fails on navy per K3's measurement; focus on dark surfaces uses the on-dark focus role proposed in RF-07 | D5 now scopes `#004f71` to light surfaces (8.20:1) and states its 1.69:1 failure on navy (`kb/K3-color-accessibility.md` §5e), naming RF-07's `--color-focus-on-dark` (`#fbfbfb`) as the on-dark role. The section 5d `tokens.css` bullet updated to list both tokens under the same edit (still six edits total, not seven) | Section 5b, D5; section 5d, `mockups/shared/tokens.css` row |
| Ledger: six Georgetown assets are named, five are counted; reconcile | The six filenames were already listed (`GT School - Logo H.svg`, `GT Anywhere - H Full.svg`, `Alpha logo white.svg`, `gt-icon.svg`, `H&R - blue.svg`, `Rocket.svg`); corrected "five" to "six" so the count matches the list (5 Alpha + 6 Georgetown = 11, matching E4's own tally) | Section 6, Sources, "Fetched fresh by this agent" |
| Keep the hidden accreditation qualifier and the network-attributed testimonials as evidence supporting the DD-17/MD-05 holds | No substantive change: F69's hidden-`display:none` finding and F86's "2 Hour Learning Student" attribution finding are unchanged (F69 gained only the mirror/live caveat below; F86 untouched). Confirmed both are still cited from X11 and MD-05's rationale respectively | Section 2i, F69; section 2k, F86 (unchanged) |
| E5a: F64 to F66 describe the live components with a dead enrolling link (`href="#"`), an `80vh` split height and accreditation copy inside the component; the GT application must say the patterns are reused, not the implementation | The section 5c "Exemplars for this row" paragraph, which cited `.split-cta` (F66) as the model without qualification, now states plainly that this is a case for reusing the pattern and not the implementation, and names the three shipped defects a mock must not copy (dead link, A13; `80vh` failing the fold rule, `17` §4/DD-44; adjacency to accreditation copy GT cannot ship, G29) — matching the distinction the register already draws in DD-45 | Section 5c, "Exemplars for this row" |
| E5a: F69's hidden qualifier is verified in the local mirror homepage; say that live status needs a fresh text fetch | Added a sentence to F69 stating the finding is read from the mirror committed in this repo (A:), not a fresh fetch, and that confirming the qualifier is still hidden on the live site needs a new text fetch — the same distinction `00`'s five facts already draws for the 3X claim | Section 2i, F69 |
| *(Rule 3, general)* | Checked the clear-space arithmetic (F16–F21), the mark-scaling arithmetic (F10), and the contrast figures (F87–F93) against their stated inputs; all recomputed correctly. No arithmetic error found in this file | — |
| Housekeeping | Updated the header Status row to record the E4 review and this rework, pointing to this log | Header table, Status row |

### Proposed register follow-ups (not applied to any register file — for a human or the register maintainer to act on)

None new. Every substantive proposal this rework would otherwise raise is already carried in `07-design-decisions.md`, sourced from this file: **DD-38** (display weight, leading and h1 scale pending a fixed-copy test, citing K12 G13); **DD-39** (color roles including `--color-focus-on-dark`, citing K12 G8–G10); **DD-44** (the 19-row matrix and 44×44 target-size test, which this rework applied to G17); **DD-45** (reusing gt.school's two-door component and Locations list as patterns, not implementation, citing K12 F64–F66, G27 — which this rework's section 5c edit now matches). This rework aligned K12's own text with those four rows rather than proposing anything past them.
