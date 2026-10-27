---
slug: day-mode
status: executed-and-verified
intent: clear
review_required: false
note: Owner said "i dont like these dark themes i'd love to the day or light version" + "continue" ×2 — recorded as explicit approval to plan AND execute in one motion (delegation infra still broken; direct execution as established).
outcome: SHIPPED 2026-08-24. All contrast gates pass (amber-ink 5.27, headings 14.02, flap letters 13.27, plate text 8.29, quote 12.82). Desktop/mobile/fullpage captures in .omo/evidence/daymode-*.png. Docs synced (DESIGN.md, PRODUCT.md, contract line 28, tokens header).
---

# Draft: day-mode

## Decision (owner-instructed tonal inversion of the SAME Split-Flap world)

Day board = the station in daylight. Paper ground, dark Solari flap tiles with ivory
lettering (authentic hardware), amber preserved as the signal color, ink ladder from the
owner's own AGENTS.md §7 palette (Canvas #F7F3E5, Deep Ink #0B253E, Primary Ink #133458).
No toggle — owner said they dislike dark themes, so dark is replaced, not kept behind a switch.

## Token mapping
- housing #141210 → #F7F3E5 (AGENTS.md Canvas)
- panel #201C18 → #EFE9D5 (AGENTS.md Soft Canvas)
- panel-deep #0F0D0B → #E3DAC0 (tonal step of canvas family — justified new tone)
- flap-face #EDE6D6 → #241E17 (flaps invert to dark tiles; signature inversion flips)
- flap-slit #B8AE9A unchanged (reads as hinge on dark flap, slit bar on cream)
- amber #E8A33D unchanged (surfaces: plates, lamps, dots, selection bg)
- NEW amber-ink #8A5B10 — text/line-safe amber on paper (~4.9:1; raw amber fails at 1.9:1)
- alert-red unchanged (reserve)
- ink-on-flap #1A1712 → #EDE6D6 (ivory letters on dark flaps)
- NEW ink-on-amber #1A1712 — dark text on amber surfaces (selection, skip-link, wip badge, primary plate)
- ink-bright → #0B253E (Deep Ink), ink-body → #133458 (Primary Ink)
- ink-muted → #56637A, ink-faint → #8A8474 (ink-family tonal steps — justified)
- hairlines → rgba(11,37,62,0.14/0.30); flap shadows unchanged (dark curls on dark flaps)

## Call-site fixes
- components.css:64/384/567/678 hardcoded ivory washes → ink-based rgba(11,37,62,…)
- Amber TEXT/BORDER → --amber-ink: base.css:71 focus ring; components 229, 467, 606, 833, 838, 891; typography 25, 60
- ink-on-flap on AMBER surfaces → --ink-on-amber: base 67, 82; components 718, 723, 844, 849, 855
- Primary plate hover border 854 stays --amber (border-on-amber)
- index.html inline SVG placeholders: dark fills → paper/ink equivalents
- Docs: tokens header, DESIGN.md (frontmatter colors, Overview, Key Characteristics, Colors section, footer note), PRODUCT.md color bullet, index.html:28 contract

## QA
Server + Playwright: computed contrast asserts (amber-ink, ink-body, ink-on-amber ≥4.5:1),
desktop+mobile captures, console, flap slit check, quote-panel text still Archivo/500.
