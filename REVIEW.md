# Pastel desktop redesign — ready for review

## Requested structure

- One homepage with four project folder links, in the original order.
- Four project subpages with all existing project information and matching pastel window styling.
- About Me and Resume file icons open accessible native popup windows.
- Plain HTML and CSS for structure and styling; small vanilla JavaScript for popup behavior and gallery enlargement.

The design has been completely replaced as requested. The former Next.js application/configuration has been removed from the working version; it remains recoverable in Git history. No new repository or hosting project was created. Dependencies and lockfile were updated to the new zero-dependency static architecture.

## Content preserved

Melanate remains first, with its mission, personal responsibilities, design goals, six process stages, final-work description, exact Josie Kalipeni testimonial, official links, Develop for Good feature, and all eight team credits. Recognition continues to describe the whole team. No quote wording was changed.

KneeGuard retains its hardware/software concept, visible recovery interface descriptions, prototype limitations, and real screenshots. Course Canvas retains the academic planner description, demo-data captures, and user-supplied Best Demo recognition. Our Neighborhood Mission retains independent HTML/CSS/Bootstrap development and original captures.

CCNY, Computer Science, Mathematics minor, expected 2027 graduation, existing experience/skills, and the supplied LinkedIn URL are retained in the popup content. The supplied reference images/videos inform the visual direction only; their people's names, photos, social accounts, characters, and unverified facts are not used as Alyssa's content.

## Remaining personal input and original artifacts

- Resume PDF supplied and installed at public/resume.pdf; preview, open, and download controls are implemented.
- Optional portrait; a decorative monogram is used in its place.
- Preferred email or any additional social/profile URLs, if desired. Both supplied LinkedIn and GitHub profiles are linked.
- Melanate: final website/Sankofa/mobile screenshots, original wireframes, CMS/content map, feedback iterations, and feature screenshot.
- KneeGuard: role, individual contributions, dates, collaborators, original hardware/sensor photographs and specifications, and personal technical lessons.
- Course Canvas: exact responsibilities, dates, stack/AI implementation details, collaborators, and optional award announcement/photo.
- Our Neighborhood Mission: dates and original resource/program screenshot, with optional sitemap and personal implementation lessons.

Missing materials remain identified; no fictional screenshots, resume, user research, clinical results, or metrics are substituted. The real project images and all official outgoing URLs were preserved rather than refetched during this visual redesign.

## Main changes to review

- `index.html`, `work/*/index.html`: five actual HTML pages.
- `assets/style.css`: the complete pastel design and responsive layouts.
- `assets/app.js`: popup and lightbox behavior, Escape, backdrop close, and focus restoration.
- `assets/favicon.svg`: original monogram favicon.
- `scripts/build.mjs`, `scripts/serve.mjs`: dependency-free static build/dev/production server.
- `vercel.json`: static output settings and legacy popup redirects in the existing Vercel project.
- `package.json`, `package-lock.json`, `.gitignore`, `AGENTS.md`, and `README.md`: updated for the plain HTML/CSS architecture.
- Removed legacy `src/` Next.js application and framework-specific configuration; all case-study content was carried into the new HTML pages.

## Review on your computer

Run `npm run dev` from the source folder and open localhost port 3000 on the same computer. No installation is required beyond Node.js 18+. Test each folder and the About/Resume icons. The four project pages also have matching navigation and image lightboxes.

The cloud development server is running for internal testing. This environment currently has no remote desktop/control tools or exposed public preview capability, so an internal localhost URL is not a public browser link.

No push or deployment is included without Alyssa's approval. The current live site will continue showing the previous version until this redesign is released.

## Verification completed

- `npm ci`: passed; zero project dependencies.
- `npm run check`: passed for the vanilla JavaScript and Node helper scripts.
- `npm run build`: passed; production output contains the homepage, four work pages, 404, shared assets, and preserved public images.
- Development browser checks: all five pages loaded with one h1, no horizontal overflow at 320, 390, 768, and 1440px, and all supplied project images decoded successfully.
- About/Resume: open, close button, Escape, direct hash links, legacy About redirect, and focus restoration passed. Production checks also verified Tab stays inside the open popup.
- Gallery enlargement, Escape-to-close, exact testimonial wording, all eight Melanate team credits, and native team disclosure passed.
- Automated axe WCAG A/AA and WCAG 2.1 AA scans: zero violations across all five pages plus both homepage popup states, at desktop and mobile widths.
- Production server: all five pages and real images loaded, popups worked, unknown pages returned 404, and no browser runtime errors occurred.
- Plain HTML project navigation also worked with JavaScript disabled. The popups and gallery enhancement intentionally use the small vanilla JavaScript file.
- Configuration JSON, dependency-free lockfile, source/output CSS equality, and `git diff --check` passed.

No claims are made about a new public deployment. This redesign remains local and uncommitted, awaiting approval. Updated cloud startup instructions were saved to the environment draft; review/save and publish those environment settings if future tasks should use the new static workflow. Saving this draft does not deploy the website.

## Release approval

Alyssa approved pushing the completed pastel redesign. The changes are prepared for the existing main branch and connected Vercel project. Deployment completion still requires verification; the local checks above do not establish that Vercel has finished publishing. Earlier notes about awaiting approval describe the pre-release review state.

## Resume and GitHub update

The supplied Alyssa Johnson Resume.pdf is now public/resume.pdf. The Resume popup on all five pages includes its real PDF preview plus open and download links. GitHub is linked alongside LinkedIn in the homepage dock, all About popups, and all footers. No personal facts were inferred from the PDF, and no project case-study copy was changed. Alyssa approved pushing this resume and GitHub update to the existing main branch. The connected Vercel project handles deployment; completion must be verified separately.
