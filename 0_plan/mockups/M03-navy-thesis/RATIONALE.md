# M03 Navy Thesis, rationale

| Field | Value |
|---|---|
| Mock | M03 "Navy Thesis", G-D build wave, 2026-09-11 |
| Brief | `0_plan/kb/briefs/M03.md` under `0_plan/kb/briefs/CONTRACT.md` v2.1; evolves `0_plan/mockups/M3-private-quiet/` |
| Lens order | L4 exclusivity, L3 mission, L1 objective, L2 continuity |
| Files | `index.html`, `styles.css`, this file, `qa/` (runner output: `fold.md`, 19 viewport captures, two full-page captures, the root-doubled capture) |
| State | Default state (no photograph, DD-42 option a, RF-25 pending); no JavaScript (D-039 undecided, so the complete static state ships and no `data-d039` declaration is made); links `../shared/tokens-v2.css` |
| Register rows this build depends on | DD-38 (type scale, display weight, prose leading), DD-39 (colour roles on navy), MN-16 (motion contract), D-039 (scripts: none shipped), DD-42 (photographs: none), DD-43 (repeated comparison cells), DD-44 (`svh` fold contract), R14 (tour label) |

## Direction

Hypothesis: a serious school states what it is in one breath and gets out of the way. The umbrella sentence is the whole first argument, set large in Literata on `--color-navy`; the two doors are the second sentence, a hairline list beneath it with no card, no tint and no picture (K1 section 2f, the typographic first screen; K14 section 5a for tone). Exclusivity is carried by restraint and by the stated bar, never by price or wealth cues (DD-10, MD-25); mission by fact density below the fold (DD-29); the objective by two equal, unmissable off-white CTAs on the first screen; continuity by the estate's own marks, faces and swatches (K12), with nothing invented beyond the layer-2 roles the knowledge base proposed.

The first screen serves this in one column: header (the GT School mark on a light plate, two utility links), a 40 by 4px accent rule as the page's one accent use, the h1 across at most 35 characters (nine of twelve columns at 1280 and 1440), the provenance line in the muted-on-dark role, then the door list. Below 1024 the doors are two rows with hairline rules (label, name, line, CTA); from a 58rem door container (a 1024 viewport at the 48px margin) they are a 6-and-6 pair with a 64px gutter, CTAs bottom-aligned. On phones shorter than 780px the rows compact to label, name and CTA, and both door lines follow the second CTA as two run-in paragraphs (the contract's compact door rule at this mock's measured threshold, section "Fold estimate"). The navy first screen is sized `min-block-size: calc(100svh - 8rem)`, so on tall viewports the next band shows for 128px below it: the light band opens with the compare anchor sentence, which is the "second screen" the brief asks the anchor to open. The page has exactly two dark sections: the first screen (header included) and the footer, which takes Vanguard's role of the dark band reserved for a proof moment and carries the facts block.

