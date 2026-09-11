# Fold and matrix run

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/9833c18b2d85bc59/node_modules/playwright`, cached Chrome for Testing chromium-1234 151.0.7922.34; 2026-09-11T11:44:44.104Z; page `/0_plan/mockups/M15-the-proof-strip/index.html`.

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 88 | 321 | 350 | 480 | 593 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 56 | 291 | 320 | 450 | 563 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 56 | 294 | 323 | 452 | 566 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 56 | 294 | 323 | 453 | 566 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 56 | 265 | 294 | 424 | 537 | no | FAIL false floor: nothing visible continues past the bottom edge |
| V6 | 412 by 839 | fold | 815 | 56 | 265 | 294 | 520 | 746 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 56 | 295 | 324 | 454 | 568 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 56 | 267 | 296 | 426 | 540 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 56 | 294 | 323 | 548 | 774 | yes | report: page height 6662 |
| V10 | 750 by 342 | fold | 318 | 56 | 147 | 177 | 286 | 285 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 56 | 229 | 259 | 490 | 490 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 56 | 235 | 264 | 497 | 497 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 56 | 266 | 296 | 540 | 540 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 287 | 317 | 538 | 538 | no | FAIL false floor: nothing visible continues past the bottom edge |
| V15 | 1366 by 648 | fold | 624 | 56 | 286 | 316 | 538 | 538 | no | FAIL false floor: nothing visible continues past the bottom edge |
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
| V1 | yes | ul.door-lines ink 619 to 792 |
| V2 | yes | ul.door-lines ink 589 to 762 |
| V3 | yes | ul.door-lines ink 592 to 765 |
| V4 | yes | ul.door-lines ink 592 to 766 |
| V5 | no | nothing visible starts below the last CTA and crosses the bottom edge |
| V6 | yes | div.compare-lead ink 795 to 858 |
| V7 | yes | ul.door-lines ink 594 to 767 |
| V8 | yes | div.compare-lead ink 726 to 789 |
| V9 | yes | div.compare-lead ink 823 to 886 |
| V10 | yes | ul.door-lines ink 312 to 416 |
| V11 | yes | section.band ink 689 to 1270 |
| V12 | yes | section.band ink 696 to 1279 |
| V13 | yes | section.band ink 756 to 1258 |
| V14 | no | nothing visible starts below the last CTA and crosses the bottom edge |
| V15 | no | nothing visible starts below the last CTA and crosses the bottom edge |
| V16 | yes | section.band ink 836 to 1320 |
| V17 | yes | section.band ink 836 to 1320 |
| V18 | no | nothing visible starts below the last CTA and crosses the bottom edge |
| V19 | yes | div.compare-lead ink 565 to 606 |

## Result: 3 failure(s)
