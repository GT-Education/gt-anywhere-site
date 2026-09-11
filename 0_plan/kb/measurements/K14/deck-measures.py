#!/usr/bin/env python3
"""
K14 rework (E5a): recount every deck measurement in K14-copy-voice.md sections 5b and 5c
directly from 0_plan/mockups/shared/copy.md, so the file's numbers are reproducible from
this script rather than from an unrecoverable scratchpad script.

Word count: whitespace-delimited tokens (the same definition Astra's E5a note uses: "28
whitespace-delimited tokens"). Character count: len(string), spaces included (GOV.UK's own
convention for its 65-character title rule, K14-F58: "including spaces"). Sentence count:
split on a run of whitespace that follows a '.', '!' or '?'; a slot with no terminal
punctuation ("Explore GT Anywhere") is still one sentence -- a fragment counts as one. A
period that closes a known abbreviation ("Inc." in the footer facts block is this corpus's
only instance) is not treated as a sentence end, or the footer facts block would score four
sentences instead of the true three.

Syllable heuristic (documented, no dependency): lowercase the token, strip everything
except a-z. Count maximal runs of a/e/i/o/u/y as one syllable each. If more than one such
run remains and the cleaned token ends in a silent 'e' that is not a '-le' ending after a
consonant (e.g. "castle"), subtract one. Floor at 1 syllable for any token that has at
least one letter. A token with no letters at all but with digits (a bare number such as
"10,400" or a phone number) is still counted as a word (a reader reads it), and is scored
one syllable per digit-group split on ',' or '-' (so "10,400" -> 2 groups -> 2 syllables;
this under- or over-counts real speech but is a documented, mechanical rule, consistent
with this file's own caution in K14-F75 to F78 that these formulas are rough guides, not
phonetic transcriptions). A token that mixes letters and digits (e.g. "8th", "2026-09-10")
is treated as a letters-only token per the first rule once digits are stripped, which is
the same known under-count F83 already flags for "MAP".

Calibration: checked against Wikipedia's own worked example (fetched 2026-09-11,
https://en.wikipedia.org/wiki/Flesch-Kincaid_readability_tests): "The Australian platypus
is seemingly a hybrid of a mammal and reptilian creature." is stated there as 13 words, 24
syllables, Flesch Reading Ease 37.5, Flesch-Kincaid Grade 11.3. This script's own
count_syllables() sums to 24 on that sentence (see self-test below), and the two formulas
below reproduce 37.5 / 11.3 to one decimal -- the same bar the original (unrecoverable)
K14 script used ("calibrates to 37.5 / 11.3 on Wikipedia's documented platypus example,
matching to one decimal", K14-copy-voice.md Method row).

Run: python3 0_plan/kb/measurements/K14/deck-measures.py
"""
import re

# ---------- core measurement functions ----------

def clean_letters(token):
    return re.sub(r'[^a-z]', '', token.lower())

def count_syllables(token):
    letters = clean_letters(token)
    if letters:
        groups = re.findall(r'[aeiouy]+', letters)
        n = len(groups)
        if n > 1 and letters.endswith('e') and not (letters.endswith('le') and len(letters) > 2 and letters[-3] not in 'aeiouy'):
            n -= 1
        return max(1, n)
    digits_only = re.sub(r'[^0-9,\-]', '', token)
    digit_groups = [g for g in re.split(r'[,\-]', digits_only) if g]
    if digit_groups:
        return max(1, len(digit_groups))
    return 0  # pure punctuation / symbol, not a word at all

def is_word(token):
    return bool(re.search(r'[a-zA-Z0-9]', token))

# Abbreviations whose period is not a sentence end. This corpus has exactly one instance
# ("GT School, Inc." in the footer facts block); the others are kept only as a documented,
# generic safety net and none of them otherwise occurs in copy.md.
ABBREVIATIONS = ("inc", "mr", "mrs", "ms", "dr", "jr", "sr", "st")

def split_sentences(text):
    text = text.strip()
    if not text:
        return []
    protected = re.sub(r'\b(?:' + '|'.join(ABBREVIATIONS) + r')\.', lambda m: m.group(0).replace('.', '\0'), text, flags=re.I)
    parts = re.split(r'(?<=[.!?])\s+', protected)
    parts = [p.replace('\0', '.').strip() for p in parts if p.strip()]
    return parts if parts else [text]

