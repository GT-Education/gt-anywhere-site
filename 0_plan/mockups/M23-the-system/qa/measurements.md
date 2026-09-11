# M23 measurements

Run 2026-09-11T18:56:11.876Z; Chromium 151.0.7922.34.

| Row | h1 px | h1 lines | h1 bottom | prov bottom | map top | map bottom | card G h | tail G h | card A h | banner top | banner bottom | CTA heights | CTA label lines |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 27 | 7 | 318.33 | 347.33 | 355.33 | 1181.92 | 125.3 | 96 | 125.3 | 1205.92 | 1308.92 | 44, 44 | 1, 1 |
| V2 | 27.26 | 7 | 284.41 | 313.42 | 321.42 | 1100.98 | 125.39 | 96.19 | 125.39 | 1124.98 | 1228.17 | 44, 44 | 1, 1 |
| V3 | 27.53 | 7 | 286.59 | 315.64 | 323.64 | 1104.23 | 125.52 | 96.38 | 125.52 | 1128.23 | 1231.61 | 44, 44 | 1, 1 |
| V4 | 27.58 | 7 | 286.92 | 315.97 | 323.97 | 1104.63 | 125.55 | 96.38 | 125.55 | 1128.63 | 1232.05 | 44, 44 | 1, 1 |
| V5 | 27.95 | 6 | 257.84 | 286.91 | 294.91 | 1052.48 | 125.69 | 96.56 | 125.69 | 1076.48 | 1180.14 | 44, 44 | 1, 1 |
| V6 | 27.92 | 6 | 265.66 | 294.72 | 318.72 | 1116.3 | 125.69 | 96.56 | 125.69 | 1140.3 | 1243.91 | 44, 44 | 1, 1 |
| V7 | 27.74 | 7 | 288.23 | 317.3 | 325.3 | 1106.36 | 125.61 | 96.44 | 125.61 | 1130.36 | 1233.88 | 44, 44 | 1, 1 |
| V8 | 28.23 | 6 | 259.81 | 288.91 | 296.91 | 1055.5 | 125.81 | 96.75 | 125.81 | 1079.5 | 1183.39 | 44, 44 | 1, 1 |
| V9 | 27.53 | 7 | 294.59 | 323.64 | 347.64 | 1168.23 | 125.52 | 96.38 | 125.52 | 1192.23 | 1295.61 | 44, 44 | 1, 1 |
| V10 | 24.17 | 3 | 148.39 | 177.92 | 185.92 | 653.38 | 128.23 | 100.31 | 128.23 | 677.38 | 755.38 | 44, 44 | 1, 1 |
| V11 | 34.18 | 4 | 238.19 | 267.75 | 291.75 | 820.36 | 143.89 | 117.5 | 143.89 | 844.36 | 922.36 | 44, 44 | 1, 1 |
| V12 | 35.34 | 4 | 243.56 | 273.22 | 297.22 | 802.91 | 144.33 | 92.94 | 144.33 | 826.91 | 904.91 | 44, 44 | 1, 1 |
| V13 | 38.68 | 5 | 287.42 | 317.33 | 333.33 | 779.36 | 129.53 | 86.53 | 129.53 | 803.36 | 881.36 | 44, 44 | 1, 1 |
| V14 | 43.19 | 4 | 263.63 | 293.91 | 309.91 | 756.55 | 131.17 | 88.64 | 131.17 | 780.55 | 858.55 | 44, 44 | 1, 1 |
| V15 | 44.7 | 4 | 270.63 | 301.03 | 317.03 | 684.03 | 140.72 | 69.56 | 140.72 | 708.03 | 786.03 | 44, 44 | 1, 1 |
| V16 | 46 | 4 | 292.56 | 323.06 | 339.06 | 813.41 | 148.19 | 80.98 | 148.19 | 837.41 | 915.41 | 44, 44 | 1, 1 |
| V17 | 46 | 4 | 292.56 | 323.06 | 339.06 | 813.44 | 148.19 | 81 | 148.19 | 837.44 | 915.44 | 44, 44 | 1, 1 |
| V18 | 27 | 8 | 349.38 | 378.38 | 386.38 | 1236.97 | 125.3 | 96 | 125.3 | 1260.97 | 1386.97 | 44, 44 | 1, 1 |
| V19 | 38.68 | 5 | 287.42 | 317.33 | 333.33 | 779.36 | 129.53 | 86.53 | 129.53 | 803.36 | 881.36 | 44, 44 | 1, 1 |

## The two door blocks, the arms that land on them, and the map's measure

A block is a door card plus its own tail where the tail is joined to it. The arms are measured from each card's own top edge, not computed from the CSS: the split is anchored to grid edges, and this is the check that it is. A negative arm figure, or one larger than the card, means the arm is a vertical entering the card's top or bottom edge rather than a horizontal entering its side: what matters is that the two doors report the same number.

