# Fold and matrix run

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/9833c18b2d85bc59/node_modules/playwright`, cached Chrome for Testing chromium-1234 151.0.7922.34; 2026-09-11T11:44:50.389Z; page `/0_plan/mockups/M07-the-timetable/index.html`.

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 88 | 321 | 350 | 468 | 586 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 88 | 315 | 344 | 455 | 573 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 56 | 294 | 323 | 441 | 559 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 56 | 294 | 323 | 441 | 559 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 56 | 265 | 294 | 412 | 530 | no | FAIL false floor: nothing visible continues past the bottom edge |
| V6 | 412 by 839 | fold | 815 | 56 | 265 | 294 | 492 | 691 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 56 | 295 | 324 | 443 | 561 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 56 | 267 | 296 | 414 | 533 | no | FAIL false floor: nothing visible continues past the bottom edge |
| V9 | 390 by 844 | emptiness |  | 56 | 294 | 323 | 521 | 720 | yes | report: page height 7378 |
| V10 | 750 by 342 | fold | 318 | 56 | 147 | 177 | 286 | 286 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 56 | 237 | 275 | 557 | 557 | no | FAIL false floor: nothing visible continues past the bottom edge |
| V12 | 834 by 1194 | fold | 1170 | 56 | 243 | 280 | 541 | 541 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 56 | 294 | 324 | 497 | 629 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 271 | 301 | 474 | 606 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 56 | 278 | 308 | 481 | 613 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 292 | 330 | 615 | 821 | no | FAIL false floor: nothing visible continues past the bottom edge |
| V17 | 1920 by 960 | fold | 936 | 56 | 292 | 330 | 619 | 824 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 88 | 344 | 394 | 521 | 639 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 286 | 316 | 481 | 613 | no | report: scrollWidth 1024 |

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
| V1 | yes | div.door-lines ink 620 to 792 |
| V2 | yes | div.door-lines ink 607 to 779 |
| V3 | yes | div.door-lines ink 593 to 766 |
| V4 | yes | div.door-lines ink 593 to 766 |
| V5 | no | nothing visible starts below the last CTA and crosses the bottom edge |
| V6 | yes | ul.days ink 723 to 1097 |
| V7 | yes | div.door-lines ink 595 to 767 |
| V8 | no | nothing visible starts below the last CTA and crosses the bottom edge |
| V9 | yes | ul.days ink 752 to 1146 |
| V10 | yes | div.door-lines ink 320 to 423 |
| V11 | no | nothing visible starts below the last CTA and crosses the bottom edge |
| V12 | yes | section.section ink 1003 to 3367 |
| V13 | yes | div.door-lines ink 718 to 825 |
| V14 | yes | div.door-lines ink 695 to 804 |
| V15 | yes | p.strip ink 621 to 684 |
| V16 | no | nothing visible starts below the last CTA and crosses the bottom edge |
| V17 | yes | div.wrap ink 932 to 967 |
| V18 | no | nothing visible starts below the last CTA and crosses the bottom edge |
| V19 | no | nothing visible starts below the last CTA and crosses the bottom edge |

## Result: 4 failure(s)
