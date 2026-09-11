# Fold and matrix run

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/9833c18b2d85bc59/node_modules/playwright`, cached Chrome for Testing chromium-1234 151.0.7922.34; 2026-09-11T11:44:37.878Z; page `/0_plan/mockups/M12-selective-by-rigor/index.html`.

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 56 | 289 | 326 | 461 | 588 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 56 | 291 | 328 | 463 | 590 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 56 | 294 | 331 | 465 | 593 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 56 | 294 | 331 | 465 | 593 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 56 | 265 | 302 | 437 | 564 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 56 | 265 | 302 | 597 | 725 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 56 | 263 | 300 | 435 | 563 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 56 | 267 | 304 | 439 | 566 | no | FAIL false floor: nothing visible continues past the bottom edge |
| V9 | 390 by 844 | emptiness |  | 56 | 294 | 331 | 626 | 753 | yes | report: page height 6638 |
| V10 | 750 by 342 | fold | 318 | 56 | 147 | 177 | 306 | 306 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 56 | 276 | 314 | 602 | 602 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 56 | 243 | 280 | 541 | 541 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 56 | 258 | 296 | 562 | 562 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 279 | 317 | 590 | 590 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 56 | 286 | 324 | 473 | 473 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 300 | 338 | 631 | 631 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 56 | 300 | 338 | 631 | 631 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 92 | 356 | 414 | 555 | 682 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 258 | 296 | 442 | 442 | yes | report: scrollWidth 1024 |

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
| V1 | yes | ul.door-lines ink 606 to 779 |
| V2 | yes | ul.door-lines ink 608 to 781 |
| V3 | yes | ul.door-lines ink 611 to 784 |
| V4 | yes | ul.door-lines ink 611 to 785 |
| V5 | yes | ul.door-lines ink 582 to 732 |
| V6 | yes | ul.door-lines ink 743 to 892 |
| V7 | yes | ul.door-lines ink 581 to 754 |
| V8 | no | nothing visible starts below the last CTA and crosses the bottom edge |
| V9 | yes | ul.door-lines ink 771 to 945 |
| V10 | yes | ul.door-lines ink 324 to 420 |
| V11 | yes | section.band ink 858 to 2382 |
| V12 | yes | section.band ink 798 to 2253 |
| V13 | yes | surface changes from rgb(0, 42, 58) to rgb(252, 244, 239) between the last CTA and the bottom edge, and the page continues below |
| V14 | yes | surface changes from rgb(0, 42, 58) to rgb(252, 244, 239) between the last CTA and the bottom edge, and the page continues below |
| V15 | yes | div.statement ink 567 to 695 |
| V16 | yes | section.band ink 890 to 2165 |
| V17 | yes | section.band ink 890 to 2165 |
| V18 | no | nothing visible starts below the last CTA and crosses the bottom edge |
| V19 | yes | div.statement ink 561 to 681 |

## Result: 1 failure(s)
