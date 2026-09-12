# Fold and matrix run

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/bbb8a2c4738e2b0c/node_modules/playwright`, cached Chrome for Testing chromium-1234 151.0.7922.34; 2026-09-12T03:36:35.277Z; page `/0_plan/mockups/M27-one-mark/index.html`.

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 88 | 339 | 368 | 463 | 574 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 88 | 341 | 370 | 466 | 577 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 88 | 312 | 341 | 436 | 547 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 88 | 312 | 341 | 436 | 547 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 88 | 315 | 344 | 439 | 550 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 88 | 457 | 494 | 605 | 716 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 88 | 314 | 343 | 438 | 549 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 56 | 285 | 314 | 409 | 520 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 88 | 454 | 491 | 602 | 713 | yes | report: page height 3536 |
| V10 | 750 by 342 | fold | 318 | 56 | 197 | 221 | 294 | 310 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 56 | 555 | 593 | 766 | 766 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 56 | 562 | 600 | 774 | 774 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 56 | 536 | 573 | 717 | 717 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 342 | 372 | 510 | 510 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 56 | 351 | 382 | 520 | 520 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 630 | 668 | 848 | 848 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 56 | 630 | 668 | 848 | 848 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 88 | 370 | 420 | 530 | 641 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 315 | 345 | 481 | 481 | yes | report: scrollWidth 1024 |

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
| V6 | yes | text cut by the edge, 832 to 852 |
| V7 | yes | text cut by the edge, 664 to 684 |
| V8 | yes | text cut by the edge, 711 to 741 |
| V9 | yes | text cut by the edge, 829 to 849 |
| V10 | yes | content reaches 342 of 342 and more follows below |
| V11 | yes | content reaches 1012 of 1024 and more follows below |
| V12 | yes | text cut by the edge, 1180 to 1200 |
| V13 | yes | text cut by the edge, 753 to 774 |
| V14 | yes | text cut by the edge, 691 to 739 |
| V15 | yes | text cut by the edge, 643 to 664 |
| V16 | yes | text cut by the edge, 886 to 907 |
| V17 | yes | text cut by the edge, 948 to 969 |
| V18 | no | not applicable: the last CTA is at 641, past the 256px edge, so there is no gap between it and the fold to judge |
| V19 | yes | content reaches 564 of 576 and more follows below |

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
| 390 by 844 | `gt-icon.svg` | icon | 64px | 64px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-icon.svg` | icon | 104px | 104px | 0% | ok |

## Result: all required rows pass
