# SOURCES: the mapping of sources of truth

| Field | Value |
|---|---|
| Purpose | One table that says, for every kind of fact this project uses, which source is the truth for it, who owns that source, how to verify against it, and which source wins when two disagree. Agents cite these; anything not traceable to a designated source is model-authored or a judgment |
| Who edits | Anyone may add or refine a row with Designation `Proposed`. Only a human designates a source as truth, by running `python3 0_plan/tools/truth.py designate SRC-nnn --by "Name"` from their own terminal; that writes the designation into `TRUTH.md` (humans only) and the Designation column here is derived from it. A `Designated` value here that has no matching row in `TRUTH.md` is a fabrication and fails `truth.py check` |
| Precedence | `TRUTH.md` attested statements win over everything. Then the designated source for the fact's domain. Then planning documents. Model memory and prior-session recollections are never a source |
| Check | `python3 0_plan/tools/truth.py check` |
| Version | 0.1, 2026-09-10 |

## Sources

| SRC | Source | Is the truth for | Location and access | Human owner | Verify by | Wins over | Refresh | Designation |
|---|---|---|---|---|---|---|---|---|
| SRC-001 | The call transcript | What was said on the call: quotations, timestamps, who said what | `0_plan/inputs/transcript-2026-09-10-website-redo.md` | Johnny | Read the file; its hash is proposed as TR-007 | `01-call-summary-website-redo.md` and every paraphrase | Static | Proposed |
| SRC-002 | The live sites | What gt.school and anywhere.gt.school say and do today | https://gt.school and https://anywhere.gt.school, fetched with third-party tags blocked | Nari | Re-mirror with `node tools/mirror.mjs` and diff (DEL-016) | The mirror, `08` section 1, any summary of site copy | At every DEL-016 | Proposed |
| SRC-003 | The mirror | What the Anywhere site said on 2026-07-24, byte for byte | `index.html`, `*/index.html`, `404.html`, `tools/MIRROR-LOG.json`, `README.md` | Johnny | `diff` against a fresh mirror | Summaries of the site | DEL-016 | Proposed |
| SRC-004 | GA4 property 516065070, through the snapshot tool | Sessions, channels, sources, campaigns, events, key events, streams, configuration | `0_plan/tools/ga4-snapshot.py` writing to `0_plan/10-analytics-current-state.md` | Johnny | Re-run the snapshot; compare the dated sections | Every traffic or configuration claim in any other document | Monthly and at every gate | Proposed |
| SRC-005 | Supabase behind apply.gt.school | Applications, enrollments, leads: the conversions of record | The application project's database; read-only MCP; Crystal | Crystal, Nari | Query or Crystal's export; monthly reconciliation (AN-07) | GA4 conversion counts, platform-reported conversions | Monthly | Proposed |
| SRC-006 | HubSpot portal 40051392 | Contacts, meetings booked, email sends | HubSpot MCP; Nari's account | Nari, Crystal | HubSpot reports | Any document's claim about leads or meetings | Monthly | Proposed |
| SRC-007 | Linear, team GT School, project gt-anywhere | Work status | Linear MCP | Johnny | Read the issue | Status columns in any table (D-018) | Live | Proposed |
| SRC-008 | Git, `GT-Education/gt-anywhere-site` | The code and the planning and spec documents as committed | `git log`, `git show` | Johnny | Git | Any description of the code or of what a document says | Live | Proposed |
| SRC-009 | Nari, in writing | Requirements, acceptance of visible work, facts about the schools' offer, content wording | Slack, calls (transcribed into `0_plan/inputs/`), Linear comments | Nari | The written record filed under `0_plan/` | Model inference about what the school is or wants | Per decision | Proposed |
| SRC-010 | Crystal, in writing | Admissions steps, eligibility evidence, wrong-school counts, lead workflow | Slack, Linear comments, the monthly count | Crystal | The written record | Model inference about admissions | Monthly | Proposed |
| SRC-011 | Holly | Brand assets and brand rules for GT School | Files delivered into `0_plan/inputs/` | Holly | The delivered file | Any placeholder lockup or inferred brand rule | Per delivery | Proposed |
| SRC-012 | Johnny's decisions | Project and operating decisions | D rows marked Decided in `0_plan/03`, confirmed in `TRUTH.md` | Johnny | `TRUTH.md` Part A or B | Model recommendations in any register | Per decision | Proposed |
| SRC-013 | The claims register | Every number allowed on any page, ad or structured-data field | `0_plan/12-claims-register.md` (DEL-018, not yet written) | Nari approves wording; Johnny maintains | `1_spec/tools/check-claims.py` (T-005) | Site copy, structured data, ad copy | Per change | Proposed |
| SRC-014 | `docs/ANALYTICS.md` in the v1 checkout | The tag map per surface and the conversion wiring as verified on 2026-08-28 | `~/projects/gt-school/gt-anywhere-site/docs/ANALYTICS.md`, uncommitted | Johnny | Re-verify against the live pages | Older recollections of the tag setup; loses to SRC-004 for anything the snapshot covers | On tag changes | Proposed |
| SRC-015 | Webflow, both projects | Live content and site-level code on gt.school and anywhere.gt.school until cutover | Webflow designer and site settings; MCP from the v1 checkout only | Nari | Publish history; re-mirror | The mirror | Per edit (D-021) | Proposed |
| SRC-016 | TEFA program terms | Eligibility, amounts, windows and required disclaimers | State program documentation (Q-021) | Nari | The program's published terms | Site copy about TEFA | Per program window | Proposed |
| SRC-017 | Alpha network brand guidelines and approved data | Brand rules, approved outcome figures, campus-page conventions | Delivered through DEL-022 (Q-014) | Holly, Nari | The delivered documents | Model recollection of the network | Per delivery | Proposed |

## Not sources of truth

| Not a source | Why | What to do instead |
|---|---|---|
| Model memory, including the auto-memory files | Recollection, not record; can be stale (the GA ownership fact was stale by two weeks) | Cite the source above that the memory points to |
| Planning summaries (`00`, `01`, `08`, `09`, `11`) | Model-authored syntheses of sources | Cite the underlying source; the summary may be quoted for convenience only when the source is named |
| Fable's and Astra's cells | Reasoning about sources | Cite the source the cell cites |
| Rounded or derived figures ("about 2,400 sessions") | Arithmetic on a source is not the source | State the exact figures from the snapshot or show the sum |
| Astra's or Fable's prior knowledge of Alpha School | Unverified prior | `08` section 2 flags these; verify through SRC-017 |
