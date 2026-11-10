# How you will learn

## The short answer

Socratic questioning is good, but it is not the strongest method on its own. The best-supported approach combines several techniques, and this plan uses all of them every day.

| Technique | Evidence | How the plan uses it |
| --- | --- | --- |
| **Retrieval practice** (testing yourself) | Rated highest utility in the large Dunlosky et al. (2013) review | Daily recall questions, Anki, weekly quizzes |
| **Spaced practice** | Also rated highest utility in the same review | Anki reviews every day; topics come back weeks later |
| **Interleaving** (mixing topics) | Rated moderate utility | Sunday mixed quiz across all past weeks |
| **Worked examples, then fading** | Strong for beginners learning a new skill | Use → Modify → Create for every new concept |
| **Socratic AI tutoring** | Works when the AI makes you reason; harms learning when it hands you answers | Daily 10-minute Socratic check with a Claude tutor that is told not to give answers |
| **Deliberate practice through projects** | Real skill comes from building just beyond your comfort zone | A shipped project at the end of every phase |

What to stop doing: rereading and highlighting. The same review rated them low; they feel productive but barely help. Replace rereading with testing yourself.

On Socratic AI specifically: a randomized study on code comprehension found a Socratic tutor roughly doubled learning gains compared with free self-explanation, and a study with graduate students found Socratic-tutored students later used AI in a more understanding-driven way. But a high-school study found Socratic AI raised engagement without a significant learning gain, and a large study found unrestricted chatbot access during practice hurt exam results. The lesson: use Claude as a questioner, never as an answer machine while learning fundamentals.

## The daily loop (weekdays, about 2 hours)

| Block | Time | What you do |
| --- | --- | --- |
| 1. Recall warm-up | 10 min | Close everything. Answer the previous day's **Recall** questions on paper from memory. Then do your Anki reviews. |
| 2. Pre-question + Read | 25 min | Before reading, write a guess at today's first Recall question (guessing first improves learning, even when wrong). Read the **Read** list. After each section, close the tab and explain it out loud. No highlighting. |
| 3. Use → Modify → Create | 60–70 min | **Use:** type the reading's examples by hand and run them. **Modify:** change each example 2–3 ways, predicting the output before you run it. **Create:** do the **Tasks** from a blank file. |
| 4. Socratic check | 10 min | Open your Claude "Tutor" project and let it question you on today's topic (prompt below). |
| 5. Close | 5 min | Write a 3-sentence summary in `LEARNING_LOG.md` as if teaching a beginner. Make 3–5 Anki cards in your own words. Commit and push. |

**Weekends (3–4 hours):** warm-up and Anki, then mostly building. **Every Sunday:** add a 30-minute mixed quiz (prompt below).

**The 20-minute rule:** when stuck, struggle for 20 minutes first (this struggle is where learning happens), then follow the help ladder.

## The help ladder

1. Read the error message slowly, line by line.
2. Check the official docs for the thing that failed.
3. Ask Claude for a **hint** only.
4. Ask Claude to **explain** the concept you're missing.
5. Only then ask for the solution. Then delete it, and retype it from memory.

## Rules for using AI

- **Days 1–70 (foundations):** Claude is a tutor, not a coder. Turn off inline AI autocomplete in your editor. Never commit code you can't explain line by line.
- **Days 71–150 (AI engineering):** Claude Code becomes your pair programmer. Review every diff and be able to explain it. Before accepting a big change, ask yourself how you would have done it.

## Prompts to copy

Put this in the instructions of a Claude Project called **Tutor**:

```
You are my Socratic programming tutor. I will tell you today's topic.
Rules:
- Never give me the answer or write code for me unless I type "SHOW ME".
- Ask one question at a time, building on what I just said.
- When I'm wrong, don't correct me directly. Ask a question that exposes the gap.
- If I'm stuck twice in a row, give a small hint, not the solution.
- After 5 to 8 questions, ask me to explain the whole concept in my own words,
  rate my explanation 1 to 5, and name the weakest part.
```

Sunday mixed quiz (paste your `LEARNING_LOG.md` after it):

```
Quiz me with 10 mixed questions on everything in my learning log below.
Weight older topics more heavily. Mix: 4 explain-why questions, 3 predict-the-output
code snippets, 3 find-the-bug snippets. One question at a time, wait for my answer,
grade it, then at the end name my 2 weakest topics.
```

## Tools to set up on Day 1

- **Anki** (free on desktop and Android) with one deck. Write the front as a question, not a term ("Why doesn't fetch reject on a 404?" not "fetch 404").
- **`LEARNING_LOG.md`** in your repo: one dated entry per day.
- **A Claude Project called Tutor** with the prompt above.

## How to read each day

- **Read:** what to read, in order. Official docs first.
- **Do:** the guided Use and Modify practice.
- **Tasks:** the Create part, done from a blank file.
- **Done when:** the finish line for the day.
- **Recall:** tomorrow's warm-up questions. Don't answer them today.

## Sources

- [Dunlosky et al. 2013 summary (APS)](https://www.psychologicalscience.org/news/releases/which-study-strategies-make-the-grade.html)
- [Socratic Tutor for Source Code Comprehension (NSF)](https://par.nsf.gov/biblio/10189529-socratic-tutor-source-code-comprehension)
- [Socratic vs non-Socratic AI randomised study (Stanford SCALE)](https://scale.stanford.edu/ai/repository/impact-large-language-models-students-randomised-study-socratic-vs-non-socratic-ai)
- [Socratic AI tutors in programming education (EPFL study summary)](https://neuronfeed.com/news/socratic-ai-tutors-outperform-prompt-training-approach-in-programming-education-)
- [Evidence on AI tutors and exam performance](https://www.iatrox.com/blog/ai-tutors-harm-exam-learning-evidence)
- [Faded worked examples research](https://cs.carleton.edu/cs_comps_archive/2021/practicum/index.php)
