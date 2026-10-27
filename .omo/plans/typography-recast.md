# typography-recast - Work Plan

## TL;DR (For humans)
<!-- Fill this LAST, after the detailed plan below is written, so it summarizes the REAL plan. -->
<!-- Plain English for a non-engineer: NO file paths, NO todo numbers, NO wave/agent/tool names. -->

**What you'll get:** Every big display letter on the site — page headings, the giant H-A-R-I-S board tiles, departure names — switches from the stiff condensed Anton to Fraunces, a characterful editorial serif with more presence and warmth. The fonts you read with (body copy, metadata) stay exactly as they are, the quote you love is untouched, and all design documentation is updated to match.

**Why this approach:** The quote's beloved look comes from Archivo set softly — so the recast targets only the "firm/formal" layer (Anton) while keeping Archivo where it already works; one design token drives every display use, so the swap is central, small, and reversible.

**What it will NOT do:** No changes to colors, spacing, layout, motion, or content. No new font families beyond the one serif. Nothing about the quote panel or body/metadata fonts changes at all.

**Effort:** Short
**Risk:** Low - single-token visual change with serif-metric retunes; verified by screenshots and computed-style checks before handoff
**Decisions to sanity-check:** Fraunces chosen for you ("bold and decent" serif); uppercase kept wherever it exists today

Your next move: approved — execute via `$start-work typography-recast`; dual high-accuracy review was requested and completed as a disclosed self-run substitute (subagent model registry broken in this environment; both lanes failed on nonexistent model IDs — see draft deviations log). Full execution detail follows below.

---

> TL;DR (machine): Short/Low-risk — swap --font-display Anton→Fraunces + metric retunes in 3 CSS files + head link, sync 2 docs, QA via detector + dual-viewport screenshots; quote panel invariant.

## Scope
### Must have
- Replace the display face **Anton → Fraunces** across every consumer of `--font-display`: `.t-display`, `.flap-cell` (+ `--giant`/`--row`), `.dep-name`. Exactly three `font-family: var(--font-display)` call sites exist: css/typography.css:13, css/components.css:78, css/components.css:410.
- Update font loading in index.html head: drop Anton from the Google Fonts link, add Fraunces variable axes `opsz,wght@9..144,400..700`; keep Archivo and Martian Mono requests byte-identical.
- Retokenize css/tokens.css `--font-display` to `'Fraunces', Georgia, 'Times New Roman', serif`.
- Serif metric retune of Anton-tuned rules so the new face sits correctly:
  - css/typography.css `.t-display` (lines 12-26): weight 400 → 600, line-height 1.04 → ~1.08, letter-spacing 0.015em → normal; uppercase transform, color, amber `<em>`/`.accent` rule stay.
  - css/components.css `.flap-cell--giant` (103-107) and `.flap-cell--row` (~109-113): widen min-width (0.76em/0.78em → ~0.84em) and adjust padding for wider serif caps while preserving slit line at top:50% and inset curl shadows.
  - css/components.css `.dep-name` (408-417): weight 400 → 600, line-height 1.05 → ~1.12, letter-spacing normal; keep size clamp, color, hover translateX(6px).
- Documentation sync so records match shipped code: DESIGN.md frontmatter typography block (17-29), Typography section + Hierarchy steps + Three-Layer Binding / Mono Chrome / font-cast Don't rules (140-159, 251); PRODUCT.md §Brand Commitments typography bullet (line 67 — record owner approval 2026-08-24, new faces); index.html direction-contract comment line 28; header comments css/typography.css:3 and css/tokens.css:30-33.
- QA evidence: impeccable detector run, desktop + mobile screenshots, console check, quote-panel invariance proof.

### Must NOT have (guardrails, anti-slop, scope boundaries)
- NO style change to `.quote-panel`, `.quote-text`, `.quote-runin`, `.quote-cite` (css/components.css:317-357) — the quote is the protected reference; it must render pixel-identical.
- NO change to `--font-ui` or `--font-mono` families/fallbacks (Archivo and Martian Mono stay exactly as loaded today).
- NO fourth font family; no second serif; no display-serif usage outside former-Anton roles.
- NO changes to colors, spacing scale, radius vocabulary, motion system, layout, breakpoints, HTML structure (allowed HTML edits: head lines 12-15 only + contract comment line 28 only).
- NO removal of `text-transform: uppercase` anywhere it exists today.
- No frameworks/build tooling (AGENTS.md §3 binding); no git operations (directory is not a git repo).

