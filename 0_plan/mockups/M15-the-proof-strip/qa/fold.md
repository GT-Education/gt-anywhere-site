# Fold and matrix run

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/9833c18b2d85bc59/node_modules/playwright`, cached Chrome for Testing chromium-1234 151.0.7922.34; 2026-09-11T13:28:10.173Z; page `/0_plan/mockups/M15-the-proof-strip/index.html`.

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 88 | 321 | 350 | 480 | 593 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 56 | 291 | 320 | 450 | 563 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 56 | 294 | 323 | 452 | 566 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 56 | 294 | 323 | 453 | 566 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 56 | 265 | 294 | 424 | 537 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 56 | 265 | 294 | 520 | 746 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 56 | 295 | 324 | 454 | 568 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 56 | 267 | 296 | 426 | 540 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 56 | 294 | 323 | 548 | 774 | yes | report: page height 6672 |
| V10 | 750 by 342 | fold | 318 | 56 | 147 | 177 | 286 | 286 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 56 | 229 | 259 | 490 | 490 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 56 | 235 | 264 | 497 | 497 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 56 | 258 | 288 | 532 | 532 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 279 | 309 | 530 | 530 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 56 | 278 | 308 | 498 | 498 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 316 | 354 | 594 | 594 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 56 | 316 | 354 | 594 | 594 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 88 | 352 | 402 | 540 | 653 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 258 | 288 | 532 | 532 | yes | report: scrollWidth 1024 |

## Reduced motion (V14, prefers-reduced-motion: reduce)

PASS: every computed transition and animation duration is 0s (elements and pseudo-elements).

## Root font doubled at V2 (a stand-in for a large text setting)

PASS: no horizontal scroll at 375 with a 32px root.

## Focus and forced colours

Captures: focus-cta.jpg (first door CTA focused); focus-plate.jpg (header lockup link focused); focus-footer.jpg (GT Anywhere footer link focused); forced-colors.jpg (forced-colors: active at V14). The critics judge these by eye.

## Console

PASS: no console errors.

## Next band evidence

What the runner saw continuing below the fold. Ink means text, a painted edge or an image: section padding and the empty leading of a line box do not count.

| Row | Cut | Element and the ink that crosses the bottom edge |
|---|---|---|
| V1 | yes | content reaches 728 of 740 and more follows below |
| V2 | yes | content reaches 626 of 629 and more follows below |
| V3 | yes | text cut by the edge, 657 to 677 |
| V4 | yes | content reaches 653 of 659 and more follows below |
| V5 | yes | text cut by the edge, 701 to 721 |
| V6 | yes | text cut by the edge, 828 to 858 |
| V7 | yes | content reaches 679 of 681 and more follows below |
| V8 | yes | text cut by the edge, 727 to 747 |
| V9 | yes | text cut by the edge, 831 to 861 |
| V10 | yes | text cut by the edge, 329 to 349 |
| V11 | yes | content reaches 1016 of 1024 and more follows below |
| V12 | yes | text cut by the edge, 1186 to 1203 |
| V13 | yes | text cut by the edge, 738 to 782 |
| V14 | yes | text cut by the edge, 690 to 738 |
| V15 | yes | text cut by the edge, 626 to 675 |
| V16 | yes | text cut by the edge, 874 to 924 |
| V17 | yes | content reaches 944 of 960 and more follows below |
| V18 | no | FALSE FLOOR: the last visible content ends at -Infinity, Infinitypx clear of the 256px edge, so the screen reads as finished |
| V19 | yes | content reaches 568 of 576 and more follows below |

## Result: all required rows pass