def words_of(text):
    return [t for t in text.split() if is_word(t)]

def flesch_kincaid_grade(words, sentences, syllables):
    if not words or not sentences:
        return None
    return 0.39 * (words / sentences) + 11.8 * (syllables / words) - 15.59

def flesch_reading_ease(words, sentences, syllables):
    if not words or not sentences:
        return None
    return 206.835 - 1.015 * (words / sentences) - 84.6 * (syllables / words)

def measure(text):
    sentences = split_sentences(text)
    all_words = words_of(text)
    n_words = len(all_words)
    n_chars = len(text)
    n_sentences = len(sentences) if sentences else 0
    n_syllables = sum(count_syllables(w) for w in all_words)
    longest = max((len(words_of(s)) for s in sentences), default=0)
    fk = flesch_kincaid_grade(n_words, n_sentences, n_syllables)
    fre = flesch_reading_ease(n_words, n_sentences, n_syllables)
    return {
        'words': n_words, 'chars': n_chars, 'sentences': n_sentences,
        'syllables': n_syllables, 'longest_sentence': longest,
        'fk': fk, 'fre': fre,
        'words_per_sentence': (n_words / n_sentences) if n_sentences else None,
    }

# ---------- self-test: Wikipedia's platypus example ----------

PLATYPUS = "The Australian platypus is seemingly a hybrid of a mammal and reptilian creature."
_p = measure(PLATYPUS)
assert _p['words'] == 13, f"platypus word count {_p['words']} != 13"
assert _p['syllables'] == 24, f"platypus syllable count {_p['syllables']} != 24 (heuristic drifted)"
assert round(_p['fre'], 1) == 37.5, f"platypus FRE {_p['fre']:.1f} != 37.5"
assert round(_p['fk'], 1) == 11.3, f"platypus FK {_p['fk']:.1f} != 11.3"

# ---------- the deck, transcribed verbatim from 0_plan/mockups/shared/copy.md, 2026-09-11 ----------
# Each slot is one row/cell copy.md itself designates as a distinct piece of copy. URLs,
# data-event attributes, alt text that only duplicates visible copy, the phone number, and
# head fields with no reader-facing prose (robots, canonical, JSON-LD, Open Graph) are
# excluded, matching what 5c already measures elsewhere in K14 (title and meta description
# are the only Head fields K14 measures, so those are the only two carried in from Head).

