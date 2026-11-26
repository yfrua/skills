# Credits

`zoom-out` is a translation of [`qws-zoom-out`](https://github.com/QianWenFlow/qwskill), the "升维" (zoom out) skill published by [QianWenFlow](https://x.com/QianWenFlow) in the [`qwskill`](https://github.com/QianWenFlow/qwskill) repo, released under [CC BY-NC 4.0](https://github.com/QianWenFlow/qwskill/blob/main/LICENSE).

The Chinese originals of `SKILL.md` and every file under `references/` were translated to English and adapted to this repo's conventions: the skill name and invocation route changed from `qws-zoom-out` to `zoom-out`, the frontmatter description was rewritten as this repo's model-invocation pointer, and the examples were kept as they were. The method itself, its structure, its reference files and its worked cases are QianWenFlow's.

The CC BY-NC 4.0 licence permits non-commercial use with attribution, which this file provides. Commercial use of this skill needs separate permission from the original author (liuzan983@gmail.com).

## Tracking upstream

`upstream.json` beside `SKILL.md` pins the commit this translation came from (`1f2acffd`, 2026-11-15) and the git blob SHA of every file that was copied. `npm run check-upstream` asks GitHub what those files look like now and fails when any of them moved, so drift is visible without re-reading the upstream repo by hand. CI runs it as a non-blocking heads-up on every push.

Upstream may never touch this skill again, which is exactly why the pins are worth having: they turn "is this still current?" from a reread into one command, and they say which commit to diff against when the answer is no. If upstream is gone, the pins still record what the copy was.

To take an upstream change:

1. Read the upstream diff for that file rather than copying it over. The local copies are translated and adapted, so a straight copy would undo the translation.
2. Port the change by hand into the matching local file.
3. Update that file's SHA in `upstream.json` and `commit` / `commitDate` to the new commit, then run `npm run check-upstream` until it passes.

Upstream files: `SKILL.md`, `references/system-scope-model.md`, `references/method-sources.md`, `references/landing-text.md`, `references/landing-content.md`, `references/landing-ai.md`.