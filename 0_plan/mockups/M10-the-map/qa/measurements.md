# M10 measurements

Runner: `qa/M10-measure.mjs`, headless Chromium 151.0.7922.34, 2026-09-11T16:42:35.458Z.

## h1 line counts and first-screen bottoms

| Row | Viewport | h1 size | h1 width | h1 lines | h1 height | header | h1 | provenance | CTA Georgetown | CTA Anywhere | compare | map | locations | band 1 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | 27px | 312 | **7** | 217.3 | 89 | 322 | 348 | 487 | 622 | 886 | 1252 | 1322 | 4286 |
| V2 | 375 by 629 | 27.26px | 327 | **7** | 219.4 | 57 | 292 | 318 | 457 | 593 | 857 | 1234 | 1304 | 4157 |
| V3 | 390 by 664 | 27.53px | 342 | **7** | 221.6 | 57 | 295 | 320 | 450 | 576 | 841 | 1228 | 1298 | 4090 |
| V4 | 393 by 659 | 27.58px | 345 | **7** | 221.9 | 57 | 295 | 320 | 450 | 577 | 841 | 1230 | 1300 | 4093 |
| V5 | 414 by 715 | 27.95px | 366 | **6** | 192.8 | 57 | 266 | 291 | 421 | 548 | 789 | 1193 | 1263 | 4014 |
| V6 | 412 by 839 | 27.92px | 364 | **6** | 192.7 | 57 | 266 | 291 | 521 | 752 | 831 | 1233 | 1303 | 4098 |
| V7 | 402 by 681 | 27.74px | 354 | **7** | 223.2 | 57 | 296 | 322 | 451 | 578 | 843 | 1238 | 1308 | 4058 |
| V8 | 430 by 739 | 28.23px | 382 | **6** | 194.8 | 57 | 268 | 293 | 423 | 550 | 791 | 1207 | 1277 | 3910 |
| V9 | 390 by 844 | 27.53px | 342 | **7** | 221.6 | 57 | 295 | 320 | 550 | 781 | 859 | 1246 | 1316 | 4152 |
| V10 | 750 by 342 | 24.17px | 686 | **3** | 83.4 | 57 | 148 | 170 | 295 | 295 | 455 | 1015 | 1077 | 3360 |
| V11 | 768 by 1024 | 34.18px | 692.5 | **4** | 157.2 | 57 | 230 | 256 | 517 | 517 | 573 | 1154 | 1224 | 2986 |
| V12 | 834 by 1194 | 35.34px | 716 | **4** | 162.6 | 57 | 236 | 262 | 498 | 498 | 555 | 1182 | 1252 | 2946 |
| V13 | 1024 by 768 | 38.68px | 783.8 | **4** | 177.9 | 57 | 251 | 277 | 411 | 411 | 590 | 1261 | 1331 | 2923 |
| V14 | 1280 by 720 | 43.19px | 802.5 | **4** | 198.6 | 57 | 272 | 298 | 442 | 592 | 649 | 596 | 758 | 2310 |
| V15 | 1366 by 648 | 44.7px | 859.3 | **4** | 205.6 | 57 | 279 | 305 | 461 | 621 | 679 | 638 | 774 | 2320 |
| V16 | 1440 by 900 | 46px | 908.2 | **4** | 211.6 | 57 | 293 | 319 | 481 | 640 | 706 | 657 | 805 | 2358 |
| V17 | 1920 by 960 | 46px | 908.2 | **4** | 211.6 | 57 | 293 | 319 | 481 | 640 | 706 | 657 | 805 | 2418 |
| V18 | 320 by 256 | 27px | 272 | **8** | 248.4 | 89 | 353 | 396 | 560 | 696 | 984 | 1322 | 1421 | 4528 |
| V19 | 1024 by 576 | 38.68px | 783.8 | **4** | 177.9 | 57 | 251 | 277 | 411 | 411 | 590 | 1261 | 1331 | 2923 |

## Rendered type on the map

The two map labels are HTML, so nothing in the SVG viewport transform reaches them: their rendered size is
their computed size. The map scale column is the CSS pixels per SVG user unit at that row, printed so the
independence is visible rather than asserted. Any `<text>` still inside an SVG would be reported at computed
size times its screen transform, which is what a reader actually sees; there is none.

