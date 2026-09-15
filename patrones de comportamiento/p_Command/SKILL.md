**Skill: Create SKILL.md for Agent Customization**

- **Purpose**: Provide a concise, reusable template and step-by-step workflow for authoring a `SKILL.md` that defines an agent customization (workspace-scoped). This helps maintain consistent, high-quality skills across the repository.
- **Scope**: Repository-scoped (place this file in the repository root). Use workspace-level settings and examples when appropriate.

**When To Use**:
- Create or update this `SKILL.md` when introducing a new automation, examplar workflow, or agent customization that other contributors will rely on.

**Step-by-step Workflow**
- **1. Extract the workflow**: From the conversation or task, list the sequential actions, decision points, and expected outputs. Keep each step short and actionable.
- **2. Clarify intent**: If the workflow is ambiguous, add a short Questions section with the minimum clarifying questions needed to continue.
- **3. Draft the skill**: Write the skill using these sections: Purpose, Inputs, Steps, Decision Points, Quality Checks, Example Prompts, and Output Artifacts.
- **4. Add snippets**: Include any code or configuration snippets as copy-paste-ready blocks. If the snippet is a TypeScript source file, include the exact filename suggestion and where to save it.
- **5. Iterate**: Identify uncertain areas and annotate them with TODO or NOTE markers so reviewers can focus their feedback.
- **6. Save and link**: Commit the `SKILL.md` at the repository root and reference it from other documentation (README, CONTRIBUTING) as needed.

**Decision Points & Branching**
- When a step may take multiple paths, label each path with a short trigger (e.g., "If repo uses PNPM → do X; otherwise use NPM → do Y").
- Use checkboxes for optional tasks that depend on environment or permission.

**Quality Criteria / Completion Checks**
- The skill lists a clear input and expected output.
- Decision points have explicit triggers.
- At least one example prompt is provided and one runnable snippet (if applicable).
- File locations and filenames are specified for any generated artifacts.

**Example Prompts (to invoke this skill)**
- "Create a SKILL.md that documents how to run the test harness and publish artifacts."
- "Generate a skill that accepts a TypeScript snippet and shows where to insert it into the codebase."

**Template: Minimal Skill Sections**
- Purpose: One-line goal.
- Scope: "repository" or "personal".
- Inputs: List of required inputs and optional flags.
- Steps: Numbered actions with expected outputs.
- Decision Points: Short branching rules.
- Quality Checks: What 'done' looks like.
- Examples: Prompts and example snippets.

**How to Insert a TypeScript Snippet**
- If you have a TypeScript code snippet to include in the skill, add a subsection `Snippet: <filename>` and paste the snippet exactly below. Example placeholder:

- Snippet: `src/example.ts`

- ```ts
- // paste TypeScript snippet here
- ```

**Ambiguities To Confirm**
- Should the `SKILL.md` be repository-scoped (checked-in) or personal (user-only)?
- Do you want the skill to automatically create files when run, or only provide instructions?

**Next Steps**
- Paste the TypeScript snippet you want included (or confirm the one you provided). I can insert it into `SKILL.md` under a `Snippet` subsection.

**Example: Suggested Follow-ups**
- Add a short `README.md` link that references this `SKILL.md`.
- Create example automation that uses this skill to scaffold files.
