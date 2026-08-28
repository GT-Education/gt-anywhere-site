---
name: verify-anywhere
description: "Drive and verify the GT Anywhere static site (gt-anywhere-site — the local mirror of anywhere.gt.school) the way a visitor does: serve the repo locally, open pages in a browser via Playwright MCP, exercise the nav / Begin Application modal / page content, and capture screenshot + snapshot evidence. Use before shipping changes to any page HTML or asset, or whenever someone asks 'does the site still work?'"
---

# Verify GT Anywhere (static mirror)

This repo is a static HTML mirror of https://anywhere.gt.school — plain files served
by any static host. Verification means: serve this checkout locally, browse it like a
prospective parent, and prove the user-facing behavior with captured evidence.

**Hard rule: never submit `#gt-anywhere-form` (the Begin Application modal form).**
Its inline handler POSTs to a live Supabase `partner-lead-webhook` and fires live
Facebook/TikTok `Lead` events even from localhost. Filling fields is fine; clicking
`Start Application` creates a real lead. Likewise, never drive production
(anywhere.gt.school) or a local server this run did not start.

## Launch

```bash
bash .cursor/skills/verify-anywhere/scripts/server.sh start 8213
```

Starts `python3 -m http.server 8213 --bind 127.0.0.1` at the repo root inside a
dedicated tmux session (default name `gt-anywhere-verify-http`, override with
`GTA_VERIFY_SESSION`). Prints `ready: http://127.0.0.1:8213/` when the port answers.
It refuses to start if the session name or port is already taken — pick another port
(`start 8214`) rather than adopting a server you didn't start.

No build step, no env vars, no seed data. Teardown: `server.sh stop` (see Cleanup).

Third-party embeds (Splide carousel JS from jsdelivr, Vidzflow player, webfont.js)
still load from the internet; offline runs will show a degraded Intensives carousel.

## Doctor

```bash
bash .cursor/skills/verify-anywhere/scripts/server.sh doctor 8213
```

Read-only. Passes only if: the tmux session is running, `GET /` returns 200 with a
body byte-identical to this checkout's `index.html` (proves the right root, not a
stale or foreign server), and `GET /advisors/` returns 200. Run it before the first
drive and again after anything surprising.

## Drive

Use the Playwright MCP browser tools against `http://127.0.0.1:8213`:

- `browser_navigate` with `http://127.0.0.1:8213/` (and `/advisors`, `/academics`,
  `/intensives`, `/academic-calendar`, `/pay/` — clean URLs resolve to
  `<page>/index.html`).
- `browser_snapshot` for the accessibility tree; click/fill by the `ref`s it returns.
- Stable handles in this codebase: nav links by href (`/advisors` etc.); apply CTAs
  by text `BEGIN APPLICATION` (nav) / `Begin Application` (hero); the modal form
  fields by id (`first_name`, `last_name`, `email`, `phone`, `zip_code`,
  `household_income`, `sms_consent`); FAQ accordion triggers
  `a.accordion_trigger` (role button, aria-label `reveal answer`); advisor cards
  `.advisors_card`; calendar month cards `.month-card` / event chips `.chip`.
- Webflow duplicates CTA labels (`button-text` + `button-text-ab` hover swap), so an
  accessible name can repeat its text — click the container button/link, not the text node.

The map in [`features/`](features/README.md) is the maintained list of what to drive
and what observable end state proves each feature. Read `features/README.md` first.

## Evidence

Evidence lives in `.cursor/skills/verify-anywhere/evidence/<YYYYMMDD-HHMMSS>/`
(gitignored; create the run directory at the start of the run). For each feature
driven, capture:

- a screenshot via `browser_take_screenshot` with an **absolute** `filename` path
  into the run directory (relative paths land in `.playwright-mcp/` instead);
- the relevant `browser_snapshot` output (or a `browser_evaluate` result) saved as a
  text file when the proof is structural (counts, attributes, text content);
- a `notes.md` naming, per feature ID, the entry point used and what was observed.

Proof standards: exercise the real user path (navigate + click), not just static
greps of the HTML; capture the action and the resulting state, not only the final
screen; a mutation you cannot safely perform (form submit) is proven by filling the
fields and confirming the enabled submit control — never by submitting. The known
console error `$ is not defined` (accordion a11y script runs before jQuery) is
faithful to the live site; note it, don't chase it.

## Cleanup

```bash
bash .cursor/skills/verify-anywhere/scripts/server.sh stop
```

Kills exactly the tmux session this run started (by name), never processes by name.
Close the Playwright browser (`browser_close`). Evidence directories are never
deleted by cleanup — proofs survive at
`.cursor/skills/verify-anywhere/evidence/<run>/`.

## Helpers

- `scripts/server.sh` (executable) — `start|doctor|stop [port]`, default port 8213,
  session name from `GTA_VERIFY_SESSION` (default `gt-anywhere-verify-http`). All
  three invocations are shown above.
