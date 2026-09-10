# 11 Verification specification

| Field | Value |
|---|---|
| Purpose | Every check that proves a task or requirement is done, who runs it, with what tool, what evidence it leaves, and how the two models verify each other. Also the launch checklist (DEL-020) and the risk register (DEL-019) |
| Decisions applied | D-012, D-023; the completion checklist C-01 to C-15 from `0_plan/05` section 8b |
| Requirements covered | Every REQ; see `12-traceability-matrix.md` for the mapping |
| Version | 0.1, 2026-09-10 |

## 1. Principles

| Principle | Rule |
|---|---|
| Evidence over summary | A verifier opens the artifact and the evidence files; a builder's description is not evidence |
| Two verifiers | Every task has a `Verify-Fable` row and a `Verify-Astra` row; both must Pass; Fable never verifies a Fable-built task, which is why builders are Sonnet |
| Browser, not grep | Page checks are driven in a browser on a server the verifier started; the harness and Playwright produce the screenshots |
| Ceilings | Two verification rounds per task; then escalation with both findings (`10` section 10) |
| Independence | Astra receives file paths and screenshots, never Fable's verdict, before writing its own |

## 2. Verification checks

The repeatable tests behind these checks are the TC rows in `13-testing-suite-spec.md` section 3, derived from the workflow nodes in `0_plan/13-journey-map.md`; a V check without a TC is exercised manually until the suite covers it.

Each V names the tool, the evidence and both verifiers. `V-0nn` numbering follows the requirement it serves where one exists.

