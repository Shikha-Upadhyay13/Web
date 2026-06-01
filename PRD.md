# Product Requirements Document — AirBrick Infra (Rebuild)

**Project:** Same-to-same rebuild of https://airbrickinfra.com, modernized into a clean, flexible, high-performance application.
**Owner:** krish@genieailabs.com
**Date:** 2026-06-01
**Status:** Draft v1 — approved direction, pending Phase 1 kickoff

---

## 1. Overview

### 1.1 What AirBrick Infra is
AirBrick Infra is a **commercial interior design & build company** (corporate offices, coworking spaces, retail/F&B) that positions itself as an **AI-enabled technology platform** — *"transforming the experience of creating, maintaining, and managing offices with technology, organizing the industry, creating standards and processes, and driving transparency."*

Tagline: **"Transforming Commercial Spaces with Creativity and Technology"**
Brand line: **"Building Relationships, One Conversation at a Time"**

The current production site is a **WordPress + Elementor** build, exported largely as static `.html` pages, with a separate **WordPress blog** on `blogs.airbrickinfra.com`. Two custom interactive tools (a 3D-render lead magnet and a 4-step cost estimator) are the standout features.

### 1.2 Goal of this project
Rebuild the entire site **near-identical in layout, content, and feature set first** (clear visual parity), then enhance. Deliver it as a **modern, clean, flexible, high-performance** product with a real backend, a headless CMS for content, and working interactive tools.

### 1.3 Success criteria
- Visual + content parity with the original across all pages (Phase-gated).
- Lighthouse ≥ 95 (Performance, Accessibility, Best Practices, SEO) on key pages.
- Core Web Vitals "Good": LCP < 2.5s, CLS < 0.1, INP < 200ms.
- All forms functional, leads captured to DB + notification, no dead CTAs.
- Content (projects, blog, jobs, services, testimonials) editable via CMS without code.
- Component-driven design system that's easy to restyle and extend.

---

## 2. Decisions (locked)

| Area | Decision |
|---|---|
| **Framework** | Next.js (App Router) + TypeScript |
| **Styling** | Tailwind CSS + design tokens; **shadcn/ui** (Radix primitives) for accessible, flexible components |
| **Backend** | Full backend — Next.js Route Handlers / Server Actions |
| **Database** | PostgreSQL (Neon or Supabase) via **Prisma** |
| **CMS** | Headless CMS + DB. **Recommended: Payload CMS 3** (runs natively inside Next.js, Postgres adapter) → single deploy, typed content, built-in admin. Fallback: custom admin on Prisma. |
| **Design fidelity** | Near-identical first, then enhance |
| **UI quality bar** | Clean, very flexible, high-performance (see §6) |

### Supporting libraries
- **Forms/validation:** react-hook-form + zod
- **Carousels/sliders:** Embla Carousel (lightweight) for hero + project galleries
- **Animation:** Framer Motion (used sparingly), CSS for the rest; scroll reveal via Intersection Observer
- **Email:** Resend (transactional lead notifications)
- **Images:** next/image with remote/optimized assets; AVIF/WebP
- **Analytics:** Vercel Analytics + (optional) GA4
- **Hosting:** Vercel + managed Postgres + object storage (S3/UploadThing) for uploads/render assets

---

## 3. Information Architecture / Sitemap

```
/                         Home
/about                    About Us
/technology               Technology
/services                 Services index (overview of all 6)
  /services/3d-visualization
  /services/product-supply-and-installation
  /services/project-and-mep-consultancy
  /services/design-consultancy
  /services/space-planning
  /services/design-and-build
/gallery                  Project gallery (36 cards)
/projects/[slug]          Project case-study detail (36 pages, CMS-driven)
/careers                  Careers listing
/careers/[slug]           Individual job + application
/blog                     Blog index (CMS or WP REST)
/blog/[slug]              Blog post
/contact                  Contact + office locator
/estimate                 Cost Estimation tool (also embedded on Home)
/free-3d-render           Free 3D Reception Render tool (also embedded on Home)
/vendor                   "Become a Vendor" / ecosystem (lead form)
/admin                    CMS admin (Payload) — protected
```

**Global components:** Header (with Services dropdown), Footer (Popular Links / Contact / Addresses + QR / Popular Blogs / Social), floating WhatsApp button, lead/CTA bands.

---

## 4. Page-by-Page Requirements

> Copy and structure below reflect the **actual current site** (analyzed page-by-page). Treat verbatim strings as the parity target; we may polish typos (flagged) during enhancement.

