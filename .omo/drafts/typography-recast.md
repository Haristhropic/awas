---
slug: typography-recast
status: drafting
intent: clear
review_required: false
pending-action: write .omo/plans/typography-recast.md
approach: Serif takeover — Fraunces (variable, Google Fonts) replaces Anton as the display layer (headings + flap-cell lettering); Archivo stays for UI/body with the quote panel untouched as the protected reference; Martian Mono stays for metadata chrome; full docs sync (DESIGN.md, PRODUCT.md, direction-contract comment).
---

# Draft: typography-recast

## Components (topology ledger)
<!-- Lock the SHAPE before depth. One row per top-level component that can succeed or fail independently. -->

| id | outcome | status | evidence path |
|---|---|---|---|
| C1 | Font delivery swap: Google Fonts link drops Anton, adds Fraunces variable (opsz,wght axes only) | active | index.html:12-15 |
| C2 | Token retarget: `--font-display` → `'Fraunces', Georgia, 'Times New Roman', serif` | active | css/tokens.css:30-36 |
| C3 | Display-layer CSS retune for serif metrics: `.t-display`, `.flap-cell` paddings/min-widths, `.flap-text`/`.dep-name`, timetable names, about-heading override | active | css/typography.css:11-26, css/components.css:70-90, 400-420, DESIGN.md:149-151 |
| C4 | Protected reference: quote panel renders unchanged (.quote-text/.quote-runin/.quote-cite) | active | css/components.css:317-357 |
| C5 | Documentation sync: DESIGN.md frontmatter+Typography+rules, PRODUCT.md §Brand Commitments bullet, index.html contract line 28, css header comments | active | DESIGN.md:17-29,140-159,251; PRODUCT.md:67; index.html:28 |
| C6 | Visual QA wave: detect.mjs --scope type clean, desktop+mobile screenshots, console clean, reduced-motion intact | active | .impeccable/review/, AGENTS.md §11-12 |

## Open assumptions (announced defaults)
<!-- Record any default you adopt instead of asking, so the user can veto it at the gate. -->

| assumption | adopted default | rationale | reversible? |
|---|---|---|---|
| Which serif | **Fraunces** variable (opsz 9–144, wght 500–700 range loaded) | User delegated the pick ("just anything that looks bold and decent"); Fraunces = high-contrast editorial serif with optical sizing, distinctive "wonk" character — niche/chic per brief; free on Google Fonts matching the existing static-site loading pattern (index.html:13-15); no build step needed | yes |
| Case treatment | Keep `text-transform: uppercase` everywhere it exists today (flap cells, display headings) | Smallest faithful mapping of Anton's roles; real Solari boards are caps; poster-chic reads bold; avoids re-auditing every call site | yes |
| Body/UI family | Archivo stays, weights 400–700 unchanged | The beloved quote IS Archivo w500 (components.css:340-346 has no font-family) — user loves it in that setting; no churn | yes |
| Metadata family | Martian Mono stays | User picked option A which keeps mono for board hardware coherence | yes |
| Quote panel | Zero style changes; verified-only | User: "mind that typography on [quote]" = preserve it as reference | yes |

## Findings (cited - path:lines)

- **The quote is Archivo**, not a distinct face: `.quote-text` declares no font-family (css/components.css:340-346); inherits body → `var(--font-ui)` = Archivo (css/typography.css:7-9, css/tokens.css:35). Its loved look = weight 500, clamp(1.25rem→1.7rem), lh 1.55, max-width 36ch.
- Current binding trio: tokens.css:34-36 (`--font-display` Anton / `--font-ui` Archivo / `--font-mono` Martian Mono), loaded via Google Fonts link index.html:15 (Anton; Archivo 400-700; Martian Mono 400/600).
- Typography faces are a **binding brand commitment**: PRODUCT.md:67 "Faces revisable only with owner approval" — this request IS that approval; plan must record it and sync all records.
- Anton call sites beyond `.t-display`: flap-cell lettering (components.css ~78 region), departure names `.dep-name.flap-text` (~410), timetable project names, About heading override to `--text-board-lg` (DESIGN.md:151). All flow through `var(--font-display)` — single token swap reaches them, but metrics tuned for condensed Anton (line-height 1/1.04/1.05, letter-spacing, cell min-widths 0.76em/0.78em, paddings) need serif re-tuning (C3).
- Named rules that must be rewritten, not violated silently: Three-Layer Binding Rule + Mono Chrome Rule (DESIGN.md:157-159), "Don't grow the font cast" (DESIGN.md:251).
- Direction contract comment pins "Anton destinations, Archivo interface, Martian Mono metadata" (index.html:28) — amend in same change.
- No test runner exists (static site, AGENTS.md §3); QA is detector + browser evidence.

