# Fold and matrix run

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/bbb8a2c4738e2b0c/node_modules/playwright`, cached Chrome for Testing chromium-1234 151.0.7922.34; 2026-09-12T02:58:56.011Z; page `/0_plan/mockups/M34-the-tour/index.html`.

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 88 | 339 | 368 | 463 | 574 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 88 | 341 | 370 | 466 | 577 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 88 | 312 | 341 | 436 | 547 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 88 | 312 | 341 | 436 | 547 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 88 | 315 | 344 | 439 | 550 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 88 | 417 | 454 | 625 | 736 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 88 | 314 | 343 | 438 | 549 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 56 | 285 | 314 | 409 | 520 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 88 | 414 | 451 | 614 | 725 | yes | report: page height 3548 |
| V10 | 750 by 342 | fold | 318 | 56 | 198 | 223 | 299 | 315 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 56 | 396 | 433 | 651 | 651 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 56 | 402 | 439 | 658 | 658 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 56 | 419 | 457 | 677 | 677 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 292 | 323 | 461 | 461 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 56 | 300 | 330 | 469 | 469 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 457 | 495 | 719 | 719 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 56 | 457 | 495 | 719 | 719 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 88 | 370 | 420 | 538 | 649 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 271 | 301 | 436 | 436 | yes | report: scrollWidth 1024 |

## Reduced motion (V14, prefers-reduced-motion: reduce)

PASS: every computed transition and animation duration is 0s (elements and pseudo-elements).

## Root font doubled at V2 (a stand-in for a large text setting)

PASS: no horizontal scroll at 375 with a 32px root.

## Focus and forced colours

Captures: focus-cta.jpg (first door CTA focused); focus-plate.jpg (header lockup link focused); no GT Anywhere footer link found; forced-colors.jpg (forced-colors: active at V14). The critics judge these by eye.

## Console

PASS: no console errors.

## Next band evidence

What the runner saw continuing below the fold. Ink means text, a painted edge or an image: section padding and the empty leading of a line box do not count.

| Row | Cut | Element and the ink that crosses the bottom edge |
|---|---|---|
| V1 | yes | content reaches 733 of 740 and more follows below |
| V2 | yes | text cut by the edge, 614 to 644 |
| V3 | yes | content reaches 658 of 664 and more follows below |
| V4 | yes | content reaches 659 of 659 and more follows below |
| V5 | yes | content reaches 710 of 715 and more follows below |
| V6 | yes | text cut by the edge, 828 to 848 |
| V7 | yes | text cut by the edge, 664 to 684 |
| V8 | yes | text cut by the edge, 711 to 741 |
| V9 | yes | content reaches 837 of 844 and more follows below |
| V10 | yes | text cut by the edge, 338 to 358 |
| V11 | yes | text cut by the edge, 1004 to 1024 |
| V12 | yes | content reaches 1192 of 1194 and more follows below |
| V13 | yes | content reaches 760 of 768 and more follows below |
| V14 | yes | content reaches 718 of 720 and more follows below |
| V15 | yes | content reaches 634 of 648 and more follows below |
| V16 | yes | text cut by the edge, 893 to 943 |
| V17 | yes | text cut by the edge, 953 to 972 |
| V18 | no | not applicable: the last CTA is at 649, past the 256px edge, so there is no gap between it and the fold to judge |
| V19 | yes | text cut by the edge, 557 to 578 |

## The GT marks under forced colours

Both GT marks are two-colour artwork, so each needs a ground that keeps its own colours: the Anywhere mark loses its second word on a forced white ground, and the GT School mark loses its navy lettering on a forced black one.

| Scheme | File | Result |
|---|---|---|
| light | focus ring on `mark link` | 21:1 against the surface it is drawn on, outside the element |
| light | `gt-school-logo-h.svg` | kept by the image itself |
| dark | focus ring on `mark link` | 21:1 against the surface it is drawn on, outside the element |
| dark | `gt-school-logo-h.svg` | kept by the image itself |

## Interactive targets under 44px

BUILDER-BRIEF rule 11 asks for 44px; WCAG 2.5.8 requires 24px at AA and is met by size or by spacing. Everything under 44 is listed as evidence for the critics. Only a door CTA under 44 fails the run.

| Viewport | Target | Height | Width | Kind | Result |
|---|---|---|---|---|---|
| all three rows | every interactive target is at least 44px tall | | | | ok |

## Mark geometry (K12 V2)

Horizontal marks stand 32px tall at 1440 and at least 27px at 390; aspect must hold within 1%. Measured, not read from CSS.

| Viewport | File | Shape | Height | Width | Aspect skew | Result |
|---|---|---|---|---|---|---|
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 27.9px | 121.1px | 0% | ok |
| 390 by 844 | `gt-icon.svg` | icon | 56px | 56px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-icon.svg` | icon | 88px | 88px | 0% | ok |

## Result: all required rows pass