## Verification strategy
> Zero human intervention - all verification is agent-executed.
- Test decision: **none** (framework) — static HTML/CSS site with no test runner (AGENTS.md §3). QA is agent-executed browser + detector evidence per todo.
- Mechanical scan: `node "C:\Users\Haris\.config\opencode\skills\impeccable\scripts\detect.mjs" --json --scope type index.html css/` — must end with zero unexplained findings.
- Rendered proof: Playwright MCP against `file:///C:/awas/index.html` — capture 1440×900 and 390×844 PNGs; assert `getComputedStyle` of `.flap-cell--giant`, `.t-display`, `.dep-name` resolves font-family starting with `"Fraunces"`; body/UI text still Archivo; `.quote-text` computed style identical to pre-change capture values (font-family Archivo, weight 500, lh 1.55).
- Console: zero errors/warnings on load and after full scroll.
- Reduced motion: emulate `prefers-reduced-motion: reduce` once — hero resolves instantly, no layout shift from font swap.
- Evidence: `<attemptDir>/task-<N>-typography-recast.<png|json|txt>` (attemptDir = currentAttemptDir from 'omo ulw-loop status --json'; outside ulw-loop use `.omo/evidence/`).
- Tool-availability fallbacks (decided, not judgment calls): if Playwright MCP is unavailable, degrade QA to static asserts (grep for token/link values + rule presence) and write `<attemptDir>/qa-degraded.txt` explaining which rendered checks could not run; F3 then audits those static artifacts instead of screenshots. If the detector script is missing at the skill path, retry once at `.agents/skills/impeccable/scripts/detect.mjs`; if both missing, record its absence in evidence and rely on computed-style checks only.

## Execution strategy
### Parallel execution waves
> Target 5-8 todos per wave. Fewer than 3 (except the final) means you under-split.

**Wave 1 (implementation, sequential-safe but logically parallel):** Todos 1-3 — font delivery/token swap, typography.css retune, components.css retune. Todo 1 first (token flip makes the serif live); 2 and 3 are independent metric edits that can run in any order after it.
**Wave 2:** Todo 4 — documentation sync across DESIGN.md / PRODUCT.md / contract comment / css header comments (records the shipped state from Wave 1).
**Wave 3 (final):** F1-F4 verification wave in parallel.

Executor discipline (owner directive: execute **with /impeccable**): before editing UI, read `C:\Users\Haris\.config\opencode\skills\impeccable\reference\typeset.md` AND `reference/craft-floor.md`; run the typeset playbook's two isolated assessments (typographic assessment + mechanical scan) before the first edit; honor its Apply rules (light-on-dark compensation, measure, zoom preservation) and Verify checklist; finish by handing off to `$impeccable polish` conventions only if a defect round is needed — no open-ended polish loops (bounded passes: one batched inspect → one fix batch → one confirm).

### Dependency matrix
| Todo | Depends on | Blocks | Can parallelize with |
| --- | --- | --- | --- |
| 1 | — | 2, 3, 4 | — |
| 2 | 1 | 4 | 3 |
| 3 | 1 | 4 | 2 |
| 4 | 1, 2, 3 | F1-F4 | — |
| F1-F4 | 4 | — | each other |

## Todos
> Implementation + Test = ONE todo. Never separate.
<!-- APPEND TASK BATCHES BELOW THIS LINE WITH edit/apply_patch - never rewrite the headers above. -->