| Row | Width | Label | Where | Declared | **Rendered** | Map scale |
|---|---|---|---|---|---|---|
| V1 | 360 | Georgetown, Texas | HTML | 14px | **14px** | 0.624 |
| V1 | 360 | online from anywhere | HTML | 14px | **14px** | 0.624 |
| V2 | 375 | Georgetown, Texas | HTML | 14.01px | **14.01px** | 0.654 |
| V2 | 375 | online from anywhere | HTML | 14.01px | **14.01px** | 0.654 |
| V3 | 390 | Georgetown, Texas | HTML | 14.03px | **14.03px** | 0.684 |
| V3 | 390 | online from anywhere | HTML | 14.03px | **14.03px** | 0.684 |
| V4 | 393 | Georgetown, Texas | HTML | 14.03px | **14.03px** | 0.69 |
| V4 | 393 | online from anywhere | HTML | 14.03px | **14.03px** | 0.69 |
| V5 | 414 | Georgetown, Texas | HTML | 14.05px | **14.05px** | 0.732 |
| V5 | 414 | online from anywhere | HTML | 14.05px | **14.05px** | 0.732 |
| V6 | 412 | Georgetown, Texas | HTML | 14.05px | **14.05px** | 0.728 |
| V6 | 412 | online from anywhere | HTML | 14.05px | **14.05px** | 0.728 |
| V7 | 402 | Georgetown, Texas | HTML | 14.04px | **14.04px** | 0.708 |
| V7 | 402 | online from anywhere | HTML | 14.04px | **14.04px** | 0.708 |
| V8 | 430 | Georgetown, Texas | HTML | 14.07px | **14.07px** | 0.764 |
| V8 | 430 | online from anywhere | HTML | 14.07px | **14.07px** | 0.764 |
| V9 | 390 | Georgetown, Texas | HTML | 14.03px | **14.03px** | 0.684 |
| V9 | 390 | online from anywhere | HTML | 14.03px | **14.03px** | 0.684 |
| V10 | 750 | Georgetown, Texas | HTML | 14.36px | **14.36px** | 1.372 |
| V10 | 750 | online from anywhere | HTML | 14.36px | **14.36px** | 1.372 |
| V11 | 768 | Georgetown, Texas | HTML | 14.38px | **14.38px** | 1.408 |
| V11 | 768 | online from anywhere | HTML | 14.38px | **14.38px** | 1.408 |
| V12 | 834 | Georgetown, Texas | HTML | 14.44px | **14.44px** | 1.54 |
| V12 | 834 | online from anywhere | HTML | 14.44px | **14.44px** | 1.54 |
| V13 | 1024 | Georgetown, Texas | HTML | 14.62px | **14.62px** | 1.664 |
| V13 | 1024 | online from anywhere | HTML | 14.62px | **14.62px** | 1.664 |
| V14 | 1280 | Georgetown, Texas | HTML | 14.85px | **14.85px** | 0.8 |
| V14 | 1280 | online from anywhere | HTML | 14.85px | **14.85px** | 0.8 |
| V15 | 1366 | Georgetown, Texas | HTML | 14.93px | **14.93px** | 0.9003 |
| V15 | 1366 | online from anywhere | HTML | 14.93px | **14.93px** | 0.9003 |
| V16 | 1440 | Georgetown, Texas | HTML | 15px | **15px** | 0.8907 |
| V16 | 1440 | online from anywhere | HTML | 15px | **15px** | 0.8907 |
| V17 | 1920 | Georgetown, Texas | HTML | 15px | **15px** | 0.8907 |
| V17 | 1920 | online from anywhere | HTML | 15px | **15px** | 0.8907 |
| V18 | 320 | Georgetown, Texas | HTML | 14px | **14px** | 0.544 |
| V18 | 320 | online from anywhere | HTML | 14px | **14px** | 0.544 |
| V19 | 1024 | Georgetown, Texas | HTML | 14.62px | **14.62px** | 1.664 |
| V19 | 1024 | online from anywhere | HTML | 14.62px | **14.62px** | 1.664 |

