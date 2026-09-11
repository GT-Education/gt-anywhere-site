# Fold and matrix run

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/9833c18b2d85bc59/node_modules/playwright`, cached Chrome for Testing chromium-1234 151.0.7922.34; 2026-09-11T11:49:32.656Z; page `/0_plan/mockups/M08-the-letter/index.html`.

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 56 | 289 | 326 | 419 | 510 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 56 | 291 | 328 | 421 | 512 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 56 | 294 | 331 | 424 | 515 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 56 | 294 | 331 | 424 | 515 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 56 | 265 | 302 | 488 | 665 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 56 | 265 | 302 | 488 | 665 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 56 | 263 | 300 | 393 | 485 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 56 | 267 | 304 | 491 | 667 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 56 | 294 | 331 | 517 | 693 | yes | report: page height 6507 |
| V10 | 750 by 342 | fold | 318 | 56 | 147 | 177 | 262 | 262 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 56 | 261 | 299 | 477 | 617 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 56 | 267 | 304 | 483 | 624 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 56 | 258 | 296 | 460 | 586 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 279 | 317 | 484 | 611 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 56 | 270 | 300 | 459 | 579 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 316 | 354 | 538 | 682 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 56 | 316 | 354 | 538 | 682 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 92 | 356 | 414 | 508 | 599 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 242 | 272 | 428 | 546 | yes | report: scrollWidth 1024 |

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
| V1 | yes | p.door-line ink 693 to 801 |
| V2 | yes | p.door-line ink 544 to 680 |
| V3 | yes | p.door-line ink 647 to 755 |
| V4 | yes | p.door-line ink 647 to 756 |
| V5 | yes | p.postscript ink 697 to 745 |
| V6 | yes | section.section ink 793 to 3428 |
| V7 | yes | p.door-line ink 617 to 725 |
| V8 | yes | p.postscript ink 699 to 748 |
| V9 | yes | section.section ink 822 to 3578 |
| V10 | yes | p.door-line ink 278 to 363 |
| V11 | yes | section.section ink 741 to 3028 |
| V12 | yes | section.section ink 748 to 3044 |
| V13 | yes | section.section ink 654 to 2949 |
| V14 | yes | section.section ink 679 to 3007 |
| V15 | yes | section.section ink 631 to 2970 |
| V16 | yes | section.section ink 806 to 3155 |
| V17 | yes | section.section ink 806 to 3155 |
| V18 | no | nothing visible starts below the last CTA and crosses the bottom edge |
| V19 | yes | p.postscript ink 563 to 588 |

## Result: all required rows pass
