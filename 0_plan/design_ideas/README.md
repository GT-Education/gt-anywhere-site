# Design ideas — the inbox

Captured external references — reels, posts, tools, sites — that might inform the GT School
web redo, filed with provenance and, where the source is spoken, a transcript.

This folder is an **inbox, not an authority**. Nothing here carries weight until it becomes a
`DD`/`MD`/`MN` row in [07-design-decisions.md](../07-design-decisions.md), a `REQ` in
[02-requirements-and-deliverables.md](../02-requirements-and-deliverables.md), or a `Q` in
[03-decisions-and-open-questions.md](../03-decisions-and-open-questions.md). A creator's claim
in a reel is a claim, never a fact: it is not a source of truth under [SOURCES.md](../SOURCES.md),
and any figure it carries still needs a row in [12-claims-register.md](../12-claims-register.md)
before it reaches a surface.

## How this differs from the neighbouring folders

| Folder | Holds | Who fills it |
|---|---|---|
| `design_ideas/` (here) | Inbound references Johnny drops in, verbatim with provenance. Unranked, unjudged | Johnny, ad hoc |
| `kb/exemplars/` + [kb/EXEMPLARS.md](../kb/EXEMPLARS.md) | Third-party **pages** captured in a browser at 390px and 1440px for visual study, with measured values | The research swarm, by brief |
| `kb/` (K0–K14) | The studied knowledge base the design studio builds from | The research swarm, by brief |

## Conventions

| Convention | Rule |
|---|---|
| IDs | `DI-nnn`, folder-local, assigned in capture order. Never renumber. The series is deliberately outside `check-links.py`'s id set, so an inbox note can never dangle a planning id |
| One file per idea | `DI-nnn-<slug>.md`, with the provenance table first |
| Provenance | URL, creator, posted date, and exactly how it was captured (tool and version, model used for any transcription) |
| Transcripts | Timestamped, verbatim, machine-transcribed. Name the model; mark it machine-generated and unverified against the audio by a human |
| Media | Not committed. Audio and video stay in the session scratchpad; the repo keeps the text and the URL |
| Relevance | Say plainly what this could change for GT School, and say so when the answer is "nothing yet" |

## Index

| ID | Filed | Source | What it is | Kind | Relevance to the redo | Status |
|---|---|---|---|---|---|---|
| DI-001 | 2026-09-11 | [Instagram reel, `nick_saraev`](https://www.instagram.com/reel/DYTw6VYPd9P/) | A 34-second promo claiming an open-source, model-agnostic clone of Claude Design, called "Open Design" | Tooling | Possible design-studio tool. Names no repository, so it is unactionable as filed — see DI-001 section 4 | Captured, unverified |

## Filed in the Design Library instead

Nine reels Johnny sent on 2026-09-11 were reverse-prompted and filed as `insp-*` entries in the
Design Library (`~/projects/libraries/design`), not here — that library is the system of record for
recreation prompts, animation captures and their proving example pages. This table is the pointer
so a planning session can find them.

| Reel | Library entry | Design language | Example page | Fidelity |
|---|---|---|---|---|
| [DbUA8hRhg30](https://www.instagram.com/reel/DbUA8hRhg30/) | `insp-cloudstudio` | Pastel Hard-Cut | `examples/tideline.html` | Measured |
| [DctmeGESoFN](https://www.instagram.com/reel/DctmeGESoFN/) | `insp-outship` | Cream Hard-Cut Editorial | `examples/kilnworks.html` | Measured |
| [Dcs-MiOpO2V](https://www.instagram.com/reel/Dcs-MiOpO2V/) | `insp-lilium` | Specimen Brutalism | `examples/larkspur.html` | Measured |
| [Dcvb9fHz6bX](https://www.instagram.com/reel/Dcvb9fHz6bX/) | `insp-tsai2020` | Civic Hairline | `examples/riverbend.html` | Measured |
| [DdAjeQKMC4o](https://www.instagram.com/reel/DdAjeQKMC4o/) | `insp-onepersonteam` | Diagram White | `examples/millwright.html` | Measured |
| [Dbmcud4IexE](https://www.instagram.com/reel/Dbmcud4IexE/) | `insp-palebeat` | Pale Beat | `examples/stillpoint.html` | Measured; language only, no marks carried |
| [DcbT7R3MMk1](https://www.instagram.com/reel/DcbT7R3MMk1/) | `insp-advection` | Monochrome Advection | `examples/caldera.html` | Measured; CSS cannot match a GPU fluid sim |
| [Db0LGhVz8JK](https://www.instagram.com/reel/Db0LGhVz8JK/) | `insp-watermelonui` | Charcoal Component Dark | `examples/kindling.html` | Approximate — a ~720x474 inset |
| [Dc4odc0NE_i](https://www.instagram.com/reel/Dc4odc0NE_i/) | `insp-tenworlds` | Cinematic Scroll Montage | `examples/longhand.html` | Structure only — photographed curved monitor |

Relevance to this repo is indirect: these are motion and layout languages, not GT School decisions.
Anything borrowed still needs a `DD` row in [07-design-decisions.md](../07-design-decisions.md), and
the no-stock-photography and no-placeholder-copy rules in `CLAUDE.md` still bind any mock that uses one.
