# Day 7 cheat-sheet: Workout Stats page + Vercel

Use this as a lookup while you build. You don't need to read it first.

## The project in one picture

```
phase-1/workout-stats/
  index.html     the page (cards go inside it)
  style.css      your CSS
  script.js      loads the JSON, builds cards, filters, sorts
  workouts.json  copy of your data (the page loads this)
```

Put the whole page in its own folder, so Vercel can deploy just that folder.

## 1. Loading JSON in the browser

```js
const response = await fetch('workouts.json')
if (!response.ok) throw new Error(`Bad response: ${response.status}`)
const sessions = await response.json()   // already an array, no JSON.parse needed
```

- Same `fetch` and `response.ok` as Day 4. `.json()` parses for you.
- In HTML: `<script type="module" src="script.js"></script>` (lets you use top-level `await`).
- **Opening** `index.html` **by double-clicking will NOT work** for `fetch`. Browsers block `fetch` on `file://` addresses. Serve the folder with a tiny local server instead (run it yourself in the folder):
  - `pnpm dlx serve` (then open the address it prints). `dlx` = download and run once, pnpm's version of `npx`. Don't use `npx` here: this project's `package.json` says pnpm, so npm refuses with `EBADDEVENGINES`. Or
  - the "Live Server" VS Code extension.

## 2. Showing cards on the page (the DOM)

```html
<main id="cards"></main>
```

```js
const container = document.querySelector('#cards')

container.innerHTML = sessions.map(s => `
  <article class="card">
    <h2>${s.bodyPart}</h2>
    <p>${s.date ?? 'No date'}</p>
    <p>${s.volume} kg</p>
  </article>
`).join('')
```

- `querySelector('#id')` finds one element (`#` = id, `.` = class).
- `map` builds one string per session; `.join('')` glues them (without it you get commas).
- `?? 'No date'` = "if it's `null` or `undefined`, use this instead". (Your data has sessions with a missing or `null` date.)
- `innerHTML` is fine for your own data. Never put text typed by a stranger into `innerHTML`; use `textContent` for that.

## 3. Buttons and filters

```js
document.querySelector('#legs-btn').addEventListener('click', () => {
  render(sessions.filter(s => s.bodyPart === 'legs'))
})
```

Tip: write one `render(list)` function that draws any list of sessions. Every filter or sort button just calls `render(...)` with a different list.

## 4. Sorting

```js
[...sessions].sort((a, b) => a.volume - b.volume)   // small to big
[...sessions].sort((a, b) => b.volume - a.volume)   // big to small
```

- `.sort()` **changes the original array**. Copy first with `[...sessions]`.
- The callback returns a negative number, 0, or a positive number: negative means `a` goes first.
- For text use `a.bodyPart.localeCompare(b.bodyPart)`.
- Dates like `"11/02/2026"` are text and won't sort correctly as text. Turn them into dates first: `new Date(a.date) - new Date(b.date)`. Handle missing dates before sorting.

## 5. Deploying to Vercel (from GitHub)

1. Make sure the folder is committed and pushed to GitHub (via a branch + pull request, like Day 6).
2. Go to vercel.com and sign in with GitHub.
3. **Add New > Project**, then import your repo.
4. Set **Root Directory** to the page's folder (`phase-1/workout-stats`).
5. Framework preset: **Other** (it's plain HTML, no build step). Click **Deploy**.
6. You get a live URL like `something.vercel.app`.

- Every push to `main` redeploys automatically. A pull request gets its own preview URL.
- The folder Vercel serves must contain `index.html` at its top level, and `workouts.json` next to it.
- Put the live URL in the repo's `README.md` (that's the "done when").

## 6. The two things that will go wrong

- **Blank page, console error "Failed to fetch" / CORS:** you opened the file by double-click. Use a local server (section 1).
- **Works locally, 404 on Vercel for the JSON:** the file isn't in the deployed folder, or the Root Directory is wrong.
- Open the browser DevTools (F12): **Console** tab for errors, **Network** tab to see if `workouts.json` loaded (status 200).
