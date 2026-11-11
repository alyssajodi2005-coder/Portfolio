# Alyssa Johnson — Pastel Desktop Portfolio

A personal product design and engineering portfolio built with **plain HTML, CSS, and a small amount of vanilla JavaScript**. There is no React, Next.js, Tailwind, TypeScript, or framework runtime. The website has no package dependencies and makes no external font or image requests.

The new design takes inspiration from the supplied desktop references: a cream grid wallpaper, pastel pink/lavender/blue/sage folders, document icons, window title bars, a small shortcut dock, and native popup windows. All four existing project case studies, their live links, real screenshots, Melanate recognition, exact testimonial, and team credits are retained.

## Pages and files

- `index.html`: the single homepage with four clickable project folders.
- `work/melanate/index.html`
- `work/kneeguard/index.html`
- `work/course-canvas/index.html`
- `work/our-neighborhood-mission/index.html`
- `assets/style.css`: all layout, pastel colors, responsive styles, folders, and window styling.
- `assets/app.js`: About Me / Resume popup controls and image gallery lightbox.
- `404.html`: friendly fallback for missing files.

About Me and Resume are `<dialog>` popups in the HTML, not separate pages. The old `/about` and `/resume` paths redirect to their homepage popups. Each project remains a normal readable subpage, accessible through its original `/work/.../` URL. Navigation uses ordinary HTML links.

## Run locally

Use Node.js 18 or newer. No packages need downloading to run the site:

```sh
npm run dev
```

Then open `http://localhost:3000` on the same computer. The development server reads the source HTML/CSS directly; refresh after editing. Stop with Ctrl+C. If needed, use `npm run dev -- --port 3001`.

The lockfile is retained for hosting compatibility. `npm ci` is safe and installs zero project dependencies. Cloud machines with unwritable home caches can use `npm ci --cache /workspace/.npm-cache`.

```sh
npm run check
npm run build
npm start
```

`check` validates the small JavaScript files' syntax. `build` copies the five site pages, shared assets, 404 page, and `public/` contents into `dist/`. `start` serves that production output. No transpilation, bundling, or server rendering is needed. Do not edit `dist/` directly. Use the existing checkout rather than creating a Git worktree.

## Edit content

Edit the HTML directly. Each case study is self-contained and retains the original project facts and clearly identified missing details. `assets/style.css` uses CSS custom properties for the palette at the top. Change shared styling there.

The About Me and Resume dialogs are present in all five HTML pages so they can open immediately, without fetching another page. To change their content, update the corresponding `<dialog id="about">` or `<dialog id="resume">` in all five files. LinkedIn is the supplied `https://www.linkedin.com/in/alyssajodijohnson`; no personal email, GitHub, Behance, Dribbble, or other URL has been invented.

## Add your resume or photo

The Resume file opens a real popup with education and experience already supplied by Alyssa. It explicitly says the PDF is pending and provides no fake download button.

When the actual PDF is available, add `public/resume.pdf` and replace the “Resume PDF not supplied yet” paragraph in the resume dialogs with a download link to `/resume.pdf`. Never substitute a fabricated resume.

The About popup uses a decorative `aj` monogram rather than a fictional portrait. If desired, add `public/alyssa.jpg` and replace the monogram with an image of Alyssa with descriptive alt text.

## Project screenshots and missing assets

Original captures are under `public/projects/`. They are referenced by ordinary `<img>` tags with dimensions, lazy loading where appropriate, and descriptive alt text. Click gallery images for an accessible lightbox; without JavaScript they still open as ordinary images.

Melanate's hero is a clearly labeled editorial illustration made in CSS, not a fake website screenshot. Replace it with a real original screenshot when supplied. Its actual website, feature screenshot, original Figma wireframes, CMS structure, and iterations are still needed; see `public/projects/melanate/README.md`.

KneeGuard needs original hardware photographs, exact contributions, dates, and component details. Course Canvas needs individual responsibilities, dates, and optional award evidence. Our Neighborhood Mission needs dates and an additional resource/program screenshot. The exact remaining input list is in `REVIEW.md`.

No user interviews, impact metrics, clinical validation, or unprovided personal roles have been invented. Course Canvas's screenshots contain demo data. Melanate's testimonial and official team names remain attributed to the whole Develop for Good team.

## Vercel — existing project only

`vercel.json` overrides the previous Next.js framework selection, runs `npm run build`, and serves `dist/` as a static website. It also preserves the old About path by redirecting it to the popup.

Keep using the existing GitHub repository and Vercel project. After approval, pushing the redesign to `main` can trigger the connected deployment. Do not create another Vercel project. If the Vercel dashboard has conflicting manual overrides, use Framework Preset **Other**, Build Command `npm run build`, and Output Directory `dist` in that existing project.

Alyssa has approved pushing this redesign to the existing main branch. The connected Vercel project handles deployment; verify the latest deployment is Ready before treating the new design as live.
