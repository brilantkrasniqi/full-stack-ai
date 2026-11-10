# 150-Day Full-Stack AI Engineer Plan

Nov 10, 2026 → Apr 8, 2027

> Ported from the Claude Doc: https://claude.ai/code/artifact/eab27f73-c41f-4c72-9c8b-955cf129da06
>
> Files in this folder: [Learning method](learning-method.md) · [Daily guide](daily-guide.md) ·
> [Phase 1](phase-01-javascript.md) · [Phase 2](phase-02-typescript.md) · [Phase 3](phase-03-react.md) ·
> [Phase 4](phase-04-nextjs-and-backend.md) · [Phase 5](phase-05-claude-api.md) · [Phase 6](phase-06-rag.md) ·
> [Phase 7](phase-07-tools-and-mcp.md) · [Phase 8](phase-08-agents.md) · [Phase 9](phase-09-evals-and-capstone.md) ·
> [Phase 10](phase-10-python-and-launch.md)

## How to use this plan

You start with strong CSS and solid JavaScript. You finish as a full-stack TypeScript engineer who ships Claude-powered products, with five deployed projects and a capstone agent, applying for roles by mid-March.

**One language, end to end:** TypeScript for the front end (React, Next.js), the back end (Node, Postgres) and the AI layer (Claude TypeScript SDK, MCP, Agent SDK). Python gets one short week near the end, because many AI job posts ask for it. Modern React and TypeScript are mostly plain functions and data, so you will barely touch OOP.

- **Time:** about 2 hours on weekdays, 3–4 hours on weekends. Weekends are build days.
- **Rule 1:** ship something every day, even small. Push to GitHub daily.
- **Rule 2:** official docs first: react.dev, nextjs.org/learn, typescriptlang.org, docs.claude.com.
- **Rule 3:** use Claude Code as a tutor, not a ghostwriter. Write it yourself first, then ask Claude to review and explain. For the AI phases, let it pair with you fully.
- **Rule 4:** when a day slips, move on and catch up on the weekend. Rest when you need to.
- **Your edge:** your CSS skill. Every project should look better than other candidates' projects. That is visible proof on day one of an interview.

| Phase | Days | Dates | Outcome |
| --- | --- | --- | --- |
| 1. JavaScript and tooling | 1–7 | Nov 10–16 | Modern JS, Git, Node scripts |
| 2. TypeScript | 8–21 | Nov 17–30 | Comfortable with strict TS |
| 3. React | 22–42 | Dec 1–21 | Project A: React app + chat UI shell |
| 4. Next.js and backend | 43–70 | Dec 22–Jan 18 | Project B: full-stack app with auth and Postgres |
| 5. Claude API | 71–84 | Jan 19–Feb 1 | Project C: streaming AI chat app |
| 6. RAG | 85–98 | Feb 2–15 | Project D: chat with your documents |
| 7. Tools and MCP | 99–112 | Feb 16–Mar 1 | Project E: published MCP server |
| 8. Agents | 113–126 | Mar 2–15 | Project F: autonomous agent |
| 9. Evals, production, capstone | 127–140 | Mar 16–29 | Capstone live with real users |
| 10. Python and launch | 141–150 | Mar 30–Apr 8 | Portfolio live, applications sent |

## Days 1–7 (Nov 10–16): JavaScript and tooling

Goal: fill the gaps in modern JavaScript and set up a professional workflow.

| Day | Date | What to do | Done when |
| --- | --- | --- | --- |
| 1 | Tue Nov 10 | Setup: VS Code, Node LTS (via fnm), pnpm, Git, GitHub repo `fullstack-ai-150` | First commit pushed |
| 2 | Wed Nov 11 | Modern syntax: `let`/`const`, arrow functions, destructuring, spread, optional chaining, template literals | 20 small exercises |
| 3 | Thu Nov 12 | ES modules (`import`/`export`), array methods: `map`, `filter`, `reduce`, `find`, `some` | 5 old loops rewritten with array methods |
| 4 | Fri Nov 13 | Async: promises, `async`/`await`, `fetch`, `try`/`catch`, `Promise.all` | Script calling a public API |
| 5 | Sat Nov 14 | Node basics: `package.json`, scripts, reading files, environment variables | CLI tool that reads and prints JSON |
| 6 | Sun Nov 15 | Git properly: branches, pull requests, merge conflicts, `.gitignore` | A PR merged on your own repo |
| 7 | Mon Nov 16 | Mini project: vanilla JS app on a public API, styled beautifully, deployed to Vercel | Live URL |

