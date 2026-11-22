# Node.js basics for beginners

Everything you need for Day 5, explained from zero. Keep this open while you code.

## 1. What is Node?
- JavaScript normally runs inside a browser tab. **Node is JavaScript that runs on your computer**, outside the browser.
- Same language (`const`, `map`, `async`, `await` all work). The difference is the extras:
  - Browser extras: `window`, `document`, `alert` (they work with a web page).
  - Node extras: `process`, files (`fs`), folders, command-line arguments, environment variables.
- Backend servers run on Node. Command-line tools (like the one you're building) do too.
- You run a file with: `node file.js`

## 2. The terminal "sentence"
```
node --env-file=.env stats.js workouts.json
 |        |             |          |
 |        |             |          +-- an ARGUMENT for your script
 |        |             +-- the script to run
 |        +-- a FLAG for node (settings for node itself, before the script)
 +-- the program
```
- Flags for `node` go **before** the script name.
- Arguments for your script go **after** the script name.
- `pnpm run start workouts.json` runs the `start` line from `package.json` and adds `workouts.json` at the end.

## 3. `process` = info about the program that is running right now
`process` is a **global**: it exists in every Node file and you don't import it.

| thing | what it is | example |
|---|---|---|
| `process.argv` | array of the words you typed | `['node.exe path', 'stats.js path', 'workouts.json']` |
| `process.argv[2]` | the first argument YOU typed (positions 0 and 1 are added by Node) | `'workouts.json'`, or `undefined` if you typed nothing |
| `process.env` | object of environment variables (settings) | `process.env.UNIT` gives `'kg'` |
| `process.exit(code)` | stop the program right now | `process.exit(1)` |
| `process.cwd()` | the folder you are standing in | `'C:\\...\\phase-1'` |

Rules to remember:
- A position that doesn't exist in an array gives `undefined` (not `''`).
- Everything in `process.env` is a **string**. `PORT=3000` gives `'3000'`. `DEBUG=false` gives `'false'`, which is **truthy**.

## 4. Exit codes: why `process.exit(1)` takes a number
- When a program ends, it tells the operating system whether it worked. It can't send a sentence, so it sends **a number**: the exit code.
- **`0` = success. Anything not 0 = failure.** `1` is the usual "something went wrong". You can use 2, 3, ... for different problems, but 1 is fine for now.
- Other tools read this number. That's how `pnpm` printed `Command failed with exit code 1`, and how automatic checks (CI) know a script failed.
- No `process.exit` call: Node ends with `0` when the script finishes normally, and `1` if it crashed with an error.
- See the last exit code in PowerShell: `node stats.js; echo $LASTEXITCODE`

```js
if (process.argv[2] === undefined) {
  console.log('Usage: node stats.js <file.json>')
  process.exit(1)   // stop here, tell the system "failed"
}
```
Tip: `console.error('...')` is the same as `console.log` but for error messages (it goes to a separate output channel).

## 5. Reading and writing files
Node's file tools live in the `fs` (file system) module. The `/promises` version works with `await`.
```js
import { readFile, writeFile } from 'node:fs/promises'

const text = await readFile('workouts.json', 'utf-8')  // gives a STRING
await writeFile('out.txt', 'hello', 'utf-8')           // creates or overwrites a file
```
- `'node:fs/promises'`: the `node:` prefix means "built into Node, not a package you installed".
- `'utf-8'` says "read this as normal text". Without it you get raw bytes (a Buffer).
- Relative paths like `'workouts.json'` are relative to the folder you run the command from, not the folder of the script.
- Both are async (they return promises), so you need `await`.

## 6. JSON: text that looks like JavaScript
JSON is a text format for data. A file's contents are always a string, so you convert:
```js
const data = JSON.parse(text)        // string -> real array/object
const text2 = JSON.stringify(data)   // real array/object -> string
```
JSON rules (stricter than JavaScript):
- keys in "double quotes", strings in "double quotes"
- no trailing comma, no comments, no `export default`
- the file holds exactly ONE top-level value: an object `{}`, an array `[]`, a string, a number, `true`/`false` or `null`
- `JSON.parse` of broken JSON throws a `SyntaxError`

## 7. Errors you will meet today
| message | meaning | usual cause |
|---|---|---|
| `ENOENT: no such file or directory` | file not found | typo in name (`.js` vs `.json`) or wrong folder |
| `ERR_INVALID_ARG_TYPE ... Received undefined` | a function got `undefined` | you forgot an argument (`process.argv[2]` was missing) |
| `SyntaxError: Unexpected token ... in JSON` | the text isn't valid JSON | trailing comma, single quotes, extra content |
| `Cannot find module` / `does not provide an export named` | wrong import | wrong path, missing `.js`, or the file has no such export |
| `X is not defined` (`ReferenceError`) | variable doesn't exist | typo or missing `import` |

How to read an error: read the **first line** (what went wrong), then find the first line that mentions **your own file** (`stats.js:3:14` = line 3, column 14).

## 8. package.json and pnpm
`package.json` is the project's ID card. It lists:
- `scripts`: shortcuts. `"start": "node stats.js"` is run with `pnpm run start` (or `pnpm start`).
- `dependencies`: packages the app needs to run. Add with `pnpm add <pkg>`.
- `devDependencies`: packages only needed while developing/testing. Add with `pnpm add -D <pkg>`. YOU choose with the `-D` flag; the tool doesn't guess.
- `"type": "module"`: your `.js` files use `import`/`export`.

Other files:
- `node_modules/`: the downloaded packages. Big. Never commit it. `pnpm install` rebuilds it.
- `pnpm-lock.yaml`: the exact versions installed. DO commit it. Don't edit it by hand.
- `.yaml` is a config format like JSON, written with indentation instead of braces.

pnpm vs npm: same packages, same `package.json`, almost the same commands. pnpm stores each package once on your computer and links to it, so it is faster and uses less disk.

## 9. .env and secrets
- `.env` is a text file with `KEY=value` lines. It does nothing by itself.
- `node --env-file=.env script.js` loads those lines into `process.env` before your script runs.
- Quotes around the value are optional (`UNIT=kg` and `UNIT="kg"` are the same).
- Put `.env` in the same folder as that project's `package.json`.
- **Never commit `.env`** (it often holds secrets like API keys). Put `.env` in `.gitignore`, and optionally commit a `.env.example` with fake values to show which keys exist.

## 10. Where to read more (optional)
- https://nodejs.org/en/learn : "Introduction to Node.js", "How to read environment variables", "Reading files with Node.js", "Run Node.js scripts from the command line"
- https://nodejs.org/api/process.html : everything on `process` (reference, not for reading top to bottom)
