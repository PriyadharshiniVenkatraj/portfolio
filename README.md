# React Portfolio — Priya Dharshini

A single-page portfolio built with React + Vite: ink-navy palette, Fraunces
+ Space Grotesk type, and a small animated node graph in the hero.

## Structure

```
react-portfolio/
│
├── public/
│   ├── profile.jpg      ← add your own photo here (currently unused by
│   │                       the design — the hero uses an animated graphic
│   │                       instead; wire it into Hero.jsx if you want it)
│   └── resume.pdf        ← add your resume here; the Hero "Resume" button
│                            links to /resume.pdf
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx    ← work history timeline
│   │   ├── Education.jsx     ← academic timeline + achievements
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── index.html            ← Vite's HTML entry point (loads Google Fonts + src/main.jsx)
├── package.json
├── vite.config.js
└── README.md
```

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Things to personalize

- **Links & contact info**: GitHub/LinkedIn URLs and email are placeholders
  in `Hero.jsx` and `Contact.jsx` — search for `github.com/`,
  `linkedin.com/`, and `your-email@example.com`.
- **Projects**: edit the `PROJECTS` array in `src/components/Projects.jsx`.
- **Skills**: edit the `SKILLS` array in `src/components/Skills.jsx`.
- **Experience / Education**: edit the arrays at the top of
  `Experience.jsx` and `Education.jsx`.
- **Resume**: drop your PDF into `public/resume.pdf`.
- **Colors/fonts**: all design tokens live at the top of `src/App.css`
  under `:root`.
