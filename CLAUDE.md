# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev        # Start development server
npm run build      # Production build
npm run lint       # ESLint
npm run lint:fix   # ESLint with auto-fix
npm run format     # Prettier (ts, tsx)
npm run typecheck  # tsc --noEmit
```

There are no automated tests in this project.

## Architecture

Personal portfolio site built with **Next.js 16 App Router**, **Once UI** (`@once-ui-system/core`), and **SCSS Modules**. Content is authored in MDX files; there is no database or CMS.

### Content pipeline

Blog posts live in `src/app/blog/posts/*.mdx` and project write-ups in `src/app/work/projects/*.mdx`. Both use gray-matter frontmatter. `src/utils/utils.ts` provides `getPosts()` which reads these files from disk at build time using Node `fs` — server-only.

### Configuration

All site-wide text and toggles live in two files:

- **`src/resources/content.tsx`** — person info, social links, and the full content for home, about, blog, and work sections (JSX nodes for rich text). Primary file to edit for portfolio content.
- **`src/resources/once-ui.config.ts`** — routing, display flags (`location`, `time`, `themeSwitcher`), styles, effects, and Mailchimp config.

Both are re-exported from `src/resources/index.ts` and imported everywhere else.

### Component structure

Components are organized by responsibility under `src/components/`:

- **`layout/`** — app shell components rendered in `app/layout.tsx`: `Header`, `Footer`, `Providers`, `RouteGuard`
- **`ui/`** — reusable UI primitives: `ThemeToggle`, `HeadingLink`, `ScrollToHash`, and `breakpoints.scss` (shared SCSS variables)
- **`about/`**, **`blog/`**, **`work/`** — page-specific components
- `Mailchimp.tsx`, `mdx.tsx` — feature/utility components at root
- `index.ts` — barrel export; all app code imports from `@/components`, not from subpaths

SCSS `@use` paths must be relative (no `@/` alias) because Sass does not resolve TypeScript path aliases.

### Component conventions

- UI primitives (`Row`, `Column`, `Heading`, `Text`, `Button`, etc.) come from `@once-ui-system/core` — do not add a separate UI library
- Scoped styles use SCSS Modules (`.module.scss`) co-located with their component
- Icons are registered in `src/resources/icons.ts` and referenced by name string (`IconName` type)
- `src/types/content.types.ts` defines the TypeScript shapes for all content objects (`Person`, `Home`, `About`, `Work`, `Blog`, etc.)

### MDX frontmatter shape

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
