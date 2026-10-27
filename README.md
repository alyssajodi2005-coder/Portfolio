# Alyssa Johnson — Design & Engineering Portfolio

A responsive six-page portfolio built with Next.js App Router, TypeScript, Tailwind CSS v4, Motion for React, and Lucide icons. Ivory, charcoal, and muted lavender pair with editorial serif typography. Melanate uses a labeled editorial CSS illustration. The other three projects use actual captures from their supplied live URLs, including desktop and mobile views. Course Canvas captures show demo data, not measured outcomes.

## Development

Use Node.js 20.9+ (validated with Node 24). Install the locked dependencies:

```sh
npm ci
npm run dev
```

For cloud machines with an unwritable home cache, use `npm ci --cache /workspace/.npm-cache`. No API keys, database, or environment variables are required. The dev command uses Next.js’s supported webpack mode because the default Turbopack development compilation stalled in this cloud machine. Production builds use the standard Next.js build command.

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

`npm start` runs the production build. The default port is 3000. Keep using this checkout; a separate Git worktree is unnecessary.

## Edit content

`src/data/projects.ts` holds project descriptions, roles, tools, timelines, tags, URLs, and profile links. The homepage, cards, and case studies share it. `src/app/work/[slug]/page.tsx` holds the common case-study layout and project-specific recognition sections. `src/app/about/page.tsx` holds experience and skills.

No interviews, tests, metrics, clinical validation, exact unprovided contributions, or testimonials are invented. Missing facts are visibly marked. Some reflective text is editorial framing based on supplied facts; review it in your own voice before submission.

## Replace placeholders

Each folder in `public/projects/` has its own image checklist. Use original project captures, not stock or generated screenshots. Put image files there, then set `image` and a descriptive `imageAlt` on the corresponding project in `src/data/projects.ts`, for example:

```ts
image: '/projects/melanate/desktop.png',
imageAlt: 'Describe the actual content shown in the Melanate homepage capture',
```

To fill or edit a case-study gallery, edit `projectGalleries` in `src/data/projects.ts` (or the Melanate fallback in `src/app/work/[slug]/page.tsx`), adding `src` to each appropriate gallery item, using `/projects/${project.slug}/desktop.png` (or hardware.png), details.png, and mobile.png. Replace each `alt` with a description of the actual image. Gallery items with a source open an accessible native-dialog lightbox with Escape and close-button support. Missing gallery images remain labeled placeholders. Prefer optimized PNG, WebP, or AVIF; `next/image` handles sizing and lazy loading.

Melanate now includes the supplied official links, exact Josie Kalipeni testimonial, and team credits. It still needs original website screenshots, wireframes, content structure, iteration examples, and the newsletter feature screenshot. Edit the recognition and team data in `melanateRecognition` in `src/data/projects.ts`. Course Canvas needs specific responsibilities, actual AI flow, and award evidence. KneeGuard needs sensor/hardware details and contributions. Project dates need confirmation where marked.

## Photo, resume, and contact

Add `public/alyssa.jpg` and `public/resume.pdf`. Set `profile.photo` to `/alyssa.jpg` and `profile.resume` to `/resume.pdf` in the data file. The About page will display the photo and download link, and navigation will point to the resume. Set `profile.email` to an email address (without `mailto:`), and `linkedin`, `github`, and `social` to full HTTPS URLs. Unset links are honest “soon” labels, not broken destinations. The resume remains unavailable until a file is supplied.

## Live projects

- https://kneeguard-demo.onrender.com/KneedThat.html
- https://cuny-course-canvas-5nzl.vercel.app/
- https://ourneighborhoodmission.org

Access depends on the cloud environment network policy and the third-party hosts. No third-party site markup, claims, or imagery is required for this portfolio to build.

## Accessibility & interactions

Semantic landmarks, skip link, keyboard focus states, responsive toggle navigation with expanded state, active page indicators, smooth anchor navigation, back-to-top links, native modal galleries, and system reduced-motion support are included. Motion is limited to short entrances, route fades, and restrained hover treatments. Fonts use system sans-serif and Georgia, avoiding external font requests.

## Deploy on Vercel

Push this project to your GitHub repository, import it in Vercel, choose Next.js, and deploy. If importing a repository where this project is at its root, leave Root Directory at the default. Use `npm run build`; Vercel detects the framework automatically. No secrets are needed. Set your custom domain in Vercel and add `metadataBase` in `src/app/layout.tsx` once you have the real production URL. The build produces static pages for all four case studies; unknown projects return 404.

Before submitting: replace missing assets/contact links, confirm marked facts, review all copy, check all live links, and attach your actual resume. Deployment is not performed by local build commands.

## Screenshot provenance

The three supplied live websites were inspected during implementation. Their images in `public/projects/` were captured directly from their rendered pages; they are not reconstructed mockups. Course Canvas includes its sign-in page and the built-in demo-student dashboard. No real student data, credentials, or patient data were submitted. Captures use the cloud proxy with TLS verified by the system-trusted curl transport; the browser received the fetched resources for rendering. Some third-party resources can vary over time. Original Melanate artifacts, client recognition, hardware photographs, and unprovided personal materials remain pending.

## Finalization review

See [REVIEW.md](REVIEW.md) for the changes, source provenance, remaining personal assets, and review/deployment steps. The updated version must not be pushed or deployed until Alyssa approves it.
