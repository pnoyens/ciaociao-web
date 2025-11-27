# CiaoCiao.social

Landing page for CiaoCiao.social — a LinkedIn engagement and relationship intelligence tool.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **React**: 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: EB Garamond (headings), Inter (body)

## Getting Started

### Prerequisites

- Node.js 18.17 or later

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

## Project Structure

```
ciaociao-web/
├── app/
│   ├── globals.css     # Tailwind theme & custom utilities
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Landing page
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── HowItWorks.tsx
│   ├── Insights.tsx
│   ├── Features.tsx
│   ├── UseCases.tsx
│   ├── Testimonials.tsx
│   ├── Pricing.tsx
│   ├── FAQ.tsx
│   ├── CTAFinal.tsx
│   └── Footer.tsx
├── public/
│   └── fonts/          # EB Garamond font files
├── CLAUDE.md           # Development guidelines
└── STYLEGUIDE.md       # Design system documentation
```

## Design System

The project follows a minimalist, editorial aesthetic. See [STYLEGUIDE.md](./STYLEGUIDE.md) for the complete design system including:

- Typography (EB Garamond + Inter)
- Color palette with `cc-*` prefixed Tailwind classes
- Custom utility classes (`btn`, `card-shadow`, `badge`, etc.)
- Component patterns

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## License

Private