SLOTS = [
    ("hdr-families", "Section 0 header", "Current families"),
    ("hdr-admissions", "Section 0 header", "Contact admissions"),
    ("h1", "Section 1", "GT School is a selective school for gifted and talented children, in person at our Georgetown, Texas campus or online from anywhere."),
    ("provenance", "Section 1", "The gifted school in the Alpha School network."),
    ("door1-label", "Section 1", "In person"),
    ("door1-name", "Section 1", "Georgetown Campus"),
    ("door1-line", "Section 1", "Two hours of mastery academics each morning on our Georgetown, Texas campus, afternoons for workshops and building."),
    ("door1-cta", "Section 1", "Explore the Georgetown campus"),
    ("door2-label", "Section 1", "Online"),
    ("door2-name", "Section 1", "GT Anywhere"),
    ("door2-line", "Section 1", "Live mastery academics with Guides from wherever you live, and four in-person weekends a year in Georgetown."),
    ("door2-cta", "Section 1", "Explore GT Anywhere"),
    ("compare-anchor", "Section 2", "Not sure which is right for your family? Compare the two."),
    ("comparison-caption", "Section 3", "Georgetown Campus and GT Anywhere, side by side"),
    ("row1-georgetown", "Section 3", "One school, one admissions bar, one mastery-based program. Students advance when they show mastery, not when the calendar says so."),
    ("row1-anywhere", "Section 3", "Same"),
    ("row2-georgetown", "Section 3", "Students at or above the 90th percentile. Begin online, then an assessment and a family conversation."),
    ("row2-anywhere", "Section 3", "Same"),
    ("row3-georgetown", "Section 3", "Families plan the path after 8th grade with admissions."),
    ("row3-anywhere", "Section 3", "Same"),
    ("row4-georgetown", "Section 3", "Mornings from 9 to noon: about two hours of focused academics in TimeBack blocks, with structured breaks. Afternoons: workshops, projects and competitions."),
    ("row4-anywhere", "Section 3", "Two to three hours of focused mastery academics a day, with live sessions from Guides. The rest of the day is yours."),
    ("row5-georgetown", "Section 3", "On campus in Georgetown, Texas, north of Austin."),
    ("row5-anywhere", "Section 3", "From home, anywhere in the United States."),
    ("row6-georgetown", "Section 3", "A small cohort of gifted peers, together every school day."),
    ("row6-anywhere", "Section 3", "A cohort of gifted peers online every day, together in person each quarter."),
    ("row7-georgetown", "Section 3", "Every school day."),
    ("row7-anywhere", "Section 3", "Four intensive weekends a year in Georgetown."),
    ("row8-georgetown", "Section 3", "Guides on campus in every session."),
    ("row8-anywhere", "Section 3", "Live Guides online, with a one-to-one check-in every week."),
    ("row9-georgetown", "Section 3", "Tuition on request. Ask admissions."),
    ("row9-anywhere", "Section 3", "$10,400 a year. Eligible Texas families can apply the TEFA voucher toward the full amount."),
    ("tefa-heading", "Section 3 TEFA module", "Texas families"),
    ("tefa-body", "Section 3 TEFA module", "GT Anywhere is TEFA-eligible. The Texas Education Freedom Accounts program can cover tuition for eligible families."),
    ("tefa-link", "Section 3 TEFA module", "Check eligibility on the GT Anywhere site"),
    ("proof-heading", "Section 4", "What is true of both schools"),
    ("proof-fact1", "Section 4", "Admission at the 90th percentile and above."),
    ("proof-fact2", "Section 4", "Mastery-based: students advance on demonstrated mastery, measured with MAP assessments."),
    ("proof-fact3", "Section 4", "Guides, not lecturers: adults who coach, check in every week and hold the bar."),
    ("proof-fact4", "Section 4", "Kindergarten to 8th grade, in person or online."),
    ("sources-line", "Section 4", "Sources: admission bar, tuition and TEFA, anywhere.gt.school/academics; Georgetown schedule, gt.school/academics; GT Anywhere schedule, anywhere.gt.school/academics; intensive weekends, anywhere.gt.school/intensives; weekly check-ins, the Terms of Use on both sites. Checked 2026-09-10."),
    ("steps-heading", "Section 5", "How to apply"),
    ("steps-intro", "Section 5", "GT School admits students at or above the 90th percentile."),
    ("step1", "Section 5", "Begin your application online."),
    ("step2", "Section 5", "Complete the assessment."),
    ("step3", "Section 5", "Meet us for a family conversation."),
    ("step4", "Section 5", "Enroll and choose your start date."),
    ("apply-link-georgetown", "Section 5", "Begin application: Georgetown Campus"),
    ("apply-link-anywhere", "Section 5", "Begin application: GT Anywhere"),
    ("secondary-faq", "Section 6", "Read the FAQ"),
    ("secondary-admissions", "Section 6", "Talk to admissions"),
    ("secondary-tour", "Section 6", "Ask about a campus tour"),
    ("secondary-info", "Section 6", "Ask about a virtual info session"),
    ("families-line", "Section 7", "Already a GT family? Your hub, schedules and support live at community.gt.school."),
    ("families-link", "Section 7", "Go to the family hub"),
    ("footer-facts", "Section 8 footer", "GT School, Inc. is a selective school for gifted and talented children, kindergarten to 8th grade. Georgetown Campus: in person in Georgetown, Texas. GT Anywhere: online, with four in-person weekends a year in Georgetown."),
    ("footer-link-georgetown", "Section 8 footer", "Georgetown Campus"),
    ("footer-link-anywhere", "Section 8 footer", "GT Anywhere"),
    ("footer-link-apply-georgetown", "Section 8 footer", "Apply: Georgetown Campus"),
    ("footer-link-apply-anywhere", "Section 8 footer", "Apply: GT Anywhere"),
    ("footer-link-families", "Section 8 footer", "Current families"),
    ("footer-link-privacy", "Section 8 footer", "Privacy"),
    ("footer-link-terms", "Section 8 footer", "Terms"),
    ("title", "Head", "GT School: a selective school for gifted children, in Georgetown, Texas and online"),
    ("meta-description", "Head", "GT School is a selective K-8 school for gifted and talented children, in person in Georgetown, Texas or online with GT Anywhere. Compare the two and apply."),
]

