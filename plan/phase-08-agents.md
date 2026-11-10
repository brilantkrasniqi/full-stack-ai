# Phase 8: Agents (Days 113–126)

Main resources: Anthropic engineering posts [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents), [Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) and [How we built our multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system), plus the Claude Agent SDK and Claude Code docs.

### Day 113 · Tue Mar 2 · Workflows vs agents

- **Read:** [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) (full).
- **Do:** Draw each pattern from memory after reading.
- **Tasks:** For each pattern, write one real product idea that would use it.
- **Done when:** your Tutor accepts your explanation of workflows vs agents.
- **Recall:** Name the workflow patterns. When should you not build an agent?

### Day 114 · Wed Mar 3 · Chaining and routing

- **Read:** Re-read those two patterns in the post.
- **Do:** Build both without any framework.
- **Tasks:** Chain: text → extract workout → validate → write summary. Router: classify a message and send it to coach, nutrition or support prompts with different models.
- **Done when:** both run end to end.
- **Recall:** Why are workflows more predictable than agents? How do you test a router?

### Day 115 · Thu Mar 4 · Orchestrator and evaluator patterns

- **Read:** The orchestrator-workers and evaluator-optimizer sections again.
- **Do:** Build an evaluator-optimizer that improves a draft until a grader approves it (max 3 rounds).
- **Tasks:** Orchestrator that splits "plan my training month" into weekly sub-tasks for workers, then merges results.
- **Done when:** both patterns work.
- **Recall:** What stops an evaluator loop from running forever?

### Day 116 · Fri Mar 5 · Claude Agent SDK

- **Read:** Claude docs: Agent SDK overview and TypeScript quickstart.
- **Do:** Run the quickstart agent in a sandbox folder.
- **Tasks:** Agent that reads a folder of notes and writes a summary file, with permissions limited to that folder.
- **Done when:** it works and can't touch files outside its folder.
- **Recall:** What does the Agent SDK give you that your hand-written loop didn't? How do permissions work?

### Day 117 · Sat Mar 6 · Agents with your tools

- **Read:** Agent SDK docs on custom tools and MCP.
- **Do:** Add your Phase 7 MCP server to the agent.
- **Tasks:** Agent that reviews your training log and writes next week's plan into your database.
- **Done when:** it completes the task end to end using your tools.
- **Recall:** How do you decide which tools an agent gets?

### Day 118 · Sun Mar 7 · Context management

- **Read:** [Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents). Agent SDK docs on context and compaction.
- **Do:** Run a long task and watch the context grow.
- **Tasks:** Make an agent finish a 30+ step task using a notes/memory file and compaction.
- **Done when:** the long task completes correctly.
- **Recall:** Why is context a limited resource? What should go into an agent's memory file?

### Day 119 · Mon Mar 8 · Subagents

- **Read:** [How we built our multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system). Agent SDK docs on subagents.
- **Do:** Sunday mixed quiz.
- **Tasks:** Research agent with 3 subagents that search in parallel and a lead agent that writes a cited brief.
- **Done when:** the brief has sources from each subagent.
- **Recall:** What do subagents gain you? What do they cost?

### Day 120 · Tue Mar 9 · Skills

- **Read:** Claude docs: Agent Skills overview and best practices.
- **Do:** Read 2 example skills and note their structure.
- **Tasks:** Write a `SKILL.md` that teaches Claude your project's conventions (for example, how to add a feature to Project B). Use it in Claude Code.
- **Done when:** Claude follows the skill without extra prompting.
- **Recall:** Skill vs system prompt vs CLAUDE.md: when to use each?

### Day 121 · Wed Mar 10 · Claude Code deep dive

- **Read:** Claude Code docs: memory (CLAUDE.md), hooks, slash commands, headless mode.
- **Do:** Write a CLAUDE.md for Project B with stack, commands and rules.
- **Tasks:** Add 2 hooks (for example, run tests after edits and block edits to `.env`) and 2 custom slash commands.
- **Done when:** Claude Code behaves noticeably better in your repo.
- **Recall:** What belongs in CLAUDE.md? What can hooks enforce that prompts can't?

### Day 122 · Thu Mar 11 · Claude in CI

- **Read:** Claude Code docs: GitHub Actions.
- **Do:** Install the GitHub app and workflow on a test repo.
- **Tasks:** Automatic PR review on Project B. Open a PR with a deliberate bug and see if it's caught.
- **Done when:** the review comments on your PR.
- **Recall:** What should automated review never be trusted to do alone?

### Day 123 · Fri Mar 12 · Project F: the core

- **Read:** The capstone ideas in the [Overview](README.md).
- **Do:** Write a one-paragraph spec: what job the agent does, its tools, its limits.
- **Tasks:** Build **Project F**'s core with the Agent SDK until it does the job end to end.
- **Done when:** one full successful run.
- **Recall:** What's the riskiest action your agent can take?

### Day 124 · Sat Mar 13 · Human in the loop

- **Read:** Agent SDK docs on permissions and approvals.
- **Do:** List every action and mark which need approval.
- **Tasks:** UI that shows live progress and asks the user to approve or deny risky steps.
- **Done when:** nothing risky happens without a click.
- **Recall:** How do you decide what needs approval?

### Day 125 · Sun Mar 14 · Guardrails

- **Read:** Claude docs on reducing prompt leaks and guarding against jailbreaks; Agent SDK docs on limits.
- **Do:** Try to make your agent misbehave.
- **Tasks:** Add spend, step and time limits, sandboxing, and logging of every action.
- **Done when:** the agent can't run away or exceed budget.
- **Recall:** Name 4 guardrails every production agent needs.

### Day 126 · Mon Mar 15 · Ship Project F

- **Do:** Sunday mixed quiz.
- **Tasks:** Deploy Project F and record a demo video showing a full run with an approval step.
- **Done when:** live demo + video.
- **Recall:** Explain agents vs workflows, subagents and context engineering to your Tutor.