What changed from M3 Private Quiet: the navy first screen is kept but the doors lose their photographs, cards and inline icons and become a typographic list (COLLINS's programs rows on navy, C21, C38); the thesis is set at the contract scale (46px at 1440, four lines) instead of 56px and six lines; the whole second half moves to a label-column grid (eyebrow and h2 in columns 1 to 4, content in 5 to 12) so every section has the same skeleton; the focus ring is the K3 two-colour ring wherever navy is adjacent, which is what broke the earlier M3 (E3 B1); every colour is a token or a proposed layer-2 role, with zero raw hex in `styles.css`.

## h1

The h1 is the umbrella sentence, verbatim: "GT School is a selective school for gifted and talented children, in person at our Georgetown, Texas campus or online from anywhere." It is the only element that decodes "GT" (DD-33) and names both ways to attend before either door (DD-20), so in a statement-first direction it is the largest thing on the page and the first thing the eye lands on. Literata 400 at `--text-3xl` (27.26px at 375, 46px at 1440), `--leading-tight` 1.15, at most 35ch, `--color-on-navy`. "from anywhere." is wrapped in a `span.nowrap` so the last line is never a single word (K1's orphan check); the nowrap is released by a container query when the thesis column is narrower than 12rem, which only happens with a doubled root font on a phone. `text-wrap: balance` applies from 768px, where the sentence is four lines; the seven-line phone setting is left unbalanced (K10 T-K10-15). The door names are h3 under a visible h2 "Two ways to attend" (an allowed section 1 heading, rendered as the eyebrow over the list, visually hidden only in the compact state); the second-screen h2s are "Compare the two schools" (visually hidden, the table caption is the visible title), "What is true of both schools", "How to apply", "Questions before you apply" and "Already a GT family?". No level is skipped.

## Brief compliance

| Brief section | What was built |
|---|---|
| Mock id and name, lens order | M03 Navy Thesis; L4, L3, L1, L2 as above; evolves M3 Private Quiet (see Direction) |
| Thesis | The statement first, large, on navy; the doors are the second sentence, a list directly beneath; the compare anchor is the first line of the light band that follows |
| Exemplars | COLLINS: the door list borrows the programs rows (name, one line, hairline rule) and the single dark band spent once (C21, C38). Yale School of Architecture: statement-first order, but the doors stay on the first screen, so C36 is avoided. Vanguard: the footer is the second dark band and carries the facts block. Harvard's zero-CTA page is not followed |
| Composition | Single column on `--color-navy`; header 56px with the GT School mark on a `--color-bg` plate (the mark is not white) and two utility links in `--color-on-navy`; h1 nine columns at 1280 and 1440, capped at the contract's 35ch (which binds at 1440: 932px against 976px for nine columns); provenance; doors as a two-row hairline list below 1024 and a 6-and-6 pair above; second screen `--color-bg` with the anchor, table, proof strip (`--color-surface`), steps, secondary CTAs, current families; footer navy. Fold sums restated below with measured bottoms |
| Typography | h1 Literata 400 `--text-3xl` on navy (46px at 1440); DD-38's 300-against-400 test hook is `data-h1-weight="300"` on `<html>` (one rule in `styles.css`); provenance `--text-sm` in `--color-text-muted-on-dark`; door names Literata `--text-xl`; door lines Inter Tight `--text-base` at `--leading-prose` 1.5; CTAs Inconsolata 600 `--text-btn`. Estimated and observed h1 lines: 7, 6, 4, 4 at V2, V5, V14, V16 (the brief estimated 6 at V2; the real advances give 7, see below) |
| Color and surface | `--color-navy` first screen; text `--color-on-navy` (14.58); muted `--color-text-muted-on-dark` (7.81); hairlines `--color-border` at 40 percent over navy via `color-mix` inside an `@supports` guard (2.56 against navy, decorative). Primary CTA on navy: `--color-on-navy` fill, `--color-text` text (18.57). Secondary links underlined `--color-on-navy`. One accent use on the first screen: the 40 by 4px `--color-accent` rule above the h1 (a shape, RF-37; 5.83 against navy). Focus `--color-focus-on-dark` on navy; the contract's two-colour ring (2px `--color-navy` inner band via box-shadow, 2px `--color-focus-on-dark` outer band via outline at 2px offset) on every control on or crossing navy, the logo plates included. Dark sections: two |
| Imagery | Default state: none. The photographed state (`georgetown-guide.webp` at 3:2, `object-position: 50% 50%`, at most 720 CSS px, captioned "A Guide teaches at the whiteboard.") is not built; it would sit below the comparison as a `figure` between the sources line and the repeated doors when RF-25 permissions are recorded. Fallback: this default |
| Motion | Nothing animates. V6 was considered for the steps and the secondary CTAs (the sections carry `data-motion="v6"` as the hook) and is not shipped because it needs the D-039 script; the page is complete without it. V1, V3, V7 instant (no `transition` property anywhere). Reduced motion: `--duration-none` on every element and pseudo-element; the runner reports every computed duration 0s |
| Copy | Sections 0 to 8 verbatim (every fixed slot checked by string match, see Self-check); the eyebrow "Two ways to attend" over the door list; section eyebrows "Compare", "Proof", "Admissions", "Connect", "Families"; h2 "Questions before you apply"; the R14 tour label. The only words on the page outside `copy.md` are the skip link's "Skip to main content" (rule 11 of the builder brief requires the control; flagged below) |
| Conversion | Doors on the first screen as a list with both CTAs above the fold at every required row; the compare anchor opens the second screen; table with repeated values (DD-43); proof strip with the sources line; four steps and two application links; four secondary CTAs; current families; footer facts and both logos |
| Acceptance | Every on-navy pairing measured at or above 4.5 (table below); focus ring per surface specified in `styles.css` (the ring screenshots are the director's runner pass; `shots.mjs` does not capture focus states yet). Rationale names DD-38, DD-39, MN-16, D-039 |

## Fold estimate (designed to) and the runner's measurement

Method: the h1 line counts come from the real Literata Regular TTF advances (greedy wrap, no kerning, `scratchpad/h1lines.py`, not committed) rather than the contract's mean-advance arithmetic, because this sentence breaks unkindly at phone widths ("person at our" strands alone). Gaps are the space tokens named in `styles.css`; the compact block is 1px rule + 8 + label 15 + 4 + name 25.4 + 8 + CTA 44 + 8 = 113.4px. Limits are height minus 24.

| Row | Viewport | Limit | Estimate (header, gaps, h1, provenance, doors) | Estimated CTA 2 bottom | Measured CTA 2 bottom (runner) | Result |
|---|---|---|---|---|---|---|
| V2 | 375 by 629 | 605 | 56 + (8 + 4 + 8) + h1 7 lines 219 + 8 + 21 + 16 + 113.4 + 113.4 − 8 (last padding) | 559 | **559** | pass, 46px spare |
| V5 | 414 by 715 | 691 | 56 + (16 + 4 + 16) + h1 6 lines 193 + 8 + 21 + 24 + 113.4 + 113.4 − 8 | 557 | **557** | pass, 134px spare |
| V14 | 1280 by 720 | 696 | 56 + (16 + 4 + 16) + h1 4 lines 199 + 8 + 22 + 24 + eyebrow 24 + door (1 + 16 + 16 + 4 + 31 + 8 + line 2 lines 53 + 8 + 44) | 551 | **591** (the navy screen's `min-block-size` adds no slack here; the 40px difference is the pair's bottom padding and rounding of the fluid sizes) | pass, 105px spare |
| V16 | 1440 by 900 | 876 | 56 + (32 + 4 + 24) + h1 4 lines 212 + 16 + 22 + 48 + eyebrow 24 + door 183 | 621 before slack; the `1fr` row of the first-screen grid then pushes the doors down so the navy ends at 772 and the light band shows for 128px | **755** | pass, 121px spare |

Height bands (`--fold-density`, K10 T-K10-8): compressed below 900px (`--fs-top` 16, rule gap 16, h1 to provenance 8, provenance to doors 24), with a tighter sub-band at or below 639px (8, 8, 16) that V2 and V19 fall into; relaxed at 900px and above (32, 24, 16, 48). The compact door rule runs at `(max-width: 1023px) and (max-height: 779px)`, not the contract's 700px, because with the measured three-line door lines the rows-with-lines form needs about 750px of height on a phone (V5 would end at 747 against 691); V6 (839) and V9 (844) show the lines in the rows. Landscape phones (`max-height: 479px` and at least 600px wide, V10) put the thesis and the compact door rows side by side and step the h1 down to `--text-xl`, which is the only place the h1 leaves `--text-3xl`.

The runner's full table (`qa/fold.md`, 2026-09-11T08:39:51Z), every required row passing:

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 56 | 309 | 338 | 468 | 581 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 56 | 295 | 324 | 446 | 559 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 56 | 314 | 343 | 472 | 586 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 56 | 314 | 343 | 473 | 586 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 56 | 285 | 314 | 444 | 557 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 56 | 285 | 314 | 555 | 765 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 56 | 283 | 312 | 442 | 556 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 56 | 287 | 316 | 446 | 560 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 56 | 314 | 343 | 583 | 793 | yes | report: page height 7065 |
| V10 | 750 by 342 | fold | 318 | 56 | 243 | 272 | 172 | 288 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 56 | 273 | 311 | 696 | 887 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 56 | 279 | 316 | 866 | 1057 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 56 | 270 | 300 | 639 | 639 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 291 | 321 | 591 | 591 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 56 | 298 | 328 | 559 | 559 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 328 | 366 | 755 | 755 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 56 | 328 | 366 | 815 | 815 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 96 | 364 | 414 | 552 | 665 | yes | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 254 | 284 | 527 | 527 | yes | report: scrollWidth 1024 |

Reduced motion at V14: every computed transition and animation duration 0s. Root font doubled at V2: no horizontal scroll (after three fixes found by the runner: the facts grid's `minmax` floor, the utility nav's `nowrap`, and unbreakable URL tokens in the sources line, now `overflow-wrap: break-word`). Console: clean. Note: `shots.mjs` scores V10 as a fold row; K10 section 5b exempts it (T-K10-14), but the landscape layout above passes it either way.

### h1 line counts

| Row | h1 size | h1 column | Estimated lines (Literata 400) | Observed (runner bottom minus h1 top, at 1.15) | Literata 300 would give |
|---|---|---|---|---|---|
| V2 375 | 27.26px | 327px | 7 | 7 (295 − 76 = 219 = 7 × 31.35) | 7 |
| V3 390 | 27.53px | 342px | 7 | 7 (314 − 92 = 222) | 6 |
| V5 414 | 27.95px | 366px | 6 | 6 (285 − 92 = 193) | 6 |
| V11 768 | 34.18px | 693px (35ch) | 4 | 4 (273 − 116 = 157) | 4 |
| V13 1024 | 38.68px | 688px (nine columns) | 4 | 4 (270 − 92 = 178) | 4 |
| V14 1280 | 43.19px | 875px (35ch) | 4 | 4 (291 − 92 = 199) | 4 |
| V16 1440 | 46.00px | 932px (35ch) | 4 | 4 (328 − 116 = 212) | 4 |

The contract's estimate of 6 lines at V2 is one short: the real advances put the sentence at 7 lines at 360 to 402px and 6 at 414 to 430px. The budget still clears V2 by 46px because the compact door rule and the tight height band absorb it. DD-38 evidence: Literata 300 saves one line at 390 and 393 but not at 375, and K3 P9 and CS7 argue against light weights on navy; 400 ships, and the hook lets the director render 300 for comparison.

## Decisions applied

| Id | How it is applied in this mock |
|---|---|
| DD-01, DD-36 | Three faces, three jobs: Literata for the h1, h2s, door names, table caption and column heads, facts and steps; Inter Tight for running prose (door lines, table cells, provenance, TEFA body, footer facts, utility links); Inconsolata for buttons, eyebrows, row labels, step counters and the phone number |
| DD-02 | Departure taken deliberately: the first screen is navy (the brief's direction), with off-white text at 14.58 and muted text at 7.81 so legibility outdoors is not traded away |
| DD-03, DD-20, DD-33 | One umbrella sentence above the doors, spelling out gifted and talented and both ways to attend |
| DD-04 | Cue set reduced to label ("In person" / "Online"), full school name and position; no icon and no photograph (see Taste decisions and Flagged slots) |
| DD-05, DD-23 | "Explore the Georgetown campus" / "Explore GT Anywhere" on the first screen (`first_screen`) and again after the table (`after_comparison`) |
| DD-06, DD-43 | A real `<table>` with caption, `scope="col"` and `scope="row"`; shared rows first with the value repeated in both columns; stacked blocks labelled with the school name below a 60rem container (R6 starting hypothesis) |
| DD-07, DD-17, MD-16 | No outcome figure, no accreditation claim, no Cognia mark; nothing footnoted to anything but the register |
| DD-08, DD-31, DD-42 | No photograph in the default state; the photographed state is specified above and not built |
| DD-10, MD-06, MD-25 | Selectivity as the stated bar (90th percentile) in the table, the proof strip and the steps line; access (TEFA, $10,400) in the same table row; no countdowns, no wealth cues |
| DD-12, DD-13, MD-11 | Header: lockup, "Current families", "Contact admissions"; no menu; the phone number only in the footer |
| DD-14, MD-23 | Built at 375 first; doors stacked Georgetown then Anywhere; no sticky element |
| DD-19 | Style envelope: every value a token or a named departure (section Departures) |
| DD-21 | Doors are `<ul><li>` on the first screen and after the comparison; a third campus is a new `<li>`, and the pair rule (`repeat(2, minmax(0, 1fr))`) becomes `auto-fit` when it is needed |
| DD-25, DD-27, REQ-070 | Two "Begin application" links with `?school=`; full school names everywhere; no unscoped application link |
| DD-26 | Both doors identical in markup and treatment; CTAs bottom-aligned in the pair so a longer line never ranks a door |
| DD-29 | Every screen carries a fact: table, proof strip, steps line, footer facts |
| DD-38 | Layer-2 type scale and `--leading-prose` used throughout (tokens table below); the 300-against-400 hook |
| DD-39 | `--color-on-navy`, `--color-text-muted-on-dark`, `--color-focus-on-dark`, `--color-border-strong` used in their proposed roles; gold never as text |
| DD-44 | `min-block-size` in `svh` with the `@supports not (height: 100svh)` fallback as the only `vh`; height bands; `data-fold` hooks for the runner |
| MD-02, R14, REQ-002 | Four secondary CTAs including "Ask about a tour of the Georgetown campus" |
| MD-17 | The provenance line once, small, muted, directly under the h1 |
| MN-16 | Transform and opacity only (nothing animates), colour and layout changes instant, `--duration-none` under reduced motion |
| D-039 | Undecided: no script, no inputs, no `data-d039` declaration; V6 hooks left as `data-motion="v6"` attributes only |
| SE-13 | `noindex, nofollow` |
| REQ-022 | Every figure maps to a claims-register row (`check-claims.py`, statuses below) |

### Layer-2 tokens used (proposed; each named here as the contract requires)

| Token | Where | Register row |
|---|---|---|
| `--text-xs`, `--text-sm`, `--text-base`, `--text-md`, `--text-lg`, `--text-xl`, `--text-2xl`, `--text-3xl`, `--text-btn` | Every type role | DD-38 (b), R5 |
| `--leading-prose` 1.5, `--measure-prose` 65ch | Door lines, table cells, provenance, sources, TEFA body, footer facts, facts | DD-38 (b), RF-55, RF-58 |
| `--color-on-navy` | Text and CTA fills on navy, button text on navy fills | DD-39 (a), RF-07 |
| `--color-text-muted-on-dark` | Provenance, door labels and lines on navy, footer facts, utility-link underline at rest | DD-39 (a), RF-07; a new tint, a DD-19 departure |
| `--color-focus-on-dark` | Outer band of the ring on navy | DD-39 (a), RF-07 |
| `--color-border-strong` | Underline of links on light surfaces at rest; hairlines on `--color-surface` | DD-39 (a), RF-07; a new tint, a DD-19 departure |
| `--ease-*` | Not used (nothing animates) | MN-16 (a), RF-53 |
| `--duration-none` | The reduced-motion block | MN-16 (a), RF-53, R8 |

### Taste decisions the brief did not name

| Decision | Choice and reason |
|---|---|
| Door cue icon | None. The brief's row is label, name, line, CTA; the brand marks cannot sit symmetrically on navy (the GT School mark needs a light plate, the GT Anywhere mark does not, and a plate on one door ranks it, DD-42's reasoning), and a drawn glyph would be imagery from outside `shared/img/`. Label plus full name plus position carry the cue (K3 CS10, CS11) |
| Button case | Sentence case in Inconsolata 600 rather than the estate's uppercase (K12 G17 lists fill, label and radius as options). Uppercase monospace at 17px for a 31-character CTA reads as shouting against a statement-first thesis. The only uppercase on the page is Inconsolata (labels, eyebrows), which keeps K12 G15 |
| Eyebrows and labels | Inconsolata 600 uppercase at `--text-xs`, tracking .08em, rather than the contract's Inter Tight option, so the utility voice is one face (buttons, labels, counters) and matches the live estate's utility face (K12 F36) |
| Facts and steps in Literata | Statements (the four facts, the four steps) are set in the display face at `--text-lg` / `--text-md`; descriptive prose (door lines, cells, footer facts) in Inter Tight. Two registers, not one |
| Label-column grid | From a 64rem page container every second-screen section is eyebrow and h2 in columns 1 to 4, content in 5 to 12 (the comparison spans all twelve because the cells need 45 characters). One skeleton, repeated |
| Compare title | The table caption "Georgetown Campus and GT Anywhere, side by side" is the visible title; the section h2 "Compare the two schools" is visually hidden so the anchor sentence, the eyebrow and the title do not say "compare" three times in a row |
| Empty corner cell | The table's corner is an empty `<td>` rather than a visually hidden word, so no word outside `copy.md` enters the page |
| Repeated doors | Beneath the table the doors return as label plus CTA only (navy fills on light), not as full doors, so the section stays a comparison and the first screen keeps the only full statement of the doors |
| Hairlines | 1px `--color-border` at 40 percent over navy (`color-mix`, `@supports` guarded; full `--color-border` where unsupported), `--color-border` on `--color-bg`, `--color-border-strong` on `--color-surface`. All decorative: the CTA identifies every control (K3 CS12) |
| Compact-state door lines | The two lines are present twice in the markup (in the rows and as the run-in paragraphs) and exactly one copy is displayed at any viewport, because no CSS can move a line out of one list item past another without `display: contents` on `<li>`, whose list semantics are unreliable in assistive technology |
| Footer logos | Not lazy-loaded: the runner's full-page capture never scrolled the GT Anywhere mark into view, and two 10 KB SVGs gain nothing from lazy loading |
| Accent in the footer | The 40 by 4px rule returns once above the facts block, so the two dark sections open and close the page with the same mark; no accent appears on any light surface |
| Page margins | K1 section 5a's schedule, 24 / 32 / 48 / 64 (Option, R15); content box 1312px at 1440 and 1920 (K10 T-K10-7) |

## Motion spec

| What animates | Trigger | Duration token | Easing token | Reduced-motion behaviour |
|---|---|---|---|---|
| Nothing | | | | `transition-duration` and `animation-duration` forced to `--duration-none` on every element and pseudo-element; the runner reports every computed duration 0s at V14 |

State changes are instant (R9, MN-16): CTA fills change colour on hover (`--color-on-navy` to `--color-bg` on navy; `--color-navy` to `--color-text` on light; outlined buttons fill), link underlines change from the muted or strong-border colour to `currentColor`, the skip link appears on focus via `transform: none`. No `transition` property exists in `styles.css`; V1, V3 and V7 are instant by construction.

Considered and not shipped (needs D-039): V6 one-time reveal on `.steps` and `.connect` (the two `data-motion="v6"` sections, third screen and later, two of the three allowed uses): 300ms `--ease-out`, opacity 0 to 1 and `translateY(8px)` to 0, `IntersectionObserver` with `rootMargin: 0px 0px -15% 0px`, `unobserve` after the first hit, the hidden state scoped to a `.js` class the script would add, the whole rule inside `prefers-reduced-motion: no-preference`. The page is complete without it. V10 anchor scroll is not in the brief and is not used: the compare anchor jumps natively.

## Assets

| File | Used for | Alt text | Source and consent | Fallback |
|---|---|---|---|---|
| `gt-school-logo-h.svg` (139 by 32) | Header lockup on a `--color-bg` plate (height 20 to 28px, fluid); footer link to www.gt.school on the same plate | "GT School" | The real mark from the mirror; its navy path needs the light plate | None needed |
| `gt-anywhere-logo-h.svg` (252 by 48) | Footer link to anywhere.gt.school, directly on the `--color-navy` panel (white lettering, orange leaf) | "GT Anywhere" | The real mark from the mirror | None needed |
| Photographs | None (default state). Photographed state, if RF-25 permissions are recorded: `georgetown-guide.webp` (1440 by 960) at 3:2, `object-position: 50% 50%`, at most 720 CSS px wide (R13: 720 × DPR 2 = 1440), caption "A Guide teaches at the whiteboard." from `copy.md` section 9, alt from `ASSETS.md`, below the comparison | | Published by GT on its own site; consent to be confirmed by Nari (AD-11, RF-25) | The default state |

Open Graph carries title and description only; no share image while the default state holds (`copy.md` Head).

## Colour and contrast (WCAG 2.x ratios, computed from the token values on 2026-09-11)

| Pairing | Where | Ratio | Threshold |
|---|---|---|---|
| `--color-on-navy` on `--color-navy` | h1, door names, utility links, footer links | 14.58 | 4.5 text |
| `--color-text-muted-on-dark` on `--color-navy` | provenance, labels, door lines, footer facts | 7.81 | 4.5 text (AAA) |
| `--color-text` on `--color-on-navy` | door CTAs on navy | 18.57 | 4.5 text |
| `--color-text` on `--color-bg` / `--color-surface` | body, table, facts, steps | 17.69 / 16.10 | 4.5 text |
| `--color-text-muted` on `--color-bg` / `--color-surface` | eyebrows, row labels, sources, step counters | 6.25 / 5.69 | 4.5 text |
| `--color-on-navy` on `--color-navy` fill | repeated door CTAs | 14.58 | 4.5 text |
| `--color-navy` on `--color-bg` / `--color-surface` | outlined buttons, their borders | 13.88 / 12.63 | 4.5 text, 3 border |
| `--color-border-strong` on `--color-bg` / `--color-surface` | link underlines at rest, surface hairlines | 3.63 / 3.31 | 3 graphical |
| `--color-accent` on `--color-navy` | the two accent rules | 5.83 | 3 graphical |
| Hairline (`--color-border` at 40 percent over navy) on navy | door rules | 2.56 | decorative, not load-bearing |
| `--color-focus` on `--color-bg` / `--color-surface` | ring on light | 8.20 / 7.46 | 3 |
| `--color-focus-on-dark` outer band against navy; `--color-navy` inner band against the light plate | ring on navy and the straddle case | 14.58 / 13.88 | 3, one band per ground (K3 F10) |

Palette usage: navy on two sections (first screen with header, footer); accent twice (one rule per dark section, none on light); `--color-surface` on the proof strip and the current-families band; text on navy off-white, never pure white (K3 CS7); no colour used as text below 4.5 anywhere.

## Departures

| Departure | Value | Reason |
|---|---|---|
| Navy first screen | `.on-navy` on the header and `.first-screen` | The brief's direction (DD-19 brand extension named in the M3 v1 rationale and kept) |
| Layer-2 tokens | Listed above | Proposed roles from `tokens-v2.css`, named per row (DD-38, DD-39, MN-16); `--color-text-muted-on-dark` and `--color-border-strong` are new tints (DD-19 departures under DD-39) |
| Hairline at 40 percent | `color-mix(in srgb, var(--color-border) 40%, transparent)` | The brief's "hairlines `--color-border` at 40 percent over navy"; derived from a token, no literal colour; `@supports` guarded |
| 1px rules, 2px ring bands, 3px forced-colours outline | Hairlines, `:focus-visible`, `@media (forced-colors)` | No border-width token exists; K3 section 5d's band widths |
| 44px target floor | `min-height: 2.75rem` on every control | The matrix's interactive minimum; no target token |
| 40px accent rule | `width: 2.5rem; height: var(--space-2)` | The brief's stated width; the height is the 4px token |
| Logo height | `clamp(1.25rem, 5.56vw, 1.75rem)` | 20px at 360 to 28px from 504px, so the plate and both utility links fit a 312px content width at 360 (measured: 302px needed) |
| Container thresholds | 58rem (door pair), 60rem (table), 64rem (label-column grid), 12rem (h1 nowrap release) | Container queries per K10 section 5d; the table threshold is R6's starting hypothesis, to be kept or replaced by the measured cell fit |
| Height thresholds | 479, 639, 779, 899 px | The landscape case (K10), this mock's tight band, the compact door rule (measured), K10's compressed/relaxed edge |
| First-screen height | `min-block-size: calc(100svh - var(--space-11))` | The only `svh`; the `@supports not (height: 100svh)` block holds the only `vh` (DD-44); 128px of the next band shows on tall viewports so the page never ends on a false floor |
| Letter-spacing | `.08em` on uppercase labels | Within the contract's 0.06 to 0.08em |
| Underline offset and thickness | `.18em`, 1px | Typographic refinement; no token |
| Skip link words | "Skip to main content" | Rule 11 requires the control; `copy.md` has no slot for its label (flagged) |

## Flagged slots

| Slot | Q id or row | Default shipped |
|---|---|---|
| Lockup | Q-001 | The real `gt-school-logo-h.svg`; Holly's unifying element may be added beside it |
| Current families | Q-002 | community.gt.school in the header, the families band and the footer |
| Application steps | Q-007 | The four steps as `copy.md` gives them, identical for both schools |
| Georgetown tuition | Q-011 (decided, G0.5 item 4) | "Tuition on request. Ask admissions." |
| After 8th grade | Q-013 | The shared sentence, repeated in both columns (DD-43) |
| Intensives logistics | Q-017 | "Four intensive weekends a year in Georgetown." and no further detail |
| Outcome figure | Q-019 | Withheld; the proof strip carries the four register-backed facts |
| TEFA window, owner, expiry | Q-021 | The module's default wording, visible to everyone (D-015 option c) |
| Accreditation | Q-033 | Nothing on the page |
| Parent quote | Q-034 | None |
| Adults' title | Q-035 (decided) | Guides; "advisor" appears only as the `data-type` value the spec names |
| "Talk to admissions", tour, info session destinations | MD-02, REQ-002, R14 | All three point to www.gt.school/contact; the tour label names the destination and the campus |
| `school=` parameter | DD-25 | Convention; the live parameter is confirmed in S5 |
| Photograph and caption | DD-42, RF-25 | None shown; the photographed state specified in Assets |
| Door icon | DD-04 | None; label, name and position carry the cue (Taste decisions) |
| Skip link label | Rule 11 | "Skip to main content", the one string outside `copy.md`; propose adding it to `copy.md` section 9 as wayfinding |
| Stacked-table semantics | R6 | Below 60rem the table parts are `display: block`, which some screen readers read as plain text; explicit `role` attributes are a build-phase decision, not taken in the mock |
| DD-38 weight test | DD-38 | 400 ships; `data-h1-weight="300"` renders the alternative |

## Claims register tags

All six rows are "Unverified, public" in `0_plan/12-claims-register.md`: usable in a mock (G0.5), blocked for production until Nari approves the wording (REQ-022). Counts are `check-claims.py`'s own.

| Figure on the page | Where | Row | Count | Status |
|---|---|---|---|---|
| 90th percentile | Table "Admissions" (both cells), proof fact 1, steps line | CR-011 | 4 | Unverified, public |
| $10,400 a year | Table "Tuition and access", GT Anywhere cell | CR-021 | 1 | Unverified, public |
| four in-person weekends / Four intensive weekends | Door 2 line (row and run-in copy, one displayed), table "In-person time", footer facts | CR-032 | 4 | Unverified, public |
| 9 to noon, about two hours / Two hours of mastery academics | Table "The day" Georgetown cell, door 1 line | CR-033 | 2 | Unverified, public |
| Two to three hours | Table "The day" GT Anywhere cell | CR-034 | 1 | Unverified, public |
| check-in every week / every week | Table "Guides" GT Anywhere cell, proof fact 3 | CR-035 | 2 | Unverified, public |

CR-022 ($10,474) is not on the page; the TEFA sentence carries no figure.

## Parent questions (`0_plan/05-landing-mockups-plan.md` section 6c)

| # | Question | Answered | Where |
|---|---|---|---|
| PQ-01 | What is GT School? | Page | The h1 |
| PQ-02 | Is it for my child? | Page | "gifted and talented children" in the h1; the 90th percentile in the table, the proof strip and the steps line |
| PQ-03 | In person or online: what are my options? | Page | The two doors: label, name, line, CTA |
| PQ-04 | Where is the campus? | Page | Door 1 line; table "Where and how" |
| PQ-05 | What does a day look like? | Page | Table "The day" |
| PQ-06 | What does it cost, and can TEFA help? | Page | Table "Tuition and access"; the TEFA module |
| PQ-07 | How do I apply? | Page | "How to apply": four steps, two application links |
| PQ-08 | Who teaches my child? | Page | Table "Guides"; proof fact 3 |
| PQ-09 | How much in-person time does GT Anywhere have? | Page | Door 2 line; table "In-person time" |
| PQ-10 | What results does the school get, and is it accredited? | Silent by G0.5 items 2 and 3 | "Contact admissions" and "Talk to admissions" are the path to the person who answers it |
| PQ-11 | What happens after 8th grade? | Deferred to admissions | Table "After 8th grade" (Q-013) |
| PQ-12 | I am a current family, where do I go? | Page | Header link; "Already a GT family?" band; footer link |
| PQ-13 | I am not ready to apply, what can I do? | Page | "Questions before you apply": FAQ, admissions, tour, info session |
| PQ-14 | Is GT School part of Alpha School? | Page | The provenance line under the h1 |

## Self-check

Runner: `node 0_plan/tools/shots.mjs 0_plan/mockups/M03-navy-thesis --all`, 2026-09-11T08:39:51Z: all required rows pass (table above); reduced motion PASS; root font doubled at V2 PASS; console PASS; captures in `qa/`. Earlier runs found and I fixed: the footer grid not reaching twelve columns (the footer sat outside the page container), the GT Anywhere mark missing from the full-page capture (lazy loading), the stacked table cells keeping their 25 and 37.5 percent widths (specificity), V10 failing the fold (the landscape layout), and three horizontal overflows at a doubled root font.

Grep checks (from the repo root, 2026-09-11): `<form` 0, `<input` 0, `<script` 1 (JSON-LD); hosts in `index.html` and `styles.css`: gt.school, www.gt.school, anywhere.gt.school, apply.gt.school, community.gt.school, schema.org only; digits in visible text: 09, 10, 10,400, 2026, 270, 512, 8, 9, 90, 9481; "advis" in visible text: none; every fixed slot of `copy.md` sections 0 to 8 found verbatim by string match, the h1 text exact; words on the page not in `copy.md`: Skip, content, main; provenance line once; sources line twice (table and proof strip); `vh` once, inside the `@supports not (height: 100svh)` block; `svh` present; raw hex in `styles.css`: none; `transition:` in `styles.css`: none; page plus stylesheet 31 KB.

Contrast: every pairing in the table above computed from the token values; none below 4.5 as text.

Checker output, pasted from the run of 2026-09-11 (`python3 0_plan/tools/check-mocks.py 0_plan/mockups/M03-navy-thesis` and `python3 1_spec/tools/check-claims.py 0_plan/mockups/M03-navy-thesis/index.html`):

```
## M03-navy-thesis: 36 pass, 0 fail

check-mocks: OK
```

```
## 0_plan/mockups/M03-navy-thesis/index.html
| Figure on the page | Register row | Occurrences | Status |
|---|---|---|---|
| "designed for students in the 90th+ percentile" | CR-011 | 4 | Unverified, public |
| "$10,400/year — GT Anywhere annual tuition, fully or partially covered | CR-021 | 1 | Unverified, public |
| Four in-person intensive weekends a year in Georgetown (four named 202 | CR-032 | 4 | Unverified, public |
| Georgetown mornings: "two 50-minute blocks and one 25-minute block wit | CR-033 | 2 | Unverified, public |
| GT Anywhere mornings: "two to three hours of 100% cognitive load" (aca | CR-034 | 1 | Unverified, public |
| Guides hold weekly one-to-one check-ins with each student ("Academic A | CR-035 | 2 | Unverified, public |
  NOTE unverified rows on the page (allowed in mocks, blocked for production): ['CR-011', 'CR-021', 'CR-032', 'CR-033', 'CR-034', 'CR-035']

check-claims: OK
```

Not done here, for the director's pass: focus-ring screenshots on navy and on the logo plate (the runner has no focus capture yet), a forced-colours render, the 200 percent zoom row beyond V19's viewport stand-in, and the critics' scoring.
