# M26 to M30 and M34: the animated-lockup wave (Johnny, 2026-09-11)

> Renumbered 2026-09-11: the sixth board was built as M31, which the directions register had already
> given to "Our Story". The board moved to **M34**; nothing about it changed but its id.

Under `CONTRACT.md` v2.1 and runbook `0_plan/17-design-studio-runbook.md` sections 4, 6 and 7.

## Origin

Johnny asked for an animated hero built on the GT logo: it rolls in, reads first as a wirey brain,
becomes the mark, then the wordmark cycles Georgetown, Anywhere and GT School while the two schools
appear below with links to `gt.school` and `anywhere.gt.school`.

## What the brief became, and why

| Asked | Kept | Changed, and the binding reason |
|---|---|---|
| Wirey brain morphs into the logo | The wire, and the transformation | The mark is **already an atom of crossing orbits**. The wire is the brand's own geometry, so nothing is morphed: morphing is outside the transform-and-opacity-only contract. (Path count is not the reason; an earlier draft of this row claimed four paths required a JS library, which does not follow.) A brain also makes an implicit cognitive-gain claim next to three unverified speed claims (REQ-022) |
| The logo animates on entry | **Nothing.** MN-18 refused V12 and the timed variant was retired | MN-02 and runbook section 7: nothing animates the LCP element before first paint; the README already logs the hero entrance as a Core Web Vitals defect (REQ-073) |
| Wordmark spins through three names | The suffix swap, as the **choice mechanism** | MN-01 and MN-08 allow motion that serves orientation or choice and forbid signature moments. Driving the swap from the door the parent is considering converts a brand film into a wayfinding cue |
| Georgetown lower-left, Anywhere lower-right | Two mirrored equal arms | DD-21 requires N campuses. CONTRACT section 3 "Nesting is hierarchy" forbids drawing the two schools as rings or nested shapes |
| — | Every drawn line at `--color-border-strong` | CONTRACT section 3: a line carrying the argument needs 3:1. The accent measures 2.38 on cream and already failed in M24 |

## Gate: what is actually approved

D-031 reopened motion in general, and Johnny delegated the specific call on 2026-09-11. **MN-18
(`0_plan/07-design-decisions.md`) records the outcome, and it is narrower than an earlier draft of this
brief claimed:**

- **V11 lockup suffix swap — adopted with a condition.** It is provisional until one of these boards is
  promoted to a full page and passes a full checker run. R1 concept boards fail several checker rules by
  construction, because they are deliberately partial pages.
- **V12 mark assembly — refused**, on motion policy. M26 shipped a timed variant implementing it; that
  variant has been **retired** rather than carried, and the A/B comparison it was to enable cannot run
  until MN-18 is reopened.

D-039 (scripts) stays escalated and is not needed: every board is CSS-only.


| Move | Definition | Trigger | Budget | Reduced motion |
|---|---|---|---|---|
| V11 lockup suffix swap | The orange suffix of the GT lockup swaps to the school the reader is considering | hover, `:focus-visible`, or `:target` | 200ms, opacity + 4px rise, transform and opacity only, zero layout shift (the box reserves the widest word) | `--duration-none`; the state still changes |
| ~~V12 mark assembly~~ **REFUSED by MN-18** | Was: the mark rotates -18deg to 0 once on load | — | Refused on motion policy; the timed variant that implemented it was retired | — |

D-039 (scripts) stays escalated: every board here is CSS-only, so none of them depends on it.

## The six boards

| ID | Name | Library language | The structural question it answers |
|---|---|---|---|
| M26 | The Mark | `insp-tsai2020` + the estate's atom | Does the mark plus a symmetric bracket read as one school with two ways in, and scale to a third? Shipped as a single interactive board; the timed A/B partner was retired when MN-18 refused V12 |
| M27 | One Mark | `insp-palebeat` | Does maximum restraint still route a parent in ten seconds? |
| M28 | The Weave | `insp-lineweave` | Does "wirey" survive as a hairline weave rather than a brain? |
| M29 | The Hub | `insp-onepersonteam` | Does making the architecture explicit beat making it beautiful? |
| M30 | Constant GT | `insp-outship` | Can the lockup alone carry it, with no drawn stage? |
| M34 | The Tour | `insp-cloudstudio` | Does reader-stepped sequencing beat a timeline? Built as M31; the id collision was resolved to M34 and registered in `kb/DIRECTIONS.md` |

## Stage and scope

Stage R1 concept boards: header, h1, provenance, doors, compare anchor, then the comparison band.
Sections 4 to 8 are out of scope until a direction is chosen and promoted to a full R2 mock.

## The Georgetown lockup

No `GTgeorgetown` SVG exists in `shared/img/`. The stage lockup is therefore live text, set in the
brand's own system — mark, `GT` in navy, suffix in orange, lowercase — with the header keeping the real
`gt-school-logo-h.svg` so rule 16 holds. Declared as a DD-19 departure in every rationale.

**Two corrections to an earlier draft of this section.** It claimed live text was a technical necessity
because a word inside a flat SVG cannot be swapped. That is too strong: stacked SVG variants with
crossfaded wrappers, or inline SVG groups, would also work inside the same reserved grid. Live text is a
design choice. It also claimed the icon's four paths "require a JS library to morph"; path count is not
the reason. The real objection is that morphing is outside the transform-and-opacity-only contract.

