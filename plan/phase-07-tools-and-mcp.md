# Phase 7: Tool use and MCP (Days 99–112)

Main resources: Claude docs "Tool use" section, [modelcontextprotocol.io](https://modelcontextprotocol.io) and Anthropic's engineering post [Writing effective tools for agents](https://www.anthropic.com/engineering/writing-tools-for-agents).

### Day 99 · Tue Feb 16 · Tool use basics

- **Read:** Claude docs: tool use overview and "How to implement tool use".
- **Do:** Before reading, draw how you think tool calling works. Correct the drawing after.
- **Tasks:** Give Claude a `get_workout_history` tool backed by your Project B database. Handle `tool_use` and return `tool_result`.
- **Done when:** Claude answers "what did I train last week?" from real data.
- **Recall:** Who actually runs the tool, Claude or your code? What makes a good tool description?

### Day 100 · Wed Feb 17 · The agent loop by hand

- **Read:** Re-read the tool use docs section on handling multiple turns.
- **Do:** Write the loop on paper first: call → tool requests → run → results → call again.
- **Tasks:** Implement the loop yourself (no framework) with a max-steps limit and logs of every step.
- **Done when:** Claude chains 3 tool calls to answer one question.
- **Recall:** How does the loop know when to stop? Why do you need a step limit?

### Day 101 · Thu Feb 18 · Multiple tools and errors

- **Read:** Claude docs on parallel tool use and returning tool errors.
- **Do:** Make one tool fail and return the error to Claude with `is_error`.
- **Tasks:** 4 tools working together (history, log workout, get exercise info, calculate volume). Claude should recover from a tool error.
- **Done when:** a failing tool doesn't crash the conversation.
- **Recall:** Why return errors to Claude instead of throwing? When does Claude call tools in parallel?

### Day 102 · Fri Feb 19 · Server tools

- **Read:** Claude docs: web search tool and code execution tool.
- **Do:** Enable web search on a request and inspect the results and citations.
- **Tasks:** Write a comparison: when to use Anthropic-run server tools vs your own client tools.
- **Done when:** rule written and one feature uses a server tool.
- **Recall:** Who runs a server tool? What are the cost and privacy differences?

### Day 103 · Sat Feb 20 · Tool-call UI

- **Read:** [Writing effective tools for agents](https://www.anthropic.com/engineering/writing-tools-for-agents).
- **Do:** Rewrite your tool descriptions using the post's advice.
- **Tasks:** Show each tool call in the chat UI as a collapsible card with inputs, status and result.
- **Done when:** users can see exactly what Claude is doing.
- **Recall:** Name 3 tips from the post. Why does showing tool calls build trust?

### Day 104 · Sun Feb 21 · MCP concepts

- **Read:** modelcontextprotocol.io: introduction and architecture/concepts (hosts, clients, servers; tools, resources, prompts; transports).
- **Do:** Draw the MCP architecture from memory, then check it.
- **Tasks:** Install 2 existing MCP servers in Claude Code or the Claude desktop app and use them.
- **Done when:** you can explain MCP to your Tutor without notes.
- **Recall:** Tools vs resources vs prompts? Why is MCP useful compared with custom integrations?

### Day 105 · Mon Feb 22 · Build an MCP server

- **Read:** modelcontextprotocol.io: "Build an MCP server" quickstart (TypeScript).
- **Do:** Sunday mixed quiz. Then follow the quickstart exactly.
- **Tasks:** Build a local MCP server exposing your Project B workout data as 3 tools. Test it with the MCP Inspector.
- **Done when:** all 3 tools work in the Inspector.
- **Recall:** What does the stdio transport mean? How does a client discover tools?

### Day 106 · Tue Feb 23 · Connect it to Claude

- **Read:** Claude Code docs: "MCP". Claude desktop app docs for local MCP servers.
- **Do:** Add your server to Claude Code and to the desktop app.
- **Tasks:** Use Claude to plan next week's training from your real logged data through your server.
- **Done when:** Claude uses your tools in both apps.
- **Recall:** What config tells Claude Code where your server is? What happens if a tool's description is vague?

### Day 107 · Wed Feb 24 · Make it genuinely useful

- **Read:** Browse the official MCP servers repository for patterns.
- **Do:** Pick something you use daily (GitHub, Notion, your own API).
- **Tasks:** Grow **Project E** to 5 real tools with clear names, descriptions and Zod-validated inputs.
- **Done when:** you'd use it yourself every week.
- **Recall:** How many tools is too many? How do you design tool inputs so Claude uses them correctly?

### Day 108 · Thu Feb 25 · Remote MCP

- **Read:** MCP spec: transports (Streamable HTTP) and authorization.
- **Do:** Run your server over HTTP locally.
- **Tasks:** Deploy it as a remote server with authentication, and add it as a custom connector in Claude.
- **Done when:** it works from claude.ai as a connector.
- **Recall:** Why do remote servers need OAuth? stdio vs HTTP transport?

### Day 109 · Fri Feb 26 · MCP from your own app

- **Read:** Claude docs: "MCP connector".
- **Do:** Call the API with your remote server attached.
- **Tasks:** Project C's chat can now use your MCP server's tools.
- **Done when:** your own app talks to your own MCP server.
- **Recall:** When would you use the MCP connector vs defining tools directly?

### Day 110 · Sat Feb 27 · Security

- **Read:** MCP spec security best practices. Search for "prompt injection via tool results" write-ups.
- **Do:** Put a malicious instruction inside data your tool returns and see what happens.
- **Tasks:** Add least-privilege scopes, confirmation for write actions, and input validation everywhere.
- **Done when:** the injection test can't trigger a write without confirmation.
- **Recall:** What is prompt injection? Why should write tools need confirmation?

### Day 111 · Sun Feb 28 · Publish

- **Read:** npm docs on publishing a package.
- **Do:** Write tests for each tool.
- **Tasks:** Write README docs with setup instructions, publish to npm and GitHub, share it in an MCP community.
- **Done when:** someone else can install it in 2 minutes.
- **Recall:** What makes an open-source tool easy to adopt?

### Day 112 · Mon Mar 1 · Write about it

- **Do:** Sunday mixed quiz.
- **Tasks:** Publish "Building my first MCP server" with code snippets and lessons.
- **Done when:** published and shared.
- **Recall:** Explain tool use and MCP end to end to your Tutor.
