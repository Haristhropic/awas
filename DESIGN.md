---
name: The Living Atelier
description: A split-flap departure-board portfolio for Haris, Cloud Engineer — infrastructure choreography made watchable.
colors:
  housing: "#F7F3E5"
  panel: "#EFE9D5"
  panel-deep: "#E3DAC0"
  flap-face: "#241E17"
  flap-slit: "#B8AE9A"
  amber: "#E8A33D"
  amber-ink: "#8A5B10"
  alert-red: "#C8442E"
  ink-on-flap: "#EDE6D6"
  ink-on-amber: "#1A1712"
  ink-bright: "#0B253E"
  ink-body: "#133458"
  ink-muted: "#56637A"
  ink-faint: "#8A8474"
typography:
  family: "Archivo, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
  display-board:
    fontSize: "clamp(3.4rem, 11vw + 1rem, 9.5rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.02em"
  display:
    fontSize: "clamp(1.9rem, 3.4vw + 0.6rem, 3.1rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  title:
    fontSize: "clamp(1.12rem, 1vw + 0.55rem, 1.4rem)"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontSize: "clamp(1.02rem, 0.4vw + 0.94rem, 1.17rem)"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontSize: "0.76rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0.14em"
rounded:
  flap: "2px"
  plate: "3px"
spacing:
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "1rem"
  "4": "1.5rem"
  "6": "2.5rem"
  "8": "4rem"
components:
  flap-cell:
    backgroundColor: "{colors.flap-face}"
    textColor: "{colors.ink-on-flap}"
    rounded: "{rounded.flap}"
  plate-primary:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.ink-on-flap}"
    rounded: "{rounded.plate}"
    padding: "1rem 1.5rem"
  plate-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink-bright}"
    rounded: "{rounded.plate}"
    padding: "1rem 1.5rem"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.flap}"
    padding: "0.45rem 0.8rem"
  badge-done:
    backgroundColor: "transparent"
    textColor: "{colors.ink-bright}"
    rounded: "{rounded.flap}"
    padding: "0.32rem 0.65rem"
  badge-wip:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.ink-on-flap}"
    rounded: "{rounded.flap}"
    padding: "0.32rem 0.65rem"
---

# Design System: The Living Atelier

## Overview

**Creative North Star: "Split-Flap Departures"**

The site is a living Solari-style departure board in its daylight expression. Every work is a scheduled train, every chapter an announcement, every piece of chrome is drawn from board hardware: flaps, slits, plates, lamps. Content sits on a warm paper housing (`#F7F3E5`) like a timetable printed for the concourse; the dark flap tiles (`#241E17`) are the only place type is set light-on-dark — ivory destination lettering behind a visible split line, the authentic Solari hardware look. Everything else reads as ink printed on paper. The page refuses the card-grid portfolio: works are departure rows that pull down into trays, the stack diagram is a route line with stations, the archive is a timetable, contact is a row of ticket plates.

Motion is the board's native mechanics, nothing more. Letters resolve letter-by-letter with a split-flap drop when a row arrives; lamps pulse; trays pull down on a grid-rows transition. Every animation serves wayfinding, arrival, or status — and every hidden-until-arrival state is gated behind `html.js` so a no-JS visit sees the complete, static board.

**Key Characteristics:**
- Warm paper housing; depth by tonal layering, never drop shadows
- One accent in two functional shades: Solari amber `#E8A33D` on surfaces (badges, plates, selection), amber-ink `#8A5B10` for text/lines on paper — headers, status, focus, and the single primary action
- Dark flap tiles with ivory lettering and a visible horizontal slit line are the signature module
- Metadata labels run as uppercase tracked Archivo; nav links and discipline tags run as sentence-case wayfinding instead
- Radius vocabulary is exactly two values: 2px (flaps) and 3px (plates)
- Hairlines separate everything; there are no cards in grids
- Native cursor always; custom cursor prohibited

## Colors

