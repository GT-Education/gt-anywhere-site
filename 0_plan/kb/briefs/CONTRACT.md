# The shared contract every brief builds on (v2, 2026-09-11)

Each brief states only what is specific to its direction and cites this file for the rest. Astra checks this file once.

## 1. Files

| What | File | Status |
|---|---|---|
| Tokens | `0_plan/mockups/shared/tokens-v2.css` (layer 1 extracted, layer 2 proposed working defaults labelled by register row in `TOKENS-V2.md`) | Layer-2 tokens are PROPOSED (DD-38, DD-39, MN-16, RF-07, RF-53, RF-55, RF-58); a mock that uses one names the row in its rationale |
| Copy | `0_plan/mockups/shared/copy.md` v1.1: sections 0 to 8 fixed slots (the three repeated comparison cells and the tour label are DD-43 and R14, proposed); section 9 wayfinding vocabulary v2 (proposed for Nari) | A brief may use only words in sections 0 to 9 |
| Fonts | `0_plan/mockups/shared/fonts.css` (Literata 300/400/500/700, Inter Tight 300/400/500/700, Inconsolata 400/600 shipped; never ask Literata or Inter Tight for 600) | Fixed |
| Logos | `gt-school-logo-h.svg`, `gt-anywhere-logo-h.svg`, `gt-icon.svg` in `shared/img/`; GT Anywhere mark on a `--color-navy` panel | Fixed (checker R16) |
| Matrix | `0_plan/17-design-studio-runbook.md` section 4, 19 rows; fold rule on V1 to V17; V18 reflow; V19 zoom | Fixed |

## 2. Fold budgets (estimates until the build wave measures; every brief states its four-row budget in this form)

| Row | Viewport | Limit (height minus 24) | Required above the limit |
|---|---|---|---|
| V2 | 375 by 629 | 605px | Header, h1, provenance line, both door CTAs |
| V5 | 414 by 715 | 691px | Same |
| V14 | 1280 by 720 | 696px | Same |
| V16 | 1440 by 900 | 876px | Same |

