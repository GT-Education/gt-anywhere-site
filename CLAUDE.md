# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Two things share this repository:

1. A self-hosted static mirror of **anywhere.gt.school** (the GT Anywhere site), captured from
   Webflow so the site can move onto infrastructure we control. No framework, build step,
   package.json, linter, or test runner. The deliverable is the checked-in HTML + `assets/`.
2. On the `v2` branch, the planning home for the **GT School web redo**: one umbrella landing
   page that routes parents to the right school, then aligned school sites with owned content.

Read in this order before any design or build work: `0_plan/00-context.md` (what GT School
is, the estate, five facts every session must carry), `0_plan/README.md` (index, id
conventions), `0_plan/09-operating-model.md` (tools, flows, cadence). `README.md` covers the
mirror's provenance; `V2.md` the redesign ground rules.

## Commands

```bash
python3 -m http.server 8080                                   # serve locally; /advisors -> advisors/index.html
node tools/mirror.mjs "https://anywhere.gt.school/" ./out     # re-mirror into ./out (gitignored); never into the repo root

# Verification harness (branch verify-anywhere-skill): tmux-wrapped server + Playwright drive
bash .cursor/skills/verify-anywhere/scripts/server.sh start 8213   # then doctor 8213 / stop

# Planning integrity: run both before every commit
python3 0_plan/tools/check-links.py                         # fails on dangling ids or missing planning files
python3 0_plan/tools/build-index.py                         # regenerates 0_plan/ID-INDEX.md

python3 0_plan/tools/ga4-snapshot.py --days 28              # read-only GA4 snapshot (token in ~/.gt-analytics-token.json)

# Codex Astra review pass (read-only; output captured verbatim into 0_plan/ensemble/)
codex exec -m gpt-6-astra -s read-only --skip-git-repo-check -o 0_plan/ensemble/<pass>.md "<prompt>"
```

## Branch model

| Branch | Role |
|---|---|
| `main` | v1, the faithful mirror (baseline `31b86f5`, now `046f878`). Production after cutover. Protected; never pushed directly |
| `v2` | The redesign and this planning set, in worktree `~/projects/gt-school/gt-anywhere-site-v2`. No `.vercel/`, no `.env` by design |
| `feat/gtt-123-slug` | Feature branches from `v2`, named with the Linear id (D-019). Squash-merged |
| `feat/gta-*-clear` | Phase 0 content fixes, one per page, unmerged; the live Webflow site has them (D-009) |
| `staging`, `verify-anywhere-skill` | `staging` equals `main`; the skill branch holds the Playwright harness |

Remote: `git@github.com:GT-Education/gt-anywhere-site.git`. The v1 checkout's working tree carries uncommitted work (extra pages, `docs/ANALYTICS.md`, a modified `index.html`) that is on no branch.

## Project operating model

### Five facts every session must carry

| # | Fact | Consequence |
|---|---|---|
| 1 | The Anywhere homepage already says "The Gifted Academy of Alpha School" | Affiliation is a prominence decision (MD-17), never a disclosure decision |
| 2 | Anywhere tuition is $10,400 a year and TEFA-covered for Texas families; admission is 90th percentile and above | Exclusivity is selectivity, never price (MD-25) |
| 3 | The Anywhere homepage carried three speed claims in the July mirror (3x, 4x, 3-7x); live today it is 3x only (checked 2026-09-10), still without published data, and it reads a 1400+ SAT target as a result | No number on any new surface without a claims-register row (REQ-022, DEL-018) |
| 4 | The site says "expanding nationwide" | Every choice component works for several campuses plus one virtual school (DD-21) |
| 5 | Traffic is organic Instagram, search, direct, HubSpot email and alpha.school referrals; paid social is 32 sessions in 28 days; two thirds of sessions are mobile; gt.school itself is untagged | Design for the phone and organic continuity first (DD-14, MD-23); tag Georgetown before any baseline (REQ-027) |

### People

| Person | Role | Decides |
|---|---|---|
| Nari | Owns both websites and their content; requirements authority (Q-024 confirms the name on record) | What gets built; marks requirements `Agreed`; accepts visible changes on previews |
| Johnny | Builds; runs planning, mockups, verification, analytics | Implementation; logs decisions; owns technical SEO and GA configuration (D-026) |
| David | Leadership | Spend, including any external designer (no agency) and TrueFoundry billing |
| Crystal | Admissions | Application-process facts; wrong-school counts; lead workflow |
| Holly | Brand | The unifying GT School brand element |
| Fable, Astra | Claude Fable 5.1 authors; Codex Astra (`gpt-6-astra`) reviews | Both columns on every decision; escalations go to Nari or Johnny |

### Gates

