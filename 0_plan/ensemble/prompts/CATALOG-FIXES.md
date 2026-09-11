# Catalog batch-file corrections after Astra E5 (2026-09-11)

Scope: `0_plan/kb/CONCEPTS-A.md`, `CONCEPTS-B.md`, `CONCEPTS-C.md`, `CONCEPTS-D.md` only. Verify each item against the file before changing it; if Astra's item is wrong about the file, record the disagreement in a "Corrections after E5" section at the end of that file instead of changing the text. Keep everything else. No pipe characters inside cells. Finish by running the table-shape check: every row in a table has the same pipe count as its header (escaped `\|` allowed).

| # | File | Item | Fix |
|---|---|---|---|
| 1 | A | Cross-index row 9 keeps a 20-word headline cap and proposes a five-word standard | The decided 22-word sentence is the fixed input (`0_plan/16-g05-decision-record.md` item 1, `0_plan/kb/KB-RESOLUTIONS.md` R2); short headlines are an observation about the corpus, not a GT rule |
| 2 | A | Motion cross-row endorses 0.2 to 0.5 s transitions | The retained scale is 100, 200 and 300 ms with 300 ms as the ceiling; colour changes are instant (K4 section 8.1 as reworked, R9) |
| 3 | A | Claims that shared tokens zero reduced-motion durations and that GT already uses WOFF2 | Neither is true of `0_plan/mockups/shared/tokens.css` or the mirror (18 TTF files, no woff2); `tokens-v2.css` (proposed) zeroes durations under reduced motion; woff2 is D-038 (proposed) |
| 4 | A | Caltech described as still | Autoplay media is present; the stillness is about authored transitions only |
| 5 | B | Cites K1 section 8 or 8.1 for the sticky-header caution | K1 has no section 8; find the actual section in `0_plan/kb/K1-composition.md` (grep sticky) and cite it |
| 6 | B, D | Dark-band policy located in K3 section 5a, or CS5 in section 5f | K3 section 5a is arithmetic; CS5 and CS6 live in section 5g of `0_plan/kb/K3-color-accessibility.md`; CS6 is an Option (R15) |
| 7 | C | AREA 17 blank regions described as scroll gating | Batch C's own capture note leaves the cause unresolved; say so wherever the file asserts gating |
| 8 | C | AREA 17's 393 words called the lowest | Equinox has 362 in the same table; correct the comparative |
| 9 | C | Tate called the slowest across 73 sites | The duration comparison covers the measured set only; limit the claim to that set and cite the K4 row |
| 10 | C | Harvard's homepage described as identity-only | It was a 9/11 commemoration on the captured date; qualify as a dated capture |
| 11 | D | "Fifteen" cross-concepts | The table has 20 rows |
| 12 | D | COLLINS 5,402 px called the shortest page | SFMOMA is 4,972 px in the same batch |
| 13 | D | "Rewrite your worth." counted as four words | Three |
| 14 | D | V9 described as allowing controlled autoplay | K4 section 8.1 V9 is user-driven only, no autoplay |
| 15 | D | Continuous-sentence row keeps a 20-word cap | As item 1 |
| 16 | A, B, C, D | Any mandatory dark-band or device count, or rejection of dark defaults, stated as a rule | Options under R15; the decided envelope is DD-19 |
| 17 | A | Batch A says Avenues' campus cards are first-screen doors | Batch A itself records them below the hero; state placement as observed |
| 18 | A | RISD or any exemplar's founding year "clears REQ-022 without a register decision" (batch D) | Any figure on a GT surface needs a claims-register row (REQ-022); keep the borrow with that condition |
