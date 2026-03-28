# Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete, deploy-ready single-page portfolio website for Trisha Roy using React + Vite, Tailwind CSS, and Framer Motion.

**Architecture:** Component-per-section pattern with all content extracted to `src/data/` JS files. Each section is an isolated React component that imports its own data. Framer Motion handles all animations. EmailJS handles contact form submission.

**Tech Stack:** React 18, Vite, Bun, Tailwind CSS v3, Framer Motion, @emailjs/browser, @fontsource/poppins, Vitest + React Testing Library (smoke tests)

---

## File Map

| File | Responsibility |
|------|---------------|
| `src/main.jsx` | React root mount |
| `src/App.jsx` | Section assembly, smooth scroll anchor IDs |
| `src/index.css` | Tailwind directives, custom scrollbar, global resets |
| `tailwind.config.js` | Custom colours, font family |
| `src/data/experience.js` | Timeline entries |
| `src/data/skills.js` | Skill pill arrays per tab |
| `src/data/projects.js` | Project card + modal content |
| `src/data/education.js` | Degree + cert placeholders |
| `src/data/stats.js` | Animated counter targets |
| `src/components/Navbar.jsx` | Sticky nav, hamburger, CV download |
| `src/components/Hero.jsx` | Split layout, CTAs, badge |
| `src/components/CarouselPlaceholder.jsx` | 5-slide carousel with zoom lightbox |
| `src/components/About.jsx` | Bullets, badge cards, stats banner |
| `src/components/StatCounter.jsx` | Scroll-triggered animated number counter |
| `src/components/Experience.jsx` | Vertical alternating timeline |
| `src/components/Skills.jsx` | Tabbed skill pills |
| `src/components/Projects.jsx` | 2×2 card grid |
| `src/components/ProjectModal.jsx` | Full-screen modal overlay |
| `src/components/Education.jsx` | Degree + cert placeholder cards |
| `src/components/Contact.jsx` | Two-column layout + EmailJS form |
| `src/components/Footer.jsx` | Copyright line |
| `public/Trisha_Roy_CV.pdf` | Placeholder PDF |
| `.env.example` | EmailJS key placeholders |
| `README.md` | Local dev + Vercel deploy instructions |

---

### Task 1: Scaffold project

**Files:**
- Create: `package.json`, `vite.config.js`, `tailwind.config.js`, `postcss.config.js`, `index.html`, `src/main.jsx`, `src/App.jsx`, `src/index.css`

- [ ] **Step 1: Initialise Vite + React project with Bun**

```bash
cd "C:/Users/Trisha Roy/Documents/Claude/Projects/Portfolio"
bun create vite . --template react
```

When prompted about non-empty directory, choose to ignore/overwrite (the only existing content is `docs/`).

- [ ] **Step 2: Install all dependencies in one shot**

```bash
bun add framer-motion @emailjs/browser @fontsource/poppins
bun add -d tailwindcss postcss autoprefixer vitest @vitest/ui jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
bunx tailwindcss init -p
```

- [ ] **Step 3: Configure Tailwind**

Replace `tailwind.config.js` with:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A192F',
          light: '#112240',
          lighter: '#1D3461',
        },
        teal: {
          DEFAULT: '#00BFA6',
          dark: '#009E8C',
        },
        slate: {
          light: '#CCD6F6',
          muted: '#8892B0',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

- [ ] **Step 4: Configure Vite for tests**

Replace `vite.config.js` with:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.js',
  },
})
```

- [ ] **Step 5: Create test setup file**

Create `src/test/setup.js`:

```js
import '@testing-library/jest-dom'
```

- [ ] **Step 6: Write global CSS**

Replace `src/index.css` with:

```css
@import '@fontsource/poppins/400.css';
@import '@fontsource/poppins/500.css';
@import '@fontsource/poppins/600.css';
@import '@fontsource/poppins/700.css';

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  * {
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    background-color: #0A192F;
    color: #CCD6F6;
    font-family: 'Poppins', sans-serif;
    margin: 0;
  }
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #0A192F;
  }
  ::-webkit-scrollbar-thumb {
    background: #00BFA6;
    border-radius: 3px;
  }
}
```

- [ ] **Step 7: Write smoke test**

Create `src/test/App.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(document.body).toBeTruthy()
  })
})
```

- [ ] **Step 8: Write minimal App.jsx (will be expanded in Task 13)**

Replace `src/App.jsx` with:

```jsx
export default function App() {
  return <div className="font-poppins">Portfolio</div>
}
```

- [ ] **Step 9: Update index.html**

Replace `<title>` with `<title>Trisha Roy | Operations & Business Analyst</title>` and ensure `<div id="root">` is present.

- [ ] **Step 10: Run tests**

```bash
bun run test --run
```

Expected: 1 test passes.

- [ ] **Step 11: Verify dev server starts**

```bash
bun run dev
```

Expected: `http://localhost:5173` shows "Portfolio" on navy background.

- [ ] **Step 12: Create placeholder CV PDF**

