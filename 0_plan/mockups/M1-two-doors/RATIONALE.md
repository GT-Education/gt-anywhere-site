# M1 Two Doors — rationale

| Field | Value |
|---|---|
| Folder | `0_plan/mockups/M1-two-doors/` |
| Task | T-042 (`1_spec/03-landing-page-spec.md` section 12) |
| Built by | Builder, Sonnet 5, one pass |
| Sources read | `0_plan/mockups/shared/BUILDER-BRIEF.md`, `0_plan/mockups/shared/copy.md` (post-correction, see Assets), `1_spec/03-landing-page-spec.md` (full), `1_spec/04-design-system-spec.md` (full), `0_plan/05-landing-mockups-plan.md` sections 3, 3b, 3c, 4, 9, `0_plan/16-g05-decision-record.md`, `0_plan/mockups/shared/tokens.css`, `0_plan/mockups/shared/fonts.css`, `0_plan/mockups/shared/ASSETS.md`, `1_spec/01-users-and-journeys.md` section 5, `0_plan/07-design-decisions.md` (DD/MD/MN/SE rows cited below) |

## Fix pass (after browser verification)

The build above was checked in a real browser at 390×844 and 1440×900 after the initial pass. Four findings came back, all addressed here; nothing else was changed.

| # | Finding | Fix | Files touched |
|---|---|---|---|
| 1 | Below 768px, the comparison table's horizontal-scroll wrapper cut the GT Anywhere column off and clipped cells mid-word; a parent on a phone will not scroll sideways to find it | Real `<table>` kept for `≥768px` and for screen readers at every width. Below 768px, `table`/`tbody`/`tr`/`th`/`td` switch to `display:block` (CSS only); `<thead>` is visually hidden with the standard clip technique (not `display:none`, so its column headers stay in the accessibility tree); every `<td>` carries a `data-label` attribute ("Georgetown Campus" / "GT Anywhere" / "Both schools") rendered before it by `td::before { content: attr(data-label) }` in Inter Tight small caps, muted-color tokens. The three rows whose Anywhere cell only ever said "Same" (`Same school, same academics`, `Admissions`, `After 8th grade`) now use `<td colspan="2">` at every width instead of repeating "Same," per the coordinator's note that shared rows may span as one cell throughout | `index.html` (tbody restructured with `data-label`/`colspan`), `styles.css` (new `@media (max-width: 767px)` block) |
| 2 | `/favicon.ico` 404'd, failing the zero-console-errors check | `<link rel="icon" href="data:,">` added to `<head>` | `index.html` |
| 3 | At 1440×900 the door photos rendered roughly 680px tall, pushing the school name, line and CTA of both doors past the 900px fold — a desktop visitor saw a headline and two photos with no visible choice | From 768px up, `.door-media` is capped at `aspect-ratio: 3 / 2; max-height: 300px` (the 390px layout is untouched — it already passed). The h1's `max-width` is no longer capped to `--container-narrow` from 768px up (now `--container-max`, i.e. the wrap's own width), so it wraps to about 3 lines instead of 5 at desktop and gives back roughly 120px of height. `object-position` on both door photos shifts to `50% 35%` at that breakpoint so faces stay in frame under the tighter crop | `styles.css` |
| 4 | Door CTAs read as plain underlined text, not the filled primary-button affordance both live sites use | `.door-cta` is now a filled button: `background: var(--color-navy)`, `color: var(--color-accent-contrast)` (≈14.6:1 contrast — computed by hand below; the alternative of orange fill with white text is ≈2.5:1 and fails AA even for large text). `min-height: 44px`, full width on mobile, auto-width and left-aligned from 768px up. Hover/focus swap the text to `--color-accent` (≈5.8:1 against the navy fill) with an underline appearing — still only a color-and-underline change on interaction, the navy fill itself never animates, the whole door card is still the one link, and the button is its visible affordance | `styles.css` |

Revised 1440×900 vertical budget for fix 3, added to the fold-fit math already in Self-check: header ≈58px + hero top padding 32px + h1 at 3 lines ≈179px + provenance ≈23px + doors margin 32px + door card (300px capped photo + ≈146px of label/name/line/CTA content) ≈446px ≈ **770px total**, leaving roughly 130px of margin under 900px. This is still a CSS-math estimate on my part, not a screenshot I took — the coordinator's own browser check is the first real render this mock has had, and I have not re-verified fix 3 or 4 in a browser myself (browser tools are out of scope for this build step; re-running the visual check is the coordinator's or a watchdog's job).

Contrast checked by hand (sRGB relative luminance, WCAG formula) since neither pairing has been measured in a browser: `--color-navy` `#002a3a` has luminance ≈0.0197; `--color-accent-contrast` `#fbfbfb` ≈0.965 → ratio ≈14.6:1 (passes AA and AAA). `--color-accent` `#e48b53` ≈0.356 against the same navy ≈0.0197 → ratio ≈5.83:1 (passes AA). `--color-accent` against `--color-accent-contrast` (the pairing the coordinator flagged as failing) ≈0.356 vs ≈0.965 → ratio ≈2.5:1 (fails AA at any text size).

`python3 0_plan/tools/check-mocks.py 0_plan/mockups/M1-two-doors --all` after this pass: **31 pass, 0 fail** — `check-mocks: OK`.

