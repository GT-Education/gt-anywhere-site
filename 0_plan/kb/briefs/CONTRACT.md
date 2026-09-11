# The shared contract every brief builds on (v2.1, 2026-09-11, corrected after Astra E5b)

Each brief states only what is specific to its direction and cites this file for the rest.

## 1. Files

| What | File | Status |
|---|---|---|
| Tokens | `0_plan/mockups/shared/tokens-v2.css` (layer 1 extracted; layer 2 proposed working defaults, labelled by register row in `TOKENS-V2.md`) | Layer-2 tokens are PROPOSED (DD-38, DD-39, MN-16, RF-07, RF-53, RF-55, RF-58); a mock that uses one names the row in its rationale |
| Copy | `0_plan/mockups/shared/copy.md` v1.1: sections 0 to 8 fixed slots (the repeated comparison cells and the tour label are DD-43 and R14, proposed); section 9 wayfinding vocabulary v2 (proposed for Nari) | A brief may use only words in sections 0 to 9 |
| Fonts | `0_plan/mockups/shared/fonts.css` (Literata 300/400/500/700 with italics, Inter Tight 300/400/500/700, Inconsolata 400/600; never ask Literata or Inter Tight for 600) | Fixed |
| Logos | `gt-school-logo-h.svg`, `gt-anywhere-logo-h.svg`, `gt-icon.svg` in `shared/img/`; the GT Anywhere mark (white lettering) only on a `--color-navy` panel; the GT School mark only on a light panel (`copy.md` section 8) | Fixed (checker R16) |
| Matrix | `0_plan/17-design-studio-runbook.md` section 4, 19 rows; the fold rule applies to V1 to V17 except V9 (an emptiness test); V18 reflow; V19 zoom | Fixed |

## 2. Fold budgets: the method and the shared numbers (estimates until the runner measures)

| Row | Viewport | Limit (height minus 24) | h1 size from the clamp | h1 column width | Characters per line (Literata 400 mean advance 0.512 em) | h1 lines for the 132-character sentence | h1 height at leading 1.15 |
|---|---|---|---|---|---|---|---|
| V2 | 375 by 629 | 605px | 27.27px | 327px (24px margins) | 23 | 6 | 188px |
| V5 | 414 by 715 | 691px | 27.95px | 366px | 25 | 6 (5 if the wrap falls kindly; budget 6) | 193px |
| V14 | 1280 by 720 | 696px | 43.19px | 8 columns of 1184 with 32px gutters, 779px | 35 | 4 | 199px |
| V16 | 1440 by 900 | 876px | 46.00px | 8 columns of 1376 (32px margins), 907px | 38 | 4 | 212px |

Required above the limit at every row: header, h1, provenance line, both door CTAs. Estimate method: header 56; the h1 height above; provenance one line at `--text-sm` (22px); door blocks as laid out; gaps from the space tokens (`--space-4` 16, `--space-5` 24, `--space-6` 32, `--space-7` 48). Every brief states its own four-row sum with these figures and labels them estimates; the runner replaces them with measured bottoms (`qa/fold.md`).

**Compact door rule (phone rows).** On viewports under 700px tall, the two doors render as compact blocks (label 16 + 8 + name 30 + 12 + CTA 44 = 110px each) and both door lines follow the second CTA as two short paragraphs, each opened by its door name as a run-in label (a fixed slot reused, no new words), so neither line sits between the CTAs. Shared M01-form sum at V2: 56 + 16 + 188 + 12 + 22 + 24 + 110 + 12 + 110 = 550 of 605; the lines then start at 566 and end near 672, below the fold and above the compare anchor. At V5 (715px tall) the lines return above the CTAs (two lines at 18px and 1.5 = 54 each): 56 + 16 + 193 + 12 + 22 + 24 + 164 + 12 + 164 = 663 of 691. At V14 with the doors side by side (label 16 + 8 + name 34 + 12 + line 54 + 16 + CTA 44 = 184): 56 + 32 + 199 + 12 + 22 + 32 + 184 + 24 + compare anchor 28 = 589 of 696. At V16: 56 + 40 + 212 + 16 + 22 + 40 + 184 + 32 + 28 = 630 of 876. Briefs whose first screen differs from this form state their own sums with the same h1 figures.

