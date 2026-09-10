# 10 Analytics current state

| Field | Value |
|---|---|
| Purpose | What the analytics say today, so every marketing, analytics and advertising decision rests on measured facts. The first baseline for DEL-008 |
| How to refresh | `python3 0_plan/tools/ga4-snapshot.py --days 28` (read-only; uses `~/.gt-analytics-token.json`). Paste the output under "Raw snapshot" and update the date. Log every GA configuration change in section 5 |
| Sources | The GA4 Admin and Data APIs (snapshot below); the v1 checkout's `docs/ANALYTICS.md` (verified 2026-08-28) for the tag map; the mirrored pages for the tag ids |
| Version | 0.1, 2026-09-10 |

## 1. What the numbers say

| Finding | Evidence (28 days to 2026-09-10) | Consequence | Decision |
|---|---|---|---|
| One property, one stream, every hostname except gt.school | Property `GT Web — All Sites` (516065070) in account 403360775 (gtschool); one web stream `G-494D3VN0SF`, default URI apply.gt.school; gt.school absent from the hostname report | The funnel is unified across Anywhere and apply; Georgetown is invisible | AN-01, REQ-027 |
| Traffic is Anywhere plus the application | anywhere.gt.school 6,302 sessions; apply.gt.school 686; community 366; summer 182; gt-intensives 169 | The landing redirects roughly 6,300 monthly sessions' worth of intent; baseline exists for Anywhere but not Georgetown | DEL-008 |
| Organic Instagram is the largest channel | Organic Social 2,493 sessions: instagram/social_organic 1,393, instagram/social 936, instagram/bio 75. Paid Social 32 | Organic continuity outranks paid message match today | MD-23, MD-03 |
| Search, direct and email follow | Organic Search 1,834 (google 1,709); Direct 1,623; Email 397 (hs_email 391) | Brand-query ownership and the HubSpot script both matter | MD-07, AN-16, AN-17 |
| The network sends real traffic | alpha.school referral 292 sessions; community.gt.school 128 | alpha.school is a channel with a destination to fix at go-live | AD-13 |
| Answer engines have started | AI Assistant 40 sessions, chatgpt.com 36 | Structured data and FAQ schema pay now, not later | MD-24 |
| The application emits a clean funnel | form_start 372; begin_checkout 249; app_started 152; generate_lead 94; purchase 88; enroll_started 44; complete_enrollment 22 | The wrong-school metric can be computed once the school parameter exists | AN-04, AN-07 |
| `page_view` is a key event | Key events: close_convert_lead, qualify_lead, purchase, generate_lead, page_view; Anywhere shows 7,978 "key events" | Every conversion report is inflated until removed | AN-05 |
| Two Google Ads accounts are linked | Customers 8925401864 and 5533110357 | Someone operates paid search; the plan must know who | AD-14, Q-025 |
| Development traffic pollutes production | localhost, 127.0.0.1, vercel previews, gt-anywhere.webflow.io, github.io all report into the property | A development stream is needed | AN-15 |
| Campaign naming is inconsistent | "gta_evergreen", "gt anywhere: elite gifted education at home", "MH-1 \| GTA \| Leads \| Prospecting", "GT Anywhere - Lead Gen - TEFA March 2026", raw numeric ids | Channels cannot be compared | AN-08 |
| One custom dimension exists | `lead_source` (event scope) | Extend with `school`, `placement`, `route`, `variant` | AN-04 |
| Landing pages carry click identifiers | `/?fbclid=...`, `/academic-calendar?_hsenc=...` appear as distinct landing pages | Strip or normalize; check nothing personal rides along | AN-11 |

## 2. Tag map per surface

| Surface | GA4 | Meta pixel | TikTok pixel | X pixel | Google Ads tag | HubSpot | LinkedIn | Source |
|---|---|---|---|---|---|---|---|---|
| gt.school (Georgetown) | none | none | none | none | none | none | none | `docs/ANALYTICS.md`; hostname absent from GA |
| anywhere.gt.school | `G-494D3VN0SF`, linker to apply, `decorate_forms` | `1216631520322809` | `D6KPFVJC77U9RF65T9JG` | none | none | portal `40051392` | none | Mirror page heads |
| apply.gt.school | `G-494D3VN0SF` | none documented | none documented | `qvyeu` | `AW-17795403973` | none documented | none | `docs/ANALYTICS.md` |
| community.gt.school, summer.gt.school, gt-intensives | `G-494D3VN0SF` | unknown | unknown | unknown | unknown | unknown | none | Hostname report |
| Landing (planned) | via GTM container | via container | via container | via container | via container | via container | via container | AN-03, AD-04 |

## 3. Conversion wiring that already exists

