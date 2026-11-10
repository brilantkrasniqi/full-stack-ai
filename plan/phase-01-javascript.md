# Phase 1: JavaScript and tooling (Days 1–7)

Main resource: [javascript.info](https://javascript.info), the clearest free modern JavaScript tutorial.

### Day 1 · Tue Nov 10 · Setup and Git basics

- **Read:** [Pro Git](https://git-scm.com/book/en/v2) sections 1.3 "What is Git?" and 2.1–2.2 ("Getting a Repository", "Recording Changes"). The Learning method tab of this doc.
- **Do:** Install VS Code, Node LTS via [fnm](https://github.com/Schniz/fnm), [pnpm](https://pnpm.io) and Git. Set your Git name and email. Install Anki. Create the Claude "Tutor" project with the prompt from the Learning method tab.
- **Tasks:** Create the GitHub repo `fullstack-ai-150` with a `LEARNING_LOG.md` stating your goal. Commit and push it from the terminal. Make your first 5 Anki cards on Git.
- **Done when:** the repo is on GitHub and Anki has a deck.
- **Recall:** What's the difference between the working directory, the staging area and a commit? What does `git push` do that `git commit` doesn't?

### Day 2 · Wed Nov 11 · Modern syntax

- **Read:** javascript.info: "Variables", "Arrow functions, the basics", "Destructuring assignment", "Rest parameters and spread syntax", "Optional chaining '?.'".
- **Do:** Type every example by hand. Change each one twice and predict the output before running.
- **Tasks:** Do the end-of-chapter exercises for those chapters. Write `formatUser(user)` that uses destructuring with defaults and optional chaining to print a user's city, even when `address` is missing.
- **Done when:** exercises done and `formatUser` handles 4 different inputs.
- **Recall:** Why can you still change the contents of a `const` array? What's the difference between rest and spread? What does `a?.b?.c` return when `a` is `undefined`?

### Day 3 · Thu Nov 12 · Modules and array methods

- **Read:** javascript.info: "Modules, introduction", "Export and Import", "Array methods" (focus on `map`, `filter`, `reduce`, `find`, `some`).
- **Do:** Type and modify the examples. Rewrite 3 `for` loops from your WordPress projects using array methods.
- **Tasks:** Write an array of 20 workout objects. In `stats.js`, compute total volume (`reduce`), only leg days (`filter`), all exercise names (`map`), the first session over 60 minutes (`find`), and whether any session lacks a date (`some`). Keep data in `data.js` and import it.
- **Done when:** `node stats.js` prints all five results.
- **Recall:** What two arguments does `reduce` take? Why prefer `map` over a loop when building a new array? Named vs default export?

### Day 4 · Fri Nov 13 · Async JavaScript

- **Read:** javascript.info "Promises, async/await" chapter: Introduction: callbacks, Promise, Promises chaining, Error handling with promises, Promise API, Async/await. MDN [Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).
- **Do:** Make a promise that rejects and catch it three ways: `.catch`, `try/catch` with `await`, and `Promise.allSettled`.
- **Tasks:** Script that fetches 3 endpoints from a public API (such as [PokeAPI](https://pokeapi.co)) first in sequence, then in parallel with `Promise.all`, and logs both timings. Handle a network error and a non-200 status.
- **Done when:** the parallel version is clearly faster and errors print clean messages.
- **Recall:** Why doesn't `fetch` reject on a 404? `Promise.all` vs `Promise.allSettled`? What happens if you forget `await`?

### Day 5 · Sat Nov 14 · Node.js basics

- **Read:** [nodejs.org/en/learn](https://nodejs.org/en/learn): "Introduction to Node.js", "Differences between Node.js and the Browser", "How to read environment variables from Node.js", "Reading files with Node.js", "An introduction to the npm package manager".
- **Do:** `pnpm init` a project. Add a `start` script. Read a variable from a `.env` file using Node's `--env-file` flag.
- **Tasks:** Turn Day 3 into a CLI: `node stats.js workouts.json` reads any JSON file passed as an argument and prints a summary. Add a `.env` setting for the unit (kg or lb).
- **Done when:** the CLI works with two different JSON files.
- **Recall:** What lives in `package.json`? `dependencies` vs `devDependencies`? Why must `.env` never be committed?

### Day 6 · Sun Nov 15 · Git for real work

- **Read:** Do [Learn Git Branching](https://learngitbranching.js.org) (Main tab, levels 1–4). GitHub Docs: "About pull requests".
- **Do:** Branch, commit and merge in the visual tool until it feels natural.
- **Tasks:** On your repo: create a branch, make a change, open a pull request, merge it. Then create a merge conflict between two branches on purpose and resolve it. Add a `.gitignore` for `node_modules` and `.env`.
- **Done when:** one PR merged and one conflict resolved.
- **Recall:** Merge vs rebase in one sentence each? What causes a merge conflict and how do you fix one?

### Day 7 · Mon Nov 16 · Mini project + first mixed quiz

- **Read:** Vercel docs: "Getting started" (deploying a project from GitHub).
- **Do:** Run your first 30-minute Sunday mixed quiz.
- **Tasks:** Build **Workout Stats**, a vanilla JS page that loads your JSON (or a public API), renders cards, has filters and sorting, and looks excellent. This is where your CSS shines. Deploy it to Vercel from GitHub.
- **Done when:** the live URL is in your README.
- **Recall:** The quiz's 2 weakest topics become Monday's warm-up.