A second question sits on top of this one: **"GTgeorgetown" is not an approved school identity.** The
deck calls the school "Georgetown Campus", and only a GT Anywhere lockup exists as an asset. The suffix
cycle is Johnny's explicit brief, so it is built and flagged for Nari and Holly, not quietly dropped.

## The director's recommendation (Fable, 2026-09-11)

G1 is Nari's gate: she picks the direction in writing. This is the recommendation she picks against,
not a substitute for it.

**Take M26 forward, in its interactive form.** Three reasons, in order:

1. It is the only board where the real mark is the hero, so the brand does the work rather than a
   drawn device standing in for it. The mark already being an atom of crossing orbits is the whole
   idea; nothing had to be invented.
2. Its interaction is the one MN-18 actually adopted. The A/B pair that would have tested the timed
   model against it was retired when MN-18 refused V12; if Johnny wants that comparison, MN-18 is the
   row to reopen, and the retired variant is recoverable from git history.
3. Its bracket is the cleanest answer to the nesting rule: two mirrored equal arms, symmetric and
   unnested. **It is not yet an answer to DD-21** — the arms and the mobile ordering use
   school-specific selectors, so a third campus needs new rules, not just another list item. That work
   is real and belongs to whichever direction is promoted.

**If M26's stage reads as too much, M30 is the fallback.** No drawn stage at all: the lockup line is
the hero and the type carries the brand architecture alone. It is the least likely of the six to date.

**M28 is the one to retire first.** The corona is handsome but decorative: it serves neither
orientation nor choice, which is the test runbook section 7 sets for motion, and it is the only board
whose hero device would have to justify itself again at every later review.

What would change this recommendation: if the timed variant measurably beats the interactive one with
parents, the ordering flips and M26-timed leads with MN-02 formally amended rather than departed from.

## Verification evidence (2026-09-11, browser-driven)

The runner measures geometry. It does not exercise the interaction, so these were driven by hand in a
browser on a server started for the purpose. What was actually proven, as opposed to asserted:

| Claim | How it was checked | Result |
|---|---|---|
| Suffix swaps on keyboard | Real `Tab` to a door CTA, not programmatic `.focus()` | `:focus-visible` matches, `:has()` fires, suffix swaps |
| Suffix swaps on hover, and settles back | Hover a door, wait past the 200ms transition, then move the pointer away | Exactly one word on hover; returns to `school` on leave. All five interactive boards |
| Hover and focus cannot stack | Keyboard focus on one door, pointer on the other | Exactly one word visible. This was a live defect until the cascade was rewritten |
| M34's stepper actually works | `:target` navigation, checking the DOM relationship rather than line order | Anchors are siblings of `.stage`; suffix swaps; active dot scales 1.4 |
| Reduced motion | `emulateMedia({reducedMotion:'reduce'})` at 1440 | Every transition 0s **and** the state still changes, on both hover and `:target` |
| Bracket symmetry | Measured boxes at 1440 | M26/M34 arms 360px, M29 359px (its card borders reduce the box); drops 32px; centres 360/1080; mirrored |

**Two false alarms, recorded because the method matters.** A programmatic `.focus()` showed no swap —
that is `:focus-visible` heuristics, not a defect. Sampling opacity 60ms into a 200ms fade showed two
words at once and nearly triggered a "fix" to working code; the rules were correct and the sample was
early. Both were caught by measuring the rules rather than trusting the first reading.


## Ensemble record

| Pass | File | Outcome |
|---|---|---|
| Fable draft | this brief and the six boards | Six R1 concept boards, runner green |
| Astra pass 1 | `0_plan/ensemble/critic-astra-M26-M35-wave.md` | **26 failures, 3 blocking.** The brief authorised V12, which MN-18 refuses; M34's `:target` anchors sat in `<header>` so its defining interaction could never match; M28's corona used the right token at .38 opacity, composited ≈1.53:1. All three real, all three fixed |
| Astra pass 2 | `0_plan/ensemble/critic-astra-M26-M35-wave-pass2.md` | **19 failures, all three P1s closed.** Found a fourth P1 I had missed: drawings crossing first-screen copy — M28's corona between 700 and 760px height and at desktop, M26/M29/M34's bracket through the provenance line at 1280x720. Fixed, plus the V10 h1 token and a blunt `!important` of mine that was silently overriding every row-specific value in M27 |
| Astra pass 3 | `0_plan/ensemble/critic-astra-M26-M34-wave-pass3.md` | Verifies the pass-2 fixes and the M34/M35 reconciliation |

**What the review caught that the runner never could.** The runner measures geometry and reports green
on a board whose interaction is entirely dead: M34 passed every fold row while its stepper could not
change a single word. It also passed M28 in every state of a drawing that ran through the headline, and
passed skip and compare controls at 20 to 43px because it only fails undersized *door* CTAs. Geometry
measurement and design review are not substitutes for each other.

**A duplicate the process created.** The board was built as M31, lost to a concurrent session's id
claim, rebuilt by me as M35, and had meanwhile been adopted and registered by that session as M34. For
a while the wave carried two copies of one direction, one of them broken. M34 is canonical; the
corrected content was ported onto it and M35 removed.


## Acceptance

`node 0_plan/tools/shots.mjs 0_plan/mockups/<folder>` must report "all required rows pass", and each
board's `RATIONALE.md` motion table must match what the browser actually animates. A board whose
declared beats and measured animations disagree fails regardless of how it looks.
