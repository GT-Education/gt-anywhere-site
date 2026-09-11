# Fold and matrix run

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/9833c18b2d85bc59/node_modules/playwright`, cached Chrome for Testing chromium-1234 151.0.7922.34; 2026-09-11T12:35:14.140Z; page `/0_plan/mockups/M15-the-proof-strip/index.html`.

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
| V9 | 390 by 844 | emptiness |  | 56 | 294 | 323 | 548 | 774 | yes | report: page height 6688 |
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
| V1 | yes | ul.door-lines ink 635 to 824 |
| V2 | yes | ul.door-lines ink 605 to 794 |
| V3 | yes | ul.door-lines ink 608 to 797 |
| V4 | yes | ul.door-lines ink 608 to 798 |
| V5 | yes | ul.door-lines ink 579 to 745 |
| V6 | yes | div.compare-lead ink 795 to 858 |
| V7 | yes | ul.door-lines ink 610 to 799 |
| V8 | yes | ul.door-lines ink 582 to 747 |
| V9 | yes | div.compare-lead ink 823 to 886 |
| V10 | yes | ul.door-lines ink 328 to 448 |
| V11 | yes | section.band ink 609 to 1379 |
| V12 | yes | section.band ink 616 to 1360 |
| V13 | yes | section.band ink 620 to 1340 |
| V14 | yes | section.band ink 619 to 1177 |
| V15 | yes | section.band ink 564 to 1116 |
| V16 | yes | section.band ink 756 to 1365 |
| V17 | yes | section.band ink 756 to 1365 |
| V18 | no | nothing visible starts below the last CTA and crosses the bottom edge |
| V19 | yes | div.compare-lead ink 565 to 606 |

## Result: all required rows pass
