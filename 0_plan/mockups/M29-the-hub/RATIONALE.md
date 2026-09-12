# M29 "The Hub", rationale

| Field | Value |
|---|---|
| Mock | `0_plan/mockups/M29-the-hub/` — a stage R1 **concept board**: first screen plus the comparison band, not a full sections 0 to 8 mock |
| Brief | `0_plan/kb/briefs/M26-M31-wave.md`, under `0_plan/kb/briefs/CONTRACT.md` v2.1 |
| Design library | insp-onepersonteam Diagram White |
| Runner | `node 0_plan/tools/shots.mjs 0_plan/mockups/M29-the-hub` — **all required rows pass** |

## Direction

Make the architecture explicit rather than beautiful: two bordered cards joined to a shared bracket, so 'one school, two ways in' is a diagram read in one look.

## h1

The h1 is the umbrella sentence from `copy.md` section 1, verbatim and unanimated. It is the only h1.

## Decisions applied

| id | How it is applied |
|---|---|
| MN-18 | **V11 (lockup suffix swap) is adopted with a condition**: it is provisional until a board is promoted to a full page and passes a full run. **V12 (mark assembly) is refused**, so no board in this wave rotates the mark and M26's timed variant was retired rather than shipped |
| DD-21 | The doors are a `<ul>`. Honest limit: the bracket arms and the mobile order are written with school-specific selectors, so a third school needs new rules — see Departures |
| CONTRACT v2.1 §3, "Nesting is hierarchy" | The two schools are symmetric and unnested. Bracket: 359px arms (the 1px card borders reduce the positioning box), 32px drops, centres 360 and 1080, mirrored (measured) |
| CONTRACT v2.1 §3, 3:1 rule | Every drawn line is `--color-border-strong` (#857f7b) at **full opacity**. `--color-border` (1.56) and the accent (2.38) never carry the drawing |
| MN-10, MN-16 | Transform and opacity only; zero layout shift — the suffix box reserves the widest word, so a swap cannot move the page |
| MN-11 | `prefers-reduced-motion` sets every duration to `--duration-none`; every state stays reachable |
| MN-12 | The swap is reachable by keyboard at every width, never hover-only |
| REQ-022 | No figure outside `copy.md`: 90th percentile, $10,400, four weekends, 9 to noon, two to three hours, weekly |

## Motion spec

Suffix swap on hover and `:focus-visible`; the terminal scales on hover. The arms themselves never move.

| Beat | Trigger | Property | Duration | Easing | Reduced motion |
|---|---|---|---|---|---|
| Suffix swap | hover or `:focus-visible` on a door CTA | `opacity`, `translateY(4px)` | `--duration-base` 200ms | `--ease-out` | `--duration-none`, state still changes |
| Terminal emphasis | hover on a door CTA (desktop only) | `transform: scaleY(1.25)` | `--duration-base` 200ms | `--ease-out` | `--duration-none` |

Terminals: yes, `scaleY(1.25)` on hover, 200ms `--ease-out` (measured 0.2s). Corona: no.

**Resolution order.** Hover clears every suffix word before showing its own, so a pointer over one door
while the other holds keyboard focus cannot render two words stacked in the same grid cell. That defect
was live until Astra and a browser check found it together.

## Assets

`../shared/img/gt-school-logo-h.svg` (header, real mark, never redrawn) and `../shared/img/gt-icon.svg`
(stage, `alt=""` and `aria-hidden` because the header already names the brand). No photographs:
DD-42/RF-25 hold every image behind Nari's written permission.

## Departures

| Departure | Reason |
|---|---|
| The stage lockup is typographic, not an SVG (DD-19) | The suffix must change, and a word inside a flat SVG cannot be. It is set in the brand's own system — mark, `GT` navy 700, suffix `--color-accent-text` 400, lowercase — and the header keeps the real `gt-school-logo-h.svg`, so rule 16 holds. **Honest correction:** stacking and crossfading SVG variants would also work, so live text is a design choice, not a technical necessity |
| **"GTgeorgetown" is not an approved school identity** | The deck names the school "Georgetown Campus", and only a GT Anywhere lockup exists as an asset. The suffix cycle is Johnny's explicit brief. **Flagged for Nari and Holly before any board is promoted** |
| Values outside the token set | Lockup `line-height: 1.1` and its tracking; bespoke mark sizes (44/56/88/104px); the corona/bracket hairline at 1.5px. None is in `tokens-v2.css`; each is geometry rather than a design token, and none introduces a colour |
| Compact landscape (V10) | The name and supporting line are hidden rather than moved below the CTAs as CONTRACT §2 recipes, and the h1 steps down one token. Both are needed to clear 318px |
| R1 scope | The board ends after the comparison band: no proof strip, application steps, secondary CTAs, current-families block or footer. Declared, not accidental |

## Flagged slots

Q-007 application steps and Q-017 logistics are absent because their sections are outside R1 scope.
**Q-011 (tuition) and Q-013 (after 8th grade) are present**, carrying the deck's agreed wording in the
comparison band. Q-019 outcome figure and Q-033 accreditation appear nowhere, by decision.
CR-011, CR-021, CR-022 and CR-032 to CR-035 are all "Unverified, public".

## Parent questions

| # | Parent question | This board |
|---|---|---|
| 1 | What is GT School? | Answered: the umbrella sentence |
| 2 | Who is it for? | Answered: "selective ... gifted and talented" in the sentence; the 90th percentile bar in the comparison band |
| 3 | In person or online, and where? | Answered: the two doors with place and format |
| 4 | What is the same and what differs? | Answered: the nine comparison rows |
| 5 | What does it cost? | Answered: the "Tuition and access" row |
| 6 | How do I apply? | **Deferred** — the application-steps section is outside R1 scope; each door CTA is one click to its school site |
| 7 | Accredited, and the outcomes? | **Deferred** — the proof strip is outside R1 scope, and no outcome figure exists to show (Q-019, Q-033) |
| 8 | How do I reach a human? | Answered in one click: "Contact admissions" in the header |

## Self-check

`grep -c "<form"` = 0. `grep -c "<script"` = 1 (JSON-LD only). No external requests beyond
`../shared/*`. Copy verbatim from `copy.md`, including "Skip to main content" and the deck's row order.
Skip and compare controls now meet the 44px target the runner does not police. Both door CTAs sit above
the fold at every runner row.
