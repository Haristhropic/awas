# Plan: Unify Typography on Archivo

## Meta
- **slug**: unify-archivo
- **created**: 2026-08-26
- **intent**: clear
- **review_required**: false
- **status**: awaiting-approval
- **approach**: Replace Fraunces (serif display) and Martian Mono (monospace) with Archivo across the entire site. Single-family typography system. Adjust weight, size, tracking, and text-transform to preserve hierarchy.

## What Changes

### Problem
Three-font system (Fraunces + Archivo + Martian Mono) feels disjointed. Owner loves the clean, unified feel of Archivo in the quote panel and wants that voice everywhere.

### Solution
**Archivo becomes the sole typeface.** Fraunces and Martian Mono are removed. Hierarchy is preserved through weight, size, tracking, and text-transform — not font-family switching.

### Why Archivo works as a single family
- 7 weights (100–900) — enough range for display ↔ body ↔ metadata
- Geometric proportions with transit/industrial DNA — fits the Solari board world
- Already loaded via Google Fonts — zero new dependencies
- Uppercase rendering (which most mono-styled elements already use) is strong in Archivo
- Variable font on Google Fonts — `wght@100..900`

## Decision Record

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Sole family | Archivo | Owner confirmed; already loaded; zero cost |
| Display hierarchy method | weight 700 + tight line-height | Archivo at 700 is bold enough to anchor sections without serif contrast |
| Metadata hierarchy method | uppercase + letter-spacing + small size | Preserves the "transit label" feel that Martian Mono provided |
| Flap cell font | Archivo 700 | Geometric capitals in Archivo have the right Solari-board proportion |
| Remove Fraunces | Yes | Owner explicitly dislikes it |
| Remove Martian Mono | Yes | Archivo uppercase + tracking reproduces the mono feel |
| Keep Archivo weights to load | 400, 500, 700 | Minimum for body/medium/bold display — keeps payload lean |
| Google Fonts URL | `family=Archivo:wght@400;500;700` | Strip Fraunces + Martian Mono from CDN link |

## Hierarchy Map (New System)

| Role | Weight | Size | Tracking | Transform | Line-height | Usage |
|------|--------|------|----------|-----------|-------------|-------|
| Board giant | 700 | `--text-board-giant` | -0.02em | uppercase | 0.92 | Hero flap cells (AND, IN, THE) |
| Board row | 700 | `--text-board-row` | -0.01em | uppercase | 1.0 | Row flap cells (SYSTEM, FLOW, ARCHIVE) |
| Display heading | 700 | `--text-display-lg` | -0.01em | uppercase | 1.08 | Section headings (.t-display) |
| Title | 600 | `--text-title` | normal | none | 1.3 | Card titles (.t-title) |
| Body large | 400 | `--text-body-lg` | normal | none | 1.65 | Descriptions, paragraphs (.t-body) |
| Quote | 500 | clamp(1.25rem…) | normal | none | 1.55 | Quote text (.quote-text) |
| Meta | 400 | `--text-meta` | 0.14em | uppercase | 1.4 | Timestamps, labels, IDs (.t-meta) |
| Meta small | 400 | `--text-meta-sm` | 0.12em | uppercase | 1.4 | Tags, badges, captions (.t-meta-sm) |

## Files to Modify

### 1. `index.html` (line 15)
**CDN link** — strip Fraunces and Martian Mono, keep only Archivo:
```
BEFORE: ?family=Archivo:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,400..700&family=Martian+Mono:wght@400;600
AFTER:  ?family=Archivo:wght@400;500;700
```
Also update contract comment (line 28) — remove "Fraunces destinations" / "Martian Mono metadata" references.

### 2. `css/tokens.css` (lines 32–38)
**Font family tokens** — collapse to single family:
```css
BEFORE:
--font-display: 'Fraunces', Georgia, 'Times New Roman', serif;
--font-ui: 'Archivo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
--font-mono: 'Martian Mono', SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace;

AFTER:
--font-family: 'Archivo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```
Remove `--font-display`, `--font-ui`, `--font-mono`. Add `--font-family` as single source of truth. Update header comment block.

