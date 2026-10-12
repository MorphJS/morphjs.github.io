# MorphJS

Security notes, writeups and projects. Built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Counter

Update this every Sunday.

- Published notes: 0
- Labs solved: 0
- Hours: 0

## Local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check + production build into dist/
```

## Writing a note

Create `src/content/blog/<slug>.md` with this frontmatter:

```md
---
title: "..."
date: 2026-10-12
platform: bandit   # bandit | tryhackme | portswigger | htb | project | note
tags: []
difficulty: easy   # easy | medium | hard (optional)
status: draft      # draft | published
---
```

Only `status: published` notes get a URL, appear in lists, or enter the RSS feed.

## Rules

- Labs, practice platforms, CTFs and in-scope bug bounty programs only.
- No active HTB machines, no exam content, no flags, no passwords of wargame levels.
- Never commit `.ovpn` files, tokens or keys (see `.gitignore`).
- Keep URLs stable: `/blog/<slug>/`. Renaming a file breaks links.

## Deploy

Push to `main`. In the GitHub repo: Settings → Pages → Source: **GitHub Actions**.
The repo must be named exactly `morphjs.github.io` (lowercase) for the URL to be `https://morphjs.github.io`.
