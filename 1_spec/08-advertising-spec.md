# 08 Advertising specification

| Field | Value |
|---|---|
| Purpose | How each channel is tagged, tracked, targeted and reported, and where its traffic lands, from `0_plan/07` Part E and `0_plan/09` section 7 |
| Decisions applied | AD-01 to AD-14; MD-03, MD-12, MD-23, MD-26; AN-08, AN-09; MO-1, MO-3, MO-4, MO-5, MO-6, MO-7, MO-9 |
| Requirements covered | REQ-020, REQ-025 |
| Deliverables | DEL-021 experiment roadmap |
| Version | 0.1, 2026-09-10 |

## 1. Channel matrix, implementation view

| Channel | Role (AD-01) | Lands on (AD-02) | Tag (AD-04) | Optimization event (AD-05) | Audiences (AD-07) | UTM template (AD-03) | Geography (AD-09) | State today (`0_plan/10`) |
|---|---|---|---|---|---|---|---|---|
| Instagram organic | Largest source; continuity with post themes (MD-23) | Landing via bio and post links (AD-12) | Meta pixel | n/a | Door-click audiences for later paid | `utm_source=instagram&utm_medium=social_organic&utm_campaign=umbrella-evergreen-<yyyymm>` | n/a | About 2,400 sessions in 28 days |
| Meta paid (Facebook and Instagram) | Prospecting and per-door retargeting | Landing; retargeting to the chosen school site | Meta pixel; Conversions API in Phase 2 (AD-06) | Lead (application start) with shared event id | `door_georgetown`, `door_anywhere`, exclude `families_route`, exclude `application_started` | `utm_source=meta&utm_medium=paid_social&utm_campaign=<school>-<objective>-<yyyymm>&utm_content=<creative>&v=<1-3>` | Georgetown: commute radius (Q-018); Anywhere Texas: TEFA creative; national: no TEFA | 32 paid-social sessions in 28 days; pixel on Anywhere |
| TikTok | Prospecting video | Landing | TikTok pixel | Lead | Same as Meta | `utm_source=tiktok&utm_medium=paid_social…` | Same | Pixel on Anywhere; no visible campaign traffic |
| X | Founder and education discourse | Thesis page when live; landing until then | X pixel (`qvyeu` on apply today) | Lead | Same | `utm_source=x&utm_medium=paid_social…` | National | 38 sessions from t.co |
| LinkedIn | Professional parents | Landing | LinkedIn Insight Tag, to be created | Lead | Same | `utm_source=linkedin&utm_medium=paid_social…` | Metro areas of the top regions | No tag anywhere |
| Google Ads | Brand and intent search | Landing for brand; school sites for school terms | Google Ads tag `AW-17795403973` on apply; conversions imported from GA4 key events | Application start | RLSA from door audiences | `utm_source=google&utm_medium=cpc&utm_term=<term>` | Texas for TEFA terms; national for category | Two accounts linked (8925401864, 5533110357) |
| HubSpot email | Nurture | School sites and landing | HubSpot script | Meetings booked | n/a | `utm_source=hubspot&utm_medium=email` | n/a | 391 sessions in 28 days |
| alpha.school referral | Network cross-traffic (AD-13) | Landing once live | none | n/a | n/a | `utm_source=alpha&utm_medium=referral` | n/a | 292 sessions in 28 days |

## 2. Tags and events per platform (AD-04, AD-05, AN-09)

| Platform | Base tag | Custom events sent | Dedup | Consent |
|---|---|---|---|---|
| Meta | Pixel 1216631520322809 via the container | `DoorClick{school}`, `Schedule` (tour or info session), `Lead` (application start, from apply today) | `eventID` equals the GA4 `event_id`; the interest form already does this | marketing |
| TikTok | Pixel D6KPFVJC77U9RF65T9JG | `DoorClick`, `Schedule`, lead | `event_id` | marketing |
| X | Pixel `qvyeu` (confirm it is the current id) | `DoorClick`, `Schedule`, lead | `conversion_id` | marketing |
| LinkedIn | Insight Tag, partner id TBD when the account opens | Conversions for `Schedule` and lead | `event_id` | marketing |
| Google Ads | `AW-17795403973`; conversions imported from GA4 `app_started`, `tour_booked`, `info_session_booked` | none custom | GA4 handles | marketing |

## 3. Audiences (AD-07)

| Audience | Definition | Use | Exclusions |
|---|---|---|---|
| `door_georgetown` | `door_click{school=georgetown}` in the last 90 days | Georgetown retargeting with campus creative | `families_route`, `application_started{georgetown}` |
| `door_anywhere` | `door_click{school=anywhere}` | Anywhere retargeting; TEFA creative for Texas | `families_route`, `application_started{anywhere}` |
| `compared_undecided` | `compare_view` without a `door_click` | Umbrella creative that answers objections | both above |
| `families_route` | `families_click` | Exclude from all acquisition | |

## 4. Creative and message match (AD-08, MD-03)