### 4.1 Home (`/`)
Section order (top → bottom):
1. **Hero** — Headline: *"DESIGN YOUR NEXT COMMERCIAL SPACE WITH THE MOST TRUSTED INTERIOR DESIGN FIRM"*. Quick-filter form: **Select Area** (`2000–5000`, `5000–10000`, `Above 10000`), **Space Type** (`Corporate Office`, `Co-working Space`, `Retail Space`), **Budget** (`10–20 Lac`, `25–50 Lac`, `Above 50 Lac`) + **Submit** → routes into estimator/lead.
2. **Stats counters** — *Happy Customers*, *Projects Completed*, *Square Feet Delivered* (animated; real values TBD — see §8 Open Items).
3. **Workplace value-props** — claims: *"33.75% performance improvement … 52% of employees"*, *"enhances performance & competitiveness by 96%"*, *"Only 4% think workplace design has no effect"*, *"20,000+ Design Options"*. Rotating one-liners (Where Style Meets Comfort, etc.).
4. **Free 3D Reception Render tool** (§4.13).
5. **Cost Estimation tool** — 4-step (§4.12).
6. **5-Step Process** — Initial Consultation (AI floor plan + mood board) → Project Assessment & Space Analysis → Design Concept Development → Design Presentation & Approval (3D walkthroughs) → Build & Execution.
7. **Services (9)** — Consultation, Space Planning, Concept Development, Design Development, 3D Visualization, Project Management, Furniture Selection & Procurement, Lighting Design, Custom Design Elements.
8. **Notable Projects** — grid of ~35 named projects (links to detail pages).
9. **Project Categories / Design Styles (6)** — Modern Minimalism, Rustic Revival, Modern Elegance, Bohemian Haven, Art Deco Extravaganza, Tropical Paradise.
10. **Testimonials** — carousel (Andritz, IND Money, Co-Offiz, Dassault Aviation, Vision Group — names/quotes in §4.x data).
11. **Locations served** — Pune, Noida, Gurgaon, UAE, Delhi, Bengaluru, Hyderabad, Ahmedabad, Mumbai + 5 office addresses.
12. **Media coverage** — Business News This Week, Economic Times, Realty Plus, EPC World, MGS Architecture, Magic Bricks, Times Property, Commercial Design India, SME World, Your Story.
13. **Footer**.

CTAs across page: Get Your Estimate, Contact Us, Submit, View Image, Download Image, Let's Talk, Schedule Meeting, Become a Vendor.

### 4.2 About (`/about`)
- Hero: **"Where Imagination Meets Interiors"** + intro paragraph (visionary design/renovation firm; commercial fitouts; tech + AI for space planning, furniture, materials, lighting).
- **Service categories (3 cards):** Corporate Offices, Co-Working Spaces, Retail Spaces (each with the verbatim descriptive paragraph).
- **Technology block:** "Discover How AirBrick is Utilising Technology" — 3D walkthroughs, **10,000+ design library**, real-time moodboard + layout generators.
- **Geographic presence:** "We are nearer to you than you think." — Delhi, Noida, Gurugram, Bengaluru, Mumbai, Hyderabad.
- **Office addresses + QR codes** (5 offices, §4.x data).
- Brand statement + tagline + footer.

