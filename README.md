# MyChallan

A static informational website built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
mychallan/
├── app/           # Next.js App Router pages and layouts
├── components/    # Reusable React components
├── data/          # Static data and content
├── styles/        # Global styles and Tailwind CSS
├── public/        # Static assets (images, fonts, etc.)
└── ...config files
```

## Build

To create a static build:

```bash
npm run build
```

The output will be in the `out/` directory, ready for deployment.

## Tech Stack

- **Next.js 15** - App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Static Export** - Pre-rendered HTML
