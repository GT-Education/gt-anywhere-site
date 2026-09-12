# M34 "The Tour", rationale

| Field | Value |
|---|---|
| Mock | `0_plan/mockups/M34-the-tour/` — a stage R1 **concept board**: first screen plus the comparison band, not a full sections 0 to 8 mock |
| Brief | `0_plan/kb/briefs/M26-M31-wave.md`, under `0_plan/kb/briefs/CONTRACT.md` v2.1 |
| Design library | insp-cloudstudio Pastel Hard-Cut |
| Runner | `node 0_plan/tools/shots.mjs 0_plan/mockups/M34-the-tour` — **all required rows pass** |

## Direction

The reader steps the sequence instead of watching it. Three dot controls move the lockup suffix; nothing is on a timer, so there is no film to sit through and no pause control to need. Built as M31; the id collision was resolved to M34 by a concurrent session, which also registered it in `kb/DIRECTIONS.md`. This file carries the corrected board.

## h1

The h1 is the umbrella sentence from `copy.md` section 1, verbatim and unanimated. It is the only h1.

## Decisions applied

| id | How it is applied |
|---|---|
| MN-18 | **V11 (lockup suffix swap) is adopted with a condition** — provisional until a board is promoted to a full page and passes a full run. **V12 (mark assembly) is refused**, so nothing here rotates the mark; M26's timed variant was retired rather than shipped |
| DD-38, DD-39 | Layer-2 token roles (type roles, colour roles including `--color-accent-text` and `--color-border-strong`) are proposed values used as the contract directs |
| RF-55, RF-58 | Single-line strings (labels, names, buttons) take the tighter leading; multi-line prose takes `--leading-prose` 1.5 |
| CONTRACT v2.1 §3, "Nesting is hierarchy" | The two schools are symmetric and unnested. Bracket: 360px arms, 32px drops, centres 360/1080, mirrored (measured). Hidden at or below 760px tall |
| CONTRACT v2.1 §3, 3:1 rule | Every drawn line is `--color-border-strong` (#857f7b) at **full opacity** (3.633:1 on the page ground). `--color-border` (1.56) and the accent (2.38) never carry the drawing |
| MN-10, MN-16 | Transform and opacity only; zero layout shift in settled states — the suffix box reserves the widest word |
| MN-11 | `prefers-reduced-motion` sets every duration to `--duration-none`; verified in a browser that durations reach 0s **and** the state still changes |
| MN-12 | The swap is reachable by keyboard at every width, never hover-only |
| DD-21 | The doors are a `<ul>`, but see Departures: the implementation is **not** yet N-campus ready |
| REQ-022 | No figure outside `copy.md` |

## Motion spec

| Beat | Trigger | Property | Duration | Easing | Reduced motion |
|---|---|---|---|---|---|
| Suffix swap to a school | `:target` via a dot control, or `:focus-visible` on a door CTA, at any width | `opacity` 0 to 1 **and** `translateY(4px)` to 0 | `--duration-base` 200ms | `--ease-out` | `--duration-none`; the state still changes |
| Suffix returning (to `school`, or to an active step) | the trigger above ending | `opacity` only — the resting word carries no translation, so it fades without moving | `--duration-base` 200ms | `--ease-out` | `--duration-none` |
| Active step dot | `:target` | `transform: scale(1.4)` over 200ms. The navy fill is a colour change and is **instant**, per the vocabulary | `--duration-base` 200ms (scale only) | `--ease-out` | `--duration-none` |

This board has **no hover swap** by design: adding one would duplicate M26 and blur the comparison it exists to make. The dot controls are hidden at or below 760px tall, where keyboard focus remains the route.

Mark sizes: 56px, 88px from 768px, hidden at or below 760px tall (which includes V10). Terminals: Static terminals exist but are never animated.

**Resolution order.** This board has no hover swap. Keyboard focus clears every suffix word before
showing its own, so focus takes precedence over a step left active by `:target` — `:where()` drops the
ID's specificity to make that possible. Consequence worth stating: ending focus returns to whichever
step is still targeted, **not necessarily to `school`**. During the declared 200ms crossfade the
outgoing and incoming words overlap; that is the transition, not a defect.

## Assets

`../shared/img/gt-school-logo-h.svg` (header, real mark, never redrawn) and `../shared/img/gt-icon.svg`
(stage, `alt=""` and `aria-hidden` because the header already names the brand). No photographs:
DD-42/RF-25 hold every image behind Nari's written permission.

## Departures

| Departure | Reason |
|---|---|
| The stage lockup is typographic (DD-19) | A design choice, not a technical necessity: stacked SVG variants with crossfaded wrappers would also work inside the same reserved grid. Live text was chosen because it needs no new asset and swaps with one rule. It is **not** an accessibility gain: the stage lockup is `aria-hidden`, and the header lockup carries the accessible name. The header keeps the real `gt-school-logo-h.svg`, so rule 16 holds |
| **"GTgeorgetown" is not an approved school identity** | The deck names the school "Georgetown Campus", and only a GT Anywhere lockup exists as an asset. The suffix cycle is Johnny's explicit brief. **Flagged for Nari and Holly before promotion** |
| **DD-21 is not satisfied in the implementation** | The bracket arms and the mobile ordering use school-specific selectors, so a third campus needs new rules, not just another list item. The markup is a list; the geometry is not yet general |
| Values outside the token set | Lockup `line-height: 1.1` and its tracking; the 1.5px hairline; the mark sizes above; the 9px dot and its 1.4 scale. Each is geometry rather than a design token, and none introduces a colour |
| Compact landscape (V10) | The name and supporting line are hidden rather than moved below the CTAs as CONTRACT §2 recipes, and the h1 steps to `--text-xl` — the token the contract permits on that row |
| R1 scope | The board ends after the comparison band: no proof strip, application steps, secondary CTAs, current-families block, footer or paired footer logos, and no repeated doors or TEFA module. Declared, not accidental. The checker's landmark, event-coverage and paired-logo failures all follow from this |
| Control labels | "Show GT School", "Show Georgetown Campus", "Show GT Anywhere" and the "Step through the schools" navigation label have no entry in the deck, and the step links carry no `data-event`. Both need Nari before promotion |

## Flagged slots

Q-007 is flagged in the deck for the Admissions wording, which **is present** in the comparison band;
the dedicated steps section is out of scope. Q-017 logistics is absent with its section. **Q-011
(tuition) and Q-013 (after 8th grade) are present**, carrying the deck's agreed wording. Q-019 outcome
figure and Q-033 accreditation appear nowhere, by decision. CR-011, CR-021, CR-022 and CR-032 to CR-035
are all "Unverified, public".

## Parent questions

| # | Parent question | This board |
|---|---|---|
| 1 | What is GT School? | Answered: the umbrella sentence |
| 2 | Who is it for? | Answered: "selective ... gifted and talented" in the sentence; the 90th percentile bar in the comparison band |
| 3 | In person or online, and where? | Answered: the two doors with place and format |
| 4 | What is the same and what differs? | Answered: the nine comparison rows, in the deck's order |
| 5 | What does it cost? | Answered: the "Tuition and access" row |
| 6 | How do I apply? | **Deferred** — the application-steps section is outside R1 scope; each door CTA is one click to its school site. The Admissions row does carry the deck's Q-007-flagged process wording |
| 7 | Accredited, and the outcomes? | **Deferred** — the proof strip is outside R1 scope, and no outcome figure exists to show (Q-019, Q-033) |
| 8 | How do I reach a human? | Answered in one click: "Contact admissions" in the header |

## Self-check

`grep -c "<form"` = 0. `grep -c "<script"` = 1 (JSON-LD only). No external requests beyond
`../shared/*`. Copy verbatim from `copy.md`, including "Skip to main content" and the deck's row order.
Skip and compare controls meet the 44px target the runner does not police. Both door CTAs sit above the
fold at **every required fold row** (V18 is a 256px reflow test, where offscreen CTAs are expected).