**Phone-landscape recipe (V10, 750 by 342, limit 318).** The fixed sentence wraps to about 3 lines at 750 wide (49 characters per line at 27.95px), so the row is feasible only with a landscape-specific compact layout: section padding `--space-3` (8px), header 56, h1 3 lines 97, provenance 22, then the two compact door blocks side by side (label, name, CTA; 110px) with their lines below the fold: 56 + 8 + 97 + 8 + 22 + 12 + 110 = 313 of 318. Apply it with a media query on height (`max-height: 400px`) and width (`min-width: 600px`); measured by the runner like every row. Where the direction's first screen cannot reach 318 at the h1's clamp size (a stacked ledger, a letter column, a statement block), the h1 may step down one token to `--text-xl` on that row only, as M03 did, declared in the rationale as a departure; V10 stays a required row (runbook section 4), because a phone held sideways is a real reader. Rows measured on the first build (M12): the h1 wraps to 7 lines at 360 to 393 wide, 6 at 402 to 430, 5 at 768, 4 at 834 and above, so the contract's 6-line estimate at V2 is one line optimistic; the compact door rule still fits (M12 measured 590 of 605 at V2).

## 3. Type roles (DD-38 option b, proposed working defaults)

| Role | Face and token | Note |
|---|---|---|
| h1 | Literata 400, `--text-3xl` (27.27 to 46px), `--leading-tight` 1.15, at most 35ch | DD-38 tests 300 against 400 on the fixed copy in the first build wave |
| Door name | Literata 400, `--text-xl` | |
| Multi-line prose: door lines, table cells, captions, quotes, answers | Inter Tight 400 (Literata where a brief says so), `--text-base`, `--leading-prose` 1.5 | Every brief uses 1.5 for door lines; RF-58's 1.25 applies to single-line strings only (labels, names, eyebrows, buttons) |
| Labels and eyebrows | Inter Tight 500, `--text-xs` or `--text-sm`, uppercase, 0.06 to 0.08em tracking, `--color-text-muted` (on navy `--color-text-muted-on-dark`) | K12 records Inconsolata uppercase as the live utility face; a brief that keeps it says so |
| Buttons | Inconsolata 600, `--text-btn`, minimum 44px target, **a uniform `--radius-md` corner on all four sides (DD-47)** | The estate's button face (K12). On the corner: the destination site ships three different application-button constructions, so there is no single silhouette to match. Its first-screen and pre-footer cards compose a background from a filler at `8px 8px 0 0` and a corner wrap at `0 0 8px`, which together draw a cut lower-right corner; its footer button clips a 14px polygon; its desktop header button, the control a parent clicks to apply, keeps four rounded corners. The uniform corner is therefore one of the estate's own shapes and the one on its application control, and it is what DD-46 already adopted. `border-radius: 8px 8px 0 0` is **not** that cut corner: it is the filler's radius alone and renders a square lower-right corner, which matches neither the estate nor this contract. A direction that wants to explore maximum continuity may depart, but must draw the composed shape rather than the filler radius, and must name the departure |
| Figures | Inconsolata 600, `tabular-nums` | Only register figures, in the deck's words |
| **A line that carries the argument must reach 3:1** | Where a direction's hero is a drawing, every hairline, connector and node edge in it is a meaningful graphical object under WCAG 1.4.11 and must reach 3 to 1 against what sits behind it. `--color-border` measures 1.56 on the page ground, 1.42 on the surface and 1.44 on the tint, so it is a decoration token and cannot carry a diagram; `--color-border-strong` measures 3.63, 3.31 and 3.35, and `--color-accent-text` 5.14. The accent itself is 2.38 on cream, which K12 F88 already records as a failure, so an accent-coloured connector run does not pass on a light ground | Three mocks shipped this defect independently before it was written down: M10's rings at 1.87, 1.49 and 1.21, M24's accent fills at 2.38, and M23's whole connector diagram. Each argued that no single border was asked to carry meaning on its own, which is true of a decorated page and false of a drawn one |
| **A drawn object may state a proportion only where that exact proportion has a claims-register row** | The hard rule is that no figure reaches a surface without a register row, and a drawing that shows a part of a whole is making the same claim as a printed percentage. Nine tiles with four filled is a completion figure of about 44 per cent whether or not a digit appears. Test every object this way: if a reader can count it, it is a number. A count with no denominator is not a proportion and is allowed, and a proportion that matches a register row exactly is allowed with the row cited in the rationale | From the M24 critic, which found the mastery object drawing four of nine against no row, and noted that the source page it borrowed from fills one tile and captions it with its unit and its meaning, so the shape was borrowed and the key dropped |
| **Nesting is hierarchy** | Do not draw the two schools as one shape inside another. Concentric rings put one way to attend inside the other, and no adjustment of radii fixes it, because the relation is in the nesting rather than the sizes. Use symmetric, unnested forms for anything that stands for the two schools: equal arms, mirrored angles, identical terminals | From the M24 critic. Forced colours settles the same object a second way: with the tints removed, concentric rings with a filled centre read as a target, and an object whose only defence against a misreading is a colour the user agent may remove is not carrying its meaning in its geometry |
| **Literata overflows its line box** | Literata's content box is **1.485 em**, from `unitsPerEm` 1000 with hhea 1177 and -308 and `USE_TYPO_METRICS` set, so against a 1.15 line box it stands **0.1675 em proud on each side**: 7.71px at 46px, 5.70px at 34px, 4.69px at 28px. Any element drawn behind or beside a Literata heading needs at least that much clearance, or a ground-coloured spread of 0.2em, before it can be called clear of the type | Read from the font binary and confirmed in the browser by the M21 critic, whose grid clearance rests on it. It generalises: Inconsolata SemiBold is 1.049 em and Inter Tight Regular 1.210 em, so **Literata is the only one of the three faces that ever overflows its line box**, and it does so at both `--leading-tight` and `--leading-body`. Every direction that sets a Literata heading over a drawn or tinted ground carries the same invisible overhang. What overflows is the font box rather than the ascender: measured ink stops inside the block at the top, and the ink that actually clears a block edge is the descender on the last line |

