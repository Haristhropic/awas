# THE LIVING ATELIER
## Personal Portfolio / Digital Space — Product Requirements Document

Version: 0.1
Status: Planning
Owner: Haris
Role: Cloud Engineer

---

# 1. PRODUCT VISION

The Living Atelier is a personal portfolio and digital space belonging to Haris,
a Cloud Engineer interested in infrastructure, Linux, and cloud security.

The website must not feel like a conventional developer portfolio.

It should feel like a combination of:

- personal digital space
- fashion/editorial website
- digital art gallery
- engineering laboratory
- living interactive system

The core experience is:

    PERSONALITY
        ↓
    CURIOSITY
        ↓
    VISUAL EXPLORATION
        ↓
    ENGINEERING DISCOVERY
        ↓
    CREDIBILITY

The visitor should initially think:

    "What the fuck, this is an engineer portfolio?"

Then:

    "This website is beautiful."

And finally:

    "Oh shit, this person actually understands engineering."

---

# 2. CORE CONCEPT

## THE LIVING ATELIER

The concept consists of three interconnected identities.

### THE ATELIER

Represents:

- personality
- editorial design
- fashion influence
- typography
- personal expression
- refinement

### THE DIGITAL GALLERY

Represents:

- photography
- visual storytelling
- experimental layouts
- project presentation
- artistic composition

### THE LIVING SYSTEM

Represents:

- engineering
- infrastructure
- systems thinking
- interaction
- motion
- technical depth

Relationship:

    ATELIER
       │
       ├── Personality
       │
       ├── Editorial
       │
       ↓
    GALLERY
       │
       ├── Visual storytelling
       │
       ├── Photography
       │
       ↓
    LIVING SYSTEM
       │
       ├── Engineering
       ├── Interaction
       └── Motion

The final product should feel like one coherent world,
not three unrelated visual styles.

---

# 3. BRAND IDENTITY

## Name

Haris

## Professional Identity

Cloud Engineer

## Personal Statement

"build with brain and heart"

The statement should be treated as a personal philosophy,
not necessarily displayed as a permanent large headline everywhere.

---

# 4. PERSONAL INTERESTS

Public-facing interests:

- infrastructure
- cloud security
- Linux
- systems
- engineering
- building things from scratch

These interests should emerge naturally throughout the website.

Avoid turning the About section into a conventional resume.

---

# 5. SOCIAL / CONTACT

GitHub:

https://github.com/Haristhropic

LinkedIn:

https://www.linkedin.com/in/rahmad-haris-abdillah-958142384/

Email:

hrisscloud@gmail.com

These links should be presented minimally and elegantly.

Do not create oversized social-media cards.

---

# 6. TARGET AUDIENCE

Primary:

- developers
- engineers
- recruiters
- technical people
- designers
- people interested in creative web experiences

Secondary:

- anyone who appreciates exceptional digital design

The website should be understandable without requiring
the visitor to understand cloud engineering.

---

# 7. PRIMARY GOAL

The primary goal is NOT simply to list qualifications.

The goal is to create a memorable representation of Haris
as an engineer and builder.

Success means visitors remember:

    Haris
    +
    unique website
    +
    strong engineering projects

---

# 8. SECONDARY GOALS

- demonstrate engineering ability
- demonstrate systems thinking
- present selected projects
- provide professional contact paths
- provide GitHub access
- establish a distinctive personal brand
- demonstrate attention to detail

---

# 9. NON-GOALS

The website should NOT become:

- a SaaS landing page
- a corporate website
- a resume dump
- a blog-heavy website
- a social network
- a dashboard
- a 3D showcase
- a collection of random animation experiments

---

# 10. DESIGN PHILOSOPHY

Primary keywords:

- fresh
- bright
- decent
- clear
- warm
- editorial
- chic
- niche
- expressive
- refined
- organic
- experimental

The visual language should feel:

    expressive but controlled
    artistic but professional
    technical but approachable
    experimental but intentional

---

# 11. ANTI-AI-SLOP RULES

The following are explicitly prohibited unless there is a strong
design justification.