A warm paper palette carrying one hot signal color. Darkness enters the system either as the dark flap tiles or as an ink ladder of progressively fainter warm blues/grays used for text and lines on paper.

### Primary
- **Solari Amber** (#E8A33D): The board's operating signal. Brand lamp square, WIP badges, the one primary action per screen (CALL/EMAIL plate), link hover states, `::selection`, and the global `:focus-visible` ring. Its scarcity is what makes it read as "live."

### Secondary
- **Signal Red** (#C8442E): Reserved exclusively for rare alerts. Defined as a committed token (`--alert-red`) but carries **zero call sites** in the shipped build — it exists so an alarm state has a home, not as general-purpose accent.

### Neutral
- **Housing** (#F7F3E5): Page ground — warm paper `body` background (AGENTS.md Canvas).
- **Panel** (#EFE9D5): Raised hardware — photo plates, quote/desk panels, trays' diagram frames, route dots (AGENTS.md Soft Canvas).
- **Deep Panel** (#E3DAC0): Recessed wells — diagram frames sit deeper than their surrounding panel.
- **Flap Face** (#241E17): Dark Solari tile surface; the signature dark field, confined to `.flap-cell`.
- **Flap Slit** (#B8AE9A): The 1px horizontal split line across every cell; also slit bars on panels, SVG arrowheads.
- **Ink on Flap** (#EDE6D6): Ivory letters set on dark flap cells. **Ink on Amber** (#1A1712): dark text set on amber surfaces (plates, badges, selection).
- **Ink Bright** (#0B253E): Headings and primary copy (Deep Ink).
- **Ink Body** (#133458): Default body copy on housing (Primary Ink).
- **Ink Muted** (#56637A): Secondary metadata, dt labels, inactive nav.
- **Ink Faint** (#8A8474): Hairline labels, captions, scheduled status text.

Lines are translucent ink, not solid gray: `--hairline: 1px solid rgba(11,37,62,0.14)` and `--hairline-strong: 1px solid rgba(11,37,62,0.30)`.

### Named Rules
**The Solari Amber Rule.** Amber owns headers, status, and the one primary action — nothing else. If a second amber element competes with the primary plate on one screen, one of them is wrong.

**The Red Reserve Rule.** Signal red appears only when something is genuinely wrong or urgent. It has zero call sites today; shipping it on routine chrome breaks the reserve.

**The Ink Naming Rule.** Token convention is binding: `--ink-*` names are text COLORS, `--text-*` names are font SIZES ONLY. Never cross them.

## Typography

**Sole Family:** Archivo (fallbacks: system UI stack) — every role. Gambetta retired same-day after trial; owner locked single-family 2026-08-26.

**Character:** One voice, two manners. Editorial display (chapters, departure names, contact line, brand wordmark) speaks **sentence case at weight 500–600** — never all-caps, never heavier than 600. Caps survive in exactly two places: tracked metadata labels (timetables, statuses, buttons) and single letters on flap tiles, which are signage rather than sentences. Weights loaded: Archivo 400/500/600/700.

### Hierarchy
- **Board Giant** (Archivo 600 caps, `clamp(3.4rem, 11vw + 1rem, 9.5rem)`, line-height 1, ls 0.02em): Hero destination letters on flap tiles only — H-A-R-I-S. Tile lettering is signage.
- **Board Row** (Archivo 600 caps, `clamp(1.5rem, 4.2vw + 0.5rem, 3.4rem)`, lh 1): CLOUD ENGINEER flap row; ≤640px shrinks to `clamp(1.05rem, 3.4vw + 0.35rem, 1.5rem)` so 13 cells fit a 390px viewport.
- **Display** (Archivo 600 sentence case, `clamp(1.9rem, 3.4vw + 0.6rem, 3.1rem)`, lh 1.15, ls -0.01em, ink-bright): Chapter h2s ("Selected Artifacts", "The Living System", "Engineering Archive"); `<em>` flips to amber italic ("brain and heart"). About-heading overrides size to `--text-board-lg`.
- **Departure names** (Archivo 600 sentence case, `clamp(1.4rem, 2.4vw + 0.6rem, 2.3rem)` / 1.12): Load Balancer, Redis Infrastructure, etc.
- **Contact line** (Archivo 600, `clamp(1.6rem, 3vw + 1rem, 2.7rem)` / 1.25): "Let's make something worth keeping."
- **Brand** (Archivo 600 sentence case, 1.05rem): The Living Atelier wordmark in the header.
- **Title** (Archivo 600, `clamp(1.12rem, 1vw + 0.55rem, 1.4rem)`, lh 1.3, ink-bright): Station titles (h3), desk panel titles.
- **Body** (Archivo 400, `clamp(1.02rem, 0.4vw + 0.94rem, 1.17rem)`, lh 1.65, max-width 62ch): Reading copy; base body is 1rem/1.65. `<strong>` brightens to ink-bright at 600.
- **Label/Meta** (Archivo 400–600, 0.76rem / 0.66rem, UPPERCASE, letter-spacing 0.10–0.22em, ink-muted by default): Metadata labels, captions, buttons, badges, table headers, dep numbers/categories, statuses. Variants: `--amber`, `--faint`. Wayfinding exceptions: nav links and discipline tags run sentence-case Archivo 500 without tracking.

### Named Rules
**The Single-Family Binding Rule.** Every glyph belongs to Archivo. No second face without fresh owner approval.

**The Soft-Display Rule.** Editorial display text runs sentence case at weight 600 or less — never all-caps, never 700+. All-caps belongs exclusively to metadata labels and single-letter flap tiles.

**The Tracked-Caps Chrome Rule.** Metadata that behaves like printed timetable data (statuses, dates, table headers, buttons) stays uppercase Archivo with wide tracking. Nav links and discipline tags are wayfinding, not timetable data — they run sentence case.

## Layout

Single-column editorial flow on a flex shell (`min-height: 100dvh`). One centered container: max-width 1240px with fluid gutters `clamp(1.25rem, 4vw, 3rem)`. Chapters breathe at `padding-block: clamp(4rem, 9vw, 7.5rem)` and are separated by platform hairlines (`.chapter + .chapter { border-top }`), never by boxed sections. Section heads get more room above than below (`.section-head` margin-bottom `clamp(2.5rem, 6vw, 4.5rem)` after a gap column) — an asymmetric breathing rhythm, not centered symmetrical stacks.

Two-column moments are asymmetric splits: Personal Space divides 5fr/7fr (photo left, quote right); open trays divide 7fr/5fr (description+specs left, diagram frame right); the desk grid is a plain 1fr/1fr pair. Spacing runs on an 8pt scale (`--space-1…8`: 0.25/0.5/1/1.5/2.5/4rem; `--space-12/16` defined but unused).

Responsive: mobile is re-composed, not shrunk. At **≤900px** the splits, tray bodies, and desk grid collapse to one column and the header centers. At **≤640px** the departure-row grid restacks (`id x / name name / status status`), spec rows stack label-over-value, ticket plates stretch full width, and the timetable abandons horizontal scroll entirely: thead hides, rows become blocks, and each cell prints its own caption from `data-label` via `td::before { content: attr(data-label) }`. Breakpoints live only in components.css; there are no others.

## Elevation & Depth

Flat by tonal layering. There are **no drop shadows anywhere in the build** — depth is conveyed by four means only: (1) tonal steps between housing, panel, and deep-panel surfaces; (2) paired *inset* flap shading `inset 0 ±7px 9px -7px rgba(26,23,18,0.60)` that curls the top and bottom edges of every flap cell inward; (3) 1px hairlines at 14%/30% ivory opacity; (4) the physical metaphor itself (slits, wells, raised plates). Hover elevation, when it exists, is a 2px translate, never a shadow.

### Shadow Vocabulary
- **Flap curl top** (`inset 0 7px 9px -7px rgba(26,23,18,0.60)`, via `--shadow-flap-top`): upper half of every flap cell.
- **Flap curl bottom** (`inset 0 -7px 9px -7px rgba(26,23,18,0.60)`, via `--shadow-flap-bottom`): lower half; both applied through one pseudo-element overlay.

### Named Rules
**The Inset-Only Depth Rule.** Shadows may only be inset, and only to model flap curvature. External drop shadows do not exist in this world.

## Shapes

Hardware corners, cut close to square. The entire radius vocabulary is two tokens: 2px for flap modules (cells, tags, badges, strips, nav chips) and 3px for plates (photo/quote/desk panels, diagrams, tickets). Circles are banned outright; no indicator shapes exist � status is carried by text weight and color (0.5–0.55em filled or hollow rings, some pulsing). Panels identify themselves with a **slit bar**: a short 3px-high bar of flap-slit tone at 40% opacity along the top-left edge (44% width on quote panels, 38% on desk panels) — the visual echo of a flap hinge. Borders are always the shared hairlines, never heavier strokes; the strongest outline in the system is `--hairline-strong`.

## Components

### Station Header
Full-width bar over a hairline, min-height 76px. Brand wordmark set in Archivo 600 sentence case beside the 9px amber square lamp. **Nav destinations are miniature flap tiles**: dark flap-face chips with ivory caps, inset top/bottom curl, and a dimmed slit line — a working slice of the departure board living in the header. Hover or keyboard focus lights the tile amber with ink-on-amber text (the "your train is called" moment) and replays the `nav-flip` rotateX drop; `:active` pushes 1px. No borders, no dropdowns, no active-state pill — the board answers only when addressed.

### Flap Cell (signature module)
Inline-flex ivory tile: `background: var(--flap-face)`, ink-on-flap text, 2px radius, **Archivo 600 uppercase** — tile signage voice — slight 0.02em tracking, line-height 1. Two pseudo-elements make it hardware: an inset-shadow overlay (top+bottom curl) and a 1px full-width slit line at exactly `top: 50%`. Sizes: `--giant` (board-giant, padding `0.06em 0.14em 0.01em`, min-width `0.84em`) and `--row` (board-row, padding `0.07em 0.19em 0.02em`, min-width `0.84em`). Cells compose into `.flap-row` (flex, gap `0.09em`, nowrap) with `.flap-gap` spacers (`0.38em`) for word breaks. Confined to the hero board — do not deploy flap cells as generic containers.

### Board Hero
First viewport, `min-height: calc(100svh - 76px)`, centered column: H-A-R-I-S flap row → CLOUD ENGINEER flap row → intro line (max 46ch) → discipline tag row → primary CALL plate. No eyebrow, no scroll cue — the board announces itself (owner distill 2026-08-24; craft floor bans kickers). On load (JS, double-rAF), the section receives `.arrived` and letters resolve sequentially.

### Status (text-only)
No indicator shapes exist anywhere — the owner removed the dot/tile language outright (2026-08-24). Departure status is the word itself in mono caps: **Live** brightens to ink-bright, Boarding/Scheduled stay muted. Route-line stations are bare rail + numbered text (the rail trims at first/last station text). Plates are pure text on amber/bordered surfaces. Archive badges differentiate by border (done) vs amber fill (wip) alone. The only remaining mark in the whole system is the 9px amber brand square beside the wordmark.

### Tags / Badges
Tags: hairline-strong outlined tracked-caps chips, ink-muted, `0.45rem 0.8rem`; used for discipline lists and tray tech stacks. Badges: tracked caps pills — **done** is outlined, **wip** is solid amber (indicator shapes removed 2026-08-24). Nothing else earns a badge.

### Photo Plate
Raised frame for imagery: panel background, hairline border, 3px radius, 1rem padding; media gets 2px inner radius; caption is faint tracked caps below. Placeholder art ships as inline SVG data URIs until real photography lands.

### Quote Panel
Panel-surface blockquote with the 44%-width slit bar. Quote text is a distinct ramp (`clamp(1.25rem, 1.6vw + 0.7rem, 1.7rem)`, weight 500, lh 1.55, max 36ch), closed by a tracked caps cite. The former mono run-in label was removed in the owner distill (2026-08-24) — the quote opens directly.

### Departure Rows + Pull-Down Trays
Each work is an `<li>` whose whole header row is a real `<button>` in a 4-area grid (`id | name | status | x`), hover wash `rgba(11,37,62,0.04)`, Archivo name nudging `translateX(6px)` on hover. The `+` indicator rotates 45° and turns amber-ink when `aria-expanded="true"`. Trays animate via `grid-template-rows: 0fr → 1fr` (`--dur-panel`, ease-flap) with `overflow:hidden` inner; JS sets `hidden` only after the close transition settles (instantly under reduced motion). Tray interiors: description (max 58ch), "Illustrative specification" disclaimer, spec list (`dl` rows, tracked caps dt ≥110px column, hairline dividers), tag row, and a recessed `panel-deep` diagram frame holding line-art SVG that inherits `currentColor` with amber highlights.

### Route Line (system topology)
Vertical rail: 2px line at `left: 11px` at 13% ivory, trimmed at first/last stations. Station head pairs a tracked index (01…) with an Archivo title; description follows in muted body. A horizontal signal-run variant was trialed and reverted by owner the same day ("looks so bad") — lesson recorded: a persistent amber rail reads as a progress bar and breaks amber scarcity; sparse left-aligned tiles over long rail spans read unbalanced.

### Timetable
Archive table, collapsed borders, tracked caps faint headers over a strong hairline, body cells hairline-divided with subtle row-hover wash. Date column stays nowrap. Rows themselves are arrival scopes so project names resolve as flap text. Mobile variant: stacked labeled blocks (see Layout).

### Desk Panels
About's information-desk furniture: two equal panels with 38% slit bars, Archivo 600 titles, body copy. Heading above uses the board-large size with an amber `<em>`.

### Ticket Plates (buttons/actions)
All actions are plates, not buttons-with-radius-8. Ghost plate: transparent, hairline-strong border, ink-bright tracked caps; hover lifts `-2px`. Primary plate (`plate--primary`): solid amber, ink-on-flap text, weight 600; hover raises brightness 6% instead of changing color. Exactly one primary plate per context (hero CALL, contact EMAIL).

### Footer
Hairline-top sign-off: faint tracked caps copyright left, "Return to concourse ↑" link right (hover amber).

### Motion System (world-native)
- **flap-drop keyframes**: `rotateX(-92deg)/opacity 0 → 55% opacity 1 → rotateX(0)`, perspective 1100px on the parent.
- **Arrival gates**: pre-arrival hidden states apply **only** under `html.js`. Hero: `#arrival.board-hero.arrived`. Scroll: `[data-arrive].arrived` via IntersectionObserver (threshold 0.18, rootMargin `-40px` bottom, unobserve-after-fire; immediate arrival under reduced motion or missing IO).
- **Stagger tokens**: hero cells `--i × 64ms` (`--flip-stagger`); hero fades `0.42s + i×90ms`; scroll arrivals `i×80ms`; per-character flap text (`--j`) `22ms`; route dots `160ms`.
- **Reduced-motion kill switch** (base.css): every animation/transition forced to 0.01ms and `scroll-behavior: auto`; JS additionally resolves hero/trays instantly.
- Durations: tick 140ms (hovers), panel 260ms (trays, row flips), flap 480ms (hero letters). Easing everywhere: `cubic-bezier(0.2, 0.7, 0.3, 1)`.

### Accessibility Contracts
Global amber `:focus-visible` ring (2px, offset 2px); skip-link (amber plate, reveals on focus); `.sr-only` pattern for the hero's real name, table caption, and split characters; split-flap text carries `aria-label` on the container with per-char spans `aria-hidden`; trays wire `aria-expanded`/`aria-controls` and manage `hidden` around the animation; decorative lamps/dots/arrows are `aria-hidden`.

## Do's and Don'ts

### Do:
- **Do** gate every hidden-until-arrival state behind `html.js` — the static page must be complete without JavaScript.
- **Do** carry status in text alone (brightened text = live, muted = pending) before inventing new furniture � no indicator shapes.
- **Do** keep new panels honest: hairline border, 3px radius, panel background, slit bar if it's a "desk" surface.
- **Do** set metadata labels in uppercase Archivo with wide tracking; nav links and tags run sentence case instead.
- **Do** stack tables on mobile via `td::before { content: attr(data-label) }` instead of horizontal scroll.
- **Do** test any new idea against the PRODUCT.md slop test: "Could this appear on 500 other AI-generated portfolios?" If yes, redraw it as board hardware.

### Don't:
- **Don't** add a second accent or spend amber twice in one viewport; if red leaves its reserve, it needs an actual alarm.
- **Don't** introduce external drop shadows, gradients, glow, glassmorphism, or radii beyond the 2px/3px vocabulary.
- **Don't** implement a custom cursor — the native cursor is mandated and untouched in base.css.
- **Don't** animate anything that doesn't announce arrival, status, or wayfinding; no scroll-jacking, no parallax.
- **Don't** present placeholder specs/metrics as fact — trays carry their "Illustrative specification" disclaimers.
- **Don't** set editorial display text in all-caps or weight 700+ — sentence case at 600 is the ceiling; caps live only in metadata labels and single-tile letters.

---

*Recorded 2026-08-23 from the shipped build (seed 328ae9c7, code-led). Ground truth over intention: where the direction contract and the code diverge, this file records the code — e.g., `--alert-red` is a committed but currently unused reserve. Typography amended 2026-08-24 by owner approval: display face Anton → Fraunces (editorial serif, variable opsz/wght); metrics re-tuned for serif rendering; mobile board-row size override added at ≤640px. Indicators amended 2026-08-24 (second pass): tile/dot language removed entirely by owner decision — status is text-only. Palette amended 2026-08-24 by owner approval: night ground retired, DAY MODE shipped — paper housing (#F7F3E5 family), flap tiles inverted to dark Solari surfaces with ivory lettering, amber split into surface amber + contrast-safe amber-ink for text/lines. Typography amended 2026-08-26 by owner approval: single-family unification — Fraunces and Martian Mono retired; Archivo carries every role (display 700 / ls -0.01em; chrome stays uppercase 0.10–0.22em tracked). Typography re-amended later the same day: display register split back out onto **Gambetta** (Fontshare literary serif) at owner request — section headings, departure names and contact line now sit sentence-case at weight 500; Archivo keeps body/UI/chrome and flap-tile lettering. Arrival cluster softened the same evening ("adjust them too"): brand wordmark, nav links + discipline tags → sentence case; flap-tile lettering switched to Gambetta 600. **Final revision, same day:** owner reverted the serif trial — "go back to Archivo... not overbolding... not all capslock, just capslock in the first sentence." Shipped state: single-family Archivo everywhere; editorial display (headings, departure names, contact line, brand) runs sentence case at 500–600; caps survive only in tracked metadata labels and single letters on flap tiles. Navbar rebuilt by owner request ("redesign brutally, make it creative"): nav destinations became miniature flap tiles — dark face, slit line, amber-lit on hover/focus with the nav-flip drop. The Living System was rebuilt same evening as a horizontal signal run; owner rejected it ("what is this design? it looks so bad") and the vertical route line was restored verbatim — trial recorded here as a guardrail: no persistent amber rails, no sparse tile-over-rail compositions.*
