# Fold and matrix run

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/9833c18b2d85bc59/node_modules/playwright`, cached Chrome for Testing chromium-1234 151.0.7922.34; 2026-09-11T11:56:39.332Z; page `/0_plan/mockups/M09-two-places/index.html`.

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 88 | 321 | 350 | 504 | 658 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 56 | 283 | 312 | 450 | 580 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 56 | 286 | 315 | 452 | 583 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 56 | 286 | 315 | 452 | 583 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 56 | 265 | 294 | 448 | 602 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 56 | 265 | 294 | 528 | 763 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 56 | 287 | 316 | 454 | 584 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 56 | 267 | 296 | 450 | 604 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 56 | 294 | 323 | 556 | 791 | yes | report: page height 6679 |
| V10 | 750 by 342 | fold | 318 | 56 | 147 | 173 | 290 | 290 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 56 | 229 | 267 | 553 | 553 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 56 | 235 | 272 | 525 | 525 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 56 | 258 | 296 | 584 | 584 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 279 | 317 | 582 | 582 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 56 | 278 | 316 | 542 | 542 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 300 | 346 | 699 | 699 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 56 | 300 | 346 | 759 | 759 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 88 | 344 | 394 | 540 | 670 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 250 | 288 | 442 | 442 | yes | report: scrollWidth 1024 |

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
| V1 | yes | ul.place-lines ink 692 to 865 |
| V2 | yes | ul.place-lines ink 598 to 771 |
| V3 | yes | ul.place-lines ink 601 to 774 |
| V4 | yes | ul.place-lines ink 601 to 775 |
| V5 | yes | ul.place-lines ink 636 to 786 |
| V6 | yes | section.band ink 780 to 927 |
| V7 | yes | ul.place-lines ink 602 to 776 |
| V8 | yes | ul.place-lines ink 638 to 788 |
| V9 | yes | section.band ink 808 to 955 |
| V10 | yes | p.place-line ink 300 to 370 |
| V11 | yes | section.band ink 782 to 2517 |
| V12 | yes | section.band ink 754 to 2412 |
| V13 | yes | section.band ink 705 to 830 |
| V14 | yes | section.band ink 703 to 829 |
| V15 | yes | section.band ink 631 to 758 |
| V16 | yes | section.band ink 836 to 963 |
| V17 | yes | section.band ink 896 to 1023 |
| V18 | no | nothing visible starts below the last CTA and crosses the bottom edge |
| V19 | yes | ul.place-lines ink 548 to 656 |

## Result: all required rows pass
