# Muhammad Abdul Karim — Portfolio

Personal portfolio site built with **Next.js 16 App Router**, **Once UI**, and **SCSS Modules**.

## Tech Stack

- **Framework** — [Next.js 16](https://nextjs.org) (App Router)
- **UI System** — [@once-ui-system/core](https://once-ui.com)
- **Styling** — SCSS Modules + Once UI design tokens
- **Content** — MDX files with gray-matter frontmatter
- **Language** — TypeScript
- **Icons** — react-icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Commands

```bash
npm run dev        # Start development server
npm run build      # Production build
npm run start      # Start production server
npm run lint       # Run ESLint
npm run lint:fix   # Run ESLint with auto-fix
npm run format     # Format with Prettier
npm run typecheck  # TypeScript type check (no emit)
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/page.tsx
│   ├── blog/
│   │   ├── [slug]/page.tsx
│   │   ├── page.tsx
│   │   └── posts/          # MDX blog posts
│   ├── work/
│   │   ├── [slug]/page.tsx
│   │   ├── page.tsx
│   │   └── projects/       # MDX project write-ups
│   ├── api/                # API routes (auth, OG image, RSS)
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/             # App shell (Header, Footer, Providers, RouteGuard)
│   ├── ui/                 # Reusable UI (ThemeToggle, HeadingLink, ScrollToHash)
│   ├── about/              # About page components
│   ├── blog/               # Blog page components
│   ├── work/               # Work page components
│   ├── Mailchimp.tsx
│   ├── mdx.tsx
│   └── index.ts            # Barrel exports
├── resources/
│   ├── content.tsx         # All site content & person info
│   ├── once-ui.config.ts   # Routing, display flags, styles
│   └── icons.ts            # Icon registry
├── types/                  # TypeScript type definitions
└── utils/                  # Utility functions (getPosts, formatDate)
```

## Configuration

All site content is managed in two files — no CMS or database required.

### `src/resources/content.tsx`

The primary file to edit. Contains:
- Person info (name, role, avatar, location, social links)
- Home page content (headline, subline, featured badge)
- About page (intro, work experience, studies, technical skills)
- Blog and Work section labels

### `src/resources/once-ui.config.ts`

Controls routing, display flags, and visual styles:
- Enable/disable pages via `routes`
- Toggle location, time, theme switcher display
- Adjust brand colors, border style, scaling

## Adding Content

### New Blog Post

Create a `.mdx` file in `src/app/blog/posts/`:

```yaml
---
title: Post Title
publishedAt: 2025-01-01
summary: Short description shown in listings
images:
  - /images/posts/cover.jpg
---
```

### New Project

Create a `.mdx` file in `src/app/work/projects/`:

```yaml
---
title: Project Name
publishedAt: 2025-01-01
summary: Short description
images:
  - /images/projects/cover.jpg
link: https://example.com      # optional external link
techStack:
  - name: React
    icon: react
tag: Featured                  # optional
---
```

## Environment Variables

| Variable | Description |
|---|---|
| `PASSWORD` | Password for protected routes (optional) |

## Deploy

Optimized for deployment on [Vercel](https://vercel.com). Push to main branch and Vercel will build automatically.

```bash
npm run build   # Verify build locally before deploying
```
