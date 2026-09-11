# Fold and matrix run

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/9833c18b2d85bc59/node_modules/playwright`; 2026-09-11T10:15:27.486Z; page `/0_plan/mockups/M06-the-ledger/index.html`.

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 56 | 238 | 263 | 457 | 586 | no | PASS (no band cut: check for a false floor) |
| V2 | 375 by 629 | fold | 605 | 56 | 211 | 236 | 430 | 560 | no | PASS (no band cut: check for a false floor) |
| V3 | 390 by 664 | fold | 640 | 56 | 212 | 237 | 432 | 561 | no | PASS (no band cut: check for a false floor) |
| V4 | 393 by 659 | fold | 635 | 56 | 212 | 237 | 432 | 561 | no | PASS (no band cut: check for a false floor) |
| V5 | 414 by 715 | fold | 691 | 56 | 213 | 238 | 433 | 562 | no | PASS (no band cut: check for a false floor) |
| V6 | 412 by 839 | fold | 815 | 56 | 213 | 238 | 513 | 723 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 56 | 212 | 238 | 432 | 562 | no | PASS (no band cut: check for a false floor) |
| V8 | 430 by 739 | fold | 715 | 56 | 214 | 239 | 434 | 564 | no | PASS (no band cut: check for a false floor) |
| V9 | 390 by 844 | emptiness |  | 56 | 212 | 237 | 512 | 721 | yes | report: page height 5211 |
| V10 | 750 by 342 | fold | 318 | 56 | 147 | 199 | 297 | 297 | no | PASS (no band cut: check for a false floor) |
| V11 | 768 by 1024 | fold | 1000 | 56 | 229 | 255 | 546 | 546 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 56 | 235 | 261 | 527 | 527 | no | PASS (no band cut: check for a false floor) |
| V13 | 1024 by 768 | fold | 744 | 56 | 250 | 318 | 543 | 543 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 271 | 339 | 567 | 567 | no | PASS (no band cut: check for a false floor) |
| V15 | 1366 by 648 | fold | 624 | 56 | 278 | 346 | 575 | 575 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 300 | 368 | 598 | 598 | no | PASS (no band cut: check for a false floor) |
| V17 | 1920 by 960 | fold | 936 | 56 | 300 | 368 | 598 | 598 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 93 | 302 | 345 | 546 | 675 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 250 | 318 | 543 | 543 | no | report: scrollWidth 1024 |

## Reduced motion (V14, prefers-reduced-motion: reduce)

PASS: every computed transition and animation duration is 0s (elements and pseudo-elements).

## Root font doubled at V2 (a stand-in for a large text setting)

PASS: no horizontal scroll at 375 with a 32px root.

## Focus and forced colours

Captures: focus-cta.jpg (first door CTA focused); focus-plate.jpg (header lockup link focused); focus-footer.jpg (GT Anywhere footer link focused); forced-colors.jpg (forced-colors: active at V14). The critics judge these by eye.

## Console

PASS: no console errors.

## Result: all required rows pass