**Round 3 — brand continuity (real logos).** Johnny's standing instruction for every mock is to keep the sites' colors, fonts and logos; colors and fonts were already right via `tokens.css`/`fonts.css`, but M1's header still used a placeholder text wordmark and the footer's school links were plain text. Fixed: the header lockup now renders `gt-school-logo-h.svg` (native 139×32, displayed 36px tall, linked to `#top`); the footer's Georgetown and Anywhere links now render `gt-school-logo-h.svg` and `gt-anywhere-logo-h.svg` respectively (native 252×48 for the Anywhere mark, both displayed 24px tall), keeping the same `href`, `data-event="outbound_school_site"` and `data-school` attributes those links already carried, alt text naming the school each link goes to. No recoloring or filters were added — see Assets. Logos are not used anywhere else on the page (not on the OG image, not decoratively). A new checker rule, R16, now asserts both logo files are referenced in `index.html`.

`python3 0_plan/tools/check-mocks.py 0_plan/mockups/M1-two-doors --all` after this round: **32 pass, 0 fail** — `check-mocks: OK` (R16 passes; R13's "at most two eager images" needed `loading="lazy" decoding="async"` added to all three logo `<img>` tags, since only the two door photos count as first-screen eager images).

## Round 4 — E2 fix-decisions pass (T-050, `0_plan/ensemble/E2-fix-decisions.md`)

Every fix that decision log marked "Apply" for M1 (all the shared items, plus the two M1-specific findings) is made in this pass. Nothing below touched a file this build doesn't own (`index.html`, `styles.css`, `RATIONALE.md`).

| # | Fix | What changed | File(s) |
|---|---|---|---|
| 1 (shared) | Comparison rows: same-then-different, in `copy.md`'s new order | `<tbody>` reordered: Same school, Admissions, After 8th grade, then The day, Where and how, Peers and community, In-person time, Guides, Tuition and access. Cell content is untouched — only the row sequence changed | `index.html` |
| 2 (shared) | Footer "Apply" scoped by school | The single unscoped `apply.gt.school` link (E2 finding 14, checker rule R17) replaced by two: "Apply: Georgetown Campus" (`?school=georgetown`) and "Apply: GT Anywhere" (`?school=anywhere`), both carrying `data-event="cta_apply_click"` and `data-placement="footer"`, matching the steps-section links' event shape | `index.html` |
| 3 (shared) | Provenance line, once | Removed from the footer facts block (E2 finding 16, checker rule R18); the h1's own copy is now the only occurrence on the page | `index.html` |
| 4 (shared) | Secondary CTA labels | "Book a campus tour" → "Ask about a campus tour"; "Join a virtual info session" → "Ask about a virtual info session", now also to `/contact` (was the Anywhere homepage) — labels now match their destinations (E2 finding 15). `data-type` unchanged | `index.html`, and the "Flagged slots" table below |
| 5 (shared) | Sources line | Added verbatim (`copy.md` section 4) under the proof-strip facts, replacing the old non-verbatim "Facts as published..." footnote, and again directly under the comparison table, before the repeated doors | `index.html` |
| 6 (shared) | Motion: transitions may name only `transform`/`opacity`; color and border-color instant | Both `transition: color ...` declarations (on the base `a` rule and on `.door-cta`) removed outright — neither was animating `transform` or `opacity`, so there was nothing to narrow them to. See "Motion spec" below | `styles.css` |
| 7 (shared) | 44×44 targets, padding on the anchor itself | Added `display:inline-flex; align-items:center; justify-content:center; min-height:44px; min-width:44px; padding-inline:var(--space-2)` to: the header utility-nav links, the footer-nav links (including the two logo links, which inherit it through the shared `.footer-nav a` selector), the two "Begin application" links, the four secondary CTAs, and the compare anchor. `flex-wrap: wrap` added to `.utility-nav` as a safety net — the two header links now carry real padding, and I could not verify in a browser that they still fit one row at 390px alongside the logo. **Extended after coordinator follow-up** to the remaining interactive targets the first pass left out: the header lockup link, the two repeated "Explore" links after the comparison table, the TEFA "Check eligibility" link, and "Go to the family hub" | `styles.css` |
| 8 (shared) | Footer logo panels | The GT Anywhere mark now sits on a `var(--color-navy)` panel; the GT School mark sits on a `var(--color-bg)` panel with a `1px solid var(--color-border)` edge (needed since that panel would otherwise be the same color as the footer itself and read as no panel at all). Both selected off the links' existing `data-school` attribute — no new markup, classes or recoloring of either SVG | `styles.css` |
| 9 (shared) | Figures tagged to the claims register | New "Figures" section added below, with one flagged discrepancy against this task's own instruction — see that section | `RATIONALE.md` |
| 10 (M1) | Compare anchor inside 844px at 390 wide | See the calculation immediately below | `styles.css` |
| 11 (M1) | Mobile caption squeeze | `caption { display: block; width: 100%; }` added inside the existing `@media (max-width: 767px)` table block. The caption had no override there before — it kept its default `display: table-caption` sizing inside a table whose other parts had switched to `display: block`, which is what squeezed it | `styles.css` |

**Fix 10, the 390×844 fit.** Before this pass, the coordinator's browser measured the second door card ending at **816px** (`shared/screenshots/QA-2026-09-10.md`), putting the compare-anchor's plain text at roughly 816+32(`--space-6` margin-top)=**848px** — matching E2 finding 6. Two things in this same pass make that worse before fix 10 makes it better, and neither is browser-verified (out of scope for this task):

- Fix 7 makes the header's two utility-nav links 44px tall — taller than the 36px logo that previously set the header row's height — an estimated **+8px** to everything below the header, including the doors and the compare anchor.
- Fix 7 also makes the compare-anchor's own link a 44px-tall box. The sentence itself ("Not sure which is right for your family? Compare the two.") wraps to two lines at 390px width (roughly 35px of text at this font size, comfortably under the 44px floor), so 44px is what governs its height either way.

Fix 10 trims three mobile-only margins to compensate, added as a `@media (max-width: 767px)` block placed *after* both existing `.hero` declarations. It has to sit there: `.hero`'s padding is declared twice in this file at identical specificity (once near the top, once again in "Sections, alternating surfaces"), and a media-query block sitting between those two plain declarations loses the cascade to whichever one is textually later — a real bug I hit and fixed while building this, not a hypothetical one.

| Property | Desktop (≥768px, unchanged) | Mobile (<768px, this pass) | Saves |
|---|---|---|---|
| `.hero` padding-top | `--space-6` (32px) | `--space-4` (16px) | 16px |
| `.doors` margin-top | `--space-6` (32px) | `--space-3` (8px) | 24px |
| `.compare-anchor` margin-top | `--space-6` (32px) | `--space-3` (8px) | (its own gap, below) |

Net: new door-2 bottom ≈ 816 + 8 (header growth) − 16 (hero) − 24 (doors) = **784px**. New compare-anchor top ≈ 784 + 8 (its own trimmed margin) = 792px. New compare-anchor bottom ≈ 792 + 44 (its own min-height) = **836px** — inside 844px with an estimated 8px to spare, and both door cards comfortably visible with room now to spare too (784px, versus the 816px that already passed before this pass). This is CSS math run against one real measurement, not a new screenshot — browser tools were out of scope for this task. A real browser re-check (390×844: both door CTAs and the whole compare-anchor target visible, no horizontal scroll) is still owed before this direction goes past a mock.

## Direction

Lens order **L1 objective > L2 existing system > L4 elite > L3 mission** (`1_spec/03` section 10; `0_plan/05` section 4). Hypothesis: the fastest correct choice wins — a parent who already knows "in person" or "online" should be able to click the right door before reading anything else.

The first screen is built to give L1 nothing to get in its way: header, one umbrella sentence, one small provenance line, then the two doors — full stop. No decision helper (deferred to Phase 2 per `1_spec/03` section 2, DD-24 revised after R3), no proof figure, no mono data grid. Every word above the doors either orients ("GT School... in person... or online") or reassures ("The gifted school in the Alpha School network"). L2 shows up as restraint: the existing warm palette (`--color-bg`, `--color-surface`, `--color-accent`) and the two existing typefaces (Literata, Inter Tight) exactly as `tokens.css` defines them, no new surface, no dark variant. L4 shows up only as quiet confidence — plain "Admissions" language in the steps section, no urgency, no wealth cues (DD-10). L3 is present but last and understated: the comparison table's "mastery-based" and "MAP assessments" language, not a manifesto.

## h1

The **umbrella sentence** is the `<h1>` ("GT School is a selective school for gifted and talented children, in person at our Georgetown, Texas campus or online from anywhere."), not the lockup. The lockup is the real GT School logo image, linked but not a heading — per `1_spec/03` section 5 ("one `h1`: the umbrella sentence or the lockup, decided per mock"), M1's speed-first direction puts the decodable, orienting sentence in the one h1 slot rather than the brand name, since REQ-021 (decode "GT") and REQ-012 (ten-second correct choice) are the requirements M1 is built to satisfy first.

## Decisions applied

| Id | Decision | How applied in M1 |
|---|---|---|
| DD-01 | Typography pairing | Literata (serif, body/headings) + Inter Tight (sans, labels/nav/CTAs) from `tokens.css`; Inconsolata not used (see Departures) |
| DD-02 | Palette and hero tone | Light hero, existing palette only. `--color-navy` (a token flagged in `tokens.css` as "a brand extension") is used in the fix pass below, but only as a small, contained CTA-button fill, never as a hero or section-level dark surface |
| DD-03 | Hero structure | (a): one umbrella sentence, then two doors |
| DD-04 | In-person vs. virtual cue system | Label ("In person" / "Online") + inline SVG icon (pin / signal, `aria-hidden`) + photo, all three present per door, color used only as a secondary tint behind each card (`--color-georgetown-tint`, `--color-anywhere-tint`) |
| DD-05 | CTA labels and placement | Exact copy.md CTA strings, repeated after the comparison with `data-placement="after_comparison"` |
| DD-06 | Comparison block format | Real `<table>`, shared-then-different row order exactly as `copy.md` section 3 |
| DD-08 | Imagery policy | Existing site photographs only (see Assets); no stock |
| DD-10 | Exclusivity cues and limits | "Admissions" language in section 5; no countdowns, no wealth cues, no scarcity device |
| DD-11 | Brand lockup | The real `gt-school-logo-h.svg` (fix pass; originally a text wordmark). Holly's unifying element across the whole estate is still pending (Q-001) and may be added later — the logo itself is real, not a placeholder |
| DD-12 | Navigation on the landing | Minimal header: lockup, "Current families", "Contact admissions"; no menu |
| DD-13 | Current-families route placement | Header utility link + footer link; general phone number only in the footer, never above the fold |
| DD-14 | Mobile pattern | 390px designed first (see Self-check); doors stacked Georgetown then Anywhere; no sticky CTA bar |
| DD-17 | Trust signals | No Cognia mark, no accreditation claim anywhere (G0.5 decision 3); admissions contact and Georgetown, Texas location in the footer |
| DD-19 | Style envelope | Type families and merged palette fixed; only the layout/density/imagery choices below are free; every raw (non-token) value is listed in Departures |
| DD-20 | Orientation before choice | One umbrella sentence sits above both doors |
| DD-21 | Scalable choice component | The doors are a real `<ul>` on a CSS grid (`repeat(auto-fit, minmax(300px, 1fr))`) that already accepts 3–5 entries without a markup change; the visual is a two-panel split today because there are two schools today |
| DD-22 | Content allocation | Only what is true of both schools, the differences, and the routes; nothing previews a school site's own content in depth |
| DD-23 | CTA repetition and reassurance | Doors at the top, a "Not sure? Compare the two" anchor, doors repeated (as text links) after the table |
| DD-25 | Direct-to-application | "Begin application" links per school with `?school=` in the steps section |
| DD-26 | Visual parity between doors | Identical card markup, sizing and treatment for both doors; stable order (Georgetown, then Anywhere), no geographic reordering in v1 |
| DD-27 | Nomenclature and marks | "Georgetown Campus" and "GT Anywhere" exactly; Guides, never Advisors, as page copy |
| DD-29 | Type scale and density | Every section carries at least one real fact; no empty decorative whitespace-only section |
| DD-30 | Jargon policy | "TimeBack learning platform," "MAP assessments," "TEFA" all appear with plain-language context around them, per `copy.md`'s own wording (not reworded) |
| DD-31 | Asset dependency declaration | See Assets below |
| DD-32 | Current families as support intent | Header link + footer link, both to `community.gt.school` |
| DD-33 | Decoding "GT" | The h1 spells out "gifted and talented" |
| DD-36 | Twice-exceptional readability | Body copy in Literata; heading hierarchy is strict (one h1, ordered h2s, no skipped levels); reduced motion removes all transitions |
| MD-01 | Primary conversion goal | Route only, plus the per-door "Begin application" link; no lead form anywhere (rule 1) |
| MD-02 | Secondary CTA | FAQ, "Talk to admissions," campus tour, virtual info session — all four present in "More ways to connect" |
| MD-04 | Value-proposition hierarchy | Umbrella promise → two doors → comparison → proof strip, in that order |
| MD-06 | True exclusivity signals | Admissions bar stated plainly ("90th percentile and above"); no countdowns or fake scarcity |
| MD-10 | Wrong-school prevention | Explicit "in person... Georgetown, Texas" / "online... from wherever you live" wording on every door instance |
| MD-11 | Contact strategy | Admissions contact in header nav; phone only in the footer |
| MD-13 | Tuition disclosure | Both schools stated the same way in the comparison table: Georgetown "Tuition on request," Anywhere "$10,400 a year... TEFA voucher" |
| MD-17 | Alpha affiliation prominence | One line, once, small, under the h1 |
| MD-25 | Access messaging vs. exclusivity | Admissions bar and TEFA module both present on the same page |
| MD-26 | The TEFA module | Shown to everyone (D-015 option c), inside the comparison section, exact `copy.md` wording |
| MN-01–MN-15 | Motion | See Motion spec below |
| SE-13 | Preview/staging indexation | `<meta name="robots" content="noindex, nofollow">` present |
| AN-04 | Event taxonomy | Every interactive element carries the `data-event` (and `data-school`/`data-placement`/`data-type`/`data-region-source`) attributes from `1_spec/03` section 7, ready for GTM wiring in S5 |

## Motion spec

**Revised by Round 4 (E2 fix decision 4).** The project's motion budget (`0_plan/mockups/shared/copy.md`, "Motion") now permits a `transition` to name only `transform` and `opacity`; color and border-color state changes must be instant. M1's only two `transition` declarations both named `color` (the base `a` rule's hover/focus color, and `.door-cta`'s hover/focus text-color swap) — neither was ever animating `transform` or `opacity`, so there was nothing to narrow them to, and both are removed outright. `styles.css` now carries exactly one `transition` property anywhere in the file: `transition: none !important` inside the `prefers-reduced-motion` block itself.

| What changes | Trigger | Behavior |
|---|---|---|
| Link text color and underline (header nav, footer nav, compare anchor, TEFA link, apply links, secondary CTAs, current-families link, repeated after-comparison doors) | Hover, focus-visible | Instant — no `transition` property on any of these rules |
| Door CTA button text color, `--color-accent-contrast` → `--color-accent` (the navy fill itself is static, never animated) | Hover, focus-visible on the whole door card | Instant — no `transition` property |
| Underline appears/disappears on the same links | Hover, focus-visible | Instant, toggled alongside the color change |

Nothing else changes. The door cards themselves are static (no lift, no scale, no shadow change) on hover; only the small CTA text line changes color, instantly. The skip link's on-focus reveal is an instant `top` jump with **no transition property at all** (unchanged from the original build), so it never needed a reduced-motion override. The h1 and the two door photographs — the candidate LCP elements — carry no transition, transform or animation of any kind, at rest or on hover. The reduced-motion block (`*, *::before, *::after { transition: none !important; }`) already covered pseudo-elements before this pass — E2 finding 3 (the missing `::after` override) was an M4 defect, never present here — so it needed no change.

## Assets

**Mid-build correction applied.** The coordinator flagged, while this mock was being built, that `copy.md`'s original cue-set row (`anywhere-student-home.webp` for the Anywhere door) named a studio-isolated, posed photo that reads as stock, and that `ASSETS.md` (written after the brief) confirms this. Neither file had been written yet when the correction arrived, so no swap was needed — the images below are the corrected choices from the start.

| Slot | File | Source | Alt text used | Consent | Fallback |
|---|---|---|---|---|---|
| Georgetown door photo | `georgetown-science.webp` (1440×1208) | Mirrored `www.gt.school` assets (Webflow CDN) | "Students in lab coats run a science experiment with two Guides at the Georgetown Campus" | Published by GT on its own site; consent to be confirmed by Nari (AD-11) | If rejected: drop the photo, keep label + icon + name + line + CTA on the existing `--color-georgetown-tint` panel — no layout change needed since the icon and label already carry the place cue |
| Anywhere door photo | `anywhere-austin-intensives.webp` (1080×1163) | Mirrored `anywhere.gt.school` assets | "A GT Anywhere student speaks into a microphone beside a classmate during an in-person intensives weekend" | Published by GT on its own site; consent to be confirmed by Nari (AD-11) | If rejected: same fallback, on `--color-anywhere-tint` |
| Open Graph image (not shown on-page) | `georgetown-campus.webp` | Mirrored `www.gt.school` assets | n/a (meta only) | Fixed by `copy.md`'s Head table; not evaluated further since it is not a door cue | n/a |
| Header lockup | `gt-school-logo-h.svg` (native 139×32, rendered 36px tall, width auto) | Mirrored `www.gt.school` assets | "GT School" | Logo file, not a photo; no consent question | n/a — real logo, no fallback needed |
| Footer, Georgetown link | `gt-school-logo-h.svg` (native 139×32, rendered 24px tall) | Same file as the header mark | "Georgetown Campus" (names the link's destination, not the file) | Logo file | n/a |
| Footer, Anywhere link | `gt-anywhere-logo-h.svg` (native 252×48, rendered 24px tall) | Mirrored `anywhere.gt.school` assets | "GT Anywhere" | Logo file | n/a |

Neither chosen photo appears in `ASSETS.md`'s "avoid" list or its repeated-coverage clusters (the ribbon-cutting pair, the one-classroom-session cluster of four, or the `anywhere-academics-left`/`georgetown-support` pair), and both are on `ASSETS.md`'s own short list of "strongest hero candidates." One honest note: `anywhere-austin-intensives.webp` documents an **in-person** intensives weekend, not remote/at-home learning — it is GT Anywhere's own mandated cue photo per the corrected `copy.md`, and it is truthfully alt-texted as an intensives moment rather than mislabeled as "at home." The "Online" distinction is carried by the label, the icon and the door's own line text ("Live mastery academics... from wherever you live"), not by the photo alone — consistent with DD-04's Astra note that a photo alone is an ambiguous/insufficient cue and label+icon should be the primary signal.

Icons (in-person pin, online signal) are original inline SVG line-drawings, not photographs or a third-party icon font — no stock, no external request, `currentColor` fill so they track the text tokens, `aria-hidden="true"` since the adjacent visible label text already names the cue.

**Brand-continuity fix.** The header originally shipped a plain Literata text wordmark (flagged as a Q-001 placeholder below) and the footer's Georgetown/Anywhere links were plain text. Per Johnny's brand-continuity instruction — colors and fonts were already right via `tokens.css`/`fonts.css`, but the real logos were not in use anywhere — the header lockup and the two footer school links now render the actual `gt-school-logo-h.svg` and `gt-anywhere-logo-h.svg` files as `<img>` elements (native viewBox dimensions as the HTML `width`/`height` for correct aspect ratio and zero layout shift; CSS sets the displayed height and lets width scale automatically). Referencing them via `<img src="...svg">` rather than inline `<svg>` means their internal fills cannot be recolored by page CSS at all — no filter or color override was added, satisfying "no recoloring or filters" by construction, not just by omission. All three instances carry `loading="lazy" decoding="async"`, since only the two door photos are the checker's recognized first-screen eager images. Logos are not used anywhere else on the page.

## Figures

Every number visible on this page, tagged to its `0_plan/12-claims-register.md` row (E2 finding 13; T-050 decision 13). None of these rows are `Approved` — the register's own status vocabulary is `Unverified` / `Approved` / `Retired` / `Superseded` — so none of these figures may reach production until Nari confirms them (T-053, REQ-022); `check-mocks.py`'s numeric whitelist is a syntax gate against invented numbers, not evidence of approval, and neither is this table.

| Figure on the page | Where on this page | Register id | Register status |
|---|---|---|---|
| 90th percentile | Proof strip; comparison "Admissions" row; "How to apply" line | CR-011 | Unverified |
| $10,400 | Comparison "Tuition and access" row (GT Anywhere) | CR-021 | Unverified |
| Four (in-person) weekends | Comparison "In-person time" row (GT Anywhere); door 2 line | CR-032 | Unverified, public |
| 9 to noon / about two hours | Comparison "The day" row (Georgetown) | CR-033 | Unverified, public |
| Two to three hours | Comparison "The day" row (GT Anywhere) | CR-034 | Unverified, public |
| Weekly check-in | Comparison "Guides" row (GT Anywhere); proof strip ("check in every week") | CR-035 | Unverified, public |

**Flagged discrepancy.** The instruction that assigned this fix pass described all six rows as status "Unverified, public." The register itself (`0_plan/12-claims-register.md:33` for CR-011, `:43` for CR-021) gives CR-011 and CR-021 the plain status `Unverified`, with no ", public" qualifier — only CR-032 through CR-035 carry that longer text. The table above reproduces each row's actual register status rather than the shorthand, since the register is this project's named source of truth for figures (`0_plan/SOURCES.md`, SRC-013) and "don't guess, check the source" applies here as much as anywhere else. Flagging it rather than silently normalizing it.

## Departures

No color, font, spacing, radius, shadow or motion-duration value in `styles.css` falls outside `tokens.css` (`grep -c "#" styles.css` is 0; every `--duration`/`--ease` reference matches a token name). Two categories of raw value remain, both because `tokens.css` defines nothing for them, not as a substitution for an available token:

| Raw value | Where | Why |
|---|---|---|
| `768px` in two `@media (min-width: 768px)` queries | Mobile→desktop switch for the doors grid, h1 size, door photo/name/line sizing, facts grid | CSS cannot reference a custom property inside a media-feature value; `768px` is not an invented breakpoint — it is `1_spec/03` section 4's own "768px: doors side by side" checkpoint and equals `--container-narrow`'s value (48rem) |
| `1px`/`2px` border and outline widths; `1.5` SVG `stroke-width`; small `letter-spacing` values (`0.04em`/`0.06em`) on the uppercase door label and TEFA heading; `font-weight: 500` as the base heading weight and `600` on emphasis text (lockup, door name, door CTA, table headers) | Focus outline, skip-link border, table hairlines, door-label tracking, icon strokes, all headings and emphasis text | `tokens.css` has no border-width, stroke-width, letter-spacing or font-weight tokens to reference; these are the smallest reasonable values for their job, not a style choice made in place of an available token |
| `44px` on `min-height`/`min-width` (Round 4, rule 7) | Header utility-nav links (incl. the lockup), footer-nav links (incl. the two logo links), the two "Begin application" links, the four secondary CTAs, the compare anchor, the two repeated "Explore" links, the TEFA "Check eligibility" link, "Go to the family hub" | `tokens.css`'s `--space-*` scale has no 44px step (`--space-6` is 32px, `--space-7` is 48px); 44px is this project's own tap-target minimum (`1_spec/03-landing-page-spec.md` section 4, REQ-015), not a value chosen over an available token |

Neither is a departure from the *style envelope* (DD-19) in the sense that rule needs flagged for G1 — no new color, typeface or dark surface was introduced. `--color-surface-alt` (tokens.css's own comment: "UNRESOLVED... escalate before using") was deliberately **not** used anywhere in M1; the footer uses `--color-surface` instead.

**Superseded by the fix pass below.** The first build shipped the comparison table as a horizontally-scrolling three-column `<table>` at every width, reasoning that `1_spec/03` section 4's "two-column table with sticky school headers" wasn't specified precisely enough to build without guessing. The coordinator's browser check found the real problem with that call: on a phone, the wrapper cut the GT Anywhere column off entirely and clipped cells mid-word, and a parent will not scroll sideways to find it. Below 768px the table now renders as CSS-only stacked blocks (`display:block` on `table`/`tbody`/`tr`/`th`/`td`, `<thead>` visually hidden by clipping rather than `display:none`, each `<td>` prefixed by a `data-label`-driven `::before`), with the real `<table>` kept intact for `≥768px` and for screen readers at every width. `position: sticky; left: 0` on the row-header column now only matters at `≥768px`, where the real table can still be reached with a very narrow viewport before the design's own 768px breakpoint takes over.

## Flagged slots

| Slot | Q id | What ships | Default shown |
|---|---|---|---|
| Lockup | Q-001 | The real `gt-school-logo-h.svg` logo (not a placeholder). What remains open under Q-001 is Holly's *unifying* brand element across the wider estate, which may be layered on later — the mark itself is the actual GT School logo, unmodified | `gt-school-logo-h.svg`, linked to `#top` |
| Lockup destination | — | `copy.md` names the destination "`/` of the mock." A mock has no real second route, so this is built as `#top` (an in-page anchor), which rule 9 explicitly allows | `#top` |
| Current families link | Q-002 | `https://community.gt.school`, unconfirmed | Shown as final copy, no visible "(confirm)" text on the page |
| Application steps | Q-007 | Four generic steps, identical for both schools | As given in `copy.md` |
| Comparison "in-person time" logistics | Q-017 | "Four intensive weekends a year in Georgetown," no further logistics | As given in `copy.md` |
| Proof figure | Q-019 | No figure of any kind on the page; the proof strip carries four register-backed facts instead | Withheld per G0.5 decision 2 |
| Accreditation | Q-033 | No accreditation statement or mark anywhere on the page | Withheld per G0.5 decision 3 |
| TEFA window/owner/expiry | Q-021 | Module shown to everyone with the fixed wording from `copy.md`; no date window stated | As given in `copy.md` |
| "Talk to admissions" HubSpot link | MD-02 | Points to `https://www.gt.school/contact`, not a direct meeting scheduler | As given in `copy.md` |
| "Ask about a campus tour" (Round 4: was "Book a campus tour") | REQ-002 | Points to `/contact`, since gt.school's own `/book-a-tour` 404s; the label was softened to match the destination rather than promise a direct booking flow (E2 finding 15) | As given in the revised `copy.md` |
| "Ask about a virtual info session" (Round 4: was "Join a virtual info session") | — | Now also points to `/contact` (previously the Anywhere homepage); no dedicated session-registration link exists yet, so the label was changed to match rather than over-promise (E2 finding 15) | As given in the revised `copy.md` |

Two section headings are original, not from `copy.md`: "Compare the two" (h2 over the table — reuses the anchor sentence's own closing words) and "More ways to connect" (h2 over the secondary CTAs, which `copy.md` never titles). Both are plain wayfinding labels, carry no claim or figure, and are called out here for transparency rather than presented as sourced copy.

## Parent questions (`0_plan/05-landing-mockups-plan.md` section 6c)

**Replaced in Round 4.** This section previously used an eight-question table built from `1_spec/01-users-and-journeys.md` section 5. E2 (`0_plan/ensemble/E2-mocks.md` section C) scored every mock against the fourteen-id table in `0_plan/05-landing-mockups-plan.md` section 6c instead, noting that mocks built before that table existed were still using the older eight; this replaces it with the required fourteen.

| PQ | Question | Answered | Where |
|---|---|---|---|
| PQ-01 | What is GT School? | page | The h1 |
| PQ-02 | Is it for my child? | page | H1 ("gifted and talented children"); the 90th percentile bar in the proof strip, the comparison "Admissions" row, and the "How to apply" line |
| PQ-03 | In person or online: what are my options? | page | The two doors: explicit label, place name and one-line description each |
| PQ-04 | Where is the campus? | page | The h1 ("Georgetown, Texas campus") and door 1; comparison "Where and how" row |
| PQ-05 | What does a day look like? | page | Comparison "The day" row |
| PQ-06 | What does it cost, and can TEFA help? | page | Comparison "Tuition and access" row; the TEFA module |
| PQ-07 | How do I apply? | page | "How to apply" section, plus direct `apply.gt.school?school=` links |
| PQ-08 | Who teaches my child? | page | Comparison "Guides" row; proof strip ("Guides, not lecturers") |
| PQ-09 | How much in-person time does GT Anywhere have? | page | Comparison "In-person time" row |
| PQ-10 | What results does the school get, and is it accredited? | silent | Silent by G0.5 decisions 2 and 3; admissions answers it |
| PQ-11 | What happens after 8th grade? | deferred | Deferred to admissions |
| PQ-12 | I am a current family, where do I go? | page | Header "Current families" link; the "Current families" section |
| PQ-13 | I am not ready to apply, what can I do? | page | "More ways to connect" section |
| PQ-14 | Is GT School part of Alpha School? | page | The provenance line under the h1 |

PQ-10 is silent by design, not by omission: G0.5 items 2 and 3 withhold both an outcomes figure and any accreditation claim from every new surface until Q-019/Q-033 close, and M1 has no proof page to defer to yet (REQ-043 is not built). Admissions is the honest next step for a parent who asks directly — the closest one-click destination on the page today, "Read the FAQ" (`anywhere.gt.school/academics`), does not itself address accreditation, so this row does not claim it does. PQ-11 defers the same way, through the comparison table's "After 8th grade" row and Q-013, not through a page section of its own.

## Self-check

| Rule | Grep / method | Result |
|---|---|---|
| 1. No form/input/submit | `grep -c "<form" index.html` | `0` |
| 2. Exactly one script (JSON-LD) | `grep -c "<script" index.html` | `1`, at the JSON-LD block |
| 3. No external requests beyond `../shared/*` and `/assets` fonts | `grep -noE 'http[^"'"'"' ]*' index.html` | Every match is `https://gt.school`, `https://www.gt.school/...`, `https://anywhere.gt.school/...`, `https://apply.gt.school/...`, `https://community.gt.school`, or the JSON-LD's `"@context":"https://schema.org"` string (not a request) |
| 4. No lorem/TBD/placeholder text | Read as a parent; grepped for "lorem/TBD/placeholder/[...]" | Clean. The one regex hit was the JSON-LD's own `["https://...","https://..."]` array syntax, not bracketed placeholder text |
| 5. Only the approved numbers | `grep -oE "[0-9]+" index.html` | Every digit group is one of: (a) an approved figure from `copy.md` — 90 (×3: proof strip, comparison, steps line), 10/400 ($10,400), 9 (9 to noon); (b) copy.md's own fixed footer/footnote text — 512/270/9481 (phone), 2026/09/10 (checked-date); (c) the structural "8th" grade reference (K–8), appearing exactly where `copy.md`'s facts block and proof strip already place it, verbatim; or (d) pure markup — image `width`/`height` attributes (1440/1208/1080/1163), SVG `viewBox`/path/circle coordinates, and `utf-8`. No speed figure, no SAT figure, no cohort size, no accreditation number appears anywhere |
| 6. "Guides," never "advisor" as page text | `grep -n -i "advisor" index.html` | One match: `data-type="advisor"`, the attribute value the brief explicitly allows. Visible text reads "Talk to admissions" |
| 7. Full school names | `grep -n "Georgetown\|Anywhere" index.html` | Every occurrence is "Georgetown Campus," "Georgetown, Texas," "GT Anywhere," or a URL; no bare shorthand used as a name |
| 8. Both door CTAs above the fold at 390×844 | Confirmed by the coordinator in a real browser, pre-Round-4 (doors ended at 816px, `shared/screenshots/QA-2026-09-10.md`) | **Superseded by Round 4**, not re-measured in a browser: rule 7's 44px header/compare-anchor targets add height, rule 10's mobile trims remove more than that back. CSS math puts the new door-2 bottom at roughly 784px and the compare-anchor's own bottom at roughly 836px — see the Round 4 section above for the full calculation and its caveats. A real browser re-check is still owed |
| 9. Links only to the five destinations + anchors | `grep -oE 'href="[^"]*"' index.html \| sort -u \| wc -l` (re-run after Round 4) | **17** unique hrefs: `#compare`, `#main`, `#top`, `data:,` (favicon), `styles.css`, `../shared/fonts.css`, `../shared/tokens.css`, the canonical `https://gt.school/`, and the five allowed domains and their paths (`https://www.gt.school/`, `/contact`, `/privacy-policy`, `/terms-of-use`; `https://anywhere.gt.school/`, `/academics`; `https://apply.gt.school/?school=georgetown`, `?school=anywhere`; `https://community.gt.school`) — nothing else. The footer's old unscoped `apply.gt.school` link (E2 finding 14) is gone; its two replacements reuse hrefs the steps section already had, so no new destination was added |
| 10. Motion budget | `grep -n "transition:" styles.css` (re-run after Round 4) | **One** declaration in the whole file, inside the reduced-motion query only (`transition: none !important`). The two `color` transitions this row used to report (link hover/focus, door-CTA hover/focus) are removed per E2 fix decision 4 — those state changes are now instant, and nothing on the page transitions `transform` or `opacity` either. See "Motion spec" above |
| 11. Accessibility | Manual pass | `<html lang="en">`; skip link to `#main`; `header`/`nav`(×2)/`main`/`footer` landmarks; exactly one `h1`; `a:focus-visible` gets a 2px `--color-focus` outline; every image has descriptive alt text; door cards and CTA links exceed 44px in the smaller dimension; comparison is a real `<table>` with `<caption>` and `scope="row"`/`scope="col"`; door text sits on a solid `--color-surface`/tint panel below the photo, never overlaid on it, so no text-over-image contrast risk exists |
| 12. Head block | Viewed the file | Title, meta description, `robots noindex,nofollow`, canonical, Open Graph (title/description/image/type), and the JSON-LD `EducationalOrganization` with two `subOrganization` entries — all match `copy.md`'s Head table verbatim |
| 13. Images | `grep -n "<img"` plus `wc -c` | Both `<img>` tags carry real `width`/`height` (matching the source files' actual pixel dimensions, confirmed with `sips`), `alt`, `decoding="async"`; neither carries `loading="lazy"` since both are first-screen images. `index.html` is 13KB, `styles.css` is 10KB — both trivially under budget, and shared images are excluded from the page-weight rule entirely |
| 14. Tokens only | `grep -c "#" styles.css` | `0` — no hex color anywhere in the stylesheet |
| 15. Scalable door list | Markup | `<ul class="doors">` with `<li>` entries on `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))` — adding a third `<li>` requires no CSS change |

Also verified: all element `id`s in the document are unique, every `aria-labelledby` reference resolves to a real `id`, and the file served from `http://127.0.0.1:8213/0_plan/mockups/M1-two-doors/index.html` is byte-identical to the file on disk (confirmed with `diff`).

## Known trade-off (from the brief's direction table)

The split hero is a two-panel visual today and does not, by itself, communicate "this scales to five campuses." What does scale is the markup underneath it: the door list is a real `<ul>` on an `auto-fit` grid, so a third, fourth or fifth `<li>` renders in the same component without a rebuild — the visual becomes a wrapped grid of tiles rather than a forced two-panel split the moment a third door is added. This is exactly the trade-off the BUILDER-BRIEF's direction table calls out for M1 and asks to be flagged rather than solved: M1's hypothesis is that two doors, presented as fast and unambiguous as possible, is the right test *for today's two schools*; DD-21 compliance is delivered at the markup layer, not the visual layer.

## Design-lead pass (Fable, browser in the loop), 2026-09-10

| Item | Change | Why |
|---|---|---|
| First screen | Headline band, then two edge-to-edge door panels: photo on top, tinted content panel with label, name, one line and a navy button; both panels fill the first viewport at 1440 (doors 312 to 881px, CTAs end at 849px); at 390 the doors are photo-left cards ending at 720px with the compare link at 768px | Design judged by eye against screenshots, not by rules alone; the split screen is M1's thesis |
| Comparison | Same table semantics restyled as a component: tinted column headers per school, mono row labels, "Both schools" tag on shared rows, stacked cards on mobile | The spreadsheet look was the weakest part of every mock |
| Proof | Navy band with four facts as bordered plates | Contrast and weight for the one section that carries belief |
| Steps | Numbered sequence on a hairline, four across at desktop; navy application buttons | A sequence reads as a process, a list reads as a list |
| Connect and families | Four cards with arrows; a families bar with an outlined button | Secondary actions get affordance without competing with the doors |
| Footer | Three columns: facts and phone, links, the two logos on their own panels (GT Anywhere on navy, GT School on light) | Brand continuity and legibility (E2 finding 18) |
| Header | Logo plus two utility links, "Contact admissions" as an outlined button; one row at every width | Routing page, no menu (DD-12) |

Departures from the sites' surfaces, for Nari at G1 (DD-19): the navy proof band and the navy footer logo panel (Anywhere's tertiary color, used as a section surface); the light blue Anywhere door tint (`--color-anywhere-tint`, a derived value); mono eyebrows ("Compare", "Proof", "Admissions", "Connect") as section labels, recorded in `copy.md`. Motion: nothing animates; hover and focus states change color and underline instantly. All 35 checker rules and the claims checker pass after the pass.
