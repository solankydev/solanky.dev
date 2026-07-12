---
title: "Codex Desktop is Great, But My Code Lives in WSL"
description: "Why Codex Desktop's visual session experience and a WSL-based development environment still feel like two separate workflows on Windows."
publishDate: 2026-06-19
tags: ["codex", "wsl", "windows", "development"]
draft: false
originalUrl: "https://x.com/solanky/status/2067843096428401011"
socialImage: "../../assets/blog/codex-desktop-wsl.jpg"
---

I use Windows.

But like many Windows developers, my real development environment is often not native Windows. It is WSL.

My repos live in WSL. My shell is Linux. My scripts expect Linux paths. My dependencies are installed inside WSL. My Docker and dev workflows usually feel more natural there.

So when I say “I use Windows for development,” the real setup is more like this:

- Windows is the host.
- WSL is where the code lives.
- VS Code connects into WSL.
- The terminal is Linux.
- The GUI apps are Windows apps.

This split is normal for a lot of developers now. But it creates a real problem for Codex workflows.

And I felt that problem most clearly with Codex Desktop app.

## Codex Desktop App gets the UI right

To be clear, I like Codex Desktop app.

The app has the kind of session UI I want. I can see projects. I can see old sessions. I can resume work visually. I do not have to remember which terminal tab had which task. I do not have to run a command just to find a previous thread.

That is a very good experience.

Codex Desktop feels like the right direction for AI coding workflows. Agent sessions are not small one-off chats anymore. They can contain debugging context, refactor plans, test failures, decisions, and half-finished work.

Having a visual place to return to those sessions matters.

## The problem starts with WSL

Codex CLI works well inside WSL. When I am inside a repo, I can run:

```bash
codex resume
```

and it shows sessions for that project.

If I want to see everything, I can run:

```bash
codex resume --all
```

That part is good. The CLI understands the current directory. It understands my WSL repo. It feels close to the code.

But the CLI is not the same as a visual session manager.

Codex Desktop has the visual session manager I want. Codex CLI has the WSL environment I need.

On Windows, those two things do not yet feel like one clean workflow.

## Two modes, not one workflow

Codex Desktop does support both Windows-native mode and WSL mode. That is good, and I am glad it exists.

But in practice, it still feels like I have to choose one world at a time.

I can use Codex Desktop for Windows-native sessions.

Or I can switch it to WSL mode.

But I do not get one clean Codex Desktop sidebar where my Windows sessions and my WSL sessions naturally live together.

Native Windows is not enough for my main development work. A lot of my projects are not meant to be run directly from Windows. They are meant to run in a Linux-like environment. The repo paths, shell scripts, build tools, package managers, and local workflows are all inside WSL.

So the answer cannot simply be:

> “Just use Codex Desktop in Windows mode.”

That works for Windows-native work, but it does not match where my code usually lives.

## WSL mode is useful, but not a full replacement

I also tried using Codex Desktop in WSL mode.

That gets me closer to the development environment, but it did not fully replace the Desktop experience for me.

Some things in the Desktop app feel more natural from the Windows side. For example, tools like computer use and the in-app browser are part of why I want the Desktop app in the first place.

When I move everything into the WSL side, I get closer to my code, but I lose some of the smooth Windows desktop experience I wanted.

So I end up with a tradeoff:

- Codex Desktop gives me the better visual session experience.
- WSL gives me the correct development environment.

Today, on Windows, I cannot fully combine those into one seamless Codex workflow.

## I tried other options too

I tried Zed, Warp, Orca, and a few other tools that try to improve the AI coding workflow. They are all interesting in different ways. Some improve the terminal experience. Some have agent session views. Some try to make AI coding workflows more organized.

But they did not give me exactly what I wanted.

In many cases, they still open a terminal and I have to start or resume Codex CLI from there. That is useful, but it is not the same as a proper Codex Desktop-style session sidebar.

In Orca, I could see sessions, but in my setup it showed Windows sessions and not my WSL Codex sessions, even when I had the WSL worktree open. So again, the WSL boundary showed up.

I also looked at VS Code’s newer Agents Window. The idea is very close to what I want: a separate agent-focused window, sessions across workspaces, and a way to manage agent work without opening ten project windows.

But on my machine, I see Copilot CLI and Claude there, not Codex CLI.

So for Codex, that is not the answer for me right now.

## My current solution

After trying these paths, I settled on a simple split:

- I use Codex Desktop for Windows-native sessions.
- I use the official VS Code Codex extension inside WSL for my development sessions.

This is not perfect, but it is the cleanest official workflow I have found.

It also feels honest. Instead of trying to force Windows and WSL into one fake environment, I treat them as two real environments.

For Windows-native work, Codex Desktop is great.

For WSL development work, VS Code Remote WSL with the official Codex extension makes more sense. It is closer to my repo, closer to my terminal, and closer to how I actually build and run code.

## What I want from Codex Desktop

I still think there is a missing product layer here.

Codex Desktop should become a better session hub for developers using Windows and WSL.

I do not expect it to pretend Windows and WSL are the same thing. They are not. But I do want it to understand both worlds better.

The ideal experience would be simple:

- Show my Windows-native Codex sessions.
- Show my WSL Codex sessions.
- Let me see all projects in one sidebar.
- Let me click once to resume into the right environment.
- Do not make me switch modes just to see a different half of my Codex history.

That would make Codex Desktop much more useful for Windows developers who use WSL every day. Right now, Codex works on both sides. I just want Codex Desktop to make those sides feel like one workflow.
