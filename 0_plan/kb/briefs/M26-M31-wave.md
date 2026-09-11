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
| Wirey brain morphs into the logo | The wire, and the transformation | The mark is **already an atom of crossing orbits**. The wire is the brand's own geometry, so nothing is morphed: a filled 4-path SVG cannot morph without a JS library, which rule 2 forbids. A brain also makes an implicit cognitive-gain claim next to three unverified speed claims (REQ-022) |
| The logo animates on entry | One 300ms settle, in the timed variant only | MN-02 and runbook section 7: nothing animates the LCP element before first paint; the README already logs the hero entrance as a Core Web Vitals defect (REQ-073) |
| Wordmark spins through three names | The suffix swap, as the **choice mechanism** | MN-01 and MN-08 allow motion that serves orientation or choice and forbid signature moments. Driving the swap from the door the parent is considering converts a brand film into a wayfinding cue |
| Georgetown lower-left, Anywhere lower-right | Two mirrored equal arms | DD-21 requires N campuses. CONTRACT section 3 "Nesting is hierarchy" forbids drawing the two schools as rings or nested shapes |
| — | Every drawn line at `--color-border-strong` | CONTRACT section 3: a line carrying the argument needs 3:1. The accent measures 2.38 on cream and already failed in M24 |

## Gate

Both moves are outside CONTRACT section 6's table, which says a new move is a **D-031 proposal first**.
This wave is that proposal:

| Move | Definition | Trigger | Budget | Reduced motion |
|---|---|---|---|---|
| V11 lockup suffix swap | The orange suffix of the GT lockup swaps to the school the reader is considering | hover, `:focus-visible`, or `:target` | 200ms, opacity + 4px rise, transform and opacity only, zero layout shift (the box reserves the widest word) | `--duration-none`; the state still changes |
| V12 mark assembly | The mark rotates -18deg to 0 once on load | page load, once | 300ms `--ease-out`; **departs from MN-02** | no animation; final state painted |

D-039 (scripts) stays escalated: every board here is CSS-only, so none of them depends on it.

## The six boards

| ID | Name | Library language | The structural question it answers |
|---|---|---|---|
| M26 | The Mark | `insp-tsai2020` + the estate's atom | Does the mark plus a symmetric bracket read as one school with two ways in, and scale to a third? **Ships as an A/B pair** (`index.html` interactive, `index-timed.html` timed) so the motion model is tested with everything else held constant |
| M27 | One Mark | `insp-palebeat` | Does maximum restraint still route a parent in ten seconds? |
| M28 | The Weave | `insp-lineweave` | Does "wirey" survive as a hairline weave rather than a brain? |
| M29 | The Hub | `insp-onepersonteam` | Does making the architecture explicit beat making it beautiful? |
| M30 | Constant GT | `insp-outship` | Can the lockup alone carry it, with no drawn stage? |
| M34 | The Tour | `insp-cloudstudio` | Does reader-stepped sequencing beat a timeline? |

## Stage and scope

Stage R1 concept boards: header, h1, provenance, doors, compare anchor, then the comparison band.
Sections 4 to 8 are out of scope until a direction is chosen and promoted to a full R2 mock.

## Acceptance

`node 0_plan/tools/shots.mjs 0_plan/mockups/<folder>` must report "all required rows pass", and each
board's `RATIONALE.md` motion table must match what the browser actually animates. A board whose
declared beats and measured animations disagree fails regardless of how it looks.
