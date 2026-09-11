# Fold and matrix run

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/9833c18b2d85bc59/node_modules/playwright`, cached Chrome for Testing chromium-1234 151.0.7922.34; 2026-09-11T12:32:36.529Z; page `/0_plan/mockups/M07-the-timetable/index.html`.

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 88 | 321 | 350 | 468 | 586 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 88 | 315 | 344 | 455 | 573 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 56 | 294 | 323 | 441 | 559 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 56 | 294 | 323 | 441 | 559 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 56 | 265 | 294 | 412 | 530 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 56 | 265 | 294 | 492 | 691 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 56 | 295 | 324 | 443 | 561 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 56 | 267 | 296 | 414 | 533 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 56 | 294 | 323 | 521 | 720 | yes | report: page height 7309 |
| V10 | 750 by 342 | fold | 318 | 56 | 147 | 177 | 286 | 286 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 56 | 237 | 275 | 577 | 577 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 56 | 243 | 280 | 572 | 572 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 56 | 294 | 324 | 508 | 623 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 271 | 301 | 486 | 602 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 56 | 278 | 308 | 493 | 610 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 292 | 330 | 587 | 735 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 56 | 292 | 330 | 593 | 744 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 88 | 344 | 394 | 521 | 639 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 286 | 316 | 492 | 607 | no | report: scrollWidth 1024 |

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
| V1 | yes | ul.days ink 610 to 1008 |
| V2 | yes | ul.days ink 597 to 953 |
| V3 | yes | ul.days ink 583 to 940 |
| V4 | yes | ul.days ink 583 to 919 |
| V5 | yes | ul.days ink 554 to 890 |
| V6 | yes | ul.days ink 715 to 1051 |
| V7 | yes | ul.days ink 585 to 921 |
| V8 | yes | ul.days ink 557 to 893 |
| V9 | yes | ul.days ink 744 to 1100 |
| V10 | yes | ul.days ink 310 to 519 |
| V11 | yes | section.section ink 990 to 3397 |
| V12 | yes | section.section ink 966 to 3329 |
| V13 | yes | div.door-lines ink 712 to 818 |
| V14 | yes | div.door-lines ink 691 to 800 |
| V15 | yes | p.strip ink 618 to 681 |
| V16 | yes | div.door-lines ink 870 to 980 |
| V17 | yes | div.door-lines ink 884 to 994 |
| V18 | no | nothing visible starts below the last CTA and crosses the bottom edge |
| V19 | no | nothing visible starts below the last CTA and crosses the bottom edge |

## Result: all required rows pass