```bash
# Create a minimal PDF placeholder
echo "%PDF-1.4
1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj
2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj
3 0 obj<</Type/Page/MediaBox[0 0 612 792]/Parent 2 0 R/Resources<<>>>>endobj
xref
0 4
0000000000 65535 f
0000000009 00000 n
0000000058 00000 n
0000000115 00000 n
trailer<</Size 4/Root 1 0 R>>
startxref
190
%%EOF" > public/Trisha_Roy_CV.pdf
```

- [ ] **Step 13: Create .env.example**

Create `.env.example`:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Also create `.env` with the same content (placeholder values — will not actually send email until real keys are added).

- [ ] **Step 14: Commit**

```bash
git init
git add -A
git commit -m "feat: scaffold Vite + React + Tailwind + Framer Motion"
```

---

### Task 2: Data files

**Files:**
- Create: `src/data/experience.js`, `src/data/skills.js`, `src/data/projects.js`, `src/data/education.js`, `src/data/stats.js`

- [ ] **Step 1: Create experience data**

Create `src/data/experience.js`:

```js
export const experiences = [
  {
    id: 1,
    company: 'Verra Mobility UK',
    role: 'Operations Support Specialist',
    period: '2022 – Present',
    bullets: [
      'Operational reporting and performance dashboards using Power BI and Excel',
      'Process documentation and SOP development for operational workflows',
      'Root cause analysis and data-driven problem resolution',
      'Cross-functional stakeholder management and requirements gathering',
    ],
  },
  {
    id: 2,
    company: 'NHS',
    role: 'Role placeholder — add your title here',
    period: 'Dates placeholder',
    bullets: [
      'Data reporting and analysis to support clinical operations',
      'Process improvement initiatives across operational teams',
      'Dashboard development and KPI monitoring',
    ],
  },
  {
    id: 3,
    company: 'HPE (Hewlett Packard Enterprise)',
    role: 'Role placeholder — add your title here',
    period: 'Dates placeholder',
    bullets: [
      'Operations support and service delivery management',
      'Data analysis and reporting for operational metrics',
      'Stakeholder communication and cross-team coordination',
    ],
  },
]
```

- [ ] **Step 2: Create skills data**

Create `src/data/skills.js`:

```js
export const skillTabs = [
  {
    id: 'operations',
    label: 'Operations & Process',
    skills: [
      'Process Optimisation',
      'SLA Management',
      'Root Cause Analysis',
      'Stakeholder Management',
      'Requirements Gathering',
      'Process Documentation',
      'JIRA',
      'ServiceNow',
    ],
  },
  {
    id: 'data',
    label: 'Data & BI Tools',
    skills: [
      'Power BI',
      'Advanced Excel',
      'SQL',
      'Tableau',
      'Data Visualisation',
      'Reporting & Dashboards',
      'Python (basic)',
      'Microsoft Office Suite',
    ],
  },
]
```

- [ ] **Step 3: Create projects data**

Create `src/data/projects.js`:

```js
export const projects = [
  {
    id: 1,
    title: 'Operations Performance Dashboard',
    type: 'Power BI',
    company: 'Verra Mobility',
    description:
      'Interactive Power BI dashboard tracking key operational metrics including SLA compliance, ticket volumes, and resolution times. Enabled management to make data-driven decisions in real time.',
    metrics: [
      { label: 'Metric 1', value: 'Placeholder' },
      { label: 'Metric 2', value: 'Placeholder' },
      { label: 'Metric 3', value: 'Placeholder' },
    ],
    tools: ['Power BI', 'SQL', 'Excel'],
    githubUrl: null,
    liveUrl: null,
  },
  {
    id: 2,
    title: 'Process Improvement Tracker',
    type: 'Excel / Power BI',
    company: 'NHS',
    description:
      'End-to-end tracker for process improvement initiatives, capturing baselines, targets, actions, and outcomes. Provided visibility across operational teams on improvement progress.',
    metrics: [
      { label: 'Metric 1', value: 'Placeholder' },
      { label: 'Metric 2', value: 'Placeholder' },
      { label: 'Metric 3', value: 'Placeholder' },
    ],
    tools: ['Excel', 'Power BI'],
    githubUrl: null,
    liveUrl: null,
  },
  {
    id: 3,
    title: 'SLA Reporting Dashboard',
    type: 'Power BI',
    company: 'Verra Mobility',
    description:
      'Automated SLA reporting dashboard replacing manual weekly reports. Reduced reporting time significantly while increasing accuracy and stakeholder confidence in the data.',
    metrics: [
      { label: 'Metric 1', value: 'Placeholder' },
      { label: 'Metric 2', value: 'Placeholder' },
      { label: 'Metric 3', value: 'Placeholder' },
    ],
    tools: ['Power BI', 'SQL'],
    githubUrl: null,
    liveUrl: null,
  },
  {
    id: 4,
    title: 'Data Quality Analysis',
    type: 'SQL / Excel',
    company: 'HPE',
    description:
      'Systematic data quality audit identifying inconsistencies and gaps across operational datasets. Produced actionable recommendations that improved downstream reporting accuracy.',
    metrics: [
      { label: 'Metric 1', value: 'Placeholder' },
      { label: 'Metric 2', value: 'Placeholder' },
      { label: 'Metric 3', value: 'Placeholder' },
    ],
    tools: ['SQL', 'Excel', 'Python'],
    githubUrl: null,
    liveUrl: null,
  },
]
```