### 3. `css/typography.css` (full rewrite — 72 lines)
**Layer system** — rewrite to single-family hierarchy:
- `.t-display` → `font-family: var(--font-family); font-weight: 700; letter-spacing: -0.01em;`
- `.t-title` → `font-family: var(--font-family); font-weight: 600;`
- `.t-body` → no font-family override (inherits body)
- `.t-meta` → `font-family: var(--font-family); font-weight: 400;` (keep letter-spacing + uppercase)
- `.t-meta-sm` → same as above with smaller size
- `.t-meta--amber`, `.t-meta--faint` → color-only overrides (unchanged)
- Remove header comment referencing three-layer system

### 4. `css/base.css` (line 27)
**Body font** — change `var(--font-ui)` → `var(--font-family)`:
```css
font-family: var(--font-family);
```

### 5. `css/components.css` (18 occurrences of `var(--font-mono)` + 2 of `var(--font-display)`)
**Replace all font-family references:**
- Every `font-family: var(--font-mono)` → `font-family: var(--font-family)` (18 rules)
- Every `font-family: var(--font-display)` → `font-family: var(--font-family)` (2 rules: line 78 `.flap-cell`, line 362)
- Line 773 comment about "Fraunces runs wider" → update or remove
- Line 846 `td::before` font-family → `var(--font-family)`

**Specific component adjustments:**
- `.flap-cell` (line 70–82): change `font-family: var(--font-display)` → `var(--font-family)`, keep weight 600 (or bump to 700 for stronger board presence)
- `.station-brand` (line 28): `var(--font-mono)` → `var(--font-family)`
- `.station-nav a` (line 54): `var(--font-mono)` → `var(--font-family)`
- `.tag` (line 190): `var(--font-mono)` → `var(--font-family)`
- `.photo-plate figcaption` (line 266): `var(--font-mono)` → `var(--font-family)`
- `.quote-cite` (line 304): `var(--font-mono)` → `var(--font-family)`
- `.dep-no` (line 346): `var(--font-mono)` → `var(--font-family)`
- `.dep-cat` (line 353): `var(--font-mono)` → `var(--font-family)`
- `.spec-row dt` (line 447): `var(--font-mono)` → `var(--font-family)`
- `.station-index` (line 525): `var(--font-mono)` → `var(--font-family)`
- `.timetable th` (line 550): `var(--font-mono)` → `var(--font-family)`
- `.cell-date` (line 577): `var(--font-mono)` → `var(--font-family)`
- `.badge` (line 586): `var(--font-mono)` → `var(--font-family)`
- `.plate` (line 684): `var(--font-mono)` → `var(--font-family)`
- `.footer-meta` (line 731): `var(--font-mono)` → `var(--font-family)`
- `.to-top` (line 739): `var(--font-mono)` → `var(--font-family)`
- `.skip-link` in base.css (line 84): `var(--font-mono)` → `var(--font-family)`
- Mobile `td::before` (line 846): `var(--font-mono)` → `var(--font-family)`

### 6. `css/cards.css` — if any font-family references exist
Check and replace.

### 7. Documentation sync
- `DESIGN.md` — update Typography section to single-family system
- `PRODUCT.md` — update Brand Commitments typography line
- `.omo/drafts/day-mode.md` — if font references exist, update

## Must-NOT-Have
- No new font families introduced
- No changes to color tokens, spacing, layout, or motion
- No changes to HTML structure (only text content in contract comment)
- No new dependencies or CDN additions
- No changes to the amber brand square or any non-typography element
- No changes to font sizes (the scale stays identical)

## Verification Strategy

### Agent-executed QA (no human intervention)
1. **Computed-style assert**: After CSS changes, launch Playwright, navigate to localhost:8123, assert `getComputedStyle` returns `'Archivo'` for: body, `.flap-cell`, `.t-display`, `.t-meta`, `.station-brand`, `.plate`, `.badge`
2. **Negative assert**: Assert NO element has font-family containing `'Fraunces'` or `'Martian Mono'`
3. **Visual regression**: Screenshot full page → compare against baseline (sections should look nearly identical, just unified font)
4. **CDN audit**: Grep HTML for Fraunces/Martian references — expect 0 (except possibly contract comment which is descriptive)
5. **Console clean**: No 404s for removed font files

### Test strategy: tests-after (visual + computed asserts)

## Commit message
`type: unify typography on Archivo — remove Fraunces and Martian Mono`