### 4.3 Technology (`/technology`)
- Hero (video background): **"Where Technology Meets Design"** / *"Curated design options for your need"*.
- **3D Walkthroughs** feature block (two-column).
- **AB Design Library** feature block (curated materials/finishes/product samples).
- **Get in Touch** CTA band ("Have a project in mind?" → Let's Talk).
- Blog feed + footer.
- *(Typo to fix during enhancement: "3D walkthroughs of for models".)*

### 4.4–4.9 Service pages (6) — shared template
Template: **Hero (H1 = service name)** → **"Our [Service] Process"** (accordion, plus/minus) → **"Our [Service] Services include" / Benefits** (accordion) → **Team section** ("Meet the Masters of Interior Design" / "One Team, Infinite Possibilities", 3 role cards: Team Manager, CEO, CTO) → **Contact CTA band** (Contact Us / Let's Talk) → **"Welcome to World of AI"** blurb → Footer.

| Page | Slug | Process items | Benefits/Includes |
|---|---|---|---|
| 3D Visualization | `3d-visualization` | 6 steps (Conceptualization & Briefing → Space Measurement & Modeling → Material Selection & Texturing → Lighting & Visualization → Furniture & Object Placement → Rendering & Presentation) | 4 benefits (Enhanced Visualization, Improved Communication, Cost & Time Efficiency, Design Flexibility) |
| Product Supply & Installation | `product-supply-and-installation` | 6 steps (Needs Assessment → Product Selection → Sourcing & Procurement → Delivery & Logistics → Installation & Assembly → QA & Completion) | 4 includes (Extensive Product Selection, Efficient Procurement & Logistics, Professional Installation Team, QA & Customer Satisfaction) |
| Project & MEP Consultancy | `project-and-mep-consultancy` | 3 steps (Understanding Requirements → Tailored Recommendations → Implementation) | 4 services (Needs analysis, Site assessment, Design concept, Space planning) |
| Design Consultancy | `design-consultancy` | 6 steps (Initial Consultation → Concept Development → Design Refinement → Detailed Design Development → Design Documentation → Project Coordination & Execution) | 4 benefits (Efficient Project Management, Early Issue Identification, Versatile Design Solutions, Client-Centric Collaboration) |
| Space Planning | `space-planning` | 6 steps (Assessing Client Needs → Analyzing Space & Site → Defining Zones & Functions → Space Allocation & Circulation → Developing Layout Options → Furniture & Equipment Selection) | 4 benefits (Optimal Space Utilization, Improved Workflow & Productivity, Enhanced User Experience, Cost Optimization) |
| Design & Build | `design-and-build` | 3 steps, each a bulleted list (Understanding Business Goals → Listening to Ideas & Brand Identity → Considering Target Audience & Business Needs) | 4 pillars (Collaboration for Perfection, Craftsmanship & Materials, Exceptional Customer Service, Impact of Design on Business) |

Full verbatim copy for every accordion item is captured in the research notes and will be loaded as CMS seed data.

### 4.10 Gallery (`/gallery`)
- Hero: **"Our Gallery"** / *"Curated design options for your need"*.
- **3-column project-card grid**, 36 cards. Each card: image + hover overlay with project title (`<h5>`), links to `/projects/[slug]`.
- No filter tabs in original (enhancement opportunity: add category filters).
- CTA band ("Have a project in mind?" → Let's Talk).
- 36 projects (title → slug): IND Money Ahmedabad, Codinix, Vision, Dassault Aviation, ProcMart, Andritz, SPAC Pneumatic, Hana Bank, Emirates Gurgaon, India Accelerator Pune, Servspaces Noida, Blue Star Noida, CO-OFFIZ, IND Money, India Accelerator Surat, Dr Lime, TCS Noida, Teleflex, KCC House, Vui, ATS Kocoon, Doceree, 3 Horizon, Pash, We Work Gurgaon, CHW Forge, SGS Weather, Honda Gurgaon, Puri Residence, Vman, Nestle, Leela Jewellers, PS Group, Honda, Investis Digital, Opulence.

### 4.11 Project detail (`/projects/[slug]`)
- Service category label (e.g. "Design & Build") + **project title** (e.g. ANDRITZ).
- **Image carousel** (~5 images per project).
- **Description** paragraph.
- **Metadata:** Location, Area (sq ft), Industry/Type. (Year not present originally — optional enhancement.)
- CTA + footer. **Enhancement:** add prev/next project navigation (absent in original).

### 4.12 Cost Estimation Tool (`/estimate` + Home embed)
4-step wizard with Back/Next and progress (1/4 … 4/4):
- **Step 1 — Understanding Layout:** Industry (Co-working/Corporate), Shape (Rectangle/Square/L-Shape), Carpet Size (dropdown — option values TBD), Type (Open/Closed/Mixed/Suite), Workstations (dropdown — option values TBD).
- **Step 2 — Area Type:** Manager Cabins (1–4), MD/Boss Cabin (1–4), 4-Seater Meeting (1–4), 8-Seater Meeting (0/1), Conference Room (Yes/No).
- **Step 3 — Supporting Areas:** Reception (Yes/No), Washroom (Single/Separate/N/A), Food Place (Pantry/Cafeteria), Breakout/Lounge (100/200 sqft/N/A).
- **Step 4 — Your Details:** Name, Email, Phone → **Your Estimate**.
- **Output:** three tiers side-by-side — **Budget / Premium / Luxury** (image + title each), confirmation "We have got your details, our designer will contact you shortly." Buttons: Close, Schedule Meeting.
- **Backend:** define our own transparent **pricing-rules engine** (per-sqft base × tier multiplier × add-ons for cabins/rooms/areas). Store lead + computed estimate. (Original price logic is server/JS-hidden — see §8.)

### 4.13 Free 3D Reception Render (`/free-3d-render` + Home embed)
- Headline: **"Get 3D Render For Your Future Reception Free"**.
- Flow: **Upload logo** → progress/loader ("0% Completed") → lead-gate form (*"Just One Step Left: Fill Out The Form To Claim Your Free Render"*: Name, Email, Phone, City, Company) → **View Image** → output "Generated Render" + **Download Image**.
- **Backend (phased):** Phase A — capture logo + lead, queue for manual/templated render, email delivery. Phase B (enhancement) — automated render (logo composited onto reception template / future AI image generation).

### 4.14 Contact (`/contact`)
- Hero: **"Get in Touch"** / *"Got a project on your mind? Let's discuss about the details."*
- **Form (4 fields):** Full name (text), Email (auto-lowercased), Phone (10 digits, numeric-only), Message (textarea). Submit → success modal *"Successfully Sent !!"* / "We have received your query and our best expert reach out you shortly."
- **"Scan any QR to locate us!"** — 5 offices, each with QR + Google Maps link (no embedded iframe in original; **enhancement:** add embedded maps).
- Phone +91 8851228822, Email business@airbrickinfra.com, WhatsApp float.

### 4.15 Careers (`/careers`, `/careers/[slug]`)
- Hero: **"Join Our Talented Team"** + culture statement.
- **10 openings** (all Full-time, Gurugram): Manager – Sales & BD; Procurement Manager; Deputy GM (Business Development); Design Lead; Operations Lead; Project Manager; Project Lead – Design; 3D Visualizer; CAD Designer; Senior Interior Designer. Each → **View Job** detail page.
- **Enhancement:** add an application form (name, email, phone, role, resume upload) → stored as lead/applicant.

### 4.16 Blog (`/blog`, `/blog/[slug]`)
- Currently WordPress on `blogs.airbrickinfra.com`. Content clusters: **Fitout Finance**, Workspace/Office Design Trends, Sustainability, Company News/PR (~85+ posts).
- **Decision:** keep existing WordPress as source initially via **WP REST API** OR migrate posts into the CMS. Default: render `/blog` from our CMS with an importer that pulls existing posts (so the whole site is unified). Confirm in Phase 4.

### 4.17 Vendor / Ecosystem (`/vendor`)
- "Become a Vendor" lead form (vendor partnership). Captured to DB.

---

## 5. Shared Data (seed content)

### 5.1 Offices (5)
| Office | Address | QR/Map |
|---|---|---|
| Gurugram (HQ) | 3rd Floor, Plot 27-28, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122008 | maps.app.goo.gl link |
| Bengaluru | 6th Floor, Prestige Central, 36 Infantry Road, Shivaji Nagar, Bengaluru 560001 | ✓ |
| Noida | A116, Urbtech Trade Centre, Sector 132, Noida, UP 201304 | ✓ |
| Delhi | E49/5, 2nd Floor, Pocket D, Okhla Phase II, Okhla Industrial Estate, New Delhi 110020 | ✓ |
| Mumbai | 6th Floor, Bldg 11, Spectrum Tower, Chincholi Bunder Road, Mumbai 400064 | ✓ |

### 5.2 Contact + Social
- Phone: **+91 8851228822** · Email: **business@airbrickinfra.com** · WhatsApp float.
- Social: Facebook, YouTube, Instagram, LinkedIn, Threads.

### 5.3 Testimonials
- **Karl Quehenberger, MD — Andritz Hydro** — "The vibe of new office is absolutely energetic and quality is superb…"
- **IND Money** — "One-stop solution for office expansion… smooth onboarding."
- **Parag Gupta, Founder — Co-Offiz** — "Energetic vibe, superb quality, delivered on time."
- **Mr. Venkant Rao Posina — Dassault Aviation** — "Services in 3 months including certifications have been exceptional."
- **Deepak — Vision Group** — "Timely delivery, top quality, great support."

---

## 6. UI / Design System & Performance (clean · flexible · high-performance)

### 6.1 Design tokens
- **Theme:** modern corporate / tech-forward; light base with strong accent. *(Exact brand colors/fonts to be extracted precisely from the live CSS during Phase 1; preliminary read: navy/dark primary + warm orange accent, clean sans-serif.)*
- Centralized tokens (CSS variables + Tailwind theme): colors, typography scale, spacing, radius, shadows, z-index, breakpoints. Single source of truth so the whole site restyles from one place (**flexibility requirement**).
- Dark-mode-ready token structure (not necessarily shipped Phase 1).

### 6.2 Component library
Reusable primitives via shadcn/ui + custom: Button, Input/Select/Textarea, Accordion, Card, Carousel, Dialog/Modal, Tabs, Badge, Tooltip, Counter, Section wrapper, Nav, Footer, CTA band, ProjectCard, ServiceTemplate, Stepper (for estimator). Every page composes these — minimal bespoke markup.

### 6.3 Performance budget
- SSG/ISR for all marketing pages; dynamic only where needed (tools, admin).
- `next/image` everywhere, responsive sizes, AVIF/WebP, blur placeholders, lazy below the fold.
- Font: `next/font` self-hosted + subset; preload critical; no layout shift.
- Code-split heavy widgets (estimator, carousels) and load on view.
- Targets: Lighthouse ≥ 95; LCP < 2.5s; CLS < 0.1; INP < 200ms; JS on marketing pages kept lean.
- Accessibility: semantic HTML, keyboard-navigable accordions/dialogs, focus states, alt text, color-contrast AA.

---

## 7. Data Model (initial)

- **Lead** (id, type[contact|estimate|render|vendor|quickfilter], name, email, phone, city, company, message, payload JSON, source, createdAt)
- **EstimateRequest** (lead_id, inputs JSON, tier results JSON, status)
- **RenderRequest** (lead_id, logo_url, status, render_url)
- **Project** (slug, title, category, location, area_sqft, industry, description, images[], featured, order)
- **Service** (slug, name, hero, processItems[], benefits[], order)
- **Job** (slug, title, department, type, location, description, active)
- **Application** (job_id, name, email, phone, resume_url, message)
- **Testimonial** (name, role, company, quote, avatar)
- **Office** (name, address, qr_url, map_url, isHQ)
- **BlogPost** (slug, title, excerpt, cover, body, publishedAt, tags[]) — or proxied from WP.
- **MediaMention** (outlet, logo, url)

---

## 8. Open Items (confirm during build, from live render)
1. **Exact brand colors + font families** — extract from live CSS in Phase 1.
2. **Stat counter values** (Happy Customers / Projects / Sq Ft) — JS-injected; capture from live site or get from client.
3. **Estimator option values** (Carpet Size, Workstations lists) and **price ranges** per tier — hidden in JS/API; we'll define our own transparent pricing rules and confirm with stakeholder.
4. **3D-render automation** — manual/templated first; AI-generated render is a later enhancement.
5. **Blog** — proxy WP via REST vs. full migration into CMS.
6. **Project images** — source/replace 36×~5 images (license/quality); may re-shoot/placeholder.

---

## 9. Phase Plan

**Phase 0 — Foundation**
Scaffold Next.js + TS + Tailwind + shadcn/ui; design tokens extracted from live site; Prisma + Postgres; Payload CMS; base layout (Header, Footer, WhatsApp float, CTA band); SEO/meta/sitemap/robots; CI + deploy to Vercel.

**Phase 1 — Core marketing pages (parity)**
Home (all sections incl. counters, testimonials carousel, media, locations), About, Technology, Services index + 6 service pages (template + accordions), Contact (form → DB + email + success modal). Seed CMS with verbatim copy.

**Phase 2 — Portfolio**
Gallery grid (36 cards) + Project detail template with carousel + metadata, CMS-driven; prev/next nav enhancement.

**Phase 3 — Interactive tools**
Cost Estimation wizard (4 steps + pricing engine + tiered results + lead capture + Schedule Meeting). Free 3D Reception Render (upload → lead-gate → deliver). Home quick-filter wiring.

**Phase 4 — Careers & Blog**
Careers listing + job detail + application form + resume upload. Blog index/detail (WP REST or migrated). Vendor page.

**Phase 5 — Admin, polish, enhancements**
CMS admin hardening, lead dashboard, notifications (email/WhatsApp), analytics, gallery filters, embedded maps, accessibility + performance pass to hit budgets, optional dark mode.

**Phase 6 — QA, SEO, launch**
Cross-browser/responsive QA, Lighthouse/CWV verification, redirects/canonical, structured data, content review, launch.

---

## 10. Out of scope (for now)
- Real-time AI render generation (Phase B enhancement).
- Native mobile apps.
- Multi-language.
- Customer login/portal (unless requested).

---

*End of PRD v1. Next step: Phase 0 scaffold + precise design-token extraction from the live site.*
