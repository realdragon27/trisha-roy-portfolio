# Portfolio Website — Design Spec
**Date:** 2026-03-28
**Owner:** Trisha Roy
**Status:** Approved

---

## Overview

A single-page personal portfolio for Trisha Roy, targeting Business Analyst / Operations Analyst / BI Analyst roles. Built with React + Vite, Tailwind CSS, and Framer Motion. Deployed on Vercel.

**Colour palette:** `#0A192F` (navy background), `#00BFA6` (teal accent), `#CCD6F6` (light text), `#8892B0` (muted text)
**Font:** Poppins (Google Fonts)

---

## Architecture

**Pattern:** Component-per-section with a `data/` folder for all content.

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Experience.jsx
    Skills.jsx
    Projects.jsx
    ProjectModal.jsx
    Education.jsx
    Contact.jsx
    Footer.jsx
    StatCounter.jsx        ← reusable animated counter
    CarouselPlaceholder.jsx ← dashboard screenshot carousel
  data/
    experience.js
    skills.js
    projects.js
    education.js
    stats.js
  App.jsx
  main.jsx
  index.css
public/
  Trisha_Roy_CV.pdf        ← placeholder PDF
```

All text content lives in `data/` as plain JS objects — no JSX edits needed to update copy.

---

## Sections

### 1. Sticky Navbar
- "Trisha Roy" logo left; nav links centre/right: About, Experience, Skills, Projects, Education, Contact
- Teal "Download CV" button → `/public/Trisha_Roy_CV.pdf` download
- On scroll: background becomes semi-transparent navy with blur (`backdrop-filter`)
- Mobile: hamburger menu, full-screen nav drawer

### 2. Hero
- **Left:** Location badge (Southampton UK), `h1` "Operations & Business Analyst", tagline, two CTA buttons (Get in Touch → #contact, View Projects → #projects), LinkedIn + email icon links
- **Right:** Carousel placeholder — 5 slides labelled "Dashboard coming soon", manual prev/next arrows + dot indicators, click-to-zoom lightbox (Framer Motion scale animation)
- Animated "5+ Years Experience" badge (pulse ring effect)
- Scroll-down indicator arrow

### 3. About
- Two-column bullets (Professional / Personal)
- 4 achievement badge cards (icon + label): Process Improvement, BI Dashboards Built, Sectors Worked, Stakeholder Teams
- Dark-stripe animated stats banner: 5+ Years Experience | 3 Sectors | 10+ Dashboards Built | 50+ Stakeholders Served
  - `StatCounter` component: counts up from 0 on scroll-into-view using Framer Motion + `useInView`

### 4. Experience Timeline
- Vertical timeline with alternating left/right cards on desktop, single-column on mobile
- Each card: company name, role, date range, bullet points of key work
- Three entries: Verra Mobility UK (2022–Present), NHS (placeholder), HPE (placeholder)
- Teal timeline dot + connecting line

### 5. Skills (tabbed)
- Two tabs: "Operations & Process" | "Data & BI Tools"
- Skill pills with hover teal highlight
- Active tab underline animation (Framer Motion `layoutId`)

### 6. Projects
- 4-card responsive grid (2×2 desktop, 1-col mobile)
- Each card: title, tag (tool stack), company badge, placeholder metrics row, tools used
- **Click → ProjectModal:** full-screen overlay with title, description, metrics, tools, placeholder screenshot area, GitHub/Live link placeholders
- Modal closes on backdrop click or Escape key

### 7. Education
- Two placeholder cards: Degree (fill later), Certifications (fill later)
- Card style consistent with project cards

### 8. Contact
- Two-column: contact info left (email, location, LinkedIn), form right
- EmailJS integration — `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY` env vars (placeholder values in `.env.example`)
- Form fields: Name, Email, Message; Send button with loading state
- Success/error toast notification

### 9. Footer
- "© 2025 Trisha Roy. All rights reserved." | "Built with React"

---

## Animations (Framer Motion)
- **Fade + slide up** on section entry (scroll-triggered `useInView`)
- **StatCounter** counts from 0 to target on first view
- **Carousel** swipe/slide with `AnimatePresence`
- **ProjectModal** scale + fade in/out
- **Skills tab** underline slides with `layoutId`
- **Navbar** shrinks slightly on scroll

---

## Technical Stack
| Concern | Choice |
|---|---|
| Bundler | Vite |
| Package manager | Bun |
| Styling | Tailwind CSS v3 |
| Animation | Framer Motion |
| Contact form | EmailJS (`@emailjs/browser`) |
| Fonts | Google Fonts (Poppins) via `@fontsource/poppins` |
| Deployment | Vercel (zero-config) |

---

## Files to Create
- `README.md` with local dev + Vercel deploy instructions
- `.env.example` with EmailJS placeholder keys
- `public/Trisha_Roy_CV.pdf` — 1-page placeholder PDF
- `vercel.json` — not needed (Vite detected automatically)

---

## Out of Scope
- Blog / CMS
- Dark/light toggle (dark is the only theme)
- Authentication
- Backend API
