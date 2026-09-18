---
"mattpocock-skills": patch
---

teach: author each lesson as a self-contained Markdown file instead of HTML, and gather every generated file under a single `lessons/` directory (`lessons/MISSION.md`, `lessons/RESOURCES.md`, `lessons/NOTES.md`, `lessons/reference/`, `lessons/learning-records/`, `lessons/assets/`) so the skill stops scattering files across the current directory. Quizzes move into the lesson itself with `<details>` answer reveals, or into the conversation where the agent grades answers immediately, since Markdown lessons carry no script. Reference documents stay printable HTML sharing one stylesheet from `lessons/assets/`.
