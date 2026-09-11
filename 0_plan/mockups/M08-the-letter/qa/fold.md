# Fold and matrix run

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/9833c18b2d85bc59/node_modules/playwright`; 2026-09-11T08:39:59.390Z; page `/0_plan/mockups/M08-the-letter/index.html`.

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
| V10 | 750 by 342 | fold | 318 | 56 | 228 | 265 | 359 | 450 | yes | FAIL over: cta-georgetown, cta-anywhere |
| V11 | 768 by 1024 | fold | 1000 | 56 | 261 | 299 | 477 | 617 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 56 | 267 | 304 | 483 | 624 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 56 | 258 | 296 | 460 | 586 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 328 | 367 | 533 | 660 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 56 | 337 | 375 | 470 | 562 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 368 | 407 | 591 | 735 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 56 | 368 | 407 | 591 | 735 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 92 | 356 | 414 | 508 | 599 | yes | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 258 | 296 | 390 | 481 | yes | report: scrollWidth 1024 |

## Reduced motion (V14, prefers-reduced-motion: reduce)

PASS: every computed transition and animation duration is 0s (elements and pseudo-elements).

## Root font doubled at V2 (a stand-in for a large text setting)

PASS: no horizontal scroll at 375 with a 32px root.

## Console

PASS: no console errors.

## Result: 1 failure(s)
