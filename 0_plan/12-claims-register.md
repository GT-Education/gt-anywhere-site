# 12b Claims register (DEL-018)

| Field | Value |
|---|---|
| Purpose | Every number, percentage, multiplier, price, date and superlative that may appear on any GT surface, ad or structured-data field, with its source and its approved wording. No figure ships without a row (REQ-022). This file is the source of truth for numbers once Nari designates it (SOURCES.md, SRC-013) |
| How rows arrive | Research (R4) and builders propose rows with status `Unverified`; Nari approves wording and the row becomes `Approved`; a figure that must not be used becomes `Retired` with the reason. Rows are never deleted |
| Check | `1_spec/tools/check-claims.py` (T-005) fails a build when a page carries a figure with no `Approved` row |
| Version | 0.1 skeleton, 2026-09-10; rows land from `research/R4-content-and-proof.md` |

## Statuses

| Status | Meaning |
|---|---|
| Unverified | Found on a surface or proposed; source not yet confirmed by the owner |
| Approved | Nari (or the named owner) confirmed the value and the wording; usable on any surface |
| Retired | Must not appear anywhere; the reason is recorded |
| Superseded | Replaced by a newer row (id in the note) |

## Rows

| CR | Claim as stated | Where found (URL or file) | Value | Conflicts with | Status | Owner to verify | Approved wording | Date |
|---|---|---|---|---|---|---|---|---|
| CR-001 | "Yes. We are fully accredited by Cognia and TEFA-eligible." | `index.html`, `academics/index.html` (Anywhere) | Fully accredited | CR-002, CR-003 | Unverified | Nari |  | 2026-09-10 |
| CR-002 | "GT School - Virtual is a Candidate for Accreditation with Cognia..." | `index.html`, `academics/index.html`, `intensives/index.html`, `advisors/index.html` (Anywhere) | Candidate, not yet accredited | CR-001, CR-003 | Unverified | Nari |  | 2026-09-10 |
| CR-003 | "Accredited K-8 virtual academy for exceptional students delivering 4x faster learning..." (JSON-LD) and "Our Accredited K-8 Virtual School..." (gt.school footer) | `index.html` (Anywhere, structured data); all 11 gt.school pages; live check 2026-09-10: the Anywhere structured data now reads "delivering 3x faster learning", the "Accredited" wording is unchanged | Accredited, unqualified | CR-001, CR-002 | Unverified | Nari |  | 2026-09-10 |
| CR-004 | "Delivering 3x faster learning" | `index.html` (Anywhere) | 3x | CR-005, CR-006, CR-007 | Unverified | Nari |  | 2026-09-10 |
| CR-005 | "delivering 4x faster learning" (structured data) / "Adaptive platform proven to deliver 4X learning velocity" | `index.html` (Anywhere) | 4x | CR-004, CR-006, CR-007 | Removed from live (checked 2026-09-10; present in the 2026-07-24 mirror) | Nari |  | 2026-09-10 |
| CR-006 | "3-7x faster learning" | `index.html` (Anywhere), stat tile | 3-7x | CR-004, CR-005, CR-007 | Removed from live (checked 2026-09-10; present in the 2026-07-24 mirror) | Nari |  | 2026-09-10 |
| CR-007 | "Growth Factor target (3X for grades 3+, 2X for grades K-2)" | `refund-policy/index.html` (Anywhere) | 3X / 2X, contractual | CR-004, CR-005, CR-006 | Unverified | Nari |  | 2026-09-10 |
| CR-008 | "3X learning velocity" | `https://www.gt.school/` (and 8 other pages) | 3X | None internally; conflicts with CR-005/CR-006 across sites | Unverified | Nari |  | 2026-09-10 |
| CR-009 | "1400+ SATs by 8th grade" | `index.html` (Anywhere); `https://www.gt.school/`, `/academics` | 1400+ | CR-010 | Unverified | Nari |  | 2026-09-10 |
| CR-010 | "score 1350+ on their SAT tests by eighth grade" | `https://www.gt.school/resources/gt-school-a-new-option-for-gifted-kids-in-texas` | 1350+ | CR-009 | Unverified | Nari |  | 2026-09-10 |
| CR-011 | "designed for students in the 90th+ percentile" | `academics/index.html` (Anywhere) | 90th+ percentile | None found elsewhere; gap vs. CR-014/CR-016 framing | Unverified, public | Crystal |  | 2026-09-10 |
| CR-012 | "Top 1-2% nationally" | `index.html` (Anywhere) | Top 1-2% | CR-016 | Unverified | Nari |  | 2026-09-10 |
| CR-013 | "94th percentile in Reading to the 98th in Math and Science" | `https://www.gt.school/academics` | 94th–98th percentile | CR-014, CR-015 (different framing) | Unverified | Nari |  | 2026-09-10 |
| CR-014 | "Our students outperform 91% of students nationally" | `https://www.gt.school/` (x2) | 91% | CR-015, CR-016 | Unverified | Nari |  | 2026-09-10 |
| CR-015 | "More than half of our students' test results land in the top 10% nationally" | `https://www.gt.school/` | Top 10% | CR-014, CR-016 | Unverified | Nari |  | 2026-09-10 |
| CR-016 | "our classes are in the nation's top 1% by eighth grade" | `https://www.gt.school/resources/gt-school-a-new-option-for-gifted-kids-in-texas` | Top 1% | CR-012, CR-014, CR-015 | Unverified | Nari |  | 2026-09-10 |
| CR-017 | "73% of our students have mastered a subject at least three grade levels above their age" | `https://www.gt.school/academics` | 73% | None | Unverified | Nari |  | 2026-09-10 |
| CR-018 | "86% have mastered two or more subjects at least two grade levels above their age grade" | `https://www.gt.school/academics` | 86% | None | Unverified | Nari |  | 2026-09-10 |
| CR-019 | "Our students' Science scores average in the 98th percentile nationally" | `https://www.gt.school/programs` | 98th percentile (Science) | CR-020 (same subject, different frame) | Unverified | Nari |  | 2026-09-10 |
| CR-020 | "Four in five score in the top 25% nationally in Science" | `https://www.gt.school/programs` | 80% in top 25% | CR-019 | Unverified | Nari |  | 2026-09-10 |
| CR-021 | "$10,400/year — GT Anywhere annual tuition, fully or partially covered by TEFA" | `index.html` (Anywhere) | $10,400/yr, hedged coverage | CR-022, CR-023, CR-024 | Unverified, public | Nari |  | 2026-09-10 |
| CR-022 | "The $10,474 TEFA voucher fully covers the $10,400 GT Anywhere tuition." | `academics/index.html` (Anywhere) | $10,474 fully covers $10,400 | CR-021, CR-023 | Unverified, public | Nari |  | 2026-09-10 |
| CR-023 | "...net family cost of $0 if you have a child who is already outpacing their class." | `advisors/index.html` (Anywhere) | $0, conditioned | CR-021, CR-022 | Unverified | Nari |  | 2026-09-10 |
| CR-024 | "A limited number of $10,000 scholarships are available for founding families" | `https://www.gt.school/` (all 11 pages) | $10,000 scholarship | CR-021–CR-023 (no stated relationship to a list price) | Unverified | Nari |  | 2026-09-10 |
| CR-025 | "curated cohort... of 8-12 fellow intellectuals" | `advisors/index.html` (Anywhere) | 8-12 students | CR-026 | Unverified | Nari |  | 2026-09-10 |
| CR-026 | "12–15 student cohort" | `intensives/index.html`, `academics/index.html` (Anywhere) | 12-15 students | CR-025 | Unverified | Nari |  | 2026-09-10 |
| CR-027 | "Our first nine students proved the model." | `https://www.gt.school/about-us` | 9 (founding cohort) | None (historical, not current) | Unverified | Nari |  | 2026-09-10 |
| CR-028 | "GT Anywhere launched in 2026... attracted hundreds of students in its first months" | `https://www.gt.school/about-us` | 2026 launch; "hundreds" of students | None | Unverified | Nari |  | 2026-09-10 |
| CR-029 | "The program launches in 2026 with $1 billion in funding." (TEFA, statewide) | `index.html` (Anywhere) | $1B statewide, 2026 | None | Unverified | Nari |  | 2026-09-10 |
| CR-030 | "50% Monthly Tuition Credit... if [MAP] Growth Factor... is less than [target]... and... completed at least 80% of assigned Essential Skills" | `refund-policy/index.html` (Anywhere) | 50% credit; 80% completion threshold | None; relates to CR-004–CR-007 | Unverified | Nari |  | 2026-09-10 |
| CR-031 | "TimeBack · 140 XP / Day" | `https://www.gt.school/calendar`, hero badge | 140 XP/day | None found elsewhere to compare | Unverified | Nari |  | 2026-09-10 |
| CR-032 | Four in-person intensive weekends a year in Georgetown (four named 2026 to 2027 weekends) | `intensives/index.html` (Anywhere) | 4 weekends | CR-025, CR-026 (cohort size) | Unverified, public | Nari | | 2026-09-10 |
| CR-033 | Georgetown mornings: "two 50-minute blocks and one 25-minute block with structured breaks in between. The blocks run from 9 am to noon" (about two hours of focused work inside a 9 to noon window); afternoons for workshops and building | `https://www.gt.school/academics` (live 2026-09-10) | 9 to noon; about 2 hours | None | Unverified, public | Nari | | 2026-09-10 |
| CR-034 | GT Anywhere mornings: "two to three hours of 100% cognitive load" (academics page); FAQ: "Core academics via TimeBack require 2 hours of focused daily work" plus "2 hours weekly for live sessions"; homepage says "3x" not "3 hours" | `academics/index.html`, `index.html` FAQ (Anywhere, live 2026-09-10) | 2 to 3 hours daily | None | Unverified, public | Nari | | 2026-09-10 |
| CR-035 | Guides hold weekly one-to-one check-ins with each student ("Academic Advisors are responsible for weekly 1:1 check-ins", Terms of Use, both sites) | `terms-of-use/index.html`; `https://www.gt.school/terms-of-use` | Weekly | Title conflict, Q-035 (decided: Guides) | Unverified, public | Nari | | 2026-09-10 |
| CR-036 | "This K-8 virtual academy attracted hundreds of students in its first months and continues to build momentum." | `https://www.gt.school/about-us` (#story) | Hundreds, first months | None found; no enrolment figure is published anywhere else on either estate | Unverified | Nari |  | 2026-09-11 |
| CR-037 | "students achieving multiple grade levels of acceleration while deepening their academic interests" | `https://www.gt.school/about-us` (#story) | Multiple grade levels | Overlaps the speed claims CR-004 and CR-008 in substance while stating no multiple | Unverified | Nari |  | 2026-09-11 |
| CR-038 | "a flagship K-8 campus was launched to prove that 3X learning velocity isn't just a slogan, but a measurable fact" | `https://www.gt.school/about-us` (#story) | 3X, stated as measurable | Same figure as CR-008 on the same site and CR-004 on Anywhere; this row records the stronger framing, that it is a measured fact rather than a target | Unverified | Nari |  | 2026-09-11 |

## Live check, 2026-09-10

Text fetch of every live page (no scripts run), compared with the 2026-07-24 mirror the register was built from.

| Statement | Live today | Page and visible text | Register row |
|---|---|---|---|
| 3x faster learning | Yes | anywhere.gt.school home: "Delivering 3x faster learning, 1400+ SATs by 8th grade"; also its structured data | CR-004 |
| 3X learning velocity | Yes | www.gt.school, every page: "1400+ SAT. AP 5s. 3X learning velocity. That's the standard." | CR-008 |
| 3X / 2X growth-factor guarantee | Yes | anywhere.gt.school/refund-policy: "Growth Factor target (3X for grades 3+, 2X for grades K-2)" | CR-007 |
| 4x faster learning | No | Gone from the live homepage and its structured data | CR-005 |
| 3-7x | No | Gone from the live homepage | CR-006 |
| Fully accredited by Cognia | Yes | anywhere.gt.school home and /academics, FAQ "Is GT Anywhere a full-time school?": "Yes. We are fully accredited by Cognia and TEFA-eligible." | CR-001 |
| Candidate for Accreditation | Yes | anywhere.gt.school home, /advisors, /intensives, /academic-calendar, footer: "GT School - Virtual is a Candidate for Accreditation with Cognia and its accreditation divisions" | CR-002 |
| Accredited, unqualified | Yes | anywhere.gt.school home structured data: "Accredited K-8 virtual academy"; www.gt.school footer on 10 of 11 pages: "Our Accredited K-8 Virtual School brings 3X learning velocity to your home." | CR-003 |
| 1400+ SAT | Yes | Both sites | CR-009 |
| 1350+ SAT | Yes | www.gt.school/resources/gt-school-a-new-option-for-gifted-kids-in-texas: "score 1350+ on their SAT tests by eighth grade" | CR-010 |
| Top 1-2% nationally | Yes | anywhere.gt.school home meta description: "Top 1-2% nationally" | CR-012 |
| 90th+ percentile | Yes | anywhere.gt.school/academics FAQ: "designed for students in the 90th+ percentile" | CR-011 |
| $10,400 tuition, $10,474 TEFA | Yes | anywhere.gt.school/academics FAQ: "The $10,474 TEFA voucher fully covers the $10,400 GT Anywhere tuition." | CR-021, CR-022 |
| /book-a-tour | Still 404 | www.gt.school/book-a-tour | REQ-002 |
