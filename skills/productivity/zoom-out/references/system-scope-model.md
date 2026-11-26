# System Boundary and Problem Redefinition

## 1. Find the Breakpoint

This corresponds to 1.2, Find the breakpoint, under step 1, Dissolve the user's question, in the main file. First separate the result the user wants from their framing, then recover the current facts, the decisions that still hold and the result the user actually cares about. Check both what the user says and the explanation the agent has already formed. Write a concrete output for each item; it is used internally only, to constrain the later judgement and the answer.

### Shared Historical Premise (do this first when there is a history of re-editing)

List every version tried and the user's reason for rejecting each one, then find the premise all versions assume in common or the spot they all edit. It is the prime suspect; it counts as a breakpoint only when it meets the test in the main file's 1.3, "the approach sustains the problem". Then match it against "Common Causes of Thrashing" in section 2 and name the thrashing type.

### Premises

Write each one out as "premise: ... | status: holds / doubtful / does not hold | basis: ...". Four kinds of premise:

- **Fact**: is the fact the question assumes actually true;
- **Causation**: the question assumes that doing X leads to Y; does that causal link hold;
- **Controllability**: the question assumes Y is within what the user can affect; is that really so;
- **Goal**: is Y really what the user wants, or is it a means to another goal.

For how strongly the result is meant, see the main file's 1.2, "Premises"; for the test of whether the framing is right, see the main file's 1.3.

The premise check also carries double-loop learning: check whether the causal relations, evaluation criteria, options or responsibilities that govern the current judgement are facts, confirmed preferences, or assumptions not yet verified. Also record here which existing facts the current explanation cannot account for.

### Root Goal

Method is in the main file's 1.2, "Root goal". Two additions:

A stage goal does not lapse just because a long-term goal exists; check whether there is a real connection between them. The root goal must be something the user said or clearly implied, and it must not change a trade-off the user has already decided.

You may propose a corrected goal: explain why the old goal cannot stand for the real need, and how the change affects the plan and the acceptance criteria. Facts can overturn a wrong premise, but they cannot decide a value preference for the user; when several valid but conflicting needs exist, confirm only the key trade-off that decides the later path. When it is not yet settled, keep the conditional branches and do not quietly swap out the thing being optimised.

### Condition Stress Test

Corresponds to the main file's 1.2. There is one purpose only: check whether, once a condition the original question assumes constant changes, doing it as originally asked can still reach the user's wanted result. The user's own approach is not stressed here; whether it can be dropped is left to the subtraction in section 3. The goal is not pushed to its strongest either; use only the success criterion and key conditions written under "Root Goal" as the ruler.

Conditions you can stress:

  | Condition | Push to the maximum | Push to zero or the minimum |
  | --- | --- | --- |
  | Time | Repeated over the long term | Must be decided right now, done only once |
  | Scope | Widened to every object and scenario | Only one object left |
  | Resources and constraints | Unlimited resources | Zero resources |
  | External conditions | Most favourable | Least favourable |
  | Other participants | They see through it completely, adapt or copy it | They do not react at all |

Stress only the one or two conditions that the original question assumes constant and whose change could flip the conclusion; do not fill in every row. Write what happens at that end, and whether the user's wanted result can still be reached against the success criterion; if it cannot, that is a breakpoint candidate, handed to the main file's 1.3 to judge. Fit a new case's stress test into these five conditions first; when it truly does not fit, say which condition is missing instead of adding a one-off rule.

**Re-check**: pushing to an extreme only exposes structure. Return to the real conditions and the degree the user actually wants, and check whether the breakpoint candidate still holds; one that holds only under extreme conditions drops to a reminder and does not overturn the original question. When reality or the user's own plan is already heading that way (for example, about to grow from 3 customers to 300), it does not count as "only under extremes".

When the state you stress towards can be reached only through a value trade-off the user has not accepted (harming others, breaking rules), use it for testing only, never as a direction. In the reply, write only the part of the stress test that changed the conclusion, in the user's own words, without internal names such as "condition stress test" or "extreme stress test".

### Well-posedness

