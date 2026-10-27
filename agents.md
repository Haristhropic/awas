# AGENTS.md

## PROJECT

Project: The Living Atelier

Owner: Haris

Role: Cloud Engineer

Personal philosophy:

"build with brain and heart"

The website is a highly art-directed personal portfolio
combining editorial design, digital gallery aesthetics,
and engineering.

---

# 1. SOURCE OF TRUTH

Before making significant changes, read:

1. PRD.md
2. AGENTS.md
3. docs/design.md (when available)
4. docs/motion.md (when available)

PRD.md defines WHAT the product is.

AGENTS.md defines HOW the agent must work.

Do not contradict these documents without explicit approval.

---

# 2. DEVELOPMENT PHILOSOPHY

Build progressively.

Do not attempt to build the entire experience in one step.

Preferred workflow:

Plan
→ Implement
→ Inspect
→ Critique
→ Refine
→ Validate

Never blindly rewrite working code.

---

# 3. CURRENT TECHNOLOGY CONSTRAINT

During the initial prototype phase:

USE:
- HTML5
- CSS3
- vanilla JavaScript only when necessary

DO NOT introduce:
- React
- Next.js
- Tailwind
- GSAP
- Motion
- Lenis
- Three.js
- UI libraries
- component libraries

These technologies may be introduced only in later,
explicitly approved phases.

---

# 4. DESIGN PRINCIPLES

The visual identity should feel:

- editorial
- personal
- artistic
- warm
- refined
- fresh
- bright
- clear
- expressive
- niche
- technically intelligent

The website should feel like a personal digital space,
not a conventional developer portfolio.

---

# 5. ANTI-AI-SLOP

Avoid generic design patterns commonly produced by
AI website generators.

DO NOT introduce:

- generic purple/blue gradients
- excessive glassmorphism
- bento-grid-everything
- excessive rounded cards
- glowing blobs
- random 3D objects
- floating spheres
- generic futuristic UI
- excessive dashboard patterns
- excessive badges
- unnecessary icons
- generic SaaS sections
- custom cursor
- meaningless parallax
- animation without purpose

If a design decision feels generic,
question it before implementing it.

---

# 6. CUSTOM CURSOR

Never implement a custom cursor.

Use the native cursor.

---

# 7. COLOR

Use the established design tokens.

Do not invent new colors casually.

Current palette:

Canvas:
#F7F3E5

Soft Canvas:
#EFE9D5

Primary Ink:
#133458

Deep Ink:
#0B253E

Gold:
#D99B21

Olive:
#838921

Mist:
#D9E8E2

White:
#FFFDF5

If a new color is genuinely necessary,
explain why before introducing it.

---

# 8. TYPOGRAPHY

Typography has three roles:

DISPLAY
→ editorial / expressive

SANS
→ UI / readability

MONO
→ technical metadata

Do not use excessive font styles.

Typography should create hierarchy,
not decoration.

---

# 9. LAYOUT

Prefer:

- intentional asymmetry
- editorial composition
- strong whitespace
- unconventional but readable layouts
- visual rhythm
- image/text interaction

Avoid:

- repetitive card grids
- every section having the same structure
- excessive containers
- excessive borders
- excessive rounded rectangles

---

# 10. MOTION

Motion must have purpose.

Valid reasons:

- feedback
- hierarchy
- continuity
- spatial relationship
- discovery

Invalid reason:

"because it looks cool."

Prefer:

CSS
→ vanilla JS
→ Motion
→ GSAP

Use the simplest technology capable of producing
the required result.

---

# 11. PERFORMANCE

Do not sacrifice performance for visual effects.

Prefer:

- transform
- opacity
- efficient CSS
- lazy loading
- responsive images
- minimal JavaScript

Avoid unnecessary:

- layout thrashing
- large continuous animations
- expensive filters
- excessive blur
- unnecessary rendering
- heavy dependencies

---

# 12. ACCESSIBILITY

Every implementation should consider:

- semantic HTML
- keyboard navigation
- visible focus
- color contrast
- alt text
- reduced motion
- readable typography

Do not make an interaction dependent exclusively on hover.

---

# 13. RESPONSIVE DESIGN

Mobile is not a scaled-down desktop.

Treat mobile as its own composition.

Maintain:

- hierarchy
- typography
- visual rhythm
- image quality
- usability

Do not solve responsive problems by simply shrinking everything.

---

# 14. CODE QUALITY

Prefer:

- simple code
- semantic HTML
- meaningful class names
- reusable patterns
- centralized tokens
- minimal duplication

