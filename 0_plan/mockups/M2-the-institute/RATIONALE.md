# RATIONALE: M2 The Institute

## Direction

Lens order: L3 Mission ("MIT of K-8") &gt; L4 Elite/exclusive &gt; L1 Objective (routing) &gt; L2 Existing design system (`0_plan/05` §4). Hypothesis: proof of rigor is the brand — a parent who sees an academic-grid, hairline-ruled, mono-labelled page believes GT School is the most serious K-8 option they have seen, before any photograph or persuasive line does that work.

The first screen states the umbrella sentence as an editorial statement (large Literata, one restrained accent rule beneath it, nothing else colored), then presents a compact register of four structural facts in Inconsolata data labels — grades, admission bar, format, in-person time — before "Two ways to attend" and the two doors. No outcome figure appears anywhere on the page: per this mock's Fixed rule, only register-backed structural facts are shown, because no speed or SAT figure has cleared the claims register (Q-019, DD-07). The register is the M2 device that stands in for the proof strip's usual persuasive job: it reads as evidence of structure ("this school is precisely specified") rather than evidence of outcomes, which is the honest claim available today.

Risk accepted on purpose: DD-09 and the mock matrix both name "cold, adult, intimidating for the parent of a six-year-old" as M2's main risk. This build mitigates it with DD-16's institutional-and-warm copy voice (verbatim from `copy.md`, never rewritten toward jargon), full sentences instead of clipped spec-sheet fragments in every reading passage, and by using the mono/hairline device only for genuine data (labels, table headers, footnotes, step counters) — never for the actual reading prose (h1, door descriptions, comparison-cell content, proof-strip facts), which stays in Literata throughout.

## h1

The h1 is the umbrella sentence ("GT School is a selective school for gifted and talented children, in person at our Georgetown, Texas campus or online from anywhere.") — not the lockup. This mock's whole premise is "h1 ... as an editorial statement" (brief, M2 row): the sentence itself is the masthead, decoding GT and naming both ways to attend in the same breath it establishes the page's voice (DD-20, DD-33, REQ-021). The lockup is a smaller, uppercase, non-heading wordmark in the header, consistent with 1_spec/03 §5's "one h1 (the umbrella sentence or the lockup, decided per mock)."

## Decisions applied

