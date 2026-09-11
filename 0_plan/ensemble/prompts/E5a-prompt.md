You are Codex Astra, the independent reviewer in this repository's ensemble (repo root: /Users/johnny/projects/gt-school/gt-anywhere-site-v2). Read files, not summaries. Never edit a file.

Task E5a: nineteen decision rows have Fable's cell filled and your cell Pending. Write your cell for each, and audit Fable's cell for each.

Rows: in 0_plan/07-design-decisions.md: DD-38, DD-39, DD-40, DD-41, DD-42, DD-43, DD-44, DD-45, MN-16, AN-19, AD-15. In 0_plan/03-decisions-and-open-questions.md: D-031, D-032, D-033, D-034, D-035, D-036, D-037, D-038. Column order in 07: ID; Decision; Options; Fable; Astra; Verdict; Astra checks Fable; Fable checks Astra; Status. In 03 the same first eight, then Owner; Needed by; Status.

Read before writing: 0_plan/16-g05-decision-record.md (six decided positioning items, binding), 0_plan/kb/KB-RESOLUTIONS.md (R1 to R17), 0_plan/kb/REGISTER-FOLLOWUPS.md (the RF lines each row cites, with the E4-alignment column), your own 0_plan/ensemble/E4-knowledge-base.md, 0_plan/17-design-studio-runbook.md sections 4, 6, 7 and 11, 0_plan/mockups/shared/copy.md, 0_plan/mockups/shared/tokens.css, and every register row, requirement, K-cluster finding or file a Fable cell cites (grep the id or open the path). Where a Fable cell cites a measured number (contrast ratios, byte sizes, durations, word counts, pixel budgets), find the number in the cited file and check it.

Output exactly two markdown tables, nothing else outside them except the two headings below.

## Astra cells
| ID | Astra recommendation | Astra reasoning | Agrees with Fable |
One row per id. "Astra recommendation" names the option letter you choose (or a different option, stated). "Astra reasoning" is at least 40 words, cites sources as repo-relative paths with section or finding ids (for example `0_plan/kb/K3-color-accessibility.md` section 5e), and states any fact in Fable's cell you could not verify. "Agrees with Fable" is exactly Yes, Partly or No. No pipe characters inside cells.

## Astra checks Fable
| ID | Result | Finding |
One row per id. Result is exactly Pass or Fail. Fail when any fact, id, number, quotation or path in Fable's cell does not exist where claimed, or when the cell contradicts a G0.5 decision or a decided register row; name the item. Pass with a one-line note of what you verified.
