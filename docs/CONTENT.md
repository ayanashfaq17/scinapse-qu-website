# Editing content

There is no CMS. Change copy in the files below, commit, and push to `main`.

## Team (`/team`)

1. Put photos in `public/team/YYYY-YYYY/` (webp preferred). URLs look like `/team/2025-2026/firstnamelastname.webp`.
2. Edit `src/data/teamData.js`: `name`, `role`, `image`, `yearProgram`, `funFact`.
3. Update the heading year in `src/pages/Team.jsx` when the exec year changes.

Keep originals in `public/team/YYYY-YYYY/backup/` if you compress for the web.

## Homepage events (`/`)

Edit the `events` array in `src/components/LandingPage/EventSection.jsx`.

- `imageUrl` files live under `public/landing/event_images/`
- Internal pages: `link: "/stem-horizons"` (or similar)
- External URLs also work
- `sortDate` controls order

Hero copy: `src/components/LandingPage/HeroBanner.jsx`. About blurb: `AboutSection.jsx`.

`TestimonialSection.jsx` is unused on Home. Import it in `src/pages/Home.jsx` if you want it live.

## About stats (`/about`)

`src/data/statData.js`: `label`, `value`, `icon`. Mission copy: `src/components/AboutPage/MissionStatement.jsx`.

## USCC (`/uscc`)

| Piece | File |
| --- | --- |
| Intro | `src/components/USCCPage/AboutSection.jsx` |
| Dates and status | `TimelineSection.jsx`. Change the `*_date` constants at the top (ISO strings). The timeline derives open/closed/current from `new Date()`. |
| FAQ | `FAQSection.jsx` (`faqs` array) |
| National registration URL | Timeline, Footer, `LinksPage/USCCCard.jsx`, `ResourcesSection.jsx` |
| Queen’s team form and info doc | Google Form and Doc URLs in Timeline, Footer, Resources |

## STEM Horizons (`/stem-horizons`)

| Piece | File |
| --- | --- |
| Hero and ticket/link | `HorizonsPage/HeroBanner.jsx` |
| Speakers | `SpeakerSection.jsx` (`speakers` array). Photos in `public/horizons/speakers/`. |
| Case competition copy | `CaseCompetition.jsx` |
| Day-of schedule | `ConferenceSchedule.jsx` (`scheduleItems`) |
| Partner | `PartnerSection.jsx` |

Navbar “tickets on sale” chip is commented out in `Navbar.jsx`. Uncomment and point at the current BounceLife (or other) URL when selling tickets.

## Gallery (`/gallery`)

Photos are not in `public/`. They live on Vercel Blob. `src/data/galleryEvents.js` is generated and should not be hand-edited.

### Add or refresh an event album

1. In Vercel → Storage → Blob, upload images into a folder named like `STEM_Horizons_2025/` or `SciNapse_USCC_2023-2024/`. Use webp/jpg/png with a file extension. Empty placeholder blobs are ignored.
2. Add or update that folder `id` in `EVENTS` inside `scripts/generateEvents.cjs` (`id`, `title`, `date`).
3. Put `VERCEL_BLOB_READ_WRITE_TOKEN` in `.env`.
4. Run `npm run generate:gallery`.
5. Commit the updated `src/data/galleryEvents.js`.

If the Blob store is recreated, set `BLOB_HOST` in the generator to the new public hostname, then regenerate.

## Links (`/links`)

- Hiring: `HiringCard.jsx` (currently closed; uncomment the green pulse and enable the button when applications open)
- Newsletter: `NewsletterCard.jsx`. UI only, no list provider.
- Resource URLs: `ResourcesSection.jsx`

## Contact (`/contact`)

`src/pages/Contact.jsx` builds a `mailto:` to `scinapse@clubs.queensu.ca`. Inquiry types are `INQUIRY_OPTIONS`. No messages are stored in this app.

## Global chrome

- Nav items, socials, ticket chip: `src/components/CoreWeb/Navbar.jsx`
- Footer links, Discord, newsletter stub: `Footer.jsx`
- Favicon and hero preload: `index.html`, files in `public/assets/`
- Google Search Console: `public/google786918c533ea8a3a.html`. Keep it unless you re-verify.

## Checklist for a new school year

- [ ] New `public/team/YYYY-YYYY/` photos and `teamData.js`
- [ ] Team page heading year
- [ ] Homepage events and images
- [ ] About stats
- [ ] USCC timeline dates and registration URLs
- [ ] STEM Horizons speakers, schedule, partner, tickets
- [ ] Hiring open/closed
- [ ] Navbar ticket chip
- [ ] Gallery albums for last year’s events