**Rendered label size across all 19 rows: 14.00px to 15.00px, inside --text-sm's 14 to 15px. 0 labels remain inside an SVG.**

## Every ring against every edge of its frame

Solved, not eyeballed: for each ring the harness intersects the circle with each edge of the frame the crop
actually shows (`xMidYMid slice` of the 500-unit viewBox) and prints the crossing coordinates in user units.
A ring with no crossing on any edge is a closed circle around the campus, which is the catchment idiom this
direction must not draw. "visible" is false when the whole frame falls inside the circle.

| Row | Width | Frame (user units) | Ring | r | Left | Right | Top | Bottom | Edges crossed | Visible |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 | 500 x 352.1 | ring--3 | 290 | 103.3, 396.9 | 103, 397.2 | 19.7, 480.5 | 19.6, 480.6 | **4** | true |
| V1 | 360 | 500 x 352.1 | ring--2 | 235 | — | — | 94.5, 405.7 | 94.3, 405.9 | **2** | true |
| V1 | 360 | 500 x 352.1 | ring--1 | 190 | — | — | 178.9, 321.3 | 178.4, 321.8 | **2** | true |
| V2 | 375 | 500 x 352.1 | ring--3 | 290 | 103.3, 396.9 | 103, 397.2 | 19.7, 480.5 | 19.6, 480.6 | **4** | true |
| V2 | 375 | 500 x 352.1 | ring--2 | 235 | — | — | 94.6, 405.6 | 94.3, 405.9 | **2** | true |
| V2 | 375 | 500 x 352.1 | ring--1 | 190 | — | — | 178.9, 321.3 | 178.4, 321.8 | **2** | true |
| V3 | 390 | 500 x 352.1 | ring--3 | 290 | 103.3, 396.9 | 103, 397.2 | 19.7, 480.5 | 19.6, 480.6 | **4** | true |
| V3 | 390 | 500 x 352.1 | ring--2 | 235 | — | — | 94.6, 405.6 | 94.3, 405.9 | **2** | true |
| V3 | 390 | 500 x 352.1 | ring--1 | 190 | — | — | 178.9, 321.3 | 178.4, 321.8 | **2** | true |
| V4 | 393 | 500 x 352.1 | ring--3 | 290 | 103.3, 396.9 | 103, 397.2 | 19.7, 480.5 | 19.6, 480.6 | **4** | true |
| V4 | 393 | 500 x 352.1 | ring--2 | 235 | — | — | 94.6, 405.6 | 94.3, 405.9 | **2** | true |
| V4 | 393 | 500 x 352.1 | ring--1 | 190 | — | — | 178.9, 321.3 | 178.4, 321.8 | **2** | true |
| V5 | 414 | 500 x 352.1 | ring--3 | 290 | 103.3, 396.9 | 103, 397.2 | 19.7, 480.5 | 19.6, 480.6 | **4** | true |
| V5 | 414 | 500 x 352.1 | ring--2 | 235 | — | — | 94.5, 405.7 | 94.3, 405.9 | **2** | true |
| V5 | 414 | 500 x 352.1 | ring--1 | 190 | — | — | 178.9, 321.3 | 178.4, 321.8 | **2** | true |
| V6 | 412 | 500 x 352.1 | ring--3 | 290 | 103.3, 396.9 | 103, 397.2 | 19.7, 480.5 | 19.6, 480.6 | **4** | true |
| V6 | 412 | 500 x 352.1 | ring--2 | 235 | — | — | 94.5, 405.7 | 94.3, 405.9 | **2** | true |
| V6 | 412 | 500 x 352.1 | ring--1 | 190 | — | — | 178.9, 321.3 | 178.4, 321.8 | **2** | true |
| V7 | 402 | 500 x 352.1 | ring--3 | 290 | 103.3, 396.9 | 103, 397.2 | 19.7, 480.5 | 19.6, 480.6 | **4** | true |
| V7 | 402 | 500 x 352.1 | ring--2 | 235 | — | — | 94.5, 405.7 | 94.3, 405.9 | **2** | true |
| V7 | 402 | 500 x 352.1 | ring--1 | 190 | — | — | 178.9, 321.3 | 178.4, 321.8 | **2** | true |
| V8 | 430 | 500 x 352.1 | ring--3 | 290 | 103.3, 396.9 | 103, 397.2 | 19.7, 480.5 | 19.6, 480.6 | **4** | true |
| V8 | 430 | 500 x 352.1 | ring--2 | 235 | — | — | 94.5, 405.7 | 94.3, 405.9 | **2** | true |
| V8 | 430 | 500 x 352.1 | ring--1 | 190 | — | — | 178.9, 321.3 | 178.4, 321.8 | **2** | true |
| V9 | 390 | 500 x 352.1 | ring--3 | 290 | 103.3, 396.9 | 103, 397.2 | 19.7, 480.5 | 19.6, 480.6 | **4** | true |
| V9 | 390 | 500 x 352.1 | ring--2 | 235 | — | — | 94.6, 405.6 | 94.3, 405.9 | **2** | true |
| V9 | 390 | 500 x 352.1 | ring--1 | 190 | — | — | 178.9, 321.3 | 178.4, 321.8 | **2** | true |
| V10 | 750 | 500 x 352.1 | ring--3 | 290 | 103.3, 396.9 | 103, 397.2 | 19.7, 480.5 | 19.6, 480.6 | **4** | true |
| V10 | 750 | 500 x 352.1 | ring--2 | 235 | — | — | 94.6, 405.6 | 94.3, 405.9 | **2** | true |
| V10 | 750 | 500 x 352.1 | ring--1 | 190 | — | — | 178.9, 321.3 | 178.4, 321.8 | **2** | true |
| V11 | 768 | 500 x 352.1 | ring--3 | 290 | 103.3, 396.9 | 103, 397.2 | 19.7, 480.5 | 19.6, 480.6 | **4** | true |
| V11 | 768 | 500 x 352.1 | ring--2 | 235 | — | — | 94.6, 405.6 | 94.3, 405.9 | **2** | true |
| V11 | 768 | 500 x 352.1 | ring--1 | 190 | — | — | 178.9, 321.3 | 178.4, 321.8 | **2** | true |
| V12 | 834 | 500 x 352.1 | ring--3 | 290 | 103.3, 396.9 | 103, 397.2 | 19.7, 480.5 | 19.6, 480.6 | **4** | true |
| V12 | 834 | 500 x 352.1 | ring--2 | 235 | — | — | 94.6, 405.6 | 94.3, 405.9 | **2** | true |
| V12 | 834 | 500 x 352.1 | ring--1 | 190 | — | — | 178.9, 321.3 | 178.4, 321.8 | **2** | true |
| V13 | 1024 | 500 x 352.1 | ring--3 | 290 | 103.3, 396.9 | 103, 397.2 | 19.7, 480.5 | 19.6, 480.6 | **4** | true |
| V13 | 1024 | 500 x 352.1 | ring--2 | 235 | — | — | 94.6, 405.6 | 94.3, 405.9 | **2** | true |
| V13 | 1024 | 500 x 352.1 | ring--1 | 190 | — | — | 178.9, 321.3 | 178.4, 321.8 | **2** | true |
| V14 | 1280 | 500 x 352.1 | ring--3 | 290 | 103.3, 396.9 | 103, 397.2 | 19.7, 480.5 | 19.6, 480.6 | **4** | true |
| V14 | 1280 | 500 x 352.1 | ring--2 | 235 | — | — | 94.6, 405.6 | 94.3, 405.9 | **2** | true |
| V14 | 1280 | 500 x 352.1 | ring--1 | 190 | — | — | 178.9, 321.3 | 178.4, 321.8 | **2** | true |
| V15 | 1366 | 500 x 352.1 | ring--3 | 290 | 103.3, 396.9 | 103, 397.2 | 19.7, 480.5 | 19.6, 480.6 | **4** | true |
| V15 | 1366 | 500 x 352.1 | ring--2 | 235 | — | — | 94.5, 405.7 | 94.3, 405.9 | **2** | true |
| V15 | 1366 | 500 x 352.1 | ring--1 | 190 | — | — | 178.9, 321.3 | 178.4, 321.8 | **2** | true |
| V16 | 1440 | 500 x 352.1 | ring--3 | 290 | 103.3, 396.9 | 103, 397.2 | 19.7, 480.5 | 19.6, 480.6 | **4** | true |
| V16 | 1440 | 500 x 352.1 | ring--2 | 235 | — | — | 94.6, 405.6 | 94.3, 405.9 | **2** | true |
| V16 | 1440 | 500 x 352.1 | ring--1 | 190 | — | — | 178.9, 321.3 | 178.4, 321.8 | **2** | true |
| V17 | 1920 | 500 x 352.1 | ring--3 | 290 | 103.3, 396.9 | 103, 397.2 | 19.7, 480.5 | 19.6, 480.6 | **4** | true |
| V17 | 1920 | 500 x 352.1 | ring--2 | 235 | — | — | 94.6, 405.6 | 94.3, 405.9 | **2** | true |
| V17 | 1920 | 500 x 352.1 | ring--1 | 190 | — | — | 178.9, 321.3 | 178.4, 321.8 | **2** | true |
| V18 | 320 | 500 x 352.1 | ring--3 | 290 | 103.3, 396.9 | 103, 397.2 | 19.7, 480.5 | 19.6, 480.6 | **4** | true |
| V18 | 320 | 500 x 352.1 | ring--2 | 235 | — | — | 94.6, 405.6 | 94.3, 405.9 | **2** | true |
| V18 | 320 | 500 x 352.1 | ring--1 | 190 | — | — | 178.9, 321.3 | 178.4, 321.8 | **2** | true |
| V19 | 1024 | 500 x 352.1 | ring--3 | 290 | 103.3, 396.9 | 103, 397.2 | 19.7, 480.5 | 19.6, 480.6 | **4** | true |
| V19 | 1024 | 500 x 352.1 | ring--2 | 235 | — | — | 94.6, 405.6 | 94.3, 405.9 | **2** | true |
| V19 | 1024 | 500 x 352.1 | ring--1 | 190 | — | — | 178.9, 321.3 | 178.4, 321.8 | **2** | true |

