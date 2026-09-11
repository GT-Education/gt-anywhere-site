# M10 measurements

Runner: `qa/M10-measure.mjs`, headless Chromium 151.0.7922.34, 2026-09-11T14:59:58.856Z.

## h1 line counts and first-screen bottoms

| Row | Viewport | h1 size | h1 width | h1 lines | h1 height | header | h1 | provenance | CTA Georgetown | CTA Anywhere | compare | map | locations | band 1 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | 27px | 312 | **7** | 217.3 | 89 | 322 | 348 | 494 | 620 | 884 | 1404 | 1474 | 4435 |
| V2 | 375 by 629 | 27.26px | 327 | **7** | 219.4 | 57 | 292 | 318 | 464 | 590 | 855 | 1399 | 1469 | 4320 |
| V3 | 390 by 664 | 27.53px | 342 | **7** | 221.6 | 57 | 295 | 320 | 450 | 576 | 841 | 1410 | 1480 | 4272 |
| V4 | 393 by 659 | 27.58px | 345 | **7** | 221.9 | 57 | 295 | 320 | 450 | 577 | 841 | 1415 | 1485 | 4277 |
| V5 | 414 by 715 | 27.95px | 366 | **6** | 192.8 | 57 | 266 | 291 | 421 | 548 | 789 | 1396 | 1466 | 4218 |
| V6 | 412 by 839 | 27.92px | 364 | **6** | 192.7 | 57 | 266 | 291 | 505 | 720 | 799 | 1403 | 1473 | 4236 |
| V7 | 402 by 681 | 27.74px | 354 | **7** | 223.2 | 57 | 296 | 322 | 451 | 578 | 843 | 1431 | 1501 | 4251 |
| V8 | 430 by 739 | 28.23px | 382 | **6** | 194.8 | 57 | 268 | 293 | 423 | 550 | 791 | 1425 | 1495 | 4129 |
| V9 | 390 by 844 | 27.53px | 342 | **7** | 221.6 | 57 | 295 | 320 | 534 | 749 | 827 | 1396 | 1466 | 4270 |
| V10 | 750 by 342 | 24.17px | 686 | **3** | 83.4 | 57 | 148 | 170 | 295 | 295 | 455 | 747 | 809 | 3092 |
| V11 | 768 by 1024 | 34.18px | 692.5 | **4** | 157.2 | 57 | 230 | 256 | 501 | 501 | 557 | 863 | 933 | 2804 |
| V12 | 834 by 1194 | 35.34px | 716 | **4** | 162.6 | 57 | 236 | 262 | 482 | 482 | 539 | 845 | 915 | 2769 |
| V13 | 1024 by 768 | 38.68px | 783.8 | **4** | 177.9 | 57 | 251 | 277 | 411 | 411 | 590 | 896 | 966 | 2687 |
| V14 | 1280 by 720 | 43.19px | 802.5 | **4** | 198.6 | 57 | 272 | 298 | 439 | 586 | 643 | 603 | 751 | 2490 |
| V15 | 1366 by 648 | 44.7px | 859.3 | **4** | 205.6 | 57 | 279 | 305 | 447 | 594 | 652 | 611 | 747 | 2427 |
| V16 | 1440 by 900 | 46px | 908.2 | **4** | 211.6 | 57 | 293 | 319 | 469 | 616 | 682 | 633 | 781 | 2466 |
| V17 | 1920 by 960 | 46px | 908.2 | **4** | 211.6 | 57 | 293 | 319 | 469 | 616 | 682 | 633 | 781 | 2526 |
| V18 | 320 by 256 | 27px | 272 | **8** | 248.4 | 89 | 353 | 396 | 542 | 668 | 956 | 1412 | 1511 | 4593 |
| V19 | 1024 by 576 | 38.68px | 783.8 | **4** | 177.9 | 57 | 251 | 277 | 411 | 411 | 590 | 896 | 966 | 2687 |

## SVG label clearance

Per-glyph extents (`getExtentOfChar`) against every drawn shape in the same SVG: the land outline and the
inset outlines sampled along the real path, the rings and the key rings solved analytically against the
stroke band, the pin and the leaders sampled. Clearance is in CSS pixels; 0 would be an overlap.