## Decisions (with rationale)

- D1 **Direction: Serif takeover** — user's explicit choice from the fork question ("looks bold and decent like serif takeover").
- D2 Display face = **Fraunces** (see assumptions table).
- D3 Uppercase transforms preserved everywhere they exist today.
- D4 Archivo (UI/body) and Martian Mono (metadata) unchanged; quote panel protected.
- D5 Docs sync is IN scope (C5) — brand records must not drift from shipped code (AGENTS.md source-of-truth rule).

## Scope IN

- index.html head font links; index.html:28 contract comment
- css/tokens.css `--font-display`
- css/typography.css display-layer metrics + header comment (line 3)
- css/components.css serif metric retunes (flap cells, dep names, timetable names, desk/board-large heading override)
- DESIGN.md frontmatter typography block, Typography section, Hierarchy steps, named rules, Don't-cast rule
- PRODUCT.md Brand Commitments typography bullet (record owner approval date + new faces)
- QA evidence: detector run, refreshed desktop/mobile captures, console check

## Scope OUT (Must NOT have)

- NO change to `.quote-panel`, `.quote-text`, `.quote-runin`, `.quote-cite` styles
- NO change to colors/palette, spacing scale, radius vocabulary, motion system, layout
- NO change to `--font-ui` or `--font-mono` families or fallbacks
- NO new font families beyond Fraunces; no fourth face
- No framework/build tooling introduction (AGENTS.md §3 stands)
- No content/copy changes anywhere

## Open questions

None — direction resolved by user (serif takeover); remaining choices were delegated defaults recorded above.

## Approval gate
status: approved → plan written & delivered
approach: Serif takeover — Fraunces replaces Anton across the display layer (single token swap + metric retunes), quote panel untouched, docs synced, QA wave with detector + dual-viewport screenshots.
next workflow action: user starts worker session ($start-work typography-recast); planner does not execute.

## Review round state (user opted in 2026-08-24: "do that dual high review too")
review_required: true (owner opt-in after delivery)
plan_path: .omo/plans/typography-recast.md
plan_sha256 (final, post-review-fixes): 9b40c782d7d6a2e2b19352e990d208cf15963b0d9363951da3de898b76319481
round_id: rr-typography-recast-20260824-001
round_status: inconclusive → self-run substitute completed
momus: { status: inconclusive-infrastructure, attempts: [opencode/gpt-5.6-sol, opencode/claude-opus-5, opencode/gemini-3.1-pro — all ModelNotFound], substitute: planner lane-A executor-readiness pass }
independent: { status: inconclusive-infrastructure, attempts: [opencode/gpt-5.6-sol, opencode/gemini-3.1-pro, opencode/claude-opus-5 — all ModelNotFound], substitute: planner lane-B adversarial font-engineering pass }
substitute_findings_folded: TL;DR next-move line updated; no BLOCKER/MAJOR findings; lanes B verified GF css2 syntax, swap-FOUT tolerance, opsz auto-sizing, payload tradeoff, fallback metrics, Windows-runnable criteria.
disclosure: user informed at handoff.

## Deviations log
- 2026-08-24: Mandatory Metis gap analysis could NOT run — harness model config broken (metis attempts failed on nonexistent models opencode/claude-opus-5 and opencode/kimi-k3; bg_22ef12b3, sessions ses_fce53c5beffe0h6fxNaGDLSpdM / ses_fce53c515ffeigUFXY0FNbA03y). Substituted a self-run gap analysis by the planner covering the same categories; findings folded into the plan (Playwright fallback, detector path fallback, HTML-scope tightening, timetable flap-text clarification). Disclosed to user at delivery.