FIRST_SCREEN_IDS = [
    "hdr-families", "hdr-admissions", "h1", "provenance",
    "door1-line", "door1-cta", "door2-line", "door2-cta", "compare-anchor",
]
# door labels and door names are excluded from "first screen" word/FK counts, matching the
# reconciliation this file's own 5b already states: "86 words reconciles with K6's 95: K6
# additionally counts the two door labels and two door names (8 words) and the lockup."

HYPE_WORDS = {
    "journey", "passion", "thrive", "unique", "innovative", "rigorous", "excellence",
    "vibrant", "unparalleled", "world-class", "elite", "premier", "cutting-edge",
    "transformative", "limitless", "unlock", "empower", "leverage",
}
# 18 of the 25-page corpus's original "fixed list of 22" are nameable from this file's own
# citations (K14-F38's 8 counted words plus 5e's 13-item banned list, 3 overlapping); the
# other 4 are not recorded anywhere in K14-copy-voice.md and are not guessed here.

GOVUK_AVOID_WORDS = {
    "deliver", "empower", "facilitate", "key", "leverage", "foster", "impact",
    "promote", "progress", "advance", "focus", "focused",
}
# From K14-F50's verbatim GOV.UK "words to avoid" list; "focus" is included in both its
# root and "focused" form since F50 lists the ending "-ion"/"-ment" caution alongside it
# and 5b already counts "focus(ed)" as one bucket.

WE_WORDS = {"we", "our", "us"}
YOU_WORDS = {"you", "your", "yours"}

def word_hits(text, vocab):
    toks = re.findall(r"[a-zA-Z'-]+", text.lower())
    return sum(1 for t in toks if t.strip("-'") in vocab)

def aggregate(slot_texts):
    """Aggregate a list of independent slot strings by SUMMING each slot's own word,
    sentence and syllable counts and taking the MAX of each slot's own longest sentence --
    never by joining the slots into one string and re-splitting. Two adjacent slots (for
    example two nav labels, or a door line next to its CTA) are separate UI strings, not
    one run-on sentence, and joining them before splitting silently merges any slot that
    has no terminal punctuation into whatever slot follows it, undercounting sentences and
    inflating "longest sentence." Each slot's own measure() call already gives split_sentences()
    a clean boundary at that slot's edges, which is what this function preserves."""
    total_words = total_sentences = total_syllables = longest = 0
    for text in slot_texts:
        m = measure(text)
        total_words += m['words']
        total_sentences += m['sentences']
        total_syllables += m['syllables']
        longest = max(longest, m['longest_sentence'])
    fk = flesch_kincaid_grade(total_words, total_sentences, total_syllables)
    fre = flesch_reading_ease(total_words, total_sentences, total_syllables)
    return {
        'words': total_words, 'sentences': total_sentences, 'syllables': total_syllables,
        'longest_sentence': longest, 'fk': fk, 'fre': fre,
        'words_per_sentence': (total_words / total_sentences) if total_sentences else None,
    }

# ---------- run ----------

