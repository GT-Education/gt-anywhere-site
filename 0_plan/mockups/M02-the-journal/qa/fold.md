# Fold and matrix run

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/9833c18b2d85bc59/node_modules/playwright`, cached Chrome for Testing chromium-1234 151.0.7922.34; 2026-09-11T11:44:56.813Z; page `/0_plan/mockups/M02-the-journal/index.html`.

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 90 | 323 | 361 | 490 | 603 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 90 | 317 | 355 | 477 | 590 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 56 | 294 | 332 | 461 | 574 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 56 | 294 | 332 | 461 | 574 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 56 | 265 | 303 | 432 | 546 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 56 | 265 | 303 | 520 | 722 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 56 | 295 | 333 | 463 | 576 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 56 | 267 | 305 | 434 | 548 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 56 | 294 | 332 | 549 | 751 | yes | report: page height 7029 |
| V10 | 750 by 342 | fold | 318 | 56 | 147 | 182 | 293 | 293 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 56 | 245 | 292 | 530 | 530 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 56 | 251 | 297 | 537 | 537 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 56 | 250 | 289 | 523 | 523 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 271 | 310 | 521 | 521 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 56 | 278 | 317 | 529 | 529 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 284 | 323 | 536 | 536 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 56 | 300 | 347 | 568 | 568 | no | FAIL false floor: nothing visible continues past the bottom edge |
| V18 | 320 by 256 | reflow |  | 90 | 346 | 405 | 543 | 656 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 242 | 281 | 507 | 507 | yes | report: scrollWidth 1024 |

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
| V1 | yes | div.door-lines ink 645 to 825 |
| V2 | yes | div.door-lines ink 616 to 796 |
| V3 | yes | div.door-lines ink 616 to 797 |
| V4 | yes | div.door-lines ink 616 to 797 |
| V5 | yes | div.door-lines ink 588 to 744 |
| V6 | yes | section.wrap ink 754 to 1455 |
| V7 | yes | div.door-lines ink 618 to 798 |
| V8 | yes | div.door-lines ink 590 to 747 |
| V9 | yes | section.wrap ink 783 to 1507 |
| V10 | yes | div.door-lines ink 319 to 430 |
| V11 | yes | section.wrap ink 586 to 1108 |
| V12 | yes | section.section ink 1124 to 2871 |
| V13 | yes | section.wrap ink 570 to 974 |
| V14 | yes | section.wrap ink 553 to 884 |
| V15 | yes | section.wrap ink 561 to 893 |
| V16 | yes | section.wrap ink 583 to 918 |
| V17 | no | nothing visible starts below the last CTA and crosses the bottom edge |
| V18 | no | nothing visible starts below the last CTA and crosses the bottom edge |
| V19 | yes | section.wrap ink 538 to 942 |

## Result: 1 failure(s)