- [ ] **Step 4: Create education data**

Create `src/data/education.js`:

```js
export const education = [
  {
    id: 1,
    type: 'degree',
    institution: 'Institution placeholder — add your university here',
    qualification: 'Degree placeholder — add your qualification here',
    period: 'Years placeholder',
    detail: 'Add any relevant modules, dissertation topic, or grade here.',
  },
]

export const certifications = [
  {
    id: 1,
    name: 'Certification placeholder — e.g. Microsoft PL-300 Power BI',
    issuer: 'Issuer placeholder',
    year: 'Year placeholder',
  },
]
```

- [ ] **Step 5: Create stats data**

Create `src/data/stats.js`:

```js
export const heroStats = [
  { value: 5, suffix: '+', label: 'Years Experience' },
]

export const aboutStats = [
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 3, suffix: '', label: 'Sectors (Verra / NHS / HPE)' },
  { value: 10, suffix: '+', label: 'Dashboards Built' },
  { value: 50, suffix: '+', label: 'Stakeholders Served' },
]

export const aboutBadges = [
  { icon: '⚙️', label: 'Process Improvement' },
  { icon: '📊', label: 'BI Dashboards Built' },
  { icon: '🏢', label: 'Sectors Worked' },
  { icon: '🤝', label: 'Stakeholder Teams' },
]
```

- [ ] **Step 6: Commit**

```bash
git add src/data/
git commit -m "feat: add all content data files"
```

---

### Task 3: StatCounter component

**Files:**
- Create: `src/components/StatCounter.jsx`, `src/test/StatCounter.test.jsx`

- [ ] **Step 1: Write test**

Create `src/test/StatCounter.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import StatCounter from '../components/StatCounter'

describe('StatCounter', () => {
  it('renders the suffix and label', () => {
    render(<StatCounter value={5} suffix="+" label="Years Experience" />)
    expect(screen.getByText('Years Experience')).toBeInTheDocument()
    expect(screen.getByText('+')).toBeTruthy()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
bun run test --run src/test/StatCounter.test.jsx
```

Expected: FAIL — component does not exist.

- [ ] **Step 3: Implement StatCounter**

Create `src/components/StatCounter.jsx`:

```jsx
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function StatCounter({ value, suffix = '', label, className = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 1800
    const step = duration / value
    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= value) clearInterval(timer)
    }, step)
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <div className="text-4xl font-bold text-teal">
        {count}
        <span>{suffix}</span>
      </div>
      <div className="text-sm text-slate-muted mt-1">{label}</div>
    </div>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
bun run test --run src/test/StatCounter.test.jsx
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/components/StatCounter.jsx src/test/StatCounter.test.jsx
git commit -m "feat: add animated StatCounter component"
```

---

### Task 4: Navbar component

**Files:**
- Create: `src/components/Navbar.jsx`

- [ ] **Step 1: Write smoke test**

Create `src/test/Navbar.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Navbar from '../components/Navbar'

describe('Navbar', () => {
  it('renders name and CV download link', () => {
    render(<Navbar />)
    expect(screen.getByText('Trisha Roy')).toBeInTheDocument()
    expect(screen.getByText('Download CV')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
bun run test --run src/test/Navbar.test.jsx
```

Expected: FAIL.

- [ ] **Step 3: Implement Navbar**

Create `src/components/Navbar.jsx`:

```jsx
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-xl font-bold text-teal tracking-wide">
          Trisha Roy
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-muted hover:text-teal transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Trisha_Roy_CV.pdf"
            download
            className="ml-2 px-4 py-2 border border-teal text-teal rounded hover:bg-teal hover:text-navy transition-all text-sm font-semibold"
          >
            Download CV
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-teal transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-teal transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-teal transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-light border-t border-navy-lighter"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-muted hover:text-teal transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/Trisha_Roy_CV.pdf"
                download
                className="px-4 py-2 border border-teal text-teal rounded text-center hover:bg-teal hover:text-navy transition-all font-semibold"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
bun run test --run src/test/Navbar.test.jsx
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/components/Navbar.jsx src/test/Navbar.test.jsx
git commit -m "feat: add sticky responsive Navbar"
```

---

### Task 5: CarouselPlaceholder component

**Files:**
- Create: `src/components/CarouselPlaceholder.jsx`

- [ ] **Step 1: Write smoke test**

Create `src/test/CarouselPlaceholder.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CarouselPlaceholder from '../components/CarouselPlaceholder'

describe('CarouselPlaceholder', () => {
  it('renders slide label and navigation dots', () => {
    render(<CarouselPlaceholder />)
    expect(screen.getByText('Dashboard coming soon')).toBeInTheDocument()
    // 5 dots
    const dots = document.querySelectorAll('[data-testid="carousel-dot"]')
    expect(dots.length).toBe(5)
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
bun run test --run src/test/CarouselPlaceholder.test.jsx
```

