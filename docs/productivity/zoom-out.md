## What it does

`zoom-out` takes a problem you are stuck on and works out what level it actually sits at. It dissolves your question first: does it assume a fact, a causal link, or a goal that does not hold? If the framing is wrong, it says what the original question assumed, what the facts show, and what the right question is, then answers that one. If the framing is fine, it leaves it alone, so the skill is as willing to say "local is enough" as it is to reframe.

The defining constraint is that it does not stop at diagnosis. The judgement and the fix arrive in the same reply: which of the actions you have planned can be dropped, who or what replaces them, and the concrete edit or next step, with its conditions of use. A skill that told you your question was wrong and then waited for you to ask "so what now" would be a worse version of this one.

It is a translation of QianWenFlow's [`qws-zoom-out`](https://github.com/QianWenFlow/qwskill), used under its CC BY-NC 4.0 terms; the skill's [CREDITS.md](https://github.com/mattpocock/skills/blob/main/skills/productivity/zoom-out/CREDITS.md) carries the attribution.

A scope check runs under all of it. The **level ladder** ranks a problem by where the fix belongs: the premises (should this be done at all), the goal and its standard (what do we want, what counts as good), the rules and structure (who does what, what is allowed), and the parameters (how many, how strong, what wording). Editing parameters that belong to a structural problem is the most common form of thrashing, and the skill names that failure when it sees it.

## When to reach for it

Type `/zoom-out`, or the agent reaches for it when a task fits. The description carries three trigger branches: you say "zoom out", "look at this from the whole", or "is this a local problem"; you keep re-editing the same thing and stay unhappy; or you are choosing between options that each have a case.

That second branch has a guard. When the agent notices you thrashing but you did not ask to zoom out, it finishes the edit and adds one line at the end offering it. It does not unfold an analysis you did not request. The offer is made once per issue, not once per message.

Two boundaries worth knowing. Words like "strategy" or "architecture" do not widen the scope on their own; a small local edit with a grand label still gets a small local answer. And a request for a complete artifact (a whole piece of copy, a whole plan) is not a problem statement, so the skill hands it back rather than inventing a problem to zoom out on.

For a decision you cannot answer alone, use [to-questionnaire](https://aihero.dev/skills-to-questionnaire). For an interview that fills in the branches inside a frame you have already settled, use [grilling](https://aihero.dev/skills-grilling).

## Subtraction comes before addition

The middle step is the one people skip. Before considering a new action, the skill takes each action you have already decided on, writes what job it does, and asks whether that job could be done by someone or something else. If it could, the action is dropped and its replacement is named. If it could not, the action stays, and the reply says why the obvious replacements do not work, as a statement of fact rather than an argument.

"Drop" is strict on purpose. It means not doing the action at all, not rescheduling it or trimming its prerequisites. Asking whether the weekly meeting can go is a different question from asking whether it can be shorter, and only the first one tests the structure.

## The thrashing table

The reference file carries a table of common causes of thrashing, each with its signal, where to look, and searchable keywords. Rewording without changing the premise. No fixed standard for "good", so each new version answers a different complaint. One part of the system carrying a job that belongs elsewhere. Patches that stop converging. A proxy metric standing in for the goal. Fixing where the symptom appeared instead of where the problem started. When the agent recognises one, it names the type and the established remedy, so you can go and read the original body of work instead of inventing a method.

Naming the type is itself part of the answer. Most people stay local because they do not know the class of problem they are in already has a literature.

## Common questions

**Why does it give me an answer when I only wanted a diagnosis?**
Because a diagnosis alone leaves you where you were. Say explicitly that you want the judgement only, and you get the judgement only.

**What does "the question is framed wrong" actually mean?**
One of the premises fails: an assumed fact is false, the causal link does not hold, the thing you want is not something you can affect, or the goal is a proxy for a different goal. The skill shows the derivation in two to four sentences so you can check it, rather than asserting it.

**Is this the same as grilling?**
No. [grilling](https://aihero.dev/skills-grilling) interviews you to settle the decisions inside a design tree. `zoom-out` asks whether the tree is planted in the right place, and it works from the conversation and your files rather than by interviewing you.

**Does it rewrite my draft?**
Only the spot it located, and it offers candidates rather than replacing your judgement. Deleting a section, merging, or rewriting the whole thing is listed as optional for you to decide. When the framing was wrong, what changes is the standard and the place to edit, not the size of the edit.

## It's working if

- When nothing needs to change, you get one trace line and the fix, not a parent chain and a state table.
- When the framing was wrong, you can retrace the reasoning yourself from the two to four sentences it gives you.
- At least one planned action gets dropped, with a named replacement, or the reply says why none could be.
- Your own conclusion, stance and tone survive the edit. The skill changes where you are looking, not what you decided.

## Where it fits

`zoom-out` sits before and beside the thinking skills rather than inside the build flow. When an idea needs its decisions filled in, that is [grill-with-docs](https://aihero.dev/skills-grill-with-docs) in a working directory or [grill-me](https://aihero.dev/skills-grill-me) outside one. When the effort is too big for a session, that is [wayfinder](https://aihero.dev/skills-wayfinder). When the question is only whether the frame is right, `zoom-out` is the one to reach for, and it hands back to the original task with the answer included. If you are unsure which skill fits the moment, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