| ID | How it is applied in this mock |
|---|---|
| DD-01 | Only Literata, Inter Tight and Inconsolata are used, loaded from `../shared/fonts.css`; no new typeface introduced |
| DD-02 | Light hero (`--color-bg`); no dark surface. `--color-navy`/`--color-surface-alt` are not used (the latter is explicitly flagged "escalate before using" in `tokens.css`) |
| DD-03 | Umbrella sentence, then the register, then the two doors — M2's own variant of "sentence then doors," with the register inserted between as the mock's distinguishing element (brief rule 8 permits this) |
| DD-04 | Applied with a documented change: label + icon per door, **no photo**. 1_spec/03 §10 lists M2's own asset dependency as "None beyond type" (unlike M1/M4, which depend on photography), and DD-04's Astra column already treats the photo as optional ("requiring a photo in every door creates an unnecessary asset dependency"). The redundant, non-color cue DD-04 asks for is delivered by label text + a decorative inline glyph instead of a photograph; the glyph itself is hidden below 768px to hold the 390px budget (rule 8) and reappears at 768px and up, where the label + full name + description already carry the cue on their own. See Assets below |
| DD-06 | Full 9-row attribute table, shared rows first (Same school/same academics through After 8th grade), tuition row reading "Tuition on request" for Georgetown per the resolved wording. Fix pass: below 768px the same table renders as stacked blocks (CSS `display:block` on `table`/`thead`/`tbody`/`tr`/`th`/`td`, `thead` visually clipped rather than removed, each `td` prefixed via `td::before{content:attr(data-label)}`) after a browser check found the GT Anywhere column clipped behind the table's old 512px (`32rem`) min-width inside an `overflow-x:auto` wrapper; the real `<table>`/`<caption>`/`scope` markup is unchanged, and the min-width now applies only at 768px and up |
| DD-07 | No outcome figure anywhere on the page — the proof strip carries only the four register-backed facts from `copy.md` §4, nothing else |
| DD-09 | This mock **is** the DD-09 experiment: evidence through structure (register, table, footnoted date) rather than an outcome number; mitigated per Direction above so it reads serious, not cold |
| DD-11 | Umbrella lockup only ("GT School," text wordmark); no competing school logos |
| DD-12 | Header carries only the lockup, "Current families," and "Contact admissions" — no other navigation |
| DD-13 | Phone number appears only in the footer; the header has no phone number |
| DD-14 | 390px designed first; doors stacked Georgetown then Anywhere; no sticky CTA bar |
| DD-16 | All reading copy is `copy.md` verbatim — institutional, warm, short sentences: nothing rewritten toward a colder register even though the layout is austere |
| DD-17 | No accreditation statement, no Cognia mark, anywhere on the page (grep-verified, see Self-check) |
| DD-19 | Type families and the merged palette are the only fixed envelope; layout/hierarchy/density are free, which is what M2 uses to justify leaning harder on Inconsolata for data roles (register, table headers, footnote, step counters) than a baseline page would — see Departures |
| DD-20 / DD-33 | Umbrella sentence spells out "gifted and talented" and names both ways to attend before any door appears |
| DD-21 | Doors are a real `<ul>` (`.doors`), 2-column CSS grid that wraps to additional rows for 3–5 entries; the visual is a two-panel split today, which the brief explicitly allows as long as the markup scales (rule 15) |
| DD-23 | "Not sure? Compare the two" anchor under the doors; doors repeated (compact, name + CTA) directly under the comparison table with `data-placement="after_comparison"` |
| DD-25 | Both `apply.gt.school` links carry `?school=georgetown` / `?school=anywhere` |
| DD-26 | Both doors share identical markup, sizing and visual weight; stable order Georgetown then Anywhere |
| DD-27 | "Georgetown Campus" and "GT Anywhere" used as the school names everywhere; Guides only, never Advisors as visible text |
| DD-29 | Every screen has at least one sourced fact: register, comparison table, proof strip, footnote date, steps — no display-type-only screen |
| DD-30 | No invented jargon; "mastery-based," "Guides," "TimeBack," "TEFA" appear exactly as `copy.md` states them |
| DD-36 | Body/reading copy stays in Literata throughout (not just headings); strict single-h1 heading tree; zero motion by default (see Motion spec) |
| MD-04 | Order is umbrella promise (h1) → two ways to attend (register + doors) → proof (proof strip, further down) — no figure pulled forward of the doors |
| MD-06 | 90th percentile stated plainly in the register and proof strip; no countdown, no manufactured urgency anywhere |
| MD-09 / MD-10 | Doors carry explicit "In person"/"Online" labels plus full school names (plus a distinct icon at 768px and up) — redundant, non-color cues against a wrong-school click at every breakpoint |
| MD-13 | Tuition and access stated for both schools in the same row, same visual weight: Georgetown "Tuition on request. Ask admissions," Anywhere "$10,400 a year" + TEFA sentence, verbatim |
| MD-16 | Every number on the page traces to a claims-register row or to `copy.md`'s own fixed text; none was invented for this mock (see Self-check) |
| MD-17 | Provenance line appears exactly once, small, italic, directly under the h1 |
| MD-25 | Selectivity (90th percentile, register + proof strip) and access (TEFA sentence, comparison table) both stated; no wealth cue in either copy or design (no photography of campus grounds, no material/price signaling) |
| REQ-011 / rule 8 | Above the two door CTAs on a 390×844 viewport: header, h1, accent rule, provenance line, and M2's own register — nothing else (verified, see Self-check) |
| REQ-017 | "Current families" in the header; general phone number only in the footer |
| REQ-018 | Full names used everywhere except inside the two places `copy.md` itself writes "Georgetown, Texas" as a place name or "Explore the Georgetown campus" as its literal CTA microcopy (verbatim, not mine to change) |
| REQ-021 | Umbrella sentence decodes "gifted and talented"; provenance line names the Alpha network once |
| REQ-022 | No number ships without a source; the register and proof strip carry only CR-011/CR-032/CR-033/CR-034/CR-035-backed or `copy.md`-fixed figures |
| REQ-070 | Zero `<form>` elements; both apply links carry the school parameter |
| REQ-074 | Landmarks, skip link, one h1, visible focus, table `caption`/`scope`, alt-free decorative icons (see Assets), tap targets ≥44px |

