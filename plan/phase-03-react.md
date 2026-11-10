# Phase 3: React (Days 22–42)

Main resource: [react.dev/learn](https://react.dev/learn), read in order. It is the best React learning material available. Every page has challenges at the bottom: always do them.

### Day 22 · Tue Dec 1 · Components and JSX

- **Read:** react.dev: "Your First Component", "Importing and Exporting Components", "Writing Markup with JSX", "JavaScript in JSX with Curly Braces", "Using TypeScript".
- **Do:** `pnpm create vite` with the `react-ts` template. Type the examples, then do the page challenges.
- **Tasks:** Rebuild one section of a WordPress site you made as 5 React components.
- **Done when:** it renders and matches the original design.
- **Recall:** Why must component names start with a capital letter? What does JSX compile to? Why one root element?

### Day 23 · Wed Dec 2 · Props

- **Read:** "Passing Props to a Component", "Keeping Components Pure".
- **Do:** Type props with a `type Props = {...}`. Do the page challenges.
- **Tasks:** Build a typed `WorkoutCard` that takes a workout and an optional `highlight` prop; render 5 with different props.
- **Done when:** a wrong prop is a TypeScript error.
- **Recall:** Why must components be pure? Can a component change its own props? What is `children`?

### Day 24 · Thu Dec 3 · Lists and conditional rendering

- **Read:** "Conditional Rendering", "Rendering Lists".
- **Do:** Break the `key` prop on purpose and read the console warning.
- **Tasks:** Render your 20 workouts with cards, an empty state, and a "PR" badge shown only for personal records.
- **Done when:** no key warnings, empty state works.
- **Recall:** Why do lists need keys? Why is the array index a bad key when items reorder? `&&` vs ternary pitfalls?

### Day 25 · Fri Dec 4 · Events and state

- **Read:** "Responding to Events", "State: A Component's Memory", "Render and Commit", "State as a Snapshot".
- **Do:** Predict what a counter shows after `setCount(count + 1)` three times in one click, then test it.
- **Tasks:** Build a counter, a toggle and a tabs component from scratch.
- **Done when:** all three work without looking at the docs.
- **Recall:** Why doesn't a normal variable work as state? What does "state as a snapshot" mean?

### Day 26 · Sat Dec 5 · Updating state correctly

- **Read:** "Queueing a Series of State Updates", "Updating Objects in State", "Updating Arrays in State".
- **Do:** Mutate state on purpose, see the bug, then fix it with spread.
- **Tasks:** Workout list where you can add, remove, edit a name and toggle "done", all without mutation.
- **Done when:** every action updates the screen correctly.
- **Recall:** Why is `setX(x => x + 1)` sometimes needed? Why must you never mutate state?

### Day 27 · Sun Dec 6 · Tic-tac-toe, then your own app

- **Read:** [Tutorial: Tic-Tac-Toe](https://react.dev/learn/tutorial-tic-tac-toe).
- **Do:** Complete the tutorial by typing it, including time travel.
- **Tasks:** From a blank project, build a habit tracker: add habits, check off days, show a streak count.
- **Done when:** the habit tracker works with no tutorial open.
- **Recall:** Why did the tutorial lift state up to `Game`? Why store history as an array of copies?

### Day 28 · Mon Dec 7 · Styling React

- **Read:** [Tailwind CSS installation with Vite](https://tailwindcss.com/docs/installation) and the "Styling with utility classes" page. Vite docs on CSS Modules.
- **Do:** Sunday mixed quiz.
- **Tasks:** Style the habit tracker beautifully with Tailwind, including dark mode and a mobile layout. Style one component with CSS Modules to compare.
- **Done when:** you'd put it in your portfolio.
- **Recall:** Tailwind vs CSS Modules: when would you choose each?

### Day 29 · Tue Dec 8 · Forms and state structure

- **Read:** "Reacting to Input with State", "Choosing the State Structure".
- **Do:** List every visual state of a signup form before writing code, as the page teaches.
- **Tasks:** Build a controlled signup form with validation messages, a disabled submit button and a success state.
- **Done when:** every state on your list is reachable.
- **Recall:** What is redundant state and why avoid it? Controlled vs uncontrolled inputs?

### Day 30 · Wed Dec 9 · Sharing state

- **Read:** "Sharing State Between Components", "Preserving and Resetting State", "Thinking in React".
- **Do:** Follow "Thinking in React" step by step on paper for a new UI.
- **Tasks:** Build a filterable workout table (search box + category filter + table) using the five steps.
- **Done when:** filters work and state lives in the right component.
- **Recall:** How do you decide which component owns a piece of state? When does React reset state?

### Day 31 · Thu Dec 10 · Effects, and when not to use them

- **Read:** "Synchronizing with Effects", "You Might Not Need an Effect".
- **Do:** Write an effect with a missing dependency and read the lint warning.
- **Tasks:** Add a document-title effect and a window-resize listener with cleanup. Then remove 2 effects from your earlier code that you didn't need.
- **Done when:** no unnecessary effects remain.
- **Recall:** What should effects be used for? Why does cleanup matter? Why do effects run twice in development?

### Day 32 · Fri Dec 11 · Data fetching with TanStack Query

- **Read:** [TanStack Query React overview](https://tanstack.com/query/latest/docs/framework/react/overview), "Quick Start", "Queries", "Query Keys".
- **Do:** Fetch a public API with `useQuery`; show loading and error states.
- **Tasks:** Exercise browser using a free API (such as [wger](https://wger.de/en/software/api)) with search, loading skeletons and error retry.
- **Done when:** switching back to a search is instant because of caching.
- **Recall:** What problems does TanStack Query solve that `useEffect` + `fetch` doesn't? What is a query key?

### Day 33 · Sat Dec 12 · Reducers and context

- **Read:** "Extracting State Logic into a Reducer", "Passing Data Deeply with Context", "Scaling Up with Reducer and Context".
- **Do:** Convert Day 26's state into a reducer with typed actions.
- **Tasks:** Add a theme (light/dark) via context and a workout list managed by `useReducer` + context.
- **Done when:** no prop drilling for theme or workouts.
- **Recall:** When is a reducer better than several `useState` calls? What's the downside of putting everything in context?

### Day 34 · Sun Dec 13 · Refs, custom hooks, routing

- **Read:** "Referencing Values with Refs", "Reusing Logic with Custom Hooks", [React Router](https://reactrouter.com) getting started.
- **Do:** Extract a `useLocalStorage` hook and a `useDebounce` hook.
- **Tasks:** Start **Project A**: a recipe or exercise search app with routes for list, detail and favorites, TanStack Query and your custom hooks.
- **Done when:** core features and routes work.
- **Recall:** Refs vs state? What makes something a hook? Why can't hooks be called inside `if`?

### Day 35 · Mon Dec 14 · Components and accessibility

- **Read:** [shadcn/ui](https://ui.shadcn.com/docs) introduction and installation. MDN "Accessibility" basics (semantic HTML, labels, focus).
- **Do:** Sunday mixed quiz.
- **Tasks:** Add shadcn/ui components to Project A and restyle them to your own design. Check keyboard navigation and labels.
- **Done when:** the whole app is usable with only a keyboard.
- **Recall:** Why does semantic HTML matter for accessibility? What does shadcn/ui do differently from a normal component library?

### Day 36 · Tue Dec 15 · Testing React

- **Read:** [Vitest guide](https://vitest.dev/guide/), [React Testing Library intro](https://testing-library.com/docs/react-testing-library/intro) and "Guiding Principles".
- **Do:** Write a test that fails, then make it pass.
- **Tasks:** Write 5 tests for Project A: rendering, a click, a form, loading state, empty state.
- **Done when:** `pnpm test` passes.
- **Recall:** Why test behavior instead of implementation? `getBy` vs `queryBy` vs `findBy`?

### Day 37 · Wed Dec 16 · Forms at scale

- **Read:** [React Hook Form get started](https://react-hook-form.com/get-started) and its Zod resolver section.
- **Do:** Rebuild Day 29's form with React Hook Form + Zod.
- **Tasks:** Add a multi-field "create recipe/workout" form to Project A with validation from one Zod schema.
- **Done when:** the schema drives both the types and the error messages.
- **Recall:** Why is reusing one Zod schema powerful? What does React Hook Form avoid re-rendering?

### Day 38 · Thu Dec 17 · Performance

- **Read:** React docs reference for [`memo`](https://react.dev/reference/react/memo), `useMemo`, `useCallback`. React DevTools Profiler intro.
- **Do:** Profile Project A and find the most frequent re-render.
- **Tasks:** Fix one real performance issue and measure before and after.
- **Done when:** you can show the profiler difference.
- **Recall:** What triggers a re-render? Why shouldn't you wrap everything in `memo`?

### Day 39 · Fri Dec 18 · Streaming text in the UI

- **Read:** MDN "Using readable streams" and "Server-sent events" overview.
- **Do:** Simulate a stream with a timer that appends words to state.
- **Tasks:** Build a component that renders text arriving word by word, with a blinking cursor and a stop button.
- **Done when:** it feels like an AI typing.
- **Recall:** Why append to state with an updater function during streaming? How would you cancel a stream?

### Day 40 · Sat Dec 19 · Chat UI shell

- **Read:** Study 2–3 chat interfaces you like (Claude, Linear, Slack). Write down 10 design details you notice.
- **Do:** Sketch the layout before coding.
- **Tasks:** Build a chat UI: message list, input box, send on Enter, mock assistant replies that stream in using Day 39.
- **Done when:** a full fake conversation works.
- **Recall:** How do you keep the newest message visible? Where does the conversation state live?

### Day 41 · Sun Dec 20 · Polish the chat UI

- **Read:** `react-markdown` README.
- **Do:** Render markdown and code blocks in assistant messages.
- **Tasks:** Add auto-scroll that pauses when the user scrolls up, a stop button, copy buttons on code blocks, and a great mobile layout.
- **Done when:** it looks production-ready on phone and desktop.
- **Recall:** What accessibility issues does a chat UI have? How did you solve auto-scroll?

### Day 42 · Mon Dec 21 · Ship Project A

- **Read:** Vercel docs for deploying a Vite app.
- **Do:** Sunday mixed quiz covering Phases 1–3.
- **Tasks:** Deploy Project A and the chat shell. Write READMEs with screenshots and what you learned.
- **Done when:** both are live and linked from your repo.
- **Recall:** Explain state, effects and keys to your Tutor and get a rating for each.
