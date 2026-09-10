# 2_deliverables: released deliverables

| Field | Value |
|---|---|
| Purpose | The presentation-ready releases of the deliverables listed in `0_plan/02-requirements-and-deliverables.md` (DEL ids). What Nari, David, Holly and Crystal receive |
| Rule | Every file here is a frozen, versioned snapshot named `<name>-v<major.minor>-<date>`. Nothing is edited in place: change the working copy in `0_plan/` or `1_spec/`, then release a new version and add a row below. The working copy is always the source of record |
| Layout | One folder per DEL id: `2_deliverables/DEL-nnn-<slug>/` |
| Excluded from deployment | `.vercelignore` keeps this folder off every Vercel deployment |

## Released

| DEL | Deliverable | Version | Released | Files | Working copy | Audience | Acceptance state |
|---|---|---|---|---|---|---|---|
| DEL-017 | Positioning brief with the six G0.5 decisions | v1.0 | 2026-09-10 | `DEL-017-positioning-brief/positioning-brief-v1.0-2026-09-10.md`, `DEL-017-positioning-brief/g05-decision-record-v1.0-2026-09-10.md`, `DEL-017-positioning-brief/g05-decision-record.html` (presentation page, published privately at https://claude.ai/code/artifact/81f58491-b934-4fc0-ade3-d52b56a3aea9) | `0_plan/15-positioning-brief.md`, `0_plan/16-g05-decision-record.md` | Nari, David, Holly | Decided by Johnny 2026-09-10; Nari's written confirmation is the gate formality |

## In the pipeline, not yet released

| DEL | Deliverable | Working copy | What blocks release |
|---|---|---|---|
| DEL-001 | Call summary and requirements set | `0_plan/01`, `0_plan/02` | Nari's review of the requirement rows |
| DEL-002 | Sitemap and content audit of both sites | `0_plan/research/R4-content-and-proof.md`, `1_spec/02-sitemaps-and-ia.md` | Anywhere's 20 Webflow pages beyond the 8 mirrored (Q-006) |
| DEL-003 | Journey map as twelve workflows | `0_plan/13-journey-map.md` | Nari's review |
| DEL-004 | Design tokens from both sites plus Holly's element | `0_plan/mockups/shared/tokens.css`, `1_spec/04-design-system-spec.md` | Holly's brand element (Q-001); side-by-side proof |
| DEL-008 | KPI baseline and analytics plan | `0_plan/10-analytics-current-state.md`, `1_spec/06-analytics-tracking-spec.md` | gt.school tagging (REQ-027) before a baseline exists |
| DEL-018 | Claims register | `0_plan/12-claims-register.md` | Nari approves the wording of at least the rows the landing needs |
| DEL-024 | Tracking plan | `1_spec/06-analytics-tracking-spec.md` | Nari's approval |
