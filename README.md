# Agarwal Engineering Homepage

A standalone Next.js App Router implementation of the Agarwal Engineering homepage redesign. The interface is built with Tailwind CSS utility classes and local image assets.

## Requirements

- Node.js 22 or newer
- npm 10 or newer

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Main files

- `app/page.tsx`: homepage content and Tailwind styling
- `app/layout.tsx`: metadata and global document shell
- `public/`: logo and photography used by the homepage

The email address, phone number and company details can be updated directly in `app/page.tsx`.
