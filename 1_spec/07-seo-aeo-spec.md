# 07 SEO and AEO specification

| Field | Value |
|---|---|
| Purpose | Implementable templates and checklists for search and answer-engine visibility across the estate, from `0_plan/11` and `0_plan/07` Part G |
| Decisions applied | SE-01 to SE-14; MD-07, MD-24; AN-16; D-001; MO-2 |
| Requirements covered | REQ-040, REQ-045, REQ-071 |
| Version | 0.1, 2026-09-10 |

## 1. Metadata per page

Target queries by intent (SE-03) and the page that owns each are in `0_plan/11` section 2: brand first, then the TEFA program queries, then category, model and comparison queries in Phase 2.

| Page | Title pattern | Description | Canonical | Open Graph |
|---|---|---|---|---|
| Landing | "GT School: a selective school for gifted children, in Georgetown, Texas and online" (under 60 characters where possible; brand first) | Under 155 characters, from the claims register, decodes GT, names both ways to attend | `https://gt.school/` | Local image; title; description |
| Facts | "GT School facts" | The facts block in one sentence | `https://gt.school/facts` | |
| School home | "GT Anywhere: <promise>" or "GT School Georgetown Campus: <promise>" | From the positioning brief | Host root | Local image |
| Academics, Advisors, Intensives or Campus life, Admissions | "<Page> \| <School name>" as today's pattern | One sentence per page | Page URL | |
| FAQ | "Frequently asked questions \| <School name>" | | | |
| Thesis | "Why gifted children need a different school \| GT School" | | | |
| Proof | "Results \| GT Anywhere" | | | |
| TEFA guide | "TEFA and GT Anywhere: what Texas families need to know" | | | |
| Previews and staging | Any | | | `noindex` header (SE-13) |

Today the Anywhere home has no meta description; every page gets one in T-120 and T-128.

## 2. Structured data templates (SE-05)

Values marked TBD come from the claims register (DEL-018) or an open question; never from a guess.

```json
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "GT School",
  "url": "https://gt.school/",
  "description": "TBD from the claims register (Q-019)",
  "parentOrganization": {"@type": "Organization", "name": "Alpha School"},
  "subOrganization": [
    {"@type": "School", "name": "GT School Georgetown Campus", "url": "https://georgetown.gt.school/",
     "address": {"@type": "PostalAddress", "addressLocality": "Georgetown", "addressRegion": "TX", "addressCountry": "US"}},
    {"@type": "School", "name": "GT Anywhere", "url": "https://anywhere.gt.school/"}
  ],
  "email": "admissions@gt.school"
}
```

| Surface | Types | Notes |
|---|---|---|
| Landing | `EducationalOrganization` with two `subOrganization` entries; `parentOrganization` Alpha School at the prominence MD-17 decides | Description must not state a target as a result, and must carry only the approved accreditation wording (REQ-004, Q-033); the live Anywhere markup states 4x and unqualified Accredited today (R4, CR-003, CR-005) |
| Anywhere | `School` (or `EducationalOrganization`) with `parentOrganization` GT School; `Course` items kept from today; `Event` for intensives | |
| Georgetown | `School` with address, `parentOrganization` GT School; `LocalBusiness` fields for hours if applicable (SE-12) | Pasted into Webflow page settings |
| FAQ | `FAQPage` with one `Question` per answer | Answers 40 to 60 words (SE-09) |
| Facts page | The same organization markup, plus the facts as `Dataset`-free plain text | Entity consistency (SE-08) |

## 3. Robots, sitemaps, noindex, redirects

| File or setting | Content |
|---|---|
| `robots.txt` (each host) | Allow all; explicit `User-agent` allows for GPTBot, ClaudeBot, PerplexityBot, Google-Extended unless Q-027 says otherwise (SE-10); `Sitemap:` line per host |
| `sitemap.xml` (each host) | Every indexable page with `lastmod`; submitted in Search Console (T-036) |
| `noindex` | `vercel.json` header `x-robots-tag: noindex, nofollow` on every deployment whose hostname is not a production host, plus Vercel deployment protection (password or team login) on previews and staging. Previews are never disallowed in `robots.txt`: Google documents that `noindex` cannot take effect on a URL its crawler is blocked from fetching, so the two mechanisms conflict rather than stack (R3, source S19) (SE-13) |
| Canonicals | Every page self-canonical to its final URL; `/academic-calendar` unchanged |
| Redirects | `vercel.json` 301 map from T-032; no chains; tested before DNS |
| `llms.txt` | At `https://gt.school/llms.txt`: the landing, both school homes, FAQ, thesis, proof, facts, each with a one-line description |

## 4. The facts block (SE-08)

| Fact | Value | Source |
|---|---|---|
| Legal name | GT School, Inc. | Both sites' legal pages (R4 section 3j) |
| Network | "The gifted school in the Alpha School network" | Homepage today |
| Founded | TBD | Nari |
| Locations | Georgetown, Texas campus; online from anywhere | Site |
| Grades | K-8 | Site |
| Admission | Students at the 90th percentile and above | Site |
| Accreditation | TBD: the sites state it three ways (CR-001 to CR-003); Nari and counsel choose the wording (Q-033); no Cognia mark until then | R4 |
| Tuition basis | Anywhere $10,400 a year, TEFA-eligible for Texas families; Georgetown TBD (Q-011) | Site; Q-011 |
| Contact | admissions@gt.school; phone in the footer only | Site |