## Days 8–21 (Nov 17–30): TypeScript

Goal: write strict TypeScript without fighting it. Main resources: the TypeScript Handbook and Matt Pocock's free Total TypeScript tutorials.

| Day | Date | What to do | Done when |
| --- | --- | --- | --- |
| 8 | Tue Nov 17 | Why TS, `tsc`, `tsconfig.json` with `strict: true`, basic types | First `.ts` file compiles |
| 9 | Wed Nov 18 | Type aliases vs interfaces, optional properties, arrays and objects | 10 data shapes typed |
| 10 | Thu Nov 19 | Union and literal types, `type Status = "idle" \| "loading"` | Status model for a fake app |
| 11 | Fri Nov 20 | Typing functions: params, returns, callbacks | 10 typed utility functions |
| 12 | Sat Nov 21 | Narrowing: `typeof`, `in`, discriminated unions | A `switch` that TS proves is exhaustive |
| 13 | Sun Nov 22 | Convert your Day 7 project to strict TypeScript | Zero errors, zero `any` |
| 14 | Mon Nov 23 | Generics basics: `Array<T>`, a generic `fetchJson<T>()` helper | Helper used in your project |
| 15 | Tue Nov 24 | Utility types: `Partial`, `Pick`, `Omit`, `Record`, `keyof` | Cheatsheet in your notes |
| 16 | Wed Nov 25 | `unknown` vs `any`; Zod for validating data at runtime | API response validated with Zod |
| 17 | Thu Nov 26 | Infer types from Zod schemas (`z.infer`) so types and validation never drift | One schema, one source of truth |
| 18 | Fri Nov 27 | Using typed libraries, reading type definitions, `.d.ts` basics | Can read a library's types |
| 19 | Sat Nov 28 | Error handling without classes: result objects `{ ok, data, error }` | Pattern used in a script |
| 20 | Sun Nov 29 | Build a typed CLI: todo or workout logger, JSON storage, Zod, strict | Project pushed |
| 21 | Mon Nov 30 | Type challenges (easy level, 10 of them) and review the week | Notes on what still confuses you |

## Days 22–42 (Dec 1–21): React

Goal: Project A, a polished React + TypeScript app, plus a reusable chat interface you will plug Claude into later. Main resource: the Learn section of react.dev, read in order.

| Day | Date | What to do | Done when |
| --- | --- | --- | --- |
| 22 | Tue Dec 1 | Vite + React + TS setup; JSX; components and props | 5 components rendering |
| 23 | Wed Dec 2 | State with `useState`, handling events | Counter, toggle, tabs built |
| 24 | Thu Dec 3 | Rendering lists with keys, conditional rendering | Filterable list |
| 25 | Fri Dec 4 | Forms and controlled inputs | Working signup form |
| 26 | Sat Dec 5 | "Thinking in React": component trees, lifting state up | Page broken into components on paper, then built |
| 27 | Sun Dec 6 | react.dev tic-tac-toe tutorial, then a habit tracker of your own | Habit tracker works |
| 28 | Mon Dec 7 | Styling in React: Tailwind and CSS modules (your strength) | Habit tracker looks great |
| 29 | Tue Dec 8 | `useEffect`, and read "You Might Not Need an Effect" | Notes on when not to use it |
| 30 | Wed Dec 9 | Data fetching with TanStack Query: loading, errors, caching | List from a real API |
| 31 | Thu Dec 10 | `useReducer` and context for shared state | Theme or cart via context |
| 32 | Fri Dec 11 | Custom hooks: extract reusable logic | 2 custom hooks |
| 33 | Sat Dec 12 | Routing with React Router | Multi-page app |
| 34 | Sun Dec 13 | Project A: recipe or movie search with routing, queries, Tailwind | Core features done |
| 35 | Mon Dec 14 | Component libraries (shadcn/ui) and accessibility basics | Project A uses accessible components |
| 36 | Tue Dec 15 | Testing: Vitest + React Testing Library | 5 component tests pass |
| 37 | Wed Dec 16 | Forms at scale: React Hook Form + Zod | Validated multi-field form |
| 38 | Thu Dec 17 | Performance basics: React DevTools, `memo`, why re-renders happen | One slow render found and fixed |
| 39 | Fri Dec 18 | Rendering text that arrives in chunks (preparing for AI streaming) | Fake streaming text demo |
| 40 | Sat Dec 19 | Chat UI shell: message list, input, mock assistant replies | Chat UI works with fake data |
| 41 | Sun Dec 20 | Polish chat UI: markdown rendering, auto-scroll, stop button, mobile | Looks production-ready |
| 42 | Mon Dec 21 | Deploy Project A and the chat shell, write READMEs | Both live |