## Motion spec

Nothing animates on this page, including hover and focus states, which change color/background/underline **instantly** with no `transition` property at all. This is a stricter reading than "hover color change is fine" — it matches `0_plan/05` §6's per-mock motion stance table, which sets M2's motion stance to **Static**, and MN-08's removal of any mandatory signature animation ("Mocks differ through layout, hierarchy, density, imagery and copy... not through motion").

| What animates | Trigger | Duration token | Easing token | Reduced-motion behavior |
|---|---|---|---|---|
| Nothing | — | — (no `transition` declared in `styles.css` outside the reduced-motion block itself) | — | Identical — there is nothing to reduce. A defensive `@media (prefers-reduced-motion: reduce) { * { transition: none !important; } }` block is still present in case a future edit adds one |
| Hover/focus color, background, underline (CTAs, nav links, secondary CTAs) | `:hover` / `:focus-visible` | none | none | Identical (instant either way) |
| `:focus-visible` outline | Keyboard focus | none | none | Identical; outline color is `var(--color-focus)`, width/offset `var(--space-1)`/`var(--space-2)` |

The largest element on the page (the h1) never animates, and there is no hero image to worry about a paint order for (see Assets).

## Assets

**No photographs are used anywhere in the page body.** `1_spec/03` §10 lists M2's own asset dependency as "None beyond type" — unlike M1 and M4, which are built around specific photographs — and DD-04's Astra column already argues a photo cue is optional ("requiring a photo in every door creates an unnecessary asset dependency"). Photography is also the one thing the mock matrix names as M4's job ("mission through student work") and explicitly *not* M2's ("proof of rigor is the brand... reads MIT as evidence"); keeping M2 photograph-free is what makes it a genuinely distinct fifth direction rather than a monochrome M4. Practically, this also means none of the ASSETS.md findings relayed mid-build (avoid the two studio-look photos, avoid same-session pairs, sizing limits on the low-resolution originals) apply to this mock — it uses none of the twenty-five photographs in `img/`.

In place of a photo, each door carries:
- A small hand-drawn, line-only inline `<svg>` (not a file — no request, no asset dependency): a simple campus/building glyph for "In person," a simple globe glyph for "Online." Both use `stroke="currentColor"` so they inherit `--color-text-muted`, i.e., they carry no color of their own.
- `aria-hidden="true"` on both: each icon is redundant with the door's own visible label ("In person"/"Online") and heading ("Georgetown Campus"/"GT Anywhere"), so it conveys no information a screen-reader user would otherwise miss — this satisfies the intent of the "alt text on every image" rule without requiring alt text, since these are decorative vector markup, not `<img>` elements pointing at a file.

**Lockup**: rendered as a small-caps Inter Tight text wordmark ("GT School"), not `gt-school-logo-h.svg`. `copy.md` explicitly permits either ("use `img/gt-school-logo-h.svg` or a Literata wordmark"); a plain text wordmark keeps the header inside the restrained, no-extra-color system this mock is built on (the SVG logo carries `#e48b53`/`#002a3a` fills that would count as a second and third use of color beyond the one deliberate accent, see Departures). Still a placeholder pending Holly's brand element (Q-001), flagged below.