- [x] 1. Swap display token to Fraunces + update font loading (index.html head, tokens.css)
  What to do / Must NOT do:
    - index.html line 15: replace the Google Fonts href with `https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,400..700&family=Martian+Mono:wght@400;600&display=swap`. Keep both preconnect lines (13-14) and `display=swap`.
    - index.html line 12 comment: update to "Typography — Split-Flap Departures type system (Fraunces display)".
    - css/tokens.css lines 30-36: set `--font-display: 'Fraunces', Georgia, 'Times New Roman', serif;` and refresh the comment block above it (Display: Fraunces editorial serif). Leave `--font-ui` and `--font-mono` byte-identical.
    - MUST NOT touch any other token, link, or script.
  Parallelization: Wave 1 | Blocked by: none | Blocks: 2, 3, 4
  References (executor has NO interview context - be exhaustive): index.html:12-15; css/tokens.css:9-36; draft `.omo/drafts/typography-recast.md` (decisions D1-D5)
  Acceptance criteria (agent-executable):
    - Grep asserts exactly one occurrence of `Fraunces` in tokens.css `--font-display`, zero occurrences of `Anton` in index.html and tokens.css.
    - Playwright evaluate on file:///C:/awas/index.html: `getComputedStyle(document.querySelector('.flap-cell--giant')).fontFamily` starts with `Fraunces` (fallback proof if network blocked: Georgia — record which in evidence).
  QA scenarios (name the exact tool + invocation):
    - Happy: playwright browser_navigate → browser_evaluate computed-style check above → save JSON. Evidence `<attemptDir>/task-1-typography-recast.json`
    - Failure: block fonts.gstatic.com request, reload — page still renders in Georgia fallback with zero layout collapse (flap cells keep size); note result. Evidence `<attemptDir>/task-1-fallback-typography-recast.png`
  Commit: N | directory is not a git repo — no VCS operations

- [x] 2. Retune .t-display metrics for serif (css/typography.css)
  What to do / Must NOT do:
    - Line 3 header comment: "Display: Fraunces · UI: Archivo · Mono: Martian Mono".
    - `.t-display` (lines 12-20): `font-weight: 400` → `600`; `line-height: 1.04` → `1.08`; `letter-spacing: 0.015em` → `normal`. Keep font-family var, uppercase transform, color var, font-size var, and lines 22-26 (em/.accent amber) untouched.
    - MUST NOT change sizes (`--text-*` tokens), body/UI/meta layers, or any other rule in the file.
  Parallelization: Wave 1 | Blocked by: 1 | Blocks: 4
  References: css/typography.css:1-72; DESIGN.md:151 (display step spec)
  Acceptance criteria (agent-executable):
    - Playwright evaluate: `getComputedStyle(document.querySelector('.t-display'))` → fontWeight "600", lineHeight ratio ≈1.08, fontFamily starts with "Fraunces".
    - Detector: `node "C:\Users\Haris\.config\opencode\skills\impeccable\scripts\detect.mjs" --json --scope type css/typography.css` → no new findings vs pre-change baseline run.
  QA scenarios (exact tool + invocation):
    - Happy: computed-style JSON + detector JSON saved. Evidence `<attemptDir>/task-2-typography-recast.json`
    - Failure: if amber `<em>` ("brain & heart" accent) lost color, revert weight-only and re-run; document. Evidence `<attemptDir>/task-2-fail-typography-recast.png`
  Commit: N | no git repo

- [x] 3. Retune flap cells + departure names for serif caps (css/components.css)
  What to do / Must NOT do:
    - `.flap-cell--giant` (103-107): min-width `0.76em` → `0.84em`; padding `0.05em 0.17em 0.005em` → `0.06em 0.14em 0.01em`.
    - `.flap-cell--row` (~109-113): min-width → `0.84em` (keep its font-size var).
    - `.dep-name` (408-417): `font-weight: 400` → `600`; `line-height: 1.05` → `1.12`. Keep grid-area, font-family var, uppercase, size clamp, color, transition, hover rule (419-421).
    - MUST NOT touch `.flap-text .fc` animation rules (270-283), slit pseudo-element (::after at 92-101), inset shadows, quote panel (317-357), or anything else.
    - MUST NOT add font-family to timetable `.flap-text` spans (index.html:387-405) — they intentionally render Archivo today and stay that way; only `.dep-name` carries the display face.
  Parallelization: Wave 1 | Blocked by: 1 | Blocks: 4
  References: css/components.css:67-113, 260-290, 400-425; DESIGN.md:149-150, 189-190
  Acceptance criteria (agent-executable):
    - Hero at 1440×900: all five H-A-R-I-S cells single-line, slit line still bisects each cell at 50%, letters vertically centered, no clipping (screenshot inspection).
    - Departure row names wrap-free at 1440 and restack correctly at ≤640px (existing breakpoint untouched).
    - `.quote-text` computed style unchanged: fontFamily contains Archivo, fontWeight "500", lineHeight ≈1.55.
  QA scenarios (exact tool + invocation):
    - Happy: desktop + mobile screenshots; quote computed-style JSON. Evidence `<attemptDir>/task-3-typography-recast.desktop.png` + `.mobile.png` + `.json`
    - Failure: if serif caps clip inside flap cells (descender/overshoot touching slit), raise giant padding top to 0.08em and re-capture once; document. Evidence `<attemptDir>/task-3-fix-typography-recast.png`
  Commit: N | no git repo

