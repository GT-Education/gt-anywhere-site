# R1 Design tokens: real computed values from both live sites

| Field | Value |
|---|---|
| Agent | R1 (research swarm, `0_plan/05-landing-mockups-plan.md` section 5) |
| Method | HTML and CSS fetched with `curl` only. Anywhere read from this repo's mirror (never fetched live). Georgetown fetched today into `/private/tmp/claude-501/.../scratchpad/r1/gt-school/`. No JavaScript executed on either site; no browser opened; no analytics/ad pixel fired |
| Feeds | DD-01, DD-02, DD-11, DD-19, MN-13; `1_spec/04-design-system-spec.md` section 2; `mockups/shared/tokens.css` (draft, end of this file) |
| Version | 0.1, 2026-09-10 |

Shorthand used below: **A:shared.css** = the Anywhere mirror's site-wide stylesheet; **A:‹page›.css** = that page's per-page stylesheet (index/advisors/academics/intensives/academic-calendar/privacy/terms/refund/404); **G:shared.css** = Georgetown's single site-wide stylesheet (Georgetown ships no per-page CSS — see section 1). All Anywhere paths are relative to the repo root.

## 1. Sources fetched

| Site | URL | Local path | Bytes | Date on the resource | Fetched |
|---|---|---|---|---|---|
| Anywhere | `https://anywhere.gt.school/` (mirrored) | `index.html` | 139,295 | Webflow "Last Published: Thu Jul 09 2026 22:21:21 GMT" (in-file comment); mirrored into this repo 2026-07-24 (`git log`, commit `31b86f5`) | Not re-fetched — repo mirror only, per instructions |
| Anywhere | same | `advisors/index.html` | 113,121 | same Last Published stamp | repo mirror |
| Anywhere | same | `academics/index.html` | 111,463 | same | repo mirror |
| Anywhere | same | `assets/.../css/gt-anywhere.webflow.shared.b79022343.min.css` (A:shared.css) | 33,765 | same | repo mirror |
| Anywhere | same | `assets/.../css/gt-anywhere.webflow.697d45f094e91c0acce006e7.aa5a8a3ea.opt.min.css` (A:index.css) | 89,329 | same | repo mirror |
| Anywhere | same | `assets/.../css/gt-anywhere.webflow.69bc679540c585f88089bd2c.8642dcf27.opt.min.css` (A:advisors.css) | 88,845 | same | repo mirror |
| Anywhere | same | `assets/.../css/gt-anywhere.webflow.69c13f2ba8ba9ed88d465d74.c84289aaa.opt.min.css` (A:academics.css) | 90,436 | same | repo mirror |
| Anywhere | same | `assets/.../css/gt-anywhere.webflow.69c2c29135b1f3747256abd8.ccbfc91cb.opt.min.css` (A:intensives.css) | 90,819 | same | repo mirror |
| Anywhere | same | `assets/.../css/gt-anywhere.webflow.69ce984da18c0e49838c1b47.c015e17cc.opt.min.css` (A:academic-calendar.css) | 68,713 | same | repo mirror |
| Anywhere | same | `assets/.../css/*.b49c42686/1c8aaac10/da4467d12.opt.min.css` (privacy/terms/refund; byte-identical, 63,455 each) | 63,455 ×3 | same | repo mirror |
| Anywhere | same | `assets/.../css/gt-anywhere.webflow.697d45f094e91c0acce006e9.700d90e31.opt.min.css` (A:404.css) | 44,575 | same | repo mirror |
| Georgetown | `https://gt.school/` | — | 166 | response `date: Thu, 10 Sep 2026 20:21:54 GMT` | curl, 301 → `https://www.gt.school/` |
| Georgetown | `https://www.gt.school/` | `www-home.html` | 122,196 | response date 2026-09-10 20:22:02 GMT | curl |
| Georgetown | `https://www.gt.school/about-us` | `about-us.html` | 92,317 | response date 2026-09-10 20:22:22 GMT; `last-modified: Mon, 07 Sep 2026 08:31:35 GMT` | curl |
| Georgetown | `https://www.gt.school/academics` | `academics.html` | 98,484 | response date 2026-09-10 20:22:22 GMT; `last-modified: Wed, 09 Sep 2026 19:36:05 GMT` | curl |
| Georgetown | `https://www.gt.school/programs` | `programs.html` | 96,607 | response date 2026-09-10 20:22:23 GMT; `last-modified: Wed, 09 Sep 2026 01:49:52 GMT` | curl |
| Georgetown | `https://cdn.prod.website-files.com/69f0baa91c8164e513311236/css/gt-school-2026.webflow.shared.28a9a320d.css` (G:shared.css) | `gt-school-2026.webflow.shared.28a9a320d.css` | 267,626 | `last-modified: Mon, 31 Aug 2026 19:28:57 GMT`; `etag "c40689e33d7be5ffb0712fd1e1adb94a"` | curl |

