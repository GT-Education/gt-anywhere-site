# Manual and external test cases

Generated 2026-09-10 by `1_spec/tools/build-tests.py`. These cannot run in the suite; each has an evidence template under `1_spec/templates/` or a procedure in `1_spec/13`.

| TC | Workflow node | Assertion | Layer | Automation | Evidence | REQ | V |
|---|---|---|---|---|---|---|---|
| TC-010 | W-02/3 | Phase 2 experiment only (DD-24 revised after R3): if the helper ships, "Yes" highlights the Georgetown door, "No" highlights Anywhere, both doors remain, `helper_answer{route}` fires | E, A | deferred to Phase 2 | Screenshots and requests | REQ-012, DD-24 | V-012 |
| TC-040 | W-02/5 | A test booking made by a human appears in HubSpot and as `tour_booked` in GA4 | K | external, per gate | Screenshots | REQ-044 | V-039 |
| TC-073 | W-02/3, W-05/1 | The five-parent test includes at least one Texas family that could commute to Georgetown and is TEFA-eligible for Anywhere, and the helper's question is scored for whether it elicits feasibility rather than preference (R3, DD-24) | M | manual, in the T-022 protocol | Test record | REQ-012, DD-24 | V-012 |
| TC-041 | W-03/4 | An application start made on a test path appears in Supabase with the school | K | external, per gate, Crystal | Export row | AN-07 | V-042 |
| TC-042 | W-04/3, W-07/3 | Audiences in each platform populate from `door_click` and exclude `families_click` | K | external, per gate | Platform screenshots | AD-07 | V-025 |
| TC-050 | W-05/2 | Crystal's wrong-school log follows the agreed format and is filed monthly | M | procedure | Log file | REQ-072 | V-042 |
| TC-051 | W-05/3, W-10/3 | The BigQuery scheduled query runs against fixtures and returns the wrong-school share; export table receives daily rows | K | external, with fixtures | Query result | AN-14, REQ-072 | V-042 |
| TC-052 | W-05/4, W-10/4 | The dashboard shows the four KPIs and the funnel by school | K | external | Screenshot | D-010 | V-025 |
| TC-030 | W-07/1 | The first screen renders correctly in Instagram, Facebook and TikTok in-app browsers on one iPhone and one Android phone | M | manual, per D-029 | Screenshots per webview in `1_spec/runs/T-060.md` | REQ-024 | V-024 |
| TC-031 | W-07/1 | In a webview, motion is the reduced set (no door lift, instant swaps) | M | manual | Screen recording note | MN-15 | V-044 |
| TC-039 | W-07/4 | The campaign appears in the GA4 snapshot with sessions attributed | K | external, monthly | Snapshot table | AN-08 | V-025 |
| TC-055 | W-09/3 | Nari's acceptance is recorded on the pull request before merge | M | procedure | PR comment | CON-05 | V-019 |
| TC-056 | W-10/2 | An event fired on the preview appears in the development stream's DebugView, not in production | K | external | Screenshot | AN-15 | V-025 |
| TC-060 | W-11/3 | Every launch checklist item has evidence and a signature | M | procedure | Checklist | DEL-020 | V-038 |
| TC-061 | W-11/4 | Daily for 30 days: brand-query position, crawl errors, organic sessions by host recorded | K | external | Monitoring log | REQ-071 | V-038 |
| TC-065 | W-12/4 | The unanswered log produces FAQ entries weekly | M | procedure | Log and FAQ diff | CB-06 | V-035 |