| Event | Where it fires | Dedup | Value | Notes |
|---|---|---|---|---|
| `generate_lead` (GA4), `Lead` (Meta), TikTok lead | On successful submit of the Anywhere interest form, before redirect to apply | One shared UUID as `event_id` and `transaction_id` | $10 | 94 in 28 days; the pattern to extend to the landing (AD-05) |
| `app_started`, `enroll_started`, `complete_enrollment`, `purchase`, `begin_checkout`, `enroll_form_*` | apply.gt.school | unknown | purchase carries value | 88 purchases and 22 completed enrollments in 28 days |

## 4. Gaps, in priority order

| # | Gap | Fix | Decision | Priority |
|---|---|---|---|---|
| 1 | gt.school untagged | Add the shared stream through the new container, with Nari's go | REQ-027, AN-01 | P0 |
| 2 | `page_view` as key event | Remove; log the date here | AN-05 | P0 |
| 3 | No container; tags hardcoded and split across surfaces | GTM container with consent mode | AN-03, AN-10 | P0 for the landing |
| 4 | No landing events | Tracking plan DEL-024 | AN-04 | P0 for the landing |
| 5 | Cross-domain linker covers only anywhere and apply | Extend | AN-06 | P1 |
| 6 | Development traffic in production | Development stream and filter | AN-15 | P1 |
| 7 | No BigQuery export | Enable now; cannot be backfilled | AN-14 | P1 |
| 8 | Campaign naming | UTM conventions and builder | AN-08 | P1 |
| 9 | No LinkedIn tag | Create with the container | AD-04 | P2, when LinkedIn spends |
| 10 | Georgetown has no baseline at all | Tag first, then 28 days of data before comparing | REQ-027 | P0 |

## 5. Configuration change log

| Date | Change | By | Decision |
|---|---|---|---|
| 2026-08-26 | Property renamed from "apply.gt.school" to "GT Web — All Sites" | Johnny (per `docs/ANALYTICS.md`) | |
| 2026-08-28 | Property moved from the mopac-software account into gtschool; access re-granted at account level | Johnny (per `docs/ANALYTICS.md`) | |
| 2026-09-10 | First snapshot taken from the v2 worktree; no configuration changed | Johnny (Fable) | |

## 6. Raw snapshot

# GA4 snapshot: properties/516065070, 2026-08-13 to 2026-09-10 (28 days), generated 2026-09-10 13:23

| Property | Account | Time zone | Currency | Service level | Created |
|---|---|---|---|---|---|
| GT Web — All Sites | accounts/403360775 | America/Chicago | USD | GOOGLE_ANALYTICS_STANDARD | 2025-12-11 |

| Data stream | Type | Measurement ID | Default URI | Created |
|---|---|---|---|---|
| All GT sites (shared G-494D3VN0SF) | WEB_DATA_STREAM | G-494D3VN0SF | https://apply.gt.school | 2025-12-11 |

| Key event | Counting | Created |
|---|---|---|
| close_convert_lead | ONCE_PER_EVENT | 2025-12-11 |
| qualify_lead | ONCE_PER_EVENT | 2025-12-11 |
| purchase | ONCE_PER_EVENT | 2025-12-11 |
| generate_lead | ONCE_PER_EVENT | 2025-12-12 |
| page_view | ONCE_PER_EVENT | 2025-12-13 |

| Custom dimension | Parameter | Scope |
|---|---|---|
| Lead Source | lead_source | EVENT |

| Google Ads link (customer) | Personalization | Created |
|---|---|---|
| 8925401864 | False | 2025-12-12 |
| 5533110357 | True | 2025-12-13 |

## Sessions by hostname

| Hostname | Sessions | Users | Key events |
|---|---|---|---|
| anywhere.gt.school | 6302 | 4617 | 7978 |
| apply.gt.school | 686 | 462 | 4467 |
| community.gt.school | 366 | 201 | 454 |
| summer.gt.school | 182 | 146 | 185 |
| gt-intensives.vercel.app | 169 | 109 | 181 |
| gt-anywhere.webflow.io | 11 | 3 | 14 |
| localhost | 8 | 3 | 62 |
| gt-intensives-k4fz8hcyf-gt-school-cc7ed351.vercel.app | 3 | 2 | 4 |
| gt-analytics-five.vercel.app | 2 | 2 | 6 |
| gt-intensives-nyawkdmo8-gt-school-cc7ed351.vercel.app | 2 | 1 | 5 |
| 127.0.0.1 | 1 | 1 | 6 |
| gt-johnnychung.github.io | 1 | 1 | 1 |

## Sessions by default channel group