| ID | Check | Serves | Tool | Evidence | Verifier |
|---|---|---|---|---|---|
| V-001 | S0 tree restructure: mirrored files byte-identical after the move; harness serves the new root | T-001, REQ-032 | `diff -r`, harness `doctor` | `1_spec/runs/V-001.md` | Fable and Astra |
| V-002 | Vercel previews return `x-robots-tag: noindex`; production branch is `main` | T-002, SE-13 | curl | Header capture | Fable and Astra |
| V-003 | Linear project matches `10` section 6: states, labels, templates, S0 issues | T-003 | Linear read | Screenshot or export | Fable and Astra |
| V-004 | Claims register lists every figure on both sites; conflicts flagged | T-004, REQ-022 | `check-claims.py` against the mirror and the gt.school crawl | Script output | Fable and Astra |
| V-005 | `check-claims.py` fails on an unregistered figure and passes on registered ones | T-005 | Fixture pages | Script output | Fable and Astra |
| V-006 | Container export matches the tracking plan; tags paused; consent categories present | T-006, AN-03 | Export JSON review | Export | Fable and Astra |
| V-007 | GA4 key events corrected; development stream exists; BigQuery export on; linker extended | T-007, REQ-028 | `ga4-snapshot.py` before and after | Snapshot diff | Fable and Astra |
| V-008 | gt.school appears in the hostname report | T-008, REQ-027 | `ga4-snapshot.py` | Snapshot | Fable and Astra |
| V-009 | Fonts: glyph coverage, weight budget, rendering identical to TTF | T-009 | Coverage script; screenshots | Report | Fable and Astra |
| V-010 | Landing exists at the agreed URL presenting both schools | REQ-010 | Browser | Screenshot | Fable and Astra |
| V-011 | First screen at 390 by 844 contains only the umbrella sentence, provenance line, doors and helper entry above the CTAs | REQ-011 | Playwright screenshot at 390 | Screenshot | Fable and Astra |
| V-012 | Five of five test parents choose correctly within ten seconds | REQ-012 | T-022 protocol | `1_spec/runs/T-051.md` | Fable runs; Astra reviews the record |
| V-013 | Comparison block present, shared rows first, reachable from the first screen | REQ-013 | Browser | Screenshot; DOM check | Fable and Astra |
| V-014 | Tokens match `04`; no type or palette outside the envelope without a flagged departure | REQ-014, DD-19 | Computed-style script against `tokens.css` | Report | Fable and Astra |
| V-015 | 390 and 1440 screenshots reviewed; no horizontal scroll; tap targets at least 44px | REQ-015 | Playwright | Screenshots; measurement script | Fable and Astra |
| V-016 | Application steps present per school, facts verified by Crystal | REQ-016 | Browser; Crystal's confirmation | Screenshot; note | Fable and Astra |
| V-017 | "Current families" in the header; no phone number on the first screen | REQ-017 | Browser; DOM check | Screenshot | Fable and Astra |
| V-018 | Full school names in every label | REQ-018 | DOM text check | Script output | Fable and Astra |
| V-019 | Five distinct mocks with rationale rows; Nari's written choice | REQ-019 | Gallery review; RUN-LOG gate row | Gallery; rationale; Nari's message | Fable and Astra |
| V-020 | Every landing event fires with parameters (winner) | REQ-020 | GA4 DebugView | Captures per event | Fable and Astra |
| V-021 | Umbrella sentence decodes GT; provenance line at the decided prominence | REQ-021 | Browser | Screenshot | Fable and Astra |
| V-022 | `check-claims.py` passes on the built page; every figure footnoted | REQ-022 | Script; browser | Output; screenshot | Fable and Astra |
| V-023 | Consent posture implemented; no non-essential tag fires before consent in a regulated region | REQ-023 | Tag Assistant with region emulation | Captures | Fable and Astra |
| V-024 | Screenshots from Instagram, Facebook and TikTok in-app browsers on iOS and Android | REQ-024 | Real devices via QR to the preview | Photos or screenshots | Fable and Astra |
| V-025 | Events documented in `06`; visible in GA4 with parameters; baseline recorded | REQ-025 | GA4 realtime and snapshot | Captures | Fable and Astra |
| V-026 | Tuition and access stated the same way for both schools, or Georgetown marked "see campus site" | REQ-026 | Browser; register rows | Screenshot | Fable and Astra |
| V-027 | Georgetown measurable: 28 days of hostname data before comparisons are quoted | REQ-027 | `ga4-snapshot.py` | Snapshot | Fable and Astra |
| V-028 | Key events match AN-05 and the change is logged in `0_plan/10` | REQ-028 | GA4 admin; `0_plan/10` | Screenshot; log row | Fable and Astra |
| V-029 | Tracking plan approved; every event in DebugView on the preview | REQ-029 | `06`; DebugView | Captures | Fable and Astra |
| V-030 | Shared IA: same menu order and page types on both sites | REQ-030, REQ-031, REQ-033 | Browser on both hosts | Screenshots | Fable and Astra |
| V-031 | Design system consumed by all three surfaces; one tokens source | REQ-032 | `V-032` diff plus browser | Report | Fable and Astra |
| V-032 | Each site's copies of tokens, fonts and partials match `design-system/` | REQ-052 | `diff` after the sync step | Output | Fable and Astra |
| V-033 | No stock or outdated photos; every section carries substance | REQ-034, REQ-041 | Content audit against the inventory | Report | Fable and Astra |
| V-034 | Admissions and after-8th sections live on both sites | REQ-035, REQ-048 | Browser | Screenshots | Fable and Astra |
| V-035 | FAQ live, searchable, schema validates, owner named | REQ-036, REQ-045 | Browser; rich-results validator | Output | Fable and Astra |
| V-036 | Journey map traced to nav and CTAs | REQ-038 | Review of `01` against the built pages | Report | Fable and Astra |
| V-037 | Requirements session with Crystal filed as a call summary | REQ-039 | `0_plan/` | File | Fable and Astra |
| V-038 | URLs and structured data reflect the umbrella; redirect map executed; rankings hold 30 days | REQ-040, REQ-071 | Search Console; redirect test script | Reports | Fable and Astra |
| V-039 | Thesis, proof (with methodology and privacy review), TEFA guide, secondary CTAs, community aggregate live | REQ-042, REQ-043, REQ-044, REQ-046, REQ-047 | Browser; register rows; Q-015 record | Screenshots | Fable and Astra |
| V-040 | Content inventory rows all have owner and cadence; an edit reaches production within the SLA | REQ-050, REQ-051 | `1_spec/02` section 6; a timed test edit | Report | Fable and Astra |
| V-041 | Both application links carry the correct `school=`; no form on the landing | REQ-070 | DOM check; browser | Output; screenshot | Fable and Astra |
| V-042 | Wrong-school metric computed from Supabase with Crystal's log until then | REQ-072 | BigQuery query; Crystal's table | Output | Fable and Astra |
| V-043 | Lighthouse mobile at or above the Anywhere home baseline; LCP under 2.0 s; CLS 0 | REQ-073 | Lighthouse CLI on the preview | JSON | Fable and Astra |
| V-044 | axe clean; keyboard pass; reduced-motion verified | REQ-074, MN-11 | axe via Playwright; manual pass; reduced-motion screenshot | Reports | Fable and Astra |
| V-045 | Chatbot evaluation gate: at least 95 percent correct, zero fabricated facts | REQ-037, CB-05 | T-157 harness | Report | Fable and Astra; Nari and Crystal sign |
| V-046 | Completion checklist C-01 to C-15 for the mock round | REQ-019 | E3 (Astra) plus Fable review | `0_plan/ensemble/E3-completion.md` | Astra runs; Fable verifies |
| V-047 | Phase 0 items absent from every page of both sites | REQ-001 | DOM text search for the defect-list terms on both hosts | Output | Fable and Astra |

