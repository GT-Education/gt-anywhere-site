# Fold and matrix run

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/9833c18b2d85bc59/node_modules/playwright`; 2026-09-11T08:05:24.717Z; page `/0_plan/mockups/M1-two-doors/index.html`.

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 57 | 247 | 276 | 574 | 815 | yes | FAIL over: cta-anywhere |
| V2 | 375 by 629 | fold | 605 | 57 | 247 | 276 | 533 | 754 | yes | FAIL over: cta-anywhere |
| V3 | 390 by 664 | fold | 640 | 57 | 219 | 248 | 506 | 726 | yes | FAIL over: cta-anywhere |
| V4 | 393 by 659 | fold | 635 | 57 | 219 | 248 | 506 | 726 | yes | FAIL over: cta-anywhere |
| V5 | 414 by 715 | fold | 691 | 57 | 219 | 248 | 476 | 677 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 57 | 219 | 248 | 476 | 677 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 57 | 219 | 248 | 499 | 720 | yes | FAIL over: cta-anywhere |
| V8 | 430 by 739 | fold | 715 | 57 | 219 | 248 | 456 | 656 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 57 | 219 | 248 | 506 | 726 | yes | report: page height 6666 |
| V10 | 750 by 342 | fold | 318 | 57 | 191 | 220 | 388 | 548 | yes | FAIL over: cta-georgetown, cta-anywhere |
| V11 | 768 by 1024 | fold | 1000 | 65 | 244 | 273 | 913 | 913 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 65 | 207 | 236 | 840 | 840 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 65 | 207 | 236 | 813 | 813 | yes | FAIL over: cta-georgetown, cta-anywhere |
| V14 | 1280 by 720 | fold | 696 | 65 | 235 | 264 | 857 | 857 | yes | FAIL over: cta-georgetown, cta-anywhere |
| V15 | 1366 by 648 | fold | 624 | 65 | 235 | 264 | 857 | 857 | yes | FAIL over: cta-georgetown, cta-anywhere |
| V16 | 1440 by 900 | fold | 876 | 65 | 235 | 264 | 857 | 857 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 65 | 235 | 264 | 857 | 857 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 57 | 274 | 324 | 663 | 974 | yes | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 65 | 207 | 236 | 813 | 813 | yes | report: scrollWidth 1024 |

## Reduced motion (V14, prefers-reduced-motion: reduce)

PASS: every computed transition and animation duration is 0s (elements and pseudo-elements).

## Root font doubled at V2 (a stand-in for a large text setting)

FAIL: scrollWidth 474 at 375 with a 32px root.

## Console

PASS: no console errors.

## Result: 10 failure(s)