## Days 43–70 (Dec 22–Jan 18): Next.js and backend

Goal: Project B, a real multi-user full-stack app with auth, a database and deployment. This is the phase that takes you away from WordPress for good. Main resource: nextjs.org/learn.

| Day | Date | What to do | Done when |
| --- | --- | --- | --- |
| 43 | Tue Dec 22 | HTTP fundamentals: methods, status codes, headers, JSON, REST | Explain a request/response cycle in notes |
| 44 | Wed Dec 23 | Next.js App Router: pages, layouts, links, routing | Multi-page Next app |
| 45 | Thu Dec 24 | Server components vs client components | Notes + a page using both |
| 46 | Fri Dec 25 | Fetching data on the server, caching and revalidation | Server-rendered list |
| 47 | Sat Dec 26 | Route handlers (your own API endpoints) | `GET` and `POST` endpoints work |
| 48 | Sun Dec 27 | Postgres in Docker; SQL: `SELECT`, `INSERT`, `JOIN`, indexes | 15 queries written by hand |
| 49 | Mon Dec 28 | Data modeling: tables, relations, foreign keys, migrations | Schema for Project B on paper |
| 50 | Tue Dec 29 | Drizzle ORM: schema, queries, migrations | Next app reading from Postgres |
| 51 | Wed Dec 30 | Server actions and forms, validated with Zod | Create/edit/delete works |
| 52 | Thu Dec 31 | Auth concepts: sessions, cookies, password hashing; set up Better Auth | Sign up and log in work |
| 53 | Fri Jan 1 | Protected routes; each user only sees their own data | Two test users, data isolated |
| 54 | Sat Jan 2 | Loading states, error boundaries, not-found pages | No blank screens on failure |
| 55 | Sun Jan 3 | Build Project B, e.g. a workout tracker: plans, logged sessions, progress charts | Core features done |
| 56 | Mon Jan 4 | Project B: polish UI and empty states | Feels like a real product |
| 57 | Tue Jan 5 | File uploads to object storage (S3-compatible) | Users can upload images |
| 58 | Wed Jan 6 | Webhooks and scheduled jobs (cron) | A daily job runs |
| 59 | Thu Jan 7 | Streaming responses from a route handler (server-sent events) | Text streams into the browser |
| 60 | Fri Jan 8 | Testing server code with Vitest | Tests for 3 server actions |
| 61 | Sat Jan 9 | Security: OWASP Top 10, input validation, rate limiting | Rate limit on login |
| 62 | Sun Jan 10 | A standalone API with Hono (backend outside Next.js) | Small Hono API deployed |
| 63 | Mon Jan 11 | Deploy Project B: Vercel + managed Postgres (Neon or Supabase) | Live URL |
| 64 | Tue Jan 12 | Logging and error tracking with Sentry | Errors show in a dashboard |
| 65 | Wed Jan 13 | Docker for a Node app; env vars and secrets | App runs from a container |
| 66 | Thu Jan 14 | Caching basics with Redis | One slow query cached |
| 67 | Fri Jan 15 | Light: refactor Project B, write the README | Project B tagged |
| 68 | Sat Jan 16 | Rest day | — |
| 69 | Sun Jan 17 | Light: write a post, "From WordPress to full-stack TypeScript" | Published |
| 70 | Mon Jan 18 | Buffer day: catch up on anything skipped | Phases 1–4 complete |

