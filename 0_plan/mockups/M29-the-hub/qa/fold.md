# Fold and matrix run

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/bbb8a2c4738e2b0c/node_modules/playwright`, cached Chrome for Testing chromium-1234 151.0.7922.34; 2026-09-12T03:09:46.808Z; page `/0_plan/mockups/M29-the-hub/index.html`.

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 88 | 339 | 368 | 463 | 574 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 88 | 341 | 370 | 466 | 577 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 88 | 312 | 341 | 436 | 547 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 88 | 312 | 341 | 436 | 547 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 88 | 315 | 344 | 439 | 550 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 88 | 417 | 454 | 565 | 676 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 88 | 314 | 343 | 438 | 549 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 56 | 285 | 314 | 409 | 520 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 88 | 414 | 451 | 562 | 673 | yes | report: page height 3496 |
| V10 | 750 by 342 | fold | 318 | 56 | 198 | 223 | 300 | 316 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 56 | 360 | 397 | 596 | 580 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 56 | 366 | 403 | 587 | 587 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 56 | 382 | 420 | 605 | 605 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 292 | 323 | 462 | 462 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 56 | 300 | 330 | 470 | 470 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 418 | 457 | 645 | 645 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 56 | 418 | 457 | 645 | 645 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 88 | 370 | 420 | 530 | 641 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 271 | 301 | 437 | 437 | yes | report: scrollWidth 1024 |

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
| V6 | yes | content reaches 836 of 839 and more follows below |
| V7 | yes | text cut by the edge, 664 to 684 |
| V8 | yes | text cut by the edge, 711 to 741 |
| V9 | yes | content reaches 833 of 844 and more follows below |
| V10 | yes | content reaches 325 of 342 and more follows below |
| V11 | yes | content reaches 1019 of 1024 and more follows below |
| V12 | yes | text cut by the edge, 1177 to 1197 |
| V13 | yes | content reaches 764 of 768 and more follows below |
| V14 | yes | content reaches 720 of 720 and more follows below |
| V15 | yes | content reaches 636 of 648 and more follows below |
| V16 | yes | content reaches 894 of 900 and more follows below |
| V17 | yes | text cut by the edge, 947 to 982 |
| V18 | no | not applicable: the last CTA is at 641, past the 256px edge, so there is no gap between it and the fold to judge |
| V19 | yes | text cut by the edge, 559 to 580 |

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
| 1440 by 900 | `gt-icon.svg` | icon | 56px | 56px | 0% | ok |

## Result: all required rows pass