**Closed rings at any row: 0. Rows where the ring set leaves the frame on all four edges: 19 of 19.**

## Clearance

The key sits outside the drawing by construction: it is a sibling of the `<svg>`, not a layer over it. The
gap below is the distance in CSS pixels from each key element to the map box, and the last row is the
smallest distance from the Texas outline to the frame that crops it, which must stay positive or the state
itself would be cut.

| Row | Width | Element | Gap to the map box (px) |
|---|---|---|---|
| V1 | 360 | key-glyph | 16 |
| V1 | 360 | Georgetown, Texas | 33.78 |
| V1 | 360 | key-glyph | 77.08 |
| V1 | 360 | online from anywhere | 94.86 |
| V1 | 360 | land inside the frame | 6.27 |
| V2 | 375 | key-glyph | 16 |
| V2 | 375 | Georgetown, Texas | 33.78 |
| V2 | 375 | key-glyph | 77.08 |
| V2 | 375 | online from anywhere | 94.86 |
| V2 | 375 | land inside the frame | 6.58 |
| V3 | 390 | key-glyph | 16 |
| V3 | 390 | Georgetown, Texas | 33.77 |
| V3 | 390 | key-glyph | 77.08 |
| V3 | 390 | online from anywhere | 94.84 |
| V3 | 390 | land inside the frame | 6.88 |
| V4 | 393 | key-glyph | 16 |
| V4 | 393 | Georgetown, Texas | 33.77 |
| V4 | 393 | key-glyph | 77.08 |
| V4 | 393 | online from anywhere | 94.84 |
| V4 | 393 | land inside the frame | 6.94 |
| V5 | 414 | key-glyph | 16 |
| V5 | 414 | Georgetown, Texas | 33.77 |
| V5 | 414 | key-glyph | 77.08 |
| V5 | 414 | online from anywhere | 94.84 |
| V5 | 414 | land inside the frame | 7.36 |
| V6 | 412 | key-glyph | 16 |
| V6 | 412 | Georgetown, Texas | 33.77 |
| V6 | 412 | key-glyph | 77.08 |
| V6 | 412 | online from anywhere | 94.84 |
| V6 | 412 | land inside the frame | 7.32 |
| V7 | 402 | key-glyph | 16 |
| V7 | 402 | Georgetown, Texas | 33.77 |
| V7 | 402 | key-glyph | 77.08 |
| V7 | 402 | online from anywhere | 94.84 |
| V7 | 402 | land inside the frame | 7.11 |
| V8 | 430 | key-glyph | 16 |
| V8 | 430 | Georgetown, Texas | 33.75 |
| V8 | 430 | key-glyph | 77.08 |
| V8 | 430 | online from anywhere | 94.83 |
| V8 | 430 | land inside the frame | 7.68 |
| V9 | 390 | key-glyph | 16 |
| V9 | 390 | Georgetown, Texas | 33.77 |
| V9 | 390 | key-glyph | 77.08 |
| V9 | 390 | online from anywhere | 94.84 |
| V9 | 390 | land inside the frame | 6.88 |
| V10 | 750 | key-glyph | 16 |
| V10 | 750 | Georgetown, Texas | 33.56 |
| V10 | 750 | key-glyph | 16 |
| V10 | 750 | online from anywhere | 33.56 |
| V10 | 750 | land inside the frame | 13.79 |
| V11 | 768 | key-glyph | 16 |
| V11 | 768 | Georgetown, Texas | 33.55 |
| V11 | 768 | key-glyph | 16 |
| V11 | 768 | online from anywhere | 33.55 |
| V11 | 768 | land inside the frame | 14.15 |
| V12 | 834 | key-glyph | 16 |
| V12 | 834 | Georgetown, Texas | 33.52 |
| V12 | 834 | key-glyph | 16 |
| V12 | 834 | online from anywhere | 33.52 |
| V12 | 834 | land inside the frame | 15.48 |
| V13 | 1024 | key-glyph | 16 |
| V13 | 1024 | Georgetown, Texas | 33.41 |
| V13 | 1024 | key-glyph | 16 |
| V13 | 1024 | online from anywhere | 33.41 |
| V13 | 1024 | land inside the frame | 16.73 |
| V14 | 1280 | key-glyph | 24 |
| V14 | 1280 | Georgetown, Texas | 152 |
| V14 | 1280 | key-glyph | 24 |
| V14 | 1280 | online from anywhere | 152 |
| V14 | 1280 | land inside the frame | 8.04 |
| V15 | 1366 | key-glyph | 24 |
| V15 | 1366 | Georgetown, Texas | 152 |
| V15 | 1366 | key-glyph | 24 |
| V15 | 1366 | online from anywhere | 24 |
| V15 | 1366 | land inside the frame | 9.05 |
| V16 | 1440 | key-glyph | 24 |
| V16 | 1440 | Georgetown, Texas | 192 |
| V16 | 1440 | key-glyph | 24 |
| V16 | 1440 | online from anywhere | 192 |
| V16 | 1440 | land inside the frame | 8.96 |
| V17 | 1920 | key-glyph | 24 |
| V17 | 1920 | Georgetown, Texas | 192 |
| V17 | 1920 | key-glyph | 24 |
| V17 | 1920 | online from anywhere | 192 |
| V17 | 1920 | land inside the frame | 8.96 |
| V18 | 320 | key-glyph | 16 |
| V18 | 320 | Georgetown, Texas | 33.78 |
| V18 | 320 | key-glyph | 77.08 |
| V18 | 320 | online from anywhere | 94.86 |
| V18 | 320 | land inside the frame | 5.47 |
| V19 | 1024 | key-glyph | 16 |
| V19 | 1024 | Georgetown, Texas | 33.41 |
| V19 | 1024 | key-glyph | 16 |
| V19 | 1024 | online from anywhere | 33.41 |
| V19 | 1024 | land inside the frame | 16.73 |

**Smallest gap between a key element and the drawing: 16.00px. Smallest clearance from the Texas outline to its frame: 5.47px. Zero overlapping pairs at any row.**

Element crops regenerated in this run: crop-map-1440.jpg, crop-map-390.jpg, crop-locations-390.jpg, crop-table-1440.jpg, crop-table-390.jpg, crop-proof-1440.jpg, crop-steps-1440.jpg, crop-footer-1440.jpg, crop-footer-390.jpg, crop-doors-375.jpg. Continuity pairs: continuity-390.jpg, continuity-1440.jpg.
