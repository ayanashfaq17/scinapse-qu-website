# Architecture

Static React SPA. Vite builds HTML, JS, and CSS into `dist/`. Vercel hosts that output. This repo has no API, database, or auth.

```
Browser  →  Vercel (www.scinapsequ.ca and www.scinapsequeensu.ca)
                ├── static app (React Router)
                ├── Vercel Analytics
                └── gallery images on Vercel Blob
```

## Boot

1. `index.html` mounts `#root` and preloads `/assets/hero_banner.jpg`.
2. `src/main.jsx` renders `App` in Strict Mode.
3. `App` shows `Loader` until `useAppBoot` finishes (hero plus the first few gallery images) and a 1.2s minimum time elapses.
4. `BrowserRouter` wraps `Navbar`, page `Routes`, `Footer`, and `SmoothScroll`.

`useAppBoot` (`src/hooks/useAppBoot.js`) reports 0 to 100. `App` treats any truthy value as boot in progress. Image failures still complete boot so the loader cannot get stuck.

## Routing

All routes are declared in `src/App.jsx`. Production SPA fallback in `vercel.json`:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

To add a page: create `src/pages/...`, import it in `App.jsx`, add a `Route`. Add a nav item in `Navbar.jsx` if it should appear in the header.

## Folders

```
public/                 static files at URL root (/team/..., /horizons/..., /assets/...)
scripts/                Node scripts (gallery generator)
src/pages/              one file per route
src/components/         grouped by page or shared shell
  CoreWeb/              Navbar, Footer
  Layout/               GSAP smooth scroller
  UI/                   Loader, RippleButton
  *Page/                sections for a single route
src/data/               team, stats, generated gallery list
src/CSS/                Tailwind entry and extras
src/hooks/
src/utils/motionVariants.js
```

Files in `public/` are not imported through Vite. Reference them as `/path/from/public`.

## Styling

- Tailwind via `src/CSS/index.css` → `tailwind.css`
- Brand tokens: `tailwind.config.js` (`brand.cyanBlue`, etc.)
- Extra CSS: `src/CSS/gallery.css`, `ripple.css`, `textEffects.css`, `base.css`

Prefer Tailwind classes and `brand-*` colours.

## Motion

- Page and section enter: `src/utils/motionVariants.js` plus Framer Motion
- Page scroll smoothing: `src/components/Layout/SmoothScroller.jsx` (GSAP)

## Hosting and domains

The **app** is a Vercel project linked to this GitHub repo. Gallery files are Vercel Blob (`sqfvtb9y6up1eyj2.public.blob.vercel-storage.com`). Analytics is `@vercel/analytics` in `App.jsx`.

Two `.ca` domains both resolve to that same Vercel project:

| Domain | Registrar | DNS | Notes |
| --- | --- | --- | --- |
| `scinapsequ.ca` | Web Hosting Canada (WHC Online Solutions), expires 2027-06-15 | WHC nameservers (`parking1.whc.ca`, `parking2.whc.ca`). Records point at Vercel. | Apex 307-redirects to `www`. |
| `scinapsequeensu.ca` | Gandi, expires 2027-06-16 | AWS Route 53 nameservers. Records point at Vercel. | Longer branded name. |

Vercel serves the site. WHC, Gandi, and Route 53 only own names and DNS. Transferring a domain at WHC does not move the Vercel project, Blob store, GitHub repo, or Route 53 zone.

Google Search Console verification file: `public/google786918c533ea8a3a.html`.

`.ca` domains require a [CIRA Canadian Presence](https://www.cira.ca/en/domains/rules) contact.

### Typical DNS shape (Vercel)

Keep these in whatever DNS host the domain uses. Exact A/AAAA values come from Vercel → Project → Domains.

- Apex (`scinapsequ.ca`): A (and optionally AAAA) records Vercel lists
- `www`: CNAME to the Vercel DNS target (currently `*.vercel-dns-017.com`)

After a registrar transfer, nameservers may reset. Re-point them at Vercel (or keep WHC DNS with the same records) before the old TTL dies.

## External at runtime

| Service | How it is used |
| --- | --- |
| Vercel Analytics | `<Analytics />` in `App.jsx` |
| Vercel Blob | Public image URLs baked into `galleryEvents.js` |
| Google Fonts | Crimson Text in `index.html` (Inter is bundled via `@fontsource/inter`) |
| mailto | Contact and footer (`scinapse@clubs.queensu.ca`) |
| Third-party sites | Instagram, LinkedIn, Facebook, Discord, Google Forms/Docs, BounceLife, national SciNapse site |

The production build does not need Vercel env vars unless you add server routes later. The Blob token is only for `npm run generate:gallery` locally.