Expected: FAIL.

- [ ] **Step 3: Implement CarouselPlaceholder**

Create `src/components/CarouselPlaceholder.jsx`:

```jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SLIDES = Array.from({ length: 5 }, (_, i) => ({ id: i, label: 'Dashboard coming soon' }))

export default function CarouselPlaceholder() {
  const [current, setCurrent] = useState(0)
  const [zoomed, setZoomed] = useState(false)
  const [direction, setDirection] = useState(1)

  const goTo = (index, dir) => {
    setDirection(dir)
    setCurrent(index)
  }

  const prev = () => goTo((current - 1 + SLIDES.length) % SLIDES.length, -1)
  const next = () => goTo((current + 1) % SLIDES.length, 1)

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  }

  return (
    <>
      {/* Carousel */}
      <div className="relative w-full rounded-xl overflow-hidden bg-navy-light border border-navy-lighter aspect-video select-none">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="absolute inset-0 flex flex-col items-center justify-center cursor-zoom-in"
            onClick={() => setZoomed(true)}
          >
            {/* Placeholder graphic */}
            <div className="w-16 h-16 rounded-full border-2 border-teal/30 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-teal/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <p className="text-slate-muted text-sm font-medium">Dashboard coming soon</p>
            <p className="text-slate-muted/50 text-xs mt-1">Click to zoom</p>
            <p className="text-teal/40 text-xs mt-3">{current + 1} / {SLIDES.length}</p>
          </motion.div>
        </AnimatePresence>

        {/* Prev / Next buttons */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-navy/70 flex items-center justify-center hover:bg-teal/20 transition-colors"
          aria-label="Previous slide"
        >
          <svg className="w-4 h-4 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-navy/70 flex items-center justify-center hover:bg-teal/20 transition-colors"
          aria-label="Next slide"
        >
          <svg className="w-4 h-4 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            data-testid="carousel-dot"
            onClick={() => goTo(i, i > current ? 1 : -1)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? 'bg-teal w-4' : 'bg-slate-muted/40'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Zoom lightbox */}
      <AnimatePresence>
        {zoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center cursor-zoom-out"
            onClick={() => setZoomed(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="w-full max-w-3xl mx-4 aspect-video bg-navy-light rounded-xl flex flex-col items-center justify-center border border-teal/20"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-slate-muted text-lg font-medium">Dashboard coming soon</p>
              <p className="text-slate-muted/50 text-sm mt-2">Slide {current + 1} of {SLIDES.length}</p>
              <button
                onClick={() => setZoomed(false)}
                className="mt-6 px-4 py-2 border border-teal text-teal rounded hover:bg-teal hover:text-navy transition-all text-sm"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
```

- [ ] **Step 4: Run tests**

```bash
bun run test --run src/test/CarouselPlaceholder.test.jsx
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/components/CarouselPlaceholder.jsx src/test/CarouselPlaceholder.test.jsx
git commit -m "feat: add dashboard carousel with zoom lightbox"
```

---

### Task 6: Hero section

**Files:**
- Create: `src/components/Hero.jsx`

- [ ] **Step 1: Write smoke test**

Create `src/test/Hero.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Hero from '../components/Hero'

describe('Hero', () => {
  it('renders name, title and CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByText('Operations & Business Analyst')).toBeInTheDocument()
    expect(screen.getByText('Get in Touch')).toBeInTheDocument()
    expect(screen.getByText('View Projects')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
bun run test --run src/test/Hero.test.jsx
```

Expected: FAIL.

- [ ] **Step 3: Implement Hero**

Create `src/components/Hero.jsx`:

```jsx
import { motion } from 'framer-motion'
import CarouselPlaceholder from './CarouselPlaceholder'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20 pb-12 px-6 max-w-6xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Left */}
        <div>
          {/* Location badge */}
          <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal/30 text-teal text-sm mb-6">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            Southampton, UK
          </motion.div>

          {/* Title */}
          <motion.h1 {...fadeUp(0.2)} className="text-4xl md:text-5xl font-bold text-slate-light leading-tight mb-4">
            Operations &{' '}
            <span className="text-teal">Business Analyst</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p {...fadeUp(0.3)} className="text-slate-muted text-lg mb-8 leading-relaxed">
            Transforming operational data into strategic decisions.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4 mb-8">
            <a
              href="#contact"
              className="px-6 py-3 bg-teal text-navy font-semibold rounded hover:bg-teal-dark transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-teal text-teal font-semibold rounded hover:bg-teal hover:text-navy transition-all"
            >
              View Projects
            </a>
          </motion.div>

          {/* Icons */}
          <motion.div {...fadeUp(0.5)} className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-muted hover:text-teal transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:trishachitradip@gmail.com"
              aria-label="Email"
              className="text-slate-muted hover:text-teal transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>

            {/* Experience badge */}
            <div className="ml-4 relative inline-flex items-center justify-center">
              <span className="absolute inline-flex h-full w-full rounded-full bg-teal/20 animate-ping opacity-60" />
              <span className="relative px-3 py-1 rounded-full bg-teal/10 border border-teal/30 text-teal text-sm font-semibold">
                5+ Years Experience
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right — Carousel */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <CarouselPlaceholder />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-teal/50 hover:text-teal transition-colors hidden md:block"
        aria-label="Scroll down"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.a>
    </section>
  )
}
```

