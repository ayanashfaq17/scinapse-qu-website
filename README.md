# SciNapse Queen’s Website

Queen’s University chapter site for [SciNapse](https://scinapsescience.com/).

- Production: https://www.scinapsequ.ca
- Also attached: https://www.scinapsequeensu.ca

Static React SPA. No backend, database, or auth. The contact form opens the visitor’s mail client. Newsletter fields do not store emails.

More detail:

- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md): app structure, hosting, and domains
- [docs/CONTENT.md](docs/CONTENT.md): how to change copy, photos, events, and the gallery
- [CONTRIBUTING.md](CONTRIBUTING.md): branches, PRs, and deploys

## Stack

| Layer | What we use |
| --- | --- |
| UI | React 19, React Router 7 |
| Build | Vite 6 |
| Styling | Tailwind CSS 3, brand tokens in `tailwind.config.js` |
| Motion | Framer Motion, GSAP (smooth scroll) |
| Hosting | Vercel |
| Gallery images | Vercel Blob |
| Analytics | `@vercel/analytics` |
| Source | GitHub (`MukunthanMahesh/scinapse-qu-website`) |

Node.js 18+ and npm.

## Local setup

```bash
git clone https://github.com/MukunthanMahesh/scinapse-qu-website.git
cd scinapse-qu-website
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

| Script | Purpose |
| --- | --- |
| `npm run dev` | Local development |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint |
| `npm run generate:gallery` | Rebuild `src/data/galleryEvents.js` from Vercel Blob |

Copy `.env.example` to `.env` only if you need to regenerate the gallery. The site runs without that token.

## Routes

Defined in `src/App.jsx`. `vercel.json` rewrites every path to `index.html` so React Router works in production.

| Path | Page |
| --- | --- |
| `/` | Home |
| `/gallery` | Event photo gallery |
| `/uscc` | Undergraduate Science Case Competition |
| `/stem-horizons` | STEM Horizons conference |
| `/about` | About and stats |
| `/team` | Executive team |
| `/links` | Resources, hiring, newsletter UI |
| `/contact` | Contact (`mailto`) |

## Where content lives

Most year-to-year work is editing data and files in `public/`, not adding features. Full guide: [docs/CONTENT.md](docs/CONTENT.md).

| What to change | Where |
| --- | --- |
| Team roster | `src/data/teamData.js` and `public/team/YYYY-YYYY/` |
| About-page stats | `src/data/statData.js` |
| Homepage events | `src/components/LandingPage/EventSection.jsx` |
| Gallery photos | Vercel Blob, then `npm run generate:gallery` |
| USCC dates and FAQ | `src/components/USCCPage/TimelineSection.jsx`, `FAQSection.jsx` |
| STEM Horizons speakers and schedule | `src/components/HorizonsPage/SpeakerSection.jsx`, `ConferenceSchedule.jsx` |
| Navbar and footer links | `src/components/CoreWeb/Navbar.jsx`, `Footer.jsx` |
| Static images | `public/` (URL path is `/...`) |

## Deploy

The Vercel project is connected to this GitHub repo. A push to `main` is a production deploy. Other branches and PRs get Preview URLs.

Hosting and DNS details: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md#hosting-and-domains).

## Environment

| Variable | Used by | Needed for |
| --- | --- | --- |
| `VERCEL_BLOB_READ_WRITE_TOKEN` | `scripts/generateEvents.cjs` | Regenerating gallery JSON from Blob |

Nothing else is read at runtime. Do not commit `.env`.

## Known gaps

- Footer and Links-page newsletters do not save emails.
- Contact form opens `mailto:scinapse@clubs.queensu.ca`. Nothing is sent from the server.
- `TestimonialSection` exists under Landing but is not mounted on Home.
- Hiring and the navbar ticket chip are toggled in source.

## Brand

Tailwind `brand` colours in `tailwind.config.js`:

- `cyanBlue` `#74DCDF`
- `cyanHue` `#00D4FF`
- `darkCyan` `#5FC6C9`
- `teal` `#008080`

Navbar height is `72px` (`pt-[72px]` on `main`).
