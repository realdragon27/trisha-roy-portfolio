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
5. Add your EmailJS environment variables in **Project Settings → Environment Variables**

## Updating Content

All content is in `src/data/` — no JSX editing needed:

| File | What to edit |
|------|-------------|
| `experience.js` | Job roles, dates, bullet points |
| `projects.js` | Project titles, descriptions, metrics |
| `education.js` | Degree and certifications |
| `skills.js` | Skill pills per tab |
| `stats.js` | Counter values in About section |

## CV

Replace `public/Trisha_Roy_CV.pdf` with your actual CV PDF to enable the **Download CV** button.