Do not prematurely abstract tiny pieces of code.

Do not create abstractions without a real need.

---

# 15. DEPENDENCIES

Do not install a dependency for a problem
that can reasonably be solved with native HTML/CSS/JS.

Before adding a dependency:

1. explain why it is necessary
2. explain what problem it solves
3. explain why native implementation is insufficient

---

# 16. CONTENT

Initial project content and photography may be dummy content.

Do not invent personal claims about Haris.

Use placeholders where information is unavailable.

Current known identity:

Name:
Haris

Role:
Cloud Engineer

Interests:
- infrastructure
- cloud security
- Linux

Personal philosophy:
"build with brain and heart"

---

# 17. PROJECTS

Current projects are placeholders.

Initial dummy projects:

- Load Balancer
- Redis Infrastructure
- Containerized Application
- Uptime Monitoring

Do not present fictional results,
metrics, clients, or achievements as real facts.

---

# 18. EDITORIAL PRINCIPLE

The website should communicate:

"I know how systems work.
I care about how things feel.
I build with both."

Do not turn the website into a technology inventory.

Engineering should be demonstrated through
the quality of the work and its presentation.

---

# 19. CHANGE MANAGEMENT

Before making a major change:

1. inspect the existing implementation
2. identify what is wrong
3. explain the intended change
4. implement the smallest appropriate change
5. inspect the result

Do not rewrite unrelated parts of the project.

---

# 20. STOP CONDITION

If a requested feature conflicts with the established
creative direction, stop and explain the conflict.

Do not silently compromise the design system.

---

# 21. NORTH STAR

BUILD WITH BRAIN AND HEART.

The website should feel:

Human.
Intentional.
Memorable.
Refined.
Technical.
Personal.

Never generic.


Before implementing this task, do NOT immediately modify code. First perform SKILL ORCHESTRATION. 1. Read PRD.md. 2. Read AGENTS.md. 3. Inspect the available skill documentation. 4. Identify ALL skills relevant to this task. 5. Do not stop after finding the first relevant skill. 6. Read every relevant skill document and supporting reference that materially affects the implementation. 7. Build a skill matrix. 8. Synthesize the guidance from all relevant skills. 9. Identify conflicts between skills. 10. Resolve conflicts according to the project's priority rules. 11. Create an implementation plan. 12. Only then implement. After implementation: 1. Review the result against PRD.md. 2. Review against AGENTS.md. 3. Review against EVERY skill used. 4. Produce a PASS / PARTIAL / FAIL matrix. 5. Fix meaningful failures. 6. Do not add unnecessary features. IMPORTANT: Do not treat skills as isolated recipes. Combine them into one coherent implementation. The goal is not: "Use as many skills as possible." The goal is: "Use every skill that materially improves or constrains the current task."


# TASK EXECUTION PROTOCOL

For every significant implementation task, follow this protocol.

## STEP 1 — UNDERSTAND

Read:

- PRD.md
- AGENTS.md
- relevant project documentation

Understand the intended outcome before touching code.

---

## STEP 2 — DISCOVER SKILLS

Search the available skill documentation.

Identify every skill relevant to the task.

Do not stop after finding the first relevant skill.

Create a skill matrix:

| Skill | Relevant | Why |
|---|---|---|
| UI | YES | visual composition |
| Typography | YES | hierarchy |
| Motion | YES | interaction |
| Accessibility | YES | keyboard/reduced motion |
| Performance | YES | animation efficiency |
| SEO | NO | not affected |

---

## STEP 3 — READ SKILLS

Read the documentation for every skill marked YES.

Do not rely on skill names alone.

Extract:

- principles
- constraints
- recommended techniques
- anti-patterns
- implementation requirements

---

## STEP 4 — SYNTHESIZE

Combine the relevant skills into ONE implementation strategy.

Do not implement each skill independently.

The final implementation must satisfy
the intersection of the relevant skills.

---

## STEP 5 — IMPLEMENT

Implement the smallest appropriate solution.

Prefer existing project patterns.

Do not introduce unnecessary dependencies.

---

## STEP 6 — REVIEW

Review the implementation against:

- PRD
- AGENTS.md
- every relevant skill

Create a PASS / PARTIAL / FAIL matrix.

---

## STEP 7 — REFINE

Fix meaningful failures.

Do not endlessly polish insignificant details.

---

## STEP 8 — REPORT

Return:

1. What was implemented
2. Skills used
3. Important decisions
4. Trade-offs
5. Review results
6. Remaining issues