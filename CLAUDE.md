# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev        # Start development server
npm run build      # Production build
npm run lint       # ESLint
npm run lint:fix   # ESLint with auto-fix
```

There are no automated tests in this project.

## Architecture

This is a personal portfolio site built with **Next.js 16 App Router**, **Once UI** (`@once-ui-system/core`), and **SCSS Modules**. Content is authored in MDX files; there is no database or CMS.

### Content pipeline

Blog posts live in `src/app/blog/posts/*.mdx` and project write-ups in `src/app/work/projects/*.mdx`. Both use gray-matter frontmatter. `src/utils/utils.ts` provides `getPosts()` which reads these files from disk at build time using Node `fs` — this runs only on the server.

### Configuration

All site-wide text and toggles are in two files:

- **`src/resources/content.tsx`** — person info, social links, and the full content for the home, about, blog, and work sections (including JSX nodes for rich text). This is the primary file to edit for portfolio content.
- **`src/resources/once-ui.config.ts`** — routing, display flags (`location`, `time`, `themeSwitcher`, `languageSwitcher`), styles, effects, and Mailchimp config.

Both are re-exported from `src/resources/index.ts` and imported everywhere else.

### i18n

Language switching (English ↔ Indonesian) is implemented client-side via React Context:

- **`src/i18n/en.ts`** and **`src/i18n/id.ts`** — translation dictionaries (UI strings only — nav labels, section titles, intro description, button labels)
- **`src/context/LanguageContext.tsx`** — `LanguageProvider` + `useLanguage()` hook; preference persisted in `localStorage`
- **`src/components/LanguageToggle.tsx`** — toggle button rendered in the Header

Work experience achievements and technical skill descriptions in `content.tsx` are kept in English only and are not translated.

### Page architecture pattern

Pages that need translations cannot export both `generateMetadata` (server) and `"use client"`. The pattern used is:

- `app/page.tsx` / `app/about/page.tsx` — thin server components that export `generateMetadata` and `<Schema>`, then render a client component
- `src/components/home/HomeContent.tsx` / `src/components/about/AboutContent.tsx` — `"use client"` components that consume `useLanguage()` and own all the visible JSX
- Server components (`<Projects>`, `<Posts>`) are passed as `children` props into client components so they retain server-rendering

### Component conventions

- All shared components are in `src/components/` and barrel-exported from `src/components/index.ts`
- UI primitives (`Row`, `Column`, `Heading`, `Text`, `Button`, etc.) come from `@once-ui-system/core` — do not add a separate UI library
- Scoped styles use SCSS Modules (`.module.scss`) co-located with their component
- Icons are registered in `src/resources/icons.ts` and referenced by name string (`IconName` type)

### MDX project/post frontmatter shape

```yaml
title: string
publishedAt: string       # YYYY-MM-DD
summary: string
images: string[]          # paths under /public
team:
  - name, role, avatar, linkedIn
link: string              # optional external URL
techStack:                # optional
  - name, icon            # icon must be an IconName
tag: string               # optional
```
