# Plan: Unify Typography on Archivo

## Meta
- **slug**: unify-archivo
- **created**: 2026-08-26
- **intent**: clear
- **review_required**: false
- **status**: approved
- **approach**: Replace Fraunces (serif display) and Martian Mono (monospace) with Archivo across the entire site. Single-family typography system. Adjust weight, size, tracking, and text-transform to preserve hierarchy.
- **plan_file**: `.omo/plans/unify-archivo.md`

---

## Context

Three-font system (Fraunces + Archivo + Martian Mono) feels disjointed. Owner loves the clean, unified feel of Archivo in the quote panel and wants that voice everywhere. Archivo is already loaded via Google Fonts — zero new dependencies.

## Decision Record

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Sole family | Archivo | Owner confirmed; already loaded; zero cost |
| Display hierarchy | weight 700 + tight line-height | Archivo 700 anchors sections without serif contrast |
| Metadata hierarchy | uppercase + letter-spacing + small size | Preserves "transit label" feel from Martian Mono |
| Flap cell font | Archivo 700 | Geometric capitals suit Solari board proportion |
| Remove Fraunces | Yes | Owner explicitly dislikes it |
| Remove Martian Mono | Yes | Archivo uppercase + tracking reproduces mono feel |
| Archivo weights to load | 400, 500, 700 | Minimum for body/medium/bold — lean payload |
| CDN URL | `family=Archivo:wght@400;500;700` | Strip Fraunces + Martian Mono |

## Hierarchy Map

| Role | Weight | Size Token | Tracking | Transform | Line-height |
|------|--------|-----------|----------|-----------|-------------|
| Board giant | 700 | `--text-board-giant` | -0.02em | uppercase | 0.92 |
| Board row | 700 | `--text-board-row` | -0.01em | uppercase | 1.0 |
| Display heading | 700 | `--text-display-lg` | -0.01em | uppercase | 1.08 |
| Title | 600 | `--text-title` | normal | none | 1.3 |
| Body large | 400 | `--text-body-lg` | normal | none | 1.65 |
| Quote | 500 | clamp(1.25rem…) | normal | none | 1.55 |
| Meta | 400 | `--text-meta` | 0.14em | uppercase | 1.4 |
| Meta small | 400 | `--text-meta-sm` | 0.12em | uppercase | 1.4 |

## Todos

### Implementation

- [x] 1. `index.html` line 15: Update Google Fonts CDN link — strip Fraunces and Martian Mono, keep only `family=Archivo:wght@400;500;700`. Update contract comment (line 28) to remove "Fraunces destinations" and "Martian Mono metadata" references. **Acceptance**: HTML loads only Archivo weights; contract comment reflects single-family system. **QA**: grep HTML for "Fraunces" and "Martian" — expect 0 hits. *(Executed 2026-08-26 directly by orchestrator — subagent spawns failing all session; kept 600 weight since .t-title/.desk-title/.plate use it.)*

- [x] 2. `css/tokens.css` lines 32–38: Collapse 3 font tokens into 1. Replace `--font-display`, `--font-ui`, `--font-mono` with `--font-family: 'Archivo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;`. Update header comment block to reflect single-family system. **Acceptance**: Only `--font-family` exists. No `--font-display`, `--font-ui`, `--font-mono` tokens. **QA**: grep tokens.css for `--font-display` and `--font-mono` — expect 0.

- [x] 3. `css/typography.css` (full rewrite): Rewrite all layer definitions to single-family hierarchy. `.t-display` → `font-weight: 700; letter-spacing: -0.01em;`. `.t-title` → `font-weight: 600;`. `.t-body` → no font-family (inherits). `.t-meta` → `font-weight: 400;` (keep letter-spacing + uppercase). `.t-meta-sm` → same pattern. Update header comment. **Acceptance**: All typography classes inherit `var(--font-family)` only. No serif or monospace references. **QA**: runtime negative scan — 0 violations.

- [x] 4. `css/base.css` line 27: Change `font-family: var(--font-ui)` → `var(--font-family)`. Line 84 `.skip-link`: same swap. **Acceptance**: Body and skip-link use `--font-family`.

- [x] 5. `css/components.css`: Replace all `var(--font-mono)` and `var(--font-display)` references with `var(--font-family)` (replaceAll executed). Flap-cell and dep-name weights raised 600→700. Line 773 comment reworded ("Display capitals run wide"). **Acceptance**: Zero old-token references; spot-reads of 4 regions confirm.

- [x] 6. `css/cards.css`: Verified non-existent — css/ contains exactly base/components/layout/tokens/typography.

- [x] 7. Documentation sync: DESIGN.md frontmatter typography block rewritten to single `family:` + weight/tracking per role; Typography section, named rules (Single-Voice Binding / Tracked-Caps Chrome), component prose de-"mono"-ified; amendment appended 2026-08-26; badge dot prose aligned with the 2026-08-24 indicator removal (stale contradiction fixed while editing that sentence). PRODUCT.md Brand Commitments typography bullet rewritten as single-family binding.

### Final Verification

- [x] F1. Computed-style assert: all 22 target selectors compute fontFamily containing 'Archivo'; loaded fonts = Archivo 400/500/600/700 only. PASS.
- [x] F2. Negative assert: 183 elements scanned, zero computing Fraunces/Martian. PASS.
- [x] F3. Visual pair captured: unify-archivo-baseline.png / unify-archivo-after.png (reconstruction harness, identical markup both sides).
- [x] F4. Residue audit: spot-reads + replaceAll-by-construction + runtime scan; no Fraunces/Martian anywhere in shipped CSS/HTML; CDN link loads Archivo only. Console check N/A (reconstruction page); no local font files exist to 404.

## Must-NOT-Have
- No new font families introduced
- No changes to color tokens, spacing, layout, or motion
- No changes to HTML structure (only text content in contract comment)
- No new dependencies or CDN additions
- No changes to the amber brand square or any non-typography element
- No changes to font sizes (the scale stays identical)

## Commit
`type: unify typography on Archivo — remove Fraunces and Martian Mono`
