# Next.js 16 Boilerplate

A lightweight Next.js App Router starter focused on a simple structure, local state persistence, Sass styling, and minimal API/data helper patterns.

## Stack
- Next.js 16.4.0
- React 19.3.0
- TypeScript
- Zustand
- Sass
- Yarn 4

## Project goals
This project is intentionally kept small and easy to understand:
- App Router structure instead of legacy Pages Router
- Simple global state with Zustand
- Minimal API helpers under src/lib/api
- Route handlers under src/app/api
- Legacy-style SCSS kept for familiarity and quick migration
- Basic SEO metadata setup at the app root

## Scripts
```bash
yarn dev
yarn build
yarn start
yarn lint
```

## Getting started
```bash
git clone <your-repo-url> my-project
cd my-project
nvm use 22
yarn install
yarn dev
```

Then open http://localhost:3000

## Environment
This project expects a local environment file such as `.env.local` for local runtime values. Configuration can also be stored in the `env-files` folder when needed for deployment setup.

## Project structure
```bash
.
├── README.md
├── next.config.ts
├── package.json
├── env-files/
├── public/
├── src/
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── store/
│   ├── styles/
│   └── utils/
```

## Notes
- The app keeps a very simple folder structure on purpose.
- API calls are organized in src/lib/api rather than a large services layer.
- The global app shell is intentionally minimal to match the project style.
- Sass is still used in the older project style, but updated to work with modern Sass compatibility rules.

## Version history
- 15 Oct 2026 — Updated project to Next.js 16 with App Router and lint/build compatibility fixes
- 14 Oct 2026 — Initial Next.js 15 / React 19 migration