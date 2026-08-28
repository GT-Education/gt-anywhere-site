# GT Anywhere verification map

This directory is the maintained source for verifying the user-facing behavior of the
GT Anywhere static site (the local mirror of anywhere.gt.school). Read this index
before driving the site, then use the matching feature file as the recipe.

## Baseline preconditions

- Launch with `bash .cursor/skills/verify-anywhere/scripts/server.sh start 8213` and
  require `ready: http://127.0.0.1:8213/`.
- Run `server.sh doctor 8213` and require `OK` before the first drive.
- Drive only `http://127.0.0.1:8213` — never anywhere.gt.school (production Webflow)
  and never a local server this run did not start.
- Internet access is available: Splide (jsdelivr), Vidzflow, webfont.js, and the
  marketing tags load from their live origins. Loading pages fires live
  GA/Facebook/TikTok/HubSpot pageview beacons; that localhost noise is accepted.
- **Never click `Start Application` in the Begin Application modal.** The form posts
  to a live Supabase partner-lead-webhook and fires live ad-pixel Lead events, even
  from localhost. Filling fields is safe; submitting is not.

## Driving conventions

- Drive with the Playwright MCP browser tools (`browser_navigate`,
  `browser_snapshot`, `browser_click`, `browser_type`/`browser_fill_form`,
  `browser_select_option`, `browser_take_screenshot`, `browser_evaluate`,
  `browser_console_messages`).
- Take a `browser_snapshot` first and act on the `ref`s it returns; prefer roles and
  visible text over CSS position. CTA labels are duplicated in the DOM
  (`button-text` + `button-text-ab` hover swap) — click the containing link/button.
- Screenshots: pass an absolute `filename` into the current evidence run directory;
  relative filenames land in `.playwright-mcp/` instead.
- Expected console noise, mirrored faithfully from the live site: `$ is not
  defined` on every page (accordion a11y script runs before jQuery), and `<svg>
  attribute width: Expected length, "currentwidth"` errors on advisors (~26),
  academics (~15), and intensives (~6) from invalid SVG attributes. Note any OTHER
  console error as a finding.
- These are static pages: a mutation-free drive needs no state restore. Do not
  remove proof artifacts during cleanup.

## Proof and skip reporting

- Capture the user action and the resulting state, not only the final screen.
- Page proof includes a screenshot with recognizable page content plus either a
  snapshot excerpt or a `browser_evaluate` result for structural claims (counts,
  attribute values, text).
- Record the feature ID and entry point used with every artifact (in the run's
  `notes.md`).
- Report an unreachable path with the attempted command and the unmet precondition.
- Do not report a skipped entry point as verified through a different path.

## Feature entry contract

Each feature file starts with an H1 title and one paragraph describing the
user-visible behavior, then exactly four H2 sections in this order:

1. `Sub-features` — short IDs with one line per behavior.
2. `How to get to it (user POV)` — every user entry point.
3. `Driving it with Playwright MCP` — starts with `Preconditions:`, then labeled
   bullets pairing each user action with an exact command and observable result.
4. `Gotchas` — traps that waste or invalidate a verification run.

Keep implementation details out of the map. Name only user paths, stable handles,
required state, commands, and observable proof.

## Features

- [Home + Begin Application modal](./home-apply-modal.md) — homepage hero, nav, and
  the apply modal (open, fill, close — never submit).
- [Advisors](./advisors.md) — the academic-advisor roster page and its eight cards.
- [Academics](./academics.md) — the academics narrative page and its FAQ accordion.
- [Intensives](./intensives.md) — the quarterly in-person weekends page, its
  three-carousel photo gallery, and the Campus Rooms section.
- [Academic calendar](./academic-calendar.md) — the 2026–2027 month-card calendar.

Pages intentionally not yet mapped (verify ad hoc if touched): `/pay/` (tuition
payment links), `/privacy-policy`, `/terms-of-use`, `/refund-policy`, `/401`, `/404`,
`/accept`, `/beta`, `/designer-guide`.