Estimate method: header 56; h1 line count = ceil(132 characters / characters per line at the row's h1 size and column width); provenance one line at `--text-sm`; door block heights as the brief lays them out; gaps from the space tokens. A brief labels these "estimate"; the runner replaces them with measured bottoms (`qa/fold.md`).

## 3. Type roles (DD-38 option b, proposed working defaults)

| Role | Face and token | Note |
|---|---|---|
| h1 | Literata 400, `--text-3xl` (27 to 46px), `--leading-tight` 1.15, at most 35ch | DD-38 tests 300 against 400 on the fixed copy in the first build wave |
| Door name | Literata 400, `--text-xl` | |
| Prose (door lines, table cells, captions of more than one line) | Inter Tight 400, `--text-base`, `--leading-prose` 1.5 | Single-line strings keep `--leading-body` 1.25 |
| Labels and eyebrows | Inter Tight 500, `--text-xs` or `--text-sm`, uppercase, 0.06 to 0.08em tracking, `--color-text-muted` (on navy `--color-text-muted-on-dark`) | K12 records Inconsolata uppercase as the live utility face; a brief that keeps it says so |
| Buttons | Inconsolata 600, `--text-btn`, minimum 44px target | The estate's button face (K12) |
| Figures | Inconsolata 600, `tabular-nums` | Only register figures |

## 4. Colour and focus

| Surface | Text | Muted | Primary CTA | Focus ring |
|---|---|---|---|---|
| `--color-bg`, `--color-surface`, `--color-anywhere-tint` | `--color-text` | `--color-text-muted` | `--color-navy` fill, `--color-on-navy` text | 2px `--color-focus` at 2px offset |
| `--color-navy` | `--color-on-navy` | `--color-text-muted-on-dark` (proposed) | `--color-on-navy` fill, `--color-text` text | 2px `--color-focus-on-dark` (proposed) at 2px offset |
| Element straddling light and navy | as its own surface | | | Two-colour ring: `--color-focus` inner, `--color-on-navy` outer (K3 section 5d) |
| Accent `--color-accent` | Never as small text on light; as text only `--color-accent-text` (proposed) or on navy where it passes 7.43 (K12 F92) | | | |

One accent use per screen (K3 section 5f). Gold is a surface or shape colour (RF-37).

## 5. Photographs (DD-42 option a, RF-25)

| State | Rule |
|---|---|
| Default (today) | No photograph on any mock. Fable viewed the candidate files on 2026-09-11: every photograph in `ASSETS.md` shows identifiable people, and the three files sometimes described as face-not-visible do not qualify (`georgetown-guide.webp` and `anywhere-slider-2.webp` show children's faces; `georgetown-dscf1931.webp` shows the lower half of a child's face). AD-11 covers child imagery whether or not a face is visible, so no file is usable before written permission |
| Photographed (after Nari's permissions and, for the doors, parity per DD-42) | Files and crops from the table below; each with a truthful one-sentence caption from `copy.md` section 9 |
| Slot rule (R13) | Display width in CSS px times DPR 2 must not exceed the source width: a 1,440 px source fills at most 720 CSS px; `georgetown-3915.webp` (600 px) at most 300 CSS px; `georgetown-dscf1931.webp` (900 px) at most 450 CSS px |

| File | Size | `object-position` at 16:9 | at 3:2 | at 4:5 | Subject kept |
|---|---|---|---|---|---|
| `georgetown-dscf1931.webp` | 900 by 675 | 50% 80% | 50% 70% | 50% 60% | Hands, marker and worksheet; the face leaves the frame at 16:9 |
| `georgetown-guide.webp` | 1440 by 960 | 50% 45% | 50% 50% | 35% 50% | The Guide at the whiteboard and the children at the tables |
| `anywhere-slider-2.webp` | 1080 by 722 | 50% 55% | 50% 50% | 45% 50% | The boards on the tables and the standing Guide |
| `georgetown-science.webp` | 1440 by 1208 | 50% 45% | 50% 45% | 50% 45% | The girl with the beaker, centre |
| `georgetown-presenting.webp` | 1440 by 960 | 50% 40% | 50% 45% | 55% 50% | The standing children and the laptop |
| `georgetown-3915.webp` | 600 by 360 | 50% 40% | 50% 40% | not used | Small file: thumbnails only |

## 6. Motion (MN-16, K4 section 8.1 as it stands)

| Move | Where a brief may use it | Rule |
|---|---|---|
| V1 door state, V3 focus, V7 disclosure | Anywhere | Instant (0 ms) |
| V2 door supporting line reveal | Doors, at 768 and above with `hover: hover`; always visible otherwise | 200 ms `--ease-out`, opacity and 4px rise; reserved line space so nothing shifts |
| V6 one-time section reveal | Third screen and later only; at most three per page | 300 ms `--ease-out`, opacity and 8px rise; needs the D-039 script; complete without it |
| V8 schedule or day diagram draw | Diagram segments, `scaleX`, at most five, 60 ms stagger | Needs the D-039 script; complete without it |
| V9 photo strip | User swipe only | No animation |
| V10 anchor scroll | In-page links | Native, inside `prefers-reduced-motion: no-preference` only |
| Anything else | Not available; a new move is a D-031 proposal first | |

Reduced motion: every duration 0 (`--duration-none`); every state visible (R8). Scripts and inputs: D-039 (proposed); until decided a mock ships its no-JavaScript state only.

## 7. Structure every mock keeps

Header (logo, "Current families", "Contact admissions", no menu, DD-12); h1; provenance line once; two doors with label, name, line and CTA, equal weight, both CTAs above the fold at V1 to V17; compare anchor ("Not sure which is right for your family? Compare the two.") before the table (checker R19); comparison table with repeated values (DD-43) and stacked cards below the measured breakpoint (R6); proof strip, exactly the four facts of `copy.md` section 4; sources line; application steps; secondary CTAs with `copy.md` section 6 labels; current families; footer with both logos and the facts block. Claims: only figures with a claims-register row, in the deck's own words (REQ-022; `check-claims.py`).