## Days 71–84 (Jan 19–Feb 1): Claude API

Goal: Project C, your chat shell from Day 42 turned into a real streaming AI app on your Next.js backend. Read the Messages API and prompt engineering docs end to end.

| Day | Date | What to do | Done when |
| --- | --- | --- | --- |
| 71 | Tue Jan 19 | Console account, API key with a spend limit, TypeScript SDK; system prompts, `max_tokens`, usage | First call logs tokens used |
| 72 | Wed Jan 20 | Multi-turn conversations: storing and sending history | CLI chat that remembers context |
| 73 | Thu Jan 21 | Streaming through a Next.js route handler into your chat UI | Tokens appear live |
| 74 | Fri Jan 22 | Light: read the prompt engineering guide | Notes |
| 75 | Sat Jan 23 | Rest day | — |
| 76 | Sun Jan 24 | Save conversations in Postgres, conversation sidebar | Reload keeps history |
| 77 | Mon Jan 25 | Prompting practice: clear instructions, examples, XML tags | 3 prompt versions compared |
| 78 | Tue Jan 26 | Structured outputs validated with Zod | Endpoint always returns valid JSON |
| 79 | Wed Jan 27 | Vision and PDFs | Upload a receipt, get structured data |
| 80 | Thu Jan 28 | Extended thinking: when it helps | Hard problem compared with and without |
| 81 | Fri Jan 29 | Prompt caching | Cost per call measured before and after |
| 82 | Sat Jan 30 | Model comparison: Haiku, Sonnet, Opus on one task | Table of quality, speed, cost |
| 83 | Sun Jan 31 | Rate limits, retries with backoff, timeouts; add chat modes | App survives forced failures |
| 84 | Mon Feb 1 | Deploy Project C, write a short post | Live URL + post |

## Days 85–98 (Feb 2–15): Embeddings and RAG

Goal: Project D, a "chat with your documents" app with citations and measured retrieval quality.

| Day | Date | What to do | Done when |
| --- | --- | --- | --- |
| 85 | Tue Feb 2 | Embeddings, cosine similarity, why RAG exists | RAG explained in 5 sentences |
| 86 | Wed Feb 3 | Generate embeddings with an embeddings API (e.g. Voyage AI) | 100 sentences embedded and searched |
| 87 | Thu Feb 4 | pgvector: store vectors, nearest-neighbor queries, indexes (via Drizzle) | Similarity search works |
| 88 | Fri Feb 5 | Ingestion: parse PDFs and markdown, chunk with overlap | 50 docs stored |
| 89 | Sat Feb 6 | Retrieve + generate with citations | Answers cite sources |
| 90 | Sun Feb 7 | Claude's built-in citations feature; compare with yours | Notes on differences |
| 91 | Mon Feb 8 | Hybrid search: Postgres full-text + vectors | Beats vector-only on 10 queries |
| 92 | Tue Feb 9 | Reranking and contextual retrieval | Measured improvement |
| 93 | Wed Feb 10 | Build a test set: 30 questions with known answers | `eval.jsonl` committed |
| 94 | Thu Feb 11 | Measure retrieval (recall@k) and answer quality | A score to improve |
| 95 | Fri Feb 12 | UI: upload files, sources beside answers | Demo-ready |
| 96 | Sat Feb 13 | When not to use RAG: long context + caching | Tradeoff notes |
| 97 | Sun Feb 14 | Handle "I don't know" answers; polish | No made-up answers on test set |
| 98 | Mon Feb 15 | Deploy Project D, record a 2-minute demo video | Live URL + video |

## Days 99–112 (Feb 16–Mar 1): Tool use and MCP