## 4. Colour and focus (K3 sections 5c to 5g; DD-39 proposed roles)

| Surface | Text | Muted | Primary CTA | Focus ring |
|---|---|---|---|---|
| `--color-bg`, `--color-surface`, `--color-anywhere-tint` | `--color-text` | `--color-text-muted` (6.25 on `--color-bg`) | `--color-navy` fill, `--color-on-navy` text (14.58) | 2px `--color-focus` at 2px offset (K3 section 5d) |
| `--color-navy` | `--color-on-navy` (14.58) | `--color-text-muted-on-dark` (proposed, 7.81) | `--color-on-navy` fill, `--color-text` text | K3's two-colour ring: 2px `--color-navy` inner band and 2px `--color-on-navy` outer band (14.58 between the bands, so one band passes on any surface, K3 F10, section 5d); forced-colours fallback per K3 F38 |
| Element straddling light and navy (logo plate, docked card) | as its own surface | | | The same two-colour ring |
| Accent `--color-accent` | Never as small text on light surfaces (2.17 to 2.38). As text only `--color-accent-text` (proposed, 5.14 on `--color-bg`, 4.68 on `--color-surface`) or on navy at 24px and above or 18.66px bold (5.83, K3 section 5e rule 1) | | | |

One accent use per screen (K3 section 5f). Gold is a surface or shape colour (RF-37); `--color-text` on the accent fill passes at 7.43 (K12 F92).

## 5. Photographs (DD-42 option a, RF-25, AD-11)