- [x] 4. Sync design records with shipped reality (DESIGN.md, PRODUCT.md, contract comment, css headers)
  What to do / Must NOT do:
    - DESIGN.md frontmatter `typography:` block (17-29): display-board + display entries → Fraunces stack; adjust recorded lineHeight/letterSpacing/weight values to match Wave 1 output exactly.
    - DESIGN.md Typography section (140-159): Display Font line → Fraunces (editorial serif, variable opsz/wght); Character paragraph → new three-layer sentence ("Fraunces announces, Archivo explains, Martian Mono records"); Hierarchy Board Giant/Board Row/Display steps updated with new weight/lh/min-width values.
    - DESIGN.md named rules: Three-Layer Binding Rule (157) reworded to Fraunces; Don't-cast bullet (251) → "beyond the Fraunces/Archivo/Martian Mono binding".
    - PRODUCT.md line 67 bullet: record owner-approved face revision dated 2026-08-24 (Anton retired, Fraunces adopted; Archivo/Martian Mono confirmed).
    - index.html direction-contract comment line 28: replace "Anton destinations" with "Fraunces destinations".
    - MUST NOT alter DESIGN.md sections outside typography, or any other PRODUCT.md commitment.
  Parallelization: Wave 2 | Blocked by: 1, 2, 3 | Blocks: F1-F4
  References: DESIGN.md:1-88, 140-159, 245-255; PRODUCT.md:58-70; index.html:26-33; AGENTS.md §SOURCE OF TRUTH
  Acceptance criteria (agent-executable):
    - Grep: zero `Anton` occurrences across DESIGN.md, PRODUCT.md, index.html, css/*.css.
    - Every numeric value written into DESIGN.md matches the code (spot-check three values against css files).
  QA scenarios (exact tool + invocation):
    - Happy: grep output saved showing zero Anton hits + doc/code value spot-check table. Evidence `<attemptDir>/task-4-typography-recast.txt`
    - Failure: any mismatch found → fix the DOC to match code (code is ground truth per DESIGN.md footer), re-grep. Evidence `<attemptDir>/task-4-fix-typography-recast.txt`
  Commit: N | no git repo

## Final verification wave
> Runs in parallel after ALL todos. ALL must APPROVE. Surface results and wait for the user's explicit okay before declaring complete.
- [x] F1. Plan compliance audit
- [x] F2. Code quality review
- [x] F3. Real manual QA
- [x] F4. Scope fidelity

## Commit strategy
The project directory is **not a git repository** — no commits, branches, or PRs. Deliverable is the working tree itself plus QA evidence under `.omo/evidence/`. If the owner later initializes git, a single `style(typography): replace Anton with Fraunces across display layer` commit covering all four todos would be the natural unit.

## Success criteria
1. Every glyph that previously rendered Anton (`.t-display`, `.flap-cell` giant/row, `.dep-name`, about-heading via `.t-display`) now renders Fraunces at weight 600 with serif-appropriate leading; verified by computed style + screenshots on desktop 1440×900 and mobile 390×844.
2. The quote panel (`.quote-panel` block) renders pixel-identical to before: Archivo, weight 500, lh ~1.55 — computed-style proof captured.
3. Zero `Anton` references remain in index.html, css/, DESIGN.md, PRODUCT.md.
4. Impeccable detector (`--scope type`) reports no unexplained findings; browser console clean; reduced-motion path intact; flap slit line still bisects cells at 50%.
5. All four todos carry happy+failure QA evidence files under `.omo/evidence/`; F1-F4 all APPROVE.
