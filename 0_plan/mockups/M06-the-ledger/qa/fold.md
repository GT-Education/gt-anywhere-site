# Fold and matrix run

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/9833c18b2d85bc59/node_modules/playwright`; 2026-09-11T08:51:46.996Z; page `/0_plan/mockups/M06-the-ledger/index.html`.

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 56 | 238 | 263 | 451 | 576 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 56 | 211 | 236 | 424 | 549 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 56 | 212 | 237 | 425 | 551 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 56 | 212 | 237 | 426 | 551 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 56 | 213 | 238 | 427 | 552 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 56 | 213 | 238 | 507 | 713 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 56 | 212 | 238 | 426 | 551 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 56 | 214 | 239 | 428 | 553 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 56 | 212 | 237 | 506 | 711 | yes | report: page height 5487 |
| V10 | 750 by 342 | fold | 318 | 56 | 199 | 225 | 402 | 402 | yes | FAIL over: cta-georgetown, cta-anywhere |
| V11 | 768 by 1024 | fold | 1000 | 56 | 229 | 255 | 549 | 549 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 56 | 235 | 261 | 530 | 530 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 56 | 258 | 284 | 581 | 581 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 279 | 305 | 605 | 605 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 56 | 286 | 312 | 613 | 613 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 300 | 326 | 637 | 637 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 56 | 300 | 326 | 637 | 637 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 93 | 302 | 345 | 540 | 665 | yes | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 258 | 284 | 581 | 581 | yes | report: scrollWidth 1024 |

## Reduced motion (V14, prefers-reduced-motion: reduce)

PASS: every computed transition and animation duration is 0s (elements and pseudo-elements).

## Root font doubled at V2 (a stand-in for a large text setting)

PASS: no horizontal scroll at 375 with a 32px root.

## Focus and forced colours

Captures: focus-cta.jpg (first door CTA focused); focus-footer.jpg (GT Anywhere footer link focused); forced-colors.jpg (forced-colors: active at V14). The critics judge these by eye.

## Console

PASS: no console errors.

## Result: 1 failure(s)
