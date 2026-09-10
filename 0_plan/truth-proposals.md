# Truth proposals (agents write here; humans attest in TRUTH.md)

A proposal is a statement an agent believes should become human-attested truth. It carries no authority until a human moves it into `TRUTH.md` with `truth.py attest`. Statements are verbatim substrings of the target document so `truth.py check` can detect drift; a proposal for a whole file uses `sha256:<hash>` as its statement.

| TR | Statement (verbatim, as it appears in the target) | Applies to | Source to verify against | Proposed by | Date | Why it should be truth |
|---|---|---|---|---|---|---|
| TR-001 | Anywhere tuition is $10,400 a year and the Texas TEFA voucher covers it in full for eligible families | `0_plan/00-context.md` | The Anywhere homepage; Nari confirms current figures (Q-011, Q-021) | Fable | 2026-09-10 | Every tuition and access decision (MD-13, MD-25, MD-26) rests on it |
| TR-002 | Admission is for students at the 90th percentile and above | `0_plan/00-context.md` | The Anywhere academics page (R4, CR-011); Crystal confirms (Q-012) | Fable | 2026-09-10 | The exclusivity-by-selectivity principle depends on it |
| TR-003 | the Anywhere homepage calls itself "The Gifted Academy of Alpha School" | `0_plan/00-context.md` | The Anywhere homepage, verified in the mirror | Fable | 2026-09-10 | MD-17 (affiliation prominence) rests on it |
| TR-004 | Academics run on the TimeBack platform for about two hours a day, MAP-aligned, with afternoons for projects | `0_plan/00-context.md` | Anywhere academics page; Nari confirms | Fable | 2026-09-10 | The schedule visual (DD-34) and copy rest on it |
| TR-005 | Property `GT Web — All Sites` (516065070) in account 403360775 (gtschool) | `0_plan/10-analytics-current-state.md` | GA4 Admin API snapshot 2026-09-10 | Fable | 2026-09-10 | Every analytics decision names this property |
| TR-006 | gt.school absent from the hostname report | `0_plan/10-analytics-current-state.md` | GA4 Data API snapshot 2026-09-10 | Fable | 2026-09-10 | REQ-027 and the baseline plan rest on it |
| TR-007 | sha256:ef90b83cdea35c6453bb7ba0f552e012589f2b8c3539c5ed47ed166e4696fea3 | `0_plan/inputs/transcript-2026-09-10-website-redo.md` | Johnny confirms this is the transcript as received | Fable | 2026-09-10 | Primary source for every quotation; a changed transcript would silently invalidate the register |
| TR-008 | Owns both websites and their content; requirements authority | `CLAUDE.md` | Nari confirms; Q-024 confirms the name on record | Fable | 2026-09-10 | Decision authority for every requirement |
| TR-009 | team GT School (GTT), project gt-anywhere | `0_plan/09-operating-model.md` | Linear, Johnny confirms (Q-026) | Fable | 2026-09-10 | Where work status lives (D-018) |
| TR-010 | git@github.com:GT-Education/gt-anywhere-site.git | `CLAUDE.md` | `git remote -v` | Fable | 2026-09-10 | The code system of record |
| TR-011 | Five. Johnny's call on 2026-09-10 | `0_plan/03-decisions-and-open-questions.md#D-011` | Johnny | Fable | 2026-09-10 | A human decision recorded by a model should be attested by the human |
| TR-012 | Decided (platform) 2026-09-10; build gated by D-006 | `0_plan/03-decisions-and-open-questions.md#D-017` | Johnny | Fable | 2026-09-10 | Same |
| TR-013 | three different speed claims (3x, 4x, 3-7x) | `0_plan/00-context.md` | The Anywhere homepage, verified in the mirror | Fable | 2026-09-10 | The claims-governance rule rests on this being real, not a model's reading |
| TR-014 | `page_view` configured as a GA4 key event, inflating conversions | `0_plan/00-context.md` | GA4 Admin API snapshot 2026-09-10 | Fable | 2026-09-10 | REQ-028 rests on it |
| TR-015 | GT School, Inc. | `1_spec/07-seo-aeo-spec.md` | Both sites' legal pages (R4 section 3j) | Fable | 2026-09-10 | The legal name anchors the facts block and structured data |