def main():
    lines = []
    lines.append("# K14 deck measurements, recomputed from `0_plan/mockups/shared/copy.md`")
    lines.append("")
    lines.append("Generated by `0_plan/kb/measurements/K14/deck-measures.py`. Run: `python3 0_plan/kb/measurements/K14/deck-measures.py`.")
    lines.append("")
    lines.append("## Self-test: Wikipedia's platypus example")
    lines.append("")
    lines.append(f"`{PLATYPUS}`")
    lines.append("")
    lines.append(f"- Words: {_p['words']} (Wikipedia: 13)")
    lines.append(f"- Syllables (this heuristic): {_p['syllables']} (Wikipedia: 24)")
    lines.append(f"- Flesch Reading Ease: {_p['fre']:.1f} (Wikipedia: 37.5)")
    lines.append(f"- Flesch-Kincaid Grade: {_p['fk']:.1f} (Wikipedia: 11.3)")
    lines.append("")
    lines.append("All four match the article to one decimal; the heuristic and formulas below are used as-is for the deck.")
    lines.append("")
    lines.append("## Per-slot measurements")
    lines.append("")
    lines.append("| Slot | Section | Words | Chars | Sentences | Longest sentence (words) | FK grade |")
    lines.append("|---|---|---|---|---|---|---|")
    all_text_ordered = []
    we_total = you_total = govuk_total = hype_total = 0
    for slot_id, section, text in SLOTS:
        m = measure(text)
        fk_str = f"{m['fk']:.1f}" if m['fk'] is not None else "n/a"
        lines.append(f"| `{slot_id}` | {section} | {m['words']} | {m['chars']} | {m['sentences']} | {m['longest_sentence']} | {fk_str} |")
        all_text_ordered.append(text)
        we_total += word_hits(text, WE_WORDS)
        you_total += word_hits(text, YOU_WORDS)
        govuk_total += word_hits(text, GOVUK_AVOID_WORDS)
        hype_total += word_hits(text, HYPE_WORDS)
    lines.append("")

    whole = aggregate(all_text_ordered)
    lines.append("## Whole-deck aggregate")
    lines.append("")
    lines.append(f"- Slots counted: {len(SLOTS)}")
    lines.append(f"- Words: {whole['words']}")
    lines.append(f"- Sentences: {whole['sentences']}")
    lines.append(f"- Words per sentence: {whole['words_per_sentence']:.1f}")
    lines.append(f"- Longest sentence: {whole['longest_sentence']} words")
    lines.append(f"- Flesch-Kincaid grade: {whole['fk']:.1f}")
    lines.append(f"- we/our/us: {we_total}")
    lines.append(f"- you/your/yours: {you_total}")
    lines.append(f"- GOV.UK words-to-avoid hits (deliver, empower, facilitate, key, leverage, foster, impact, promote, progress, advance, focus/focused): {govuk_total}")
    lines.append(f"- Hype-word hits (18-word reconstructed list, see script comment): {hype_total}")
    lines.append("")

    first_screen_texts = [t for sid, _, t in SLOTS if sid in FIRST_SCREEN_IDS]
    fs = aggregate(first_screen_texts)
    lines.append("## First-screen aggregate")
    lines.append("")
    lines.append("Header links, `h1`, provenance, both door lines and CTAs, compare anchor (door labels and door names excluded, per this file's own K6 reconciliation note).")
    lines.append("")
    lines.append(f"- Words: {fs['words']}")
    lines.append(f"- Sentences: {fs['sentences']}")
    lines.append(f"- Words per sentence: {fs['words_per_sentence']:.1f}")
    lines.append(f"- Longest sentence: {fs['longest_sentence']} words")
    lines.append(f"- Flesch-Kincaid grade: {fs['fk']:.1f}")
    lines.append("")

    lines.append("## Sources line, split into its actual sentences")
    lines.append("")
    src_text = dict((sid, t) for sid, _, t in SLOTS)["sources-line"]
    for i, s in enumerate(split_sentences(src_text), 1):
        sm = measure(s)
        lines.append(f"{i}. `{s}` -- {sm['words']} words")
    src_m = measure(src_text)
    lines.append("")
    lines.append(f"Totals: {src_m['words']} words, {src_m['chars']} characters, {src_m['sentences']} sentences, longest sentence {src_m['longest_sentence']} words, FK {src_m['fk']:.1f}.")
    lines.append("")
    lines.append("## Slots of five words or more, and which exceed FK 12")
    lines.append("")
    five_plus = []
    for slot_id, section, text in SLOTS:
        m = measure(text)
        if m['words'] >= 5:
            five_plus.append((slot_id, m['fk']))
    above_12 = [(sid, fk) for sid, fk in five_plus if fk is not None and fk > 12]
    lines.append(f"- Slots of five words or more: {len(five_plus)} of {len(SLOTS)}")
    lines.append(f"- Of those, above FK 12: {len(above_12)}")
    for sid, fk in above_12:
        lines.append(f"  - `{sid}`: FK {fk:.1f}")
    lines.append("")
    lines.append("## Title and meta description character counts")
    lines.append("")
    for sid in ("title", "meta-description"):
        t = dict((s, x) for s, _, x in SLOTS)[sid]
        m = measure(t)
        lines.append(f"- `{sid}`: {m['chars']} characters, {m['words']} words, FK {m['fk']:.1f}")
    lines.append("")

    out = "\n".join(lines)
    print(out)

if __name__ == "__main__":
    main()