**Open Graph image**: `../shared/img/georgetown-campus.webp` appears once, only in `<meta property="og:image">` — required, fixed Head content per `copy.md`'s Head table, identical across all five mocks. It is metadata for social-preview cards, not a rendered image on the page, so it does not conflict with the no-photography direction above.

## Departures

None from DD-19's actual fixed envelope (type families, merged palette): `grep -c "#" styles.css` returns `0` — every color in the stylesheet is a `var(--color-*)` token, and only Literata, Inter Tight and Inconsolata are used, all three already loaded by `../shared/fonts.css`.

The following non-token literals exist in `styles.css` and are noted for transparency, though none is a DD-19 departure (DD-19 fixes only families and palette; it explicitly frees "layout, hierarchy, density, imagery, tone, motion"), and none is a design decision so much as a technical necessity:
- **1px hairline borders and the visually-hidden skip-link technique** (`width:1px; margin:-1px; clip:rect(0,0,0,0)`) are standard structural/accessibility idioms, not points on any spacing or sizing scale.
- **`48rem` / `90rem` breakpoints**: CSS media-query conditions cannot reference custom properties at all (a hard CSS-spec limitation, not a stylistic choice); these two figures were chosen to match `--container-narrow` and `--container-max` numerically so the breakpoints stay in sync with those tokens in spirit.
- **`ch`-based `max-width` values** (`26ch`/`22ch` on the h1, `42ch` on the footer facts block) set a readable measure; there is no "line-length" token in `tokens.css` to draw from, and this is squarely "density/hierarchy," which DD-19 frees.
- **SVG `viewBox`/`width`/`height` attributes** (`24`, `32`) are graphic-authoring coordinates for the two decorative icons described in Assets, the same category of literal that rule 13 itself requires for `<img>` width/height — not a color, font, space, radius, shadow or duration.
- **Tap-target sizing**: no element hardcodes `44px`. Every CTA and nav link reaches its ≥44px target by combining token line-height with token padding (worked example: `.cta` = `var(--space-4)` (16px) top/bottom padding + a 14px/1.25 text line ≈ 49–50px total), so the 44px accessibility floor is a consequence of token math, not a literal in the file.

The one deliberate, flagged departure is a compositional one, not a token one: **Inconsolata is used for more roles than the baseline system's own table** (`1_spec/04` §2 assigns it only to "data labels, footnote markers"; this mock also uses it for the comparison table's row and column headers and the step counters). DD-19 frees hierarchy/density per component, and this mock's entire premise is leaning harder into the mono/data device than the shared baseline does — so this is named here rather than silently done.

## Flagged slots

