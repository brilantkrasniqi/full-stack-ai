# Phase 4: Next.js and backend (Days 43–70)

Main resources: the free [Next.js Learn course](https://nextjs.org/learn) (App Router dashboard course), [SQLBolt](https://sqlbolt.com), [Drizzle docs](https://orm.drizzle.team/docs/overview) and [Better Auth docs](https://www.better-auth.com/docs). This phase takes you from front-end developer to full-stack.

### Day 43 · Tue Dec 22 · How the web actually works

- **Read:** MDN [An overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview), "HTTP request methods" and "HTTP response status codes".
- **Do:** Open DevTools Network tab on 3 sites and inspect requests, headers and status codes.
- **Tasks:** Use `curl` or a REST client to make `GET`, `POST` and `DELETE` calls to a public test API. Write down what each status code meant.
- **Done when:** you can explain a full request/response cycle out loud.
- **Recall:** `PUT` vs `PATCH`? What do 401, 403 and 422 mean? What is a cookie, technically?

### Day 44 · Wed Dec 23 · Next.js App Router basics

- **Read:** Next.js Learn chapters 1–5 (Getting Started, CSS Styling, Fonts and Images, Layouts and Pages, Navigating Between Pages).
- **Do:** Build the course project alongside the chapters.
- **Tasks:** Add a new nested route with its own layout that the course doesn't include.
- **Done when:** your extra route works with client-side navigation.
- **Recall:** What's the difference between a layout and a page? Why use `<Link>` instead of `<a>`?

### Day 45 · Thu Dec 24 · Server and client components

- **Read:** Next.js docs: "Server and Client Components" (in App Router → Getting Started).
- **Do:** Try `useState` in a server component, read the error, fix it with `"use client"`.
- **Tasks:** Build a page where the data list is a server component and the filter controls are a client component.
- **Done when:** you can say which code runs on the server and which in the browser.
- **Recall:** What can't server components do? Why keep `"use client"` as low in the tree as possible?

### Day 46 · Fri Dec 25 · Data fetching and rendering

- **Read:** Next.js Learn chapters 6–9 (Setting Up Your Database, Fetching Data, Static and Dynamic Rendering, Streaming).
- **Do:** Complete the chapters with the course database.
- **Tasks:** Add a slow fake query and stream it behind a `Suspense` skeleton.
- **Done when:** the page shows instantly and the slow part fills in.
- **Recall:** Static vs dynamic rendering? What does streaming improve for the user? What is a request waterfall?

### Day 47 · Sat Dec 26 · Route handlers

- **Read:** Next.js docs: "Route Handlers".
- **Do:** Create `GET` and `POST` handlers and call them with curl.
- **Tasks:** Build a small JSON API for workouts (list, create, delete) with Zod validation and proper status codes.
- **Done when:** bad input returns 400 with a clear error body.
- **Recall:** When use a route handler vs a server action? How do you read the request body?

### Day 48 · Sun Dec 27 · SQL by hand

- **Read:** [SQLBolt](https://sqlbolt.com) lessons 1–18. PostgreSQL tutorial chapter 2 ("The SQL Language").
- **Do:** Run Postgres in Docker (`docker run postgres`) and connect with a client like TablePlus or DBeaver.
- **Tasks:** Create `users`, `workouts` and `exercises` tables. Write 15 queries by hand, including 3 joins, a `GROUP BY` and an index.
- **Done when:** all 15 queries run correctly.
- **Recall:** `INNER JOIN` vs `LEFT JOIN`? What does an index speed up, and what does it cost?

### Day 49 · Mon Dec 28 · Data modeling

- **Read:** PostgreSQL docs: "Constraints" (primary keys, foreign keys, unique, not null).
- **Do:** Sunday mixed quiz.
- **Tasks:** Design Project B's schema on paper: users, workout plans, sessions, sets, with relations and constraints. Ask your Tutor to question your design Socratically.
- **Done when:** you can defend every table and foreign key.
- **Recall:** One-to-many vs many-to-many, and how do you model each? What does `ON DELETE CASCADE` do?

### Day 50 · Tue Dec 29 · Drizzle ORM

- **Read:** [Drizzle docs](https://orm.drizzle.team/docs/overview): get started with PostgreSQL, schema declaration, queries, migrations (drizzle-kit).
- **Do:** Translate your Day 49 schema into a Drizzle schema and generate a migration.
- **Tasks:** Create the Project B Next.js app, connect Drizzle, seed data, and render it on a server component page.
- **Done when:** data from Postgres shows on the page.
- **Recall:** What is a migration and why not edit tables by hand? How does Drizzle give you types?

### Day 51 · Wed Dec 30 · Server actions and mutations

- **Read:** Next.js Learn chapters 10–12 (Adding Search and Pagination, Mutating Data, Handling Errors).
- **Do:** Build the course's create and edit forms.
- **Tasks:** In Project B, add create, edit and delete for workouts using server actions, validated with Zod, revalidating the page after changes.
- **Done when:** all CRUD actions work and invalid input shows field errors.
- **Recall:** Where does a server action actually run? Why validate on the server even if the client validates?

### Day 52 · Thu Dec 31 · Authentication

- **Read:** OWASP [Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html) (overview sections). Next.js Learn chapter 15 (Adding Authentication). [Better Auth](https://www.better-auth.com/docs) installation and email/password guide.
- **Do:** Explain to your Tutor how password hashing and session cookies work before writing code.
- **Tasks:** Add sign-up, log-in and log-out to Project B with Better Auth and Drizzle.
- **Done when:** you can sign up, log out and log back in.
- **Recall:** Why hash passwords instead of encrypting them? Sessions vs JWTs? What makes a cookie `httpOnly`?

### Day 53 · Fri Jan 1 · Authorization

- **Read:** Next.js docs: "Authentication" guide, the authorization and data access layer sections.
- **Do:** Try to access another user's workout by changing the URL. It should fail.
- **Tasks:** Protect every page and action. Every query filters by the current user's id.
- **Done when:** two test users cannot see or edit each other's data.
- **Recall:** Authentication vs authorization? Why is hiding a button not security?

### Day 54 · Sat Jan 2 · Loading, errors and edge cases

- **Read:** Next.js docs: `loading.js`, `error.js`, `not-found.js` file conventions.
- **Do:** Break the database connection on purpose and see what the user sees.
- **Tasks:** Add loading skeletons, error boundaries, a not-found page and friendly empty states everywhere.
- **Done when:** no blank or broken screens in any failure you can trigger.
- **Recall:** What does `error.js` catch and what doesn't it catch?

### Day 55 · Sun Jan 3 · Build Project B

- **Read:** Your own schema and notes from this week.
- **Do:** Write a feature list and cut it to what fits in two days.
- **Tasks:** Build the workout tracker features: plans, logging sessions with sets, history, and a progress chart (use a chart library like Recharts).
- **Done when:** the core loop (plan → log → see progress) works.
- **Recall:** What was the hardest bug today and what caused it?

### Day 56 · Mon Jan 4 · Polish Project B

- **Read:** Nothing new. Review your Anki deck.
- **Do:** Sunday mixed quiz.
- **Tasks:** Polish the UI, mobile layout and empty states. Ask 2 friends to use it and watch them.
- **Done when:** it feels like a real product.
- **Recall:** What did watching real users reveal?

### Day 57 · Tue Jan 5 · File uploads

- **Read:** [Cloudflare R2](https://developers.cloudflare.com/r2/) docs on presigned URLs (S3-compatible).
- **Do:** Upload a file directly from the browser with a presigned URL.
- **Tasks:** Let users upload a profile photo in Project B, with size and type validation.
- **Done when:** photos upload and display.
- **Recall:** Why upload directly to storage instead of through your server? What can go wrong with user uploads?

### Day 58 · Wed Jan 6 · Webhooks and scheduled jobs

- **Read:** [Stripe webhooks docs](https://docs.stripe.com/webhooks) (test mode) and [Vercel Cron Jobs](https://vercel.com/docs/cron-jobs).
- **Do:** Receive a test webhook with the Stripe CLI and verify its signature.
- **Tasks:** Add a webhook route that verifies signatures, and a daily cron job that emails or logs a weekly summary.
- **Done when:** a test webhook is received and the cron job runs.
- **Recall:** Why verify webhook signatures? What does "idempotent" mean and why do webhooks need it?

### Day 59 · Thu Jan 7 · Streaming from the server

- **Read:** MDN "Using server-sent events". Next.js docs on streaming in route handlers.
- **Do:** Stream numbers from a route handler and read them in the browser.
- **Tasks:** Connect your Day 41 chat shell to a route handler that streams a fake reply word by word.
- **Done when:** text streams from your server into your UI.
- **Recall:** SSE vs WebSockets: when would you choose each? How does the client know the stream ended?

### Day 60 · Fri Jan 8 · Testing server code

- **Read:** Vitest docs on mocking. Next.js docs: "Testing" overview.
- **Do:** Test a pure function, then a function that talks to the database using a test database.
- **Tasks:** Write tests for 3 server actions, including failure cases and authorization.
- **Done when:** tests pass and one catches a bug you introduce.
- **Recall:** Unit vs integration tests? What's worth testing first in a backend?

### Day 61 · Sat Jan 9 · Security

- **Read:** [OWASP Top 10](https://owasp.org/www-project-top-ten/) (read each category's summary).
- **Do:** Attack your own app: try SQL injection, XSS in a form field, and brute-forcing login.
- **Tasks:** Add rate limiting to login and sign-up, and check that every input is validated.
- **Done when:** your attacks fail and you've written down why.
- **Recall:** How does an ORM prevent SQL injection? What is XSS and how does React help prevent it?

### Day 62 · Sun Jan 10 · A backend outside Next.js

- **Read:** [Hono docs](https://hono.dev/docs/): getting started, routing, middleware, validation.
- **Do:** Rebuild Day 47's workout API in Hono.
- **Tasks:** Add auth middleware, Zod validation and error handling. Deploy it (Cloudflare Workers or Fly.io).
- **Done when:** the Hono API is live and Project B could call it.
- **Recall:** What is middleware? What did Next.js do for you that you had to do yourself in Hono?

### Day 63 · Mon Jan 11 · Deploy Project B

- **Read:** [Neon docs](https://neon.com/docs) (connect from Vercel) and Vercel environment variables docs.
- **Do:** Sunday mixed quiz.
- **Tasks:** Deploy Project B on Vercel with Neon Postgres. Run migrations in production. Test sign-up on the live site.
- **Done when:** a stranger can sign up and use it.
- **Recall:** Why keep separate dev and production databases? Where should secrets live?

### Day 64 · Tue Jan 12 · Logging and error tracking

- **Read:** [Sentry for Next.js](https://docs.sentry.io/platforms/javascript/guides/nextjs/) setup guide.
- **Do:** Throw a test error in production and find it in Sentry.
- **Tasks:** Add Sentry and structured logs for key actions (sign-up, workout created, errors).
- **Done when:** you can trace a real error to the line that caused it.
- **Recall:** Logs vs error tracking vs metrics?

### Day 65 · Wed Jan 13 · Docker

- **Read:** [Docker getting started](https://docs.docker.com/get-started/) (concepts, images, containers, Dockerfile, Compose).
- **Do:** Write a Dockerfile for the Hono API.
- **Tasks:** Create a `docker-compose.yml` that runs the API and Postgres together with one command.
- **Done when:** `docker compose up` starts everything on a clean machine.
- **Recall:** Image vs container? Why do containers help "works on my machine" problems?

### Day 66 · Thu Jan 14 · Caching with Redis

- **Read:** [Redis docs](https://redis.io/docs/latest/) intro and data types overview. Upstash Redis quickstart.
- **Do:** Time a slow query, then cache it.
- **Tasks:** Cache Project B's progress stats in Redis with a sensible expiry, and clear it when new data arrives.
- **Done when:** the second load is measurably faster and never stale.
- **Recall:** What makes cache invalidation hard? What should never be cached?

### Day 67 · Fri Jan 15 · Light day: refactor and README

- **Read:** Your own code from the last 3 weeks.
- **Do:** Find and fix 3 things you'd now write differently.
- **Tasks:** Write Project B's README: what it does, architecture diagram, stack, screenshots, how to run.
- **Done when:** Project B is tagged `v1.0`.
- **Recall:** What would you do differently if you started Project B again?

### Day 68 · Sat Jan 16 · Rest day

- Rest. Do only your Anki reviews if you want to keep the streak.

### Day 69 · Sun Jan 17 · Light day: write about it

- **Read:** Your `LEARNING_LOG.md` from Day 1.
- **Tasks:** Write and publish "From WordPress to full-stack TypeScript in 70 days" on LinkedIn or dev.to.
- **Done when:** published.

### Day 70 · Mon Jan 18 · Buffer and phase review

- **Do:** Catch up on anything skipped. Sunday mixed quiz covering Phases 1–4.
- **Tasks:** Rank your confidence 1–5 on JS, TS, React, Next.js, SQL, auth. Spend extra Anki time on anything under 3.
- **Done when:** you're ready to start building with Claude.
- **Recall:** From today, applying to mid-level full-stack TypeScript roles becomes worthwhile.
