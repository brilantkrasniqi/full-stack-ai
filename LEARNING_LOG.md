# Learning log

**Goal:** become a full-stack TypeScript engineer who ships Claude-powered products (150-day plan, see `plan/`). Start: Tue Nov 10, 2026.

## Day 1 · Tue Nov 10, 2026 · Setup and Git basics

Git stores a project's whole history in the hidden `.git` folder, so deleting it keeps your files but erases the history. Files move from the working directory to the staging area with `git add` and become a commit with `git commit`, which lets you commit only the changes that belong together. A commit stays on your machine until `git push` sends it to a remote repo such as GitHub (`origin`), on a branch like `main`.

**Topics covered (for quizzes):** `git init` and `.git`, untracked vs modified files, git ignores empty folders, working directory / staging area / commit / push, remote repo vs branch, `origin`, exiting Vim for commit messages.

**Weak spots to revisit:** vocabulary. I mixed up *untracked* (never seen by git) and *modified* (tracked, changed since last commit), and *remote repo* vs *branch*. Still to confirm: what `origin` actually is.
