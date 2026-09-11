# DI-001 — "Open Design", an open-source Claude Design alternative

Filed 2026-09-11. Inbox note; see [README.md](README.md) for what that does and does not mean.

## 1. Provenance

| Field | Value |
|---|---|
| URL | https://www.instagram.com/reel/DYTw6VYPd9P/ |
| Shortcode | `DYTw6VYPd9P` |
| Creator | Nick Saraev (`@nick_saraev`, account id 72269881052) |
| Posted | 2026-05-14 06:22 UTC |
| Format | Reel, 34.2s, 1080×1920 (9:16) |
| Engagement at capture | 11,594 likes, 16,677 comments — the comment count is inflated by the "comment DESIGN" gate, so it is not an engagement-quality signal |
| Captured by | `yt-dlp` 2026.06.09, audio only (`bestaudio` → mp3, 252 KiB) |
| Transcribed by | `mlx_whisper` with `mlx-community/whisper-large-v3-turbo`, `--language en`, temperature 0 |
| Instagram-supplied captions | None. `subtitles` and `automatic_captions` were both empty, so the transcript below is machine-generated from the audio, not a published caption file |
| Media in repo | None. The mp3 stayed in the session scratchpad; this file and the `.srt` beside it are the record |

## 2. Spoken transcript (verbatim, machine-generated)

Segment boundaries are the model's. Not checked against the audio by a human.

| Start | Line |
|---|---|
| 00:00.0 | Someone just open-sourced Claude Design and made it completely free. |
| 00:03.2 | It's called Open Design, and it looks and works just like Claude Design does, |
| 00:06.9 | but it comes with no usage limits or paywalls. |
| 00:09.3 | And the best part is you can use it with literally any AI model that you want, |
| 00:12.3 | including your ChatGPT subscription, APIs, or local models, |
| 00:15.5 | so you can practically run it completely free. |
| 00:17.6 | With it, you can also create animated websites, mobile app prototypes, |
| 00:20.9 | slides, and even full motion graphics. |
| 00:23.2 | Plus, just like Claude Design, you'll get a full interactive canvas |
| 00:25.9 | where you can keep prompting and refining over and over |
| 00:28.2 | until your design looks exactly how you want it to. |
| 00:30.8 | So, want to try it for yourselves? |
| 00:32.1 | Just comment design, and I'll send you the link directly. |

Verbatim `.srt` with end timestamps: [DI-001-transcript.srt](DI-001-transcript.srt).

## 3. The on-page caption

A 250-word caption restates the voiceover at length and adds setup notes not spoken aloud:
clone the repository from GitHub, install "basic tools", pick an AI backend, run it locally or
online, then export to code or images. It opens with the lead-magnet gate — `Comment "DESIGN"
to get this Free Claude Design Alternative.` — and closes on `#claudedesign #claudeai
#opendesign #opensourceai #aidesigntools`. Nothing in the caption names the repository either.

## 4. What this is worth to the redo

| Read | Detail |
|---|---|
| What it claims | A free, self-hostable canvas tool that behaves like Claude Design, usable against any model — a hosted subscription, a raw API, or a local model |
| Why it was filed | The design studio ([17-design-studio-runbook.md](../17-design-studio-runbook.md)) is a prompt-and-refine loop over mock HTML. An interactive canvas over that loop is adjacent to work already underway |
| Why it is unactionable as filed | Neither the audio nor the caption names a repository, an author, or a licence. The distribution is a comment-gated DM, so the reel is an advertisement for a lead magnet, not a pointer to software. Identifying the project is guesswork from here, and this repo does not guess |
| Claims to distrust until verified | "Looks and works just like Claude Design", "no usage limits", "works with any model", "free forever, no strings attached". All are the promoter's copy, none carry evidence, and the promoter is gating access on engagement |
| Blocking constraint even if it checks out | The sites are dependency-free by design, and adding a dependency or a build step needs Nari's go-ahead (`CLAUDE.md`, Stop and ask). A canvas tool could only ever sit in the authoring loop, never in what ships |
| Does it change anything today | No. No `DD`, `MD` or `REQ` row moves on this. It is a lead worth ten minutes if and when someone wants to shorten the mock-iteration loop |

Follow-up, if Johnny wants it: identify the actual project and its licence from a source that is
not the reel, then judge it on whether it beats the current loop. That is a `Q-nnn` in
[03-decisions-and-open-questions.md](../03-decisions-and-open-questions.md) if it is worth
tracking, and nothing at all if it is not — Johnny's call.
