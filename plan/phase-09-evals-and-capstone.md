# Phase 9: Evals, production and capstone (Days 127–140)

Main resources: Claude docs "Define success criteria" and "Create strong empirical evaluations", Hamel Husain's [Your AI Product Needs Evals](https://hamel.dev/blog/posts/evals/), and Claude docs on batch processing.

### Day 127 · Tue Mar 16 · Why evals matter

- **Read:** [Your AI Product Needs Evals](https://hamel.dev/blog/posts/evals/). Claude docs: "Define success criteria".
- **Do:** Guess first: how would you know Project F got better after a prompt change? Compare with the reading.
- **Tasks:** Write success criteria for Project F and list eval types you'll use: code-graded, model-graded, human.
- **Done when:** an eval plan is in the README.
- **Recall:** Why are "vibes" not enough? Which eval type is cheapest and most reliable?

### Day 128 · Wed Mar 17 · Eval harness

- **Read:** Claude docs: "Create strong empirical evaluations".
- **Do:** Collect 30 real or realistic inputs from your own usage logs.
- **Tasks:** Build a harness: dataset file, runner, scorers, and a results table saved per run.
- **Done when:** `pnpm eval` prints a score and saves results.
- **Recall:** Why save results per run? What makes a good eval dataset?

### Day 129 · Thu Mar 18 · LLM-as-judge

- **Read:** The Claude docs eval guide section on model-based grading.
- **Do:** Grade 20 outputs yourself first, then write the grading prompt.
- **Tasks:** Build a judge prompt with a clear rubric and measure how often it agrees with your grades.
- **Done when:** the judge agrees with you 80%+ of the time.
- **Recall:** Why check the judge against human grades? How do you make a judge prompt reliable?

### Day 130 · Fri Mar 19 · Evals in CI

- **Read:** GitHub Actions docs on running workflows on pull requests.
- **Do:** Make a prompt worse on purpose in a branch.
- **Tasks:** CI runs your evals on every PR and fails if the score drops below a threshold.
- **Done when:** the bad prompt change is blocked automatically.
- **Recall:** How do you keep eval cost down in CI?

### Day 131 · Sat Mar 20 · Observability

- **Read:** [Langfuse docs](https://langfuse.com/docs) overview (an open-source LLM tracing tool).
- **Do:** Trace one full agent run step by step.
- **Tasks:** Log prompts, responses, tokens, latency and tool calls for every run, and view the last 100 runs in a dashboard.
- **Done when:** you can find the slowest and most expensive run.
- **Recall:** What would you look at first when a user reports a bad answer?

### Day 132 · Sun Mar 21 · Cost and latency

- **Read:** Claude docs: "Batch processing" and "Reducing latency".
- **Do:** List every model call and its cost per task.
- **Tasks:** Apply caching, Haiku for easy steps and the Batch API for offline work. Re-run evals to make sure quality held.
- **Done when:** cost per task is measurably lower at the same eval score.
- **Recall:** Which work suits the Batch API? What's the tradeoff of a smaller model?

### Day 133 · Mon Mar 22 · Capstone spec

- **Read:** The capstone ideas in the [Overview](README.md). Your notes on every project so far.
- **Do:** Sunday mixed quiz.
- **Tasks:** Write a one-page capstone spec: user, problem, features, architecture diagram, tools, risks, eval plan. Defend it to your Tutor.
- **Done when:** spec committed.
- **Recall:** Who exactly is your user, and what will they do differently with your product?

### Day 134 · Tue Mar 23 · Capstone: backend and agent core

- **Read:** Your spec.
- **Tasks:** Database schema, auth, and the agent's core loop working end to end.
- **Done when:** one full successful run.
- **Recall:** What did you reuse from earlier projects?

### Day 135 · Wed Mar 24 · Capstone: interface

- **Read:** Your Day 40 notes on chat design.
- **Tasks:** Build the UI. Make it the most beautiful thing you've shipped.
- **Done when:** usable end to end on phone and desktop.
- **Recall:** Which design detail will impress a hiring manager most?

### Day 136 · Thu Mar 25 · Capstone: tools and integrations

- **Read:** Your Phase 7 notes.
- **Tasks:** Connect real tools or your MCP server so the agent takes real actions, with approvals.
- **Done when:** real actions work safely.
- **Recall:** Which action is riskiest and how did you guard it?

### Day 137 · Fri Mar 26 · Capstone: evals and guardrails

- **Read:** Your Phase 9 harness.
- **Tasks:** 30-case eval set, judge, CI check, spend and step limits.
- **Done when:** an eval score is recorded in the README.
- **Recall:** What's your current weakest eval case and why?

### Day 138 · Sat Mar 27 · Capstone: robustness

- **Read:** OWASP Top 10 summary again.
- **Tasks:** Error states, rate limits, usage limits per user, input validation, Sentry.
- **Done when:** it survives every bad input you can think of.
- **Recall:** What would break first with 100 users?

### Day 139 · Sun Mar 28 · Launch to real users

- **Do:** Deploy. Write a short guide for testers.
- **Tasks:** Invite 3–5 real users. Watch at least 2 of them use it without helping.
- **Done when:** feedback collected in a list.
- **Recall:** What surprised you about how people used it?

### Day 140 · Mon Mar 29 · Fix and improve

- **Do:** Sunday mixed quiz covering all phases.
- **Tasks:** Fix the top 3 issues from feedback. Re-run evals.
- **Done when:** capstone v1.1 is live.
- **Recall:** Explain your capstone's architecture to your Tutor as if in an interview.