| Variant | Hook | Landing headline (umbrella sentence variant) | Source of the hook |
|---|---|---|---|
| `v=1` | Pace | "Education at the speed of aptitude" family | Anywhere academics title |
| `v=2` | Peers | "Finally, peers who think like them" family | Homepage copy |
| `v=3` | Access | "Selective admission, and TEFA covers Anywhere tuition for Texas families" family (Texas only) | Homepage TEFA copy |

At most three variants live at once; one variable tested at a time (MD-21); the umbrella sentence's fixed facts do not change across variants.

## 5. Reporting (AD-10) and the experiment roadmap (DEL-021)

| Report | Content | Cadence |
|---|---|---|
| Spend and results table | Channel, campaign, spend, sessions, door clicks by school, application starts (Supabase), cost per start | Weekly |
| Reconciliation | Platform-reported conversions against GA4 and Supabase (`06` section 6) | Monthly |
| Experiment roadmap, first 90 days | 1 headline hook (v=1 vs v=2 nationally); 2 TEFA module on or off for Texas; 3 door order default vs geography (if D-015 adopts geolocation); 4 helper on or off; 5 proof placement (section 4 vs first screen). One at a time, sequential, minimum two weeks each | Per DEL-021 |

## 6. Claims and imagery in ads (AD-11)

| Rule | Detail |
|---|---|
| Copy | Every figure in an ad has a claims-register row; the register is the only source |
| Imagery | No child imagery without consent on file; no stock |
| Review | Nari approves creative; Johnny checks figures against the register before launch |

## 7. Organic profile links (AD-12) and network cross-traffic (AD-13)

| Profile | Link | UTMs |
|---|---|---|
| Instagram bio | `https://gt.school/` | `utm_source=instagram&utm_medium=bio&utm_campaign=umbrella-bio` |
| X profile | `https://gt.school/` (thesis later) | `utm_source=x&utm_medium=social_organic&utm_campaign=umbrella-profile` |
| LinkedIn page | `https://gt.school/` | `utm_source=linkedin&utm_medium=social_organic&utm_campaign=umbrella-profile` |
| alpha.school | Ask the network to link to `https://gt.school/` with `utm_source=alpha&utm_medium=referral` | Request text in T-146 |

## 8. Ownership (AD-14)

| Role | Who | Open |
|---|---|---|
| Paid media operator | TBD (Q-025) | The prospecting campaign used agency-style naming; two Google Ads accounts are linked |
| Budget approval | David | |
| Creative approval | Nari | |
| Tags and measurement | Johnny | |

## 9. Tasks

| ID | Task | Phase | Owner model | Serves | Acceptance | Evidence | Ceiling |
|---|---|---|---|---|---|---|---|
| T-135 | Confirm the channel matrix with Nari and the operator (Q-025): roles, destinations, budgets | S5 | Fable | AD-01, AD-14 | Every row confirmed or changed in writing | Updated section 1 | 60 min |
| T-136 | UTM builder sheet in use for every profile and ad link (with T-109) | S5 | Builder, Sonnet 5 | AD-03, AN-08 | Every live link built from the sheet | Sheet and link audit | 60 min |
| T-137 | Ad tags in the container with custom events and dedup (with T-117) | S5 | Johnny; builder prepares | AD-04, AD-05, AN-09 | Test events received per platform | Platform screenshots | 60 min |
| T-138 | Audiences defined in each platform per section 3 | S5 | Operator with Johnny | AD-07, MD-12 | Audiences populate after events flow | Screenshots | 60 min |
| T-139 | Landing variants `v=1..3` mapped to hooks (with T-062) | S5 | Builder, Sonnet 5 | AD-08, MD-03 | Each variant renders the right hook | Screenshots | 30 min |
| T-140 | Geography alignment documented per campaign: radius for Georgetown (Q-018), Texas TEFA versus national | S5 | Fable with the operator | AD-09, MD-26 | Every campaign has a geography row | Section 1 | 30 min |
| T-141 | Weekly spend and results table template wired to GA4 and Supabase counts | S5 | Builder, Sonnet 5 | AD-10 | First week filled | Table | 60 min |
| T-142 | Claims and imagery check on current ad creative against the register | S5 | Fable | AD-11 | Every live ad passes or is pulled | Report | 60 min |
| T-143 | Profile links updated with UTMs (Instagram, X, LinkedIn) | S5 | Nari | AD-12 | Links resolve with parameters | Screenshots | 30 min |
| T-144 | LinkedIn Insight Tag created when the LinkedIn account opens | S5 or later | Johnny | AD-04 | Tag receives a test event | Screenshot | 30 min |
| T-145 | Experiment roadmap (DEL-021) approved by Nari | S5 | Fable | MD-21, DEL-021 | Five experiments with metrics and order | `0_plan/16-experiment-roadmap.md` | 60 min |
| T-146 | alpha.school link request sent with the UTM'd URL (AD-13) | S6 | Nari | AD-13 | Link live on alpha.school | Referral traffic tagged in GA | 30 min plus the network's time |
