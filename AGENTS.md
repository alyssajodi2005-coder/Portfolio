# Portfolio development

This is a plain HTML/CSS portfolio with small vanilla JavaScript enhancements. Keep the homepage and four work pages as static HTML; do not add React, Next.js, a bundler, or a CSS framework unless the user explicitly requests one.

- Homepage: index.html. Project pages: work/*/index.html.
- Shared presentation: assets/style.css. Popup and gallery behavior: assets/app.js.
- About Me and Resume are native dialog popups on each page; they are not separate pages.
- Keep project facts, the exact Melanate quote, team attribution, and existing live URLs accurate. Never invent research, metrics, screenshots, clinical validation, or personal links.
- Node.js 18+ is sufficient; the site has zero package dependencies.
- Use npm run dev for development, npm run build to copy deployable files to dist/, and npm start for production validation. npm run check checks JavaScript syntax. Do not edit dist/ directly.
- Use the existing checkout; no Git worktree is needed.
- Ask before pushing or deploying this redesign. Preserve unrelated user changes.