| State | Rule |
|---|---|
| Default (today) | No photograph on any mock. Every photograph in `ASSETS.md` shows identifiable children (re-checked 2026-09-11; the three files v1 called face-not-visible show at least a partial face), and AD-11 covers child imagery whether or not a face is visible, so no file is usable before written permission |
| Photographed (after Nari's permissions and, for the doors, parity per DD-42) | Files and crops from the table below, each with a truthful one-sentence caption from `copy.md` section 9 |
| Delivery (R13) | Crop-aware: the displayed CSS width times DPR 2 may not exceed the source width that survives the crop. Maxima at DPR 2: 16:9 and 3:2 crops use the full source width where the source is wider than the ratio requires; 4:5 crops keep a narrower slice (figures below) |

| File | Size | Maximum CSS width at DPR 2 (16:9, 3:2, 4:5) | `object-position` at 16:9 | at 3:2 | at 4:5 | Subject kept |
|---|---|---|---|---|---|---|
| `georgetown-dscf1931.webp` | 900 by 675 | 450, 450, 270 | 50% 80% | 50% 70% | 50% 60% | Hands, marker and worksheet; the 16:9 crop reduces but does not remove the lower face, so this file is permission-gated like every other |
| `georgetown-guide.webp` | 1440 by 960 | 720, 720, 384 | 50% 45% | 50% 50% | 15% 50% | The Guide at the whiteboard (left) and the children at the tables; the 4:5 slice starts at the left so the Guide stays whole |
| `anywhere-slider-2.webp` | 1080 by 722 | 540, 540, 289 | 50% 55% | 50% 50% | 45% 50% | The boards on the tables and the standing adult |
| `georgetown-science.webp` | 1440 by 1208 | 720, 720, 483 | 50% 45% | 50% 45% | 50% 45% | The girl with the beaker, centre |
| `georgetown-presenting.webp` | 1440 by 960 | 720, 720, 384 | 50% 40% | 50% 45% | 55% 50% | The standing children and the laptop |
| `georgetown-3915.webp` | 600 by 360 | 300, 270, not used | 50% 40% | 50% 40% | not used | Small file: thumbnails only |

## 6. Motion (MN-16, K4 section 8.1 as it stands)

| Move | Where a brief may use it | Rule |
|---|---|---|
| V1 door state, V3 focus, V7 disclosure | Anywhere | Instant (0 ms) |
| V2 door supporting line reveal | Doors, at 768 and above with `hover: hover`; always visible otherwise | 200 ms `--ease-out`, opacity and 4px rise; the line's space is reserved so nothing shifts. Under reduced motion the line is always visible, which is stricter than K4's instantaneous hover state and is declared here as the studio's choice (R8) |
| V6 one-time section reveal | Third screen and later only; at most three per page | 300 ms `--ease-out`, opacity and 8px rise; `IntersectionObserver` with `rootMargin: 0px 0px -15% 0px`, `unobserve` after the first hit; needs the D-039 script; complete without it |
| V8 schedule or day diagram draw | Diagram segments, `transform: scaleX(0 to 1)` with `transform-origin: left`, at most five segments, 300 ms each, 60 ms stagger, `--ease-out` | The same observer as V6 with `unobserve` after the first hit; segments render at their final state without the script (K4 section 8.1 V8) |
| V9 photo strip | User swipe only | No animation |
| V10 anchor scroll | In-page links | Native, inside `prefers-reduced-motion: no-preference` only |
| Anything else | Not available; a new move is a D-031 proposal first | |

Reduced motion: every duration 0 (`--duration-none`); every state visible (R8). Scripts and inputs: D-039 (Escalated to Johnny); until decided a mock ships its no-JavaScript state only, and no direction's interactivity is assumed approved.

## 7. Structure every mock keeps

Header (logo, "Current families", "Contact admissions", no menu, DD-12); h1; provenance line exactly once (G0.5 item 6, checker R18); two doors with label, name, line and CTA, equal weight, both CTAs above the fold at V1 to V17 (V9 excepted); the compare anchor sentence before the table (checker R19); comparison table with repeated values (DD-43) and stacked blocks below the measured breakpoint (R6); proof strip, exactly the four facts of `copy.md` section 4; the sources line verbatim; application steps; secondary CTAs with `copy.md` section 6 labels; current families; footer with both logos on their panels and the facts block. Claims: only figures with a claims-register row, in the deck's own words (REQ-022; `check-claims.py`); the rows the deck relies on (CR-011, CR-021, CR-022, CR-032 to CR-035) are "Unverified, public", which the rationale states.
