---
name: zoom-out
description: Zoom out of the local view to find the level where the problem really sits. First check whether the question itself is framed right and which planned actions can be dropped, then give the concrete fix in the same reply; when the framing is wrong, state the right question and answer it. Use when the user says "zoom out", "look at this from the whole", or "is this just a local problem". Also load it when the user keeps re-editing the same thing and stays unhappy ("still not right", "it's getting worse", "you keep changing your mind", "the AIs all disagree"), but then only offer zoom-out in one line at the end of the reply instead of unfolding the analysis. Do NOT use for producing a whole business artifact.
---

# Zoom Out

## What it does

Three steps: dissolve the user's question, deciding whether it is framed right and, if not, naming the breakpoint and stating the right question; then subtract, checking which of the user's actions or existing process steps can be dropped; then answer directly. When the user is already thrashing on local edits, it checks the question first, then handles the thrashing. Complete business artifacts (a whole piece of copy, a whole plan, code, a release) still go back to the original task.

When the user only asks for a complete business artifact and has not named a concrete problem to solve, don't scan files and don't run the flow: say in one sentence that zooming out needs a specific problem stated first, and hand the work back to the original task.

## Files to read

- Read `references/system-scope-model.md` in full before running the zoom-out flow. If it is missing, say so and still complete the flow in this file; don't invent levels or steps.
- Then read the landing file for the task type: edits to text (sentences, paragraphs, references, wording) read `references/landing-text.md`; content and account work (video, topic, framework, title and cover, bolded points, account positioning, stage, agenda) read `references/landing-content.md`; AI, Skill, Agent, prompt and automation workflow work read `references/landing-ai.md`; other tasks read none. A landing file only supplies landing method; it never changes this file's flow.

## Principles

1. **Dissolve the user's question before choosing an answer.** Whether the framing is right follows only the test in 1.3, on the user's goal, the existing facts and the breakpoints; it does not change because a better answer isn't available yet.
2. **Separate the result the user wants from how they asked for it.** The result and the value trade-offs are the user's to decide and are not replaced. The framing, the task definition and its premises can be rejected.
3. **Intermediate results must be concrete and falsifiable.** Every state, condition and judgement the derivation writes down must use concrete objects from this domain, not empty words like "essence" or "deeper need"; a single line saying "push to the bottom and see" is not a completed derivation. When changing the frame, say which explanation, goal, cause, plan, risk, level of responsibility or acceptance criterion changed, and on what evidence.
4. **Analysis scope ≠ execution scope.** When the problem turns out to sit higher up, go back to the earliest affected link; don't push the whole system's responsibility onto the object in front of you.
5. **Comparison only applies within one valid framing.** Compare answer A with a new plan B only when the original question holds and A genuinely exists (the user approved it, shipped it, is using it, or it was still valid before the thrashing started). Keep A when B is no real improvement. With no real A, just solve it; don't manufacture a default answer as a threshold. When the framing is wrong, A only supplies the facts and actions that still hold, not a fallback for the whole answer; the new question's answer is accepted on its own evidence and effect.

## Flow

### Triggers

- **Zoom out**: when the user invokes this skill (`/zoom-out`, `$zoom-out`, a Skill link, or any other invocation route), or says "zoom out", "zoom out skill", "look at this from the whole", "is this a local problem", or "check whether this is only being solved locally", run the flow below and give the final result directly. The invocation is itself the request; the user does not have to say "zoom out" again.
- **Offer zoom-out**: when the user did not ask for it, but the conversation shows them re-editing the same thing and staying unhappy, add one hint line at the end of the current reply, do not unfold the analysis, and complete the original task as usual. Judge by meaning, not by matching fixed sentences. The usual meanings:
  - Unhappiness with the same edit, repeatedly: "still not right", "that's not what I meant", "something's off but I can't say what", "none of these work", "try another one".
  - Getting worse, or wanting to go back: "it's getting worse", "the original was better", "forget it, let's use the first version".
  - Feeling the AI's judgement is drifting: "you keep changing your mind", "that's not what you said before", "you reverted it again".
  - Conflicting directions from different sources, with the user unable to decide: "the AIs all say different things", "I don't know who to listen to".
  - The same problem keeps coming back after being fixed, or rules and patches pile up without helping.
  The hint line is: "This may be stuck at the local level. If you want, say 'zoom out' and I'll look at it from a higher level." Do not hint when: the user is raising an edit request for the first time; or the user gives a clear, specific instruction (for example "replace this word with X"). Hint once per issue; do not repeat when the user doesn't respond, unless another round of re-editing starts later.