- [ ] **Step 4: Run test**

```bash
bun run test --run src/test/Hero.test.jsx
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/components/Hero.jsx src/test/Hero.test.jsx
git commit -m "feat: add Hero section with split layout and carousel"
```

---

### Task 7: About section

**Files:**
- Create: `src/components/About.jsx`

- [ ] **Step 1: Write smoke test**

Create `src/test/About.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import About from '../components/About'

describe('About', () => {
  it('renders section heading and professional bullets', () => {
    render(<About />)
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText(/Process optimisation specialist/i)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
bun run test --run src/test/About.test.jsx
```

Expected: FAIL.

- [ ] **Step 3: Implement About**

Create `src/components/About.jsx`:

```jsx
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import StatCounter from './StatCounter'
import { aboutStats, aboutBadges } from '../data/stats'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const professionalBullets = [
  'Process optimisation specialist with experience across private and public sector',
  'Data-driven operations reporting using Power BI and Advanced Excel',
  'Cross-functional stakeholder management and requirements gathering',
  'Power BI & Excel dashboard development and automation',
  'NHS & private sector experience delivering measurable improvements',
]

const personalBullets = [
  'Southampton based, open to hybrid and remote opportunities',
  'Passionate about continuous improvement and operational excellence',
  'Love turning messy data into clear, actionable insights',
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-teal text-sm font-semibold tracking-widest uppercase mb-2">Get to know me</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-light">About Me</h2>
      </motion.div>

      {/* Bullets grid */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Professional */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-teal font-semibold mb-4 text-lg">Professional</h3>
          <ul className="space-y-3">
            {professionalBullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-slate-muted">
                <span className="text-teal mt-1 shrink-0">▹</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Personal */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-teal font-semibold mb-4 text-lg">Personal</h3>
          <ul className="space-y-3 mb-8">
            {personalBullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-slate-muted">
                <span className="text-teal mt-1 shrink-0">▹</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {/* Badge cards */}
          <div className="grid grid-cols-2 gap-4">
            {aboutBadges.map((badge, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="bg-navy-light border border-navy-lighter rounded-lg p-4 text-center hover:border-teal/40 transition-colors"
              >
                <div className="text-2xl mb-2">{badge.icon}</div>
                <div className="text-slate-light text-sm font-medium">{badge.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Animated stats banner */}
      <div
        ref={ref}
        className="bg-navy-light border border-navy-lighter rounded-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {aboutStats.map((stat, i) => (
          <StatCounter
            key={i}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test**

```bash
bun run test --run src/test/About.test.jsx
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/components/About.jsx src/test/About.test.jsx
git commit -m "feat: add About section with bullets, badges, and stats banner"
```

---

### Task 8: Experience timeline

**Files:**
- Create: `src/components/Experience.jsx`

- [ ] **Step 1: Write smoke test**

Create `src/test/Experience.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Experience from '../components/Experience'

