# TRUTH: the source-of-truth manifest (humans only)

| Rule | Detail |
|---|---|
| Who may edit this file | A human, and only a human. Johnny or Nari. No model, agent, script or hook writes here. Agents add `Proposed` sources to `SOURCES.md` and statement proposals to `truth-proposals.md`; a human designates a source with `python3 0_plan/tools/truth.py designate SRC-nnn --by "Name"` and attests a statement with `truth.py attest TR-nnn --by "Name"`; both refuse to run inside an agent shell |
| How an edit is committed | In its own commit, without any `Co-Authored-By` trailer naming a model, and, once D-027 lands, signed with a key the agent cannot use: hardware-backed, or passphrase-protected and never loaded into the agent's key agent. A key the agent can reach proves nothing, because the agent runs as the same user. `truth.py check` fails when the working copy differs from the last commit, when the last commit touching this file carries an AI co-author, or when signing is configured and the commit is unsigned |
| What a row means | Part A: the named source is the truth for the domain `SOURCES.md` gives it, and wins over every other source for that domain. Part B: the statement is true as written, verified by the named human against the named source on the date given, and frozen: any change to the statement where it appears, or to this file outside a human commit, is drift and fails the check |
| How a row is used | Documents reference an attested row with the tag `[SoT:TR-nnn]`. A tag that points to a row not in this file, or whose statement no longer appears verbatim in the target, fails the check. Models never type the tag; `truth.py check` is what makes a typed tag worthless |
| Tiers | `SoT` (a row here, human-attested); `Verified` (machine-checked against a system of record, dated, for example the GA4 snapshot in `10`); everything else is model-authored and carries no tag |
| Human signing keys | `none yet`. When D-027 lands, a human lists the accepted key ids here (the `git log --format=%GK` value of their signing key), one per line in this cell separated by spaces. `truth.py check` then accepts a TRUTH.md commit only if it is signed by one of these keys; any valid signature from an unlisted key fails, which is what stops an agent signing with a key it can reach |
| Check | `python3 0_plan/tools/truth.py check`, run with the other checkers before every commit and at every gate |

## Part A: designated sources of truth

Each row designates a source from `SOURCES.md` as the truth for its domain. Written only by `truth.py designate`, run by a human from their own terminal, or by hand by a human. The Designation column in `SOURCES.md` is derived from this table and may not disagree with it.

| SRC | Designated by | Date | Note |
|---|---|---|---|

## Part B: attested statements

| TR | Statement (verbatim, as it appears in the target) | Applies to | Source verified against | Attested by | Date |
|---|---|---|---|---|---|