Note: all four Georgetown pages checked (`www-home.html`, `about-us.html`, `academics.html`, `programs.html`) link only **G:shared.css** — Georgetown does not ship a per-page stylesheet the way Anywhere does (Anywhere's Webflow export splits shared + one file per `data-wf-page`; Georgetown's 2026 export bundles every page's rules into one file). This is a real structural difference, not a sampling gap — verified by grepping `<link>`/`<script>` tags in all three inner pages plus the home page.

## 2. Typefaces per site

Both sites use the **same three type families** — Literata (serif), Inter Tight (sans), Inconsolata (mono) — all self-hosted via `@font-face`, all wired through the identical Webflow-Variables naming (`--font-family--heading`, `--font-family--body`; Georgetown additionally names Inconsolata `--font-family--utility`).

| Family | Site | Weights shipped (`@font-face`, normal + italic) | Source |
|---|---|---|---|
| Literata | Anywhere | 300, 400, 500, **700** (all with italic) — 8 faces | `assets/.../697d4c84*.ttf`, declared in A:shared.css |
| Literata | Georgetown | 300, 400, 500, **600** (all with italic) — 8 faces | `.../69f259bd*.ttf`, declared in G:shared.css |
| Inter Tight | Anywhere | 300 (normal only), 400, 500, 700 (normal+italic) — 7 faces, **missing 300 italic** | `.../697d4cc3*.ttf`, family name literally `Intertight` (no space) |
| Inter Tight | Georgetown | 300, 400, 500, 700, all normal+italic — 8 faces, full matrix | `.../6a0c7c82*.ttf`, family name `"Inter Tight"` (quoted, with space) |
| Inconsolata | Anywhere | 300, 400, 600 — 3 faces | `.../697d6103*.ttf`, `.../69810d2d*.ttf` |
| Inconsolata | Georgetown | 300, 400, 500, 600, 700 — 5 faces | `.../69f0bcc9*.ttf` |

One-line notes:
- Heading fallback stack differs: Anywhere `Literata,"Palatino Linotype",sans-serif` vs Georgetown `Literata, Georgia, sans-serif` (A:index.css / G:shared.css `:root`).
- Font-family string mismatch is a real merge hazard: Anywhere's own `@font-face` calls the sans family `Intertight`; Georgetown's calls it `"Inter Tight"`. A merged system must pick one string and repoint every `@font-face` to it.
- **Neither site's font pipeline is clean**: both pages also call `WebFont.load({google:{families:["Inconsolata:400,700"]}})` (confirmed identical in Anywhere `index.html` and Georgetown `www-home.html`), which re-fetches Inconsolata 400/700 from Google Fonts even though both sites already self-host Inconsolata locally. This is live, wasted network weight on both sites today — directly actionable for T-065 (drop the remote call, keep only the self-hosted files).
- Literata's heaviest self-hosted weight differs (700 on Anywhere vs 600 on Georgetown) — if a merged system wants a **bold** serif headline, Georgetown has no font file for it today.

## 3. Color inventory per site

Both sites declare their palette the same way: a Webflow "Variables" `:root` block (`--brand--*`, `--neutral--*`) aliased through a theme layer (`--_theme---background--*`, `--_theme---text-color--*`, `--_theme---border-color--*`, `--_theme---link-color--*`, `--_theme---system--*`). Raw swatches below; the theme-layer *role assignment* is where the two sites diverge (see section 7).

### 3a. Anywhere — raw swatches (`A:index.css` `:root`, identical across all 8 pages — diffed byte-for-byte, zero differences)

| Value | Name | Used as (selectors) | Proposed role (`1_spec/04` §2) |
|---|---|---|---|
| `#fcf4ef` | `--neutral--off-white` | `--_theme---background--primary` | `--color-bg` |
| `#fff` | `--neutral--white` | secondary text, secondary border, `.button`/`.tag-is-feature` fallback context | `--color-surface` (candidate) |
| `#001117` | `--neutral--navy-dark` | `--_theme---text-color--primary`; also body-text default | `--color-text` |
| `#1a1a1a` | `--neutral--black` | **declared, not consumed anywhere** (no rule references `var(--neutral--black)`) | none — orphaned token |
| `#cac6c4` | `--neutral--grey` | `--_theme---border-color--primary` | `--color-border` |
| `#d9d9d9` | `--neutral--grey-light` | `--_theme---border-color--secondary` | `--color-border` (secondary) |
| `transparent` | `--neutral--transparent` | gradient/overlay endpoints | n/a |
| `#e48b53` | `--brand--gold` | `--_theme---background--alternate`, `--_theme---text-color--alternate`, `--_theme---link-color--primary`; CTA fills | `--color-accent` |
| `#ebba9b` | `--brand--gold-light` | `--_theme---link-color--secondary` | accent, muted |
| `#f8e8de` | `--brand--gold-lightest` | `--_theme---background--secondary` | `--color-surface` |
| `#f5ddcd` | `--brand--gold-lighter` | `--_theme---system--success-background` | success bg |
| `#002a3a` | `--brand--navy` | `--_theme---background--tertiary`; `.button` fill | `--color-surface-alt` / accent-contrast surface |
| `#001117` | (`--brand--red` aliases to `--brand--gold`, not a real red) | `--_theme---system--warning-background`, `--_theme---system--error-background` | flagged below — see 9 |
| `#003b5c` | `--brand--blue-dark` | `.tag-is-feature` fill | secondary accent |
| `#004f71` | `--brand--blue` | `--_theme---system--focus-state`, `--_theme---system--selection-background` | `--color-focus` |
| `#2cb091` | `--brand--green` | **declared, not consumed anywhere** | orphaned token |
| `#387063` | `--brand--green-darker` | **declared, not consumed anywhere** | orphaned token |
| `#fbfbfb` | (no variable — literal) | `.button` / `.tag-is-feature` text color | on-accent text |
| `#121212` | (literal) | `.nav_menu-button` (hamburger icon) color | — distinct near-black, not aliased to `--neutral--black` |
| `#141412` | (literal) | `.accordion_trigger` color | — a third, different near-black |

Framework noise excluded from the table (present in A:index.css but Webflow/plugin defaults, not brand-authored): `#3898ec` (Webflow's default checkbox/radio focus ring), `#ccc` (`.w-checkbox-input` border default).

### 3b. Georgetown — raw swatches (`G:shared.css` `:root`)

| Value | Name | Used as (selectors) | Proposed role |
|---|---|---|---|
| `#fff` | `--neutral--white` | `--_theme---background--primary` | `--color-bg` (candidate — conflicts with Anywhere, see §7) |
| `#fcf4ef` | `--neutral--off-white` | `--_theme---background--secondary` | `--color-surface` |
| `#001117` | `--brand--navy-dark` (moved from "neutral" to "brand" group) | `--_theme---text-color--primary` | `--color-text` |
| `#5b5b5b` | `--neutral--grey-dark` (new — no Anywhere equivalent) | `--_theme---text-color--secondary` | `--color-text-muted` |
| `#cac6c4` | `--neutral--grey` | declared; no direct theme-role reference found in G:shared.css | — |
| `#d9d9d9` | `--neutral--grey-light` | `--_theme---border-color--primary` | `--color-border` |
| `#e48b53` | `--brand--orange` (Anywhere calls the identical hex `--brand--gold`) | `.menu_button` fill | `--color-accent` |
| `#ebba9b` | `--brand--gold-light` | declared | accent, muted |
| `#f8e8de` | `--brand--gold-lightest` | `--_theme---background--tertiary` | see §7 conflict |
| `#f5ddcd` | `--brand--gold-lighter` | declared | success-adjacent |
| `#002a3a` | `--brand--navy` | `--_theme---background--alternate`; `.button-2`/`.hero_wrap` overlay context | `--color-surface-alt` |
| `#003b5c` | `--brand--blue-dark` | declared | secondary accent |
| `#004f71` | `--brand--blue` | declared, **but not wired to `system--focus-state`** (that variable doesn't exist on Georgetown at all — see §9) | would-be `--color-focus` |
| `#5e5515` | `--brand--yellow-darker` | orphaned Webflow "deleted variable" chain feeding `system--warning-text` (see §9) | broken, not a usable token |
| `#fbfbfb` | (literal) | `.menu_button` / `.button-2` text | on-accent text — **matches Anywhere exactly** |
| `#121212` | (literal) | `.nav_menu-button`, `.nav_dashboard_link:hover` | **matches Anywhere exactly** |
| `#ab683e` | (literal, no variable) | `.button-bg.is-gold`, `.button-bg.is-gold-r`, `.dashboard_color-block.is-gold-gradient` — the dark stop of a gold gradient paired with `#e48b53` | candidate `--brand--gold-dark` (new, real, not on Anywhere) |
| `#0082f3` | (literal) | `.w-nav-link.w--current`, `.w-dropdown-link.w--current` (current-page nav indicator) | a real, distinct accent not aliased to any brand variable |

Framework/third-party noise excluded (confirmed by selector, not brand): `#3898ec`/`#ccc` (Webflow default form-focus), `#ea384c`/`#ffdede` (`.w-form-fail`, `.w-file-upload-error-msg` — stock Webflow form error colors), `#5d6c7b`/`#758696` (`.w-widget-twitter-count-shim` — Twitter embed shim), `#2d40ea`/`#2d62ff`/`#dd23bb`/`#252525` (`.fs-styleguide_*`, `.fs-toc_*` — Finsweet component-library scaffold classes, not applied brand color).

## 4. Type scale per site

Root scale (`--_typography---h1..h6`, `--_typography---font-size--tiny..xlarge`), desktop values, both sites — cited from each site's `:root` in shared/index CSS:

| Token | Anywhere | Georgetown | Same? |
|---|---|---|---|
| h1 | 3.25rem | 3.25rem | yes |
| h2 | 3rem | 3rem | yes |
| h3 | 2rem | 2rem | yes |
| h4 | 1.5rem | 1.5rem | yes |
| h5 | 1.25rem | 1.25rem | yes |
| h6 | .875rem | .875rem | yes |
| font-size—tiny | .75rem | .875rem | **no** |
| font-size—small | .875rem | 1rem | **no** |
| font-size—regular | 1rem | 1.125rem | **no** |
| font-size—medium | 1.125rem | 1.25rem | **no** |
| font-size—large | 1.25rem | 1.5rem | **no** |
| font-size—xlarge | 1.5rem | 2rem | **no** |
| body font-size | 1rem | 1rem | yes |

The h1–h6 ladder is **identical** on both sites. The secondary "label/tag/caption" ladder (`tiny`→`xlarge`) is **shifted by exactly one rung** — Georgetown's `tiny` (.875rem) equals Anywhere's `small`; Georgetown's `regular` (1.125rem) equals Anywhere's `medium`, etc. Same step count (6), same progression, different absolute values per name — see §7.

Responsive overrides (both sites redefine the variables on a `body{...}` selector inside `@media (max-width:991px/767px/479px)` — same mechanism, cited from each `:root`-in-media block):

| Breakpoint | h1 | h2 | h3 | h4 | h5 | h6 |
|---|---|---|---|---|---|---|
| Anywhere ≤991px | 3.25rem | 3rem | 2rem | 1.5rem | 1.25rem | .875rem |
| Georgetown ≤991px | 3.25rem | 3rem | 2rem | 1.5rem | 1.25rem | .875rem |
| Anywhere ≤767px | 2.5rem | 2rem | 1.5rem | 1.25rem | **1rem** | .875rem |
| Georgetown ≤767px | 2.5rem | 2rem | 1.5rem | 1.25rem | **1.125rem** | .875rem |

Only one divergence in the entire responsive heading ladder: h5 at mobile (1rem Anywhere vs 1.125rem Georgetown).

Component-level heading overrides (selectors, not the shared vars) at 479px:

| Selector | Anywhere | Georgetown |
|---|---|---|
| `.hero_heading` / `.hero-heading` | 2.25rem (A:index.css) | 2.5rem (G:shared.css) |

Line-height ("leading"): both sites alias h1–h3 to one font-height step and h4–h6 to another, and both land on the **same computed numbers** (h1–h3 = 1.15, h4–h6 = 1.25) even though the step *names* differ — Anywhere's h1 uses `font-height--medium` (=1.15 on Anywhere); Georgetown's h1 uses `font-height--small` (=1.15 on Georgetown). Body line-height is the one place this coincidence breaks: both alias to `font-height--large`, which is **1.25 on Anywhere but 1.3 on Georgetown** — a real, confirmed body-leading conflict.

Letter-spacing: `--_typography---letter-spacing--tight` (h1) = `-.1rem` on both sites (byte-identical). Anywhere additionally defines `tighter -.25rem`, `wide .125rem`, `wider .25rem`; those three steps don't appear anywhere in Georgetown's exported CSS (Webflow prunes unreferenced variables from the export, so this most likely means Georgetown's current pages simply don't use those steps, not that they were deliberately removed — see appendix).

## 5. Spacing, radii, shadows, container widths, breakpoints

### 5a. Breakpoints

Both sites use the **same three Webflow project breakpoints**, confirmed by grepping every `@media` in each shared/page CSS: `max-width:991px`, `max-width:767px`, `max-width:479px`. (Georgetown's CSS also carries one `min-width:768px` block, but it only touches `.w-lightbox-*` — Webflow's stock lightbox component, not a project breakpoint.)

### 5b. Spacing scale (`--_layout---spacing--*`, desktop values)

| Step | Anywhere | Georgetown |
|---|---|---|
| none | 0 | 0 |
| tiny | .125rem | .125rem |
| xxsmall | .25rem | .25rem |
| xsmall | .5rem | .5rem |
| **small** | **1rem** | **.75rem** |
| **regular** | **1.5rem** | **1rem** |
| **medium** | **2rem** | **1.5rem** |
| **large** | **3rem** | **2rem** |
| **xlarge** | **4rem** | **3rem** |
| **xxlarge** | **5rem** | **4rem** |
| **huge** | **6rem** | **5rem** |
| **xhuge** | **8rem** | **6rem** |
| **xxhuge** | **12rem** | **8rem** |

Identical up through `xsmall` (.5rem), then **every subsequent named step is shifted by exactly one rung** — Georgetown's `xlarge` (3rem) equals Anywhere's `large`; Georgetown's `xxhuge` (8rem) equals Anywhere's `xhuge`. This is the same one-rung-shift pattern as the type scale (§4) — evidence of the same underlying "resize the whole ladder, keep the names" edit having been made to one site and not the other at some point. `section-padding` (small/medium/large = 3/5/8rem) and `global-padding` (2.5rem) are the one part of the spacing system that **is** byte-identical on both sites.

### 5c. Radii

| Step | Anywhere | Georgetown |
|---|---|---|
| small | .25rem | .25rem |
| regular / medium | .5rem | .5rem (named "medium") |
| medium / large | .75rem | .75rem (named "large") |
| large | 1rem | *(no fourth step)* |

Values line up 1:1 once matched by number instead of name (Anywhere's "regular" = Georgetown's "medium" = .5rem; Anywhere's "medium" = Georgetown's "large" = .75rem). Anywhere alone has a fourth, larger step (1rem).

### 5d. Border width

Anywhere: `thin` 1px, `normal` .125rem (2px), `bold` .25rem (4px) — three steps. Georgetown: one step, `regular` 1px. `.form_text-field`/`.form_select-field` on Anywhere use literal `border:1px #000` with no style keyword, which (per CSS shorthand rules) renders no visible border at all — the field's shape comes only from `border-radius` + `background-color:var(--brand--gold-lightest)` (A:index.css).

### 5e. Container / max-width

| Token | Anywhere | Georgetown |
|---|---|---|
| container—small | 48rem (768px) | 48rem (768px) — same |
| container—medium | 64rem (1024px) | 64rem (1024px) — same |
| **container—large** | **92rem (1472px)** | **90rem (1440px)** — differs |
| max-width—xsmall | 16rem | 16.5rem — differs |
| max-width—medium | 31.75rem | 32rem — differs |
| max-width—(xxsmall, small, large, xlarge, xxlarge) | 12/20/48/64/80rem | 12/20/48/64/80rem — same |

`.container-large{max-width:var(--_sizes---container--large)}` is defined the same way on both sites (A:index.css, G:shared.css) — only the value differs.

### 5f. Shadows

| Value | Site(s) | Selector | Note |
|---|---|---|---|
| `1px 2px 14px #00000008` | **both** | `.menu_wrap` (Anywhere) / `.mobile-menu_wrap` (Georgetown) | identical recipe, nav dropdown shadow — strongest cross-site elevation candidate |
| `0 -2px 16px #0000000d` | Anywhere only (of the pages fetched) | `.section.home-intro` | section-transition shadow |
| `5px -6px 9px #00000029` | Anywhere only | `.edge-bg_filler.is-navy.is-shadow-top` (advisors/academics/intensives) | decorative edge shadow |
| `0 0 5px 1px #0003` | Anywhere only | `.video-container` | video frame glow |

Excluded as framework noise on both sites: `#3898ec` focus rings on `.w-checkbox-input`/`.w-form-formradioinput` (Webflow defaults, not custom shadows).

## 6. Motion: transitions, GSAP, and IX2

### 6a. CSS transitions (project-authored, not framework)

| Duration | Anywhere selectors (A:index.css unless noted) | Georgetown selectors (G:shared.css) |
|---|---|---|
| **.1s (100ms)** | `.modal_close`, `.social-button` (G) | `.modal_close`, `.social-button`, `.button-back`, `.w-slider-dot` |
| **.2s (200ms)** | `.modal_close-icon`, `.slider-arrow` (advisors/intensives CSS) | `.form_checkbox-icon`, `.text-style-link`, `.button.is-form-submit`, `.button.is-secondary`, `.navbar_dropdown-nav-link`, `.swiper-button`, `.modal_close-icon`, `.nav_dashboard_dropdown-btn`, `.nav_dashboard_link-wrapper`, `.slider-arrow` |
| **.3s (300ms)** | `.button.is-contact`, `.menu_btn` | `.w-lightbox-control`, `.menu_dd-button` |

Every single transition on both sites omits an explicit timing function — none specify `cubic-bezier(...)` or a named easing. That means the browser's initial/default `ease` applies uniformly. **No second easing curve exists anywhere in either site's CSS.**

### 6b. GSAP

Both sites load GSAP 3.15 core, `ScrollTrigger`, and `SplitText` as `<script src>` libraries (`assets/cdn.prod.website-files.com/gsap/3.15.0/{gsap,ScrollTrigger,SplitText}.min.js`, loaded right after the Webflow runtime bundles, near the end of `index.html`'s body). **No literal `gsap.*()`, `ScrollTrigger.*()`, or `SplitText.*()` call exists in any inline `<script>` block on any of the 8 mirrored Anywhere pages** — verified by grepping every page for the literal call syntax. Custom scroll-linked markup attributes do exist in the markup (`text-scroll=""`, `fade-in=""`, `grid-scroll=""`, `line-scroll=""` — e.g. `index.html` footer, "Navigate"/"Contact" columns), but the code that binds them to GSAP is not present in any static asset this mirror captured; it is most likely inside Webflow's own compiled runtime bundles (`webflow.586b9241.71e49d0e91d9e5cb.js` and three `webflow.schunk.*.js` files, 300–560 KB each) or fetched from Webflow's backend at runtime rather than baked into the page — either way, outside what a static, JS-free fetch can see (see §9, blocked).

### 6c. The one concrete native-interaction duration found

`index.html` line 585 (nav hamburger icon): `data-animation-type="lottie" data-src="/assets/.../69812368015a53998431f653_menu%20icon.json" data-loop="0" data-autoplay="0" data-default-duration="0" data-duration="1.5" data-ix2-initial-state="0"` — a Lottie-driven icon animation, **1.5s (1500ms)**, wired through Webflow's IX2 attribute system, not GSAP and not a CSS transition. This is a fourth, much slower duration point that exists on the live site and is not represented anywhere in the current three-duration token proposal.

## 7. Conflicts table (Anywhere vs Georgetown) and proposed merge

| # | What | Anywhere | Georgetown | Proposed merged value | Reasoning |
|---|---|---|---|---|---|
| C1 | Body line-height | 1.25 | 1.3 | **1.25** | Anywhere is the live production site with real traffic (6,302 sessions/28d, per `00-context.md`); keep its measured, currently-shipping value per DD-19 continuity default. Difference is small (1.25 vs 1.3) and not user-visible enough to justify picking the unfamiliar one. |
| C2 | Label/tag scale (tiny→xlarge) | .75/.875/1/1.125/1.25/1.5rem | .875/1/1.125/1.25/1.5/2rem | **Anywhere's ladder** (.75…1.5rem) | Same step count, values just shifted one rung; Anywhere's is the live, already-shipping production scale. Georgetown's higher ladder is one legitimate alternative if labels there read as too small in practice — flag as a departure option, not a silent pick. |
| C3 | Spacing ladder (small→xxhuge) | 1/1.5/2/3/4/5/6/8/12rem | .75/1/1.5/2/3/4/5/6/8rem | **Anywhere's ladder** | Same reasoning as C2 — identical step count and progression, one-rung shift. Picking Anywhere avoids silently tightening the whitespace budget the current mocks are already designed against. |
| C4 | Radius, 4th step | 1rem (`large`) | *(none)* | **Keep 1rem as an optional 4th step** | Georgetown simply never needed a radius this large; nothing contradicts it. |
| C5 | `container--large` | 92rem (1472px) | 90rem (1440px) | **90rem (1440px)** | This project's own verification spec tests desktop at exactly **1440px** (`CLAUDE.md` → "Driven in a browser... at 390px and 1440px"). Matching Georgetown's 1440px container avoids any content-overflow edge case at the one desktop width every mock is actually checked against. |
| C6 | `container--small` | 48rem (768px) | 48rem (768px) | **48rem** | No conflict — both agree. |
| C7 | Theme role: `background--primary` | off-white `#fcf4ef` | white `#fff` | **off-white `#fcf4ef`** | DD-02's default is "existing palette", and off-white is Anywhere's live production background; pure white is a colder, more clinical choice that isn't necessary given DD-19's exclusivity-not-wealth framing (`0_plan/08` principle 3). |
| C8 | Theme role: `background--secondary` | gold-lightest `#f8e8de` | off-white `#fcf4ef` | **gold-lightest `#f8e8de`** | Needs to read as visually distinct from `--color-bg` (C7); Georgetown's choice of off-white-as-secondary is indistinguishable from Anywhere's *primary*, i.e. Georgetown's whole theme layer is shifted one rung from Anywhere's, same pattern as C2/C3. |
| C9 | Theme role: `background--tertiary` | navy `#002a3a` (dark) | gold-lightest `#f8e8de` (light) | **Escalate — no merge proposed** | This is the sharpest conflict in the palette: the identical named slot points to opposite ends of the lightness range on the two sites. Silently picking either changes whether "tertiary" sections read as a dark accent band or a light accent band. This is exactly the kind of call DD-19's departure procedure exists for — needs Nari/Johnny, not an inferred default. |
| C10 | Theme role: `border-color--primary` | grey `#cac6c4` | grey-light `#d9d9d9` | **grey `#cac6c4`** | Same one-rung-shift pattern as C8 (Georgetown's primary border = Anywhere's *secondary* border value). Anywhere's is the live default. |
| C11 | `--color-focus` | explicit `#004f71` (`brand--blue`) | **undefined** — the three variables (`--focus--width`, `--focus--offset`, `--_theme---system--focus-state`) don't exist in Georgetown's CSS at all, so its focus ring silently falls back to the CSS fallback literal `#005fcc` (a generic Webflow blue, not a Georgetown brand color) | **`#004f71`, width/offset `.125rem` (2px)** | Anywhere made a deliberate brand choice; Georgetown's is an accidental default, not a considered alternative. |
| C12 | Hero tone | Light: `.section_home-hero` has no background override, so it inherits `--_theme---background--primary` (off-white); no explicit text color on `.hero_heading` | Photographic/dark: `.hero_wrap{color:var(--_theme---text-color--alternate)}` = white text, over `.hero_bg-image.is-home` (full-bleed photo) with a `.static-noise` overlay | **Escalate — see §8, DD-02** | The two live sites do not currently agree on hero tone at all; this isn't a value to average, it's a design call DD-02 needs to make explicitly rather than inherit. |
| C13 | Inter Tight availability | Missing 300-italic | Full weight×style matrix | **Use Georgetown's font files** (more complete) | Straightforward — no reason to ship a gap that's already closed on the other site. |
| C14 | Literata heaviest weight | 700 (Bold) | 600 (SemiBold) | **Flag, don't silently pick** | If the merged system wants a bold serif headline anywhere, Georgetown has no font file for it; either add the 700 file to Georgetown's asset set or design headings to top out at 600. |
| C15 | CSS transition durations vs. MN-13's fixed values | 100/200/300ms (both sites, confirmed identical categories of use) | same | **100/200/300ms**, not 150/250/400ms | See §8, MN-13 — the spec's already-fixed numbers don't match either site's real, live CSS. |

## 8. Decisions affected

| Decision | Current position (`0_plan/07-design-decisions.md`) | Evidence found | Confirms or changes? | Why |
|---|---|---|---|---|
| **DD-01** Typography pairing | Choose (a), Literata + Inter Tight + Inconsolata, **"provisionally... R1 confirms Georgetown's faces before this is final"** | Georgetown's live 2026 CSS (`G:shared.css`) self-hosts the exact same three families through the identical Webflow-Variables architecture (`--font-family--heading`/`--font-family--body`/`--font-family--utility`). Anywhere's `.button` and Georgetown's `.button-2`/`.menu_button` are near byte-identical rules (navy or gold fill, `#fbfbfb` text, uppercase, Inconsolata, 1rem/500 weight, `.5rem` radius, `2.5rem` height) — i.e. the CTA component is *already* one shared design across both live sites, not just the type families. | **Confirms.** The named condition ("R1 confirms Georgetown's faces") is now satisfied — DD-01 can move from provisional to settled on families. Two caveats to carry forward, not blockers: Literata's heaviest weight differs (700 Anywhere vs 600 Georgetown, §7 C14), and the two sites' `@font-face` declare the sans family under different name strings (`Intertight` vs `"Inter Tight"`) which must be reconciled during implementation, not left as-is. |
| **DD-02** Palette and hero tone | Choose (a), "existing palette, light hero," as the default; M3 may test a dark hero as a flagged departure | The *palette* half is strongly confirmed: 10 of 13 raw brand/neutral hex values are byte-identical across both sites (§3). But the *hero tone* half assumes there is one "existing" convention to default to. There isn't: Anywhere's live homepage hero is light (inherits the off-white page background, no override on `.section_home-hero`); Georgetown's live 2026 homepage hero is a full-bleed photo with white text (`color:var(--_theme---text-color--alternate)` = white, over `.hero_bg-image.is-home`), i.e. effectively dark-toned via photography, not flat color. | **Changes the premise, not the palette pick.** Palette: confirmed, no change needed. Hero tone: "light hero" is Anywhere's convention only — Georgetown's own current production hero is already dark/photographic. DD-02 should say the two schools disagree today and let the new umbrella design choose deliberately (per DD-19's departure procedure), rather than treating light-hero as the shared incumbent that only M3 tests against. |
| **DD-19** Style envelope | (a) type families and palette **fixed**; layout, hierarchy, density, imagery, tone **free**; departures flagged | Type families: confirmed shared (DD-01). Raw palette swatches: ~77% identical by hex. But the *theme/semantic layer* — which color plays "primary background," "secondary background," "tertiary background," "primary border," etc. — is reshuffled by one rung between the sites almost everywhere it can be checked (§7 C7–C10), and the numeric spacing and label-type scales are *also* shifted by exactly one named rung end-to-end (§4, §5b), even though the raw palette and the h1–h6 ladder are not. | **Confirms the structure, sharpens the definition.** "Palette fixed" should read as "the raw color *swatches* are fixed; the theme-role *mapping* of those swatches is not yet fixed and must be decided fresh." And "type families fixed" needs a companion rule for scales: **merge spacing and type-scale steps by rem value, never by matching token name across the two sites** — a name match (`--_layout---spacing--large`) silently carries a different number on each site today, which is exactly the failure mode a shared design system exists to prevent. |
| **MN-13** Motion tokens | (a) Three durations and two easings in `tokens.css`, **"extracted from today's GSAP settings,"** inherited by both sites | No literal GSAP configuration (duration/ease arguments to a `gsap.*()`/`ScrollTrigger.*()` call) exists in either site's inline custom code — verified by grepping all 8 mirrored Anywhere pages for the call syntax (§6b). What *is* real and consistently confirmed on both sites is exactly **three** CSS transition durations — but they are **100/200/300ms**, not the 150/250/400ms already fixed in `1_spec/04-design-system-spec.md` §2. Every transition on both sites omits a timing function, so only **one** easing (the CSS default `ease`) is evidenced anywhere; no second curve exists in either site's CSS or inline scripts. A Lottie-driven nav-icon animation runs at 1.5s, a fourth duration point outside the three-tier proposal. | **Changes the values, confirms the shape.** "Three shared durations, inherited by both sites" is well supported — both sites already independently converge on the same three-tier system, down to matching which *category* of component gets which tier (modal-close-icon = fastest tier on both, primary CTA/menu = slowest tier on both). But "extracted from today's GSAP settings" cannot be verified — there are no visible GSAP settings to extract from — and the specific fixed numbers (150/250/400ms) don't match the real, live CSS (100/200/300ms) on either site. Recommend correcting the three fixed durations to the evidenced 100/200/300ms (or making a fresh, explicitly-flagged decision to round them up, which is a new choice, not an extraction), and either deliberately designing a second easing curve or dropping "two easings" to one pending that choice. |

## 9. Appendix: could not determine

| Item | Why not determinable from this evidence |
|---|---|
| GSAP `duration`/`ease` configuration values | No literal `gsap.*()`/`ScrollTrigger.*()`/`SplitText.*()` calls exist in any inline `<script>` on any of the 8 mirrored Anywhere pages (grepped for the call syntax on all 8). The custom scroll-linked attributes seen in markup (`text-scroll`, `fade-in`, `grid-scroll`, `line-scroll`) are real, but the code that binds them is not in any asset a static, JS-free `curl` can see — it is most likely compiled into Webflow's own runtime bundles (`webflow.586b9241.71e49d0e91d9e5cb.js` + three `webflow.schunk.*.js`, 300–560 KB each of generic, non-project-specific Webflow framework code — spot-checked one schunk and it was Webflow's stock tabs-component module, not site content) or resolved by a runtime call this mirror cannot make. Decompiling vendor-minified framework bundles was judged out of scope for "the mirror's inline scripts and CSS." |
| A second easing curve for `--ease-emphasized` | Zero occurrences of `cubic-bezier(...)` or any named easing keyword other than the implicit default appear in either site's CSS transitions, and no GSAP ease argument is visible (see above). Inventing a curve would violate "never guess a value." |
| `--color-georgetown-tint` / `--color-anywhere-tint` (DD-04, secondary door cue) | Neither live site currently has a two-door "choose your school" chooser — that component doesn't exist yet on either site. More importantly, the two schools do not currently have visually distinct color identities to draw a per-school tint from: both use the same gold/navy/blue palette (§3). There is no existing CSS to extract a per-school tint from; any value here would be invented, not extracted. |
| `--color-accent-contrast` exact value | The accent (`#e48b53`, gold) sits at a mid-range lightness where AA text-contrast depends on precise ratio math against whichever text color is layered on it. Confirming that crosses from token *extraction* (R1's job) into a contrast *audit* (T-072's job, `1_spec/04` §8) — flagging the handoff rather than asserting a number I haven't computed. |
| Whether Anywhere's `tighter`/`wide`/`wider` letter-spacing steps are a deliberate Georgetown removal or simple non-use | Webflow's CSS export only emits variables actually referenced by some rule on that site; their absence from `G:shared.css` is consistent with "Georgetown's current pages never use that step" and is equally consistent with "the Georgetown Variables panel never had it." Can't distinguish the two from static CSS alone. |
| Full inventory of Georgetown pages/components beyond the 3 fetched | Per the brief, only the homepage + `about-us` + `academics` + `programs` were fetched. A component that only appears on `/calendar`, `/contact`, `/resources`, or a resource-article page was not inspected. Nothing in the fetched pages suggested a fourth type family or a palette outside what's in `:root`, but this is not proof none exists elsewhere on the site. |
| Georgetown's broken `system--warning` chain | `G:shared.css` contains three variables whose names are literally `--_theme---background--warning\<deleted\|variable-...\>` etc. — Webflow's own serialization of a reference to a variable the site owner deleted from the Variables panel without repointing its aliases. The chain still resolves (eventually to `--brand--yellow-darker` = `#5e5515`, itself also marked deleted), so it doesn't break rendering, but it is not a clean, intentional token — noted here rather than folded into the merge tables as if it were a normal color choice. |

## Blocked

Nothing blocked full completion of this brief. All required fetches succeeded (Georgetown's homepage 301-redirected to `www.gt.school`, handled by following the redirect once — see §1); no page returned an error; no section of the brief was left without evidence or an explicit "could not determine" entry above.

---

## Draft tokens (`design-system/tokens.css`) — names from `1_spec/04-design-system-spec.md` §2, values only from sections 2–7 above

```css
:root {
  /* Type — families confirmed identical on both live sites (§2, DD-01) */
  --font-serif: Literata, Georgia, "Palatino Linotype", sans-serif; /* fallback stack merges both sites' */
  --font-sans: "Inter Tight", Arial, sans-serif; /* string picked from Georgetown's @font-face; Anywhere's own files must be repointed from "Intertight" */
  --font-mono: Inconsolata, Arial, sans-serif;

  /* Type scale — h1–h6 identical on both sites (§4); tiny..xlarge take Anywhere's ladder (§7 C2) */
  --text-xs: .75rem;    /* Anywhere "tiny" */
  --text-sm: .875rem;   /* Anywhere "small" = h6 = Georgetown "tiny" */
  --text-base: 1rem;    /* body, both sites */
  --text-md: 1.125rem;  /* Anywhere "medium" */
  --text-lg: 1.25rem;   /* Anywhere "large" = h5, both sites */
  --text-xl: 1.5rem;    /* Anywhere "xlarge" = h4, both sites */
  --text-2xl: 2rem;     /* = h3, both sites */
  --text-3xl: 3.25rem;  /* = h1, both sites (h2 = 3rem sits between 2xl and 3xl; both sites agree on this too) */

  --leading-tight: 1.15;  /* h1–h3 on both sites, confirmed identical computed value despite different alias names (§4) */
  --leading-body: 1.25;   /* Anywhere's live value; Georgetown computes 1.3 here — conflict C1, Anywhere kept per continuity */

  /* Color — raw swatches ~identical across sites (§3); role assignment merged per §7 C7–C11, C9 escalated */
  --color-bg: #fcf4ef;          /* Anywhere background--primary; C7 */
  --color-surface: #f8e8de;     /* Anywhere background--secondary; C8 */
  --color-surface-alt: #002a3a; /* Anywhere background--tertiary (dark) — UNRESOLVED, see C9: Georgetown's tertiary is light (#f8e8de). Escalate before using. */
  --color-text: #001117;        /* identical on both sites */
  --color-text-muted: #5b5b5b;  /* Georgetown's grey-dark — Anywhere has no true muted-grey text color (gap noted §3a) */
  --color-accent: #e48b53;      /* identical on both sites (Anywhere "gold" = Georgetown "orange") */
  --color-accent-contrast: #fbfbfb; /* both sites' CTA text color on navy/orange fills; AA ratio not verified — see appendix */
  --color-border: #cac6c4;      /* Anywhere border-color--primary; C10 */
  --color-focus: #004f71;       /* Anywhere's explicit brand--blue; Georgetown has no focus token at all (falls back to an unbranded Webflow default) — C11 */
  --color-georgetown-tint: /* NOT DETERMINABLE — no per-school color distinction exists on either live site today; see appendix */ ;
  --color-anywhere-tint: /* NOT DETERMINABLE — same reason */ ;

  /* Space — 4px-based, 12 non-zero steps; Anywhere's ladder used end to end (§5b, §7 C3) */
  --space-1: .125rem;  /* 2px */
  --space-2: .25rem;   /* 4px */
  --space-3: .5rem;    /* 8px */
  --space-4: 1rem;     /* 16px */
  --space-5: 1.5rem;   /* 24px */
  --space-6: 2rem;     /* 32px */
  --space-7: 3rem;     /* 48px */
  --space-8: 4rem;     /* 64px */
  --space-9: 5rem;     /* 80px */
  --space-10: 6rem;    /* 96px */
  --space-11: 8rem;    /* 128px */
  --space-12: 12rem;   /* 192px */

  /* Shape — matched by value, not by name, across both sites (§5c) */
  --radius-sm: .25rem;
  --radius-md: .5rem;
  --radius-lg: .75rem;   /* Anywhere alone also has a 4th step, 1rem, if a bigger radius is ever needed (C4) */

  /* Elevation — only one shadow recipe is confirmed shared verbatim on both sites (§5f) */
  --shadow-1: 1px 2px 14px #00000008; /* Anywhere .menu_wrap == Georgetown .mobile-menu_wrap, byte-identical */
  --shadow-2: 0 -2px 16px #0000000d;  /* Anywhere .section.home-intro; not confirmed on the 3 Georgetown pages fetched — verify before relying on it as "shared" */

  /* Layout */
  --container-max: 90rem;     /* 1440px — Georgetown's value, chosen because it matches this project's own 1440px verification width (C5), not Anywhere's 92rem/1472px */
  --container-narrow: 48rem;  /* 768px — identical on both sites, no conflict (C6) */

  /* Motion — real, extracted durations; NOTE these differ from the 150/250/400ms already fixed in 07-design-decisions.md MN-13 (§8) */
  --duration-fast: 100ms;   /* both sites: modal-close-icon, social-button, slider-dot */
  --duration-base: 200ms;   /* both sites: form controls, nav dropdowns, secondary buttons */
  --duration-slow: 300ms;   /* both sites: primary CTA / menu button / lightbox control */
  --ease-standard: ease;    /* the only easing observed anywhere on either site — no cubic-bezier or GSAP ease found */
  --ease-emphasized: ease;  /* NOT DETERMINABLE as a distinct curve — no second easing exists in either site's CSS or scripts; set equal to --ease-standard pending a deliberate new choice (see appendix) */
}
```
