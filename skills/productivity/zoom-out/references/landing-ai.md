# Landing AI tasks by layer

For AI, skill, agent, prompt and automation workflow tasks, read this file. It is how the level ladder in `references/system-scope-model.md` is written out for AI tasks; it does not change the main file's flow.

## 1. The usual predicament on AI tasks

Rules pile up, prompts grow longer, and the result is still unsatisfying; the rules start to contradict each other, and the same kind of error reappears in a different shape. This usually means the only move has been adding rules. Look upward using the "patches that don't converge" section of `references/system-scope-model.md`. On AI tasks, "the goal and its standard" usually lands as: turn the inputs that exposed the problem into a fixed test set, or settle on a reference good result (the golden draft), rerun everything after each change, and check at once whether the new problem is fixed and whether the old ones came back. Split the structural level by the four kinds of layering below.

## 2. The four kinds of layering

| Layering | What it resolves | What it looks like on AI tasks |
| --- | --- | --- |
| Information layering | What kind of thing this information is | Distinguish the user's own words or the original document, the model's inference, conclusions already confirmed, and the final deliverable; intermediate states and checklists are not written into the deliverable; an outside theory must not be written up as the user's own view |
| Judgement layering | What is judged first, what is judged after | The same model judges in order; when an earlier judgement does not hold, later merits cannot rescue it |
| Workflow layering | How many stages, what each stage hands over | Every step states its input, action, output, pass condition, and the point to fall back to on error |
| Executor layering | Which link must go to an independent executor | Switch to an independent subagent or an independent call, and give it only the input this one step needs |

The default order is information, judgement, workflow, executor. Consider executor layering only when the first three are done and the problem is still there.

## 3. When an independent agent is really needed

Ask only one question: would doing this step in the same context damage the goal of this step? The common kinds of damage:

- reviewing your own work: once it has seen the draft, it argues for the draft;
- the previous step's draft, reasoning or conclusion leads the next step off course;
- two goals conflict by nature, for example "pick the views worth keeping" and "make the article flow": while writing, the points that are awkward to phrase get dropped for the sake of flow;
- different steps need different read scope or edit permission.

When it really is needed, write down:

- which problem it solves that only isolation can solve, rather than "there are many steps";
- what it can read and what it cannot;
- what it alone may decide, and the single result it hands over;
- how the next step uses that result;
- whether it must run in sequence or can run in parallel: when the next step depends on the previous step's result, it must run in sequence;
- when a subagent is unavailable, whether to stop, degrade or report the work as incomplete.

## 4. Two common structures (examples)

- **A task where several criteria fight for priority** (for example judging a title or a topic): every layer must share the same original text and the same single trade-off, using judgement layering plus a light workflow, and is not split into several agents; once split, each optimises a different metric and the premises fall out of line again.
- **A task that both selects views and writes them up** (for example turning an interview into an article): the raw transcript is the only source of fact; first one independent executor decides only what to keep and in what order, frozen into one list; then another independent executor writes only from the raw transcript and that list, and does not pick the central idea again. The two run in sequence and do not share each other's drafts or reasoning.

## 5. Common mistakes

1. Equating "there are stages" with "several agents must be built".
2. Building one agent per angle of analysis; a different angle does not mean isolation is required.
3. Changing a task one agent could complete by ordering its judgements into several agents voting.
4. A subagent given no input boundary, no forbidden reading and no handoff result just scatters the same task.
5. Writing internal checklists and process records into the formal deliverable.
6. Writing the new layering as more prompts stacked on the old flow; layering should replace the old chain of judgement, not add another set of synonymous rules.