| Gate | Who | Unlocks |
|---|---|---|
| G0 | Johnny approves the mock plan (`0_plan/05`, section 11) | Research swarm |
| G0.5 | Nari approves the one-page positioning brief (DEL-017) | Building the mocks |
| G1 | Nari picks a mock direction in writing | Hardening the winner |
| Go-live | Nari and David sign the launch checklist (DEL-020) | DNS and redirects |

### The standard process: ensemble planning and dual verification

Every plan section, decision row, spec section and build task follows the same five steps, with no exceptions and no step skipped: (1) Fable drafts; (2) Astra reviews independently, reading files not summaries; (3) Astra verifies Fable's work and Fable verifies Astra's, each naming any fact, id, number or path that does not exist where claimed; (4) a checker script (`check-register.py` for decisions, `check-runlog.py` for tasks) confirms every row is complete with reasoning, not `skipped` or `n/a`; (5) a gate opens only on a clean check, and anything at its ceiling is escalated to Johnny or Nari with both findings attached. Detail: `0_plan/12-register-loop.md` for decisions, `1_spec/10-build-and-operations-spec.md` for build.

### How work flows

| Step | Rule |
|---|---|
| Before building | Find or add the `REQ-nnn` in `0_plan/02`. No requirement, no code |
| Unknowns | Do not guess. Add a `Q-nnn` or a decision row with options and both models' recommendations (`0_plan/03` for project decisions, `0_plan/07` for design, marketing, motion, analytics, advertising, chatbot, SEO), proceed on the recommendation, and say so |
| Design | Five mockup directions (D-011), mobile first, reviewed by Nari before any page is built. Mocks live in `0_plan/mockups/M*/`, self-contained, no forms, no external JavaScript except fonts |
| Ensemble | Fable authors; Astra reviews with the `codex exec` command above; output saved verbatim under `0_plan/ensemble/`; Astra never edits the repo; both cells stay in the register with a verdict |
| Register loop | Every decision row in `0_plan/03` and `0_plan/07` must reach Complete: both models' cells, a verdict, Astra's check of Fable's cell, Fable's check of Astra's cell, zero mechanical findings (`0_plan/12-register-loop.md`). Loop until `check-register.py` says goal met or a row hits its ceiling and is escalated. Fable's audit runs as a fork agent so it is the same model, not a cheaper one |
| Fan-out | At most four parallel agents plus one watchdog per wave |
| Status | Linear owns work status (team GTT, project gt-anywhere); planning tables own gates and ensemble checks and carry the Linear id (D-018) |
| Verification | Driven in a browser on a server you started, at 390px and 1440px, and for the landing in the Instagram, Facebook and TikTok in-app browsers (REQ-024); reduced-motion checked. A grep is not verification. Every workflow node in `0_plan/13` has a test case in `1_spec/13`; a change to a node without a test case is a gap, not a shortcut |
| Documentation | Tables and diagrams by default; update status columns in place; one dated summary per call; every requirement cites a source; every decision lists options and both recommendations; `check-links.py` clean and `ID-INDEX.md` rebuilt before commit |
| Commits and PRs | Conventional prefix; ids in the title or body (`GTT`, `REQ`, `DEL`, `D`, `DD`, `MD`, `MN`, `AN`, `AD`, `CB`, `SE`) |

### Stop and ask

These need explicit go-ahead from Nari (and David where money is involved), every time: DNS or
domain changes, production deploys, edits to a live Webflow site, GA4 configuration changes
beyond what a decision row already approved, spending money, hiring or briefing external help,
creating ad accounts or tags, adding a dependency or a build step to the repository (the sites are dependency-free by design), and submitting any form that reaches a live backend.

### Where things live

| Data | System of record | Detail |
|---|---|---|
| Which sources count as truth | `0_plan/SOURCES.md` (the mapping) and `0_plan/TRUTH.md` (human designations and attestations) | Cite a listed source for every fact; model memory and planning summaries are not sources |
| Requirements, decisions, plans | `0_plan/` in this repo | `09` section 1 |
| Work status | Linear | D-018 |
| Live site content | Webflow (gt.school, anywhere.gt.school) until cutover; Vercel after | D-020, D-021 |
| Leads and applications | Supabase behind apply.gt.school; HubSpot CRM | Read-only from here |
| Behavior and attribution | GA4 property 516065070, one stream `G-494D3VN0SF` | `0_plan/10` |
| Secrets | Never in the repo; `~/.gt-*.json`, Vercel and TrueFoundry environments | D-025 |

## Architecture

### Pages
Eight pages plus `404.html`, each a complete Webflow export: `index.html` and
`<page>/index.html` for advisors, academics, intensives, academic-calendar, privacy-policy,
terms-of-use, refund-policy. Internal links are extensionless (`href="/advisors"`) and rely
on the host resolving directories to `index.html`. `404.html` is the captured Webflow
not-found page, named so Vercel-style hosts serve it for unmatched routes.