- generic purple/blue AI gradients
- excessive glassmorphism
- bento-grid-only layouts
- excessive rounded cards
- random 3D objects
- glowing spheres
- generic floating blobs
- excessive gradient backgrounds
- generic "Hello, I'm a developer" hero
- excessive dashboard UI
- unnecessary badges
- excessive icons
- unnecessary custom cursor
- animation for animation's sake
- excessive parallax
- scroll hijacking
- visual noise
- excessive drop shadows

The website must not resemble a generic AI-generated portfolio.

Design decisions should pass this question:

    "Could this appear on 500 other AI-generated portfolios?"

If yes, reconsider the implementation.

---

# 12. COLOR SYSTEM

Primary canvas:

#F7F3E5

Soft canvas:

#EFE9D5

Primary ink:

#133458

Deep ink:

#0B253E

Signature gold:

#D99B21

Organic olive:

#838921

Fresh mist:

#D9E8E2

Highlight white:

#FFFDF5

Approximate usage:

55% cream
25% navy
10% white / soft cream
5% olive
4% gold
1% mist

Gold should remain a rare signature accent.

---

# 13. TYPOGRAPHY

Three typography layers should exist.

## DISPLAY

Editorial serif.

Used for:

- hero
- large statements
- major headings
- project titles
- visual moments

## UI

Modern sans-serif.

Used for:

- navigation
- body text
- buttons
- descriptions
- metadata

## SYSTEM

Monospace.

Used sparingly for:

- technical metadata
- dates
- stack
- artifact numbers
- system labels

Typography relationship:

    SERIF
    personality

    SANS
    structure

    MONO
    engineering

Exact fonts can be selected during implementation,
but the combination must preserve this relationship.

---

# 14. LAYOUT SYSTEM

The underlying layout should use a structured grid.

The visible composition should remain expressive.

Principle:

    STRUCTURED UNDERNEATH
    EXPRESSIVE ABOVE

Asymmetry is encouraged.

Elements may:

- span multiple columns
- overlap
- offset
- change alignment
- use unusual whitespace
- break conventional card layouts

However, asymmetry must remain intentional.

---

# 15. BORDER SYSTEM

Borders should be subtle.

Use borders primarily for:

- section separation
- metadata
- navigation
- system diagrams
- technical information

Avoid putting borders around every visual element.

---

# 16. BORDER RADIUS

Do not use a single universal radius.

Editorial elements:

0–4px

Interactive controls:

6–10px

Special visual elements:

12–24px

Radius should communicate the nature of the component.

---

# 17. IMAGE SYSTEM

Photography is an important part of the visual identity.

The site should support:

- full-bleed imagery
- editorial crops
- floating images
- overlapping images
- masked images
- asymmetric image compositions

Images should feel like editorial artifacts,
not generic website decoration.

---

# 18. PHOTOGRAPHY

Initial implementation may use dummy photography.

Dummy images should represent the intended direction:

- architecture
- workspace
- objects
- natural environments
- shadows
- textures
- streets
- abstract details

Avoid generic corporate stock photography.

Actual photography will be replaced later.

---

# 19. INFORMATION ARCHITECTURE

Primary routes:

    /
    /work
    /work/[slug]
    /archive
    /about
    /contact

The homepage remains the primary experience.

Visitors should not need to navigate multiple pages
to understand who Haris is.

---

# 20. HOMEPAGE STRUCTURE

The homepage contains approximately seven major chapters.

## 01 — ARRIVAL

Purpose:

Create immediate curiosity.

Possible content:

    HARIS GOLD

    A PERSONAL SPACE FOR
    THINGS WORTH BUILDING.

And:

    Cloud Engineer

The hero should feel editorial rather than like a resume.

---

## 02 — PERSONAL SPACE

Purpose:

Introduce personality.

Example direction:

    I BUILD SYSTEMS.

    I LIKE THINGS
    THAT ARE QUIETLY
    COMPLICATED.

Photography accompanies this section.

Keep copy concise.

---

## 03 — SELECTED WORK

Purpose:

Introduce engineering work.

Projects should not appear as conventional cards.

They should appear as artifacts.

Example:

    01

    LOAD
    BALANCER

    [LARGE VISUAL]

    Infrastructure
    Traffic
    Resilience

    2026

    VIEW CASE →

---

## 04 — THE SYSTEM

This is the signature interactive section.