- **Is there a criterion**: under this framing, is there a criterion that can tell a right answer from a wrong one. Having a task goal is not the same as having a criterion. Check each aspect the user has rejected separately: defining only one of them while the others stay undefined also counts as no criterion. Signals: the user cannot say what they want; the reasons each version was rejected land on a different aspect every time; no version has been accepted yet. Check: before making the next version, can you say what a good enough one looks like; if not, there is no criterion. If the criterion has not changed and only this version failed to meet it, that is not a missing criterion; handle it as a local edit;
- **Is the answer unique**: do several answers conflict while the available information cannot settle which one is right; several reasonable answers that were always expected do not count;
- **Is the answer stable**: is the answer highly sensitive to some unknown fact, so that a change in that fact flips it.

If any one of the three fails, that is a breakpoint candidate for an ill-posed question.

**How to answer when there is no criterion and it depends on the user's preference**: zooming out does not set the criterion for the user, and does not build comparison samples in this invocation; write the answer around the four things below and hand execution back to the original task:

1. **Stop first**: stop polishing the current version;
2. **Find first**: from the work the user has approved and rejected, name differences that can be compared; at the same time ask the user once whether there is work of the same kind they like, what they like about it and what they dislike;
3. **Compare only if that is not enough**: have the original task run a few low-cost real comparisons for the user to see, each round comparing a single trade-off, with the user only choosing;
4. **When to resume**: once you can say what a good enough one looks like before making the next version, write it down as a comparable criterion (a golden draft, good and bad examples, or pass conditions) and resume production. After that, if the work misses the mark, change the work; go back and change the criterion only when new evidence overturns the original trade-off.

## 2. Choose the Check Path

When the original frame holds and has no gap that changes the conclusion, keep it. When a change is needed, use the level ladder below to judge which level the problem sits at, then apply the matching method; methods can be combined.

### Level Ladder: Which Level the Problem Sits At

Any system you can actually change (an organisation, a process, a product, content, an AI task) can be read through the four levels below. Changing something higher up has more leverage, but higher is not automatically better: when the parts barely affect each other, a local edit is enough. Simple knowledge questions do not need this table.

| Level (top to bottom) | What you change | How to split or check this level | Matching method |
| --- | --- | --- | --- |
| Premises | Whether this should be done this way at all | Split into the four premises, fact, causation, controllability and goal, and check each; whether the approach itself can be dropped | section 1, Premises, and step 2 of the main file |
| Goals and criteria | What is wanted, and what counts as good | Ask upward into a means-ends chain; when there is no criterion for good and bad, first fix a comparable good result (a golden draft, a fixed test set) | section 1, Root Goal and Well-posedness |
| Rules and structure | What can and cannot be done; who does what, who sees what, how work is handed over | The two affect each other, with no fixed ranking. When rules collide, rank them first (if an earlier one fails, a later one does not count however good it is) and do not add synonymous rules; when more rules only add confusion, switch to re-splitting the structure: split by the nature of the information, the order of judgement, stages and handovers, the executor, and the cause of change | this section, Widen the System Scope and Patches That Don't Converge |
| Parameters | Quantity, intensity, wording | Do not split; only tune. Push to an extreme first and see whether the conclusion flips | section 1, Condition Stress Test |

