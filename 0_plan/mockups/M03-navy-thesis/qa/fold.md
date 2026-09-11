# Fold and matrix run

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/9833c18b2d85bc59/node_modules/playwright`, cached Chrome for Testing chromium-1234 151.0.7922.34; 2026-09-11T11:44:18.836Z; page `/0_plan/mockups/M03-navy-thesis/index.html`.

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 88 | 341 | 370 | 500 | 613 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 88 | 327 | 356 | 478 | 591 | no | FAIL false floor: nothing visible continues past the bottom edge |
| V3 | 390 by 664 | fold | 640 | 56 | 314 | 343 | 472 | 586 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 56 | 314 | 343 | 473 | 586 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 56 | 285 | 314 | 444 | 557 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 56 | 285 | 314 | 555 | 765 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 56 | 315 | 344 | 474 | 588 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 56 | 287 | 316 | 446 | 560 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 56 | 314 | 343 | 583 | 793 | yes | report: page height 7015 |
| V10 | 750 by 342 | fold | 318 | 56 | 243 | 272 | 169 | 282 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 56 | 273 | 311 | 591 | 781 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 56 | 279 | 316 | 611 | 802 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 56 | 270 | 300 | 551 | 551 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 291 | 321 | 550 | 550 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 56 | 298 | 328 | 559 | 559 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 328 | 366 | 646 | 646 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 56 | 328 | 366 | 651 | 651 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 88 | 356 | 406 | 544 | 657 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 254 | 284 | 527 | 527 | no | report: scrollWidth 1024 |

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
| V1 | yes | div.wrap ink 648 to 828 |
| V2 | no | nothing visible starts below the last CTA and crosses the bottom edge |
| V3 | yes | div.wrap ink 621 to 801 |
| V4 | yes | div.wrap ink 621 to 802 |
| V5 | yes | div.wrap ink 592 to 749 |
| V6 | yes | surface changes from rgb(0, 42, 58) to rgb(252, 244, 239) between the last CTA and the bottom edge, and the page continues below |
| V7 | yes | div.wrap ink 623 to 803 |
| V8 | yes | div.wrap ink 595 to 751 |
| V9 | yes | surface changes from rgb(0, 42, 58) to rgb(252, 244, 239) between the last CTA and the bottom edge, and the page continues below |
| V10 | yes | div.wrap ink 317 to 428 |
| V11 | yes | section.section ink 1002 to 3416 |
| V12 | yes | section.section ink 1027 to 3399 |
| V13 | yes | surface changes from rgb(0, 42, 58) to rgb(252, 244, 239) between the last CTA and the bottom edge, and the page continues below |
| V14 | yes | surface changes from rgb(0, 42, 58) to rgb(252, 244, 239) between the last CTA and the bottom edge, and the page continues below |
| V15 | yes | surface changes from rgb(0, 42, 58) to rgb(252, 244, 239) between the last CTA and the bottom edge, and the page continues below |
| V16 | yes | surface changes from rgb(0, 42, 58) to rgb(252, 244, 239) between the last CTA and the bottom edge, and the page continues below |
| V17 | yes | section.section ink 937 to 2426 |
| V18 | no | nothing visible starts below the last CTA and crosses the bottom edge |
| V19 | no | nothing visible starts below the last CTA and crosses the bottom edge |

## Result: 1 failure(s)