Identical wording on the landing footer, `/facts`, both school footers, structured data descriptions, Google Business Profile and the LinkedIn page.

## 5. Answer-shaped content rules (SE-09)

| Rule | Detail |
|---|---|
| Definition paragraph | The landing carries one paragraph beginning "GT School is…" that stands alone when quoted |
| FAQ answers | 40 to 60 words; the first sentence answers; no marketing adjectives; a source footnote where a number appears |
| Tables | Comparison and schedule as HTML tables, never images |
| Headings | Questions as headings on the FAQ; one H1 per page |

## 6. AEO measurement protocol (SE-11)

| Element | Specification |
|---|---|
| Prompt set | 15 fixed prompts, for example: "what is GT School", "best online school for gifted kids in Texas", "GT School tuition", "is GT Anywhere accredited", "GT School vs Alpha School", "gifted school near Austin", "does TEFA cover online private school", "what is GT Anywhere", "GT School admissions requirements", "GT Anywhere intensives", "GT School Georgetown campus", "online school for gifted 2nd grader", "2 hour learning gifted program", "GT School results", "how to apply to GT School" |
| Engines | ChatGPT, Perplexity, Gemini, Claude |
| Scoring | Cited or not; accuracy against the claims register (any wrong figure is a fail for that prompt) |
| Cadence | Monthly; first run before go-live as the baseline |
| Log | `0_plan/10` section 5 and a table in `1_spec/runs/aeo-prompts.md` |
| Channel | GA4 AI Assistant channel tracked monthly (AN-16) |

## 7. Local search for Georgetown (SE-12)

| Item | Detail |
|---|---|
| Google Business Profile | Name, address, phone consistent with the facts block; category school; photos with consent |
| Local pages | "Visit the campus", directions, tours (REQ-044) |
| Reviews | A process owned by Nari; never incentivized |
| Schema | `School` with address and geo on Georgetown pages |
| Precondition | gt.school tagged (REQ-027) so the effect is measurable |

## 8. Governance (SE-14)

| Cadence | Activity | Owner |
|---|---|---|
| Weekly for 30 days after go-live | Search Console errors, redirects, brand-query position | Johnny |
| Monthly | Search Console review, AI channel, prompt set, `0_plan/10` update | Johnny |
| Quarterly | Content audit against the claims register; titles and descriptions | Nari, Johnny |

## 9. Tasks

| ID | Task | Phase | Owner model | Serves | Acceptance | Evidence | Ceiling |
|---|---|---|---|---|---|---|---|
| T-120 | Landing metadata: title, description, canonical, Open Graph per section 1 | S5 | Builder, Sonnet 5 | SE-06, MD-07 | Every field present and sourced | Page head diff | 30 min |
| T-121 | Landing structured data per section 2 with values from the register | S5 | Builder, Sonnet 5 | SE-05, REQ-045 | Rich-results validator passes; no target stated as a result | Validator output | 60 min |
| T-122 | `robots.txt`, `sitemap.xml`, `llms.txt` for the landing | S5 | Builder, Sonnet 5 | SE-10, SE-06, MD-24 | Files served; crawler allows per Q-027 | curl output | 30 min |
| T-123 | `noindex` headers on previews and staging in `vercel.json` (with T-002) | S0 | Builder, Sonnet 5 | SE-13 | Preview returns the header; production does not | curl output | 30 min |
| T-124 | Redirect implementation in `vercel.json` from the T-032 map; tested on staging | S6 | Builder, Sonnet 5 | SE-02, REQ-071, DEL-009 | Every mapped URL returns 301 to the final URL; no chains | Test script output | 60 min |
| T-125 | Facts page and facts block content (section 4) with register rows | S5 | Builder, Sonnet 5; Nari fills TBDs | SE-08 | Identical wording across surfaces verified by diff | Diff | 60 min |
| T-126 | AEO prompt set baseline run before go-live | S5 | Fable | SE-11 | 15 prompts scored on 4 engines | `1_spec/runs/aeo-prompts.md` | 60 min |
| T-127 | Search Console properties and sitemap submission (with T-036) | S5 | Johnny | SE-02, AN-16 | Properties verified | Screenshots | 30 min |
| T-128 | School-site metadata and structured data with `parentOrganization` (Anywhere in code; Georgetown in Webflow with Nari) | S7, S8 | Builder, Sonnet 5; Nari | SE-05, REQ-040 | Validator passes on both | Validator output | 60 min each |
| T-129 | FAQ schema with the FAQ page (with T-087) | S9 | Builder, Sonnet 5 | REQ-045, SE-09 | Validator passes | Validator output | 30 min |
| T-130 | Georgetown local search kit (section 7) | S8 | Nari, Johnny | SE-12, MD-19 | Profile live; schema validates | Screenshots | 60 min |
| T-131 | Monthly SEO and AEO review template and the first review | S6 | Fable | SE-14 | Template filled once | `1_spec/runs/seo-review-<yyyymm>.md` | 60 min |
