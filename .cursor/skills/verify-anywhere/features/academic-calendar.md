# Academic calendar

The academic-calendar page (`/academic-calendar`) shows the 2026–2027 school year as
a custom month-card grid — eleven month cards (August through June) with gold event
chips (semester starts/ends, MAP testing, intensives, breaks) — plus the shared FAQ
accordion and apply CTAs.

## Sub-features

- `calendar-load` — page renders with title
  `2026–2027 Academic Calendar | GT Anywhere`.
- `calendar-months` — eleven `.month-card` cards render, `August` first and `June`
  last.
- `calendar-chips` — event chips render on the months (e.g. `S1 Begins Aug 12`,
  `MAP Testing 18–21`, `Thanksgiving Nov 23–27`).
- `calendar-faq` — the FAQ accordion opens an item on click.

## How to get to it (user POV)

- Click `Academic Calendar` in the navbar from any page.
- Browse directly to `http://127.0.0.1:8213/academic-calendar`.

## Driving it with Playwright MCP

Preconditions:

- `server.sh doctor 8213` reports `OK`.

- **Load page.** Run `browser_navigate` with
  `http://127.0.0.1:8213/academic-calendar`. Run `browser_snapshot`: title is
  `2026–2027 Academic Calendar | GT Anywhere`.
- **Count months and chips.** Run `browser_evaluate` with
  `() => ({months: [...document.querySelectorAll('.month-name')].map(e => e.textContent), chips: document.querySelectorAll('.chip').length})`
  — expect 11 months starting `August` and ending `June`, and 27 chips. Spot-check
  one chip text (`S1 Begins Aug 12`).
- **Proof.** Screenshot the calendar grid as `<run>/calendar-grid.png`.

## Gotchas

- The calendar is a hand-authored HTML/CSS embed inside the Webflow page, not a CMS
  collection — dates change by editing the page HTML, so exact chip texts are the
  thing to verify after any calendar edit.
- The grid is one column on narrow viewports and multi-column on desktop; use a
  desktop-sized viewport if the proof screenshot should show the grid layout.
- Chip count (27) is current-build specific; after an intentional calendar change,
  update this file rather than treating the new count as a failure.