| Channel group | Sessions | Key events |
|---|---|---|
| Organic Social | 2493 | 3658 |
| Organic Search | 1834 | 4021 |
| Direct | 1623 | 3280 |
| Referral | 643 | 1374 |
| Email | 397 | 589 |
| Unassigned | 117 | 239 |
| Cross-network | 50 | 89 |
| AI Assistant | 40 | 67 |
| Paid Social | 32 | 37 |
| Organic Shopping | 6 | 6 |
| Organic Video | 2 | 1 |
| Paid Other | 2 | 2 |

## Sessions by source / medium (top 20)

| Source / medium | Sessions | Key events |
|---|---|---|
| google / organic | 1709 | 3658 |
| (direct) / (none) | 1623 | 3280 |
| instagram / social_organic | 1393 | 1486 |
| instagram / social | 936 | 1849 |
| hs_email / email | 391 | 550 |
| alpha.school / referral | 292 | 716 |
| community.gt.school / referral | 128 | 141 |
| (not set) | 101 | 200 |
| payments-na1.hubspot.com / referral | 79 | 177 |
| instagram / bio | 75 | 108 |
| accounts.google.com / referral | 63 | 158 |
| bing / organic | 58 | 163 |
| (data not available) | 50 | 89 |
| t.co / referral | 38 | 84 |
| chatgpt.com / ai-assistant | 36 | 61 |
| duckduckgo / organic | 33 | 98 |
| yahoo / organic | 32 | 101 |
| app.livestorm.co / referral | 27 | 31 |
| meta / paid | 22 | 26 |
| ig / social | 21 | 65 |

## Sessions by campaign (top 15)

| Campaign | Sessions | Key events |
|---|---|---|
| (organic) | 1834 | 4021 |
| (direct) | 1623 | 3280 |
| gta_evergreen | 1481 | 1629 |
| gt anywhere: elite gifted education at home | 932 | 1843 |
| (referral) | 714 | 1529 |
| (not set) | 508 | 789 |
| (cross-network) | 50 | 89 |
| (ai-assistant) | 40 | 67 |
| MH-1 \| GTA \| Leads \| Prospecting | 17 | 18 |
| 120242096450720432 | 10 | 10 |
| 32795443-GT Anywhere | 9 | 64 |
| ig_post_fear_of_failure | 4 | 6 |
|  | 3 | 3 |
| GT Anywhere - Lead Gen - TEFA March 2026 | 3 | 4 |
| 120240981604440432 | 2 | 3 |

## Landing pages (top 15)

| Landing page | Sessions |
|---|---|
| / | 3697 |
| /academic-calendar | 491 |
| (not set) | 428 |
| /intensives | 234 |
| /advisors | 86 |
|  | 81 |
| /academics | 73 |
| /brand-portal | 31 |
| /dashboard | 27 |
| /community-map | 12 |
| /status | 12 |
| /?fbclid=PAdGRleAUHACJwZG9mAmZkaWQWUNzHYCIBPke9VaXbjIbjpyw9FzCJoWV4dG4DYWVtAjExAHNydGMGYXB | 8 |
| /?paymentMethod=card | 8 |
| /academic-calendar?_hsenc=p2ANqtz-_tTzMyVe1FeSyTsA4nMT9EbsiIHvIHI9kBZGEgOKJy_vEOt8CFA8zVhm | 7 |
| /cogat | 7 |

## Events (top 30)

| Event | Count |
|---|---|
| page_view | 13181 |
| session_start | 7164 |
| user_engagement | 4715 |
| first_visit | 4573 |
| scroll | 2815 |
| click | 596 |
| form_start | 372 |
| begin_checkout | 249 |
| app_started | 152 |
| generate_lead | 94 |
| purchase | 88 |
| enroll_started | 44 |
| form_submit | 36 |
| complete_enrollment | 22 |
| enroll_form_studentinfo | 21 |
| enroll_form_privacyconsent | 20 |
| enroll_form_dataconsent | 18 |
| enroll_form_mediaauth | 18 |
| enroll_form_parentinfo | 18 |
| file_download | 16 |
| enroll_form_academic | 13 |
| submit_application | 5 |
| tefa_school_confirmation_click | 1 |

## Device category

| Device | Sessions |
|---|---|
| mobile | 4696 |
| desktop | 2450 |
| tablet | 48 |

## Region (top 12)

| Region | Sessions |
|---|---|
| Texas | 1445 |
| California | 692 |
| Florida | 440 |
| New York | 314 |
| Washington | 224 |
| North Carolina | 214 |
| Virginia | 188 |
| Illinois | 187 |
| Georgia | 181 |
| Massachusetts | 156 |
| Ohio | 137 |
| Colorado | 125 |