When repeated edits at the same level keep failing (most often tuning parameters or adding rules), look one level up; when patches only pile up, switch from adding rules to re-splitting the structure (see Patches That Don't Converge). Problems also often sit at the handover between levels, not only inside one level.

### Common Causes of Thrashing

Match the case against the table below to recognise which kind of thrashing this is. The table holds common types, not all of them. When nothing matches, do not force it, but still judge and say which kind of thrashing it is: sum up its cause in one sentence, and write the signal, where to change, searchable keywords and matching level using the same items as the table; for established practice see Name the Problem Type and the Established Practice at the end of this section. A new type is described in this reply only; do not rewrite this table yourself.

| Cause of thrashing | Signal | Where to change | Searchable keywords | Matching level |
| --- | --- | --- | --- | --- |
| Rewording without changing the premise | Several rounds of edits all touch the same spot, or all assume the same premise | Check the common premise; when the question holds, return to the still valid A, and when the framing is wrong, rebuild the question | hidden premise, problem framing, double-loop learning | Premises |
| No fixed evaluation criterion | The conclusion sways with the latest piece of feedback; the user cannot say what they want and rejects a different aspect each time | Set the evaluation criterion first, then check item by item; when the user cannot state one, handle it as in section 1, Well-posedness | evaluation criterion, decision criteria, rating scale | Goals and criteria |
| One part carries a task that is not its own | No matter how you change that part, it is wrong | Reallocate the responsibilities of each part; for the split see item 3 of Patches That Don't Converge | separation of duties, levels of information | Rules and structure |
| Patches that don't converge | Patches pile up and conflict, and results do not improve | See Patches That Don't Converge below | rule bloat, system restructuring, leverage point | Rules and structure, looking up at goals and criteria |
| The goal got replaced | The result meets some metric or label but is not what the user wants | Separate the real goal from the proxy metric, and the entry point from the centre | Goodhart's law, proxy metric, goal displacement | Goals and criteria |
| Treating the symptom as the cause | The fix lands where the problem shows up, not where it is produced | Look back to the step that produces the problem | root cause analysis, 5 Whys | Rules and structure (upstream and downstream) |

### Widen the System Scope: Missed Relations or Constraints

Decide the system object for this round: which elements, relations, feedback and environment must be included to explain or improve the current result. Sharing a place, a department or a topic is not a reason to include something.

| Scan direction | What to check |
| --- | --- |
| Upward | How do the parent process, the system and the final result constrain the current object? |
| Downward | Which sub-steps, judgements or actions together produce the current result? |
| Forward and backward | How do preconditions, direct outputs, downstream actions and feedback connect? |
| Across roles | Who supplies input, holds the decision, bears the consequences, or lacks information? |

For the test along the time direction, see section 1, Condition Stress Test.

For the levels and landing method of text work, content and account work, and AI tasks, see the matching landing file. When fields such as level of responsibility or role do not apply to these tasks, write "not applicable"; do not force them onto an organisational system.

Judge from the strength of interactions, the strength of feedback, time effects and repeated failure whether a local problem is being produced continuously by system relations. When interactions are weak, consequences are reversible, acceptance is independent and the overall goal is unaffected, local treatment is usually enough.

When you need to check upward, do the recursion within the same invocation: start at the direct parent, and for each level you include, record what it concretely changes in the explanation, goal, cause, plan, risk, level of responsibility or acceptance criteria, then check its parent; at the first level that adds nothing or lacks evidence, record the first level not included and the reason, then stop. Do not stop at the first useful level above, and do not invent systems to fill up the ladder.

### Patches That Don't Converge: The Problem Is the Structure, Not a Missing Rule

When you are fixing a system (a rule set, a process, a tool, a division of work) and any two of the following appear, stop adding patches:

- The number of patches is growing, and each one gets bigger;
- New patches start to conflict with old rules;
- The same kind of error reappears in a new shape;
- The quality of the result does not improve after each fix.

More rules will not help here; look upward along the level ladder:

1. **Goals and criteria**: is there a comparable good result or judgement criterion (a golden draft, a fixed test set) to confirm that a change is really an improvement; and is the result the system is meant to reach itself set right. With no criterion, set the criterion first, then change anything else.
2. **Rule priority**: rank rules that fight each other; when an earlier rule fails, a later one does not count. Delete rules the structure can cover, and do not add synonymous rules.
3. **How to split the structure**: use the bases below to find the first place where things are crammed together and split it:
   - **Nature of the information**: are raw evidence, inference, confirmed conclusions and the final delivery mixed together;
   - **Order of judgement**: is it clear what is judged first and what after;
   - **Stages and handovers**: what each step hands to the next, what the pass condition is, where an error goes back to;
   - **Executor**: would the same person or the same context doing the work break the goal (for example, reviewing its own work, or cutting a key point while writing because it reads better); only when it would break the goal, give the job to a separate executor, and write what it can see, what only it decides, and what it hands over;
   - **Cause of change**: are the parts that change often separated from the parts that rarely change, and does changing one spot drag others with it.

Split only when splitting brings a visible improvement; too many layers or too many executors make handover costs outweigh the gain. If a patch you were about to add still has value, put it in the matching level (for example, turn it into one item of the acceptance criteria) instead of appending it separately. For how to split AI, Skill, Agent and prompt tasks concretely, see `references/landing-ai.md`.

### A Few Angles Outside the Ladder: Use Only When No Breakthrough Is Found

When the ladder and the methods above still find no breakthrough, pick the angles that fit from below; do not use them all. They only find a direction: they do not change the result the user wants, and they do not rewrite the whole piece for the user.

| Angle | When to use it | How |
| --- | --- | --- |
| Resolve the contradiction | One requirement improves only as another worsens | Write the two conflicting requirements out first, then see whether they can be separated by time (different requirements at different times), by object (different people or parts), by condition (which one is met under which circumstances) or by level (the whole satisfies one and a part satisfies the other) |
| Reverse | Each option looks right but you are not sure | Assume the plan was carried out and failed; write the two or three most likely reasons for failure, then check whether the current approach guards against them |
| Change the representation | The discussion stays in prose and gets muddier | Draw the problem as a flow, list it as a table, count it as numbers, or re-read it in a different unit (hours per order, hours per week) |
| Design from zero | The system has been through many rounds and carries many patches | Leave the result the user wants untouched and assume you start fresh today with no constraint from the existing arrangement: how would you design it. Then compare with the current state and change the spot where the difference is largest first. How it differs from subtraction: subtraction checks one approach at a time, design from zero sets every current approach down at once |
| Look from several angles (optional) | The analysis sees only one side | Take one look each from division of work and process, people's needs and abilities, interests and power, and meaning and identity, then find the side that was missed; skip the angles that do not apply |

### Rebuild the Question by Breakpoint Type

Once you find a breakpoint that would change the answer, pick the method by the breakpoint type and rebuild the question; whether the breakpoint holds does not depend on the new answer beating the old one. One breakpoint can have several types, and the methods can be combined.

| Type | Typical breakpoint | How to rewrite | Matching level |
| --- | --- | --- | --- |
| A premise does not hold | A fact, causal, controllability or goal premise does not hold | Name and replace the wrong premise, then ask the question again along the real causal relations | Premises |
| The approach sustains the problem | The approach has been tried and the problem persists or worsens, or the approach and the problem sustain each other | Stop doing more of the same, change the rules or relations the approach sits in, and find an approach different in kind; do not mechanically do the opposite | Rules and structure |
| The question is ill-posed | There is no criterion, several answers all make sense, or the answer is highly sensitive to some unknown fact | Supply the criterion or the key fact first, or settle it with a small experiment instead of argument, then solve | Goals and criteria |
| Stuck on the means | The question asks about a means while what is really wanted sits a level higher, in the goal | Move up to the root goal and ask again | Goals and criteria |
| Wrong scope | The problem is produced by upstream and downstream or by system relations | Handle it under Widen the System Scope | Rules and structure |

Then form the new problem definition, making clear: what was taken for what, which relation the new definition changes, and how it explains a fact the old frame missed or opens a new solution. A change of frame can happen at the same level; you do not have to find a larger system first.

### Name the Problem Type and the Established Practice

Other domains can offer candidate explanations or methods, but crossing domains requires matching mechanisms: what the objects, relations, constraints and feedback in the original problem correspond to in that domain; what the key similarity is, and which difference would make the borrowing fail. A similar name, a pretty metaphor or a higher-level theory is not enough to adopt it. With no reliable correspondence, do not force a cross-domain move.

Once you have judged which class the problem belongs to (for example patches that don't converge, a metric that conflicts with the goal, an outcome several parties decide together), check whether that class of problem has an established practice in another domain:

- **Confident**: state the practice directly, how its mechanism corresponds to the current problem, and where it may not apply;
- **Not confident**: do not force it, but at least name the class of problem in one sentence and give keywords to search, reminding the user that this class has probably been studied systematically and they can look up the matching theory and practice, then judge whether it transfers.

When looking up established practice and precedent, aim at the user's final result and check whether anyone has reached it; only once a step is confirmed to be unavoidable, look up how to do that step.

Many people cannot get out of the local view because they do not know this class of problem already has an established practice. Naming the problem type is itself part of the zoom-out result.

## 3. After Dissolving the Question: Subtraction and Answering Directly

Whether the question holds is judged by the main file's 1.3; a new answer not yet mature does not change that judgement.

When the framing was wrong, the new question must still answer the user's real concern. Changing what is discussed or the user's goal needs a basis; winning by swapping the success criterion is not allowed. Factors outside the framing are ordered by their causal force; controllability decides which can be acted on and which can only be observed, and is never used to delete a factor that affects the result.

Subtraction follows step 2 of the main file (basis: TRIZ's ideal final result, which asks whether the function can still be delivered without this thing; Keeney's means-ends relation, where dropping a means sends you back to the goal it served to find another means). When forming paths, follow Ralph Keeney's value-focused thinking, creating candidate approaches item by item from the confirmed results and necessary conditions; borrow Ronald Howard's strategy generation to group the actions that must work together into a complete path; then run a decision sensitivity check to find, for each path, the key condition that would change the approach. These checks happen while the answer is being formed; they are not a separate filter applied after the paths are built.

How hard you treat it and the framing judgement are two dimensions: solve by default; a stopgap is used only when the user explicitly wants something good enough, or when the cost of searching further clearly exceeds the value of the problem; shelving it needs a basis showing it would be the same without treatment, or not worth treating; changing the system or environment so the problem stops appearing counts as subtraction.

**Form and answer**: take only the unmet conditions that under the user's actual goal could change the result, plus the breakpoints already judged; for each, ask what action the user can take or what arrangement they can change to bring the condition about, to ease the obstacle, or, when the condition cannot be controlled, how to adjust the action; write who executes it and how it affects the goal. Check which conditions must hold together, group the actions that work together into a complete path, and write the key actions and the preconditions for them; write a failure case only when it would change what the user does. Where another party's choice decides the result, write what the user can arrange and what that party still has to choose; never presume agreement. Paths are distinguished by their mechanism or necessary arrangement, not by wording, detail or number. For an unknown condition that has a basis and could change what is done, imagine what different actions would be taken if it holds and if it does not; answer directly with the paths that are realistically possible, together with their conditions of use, and leave out paths the facts have ruled out or that only repeat detail. When a condition is unknown, give conditional actions, and let the cheapest distinguishing action only help the user decide which one to take; recommend one path and give the basis only when the conditions support a single approach or the user explicitly asks for a comparison. Having only a causal hypothesis, a check to run or the name of an option, with no matching action, means the action task is not finished; when the facts support only an existing approach, do not manufacture a new path.

For understanding and explanation tasks, a good result explains the relevant facts, handles counterexamples, separates causes and states the evidence that would overturn it; it is not forced to give an action plan. Before delivering, set the candidate conclusion aside for a moment and check back against the raw facts and the real need for a missed explanation or an unverified premise; if you find a counterexample that changes the conclusion, return to the main file's 1.3 and judge again, otherwise do not expand without limit.

## 4. Delivery Boundary and Stopping Conditions

In the same reply as step 3 of the main file, state clearly: whether the question holds or the framing was wrong, and on what basis; the answer, the fix or the conditional paths (following the rule for the matching case in the main file's Delivery section); and an item the user must decide only when one exists that would change the answer. An explanation task can stop at a more accurate understanding; an action task gives the fix and the constraints, and does not produce complete business artifacts inside this skill.

Stop expanding in that direction in the following cases:

- Going higher would change the result the user wants, or the positioning or value trade-offs they have already fixed: see item 1 of Requirements in the main file;
- Widening the boundary further or changing the frame no longer changes the explanation, goal, cause, plan, risk, level of responsibility or acceptance criteria;
- New material only adds background or abstraction and cannot change the judgement of the current problem;
- Further stress testing would rest on unsupported assumptions: keep the unknown, and for a decisive gap ask only the single most important question now;
- A higher-level influence is identified, but this round's authority or scope can only carry it as a constraint, a risk or a handover item; do not turn it into this round's delivery.

When you stop, record the basis for the choice and the unknowns, and do not claim to have found a permanently correct top level. Later work follows the main file's state inheritance and invalidation rules; a repeat invocation is not itself a reason to expand further, and a review that finds a substantive omission is not bound by the earlier stopping conclusion.

## 5. Method Sources

The theoretical sources for each judgement method are in `references/method-sources.md`; it does not need to be read at runtime.
