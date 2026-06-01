# AirBrick Infra — Rebuild

A modern, clean, high-performance rebuild of [airbrickinfra.com](https://airbrickinfra.com) — a commercial interior design & build company positioned as an AI-enabled technology platform.

## Status
🚧 In active development — built phase by phase. See [`PRD.md`](./PRD.md) for the full product spec, sitemap, page-by-page requirements, data model, and phase plan.

## Tech stack
- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS + design tokens + shadcn/ui (Radix primitives)
- **Backend:** Next.js Route Handlers / Server Actions
- **Database:** PostgreSQL + Prisma
- **CMS:** Headless (Payload CMS) for projects, services, blog, jobs, testimonials
- **Email:** Resend · **Hosting:** Vercel

## Goals
- Near-identical parity with the original, then enhance
- Clean, flexible, token-driven design system
- High performance: Lighthouse ≥ 95, LCP < 2.5s, CLS < 0.1, INP < 200ms

## Build phases
| Phase | Scope |
|---|---|
| 0 | Foundation — scaffold, design tokens, DB, CMS, layout shell |
| 1 | Core marketing pages (Home, About, Technology, 6 service pages, Contact) |
| 2 | Portfolio (Gallery + 36 project detail pages) |
| 3 | Interactive tools (Cost Estimator, Free 3D Render) |
| 4 | Careers & Blog & Vendor |
| 5 | Admin, lead dashboard, notifications, polish |
| 6 | QA, SEO, launch |