Goal: Project E, your own published MCP server, and an app where Claude calls your tools. This is the step from chatbot to "Claude does things."

| Day | Date | What to do | Done when |
| --- | --- | --- | --- |
| 99 | Tue Feb 16 | Tool use basics: tool schemas, `tool_use` and `tool_result` | Claude calls a tool you wrote |
| 100 | Wed Feb 17 | Write the agent loop by hand: call, run tools, send results, repeat | Loop runs until done |
| 101 | Thu Feb 18 | Multiple tools, parallel calls, tool errors | 4 tools working together |
| 102 | Fri Feb 19 | Server tools (web search, code execution) vs your own tools | Notes on when to use which |
| 103 | Sat Feb 20 | Tool-call UI: show each call and result live | Users see what Claude does |
| 104 | Sun Feb 21 | MCP concepts: hosts, clients, servers; tools, resources, prompts | Diagram in notes |
| 105 | Mon Feb 22 | Build an MCP server with the TypeScript SDK | Runs locally |
| 106 | Tue Feb 23 | Connect it to Claude Code and the Claude desktop app | Claude uses your tools |
| 107 | Wed Feb 24 | Make it useful: wrap something real (GitHub, Notion, your Project B API) | 5 real tools |
| 108 | Thu Feb 25 | Remote MCP: HTTP transport, OAuth, deploy | Works as a connector |
| 109 | Fri Feb 26 | Use the MCP connector from the Claude API in your app | Your app talks to your server |
| 110 | Sat Feb 27 | Security: prompt injection via tool results, least privilege, confirmations | Fixes applied |
| 111 | Sun Feb 28 | Docs, tests, publish to npm and GitHub | Others can install it |
| 112 | Mon Mar 1 | Write "Building my first MCP server" | Published |

## Days 113–126 (Mar 2–15): Agents

Goal: Project F, an agent that does a real multi-step job on its own, built with the Claude Agent SDK (TypeScript). This is the frontier.

| Day | Date | What to do | Done when |
| --- | --- | --- | --- |
| 113 | Tue Mar 2 | Read Anthropic's "Building effective agents"; workflows vs agents | Notes on the patterns |
| 114 | Wed Mar 3 | Build by hand: prompt chaining and routing | Both running |
| 115 | Thu Mar 4 | Orchestrator-workers and evaluator-optimizer | Both running |
| 116 | Fri Mar 5 | Claude Agent SDK: setup, built-in tools, permissions | Agent edits files in a sandbox |
| 117 | Sat Mar 6 | Add your MCP server and custom tools to the agent | Agent uses your tools |
| 118 | Sun Mar 7 | Context management: compaction, memory files, long tasks | Agent finishes a 30+ step task |
| 119 | Mon Mar 8 | Subagents: split work, run in parallel, merge | Research agent with 3 subagents |
| 120 | Tue Mar 9 | Skills: write a SKILL.md that teaches Claude a workflow | Skill loaded and used |
| 121 | Wed Mar 10 | Claude Code deep dive: CLAUDE.md, hooks, slash commands, headless mode | Tuned CLAUDE.md + 2 hooks |
| 122 | Thu Mar 11 | Claude Code in GitHub Actions for PR review | Auto-review on a test PR |
| 123 | Fri Mar 12 | Project F core: pick a job (see capstone ideas) | Agent does it end to end |
| 124 | Sat Mar 13 | Project F UI: live progress, approve/deny risky steps | Human-in-the-loop works |
| 125 | Sun Mar 14 | Guardrails: spend, step and time limits, sandboxing | Agent can't run away |
| 126 | Mon Mar 15 | Deploy Project F + demo video | Live demo |

## Days 127–140 (Mar 16–29): Evals, production and capstone

Goal: measure quality like a professional, then ship a capstone that real people use.