describe('Experience', () => {
  it('renders Verra Mobility entry', () => {
    render(<Experience />)
    expect(screen.getByText('Verra Mobility UK')).toBeInTheDocument()
    expect(screen.getByText('2022 – Present')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
bun run test --run src/test/Experience.test.jsx
```

Expected: FAIL.

- [ ] **Step 3: Implement Experience**

Create `src/components/Experience.jsx`:

```jsx
import { motion } from 'framer-motion'
import { experiences } from '../data/experience'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-navy-light">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-teal text-sm font-semibold tracking-widest uppercase mb-2">My journey</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-light">Experience</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-navy-lighter md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-6 ${
                  i % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full bg-teal border-2 border-navy-light -translate-x-1.5 md:-translate-x-1.5" />

                {/* Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-navy border border-navy-lighter rounded-xl p-6 hover:border-teal/30 transition-colors">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-slate-light font-bold text-lg">{exp.company}</h3>
                      <span className="text-teal text-sm font-medium whitespace-nowrap shrink-0">{exp.period}</span>
                    </div>
                    <p className="text-teal/80 text-sm font-medium mb-4">{exp.role}</p>
                    <ul className="space-y-2">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex gap-2 text-slate-muted text-sm">
                          <span className="text-teal shrink-0 mt-0.5">▹</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test**

```bash
bun run test --run src/test/Experience.test.jsx
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/components/Experience.jsx src/test/Experience.test.jsx
git commit -m "feat: add alternating Experience timeline"
```

---

### Task 9: Skills section

**Files:**
- Create: `src/components/Skills.jsx`

- [ ] **Step 1: Write smoke test**

Create `src/test/Skills.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Skills from '../components/Skills'

describe('Skills', () => {
  it('renders both tab labels', () => {
    render(<Skills />)
    expect(screen.getByText('Operations & Process')).toBeInTheDocument()
    expect(screen.getByText('Data & BI Tools')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
bun run test --run src/test/Skills.test.jsx
```

Expected: FAIL.

- [ ] **Step 3: Implement Skills**

Create `src/components/Skills.jsx`:

```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { skillTabs } from '../data/skills'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillTabs[0].id)
  const current = skillTabs.find((t) => t.id === activeTab)

  return (
    <section id="skills" className="py-24 px-6 max-w-4xl mx-auto">
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <p className="text-teal text-sm font-semibold tracking-widest uppercase mb-2">What I work with</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-light">Skills</h2>
      </motion.div>

      {/* Tabs */}
      <div className="flex justify-center mb-10">
        <div className="relative flex gap-1 bg-navy-light rounded-lg p-1 border border-navy-lighter">
          {skillTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-5 py-2 text-sm font-medium rounded-md transition-colors z-10 ${
                tab.id === activeTab ? 'text-navy' : 'text-slate-muted hover:text-slate-light'
              }`}
            >
              {tab.id === activeTab && (
                <motion.div
                  layoutId="tab-bg"
                  className="absolute inset-0 bg-teal rounded-md"
                  style={{ zIndex: -1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Skill pills */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-wrap justify-center gap-3"
      >
        {current.skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.04 }}
            className="px-4 py-2 rounded-full border border-teal/30 text-slate-light text-sm font-medium hover:border-teal hover:text-teal hover:bg-teal/5 transition-all cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </section>
  )
}
```

- [ ] **Step 4: Run test**

```bash
bun run test --run src/test/Skills.test.jsx
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/components/Skills.jsx src/test/Skills.test.jsx
git commit -m "feat: add tabbed Skills section with animated pills"
```

---

### Task 10: ProjectModal component

**Files:**
- Create: `src/components/ProjectModal.jsx`

- [ ] **Step 1: Write smoke test**

Create `src/test/ProjectModal.test.jsx`:

```jsx
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ProjectModal from '../components/ProjectModal'
import { projects } from '../data/projects'

describe('ProjectModal', () => {
  it('renders project title and closes on button click', () => {
    const onClose = vi.fn()
    render(<ProjectModal project={projects[0]} onClose={onClose} />)
    expect(screen.getByText('Operations Performance Dashboard')).toBeInTheDocument()
    fireEvent.click(screen.getByLabelText('Close modal'))
    expect(onClose).toHaveBeenCalledOnce()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
bun run test --run src/test/ProjectModal.test.jsx
```

Expected: FAIL.

- [ ] **Step 3: Implement ProjectModal**

Create `src/components/ProjectModal.jsx`:

```jsx
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ProjectModal({ project, onClose }) {
  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
          className="bg-navy-light border border-navy-lighter rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-start justify-between p-6 border-b border-navy-lighter">
            <div>
              <span className="text-teal text-xs font-semibold tracking-widest uppercase">{project.type}</span>
              <h2 className="text-xl font-bold text-slate-light mt-1">{project.title}</h2>
              <span className="text-slate-muted text-sm">{project.company}</span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="text-slate-muted hover:text-teal transition-colors ml-4 shrink-0"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="p-6 space-y-6">
            {/* Screenshot placeholder */}
            <div className="w-full aspect-video bg-navy rounded-xl border border-navy-lighter flex items-center justify-center">
              <div className="text-center text-slate-muted/50">
                <svg className="w-12 h-12 mx-auto mb-2 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm">Screenshot coming soon</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-muted leading-relaxed">{project.description}</p>

            {/* Metrics */}
            <div>
              <h3 className="text-slate-light font-semibold mb-3">Key Metrics</h3>
              <div className="grid grid-cols-3 gap-3">
                {project.metrics.map((m, i) => (
                  <div key={i} className="bg-navy rounded-lg p-3 text-center border border-navy-lighter">
                    <div className="text-teal font-bold text-lg">{m.value}</div>
                    <div className="text-slate-muted text-xs mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-slate-light font-semibold mb-3">Tools Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((t) => (
                  <span key={t} className="px-3 py-1 bg-teal/10 border border-teal/30 text-teal text-sm rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            {(project.githubUrl || project.liveUrl) && (
              <div className="flex gap-4 pt-2">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-teal hover:underline text-sm">
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-teal hover:underline text-sm">
                    Live Demo
                  </a>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
```

- [ ] **Step 4: Run test**

```bash
bun run test --run src/test/ProjectModal.test.jsx
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/components/ProjectModal.jsx src/test/ProjectModal.test.jsx
git commit -m "feat: add ProjectModal with screenshot placeholder and metrics"
```

---

### Task 11: Projects section

**Files:**
- Create: `src/components/Projects.jsx`

- [ ] **Step 1: Write smoke test**

Create `src/test/Projects.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Projects from '../components/Projects'

describe('Projects', () => {
  it('renders all 4 project card titles', () => {
    render(<Projects />)
    expect(screen.getByText('Operations Performance Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Process Improvement Tracker')).toBeInTheDocument()
    expect(screen.getByText('SLA Reporting Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Data Quality Analysis')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
bun run test --run src/test/Projects.test.jsx
```

Expected: FAIL.

- [ ] **Step 3: Implement Projects**

Create `src/components/Projects.jsx`:

```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectModal from './ProjectModal'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="py-24 px-6 bg-navy-light">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-teal text-sm font-semibold tracking-widest uppercase mb-2">What I've built</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-light">Projects</h2>
        </motion.div>

        {/* Card grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelected(project)}
              className="bg-navy border border-navy-lighter rounded-xl p-6 cursor-pointer hover:border-teal/40 hover:-translate-y-1 transition-all group"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-teal text-xs font-semibold tracking-widest uppercase">{project.type}</span>
                  <h3 className="text-slate-light font-bold text-lg mt-1 group-hover:text-teal transition-colors">
                    {project.title}
                  </h3>
                </div>
                <span className="shrink-0 px-2 py-1 bg-teal/10 text-teal text-xs rounded-full border border-teal/20">
                  {project.company}
                </span>
              </div>

              {/* Description snippet */}
              <p className="text-slate-muted text-sm mb-4 line-clamp-2">{project.description}</p>

              {/* Tools */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((t) => (
                  <span key={t} className="px-2 py-0.5 bg-navy-light border border-navy-lighter text-slate-muted text-xs rounded">
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <p className="text-teal text-sm font-medium flex items-center gap-1">
                View details
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
```

- [ ] **Step 4: Run test**

```bash
bun run test --run src/test/Projects.test.jsx
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/components/Projects.jsx src/test/Projects.test.jsx
git commit -m "feat: add Projects card grid with modal on click"
```

---

### Task 12: Education section

**Files:**
- Create: `src/components/Education.jsx`

- [ ] **Step 1: Write smoke test**

Create `src/test/Education.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Education from '../components/Education'

describe('Education', () => {
  it('renders Education heading and Certifications heading', () => {
    render(<Education />)
    expect(screen.getByText('Education')).toBeInTheDocument()
    expect(screen.getByText('Certifications')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
bun run test --run src/test/Education.test.jsx
```

Expected: FAIL.

- [ ] **Step 3: Implement Education**

Create `src/components/Education.jsx`:

```jsx
import { motion } from 'framer-motion'
import { education, certifications } from '../data/education'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-4xl mx-auto">
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-teal text-sm font-semibold tracking-widest uppercase mb-2">Academic background</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-light">Education</h2>
      </motion.div>

      {/* Degree cards */}
      <div className="space-y-4 mb-12">
        {education.map((item, i) => (
          <motion.div
            key={item.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-navy-light border border-navy-lighter rounded-xl p-6 hover:border-teal/30 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-slate-light font-bold text-lg">{item.qualification}</h3>
                <p className="text-teal/80 text-sm font-medium mt-1">{item.institution}</p>
                <p className="text-slate-muted text-sm mt-3">{item.detail}</p>
              </div>
              <span className="shrink-0 text-teal text-sm font-medium">{item.period}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <motion.h3
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xl font-bold text-slate-light mb-6"
      >
        Certifications
      </motion.h3>
      <div className="grid md:grid-cols-2 gap-4">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-navy-light border border-navy-lighter rounded-xl p-4 flex items-center gap-4 hover:border-teal/30 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div>
              <p className="text-slate-light text-sm font-medium">{cert.name}</p>
              <p className="text-slate-muted text-xs mt-0.5">{cert.issuer} · {cert.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test**

```bash
bun run test --run src/test/Education.test.jsx
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/components/Education.jsx src/test/Education.test.jsx
git commit -m "feat: add Education section with degree and cert cards"
```

---

### Task 13: Contact section

**Files:**
- Create: `src/components/Contact.jsx`

- [ ] **Step 1: Write smoke test**

Create `src/test/Contact.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Contact from '../components/Contact'

describe('Contact', () => {
  it('renders email address and send button', () => {
    render(<Contact />)
    expect(screen.getByText('trishachitradip@gmail.com')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
bun run test --run src/test/Contact.test.jsx
```

Expected: FAIL.

- [ ] **Step 3: Implement Contact**

Create `src/components/Contact.jsx`:

```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'trishachitradip@gmail.com',
    href: 'mailto:trishachitradip@gmail.com',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
    label: 'Location',
    value: 'Southampton, UK',
    href: null,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'Add your LinkedIn URL',
    href: 'https://linkedin.com',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // 'loading' | 'success' | 'error'

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 px-6 bg-navy-light">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-teal text-sm font-semibold tracking-widest uppercase mb-2">Let's connect</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-light">Get In Touch</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-slate-muted leading-relaxed">
              I'm currently open to Business Analyst, Operations Analyst, and BI Analyst opportunities.
              Whether you have a question or just want to say hello — my inbox is always open.
            </p>
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center text-teal shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-slate-muted text-xs">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-slate-light text-sm hover:text-teal transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-light text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full bg-navy border border-navy-lighter rounded-lg px-4 py-3 text-slate-light placeholder-slate-muted/50 focus:outline-none focus:border-teal transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full bg-navy border border-navy-lighter rounded-lg px-4 py-3 text-slate-light placeholder-slate-muted/50 focus:outline-none focus:border-teal transition-colors"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full bg-navy border border-navy-lighter rounded-lg px-4 py-3 text-slate-light placeholder-slate-muted/50 focus:outline-none focus:border-teal transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-3 bg-teal text-navy font-semibold rounded-lg hover:bg-teal-dark transition-colors disabled:opacity-60"
            >
              {status === 'loading' ? 'Sending…' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="text-teal text-sm text-center">Message sent! I'll be in touch soon.</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm text-center">Something went wrong. Please try emailing directly.</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test**

```bash
bun run test --run src/test/Contact.test.jsx
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/components/Contact.jsx src/test/Contact.test.jsx
git commit -m "feat: add Contact section with EmailJS form"
```

---

### Task 14: Footer component

**Files:**
- Create: `src/components/Footer.jsx`

- [ ] **Step 1: Implement Footer (no test needed — trivial markup)**

Create `src/components/Footer.jsx`:

```jsx
export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-navy-lighter text-center">
      <p className="text-slate-muted text-sm">
        © 2025 Trisha Roy. All rights reserved. &nbsp;·&nbsp; Built with React
      </p>
    </footer>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Footer.jsx
git commit -m "feat: add Footer"
```

---

### Task 15: Assemble App.jsx

**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 1: Replace App.jsx with full assembly**

Replace `src/App.jsx` with:

```jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
```

- [ ] **Step 2: Run all tests**

```bash
bun run test --run
```

Expected: All tests PASS.

- [ ] **Step 3: Verify in browser**

```bash
bun run dev
```

Open `http://localhost:5173` and verify:
- Navbar renders with all links and Download CV button
- Hero split layout with carousel
- All sections render in order
- Smooth scroll when clicking nav links
- Mobile hamburger menu works (resize browser to < 768px)

- [ ] **Step 4: Commit**

```bash
git add src/App.jsx
git commit -m "feat: assemble all sections into App"
```

---

### Task 16: README and final files

**Files:**
- Create: `README.md`

- [ ] **Step 1: Write README.md**

Create `README.md`:

```markdown
# Trisha Roy — Portfolio Website

A single-page personal portfolio built with React + Vite, Tailwind CSS, and Framer Motion.

## Tech Stack

- React 18 + Vite
- Tailwind CSS v3
- Framer Motion
- EmailJS (contact form)
- Bun (package manager)

## Local Development

### Prerequisites
- [Bun](https://bun.sh) installed

### Setup

```bash
# Install dependencies
bun install

# Copy environment variables
cp .env.example .env

# Start dev server
bun run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## EmailJS Setup

To enable the contact form:

1. Create a free account at [emailjs.com](https://www.emailjs.com)
2. Create a service and email template
3. Copy your keys into `.env`:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Deploying to Vercel

### Option 1: Vercel CLI

```bash
bun add -g vercel
vercel
```

### Option 2: GitHub + Vercel Dashboard

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repository
4. Vercel auto-detects Vite — click Deploy
5. Add your EmailJS environment variables in Project Settings → Environment Variables

## Updating Content

All content is in `src/data/`:

| File | What to edit |
|------|-------------|
| `experience.js` | Job roles, dates, bullet points |
| `projects.js` | Project titles, descriptions, metrics |
| `education.js` | Degree and certifications |
| `skills.js` | Skill pills per tab |
| `stats.js` | Counter values in About section |

## CV

Replace `public/Trisha_Roy_CV.pdf` with your actual CV PDF to enable the Download CV button.
```

- [ ] **Step 2: Run full test suite one final time**

```bash
bun run test --run
```

Expected: All tests PASS.

- [ ] **Step 3: Final commit**

```bash
git add README.md
git commit -m "docs: add README with local dev and Vercel deploy instructions"
```

---

## Summary

| Task | Component | Tests |
|------|-----------|-------|
| 1 | Scaffold (Vite + Tailwind + Bun) | Smoke |
| 2 | Data files | None (plain JS) |
| 3 | StatCounter | Unit |
| 4 | Navbar | Smoke |
| 5 | CarouselPlaceholder | Smoke |
| 6 | Hero | Smoke |
| 7 | About | Smoke |
| 8 | Experience | Smoke |
| 9 | Skills | Smoke |
| 10 | ProjectModal | Unit (close handler) |
| 11 | Projects | Smoke |
| 12 | Education | Smoke |
| 13 | Contact | Smoke |
| 14 | Footer | None (trivial) |
| 15 | App assembly | All pass |
| 16 | README + final check | — |
