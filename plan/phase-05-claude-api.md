# Phase 5: Claude API (Days 71–84)

Main resources: the [Claude docs](https://docs.claude.com) ("Build with Claude" and API reference sections), the [prompt engineering guide](https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview) and Anthropic's free [courses on GitHub](https://github.com/anthropics/courses) (API fundamentals, prompt engineering interactive tutorial).

**From today, Claude Code becomes your pair programmer.** Keep the daily loop: you still read first, recall daily and review every diff. Never commit code you can't explain.

### Day 71 · Tue Jan 19 · First API calls

- **Read:** Claude docs: "Get started" and the Messages API overview. Anthropic courses: API fundamentals, first lessons.
- **Do:** Create a Console account, set a monthly spend limit, store the API key in `.env`. Install the TypeScript SDK (`@anthropic-ai/sdk`).
- **Tasks:** Script that sends a message with a system prompt and logs the reply, `stop_reason` and input/output token usage.
- **Done when:** you can predict roughly what a call will cost.
- **Recall:** What's the role of the system prompt? What does `max_tokens` control? What does each `stop_reason` mean?

### Day 72 · Wed Jan 20 · Conversations

- **Read:** Messages API docs on multi-turn conversations and message roles.
- **Do:** Send a 3-turn conversation by hand in the messages array.
- **Tasks:** Terminal chat app that keeps history and prints token usage per turn.
- **Done when:** Claude remembers earlier turns and you can explain why.
- **Recall:** Does the API remember anything between calls? Why does cost grow as conversations get longer?

### Day 73 · Thu Jan 21 · Streaming into your UI

- **Read:** Claude docs: "Streaming Messages" (event types).
- **Do:** Log every raw stream event to understand their order.
- **Tasks:** Create Project C from your chat shell: a Next.js route handler streams Claude's reply into the UI.
- **Done when:** real Claude replies stream in your chat UI.
- **Recall:** Name the main stream event types. How do you handle an error halfway through a stream?

### Day 74 · Fri Jan 22 · Light day: prompt engineering

- **Read:** The [prompt engineering guide](https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview) overview and "Be clear and direct".
- **Tasks:** Do the first 3 chapters of the interactive prompt engineering tutorial.
- **Done when:** notes written.

### Day 75 · Sat Jan 23 · Rest day

- Rest. Anki only if you want the streak.

### Day 76 · Sun Jan 24 · Persist conversations

- **Read:** Your Drizzle notes from Phase 4.
- **Do:** Design tables for conversations and messages.
- **Tasks:** Save conversations in Postgres with auth, add a sidebar to switch and rename them, and auto-title new chats with a cheap Haiku call.
- **Done when:** reloading the page keeps all history per user.
- **Recall:** Why use a smaller model for titles? What should you store per message?

### Day 77 · Mon Jan 25 · Prompting in practice

- **Read:** Prompt guide: "Use examples (multishot prompting)", "Use XML tags", "Give Claude a role".
- **Do:** Sunday mixed quiz.
- **Tasks:** Write 3 versions of a system prompt for a "workout coach" mode. Run each on the same 5 user messages and compare the outputs in a table.
- **Done when:** you can explain why the best version wins.
- **Recall:** When do examples help most? Why do XML tags help Claude?

### Day 78 · Tue Jan 26 · Structured outputs

- **Read:** Claude docs on structured outputs and on tool use for JSON ("Tool use" overview).
- **Do:** Get Claude to return JSON matching a Zod schema; validate it.
- **Tasks:** Endpoint that turns free text ("did 3x10 squats at 80kg") into a validated workout object saved to the database.
- **Done when:** 20 messy inputs all parse or fail gracefully.
- **Recall:** Why still validate output from Claude? What do you do when validation fails?

### Day 79 · Wed Jan 27 · Vision and PDFs

- **Read:** Claude docs: "Vision" and "PDF support".
- **Do:** Send an image and a PDF in a message.
- **Tasks:** Upload a photo of a receipt or a workout whiteboard and extract structured data with a Zod schema.
- **Done when:** extraction works on 5 different images.
- **Recall:** How are images counted in tokens? What image issues hurt accuracy?

### Day 80 · Thu Jan 28 · Extended thinking

- **Read:** Claude docs: "Extended thinking".
- **Do:** Run one hard reasoning task with and without thinking.
- **Tasks:** Compare quality, latency and cost on 5 tasks. Write a rule for when your app should turn thinking on.
- **Done when:** your rule is written in the README.
- **Recall:** What does the thinking budget control? When is thinking a waste of money?

### Day 81 · Fri Jan 29 · Prompt caching

- **Read:** Claude docs: "Prompt caching".
- **Do:** Cache a long system prompt and read the cache fields in the usage response.
- **Tasks:** Add caching to Project C and measure cost per call before and after over 20 calls.
- **Done when:** you have numbers showing the saving.
- **Recall:** What must stay identical for a cache hit? How long does a cache entry live?

### Day 82 · Sat Jan 30 · Choosing models

- **Read:** Claude docs: models overview and "Choosing a model". Pricing page.
- **Do:** Run the same task on Haiku, Sonnet and Opus.
- **Tasks:** Build a comparison table on 10 tasks: quality (you grade 1–5), latency and cost. Pick a default model per feature in Project C.
- **Done when:** every feature has a justified model choice.
- **Recall:** When is Haiku the right choice? When is Opus worth the cost?

### Day 83 · Sun Jan 31 · Reliability and modes

- **Read:** Claude docs: "Errors" and "Rate limits".
- **Do:** Force a timeout and an invalid request, and handle both.
- **Tasks:** Add retries with exponential backoff, user-facing error messages and a mode switcher (coach, code reviewer, summarizer).
- **Done when:** the app survives every failure you can trigger.
- **Recall:** Which errors should you retry and which not? What is exponential backoff?

### Day 84 · Mon Feb 1 · Ship Project C

- **Do:** Sunday mixed quiz, now including Claude API topics.
- **Tasks:** Deploy Project C with a per-user usage limit. Write a short post on what surprised you about building with Claude.
- **Done when:** live URL + post.
- **Recall:** Explain streaming, caching and structured outputs to your Tutor.