| Day | Date | What to do | Done when |
| --- | --- | --- | --- |
| 127 | Tue Mar 16 | Evals: code-graded, model-graded, human; define success criteria | Eval plan for Project F |
| 128 | Wed Mar 17 | Eval harness: dataset, runner, score table (Vitest or a script) | `pnpm eval` prints a score |
| 129 | Thu Mar 18 | LLM-as-judge: grading prompt checked against your own grades | Judge agrees with you 80%+ |
| 130 | Fri Mar 19 | Evals in CI so prompt changes can't silently regress | Failing eval blocks a merge |
| 131 | Sat Mar 20 | Observability: log prompts, responses, tokens, latency, tool calls | Dashboard of the last 100 runs |
| 132 | Sun Mar 21 | Cost and latency: caching, Haiku for easy steps, Batch API | Cost per task cut measurably |
| 133 | Mon Mar 22 | Pick your capstone, write a one-page spec | Spec done |
| 134 | Tue Mar 23 | Capstone: backend + agent core | Core loop works |
| 135 | Wed Mar 24 | Capstone: UI (make it beautiful) | Usable end to end |
| 136 | Thu Mar 25 | Capstone: tools / MCP integration | Real actions work |
| 137 | Fri Mar 26 | Capstone: evals and guardrails | Eval score recorded |
| 138 | Sat Mar 27 | Capstone: error states, rate limits, auth | Survives bad input |
| 139 | Sun Mar 28 | Deploy; invite 3–5 real users | Feedback collected |
| 140 | Mon Mar 29 | Fix the top 3 issues from feedback | Capstone v1.1 live |

**Capstone ideas:** an AI coach for your fitness business that builds personalized programs in Albanian from your existing plans; an agent that triages GitHub issues and drafts fixes; a research agent that writes cited briefs; a design-to-code agent that turns screenshots into React components (plays to your CSS strength).

## Days 141–150 (Mar 30–Apr 8): Python and launch

Goal: enough Python to pass AI job screens, a portfolio that proves you ship, and your first applications sent.

| Day | Date | What to do | Done when |
| --- | --- | --- | --- |
| 141 | Tue Mar 30 | Python for JS developers: syntax, lists, dicts, functions, type hints (no classes needed) | 20 exercises |
| 142 | Wed Mar 31 | uv, Pydantic, async with `httpx` | Typed script calling an API |
| 143 | Thu Apr 1 | FastAPI: a small endpoint that calls Claude with the Python SDK | Endpoint works |
| 144 | Fri Apr 2 | Port one of your evals to Python | Same score in both languages |
| 145 | Sat Apr 3 | Portfolio site: all projects with demo video, live link, eval score | Site live |
| 146 | Sun Apr 4 | Capstone case study: problem, architecture, evals, lessons | Published |
| 147 | Mon Apr 5 | CV and LinkedIn: "Full-stack AI engineer"; list TypeScript, React, Next.js, Postgres, Claude API, Agent SDK, MCP, RAG, evals | Both updated |
| 148 | Tue Apr 6 | Find 20 target roles: AI engineer, applied AI, full-stack engineer (AI products), forward deployed engineer | List saved |
| 149 | Wed Apr 7 | Practice explaining each project out loud; 2 mock interviews | Comfortable telling the story |
| 150 | Thu Apr 8 | Send the first 10 applications | Applications sent |

After Day 150: apply to 5–10 roles a week, keep shipping one small project every two weeks, and keep your WordPress income going until the new role lands.

## Staying on the frontier

Being on the edge means trying new capabilities the week they ship, not reading about them months later. Spend 15 minutes a day on this from Day 1, even during the React and backend phases.

- **Daily:** check the [Anthropic news page](https://www.anthropic.com/news) and the [Claude docs release notes](https://docs.claude.com) for new models and API features.
- **Weekly:** when something new ships, build a tiny demo with it within 7 days and post it. This alone sets you apart.
- **Weekly:** read one post from Anthropic's engineering blog and one research paper summary.
- **Use Claude Code for all your coding.** Fluency with agentic coding tools is now a core skill hiring managers look for.
- **Follow builders:** the Anthropic developer community, the MCP GitHub org, and AI engineers who post their work openly.
- **Contribute:** open-source MCP servers and agent tools welcome contributors. One merged PR is strong proof for an interview.

When a new release lands mid-plan, swap it into that week's build day rather than adding extra days.
