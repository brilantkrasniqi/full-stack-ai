# Learning log

**Goal:** become a full-stack TypeScript engineer who ships Claude-powered products (150-day plan, see `plan/`). Start: Tue Nov 10, 2026.

## Day 1 · Tue Nov 10, 2026 · Setup and Git basics

Git stores a project's whole history in the hidden `.git` folder, so deleting it keeps your files but erases the history. Files move from the working directory to the staging area with `git add` and become a commit with `git commit`, which lets you commit only the changes that belong together. A commit stays on your machine until `git push` sends it to a remote repo such as GitHub (`origin`), on a branch like `main`.

**Topics covered (for quizzes):** `git init` and `.git`, untracked vs modified files, git ignores empty folders, working directory / staging area / commit / push, remote repo vs branch, `origin`, exiting Vim for commit messages.

**Weak spots to revisit:** vocabulary. I mixed up *untracked* (never seen by git) and *modified* (tracked, changed since last commit), and *remote repo* vs *branch*. Still to confirm: what `origin` actually is.

## Day 2 · Wed Nov 11, 2026 (done Sun Nov 15) · Modern syntax

`const` blocks reassignment but not mutation, `let`/`const` are block scoped, and a missing variable is a `ReferenceError` while a missing object key is just `undefined`. Destructuring (`const { a, b } = obj`) is shorthand for `const a = obj.a`: objects match by key name, arrays by position, `key: newName` renames, and a default (`= 'x'`) only applies to `undefined`, never `null`. Rest (`...others`) collects leftovers into the same kind of container you pull from, spread unpacks, and `?.` only guards the step directly to its left.

**Topics covered (for quizzes):** `var` vs `let` vs `const`, `undefined` vs `null` vs `ReferenceError`, arrow functions and the `() => ({ ... })` object gotcha, object and array destructuring, defaults and `null`, renaming (`b: x`), rest vs spread, optional chaining, a `formatUser` function with nested defaults.

**Weak spots to revisit:** the rename pattern (`{ b: x }`: left side is the key to read, right side is the new variable), mixing up the names *rest* and *spread*, declare vs assign vs initialize wording, and where a default must go in nested data (on `city`, not on `address`). Needed `SHOW ME` for the two-level `formatUser`. End-of-chapter javascript.info exercises are not done yet.

## Day 3 · Thu Nov 12, 2026 (done Tue Nov 17) · Modules and array methods

So far: `map` returns a new array and the original stays untouched, and it builds each item from what the callback **returns** (braces without `return` give `undefined` items). `filter` keeps the items whose callback returns true and returns an array, `find` returns only the first match (an item, not an array), `some` returns true/false, and `reduce` carries an accumulator through the array and returns one value (cheat-sheet in `notes/reduce.md`). Modules: without `export` a file's things stay private (error "does not provide an export named ..."), named exports are imported in braces with the exact name, and a default export is imported without braces under any name you choose. Built the workout task: `data.js` default-exports an array of session objects and `stats.js` prints total volume (`reduce`), leg days (`filter`), all exercise names (`flatMap`, because `map` gives nested arrays), the first session over 60 minutes (`find`), and whether any session lacks a date (`some`, checking both `undefined` and `null`). Plain Node needs the `.js` extension in import paths.

**Weak spots to revisit:** `reduce` was new to me (explain `sum` and `n` per call and the start value), the arrow-function `return` rule inside `map`, where `n.volume` goes in a `reduce` callback (inside the function, start value `0` as the second argument), and `null` vs `undefined` in checks (`=== undefined` misses `null`). Misleading variable names (`days` for one session, `n` for an object) slowed me down.

## Day 4 · Fri Nov 13, 2026 (done Fri Nov 20) · Async JavaScript

JavaScript runs one thing at a time, so slow work (`setTimeout`, `fetch`) is handed off and its callback runs only after the current code finishes, which is why even a 0 ms timer prints last. A promise is `pending`, then `fulfilled` (has a value) or `rejected` (has an error); `await` pauses only its own `async` function and unwraps the value, and forgetting it leaves you with `Promise { <pending> }`. `fetch` does not reject on a 404, so you check `response.ok` and `throw new Error(...)` yourself, and to fetch several things at once you start all the promises first and wait once: `Promise.all` rejects if any one fails, while `Promise.allSettled` reports `{ status, value | reason }` for each, so one bad name (`goku`) doesn't hide the good ones (parallel about 90-100 ms vs sequential about 130 ms for 4 Pokémon).