| Slot | Question | Default shipped |
|---|---|---|
| Lockup | Q-001 (Holly's brand element) | Text wordmark "GT School," Inter Tight small caps |
| Current families destination | Q-002 | Links to `community.gt.school` as `copy.md` states, unconfirmed |
| Application steps | Q-007 | Four generic steps, identical for both schools, exactly as `copy.md` §5 gives them |
| Comparison row content | Q-008 | Rows as `copy.md` §3 states them (site-copy sourced, not independently re-verified here) |
| Georgetown tuition wording | Q-011 | "Tuition on request. Ask admissions." (already Decided at G0.5; shipped as the interim wording until Nari supplies a figure) |
| After-8th-grade wording | Q-013 | "Families plan the path after 8th grade with admissions." |
| Intensives logistics | Q-017 | "Four intensive weekends a year in Georgetown" shown with no further travel/logistics detail |
| **Outcome/speed figure** | **Q-019** | **Withheld entirely.** No multiplier, no SAT figure, nowhere on the page — this is the mock's central, deliberate gap; the register shows structure (grades, admission bar, format, in-person time), never outcomes |
| TEFA window/owner/expiry | Q-021 | TEFA module shown with the fixed `copy.md` wording only; no date window, owner or expiry stated |
| **Accreditation status** | **Q-033** | **Withheld entirely.** No accreditation sentence, no Cognia mark, anywhere on the page or in the JSON-LD |
| Guides vs. Advisors | Q-035 | Already Decided (Guides); "advisor" appears only as the sanctioned `data-type="advisor"` attribute value, never as visible text |

## Parent questions

From `1_spec/01` §5 ("The parent-questions test"):

| # | Question | Answered on this page? | Where / one click to |
|---|---|---|---|
| 1 | What is GT School? | Yes | h1 umbrella sentence; register's "Format" and "Grades" facts |
| 2 | Who is it for? | Yes | Register "Admission: 90th percentile and above"; proof-strip fact 1 |
| 3 | In person or online, and where? | Yes | Doors: "In person"/"Online" labels + icon + full name + one line each; comparison "Where and how" row |
| 4 | What is the same and what differs? | Yes | Full 9-row comparison table at `#compare` |
| 5 | What does it cost, or where do I find out? | Partly | Comparison "Tuition and access" row states both; Georgetown is one click to admissions (`Talk to admissions` / header `Contact admissions`) rather than a number, per the still-open Q-011 |
| 6 | How do I apply and what are the steps? | Yes | "How to apply" section: four steps plus two direct `apply.gt.school?school=…` links |
| 7 | Is it accredited and what are the outcomes? | **No, by design** | Deliberately withheld (Q-019, Q-033; DD-07, DD-17). One click to the FAQ (`anywhere.gt.school/academics`) per `copy.md`'s own routing, though that page does not yet carry outcome or accreditation content either — this is the named trade-off of the M2 direction, not an oversight |
| 8 | How do I reach a human? | Yes | Header "Contact admissions"; secondary CTAs (Talk to admissions / Book a campus tour / Join a virtual info session); footer phone number |

Question 7 is the one this mock cannot fully answer, on purpose: M2's whole premise is that no unverified outcome claim ships, so "the register shows structure, not outcomes" is a stated limitation, not a gap to quietly fix.

## Self-check

All greps run from `0_plan/mockups/M2-the-institute/` against the final files.

| # | Rule | Command | Result |
|---|---|---|---|
| 1 | No forms | `grep -c "<form" index.html` | `0` |
| 2 | One script (JSON-LD only) | `grep -c "<script" index.html` | `1`, `type="application/ld+json"` |
| 3 | External hosts | `grep -oE 'https?://[a-zA-Z0-9.-]+' index.html \| sort -u` | `anywhere.gt.school`, `apply.gt.school`, `community.gt.school`, `gt.school`, `www.gt.school`, and `schema.org` (the JSON-LD `@context` string — inert vocabulary identifier, not a loaded resource) |
| 4 | No placeholder text | `grep -ncE "lorem\|TBD\|\[placeholder\]\|\bTODO\b" index.html` | `0` matches; page read start to end as a parent would |
| 5 | Only `copy.md`'s numbers | `grep -oE "[0-9]+" index.html` | Every visible-text digit traces to `copy.md`: `90th` (CR-011, ×3), `$10,400` (CR-021), `9 to noon` (CR-033), `2026-09-10` (footnote date), `8th` (grade range, footer + proof strip + comparison), `(512) 270-9481` (footer phone). All remaining matches are markup: `h1`/`h2`/`h3` tag-name digits, `<meta>` boilerplate, and the two decorative icons' `viewBox`/`stroke-width`/coordinate attributes. No speed figure, no SAT figure, no cohort size, no accreditation claim, no Cognia mark |
| 6 | Guides, not Advisors | `grep -n "advisor" index.html` / `grep -ci "guide" index.html` | `advisor` appears once, only as `data-type="advisor"` (sanctioned by rule 6); `Guide`/`Guides` appears 6 times as visible text |
| 7 | Full school names | `grep -n "Georgetown" \| grep -v "Georgetown Campus"` / `grep -n "Anywhere" \| grep -v "GT Anywhere"` | Zero bare "Anywhere." Every bare "Georgetown" is either `copy.md`'s own literal CTA text ("Explore the Georgetown campus") or a place-name use ("Georgetown, Texas", "in Georgetown") inside verbatim fixed copy — never a stand-in for the school's name |
| 8 | 390×844 first screen | Arithmetic model, not a screenshot (Playwright/browser tools are out of scope for this task) — every block's height computed from its actual token values (padding, font-size × line-height) and the real copy string lengths, with a deliberately wide 0.55×font-size average-character-width assumption so the estimate errs toward *overestimating* height | Header 64px + hero pad 16px + h1 (5 lines @ 20px/1.15) 115px + accent rule 10px + provenance 25.5px + register (2 rows) 155px + eyebrow 19px + both door cards (icons hidden below 768px, 3-line descriptions) + gap + margin 360px = **764.5px to the bottom of the second door's CTA, an 80px margin under the 844px ceiling**. This is why the door icon is hidden below 768px, the h1 dropped from `--text-xl` to `--text-lg` at mobile, the register's fourth fact was shortened to "GT Anywhere / Four in-person weekends a year," and every hero/door spacing token was pulled down one step (space-4→space-3, space-5→space-3, etc.) — all recorded above in Decisions applied (DD-04) and reflected in `styles.css` |
| 9 | Links + `data-event` exactly as `copy.md` | `grep -o 'data-event="[a-z_]*"' index.html \| sort \| uniq -c` | `compare_view`×1, `cta_apply_click`×2, `cta_secondary_click`×4, `door_click`×4, `families_click`×2, `outbound_school_site`×2, `tefa_module_view`×1 — 16 total, matching `copy.md` exactly, including `tefa_module_view`/`data-region-source` on the TEFA link itself (not its container), mirroring `compare_view`'s placement |
| 10 | Motion | `grep -n "transition" styles.css` | Only inside the `@media (prefers-reduced-motion: reduce)` block itself (`transition: none !important`); zero active transitions anywhere else, consistent with M2's Static motion stance |
| 11 | Accessibility | `<html lang="en">`; skip link present; `header`/`nav`(×2, distinctly labelled)/`main`/`footer` present; `grep -c "<h1"` → `1`; `:focus-visible` rules on every interactive class; table has `<caption>` + `scope="col"`/`scope="row"` on every header cell; below 768px `thead` is clipped (not `display:none`) so its column headers stay in the accessibility tree while sighted mobile readers get each `td`'s `data-label` prefix instead | Pass |
| 12 | Head | `<title>`, `<meta name="description">`, `<meta name="robots" content="noindex, nofollow">`, `<link rel="canonical">`, four `og:*` tags, one JSON-LD `EducationalOrganization` with two `subOrganization` entries — all present, all matching `copy.md`'s Head table exactly; no "Accredited," no multiplier, no SAT figure in the JSON-LD | Pass |
| 13 | Images | `grep -c "<img" index.html` → `0` (see Assets: this mock ships with zero photographs by direction, not by omission); combined `index.html` + `styles.css` = 25,577 bytes (~25 KB), far under the 1 MB budget | Pass |
| 14 | Tokens | `grep -c "#" styles.css` → `0` | Pass |
| 15 | Doors as a list | `grep -n 'class="doors'` | Two real `<ul class="doors...">` elements (first screen, after-comparison repeat); 2-column grid wraps for 3–5 entries |

## Rules I could not fully satisfy

None. Every rule in the brief's table passed its check as written above. The one genuine constraint this mock accepts rather than "satisfies" is parent question 7 (accreditation/outcomes) — that is not a rule violation, it is the deliberate content gap M2's own Fixed column names ("Only register-backed figures; no outcome figure exists yet"), documented above rather than hidden.