Purpose:

Turn engineering concepts into visual experiences.

Example:

    REQUEST
       ↓
    LOAD BALANCER
       ↓
    APPLICATION
       ↓
    REDIS
       ↓
    DATABASE

The system should be interactive.

Possible interactions:

- nodes highlight
- traffic moves
- connections animate
- information appears contextually
- scroll controls the narrative

Do not create unnecessary 3D.

SVG/DOM should be preferred when sufficient.

---

## 05 — ARCHIVE

Purpose:

Show ongoing interests and experiments.

Example:

    2026 / 08
    Docker experiments

    2026 / 07
    Redis website

    2026 / 06
    Network experiments

This should feel like a personal index,
not a collection of cards.

---

## 06 — ABOUT

Purpose:

Humanize the engineer.

Example:

    I'm Haris.

    I care about systems,
    infrastructure, and the
    small details that make
    things work.

    Currently exploring
    cloud engineering,
    security, and distributed
    systems.

Keep this short.

---

## 07 — CONTACT

Purpose:

Provide a confident ending.

Possible direction:

    LET'S MAKE
    SOMETHING
    WORTH KEEPING.

Then:

    email →
    github →
    linkedin →

---

# 21. PROJECT MODEL

Projects are called:

    ARTIFACTS

rather than portfolio cards.

Initial dummy projects:

## Artifact 001

Load Balancer

Category:

Infrastructure

Dummy stack:

- Linux
- Nginx
- Docker

---

## Artifact 002

Redis Infrastructure

Category:

Systems

Dummy stack:

- Redis
- Docker
- Node.js

---

## Artifact 003

Containerized Application

Category:

DevOps

Dummy stack:

- Docker
- Docker Compose
- Linux

---

## Artifact 004

Uptime Monitoring

Category:

Observability

Dummy stack:

- Uptime Kuma
- Docker
- Linux

These are placeholders.

Actual project information will replace them later.

---

# 22. CASE STUDY STRUCTURE

Each project can contain:

    THE PROBLEM
        ↓
    THE IDEA
        ↓
    THE SYSTEM
        ↓
    IMPLEMENTATION
        ↓
    RESULT
        ↓
    WHAT I LEARNED

The case study should be approximately:

    40% text
    60% visual

Avoid walls of text.

---

# 23. CONTENT ARCHITECTURE

Use MDX for project content.

Example:

    content/
    └── projects/
        ├── load-balancer.mdx
        ├── redis.mdx
        ├── docker.mdx
        └── uptime-kuma.mdx

Project metadata should be data-driven.

Example fields:

- id
- title
- slug
- year
- category
- description
- thumbnail
- hero
- stack
- featured
- repository
- liveUrl
- caseStudy

---

# 24. MOTION PHILOSOPHY

Core principle:

    MOTION SHOULD FEEL ALIVE,
    NOT ANIMATED.

Every animation must have a reason.

Valid reasons:

- feedback
- hierarchy
- spatial relationship
- continuity
- discovery

Invalid reason:

    "because it looks cool"

---

# 25. MOTION HIERARCHY

## MICRO

100–250ms

Used for:

- hover
- buttons
- links
- small feedback

## COMPONENT

250–500ms

Used for:

- project interactions
- menus
- images
- UI components

## SCENE

500–1000ms

Used for:

- hero
- major transitions
- section reveals

## NARRATIVE

800–1200ms+

Used selectively for:

- system visualization
- major editorial moments
- scroll storytelling

---

# 26. MOTION TECHNOLOGY

Prefer:

1. CSS
2. Motion
3. GSAP

Use GSAP for complex choreography.

Lenis is optional.

Three.js / React Three Fiber is optional.

Do not add a library merely because it is popular.

---

# 27. CUSTOM CURSOR

Explicitly prohibited.

The native cursor should remain.

Interactions should happen through the content itself.

---

# 28. SCROLL

Scroll should feel physical and intentional.

Avoid:

- scroll-jacking
- excessive parallax
- forced horizontal scrolling
- motion that makes reading difficult

Scroll-driven animation should support storytelling.

---

# 29. ACCESSIBILITY

Must support:

- semantic HTML
- keyboard navigation
- visible focus states
- sufficient color contrast
- meaningful alt text
- reduced motion
- accessible navigation
- proper heading hierarchy

All major interactions must remain usable
without relying solely on hover.

---

# 30. RESPONSIVE DESIGN

Desktop:

Maximum art direction.

Tablet:

Balanced composition.

Mobile:

Vertical editorial composition.

Mobile must not simply be a scaled-down desktop layout.

The experience must be intentionally redesigned for small screens.

---

# 31. PERFORMANCE

Core principle:

    LOOKS EXPENSIVE.
    LOADS FAST.

Requirements:

- optimized images
- responsive images
- lazy loading where appropriate
- minimal client JavaScript
- dynamic import for heavy interactive sections
- avoid unnecessary dependencies
- avoid rendering hidden heavy components
- animate performant properties whenever practical

Heavy components such as complex system visualization
should be loaded only when necessary.

---

# 32. RENDERING STRATEGY

Prefer:

    Server-rendered / static content
        +
    small interactive client components

Avoid making the entire application a client component.

The homepage should remain lightweight despite
having advanced motion.

---

# 33. TECH STACK

Core:

- Next.js
- React
- TypeScript
- Tailwind CSS
- CSS
- Motion
- MDX

Advanced:

- GSAP

Conditional:

- Lenis
- React Three Fiber / Three.js

Deployment:

- Vercel

Repository:

- GitHub

---

# 34. REPOSITORY STRUCTURE

Recommended:

    living-atelier/
    │
    ├── public/
    │   ├── images/
    │   ├── photography/
    │   └── fonts/
    │
    ├── src/
    │   ├── app/
    │   ├── components/
    │   ├── content/
    │   ├── lib/
    │   └── styles/
    │
    ├── docs/
    │   ├── design.md
    │   └── motion.md
    │
    ├── package.json
    ├── tsconfig.json
    └── README.md

---

# 35. DESIGN TOKENS

All colors, typography,
spacing, radius, and motion values
must be centralized.

Do not scatter design values throughout components.

---

# 36. AI CODING AGENT RULES

The implementation agent MUST:

- reuse existing components
- respect design tokens
- respect the motion system
- preserve accessibility
- preserve responsive behavior
- prefer CSS before adding libraries
- keep components reusable
- keep dependencies minimal
- preserve the visual identity

The implementation agent MUST NOT:

- invent colors
- introduce random gradients
- add random 3D
- add custom cursor
- introduce unnecessary cards
- add animation without purpose
- install libraries without justification
- redesign the site without approval
- replace the established visual language

---

# 37. ACCEPTANCE CRITERIA

The website is successful if:

1. It does not look like a generic developer portfolio.
2. It does not look obviously AI-generated.
3. The first 5–10 seconds create curiosity.
4. Projects are memorable visually.
5. Engineering credibility becomes clear through exploration.
6. Motion feels intentional rather than excessive.
7. Photography feels integrated into the identity.
8. Typography plays a meaningful visual role.
9. Mobile experience remains excellent.
10. Performance remains strong despite advanced visuals.
11. Accessibility is respected.
12. The website feels like one coherent world.

---

# 38. EMOTIONAL SUCCESS CRITERIA

Desired visitor reactions:

    "What the fuck, this is an engineer portfolio?"

    "This website is insanely good."

    "Who is this?"

    "Wait, he actually builds infrastructure?"

    "I haven't seen an engineer portfolio presented like this."

The desired emotional sequence:

    CURIOSITY
        ↓
    AESTHETIC APPRECIATION
        ↓
    EXPLORATION
        ↓
    TECHNICAL DISCOVERY
        ↓
    CREDIBILITY
        ↓
    MEMORABILITY

---

# 39. FINAL DESIGN PRINCIPLE

The website should never scream:

    "LOOK HOW MANY TECHNOLOGIES I KNOW."

Instead, it should quietly communicate:

    "I know how systems work.
     I care about how things feel.
     And I build with both."

---

# 40. NORTH STAR

## BUILD WITH BRAIN AND HEART.

Brain:

- systems
- infrastructure
- engineering
- security
- Linux
- performance
- architecture

Heart:

- design
- photography
- typography
- craft
- curiosity
- experimentation

The website is where both meet.