- Words like "strategy" or "architecture" appearing in the phrasing do not justify widening the scope when the work is in fact a small local edit; still run the flow, and the conclusion is usually that local is enough.

### The zoom-out flow

There is only this one flow, with no shallow or deep variant; length follows what the checks find. Step 1's intermediate results are written internally only, to constrain the answer, and are not shown to the user as a block. The order is: dissolve the user's question, then subtract, then answer directly; the checking methods for each step are in `references/system-scope-model.md`.

0. **Check whether this is a repeat invocation.** With an existing `Active Scope State`, use "Continuity" to decide between carrying the old answer forward and re-checking from step 1.
1. **Dissolve the user's question.** Establish what the user wants and whether the original question's premises hold: if they hold, keep the original question; redefine only when there is a real breakpoint. In this skill, "dissolve" means this step only. Three parts:
   1.1 **Set up the question.** Write down: the user's own words (when invoked mid-task, start from when the user first raised this, since the last sentence is only one step of it; when earlier context was compacted and the original words are gone, write from summaries and records and mark it as inference); the approach they proposed; the result they want; the constraints; and, when there is a history of re-editing, each rejected version and the reason it was rejected. Write the wanted result up to the point where the user would call it done; the route being taken, and any single step broken out of it, go under "the approach they proposed" and are not the wanted result; when the route itself is a hard requirement, it goes under constraints. Record any real answer A (approved by the user, shipped, in use, or still valid before the thrashing started) and use it as principle 5 says; do not write a default answer on the spot.
   1.2 **Find the breakpoint.** Check in order, writing a concrete output for each item; once done, use the "level ladder" in the reference to judge which level the problem mainly sits at:
      - **Shared historical premise** (do this first when there is a history of re-editing): what the tried versions all assumed in common. It is the prime suspect. Match it against the "common causes of thrashing" in the reference and name the thrashing type; when the table has no matching type, still judge for yourself and say which one it is.
      - **Premises**: the question's assumed facts, causation (doing X causes Y), controllability (Y is within what the user can affect) and goal (Y is really what they want), each marked as holding, doubtful or not holding. How strongly the result is meant follows the success criterion the user would actually accept: everyday "prevent" or "make them like me" usually means bringing the risk down to something acceptable, or clearly raising the odds, and is not read as a literal 100%; only when the user hears a weaker answer and still presses for the original result is the strong reading meant, and then the weaker answer cannot pass as an answer to the original question.
      - **Root goal**: ask "why do they want this" of the wanted result, repeatedly, until only platitudes remain above it; pick one level as the root goal and write its observable success criterion and the key conditions needed to reach it at the degree the user actually wants (not pushed to the strongest, no fixed count), and list the other people involved and what each of them wants. The root goal must be something the user said or clearly implied, and must not change a trade-off the user already decided.
      - **Condition stress test**: find the conditions the original question assumes constant whose change could flip the conclusion (scope, time, resources and constraints, external conditions, how other people react), push only one or two of them to their maximum or minimum, and write whether the user's wanted result can still be reached against the success criterion if they proceed as asked. The user's own approach is not stressed here; whether it can be dropped is step 2's subtraction. Re-check: a conclusion that only fails under extreme conditions drops to a reminder and does not overturn the original question; but when reality or the user's own plan is already heading that way, it does not count as "only under extremes". Method in the reference.
      - **Well-posedness**: under this framing, is there a criterion that can tell right from wrong (defining only one of them doesn't count; see "well-posedness" in the reference); do several answers conflict with no information available to decide between them; is the answer highly sensitive to some unknown fact, so that a change in it flips the answer.
   1.3 **Judge whether the question holds, and fix what is being solved.**
      - **Breakpoint candidates**: a premise that does not hold; a condition stress test showing the asked route cannot reach the wanted result; a well-posedness item that fails; a shared historical premise meeting the "the approach sustains the problem" test below. Items already downgraded to reminders don't count. Check each candidate both for whether it still holds at the degree the user actually wants, and for whether it would change the explanation, the decision or the action; do not judge by how mature the later answer looks. An approach being droppable or replaceable is not itself proof the question was wrong; redefine the question on those grounds only when the original framing treats the approach as a fixed premise and therefore leads to the wrong action.
      - **Test**: answer the user's words seriously in their ordinary sense: if that yields the right action, the question holds, even when the wording uses absolutes like "prevent" or "ensure"; it counts as wrongly framed only when answering that framing is bound to go the wrong way (carrying a false causal chain, working at the wrong level of responsibility, or an approach that cannot reach the wanted result). The words not naming the factor that decides the outcome is not a wrong framing: a normal answer would name it.
      - **Wrongly framed**: at least one evidenced breakpoint passes the test above. Write "what the original question assumed; what the facts or the derivation show; how answering it as asked goes wrong", then rebuild the question by the matching type in the reference. The new question keeps the result the user wants and states what is being decided now, who can decide it, and which causal or responsibility relation changed; swapping the original approach for another approach is not enough. "The approach sustains the problem" needs a cycle that persists or worsens through the tried versions, or that maintains itself; deterioration under extreme conditions alone does not establish it.
      - **Question holds**: no breakpoint above that would change the answer. Keep the original question; do not invent a new one to look like zooming out.
      - **Evidence cannot yet draw the boundary**: when a key fact would flip the framing judgement or the solution, keep the condition and the most likely current judgement; do not rule a doubtful premise wrong outright, and do not call the original question valid just because no better answer is available yet.
2. **Subtraction.** For action tasks, subtract before considering additions; explanation and understanding tasks skip this step. The flow subtracts exactly once, here. The subjects are the actions the user has decided on or intends to take, including those mentioned in the background rather than only the one the question asks about, plus the rules and process steps the current plan carries or the agent itself set up. Identity and facts are not subjects; they are the evidence for judging. Check the main action first, then the secondary ones. For each, write what it does for the user, then ask: without this action, who or what can still do that job, and can the wanted result still be reached against the success criterion? If yes, the action can be dropped, and name the person or method that replaces it; if no, keep it, and improving or adding actions waits for step 3. "Drop" means not doing the action at all, not merely removing its prerequisites, its timing or its extra steps. Checking "the weekly meeting", for example, asks whether the meeting can go, not whether it can start later. When the facts show an action is already overdone and continuing it would backfire, write that as a reminder at the start of the answer (see "Answer structure"). Subtraction tests means and never changes the result the user wants. When the framing was wrong, check the original approach against the question rebuilt in 1.3. This step gives conclusions only: which actions can be dropped, who or what replaces them, which must stay; step 3 builds the concrete path from those replacements.
3. **Answer directly.** Build the solution from the question fixed in 1.3, the success criterion and key conditions from 1.2, and the subtraction results from step 2, checking evidence and applicability as you build it rather than running a second filter afterwards; method detail in section three of the reference.
   - **Build the path**: for each unmet condition that could change the outcome, and for each breakpoint from 1.3, write the action the user can take, who executes it, and how it affects the goal; where another person's choice is involved, write what the user can arrange and what that person still has to choose, and never treat their agreement as fact. Group the coordinated actions into an executable path; paths differ only when the mechanism differs, not by rewording or by multiplying options. When a path still does not address the 1.3 breakpoint, keep looking for an action or an established method; a list of causes is not a plan.
   - **What goes in the answer**: leave out paths the facts have already ruled out, clearly inapplicable ones, ones that conflict with the user's goal, and ones that only reword another. When a key fact is unknown, give concrete actions for the different conditions, plus the cheapest way to tell them apart, which never substitutes for the action; when the facts support one action, or the user asks for a comparison, say which one you recommend and why; when the facts cannot support anything stronger, say where the boundary is.
   - **Finish the answer**: when the question holds, answer within the original frame; when the framing was wrong, answer the question rebuilt in 1.3, and handle the original approach by step 2's conclusion. Causes or things to verify with no matching action do not complete an action task. For complete business artifacts such as a full draft or a script, give only the constraints and the landing spec, and hand it back to the original task.

Requirements:

- **One invocation gives the final result.** Check upward until "one level higher would change the result the user wants, or the positioning or value trade-offs they already fixed"; reframing is never out of bounds; anything higher is written only as a constraint or as something for the user to decide.
- **Self-check before delivering.** Assume the user invokes it once more right away: would one level higher, or a different frame, give a different answer? If yes and it would not change the result the user wants, keep checking now; otherwise deliver. Also confirm the answer addresses the original doubt, not merely something that looks right inside the new frame.
- Keep a trimmed `Active Scope State` (below) for the rest of the task, and don't show it to the user unless asked.

## Active Scope State

Five required items; fill the rest only when used, write "not applicable" where they don't apply, and never invent levels. It stays in the current task and the agent's log; it is never written into the user's document or a long-term archive.

```markdown
## Active Scope State
- Result the user is really trying to advance:
- Boundary and basis (keep / widen / redefine):
- Level this should be handled at:
- Constraints the original task must inherit:
- Stopping boundary and why:
- (As needed) Cause judgement, key relations, acceptance criteria, unknowns and invalidation conditions:
```

## Continuity

- On a repeat invocation, inherit the existing state first and reread the previous answer as written. Judge the previous answer against the result the user wants: if the user says following it did not produce that result, that counts as failure feedback and the check restarts from step 1; only without such a report, and without new facts or a new goal, carry the boundary and answer forward, saying in a line or two why you are not going higher. Do not manufacture a new answer just because the user says "zoom out again".
- When a review finds the old answer wrong or incomplete, quote the previous answer's own words, say exactly what is wrong and on what evidence; a flaw you cannot point to in its words is not a flaw. Fix only what is shown to be wrong and keep the rest; when the original judgement has not been shown wrong, do not rewrite "the right question".
- When new facts or concrete failure feedback change the problem definition, the goal, the cause, the plan, the risk, the level of responsibility or the acceptance criteria, re-check from step 1.
- Later execution inherits this state, and never quietly drops a systemic problem back down to a local one.

## Delivery

### Applies to both cases

- When the user's existing draft or plan is involved, whether the question holds or the framing was wrong, change only the located spot, keep the user's own judgement, and offer candidates; deleting a paragraph, merging or rewriting the whole thing can only be listed as "optional" for the user to decide. When the framing was wrong, what changes is the criterion and where to edit, not how big the edit is.
- Give the judgement and the answer in the same reply; do not wait for the user to ask "so what do I do". Even large changes, such as a new goal, a new positioning or a new frame, come with concrete actions; give only the diagnosis when the user explicitly asks for diagnosis alone.
- When facts are missing, look first in the user's files and the conversation; if they are not there, answer on the most likely case and state the assumption (conditional actions are written as in step 3). When the criterion depends on the user's taste (looks, tone, rhythm, say), that is the user's trade-off: do not assume it on the most likely case, and do not replace a real example with a description for the user to confirm. Ask one question at the end only when the direction depends on the user's value trade-offs, or when something only the user can decide would change the answer, and offer options where you can; never end with just a judgement and a question.
- Do not ask again about anything the user has already declined to answer in the conversation; give the result on the most likely case, or brief answers for the two or three likely cases.
- Other problems noticed along the way are listed as a one-line "optional", not folded into the fix; anything the user has finalised or asked to keep stays untouched. The fix solves only the located problem: it does not replace the user's conclusion, stance or criterion, and does not change the strength of tone.
- When a local action is needed, attach a **landing spec**: where to change, what it must achieve, what it must not break, how to accept it, compressed into one or two sentences.
- Value trade-offs are the user's to decide; do not route to another named skill.

### Answer structure

When the check changed no explanation, goal, cause, plan, risk, level of responsibility or acceptance criterion, the conclusion is that local is enough: write one trace line plus the fix, with half a sentence of evidence in the trace (what you checked, why the judgement stands), for example "Boundary check: the original frame holds, because …"; when the user asked for the check, write "Checked as you asked: the original frame holds, because …". Otherwise follow the order below, each item carrying only its own content, with all how-to only in "Answer". Where you stopped lives only in `Active Scope State`, mentioned when the user asks whether to look higher; a trade-off the user must decide gets one question at the end, per "Applies to both cases".

When the question holds:

1. Whether the question is right: one sentence saying it holds. Reminders go here: stress-test conclusions downgraded to reminders, and facts showing an action would backfire if continued. Say them in one sentence when they would change what the user does; leave them out when they wouldn't. With a history of re-editing, name the thrashing type and its single strongest piece of evidence, and name the established remedy for that kind of problem; when unsure, give at least two searchable keywords.
2. Actions: for each main action the user intends (including those mentioned in the background), one sentence with the conclusion: can be dropped, replaced by whom or what, or must stay; when it must stay, one sentence on why the replacements you considered don't work, stating facts without persuading. Conclusions only, no consequences and no how-to. Omit the whole item when there is nothing to drop or change.
3. Answer: for a small edit (one sentence, one reference, one heading, one bolded phrase, one parameter) give 1–2 candidates; otherwise give concrete actions and their conditions of use per step 3. When a real and still-valid A exists, say whether to keep A or switch to B, and when switching, which concrete fact or need B serves better.

When the framing was wrong:

1. Breakpoints: 2–4 sentences showing the derivation chain so the user can check it themselves, not just the conclusion. Reminders go here too, by the same rules as item 1 above. With a history of re-editing, also name the thrashing type, and name the established remedy or at least two searchable keywords.
2. The right question: one sentence.
3. Actions: whether the original approach stops, shrinks, changes in nature, or keeps the part that still holds, and why; do not leave the user's original question hanging.
4. Answer: concrete and executable, to the same quality as above.
5. Assumption and fallback (only if needed): when the rewrite rests on an unconfirmed judgement about the user's goal, state that judgement and give, in a sentence or two, the answer to the original question if it is wrong; when the rewrite rests on no such judgement, leave this item out.

### Writing style

- Summarise the thrashing in one sentence; don't replay each tried version. Each judgement carries only its single strongest piece of evidence.
- **Say each thing once**: across the whole reply, the same action, safeguard or premise appears once; when several actions share it, say it together at the start or end of the answer, and point to it in a sentence elsewhere instead of repeating it.
- **Each action states two things**: when to use it, and one to three key moves. Give a reason in one sentence only where the user wouldn't think of it and it would change whether they act. Key moves must be concrete enough to follow, not directions like "assess first" or "align first".
- **Test sentence by sentence**: delete the sentence and ask whether what the user does would change. If not, delete it, including repeated background, synonymous reminders, summary sentences, transitions, and a closing paragraph that restates the rest. Paths and concrete moves are exempt.
- Length is whatever makes the answer clear; there is no fixed word count.
- Don't show `Active Scope State`, the theory sources or the internal checklist; expand on them only when the user asks.

## Worked cases

- **Should zoom out**: "From the whole: conversion dropped, rewrite my landing page copy." The traffic sources, pricing and support scripts all changed in the same period, and the "conversion" figure mixes trials with paid. → Rewrite the question, calibrate the metric and the cause first, then hand back to the copy task.
- **Looks wrong, actually holds**: the stress test only fails under extreme conditions, or it only shows that one of the user's actions can be dropped. → Judge the question to hold; the extreme drops to a reminder and the droppable action goes under "Actions" with who or what replaces it. For example: "Our weekly meeting runs too long, so how do I make people speak more briefly?" holds; "each person reports verbally in turn" can be dropped in favour of written updates before the meeting, with the meeting used only for decisions.
- **Local is enough**: "Fix the typos in this description", or renaming one function. → One trace line, straight back; no parent chain, no state table, none of the analysis that changed no judgement.
- **No request, only a hint**: the user says "still not right" for the third time without asking to zoom out. → Make the edit as usual and add "This may be stuck at the local level. If you want, say 'zoom out' and I'll look at it from a higher level." at the end of the reply, with no analysis.