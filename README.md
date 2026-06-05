# Tectonics — Software Engineering Studio

A premium, production-ready portfolio site for **Tectonics**, a software engineering
studio that designs and builds websites, iOS apps, Android apps, and custom digital
products.

Built to feel elite, technical, minimal, and design-driven — a black-and-white visual
identity with a single restrained teal accent, strong editorial typography, a grid-based
layout, and refined micro-interactions.

## Stack

- **React 19** + **Vite**
- **Motion** (`motion/react`) — hero reveal, staggered headings, scroll-triggered
  entrances, counters, sticky-header transitions, and CTA micro-interactions
- **Three.js / React Three Fiber** + **drei** — one signature 3D visual: floating,
  faulted "tectonic" strata with cursor parallax (lazy-loaded, performance-conscious)
- **CSS Modules** + a token-driven theme (dark default + light mode)

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build
npm run preview  # preview the production build
npm run lint     # eslint
```

## Architecture

```
src/
├── styles/
│   ├── theme.css            # design tokens — colors, type scale, spacing, dark/light
│   └── base.css             # reset, base typography, shared utilities
├── context/
│   └── ThemeProvider.jsx    # dark/light theme with localStorage persistence
├── hooks/
│   └── usePrefersReducedMotion.js
├── lib/
│   └── motion.js            # shared Motion variants & viewport config
├── data/
│   ├── projects.js          # case-study content
│   └── site.js              # services, process, platforms, testimonials, contact
├── components/
│   ├── ui/                  # Logo, Button, Reveal, SplitText, SectionHeader,
│   │                        #   Counter, Magnetic
│   ├── three/               # TectonicScene — the signature R3F visual
│   ├── layout/              # Header (sticky/blur), ThemeToggle, Footer
│   └── sections/            # Hero, Work, CaseStudyModal, Services, Process,
│                            #   About, Platforms, Testimonials, Contact
├── App.jsx                  # composition + reduced-motion MotionConfig
└── main.jsx
```

## Sections

1. **Hero** — split-reveal headline, dual CTAs, trust line, 3D tectonic background
2. **Work** — 6 case-study cards opening an accessible detail modal
3. **Services** — editorial bento grid (not a generic icon grid)
4. **Process** — scroll-driven horizontal timeline (Discover → Scale)
5. **About** — studio intro, engineering pillars, animated metrics, industries
6. **Platforms** — abstract device-frame cards (web / phone)
7. **Testimonials** — elegant quote cards + trust signals
8. **Contact** — sleek form with budget selector, email / WhatsApp / social links

## Accessibility & performance

- Semantic HTML, skip link, focus-visible styles, labelled controls, modal with
  Escape-to-close and scroll lock
- Fully responsive across desktop, tablet, and mobile
- `prefers-reduced-motion` is honored globally (Motion `MotionConfig`) and the 3D
  scene drops to a static, on-demand render
- The Three.js scene is code-split and lazy-loaded so it never blocks first paint

> Content (metrics, outcomes, testimonials) uses realistic placeholders — swap in real
> case studies and wire the contact form to your backend or form service.