**There is no templating.** Nav, footer, tag snippets, and the application modal are
duplicated verbatim in every page. A change to shared chrome must be applied to all eight
pages (and `404.html` where it has the same markup) or the site drifts.

### Styling
Every page loads two stylesheets from `assets/cdn.prod.website-files.com/697d45ef94e91c0acce00654/css/`:
`gt-anywhere.webflow.shared.<hash>.min.css` (site-wide) and one per-page
`gt-anywhere.webflow.<pageId>.<hash>.opt.min.css`, where `<pageId>` matches the page's
`data-wf-page` attribute on `<html>`. Fonts (Literata, Inter Tight) are local TTFs in the
same site-id directory; only Inconsolata still comes from Google Fonts via webfont.js.

### JavaScript, in load order
1. jQuery 3.5.1 (`assets/d3e54v103j8qbb.cloudfront.net/...`), then the Webflow runtime
   (`webflow.<hash>.js` + three `webflow.schunk.*.js`) and GSAP 3.15 (core, ScrollTrigger,
   SplitText) from the site-id `js/` and `gsap/` dirs. All local.
2. Inline custom-code blocks, copied from Webflow's site/page settings. In `index.html`:
   gtag (GA4 `G-494D3VN0SF`, no GTM container), Meta pixel, TikTok pixel, the **Begin
   Application form handler** (`#gt-anywhere-form` → POST to a Supabase `partner-lead-webhook`
   → redirect into `apply.gt.school`), the `_is-apply` / `application_btn` dropdown wiring, a
   `.form_select-field` change handler, a jQuery accordion a11y script, the Splide carousel
   init, and a 991px breakpoint media-query helper.
   The form handler and the `_is-apply` handler each appear **twice** (once in `<head>`,
   once before `</body>`, differing only in quoting). Both register on `DOMContentLoaded`,
   so both attach to the same form. Edit both copies together, or remove the duplicate as
   its own deliberate change.
3. Still remote by design: Splide (jsdelivr), Vidzflow player, webfont.js, gtag, Meta and
   TikTok pixels, HubSpot, and the `apply.gt.school` application flow.

### Asset layout
`tools/mirror.mjs` localizes anything served from Webflow hosts into
`assets/<original-host>/<original-path>`. Two Webflow directories exist:
`697d45ef94e91c0acce00654` (the site id: CSS, JS, fonts, design images) and
`69813e8c89c95464515ce3e1` (CMS uploads such as advisor photos). On disk, filenames are
URL-decoded (`Norberto profile.png`); in markup they stay percent-encoded (`%20`) so
`srcset` and `url()` parse. Keep that split when adding assets by hand.

Two mechanical edits were made during mirroring and must be preserved on any re-mirror:
`integrity=` (SRI) attributes are stripped, and absolute Webflow asset URLs are rewritten to
root-relative `/assets/...` paths. `tools/MIRROR-LOG.json` records the crawl.

## Hard rules and known noise

- **Never submit the Begin Application form**, even from localhost. It POSTs to a live
  Supabase webhook and fires live Meta and TikTok `Lead` events. Filling fields is fine.
- Never drive production (`anywhere.gt.school`, `gt.school`) or a local server you did not start.
- **No number without a register row.** No figure (speed multipliers, percentiles, SAT
  targets, tuition) on any new surface, ad, title or structured data until it has a row in
  the claims register (DEL-018, REQ-022). Tag unverified figures in the rationale, never on the page.
- **No stock photography and no placeholder copy** on any mock or page (Nari, 00:08:49).
- **Exclusivity is selectivity, not price.** No wealth cues in design or copy (`0_plan/08`, principle 3).
- **Design for N campuses** (DD-21).
- **Previews and staging are `noindex`** (SE-13); only production hostnames may be indexed.
- **Source of truth is human-only.** Only a human edits `0_plan/TRUTH.md`, in a commit with no AI co-author, signed with a key agents cannot use once D-027 lands, and reviewed by a second human on GitHub (CODEOWNERS). Agents propose with `python3 0_plan/tools/truth.py propose` and never type a `[SoT:...]` tag; `truth.py check` fails on drift or a fabricated tag. A statement tagged `[SoT]` is frozen: do not rephrase it, anywhere.
- Expected console errors, mirrored faithfully from the live site: `$ is not defined` on the
  five content pages (home, advisors, academics, intensives, academic-calendar; the accordion
  script runs before jQuery), and `<svg> attribute width: Expected length, "currentwidth"` on
  advisors (~26), academics (~15), intensives (~6). Treat any other console error as a finding.
- Webflow duplicates CTA labels (`button-text` + `button-text-ab` hover swap), so an accessible
  name can appear twice. Click the containing link/button, not the text node.
- Loading any page fires live GA, Meta, TikTok and HubSpot pageview beacons. That localhost
  noise is accepted; keep development hostnames out of the production GA stream (AN-15).