## 3. Harness extensions

| Extension | Detail |
|---|---|
| Feature map | Add landing features to `.cursor/skills/verify-anywhere/features/`: doors, helper, comparison, current families, no forms, variants |
| Servers | The harness serves `sites/landing/` and `sites/anywhere/` on separate ports |
| In-app browsers | Preview URL as a QR code; open in Instagram, Facebook and TikTok on an iPhone and an Android phone; capture screenshots; log quirks in `1_spec/runs/T-060.md` |
| Reduced motion | Playwright `reducedMotion: 'reduce'` screenshots per mock |
| Accessibility | axe-core through Playwright on every page |
| Performance | Lighthouse CLI, mobile preset, three runs, median |
| Analytics | GA4 DebugView session per release, saved as a capture |
| Structured data | Rich-results validator on every page with markup |
| Claims | `check-claims.py` on the built HTML |

## 4. Dual verification protocol

| Step | Fable | Astra |
|---|---|---|
| Input | Task brief, acceptance criteria, evidence paths, the artifact | The same, plus screenshots attached with `-i`; never Fable's verdict |
| Method | Open the artifact and evidence; check each criterion; quote what was observed | Same, in a read-only sandbox |
| Output | `Verify-Fable` RUN-LOG row and `1_spec/runs/V-nnn-fable.md` | `Verify-Astra` RUN-LOG row and `1_spec/runs/V-nnn-astra.md` captured verbatim |
| Disagreement | Both findings attached; one fix round; if still split, escalate to Johnny with both reports | |
| Cross-check | Fable confirms every path and fact in Astra's report exists | Astra's E3 confirms the RUN-LOG and traceability are complete |

## 5. Launch checklist (DEL-020)

| # | Item | Evidence | Signed by |
|---|---|---|---|
| 1 | D-001 decided and the redirect map executed on staging with no chains | T-124 output | Johnny |
| 2 | Canonicals, sitemaps, robots, llms.txt live; previews `noindex` | curl outputs | Johnny |
| 3 | Structured data validates on the landing | Validator | Johnny |
| 4 | Claims: `check-claims.py` clean; Q-019 resolved or no figure shown | Output | Nari |
| 5 | Consent posture live and verified per region | Captures | Nari, counsel |
| 6 | Events verified in DebugView; key events correct; dashboards live | Captures | Johnny |
| 7 | Accessibility: axe clean, keyboard pass, reduced motion | Reports | Johnny |
| 8 | Core Web Vitals within budget | Lighthouse | Johnny |
| 9 | In-app browser matrix passed | Screenshots | Johnny |
| 10 | Five-parent test passed | Record | Nari |
| 11 | gt.school tagged for at least 28 days; baseline recorded | Snapshot | Johnny |
| 12 | Rollback rehearsed: DNS revert and redirect removal timed | Runbook | Johnny |
| 13 | Nari and David sign; DNS change scheduled; 30-day monitoring owner named | Signatures in the RUN-LOG gate row | Nari, David |

## 6. Risk register (DEL-019)

| Risk | Likelihood | Impact | Mitigation | Owner |
|---|---|---|---|---|
| Root-domain change loses rankings | Medium | High | D-001 (b) fallback; redirect map; 30-day monitoring; Search Console alerts | Johnny |
| A claim is wrong in public | Medium today | High | Claims register as a gate; footnotes; `check-claims.py` | Nari |
| Brand dilution by network association | Low | Medium | MD-17 provenance line, not headline | Nari |
| Content debt returns | High without an owner | Medium | DEL-011 owners and cadence; evergreen rule | Nari |
| Single builder unavailable | Medium | Medium | Self-contained briefs, hand-off template, tokens and partials documented | Johnny |
| Admissions capacity if demand jumps | Low | Medium | Real-scarcity messaging (MD-06); Crystal in the loop | Crystal |
| Webflow edits drift from the mirror | High | Low | D-021 protocol; DEL-016 re-mirror | Johnny |
| Consent posture wrong for a region | Medium | Medium | Counsel decision before events; container switchable | Nari |
| Astra or Fable rubber-stamps | Low | High | Independent inputs; both audits mechanical checks; disagreement is expected and logged | Johnny |
