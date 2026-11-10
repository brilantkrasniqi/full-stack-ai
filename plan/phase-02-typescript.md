# Phase 2: TypeScript (Days 8–21)

Main resources: the [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html), [Total TypeScript's free Beginner's tutorial](https://www.totaltypescript.com/tutorials/beginners-typescript) and [Zod](https://zod.dev).

### Day 8 · Tue Nov 17 · Why TypeScript, first strict project

- **Read:** Handbook: "The Basics" and the first half of "Everyday Types" (primitives, arrays, `any`, annotations, functions, object types).
- **Do:** `pnpm add -D typescript`, run `npx tsc --init`, keep `strict: true`. Create 5 type errors on purpose and read each message slowly.
- **Tasks:** Convert Day 3's `data.js` to `data.ts` with a `Workout` type. Fix every error without using `any`.
- **Done when:** `tsc` compiles with zero errors.
- **Recall:** What does `strict` turn on? What happens to your types after compiling? Compile-time vs runtime errors?

### Day 9 · Wed Nov 18 · Object types, aliases, interfaces

- **Read:** Rest of "Everyday Types" (type aliases, interfaces, the differences). Handbook "Object Types" (optional and `readonly` properties).
- **Do:** Write the same shape as a `type` and as an `interface`; extend each.
- **Tasks:** Model `User`, `Exercise`, `Set`, `WorkoutPlan` with optional and `readonly` fields and nested arrays. Create 3 sample objects that type-check.
- **Done when:** models compile and a wrong sample object shows a clear error.
- **Recall:** Type alias vs interface? Optional property vs `| undefined`? What does `readonly` actually prevent?

### Day 10 · Thu Nov 19 · Unions and literal types

- **Read:** "Everyday Types": Union Types and Literal Types. Total TypeScript beginner lessons on unions.
- **Do:** Replace a `string` parameter with a literal union and see the autocomplete improve.
- **Tasks:** Model a request status: idle, loading, success (with data) or error (with message). Write `describe(status)` that returns a message for each.
- **Done when:** passing an invalid status is a compile error.
- **Recall:** Why are literal unions safer than `string`? What can you do with a union value before narrowing it?

### Day 11 · Fri Nov 20 · Typing functions

- **Read:** Handbook "More on Functions" (function type expressions, optional and rest parameters, `void`).
- **Do:** Let TS infer return types, then add them explicitly, and compare.
- **Tasks:** Write 10 typed utilities, including `formatDuration(minutes)`, `totalVolume(sets)`, `filterBy(items, predicate)` with a typed callback, and a function with an optional parameter.
- **Done when:** all 10 compile and are used at least once.
- **Recall:** `void` vs `undefined`? How do you type a callback? When should you write return types yourself?

### Day 12 · Sat Nov 21 · Narrowing and discriminated unions

- **Read:** Handbook "Narrowing" (`typeof`, truthiness, `in`, discriminated unions, exhaustiveness checking with `never`).
- **Do:** Narrow a `string | number | null` value three different ways.
- **Tasks:** Rewrite Day 10 with a `kind` field and an exhaustive `switch` using a `never` check. Add a new variant and watch TS flag the missing case.
- **Done when:** adding a variant breaks the build until you handle it.
- **Recall:** What is a discriminant? How does `never` give you exhaustiveness? What does `typeof null` return?

### Day 13 · Sun Nov 22 · Convert your project to strict TypeScript

- **Read:** [Vite Getting Started](https://vite.dev/guide/). Handbook "Migrating from JavaScript".
- **Do:** Scaffold the `vanilla-ts` Vite template and run it.
- **Tasks:** Move Workout Stats (Day 7) into the template. Type everything. No `any`. Redeploy.
- **Done when:** zero errors, zero `any`, still live.
- **Recall:** What did TS catch that JavaScript never complained about?

### Day 14 · Mon Nov 23 · Generics

- **Read:** Handbook "Generics" (hello world, generic types, generic constraints).
- **Do:** Sunday mixed quiz.
- **Tasks:** Write `first<T>(arr)`, `fetchJson<T>(url)` and `groupBy<T>(items, keyFn)`. Use `fetchJson` in Workout Stats.
- **Done when:** hovering a result shows the right inferred type.
- **Recall:** What do generics give you that `any` doesn't? What does `extends` mean in `<T extends ...>`?

### Day 15 · Tue Nov 24 · Utility types and `keyof`

- **Read:** Handbook "Keyof Type Operator", "Typeof Type Operator", [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html) (`Partial`, `Required`, `Pick`, `Omit`, `Record`, `ReturnType`).
- **Do:** Hover each derived type to see what TS produced.
- **Tasks:** Derive `WorkoutDraft`, `WorkoutSummary` and `WorkoutsById` from `Workout`. Write `updateWorkout(w, changes: Partial<Workout>)`.
- **Done when:** no type is written twice.
- **Recall:** `Pick` vs `Omit`? What does `keyof` produce? When is `Record` the right choice?

### Day 16 · Wed Nov 25 · `unknown` and Zod

- **Read:** [Zod](https://zod.dev) intro and basic usage. Handbook section on `unknown`.
- **Do:** Treat an API response as `unknown` and see what TS lets you do with it.
- **Tasks:** Validate a real API response with a Zod schema. On failure, print a friendly message listing what was wrong.
- **Done when:** a broken response is caught at runtime with a readable error.
- **Recall:** `any` vs `unknown`? Why validate at runtime when TS already checks types?

### Day 17 · Thu Nov 26 · One source of truth with `z.infer`

- **Read:** Zod docs on type inference and error handling.
- **Do:** Compare `parse` and `safeParse` on bad input.
- **Tasks:** Delete your hand-written `Workout` type and infer it from the schema. Validate the JSON file in your CLI with `safeParse`.
- **Done when:** the schema is the only definition of `Workout`.
- **Recall:** Why is `z.infer` better than writing the type twice? `parse` vs `safeParse`?

### Day 18 · Fri Nov 27 · Reading library types

- **Read:** Handbook "Type Declarations" and the "DefinitelyTyped / @types" section.
- **Do:** Ctrl-click into the types of `Array.prototype.map`, `fetch` and a Zod function. Read them.
- **Tasks:** Write a `.d.ts` for a tiny untyped JS file. Install one library that needs `@types` and use it.
- **Done when:** you can find a function's return type without opening its docs.
- **Recall:** What is a `.d.ts` file? Where do `@types` packages come from?

### Day 19 · Sat Nov 28 · Error handling without classes

- **Read:** Finish the Total TypeScript Beginner's tutorial.
- **Do:** Write the same function once with `throw` and once returning a result object.
- **Tasks:** Define `type Result<T> = { ok: true; data: T } | { ok: false; error: string }`. Refactor `fetchJson` to return it and handle both branches everywhere.
- **Done when:** no unhandled errors remain in your project.
- **Recall:** When should you throw vs return a result? Why does a discriminated union make error handling safe?

### Day 20 · Sun Nov 29 · Typed CLI project

- **Read:** Node.js docs: [TypeScript introduction](https://nodejs.org/en/learn/typescript/introduction) and running TypeScript natively.
- **Do:** Plan the commands on paper before coding.
- **Tasks:** Build a workout logger CLI: add, list and delete entries, JSON file storage, Zod validation, `Result` errors, strict mode. Write a README.
- **Done when:** someone else could clone and run it.
- **Recall:** What was the hardest typing problem today, and how did you solve it?

### Day 21 · Mon Nov 30 · Type challenges and phase review

- **Read:** [type-challenges](https://github.com/type-challenges/type-challenges) README.
- **Do:** Sunday mixed quiz, now covering Phases 1 and 2.
- **Tasks:** Solve 10 easy challenges: Pick, Readonly, Tuple to Object, First of Array, Length of Tuple, Exclude, Awaited, If, Concat, Includes. 20 minutes of struggle before any hint.
- **Done when:** at least 7 solved without seeing a solution.
- **Recall:** Explain generics, narrowing and `z.infer` to your Tutor and get a rating for each.