| Row | block G | block A | difference | arm into G | arm into A | CTA widths | ADMISSIONS characters a line | THE PROGRAM characters a line |
|---|---|---|---|---|---|---|---|---|
| V1 | 125.3 | 125.3 | 0 | 52 | 52 | 282, 282 | 33.67 | 29.71 |
| V2 | 125.39 | 125.39 | 0 | 52 | 52 | 297, 297 | 33.67 | 34.67 |
| V3 | 125.52 | 125.52 | 0 | 52 | 52 | 300, 300 | 33.67 | 34.67 |
| V4 | 125.55 | 125.55 | 0 | 52 | 52 | 303, 303 | 33.67 | 34.67 |
| V5 | 125.69 | 125.69 | 0 | 52 | 52 | 324, 324 | 33.67 | 41.6 |
| V6 | 125.69 | 125.69 | 0 | 52 | 52 | 322, 322 | 33.67 | 41.6 |
| V7 | 125.61 | 125.61 | 0 | 52 | 52 | 312, 312 | 33.67 | 34.67 |
| V8 | 125.81 | 125.81 | 0 | 52 | 52 | 340, 340 | 33.67 | 41.6 |
| V9 | 125.52 | 125.52 | 0 | 52 | 52 | 300, 300 | 33.67 | 34.67 |
| V10 | 128.23 | 128.23 | 0 | 132.23 | 132.23 | 321, 321 | 33.67 | 34.67 |
| V11 | 261.39 | 261.39 | 0 | -11 | -11 | 290, 290 | 33.67 | 34.67 |
| V12 | 237.27 | 237.27 | 0 | -11 | -11 | 323, 323 | 33.67 | 34.67 |
| V13 | 216.06 | 216.06 | 0 | -11 | -11 | 434, 434 | 50.5 | 41.6 |
| V14 | 219.81 | 210.83 | 8.98 | 50 | 50 | 472.67, 472.67 | 25.25 | 29.71 |
| V15 | 140.72 | 140.72 | 0 | 50 | 50 | 510.89, 510.89 | 33.67 | 34.67 |
| V16 | 229.17 | 229.17 | 0 | 58 | 58 | 527.78, 527.78 | 33.67 | 34.67 |
| V17 | 229.19 | 229.19 | 0 | 58 | 58 | 527.78, 527.78 | 33.67 | 34.67 |
| V18 | 125.3 | 125.3 | 0 | 52 | 52 | 270, 270 | 25.25 | 29.71 |
| V19 | 216.06 | 216.06 | 0 | -11 | -11 | 434, 434 | 50.5 | 41.6 |

## Connector geometry and clearance

| Row | segments | all orthogonal | overlapping segment/label pairs | smallest clearance to rendered text | segment | nearest text |
|---|---|---|---|---|---|---|
| V1 | 10 | yes | 0 | 9px | wire--split w-up | "Georgetown Campus" |
| V2 | 10 | yes | 0 | 9px | wire--split w-up | "Georgetown Campus" |
| V3 | 10 | yes | 0 | 9px | wire--split w-up | "Georgetown Campus" |
| V4 | 10 | yes | 0 | 9px | wire--split w-up | "Georgetown Campus" |
| V5 | 10 | yes | 0 | 9px | wire--split w-up | "Georgetown Campus" |
| V6 | 10 | yes | 0 | 9px | wire--split w-up | "Georgetown Campus" |
| V7 | 10 | yes | 0 | 9px | wire--split w-up | "Georgetown Campus" |
| V8 | 10 | yes | 0 | 9px | wire--split w-up | "Georgetown Campus" |
| V9 | 10 | yes | 0 | 9px | wire--split w-up | "Georgetown Campus" |
| V10 | 7 | yes | 0 | 9px | wire--split w-trunk | "Two hours of mastery academi" |
| V11 | 10 | yes | 0 | 17px | wire--run w-h | "One school, one admissions b" |
| V12 | 10 | yes | 0 | 17px | wire--run w-h | "One school, one admissions b" |
| V13 | 10 | yes | 0 | 9px | wire--run w-h | "One school, one admissions b" |
| V14 | 9 | yes | 0 | 9px | wire--run w-h | "One school, one admissions b" |
| V15 | 9 | yes | 0 | 9px | wire--run w-h | "One school, one admissions b" |
| V16 | 9 | yes | 0 | 17px | wire--run w-h | "One school, one admissions b" |
| V17 | 9 | yes | 0 | 17px | wire--run w-h | "One school, one admissions b" |
| V18 | 10 | yes | 0 | 9px | wire--split w-up | "Georgetown Campus" |
| V19 | 10 | yes | 0 | 9px | wire--run w-h | "One school, one admissions b" |

## Contrast of the drawing (computed from the rendered token values)

| Object | Token | On the page ground | On the surface | On the GT Anywhere tint |
|---|---|---|---|---|
| Every card edge, strip rule, tail edge, banner edge, mark chip | `--color-border-strong` | 3.63 | 3.31 | 3.35 |
| Every connector segment and junction dot | `--color-accent-text` | 5.14 | 4.68 | 4.73 |

WCAG 1.4.11 asks 3:1 of a graphical object required to understand the content. In this direction the drawing IS the content, so every line in it is measured against what sits behind it.

## SVG text

None: the diagram carries no `<svg>` element and no SVG text. Every card, label and connector is an HTML box, so no type sits inside a scaled viewBox (the M10 defect).
