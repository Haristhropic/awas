# SKILL ORCHESTRATION

This project contains a collection of specialized skills.

The agent MUST NOT assume that one skill is sufficient
for a task.

Before implementing any non-trivial task:

1. Analyze the task.
2. Identify all relevant skills.
3. Read the relevant skill documentation.
4. Combine their guidance.
5. Resolve conflicts according to priority.
6. Create an implementation plan.
7. Implement.
8. Review the result against the relevant skills.

---

# SKILL USAGE RULE

Use ALL skills that are materially relevant to the current task.

Do NOT blindly use unrelated skills.

Example:

A hero redesign may require:

- UI design
- typography
- art direction
- responsive design
- accessibility
- animation

A project case study may require:

- editorial layout
- UX
- typography
- photography
- responsive design
- accessibility

A scroll animation may require:

- motion design
- interaction design
- performance
- accessibility

---

# REQUIRED SKILL DISCOVERY

Before implementing a task, answer:

1. What is the task?
2. What parts of the system does it affect?
3. Which skills are relevant?
4. What guidance does each skill provide?
5. Are there conflicts between skills?
6. Which guidance takes priority?

Do not begin implementation until this analysis is complete.

---

# SKILL PRIORITY

When skills conflict, use this priority:

1. PRD.md
2. AGENTS.md
3. Accessibility
4. Performance
5. UX
6. UI / visual design
7. Motion
8. Implementation convenience

Visual quality must never justify breaking accessibility
or causing severe performance problems.

---

# SKILL COMPOSITION

Skills should be combined, not applied sequentially
as isolated recipes.

Example:

Do NOT think:

    "First apply animation skill."

Instead think:

    UX
      +
    Visual Design
      +
    Motion
      +
    Accessibility
      +
    Performance

    ↓

    ONE IMPLEMENTATION

---

# SKILL AUDIT

After implementation, review the result against
EVERY skill identified as relevant.

For each skill:

    PASS
    PARTIAL
    FAIL

If a skill is PARTIAL or FAIL,
determine whether refinement is required.