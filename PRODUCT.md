# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary audiences, all deliberately equal in priority (confirmed by owner — no ordering when trade-offs arise):

- Developers and engineers
- Recruiters and hiring managers
- Technical people evaluating credibility
- Designers and people who appreciate creative web experiences

Situation: a visitor arrives curious about who Haris is. Job: quickly grasp his identity and engineering depth, appreciate the presentation, and decide whether to explore further or make contact. The site must be understandable without requiring cloud-engineering knowledge.

## Product Purpose

The Living Atelier is Haris's personal portfolio and digital space. It intentionally refuses the conventional developer-portfolio format, combining four registers into one coherent world: personal digital space, fashion/editorial publication, digital art gallery, and engineering laboratory.

Success means visitors remember: Haris + a unique website + strong engineering projects. The intended emotional sequence is curiosity → aesthetic appreciation → exploration → technical discovery → credibility → memorability.

## Positioning

An engineer's portfolio presented as a designed publication: engineering demonstrated through curation, composition, and artifact-quality presentation rather than technology inventory or dashboard panels. The claim a neighboring portfolio could not truthfully copy: "I know how systems work. I care how things feel. I build with both." The first impression should be "this is an engineer's portfolio?" followed by recognition of genuine technical depth.

## Operating Context

- Static website opened directly in browsers; no build step in the current phase.
- All four project artifacts and photography are currently placeholders. Real case studies and personal photography WILL replace them in the foreseeable future (confirmed by owner) — future design work should reserve strong image real estate accordingly.
- Contact happens through direct links (email, GitHub, LinkedIn); no form backend exists or is planned.
- Eventual deployment target noted as Vercel in PRD.md, but not a binding constraint on current work.

## Capabilities and Constraints

Confirmed functionality:

- Single-page narrative with seven chapters: Arrival, Personal Space, Selected Artifacts (exhibits), The Living System (topology visualization), Archive, About, Contact.
- Projects are named artifacts, not cards: Load Balancer, Redis Infrastructure, Containerized Application, Uptime Monitoring.

Technical constraints (binding, from AGENTS.md §3):

- Current phase permits HTML5, CSS3, and vanilla JavaScript only when necessary.
- Explicitly banned until a later approved phase: React, Next.js, Tailwind, GSAP, Motion, Lenis, Three.js, UI/component libraries.
- Native cursor only; custom cursor prohibited.
- Motion requires a valid reason (feedback, hierarchy, continuity, spatial relationship, discovery) — never decoration. No scroll-jacking, no excessive parallax.

Content constraints:

- Do not invent personal claims about Haris beyond documented identity.
- Do not present fictional results, metrics, clients, or achievements as real facts.

Explicitly undecided product facts: none outstanding.

## Brand Commitments

Owner-approved full visual rebrand (2026-08-23, Impeccable direction round, seed key 328ae9c7): product truth unchanged, incumbent cream/navy/gold visual world retired by explicit owner choice ("replace everything"). Supersedes the palette pinned in PRD.md §12 and AGENTS.md §7 until those documents are synced.

Binding identity elements:

- Name: Haris. Role: Cloud Engineer. Philosophy: "build with brain and heart" — treated as personal philosophy, not a permanent large headline everywhere.
- Visual world: **Split-Flap Departures** — the site is a living Solari-style departure board. Content travels as departures (chapters), timetable rows (works, archive), and station furniture (about, contact); the mechanical flap is the page's native motion.
- Color strategy: Committed, DAY MODE (owner-approved 2026-08-24 — night ground retired by owner choice "i dont like these dark themes"): warm paper housing #F7F3E5 (AGENTS.md Canvas family), raised panel #EFE9D5, recessed #E3DAC0, dark Solari flap tiles #241E17 carrying ivory lettering #EDE6D6 with slit line #B8AE9A, Solari amber #E8A33D for surfaces (plates/lamps/dots/selection) and amber-ink #8A5B10 for amber text/lines on paper, signal red reserved for rare alerts #C8442E. Amber-ink exists for WCAG contrast (raw amber on paper = 1.9:1); new colors require explicit justification; no neon or glow treatments.
- Typography is a single-family binding, final form (amended 2026-08-26 through three owner revisions — Anton → Fraunces → unified Archivo → Gambetta trial → **reverted to Archivo alone**): Archivo carries every role. Editorial display text (chapter headings, departure names, contact line, brand wordmark) runs **sentence case at weight ≤ 600** — never all-caps, never overbold. All-caps survives only in tracked metadata labels and single letters on flap tiles. Nav links and tags run as sentence-case wayfinding. Any second face requires fresh owner approval.
- Signature interaction: split-flap letter resolution when board rows arrive — motion serves wayfinding/arrival/status only, never decoration; prefers-reduced-motion resolves flaps instantly; native cursor always.
- Anti-AI-slop rules remain binding (PRD.md §11): no purple/blue AI gradients, no excessive glassmorphism, no bento-grid-only layouts, no excessive rounded cards, no glowing blobs or random 3D, no generic "Hello, I'm a developer" hero, no dashboard aesthetics, no unnecessary badges/icons, no animation without purpose, no scroll hijacking. Test: "Could this appear on 500 other AI-generated portfolios?" If yes, reconsider.
- Editorial principle: the site communicates engineering credibility through quality of work and its presentation — never as a technology inventory.

## Evidence on Hand

- PRD.md — comprehensive product requirements (40 sections) written by the owner.
- AGENTS.md — binding working rules and constraints.
- Real contact endpoints: hrisscloud@gmail.com, github.com/Haristhropic, linkedin.com/in/rahmad-haris-abdillah-958142384/.
- Absences future work must NOT fabricate: no real case studies, no real metrics or performance numbers, no clients, no testimonials, no press, no real photography yet. All project content is explicitly placeholder until replaced.

## Product Principles

1. Personality before convention — never read as a generic developer portfolio or an AI-generated template.
2. Credibility through presentation — engineering depth is proven by the quality and curation of the work's staging, not by listing technologies.
3. Equal audiences, one experience — recruiters and craft-appreciators receive the same composition; no mode splits priority.
4. Content honesty — placeholder content stays visibly provisional; nothing fictional is presented as fact.
5. Restraint as identity — expressive but controlled; effects never compensate for weak composition.

## Accessibility & Inclusion

Required standard (PRD.md §29): semantic HTML, keyboard navigation, visible focus states, sufficient color contrast, meaningful alt text, reduced-motion support, accessible navigation, proper heading hierarchy. Major interactions must remain usable without relying solely on hover.
