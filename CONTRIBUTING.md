# Contributing

1. Create a branch from `main` (`feat/…`, `fix/…`, or `content/…`).
2. `npm install` then `npm run dev`.
3. Keep content edits in the files listed in [docs/CONTENT.md](docs/CONTENT.md).
4. Run `npm run lint` before opening a PR.
5. Open a PR into `main`. Vercel will post a Preview URL.
6. After review, merge. Production is whatever is on `main`.

Do not commit `.env`, `.vercel`, or `node_modules`. Do not hand-edit `src/data/galleryEvents.js`; regenerate it with `npm run generate:gallery`.