| Row | Width | Map | Label | Font | Rendered | Land px | Rings px | Nearest shape | Nearest px |
|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 | tall | Georgetown, Texas | 14px | 110.3x15 | 46.3 | 23.77 | pin-halo | 14.06 |
| V1 | 360 | tall | online from anywhere | 14px | 122.7x15 | 19.52 | 59.7 | key-ring key-ring--3 | 8.62 |
| V2 | 375 | tall | Georgetown, Texas | 14.01px | 115.8x16 | 48.07 | 24.46 | pin-halo | 14.73 |
| V2 | 375 | tall | online from anywhere | 14.01px | 128.8x16 | 20.61 | 62.13 | key-ring key-ring--3 | 9.03 |
| V3 | 390 | tall | Georgetown, Texas | 14.03px | 121.2x17 | 49.87 | 25.17 | pin-halo | 15.41 |
| V3 | 390 | tall | online from anywhere | 14.03px | 134.8x17 | 21.69 | 64.57 | key-ring key-ring--3 | 9.44 |
| V4 | 393 | tall | Georgetown, Texas | 14.03px | 122.3x17 | 50.4 | 25.5 | pin-halo | 15.54 |
| V4 | 393 | tall | online from anywhere | 14.03px | 136.1x17 | 21.9 | 65.26 | key-ring key-ring--3 | 9.53 |
| V5 | 414 | tall | Georgetown, Texas | 14.05px | 129.9x18 | 54.21 | 27.86 | pin-halo | 16.49 |
| V5 | 414 | tall | online from anywhere | 14.05px | 144.5x18 | 22.42 | 70.06 | key-ring key-ring--3 | 10.11 |
| V6 | 412 | tall | Georgetown, Texas | 14.05px | 129.2x18 | 53.83 | 27.63 | pin-halo | 16.4 |
| V6 | 412 | tall | online from anywhere | 14.05px | 143.7x18 | 22.28 | 69.6 | key-ring key-ring--3 | 10.05 |
| V7 | 402 | tall | Georgetown, Texas | 14.04px | 125.6x17 | 52.04 | 26.52 | pin-halo | 15.95 |
| V7 | 402 | tall | online from anywhere | 14.04px | 139.7x17 | 22.55 | 67.32 | key-ring key-ring--3 | 9.78 |
| V8 | 430 | tall | Georgetown, Texas | 14.07px | 135.7x19 | 56.16 | 28.67 | pin-halo | 17.21 |
| V8 | 430 | tall | online from anywhere | 14.07px | 151x19 | 23.58 | 72.73 | key-ring key-ring--3 | 10.55 |
| V9 | 390 | tall | Georgetown, Texas | 14.03px | 121.2x17 | 49.87 | 25.17 | pin-halo | 15.41 |
| V9 | 390 | tall | online from anywhere | 14.03px | 134.8x17 | 21.69 | 64.57 | key-ring key-ring--3 | 9.44 |
| V10 | 750 | wide | Georgetown, Texas | 14.36px | 122.3x17 | 11.51 | 43.02 | leader | 5.78 |
| V10 | 750 | wide | online from anywhere | 14.36px | 136.1x17 | 80.27 | 52.74 | key-ring key-ring--3 | 8.82 |
| V11 | 768 | wide | Georgetown, Texas | 14.38px | 125x17 | 12.03 | 43.9 | leader | 5.9 |
| V11 | 768 | wide | online from anywhere | 14.38px | 139x17 | 82.17 | 53.9 | key-ring key-ring--3 | 9 |
| V12 | 834 | wide | Georgetown, Texas | 14.44px | 125.5x17 | 12.03 | 43.9 | leader | 5.9 |
| V12 | 834 | wide | online from anywhere | 14.44px | 139.6x17 | 82.05 | 53.9 | key-ring key-ring--3 | 9 |
| V13 | 1024 | wide | Georgetown, Texas | 14.62px | 127x18 | 12.03 | 43.9 | leader | 5.9 |
| V13 | 1024 | wide | online from anywhere | 14.62px | 141.3x18 | 81.73 | 53.9 | key-ring key-ring--3 | 9 |
| V14 | 1280 | wide | Georgetown, Texas | 14.85px | 128.3x18 | 11.88 | 43.65 | leader | 5.87 |
| V14 | 1280 | wide | online from anywhere | 14.85px | 142.7x18 | 80.82 | 53.57 | key-ring key-ring--3 | 8.95 |
| V15 | 1366 | wide | Georgetown, Texas | 14.93px | 129.8x18 | 12.03 | 43.9 | leader | 5.9 |
| V15 | 1366 | wide | online from anywhere | 14.93px | 144.4x18 | 81.26 | 53.9 | key-ring key-ring--3 | 9 |
| V16 | 1440 | wide | Georgetown, Texas | 15px | 130.4x19 | 11.03 | 43.9 | leader | 5.9 |
| V16 | 1440 | wide | online from anywhere | 15px | 145.1x19 | 80.18 | 53.6 | key-ring key-ring--3 | 9 |
| V17 | 1920 | wide | Georgetown, Texas | 15px | 130.4x19 | 11.03 | 43.9 | leader | 5.9 |
| V17 | 1920 | wide | online from anywhere | 15px | 145.1x19 | 80.18 | 53.6 | key-ring key-ring--3 | 9 |
| V18 | 320 | tall | Georgetown, Texas | 14px | 96.2x14 | 39.88 | 20.2 | pin-halo | 12.26 |
| V18 | 320 | tall | online from anywhere | 14px | 107x14 | 16.64 | 51.51 | key-ring key-ring--3 | 7.51 |
| V19 | 1024 | wide | Georgetown, Texas | 14.62px | 127x18 | 12.03 | 43.9 | leader | 5.9 |
| V19 | 1024 | wide | online from anywhere | 14.62px | 141.3x18 | 81.73 | 53.9 | key-ring key-ring--3 | 9 |

**Smallest clearance to land: 11.03px. Smallest clearance to a map ring: 20.20px.**
**Smallest clearance to any drawn shape: 5.78px (V10 Georgetown, Texas vs leader). Zero overlapping pairs at any row.**
