---
title: "Logseq Migration Journey: Challenges, Delays, and Hopes"
description: "A look at Logseq's ambitious move to a database architecture, the long transition, and the challenges surrounding it."
publishDate: 2025-04-27
tags: ["productivity","pkm","open-source"]
draft: false
originalUrl: "https://www.solanky.dev/p/logseq-migration-journey-challenges-delays-and-hopes"
---
I use [Logseq](https://logseq.com/) daily, and it is my PKM (Personal Knowledge Management) tool of choice for work-related notes and tasks. Logseq is one of the most popular PKM apps, largely because it is open source.

## Logseq Timeline

Logseq was started in 2020 by Tienson Qin. It is one of the best outliner-based PKM tools, heavily inspired by [Roam Research](https://roamresearch.com/). Contrary to popular belief, Logseq was not started as a Roam alternative. In an interview, Tienson mentioned that he initially built Logseq based on org-mode and [Workflowy](https://workflowy.com/), and only learned about Roam Research five months into the project, later adopting many ideas from it. As Roam gained popularity, Logseq became recognized as a solid, open-source, and free alternative. In 2021, Logseq incorporated as a company, and in 2022, it raised $4.1 million in funding.

## Local First and Offline Architecture

Logseq took a different development path compared to most PKM tools, which are closed-source and cloud-based (like Roam Research). Instead, Logseq emphasized a local-first, offline-first approach. Its file-based architecture, where notes are saved as Markdown files on disk, helped it grow rapidly. This design allowed users to work completely offline without relying on servers. Another popular PKM tool, [Obsidian](https://obsidian.md/), similarly follows a file-based model.

## Migration to Database based Architecture

While Markdown file architecture works well for page-based systems like Obsidian, it poses challenges for block-based apps like Logseq. Sync issues and data loss were significant problems. To address this, the Logseq team decided to migrate from a file-based to a database-based core. As with any core architectural change, there are trade-offs, and it's still unclear whether this will prove to be a good or bad decision.

## Migration Is Taking a Long Time

Based on Logseq’s Trello roadmap, the team appears to have started planning the database migration in late 2022. However, as of April 2025, the DB version is still not ready. Rewriting the core of a software product is extremely complex, especially when trying to maintain compatibility with the existing system. Logseq is also working on real-time collaboration, adding even more complexity. Moreover, Logseq is developed in Clojure, a niche language, which may make finding contributors harder, though it’s unclear if this has significantly impacted the delay.

## Development Has Stalled on the File-Based Version

At the time of writing, the last release was on 23 April 2024, almost a year ago. While the team’s focus is understandable, the community expects at least minor bug fixes during major transitions. On platforms like Reddit, some users have even questioned whether the project is alive.

## Communication Could Be Better

Although the team has attempted to explain the migration and their approach, the lack of a clear roadmap has created uncertainty. While the database migration began in 2022, the first official post by Tienson appeared only in April 2024 on the Logseq discussion forum. When building open-source software publicly, users expect transparency and regular communication.

## Competition Has Moved Ahead

During Logseq’s long transition, users have explored alternative outliner apps like Remnote, Reflect, and Tana. The AI and LLM boom further accelerated innovation in the PKM space. Many apps integrated AI features, while Logseq's development largely paused due to the architecture rewrite. Although the Logseq team had started working on AI features in 2023, their focus shifted to the core migration, and the AI initiatives could not progress. The PKM community is known for exploring new tools frequently, so losing momentum can be costly.

## The Future Won't Be Easy for Logseq

**Plugins** It’s uncertain whether existing plugins will be compatible with the new DB version. Unless the UI layer is decoupled cleanly from the core, plugin compatibility issues are likely. Plugins are critical for expanding functionality and personalizing workflows, and keeping plugin developers engaged during and after the transition will be a challenge.

**Documentation and Help** Once the DB version stabilizes, users will have to navigate documentation for both file-based and database-based versions. This could create confusion, especially when referencing older blog posts or help articles. We've seen similar problems with frameworks like Next.js, where users struggled after the shift from the Pages router to the App router.

## Let's Hope for the Best

I love Logseq and sincerely hope it regains its lost momentum. There are very few robust, open-source productivity tools, and Logseq holds a unique position in the PKM space. I hope this bold and difficult decision to migrate the core architecture eventually strengthens Logseq and benefits the entire PKM community. Best wishes to the team!

## References

[https://en.wikipedia.org/wiki/Logseq](https://en.wikipedia.org/wiki/Logseq)

[https://discuss.logseq.com/t/why-the-database-version-and-how-its-going/26744/27](https://discuss.logseq.com/t/why-the-database-version-and-how-its-going/26744/27)

[https://discuss.logseq.com/t/why-logseq-ai-and-how-to-preserve-privacy/17486](https://discuss.logseq.com/t/why-logseq-ai-and-how-to-preserve-privacy/17486)

[https://trello.com/b/8txSM12G/logseq-roadmap](https://trello.com/b/8txSM12G/logseq-roadmap)