**Topics covered (for quizzes):** event loop and `setTimeout` order, promise states, `.then` / `.catch`, `async` / `await`, `await` on a non-promise, forgetting `await`, `throw` and `new Error(message)`, `fetch` + `response.ok` + `response.json()`, `try/catch` with `await`, unhandled rejections, `Promise.all` vs `Promise.allSettled`, `forEach` vs `for...of` with `await`, parallel vs sequential timing with `Date.now()`, `flatMap` (`[]` to skip an item), `map` never skips items.

**Weak spots to revisit:** async was brand new, so the whole topic needs repetition. Specific slips: `throw` must sit inside the `try` to reach the `catch`; `new Error('msg', 404)` ignores the second argument; `forEach` doesn't wait, so it isn't sequential; `await names.map(...)` awaits an array, not the promises; a wrapper `async name => await f(name)` inside `map` adds nothing; `Date.now()` is a timestamp, not a duration; `map` with a bare `return;` leaves `undefined`, it doesn't skip; printing `reason` shows the whole stack, `reason.message` gives the text.

## Day 5 · Sat Nov 14, 2026 (done Sun Nov 22) · Node.js basics

Node is JavaScript that runs on my computer instead of in a browser, and the global `process` object describes the running program: `process.argv[2]` is the first argument I type (and is `undefined` if I typed nothing), `process.env` holds environment variables as strings, and `process.exit(1)` stops the script with a failure code (`0` means success, anything else means failure). `package.json` holds the scripts and dependencies (I choose `dependencies` vs `devDependencies` with the `-D` flag), and a `.env` file does nothing until it is loaded with `node --env-file=.env`; it must be in `.gitignore` because it can hold secrets. I built a CLI where `node stats.js workouts.json` reads any JSON file with `readFile` + `JSON.parse` and prints the Day 3 stats with a `kg` fallback unit, shows a usage line if the file name is missing, and prints one clean message with `.catch` + `process.exit(1)` if the file doesn't exist.

**Topics covered (for quizzes):** Node vs browser, running a script and flags vs arguments, `process.argv`, `process.env` (always strings), `process.exit` and exit codes, `pnpm` vs `npm`, `package.json` (scripts, dependencies, `-D`, `"type": "module"`), lock files and `.yaml`, `.env` and `--env-file`, `.gitignore`, `readFile` from `node:fs/promises`, `JSON.parse`, JSON syntax rules, `ENOENT`, module-level constants.

**Weak spots to revisit:** everything here was brand new and the many new names (`process`, `readFile`, exit codes) overwhelmed me at first. Specific slips: a missing argument is `undefined`, not `''`; hardcoding the file name inside the `start` script defeats the CLI; `x !== undefined || x !== null` is always true (it must be `&&`, flip both `===`/`!==` and `||`/`&&` together); a `.catch` that only logs returns `undefined`, so the script keeps running unless I call `process.exit(1)`; I skipped `null` in the missing-date check at first; and I missed that the task asked for the flat list of exercise names.

## Day 6 · Sun Nov 15, 2026 (done Sun Nov 22) · Git for real work

A branch is not a copy of `main`, it is a movable name that points at a commit, so making one is instant; `git branch x` only creates it, while `git switch -c x` (same as `git checkout -b x`) creates it and moves onto it. `merge` keeps the true history and adds a merge commit with two parents, while `rebase` replays my commits as new commits on top of another branch for a straight line, which is why I never rebase commits I have already shared (it needs a force push and breaks my teammates' history). I did my first pull request on my own repo (branch, `git add` then `git commit`, `git push -u origin <branch>`, open the PR on GitHub, merge, `git pull`) and skipped the manual conflict exercise because I resolve conflicts in the IDE every day.

**Topics covered (for quizzes):** why not to commit straight to `main`, branch as a pointer, `git branch` vs `git switch -c` / `checkout -b`, `git switch -`, merge vs rebase and the rebase warning, `git log --oneline --graph`, the add / commit / push flow, `git push -u`, pull requests, merge commits, what causes a conflict and how to resolve it, `.gitignore`.

**Weak spots to revisit:** I thought a branch was a "snapshot" of `main` (it is a pointer); I ran `git commit` without `git add` so nothing was staged; I typed `originadd-readme` without a space; I said conflicts come from editing the same *file*, but it is the same *lines*. I skipped the hands-on conflict in the terminal, so the markers (`<<<<<<<`, `=======`, `>>>>>>>`) and `git merge --continue` are still untested, and I did not read the GitHub "About pull requests" page.
