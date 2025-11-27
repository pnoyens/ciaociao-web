# CLAUDE.md - CiaoCiao.social Project Guidelines

## Project Overview

CiaoCiao.social is a landing page for a LinkedIn engagement and relationship intelligence tool. The design follows a minimalist, editorial aesthetic with a focus on clean typography and subtle visual depth.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **React**: 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with `@theme` and `@utility` directives
- **Fonts**: EB Garamond (serif headings), Inter (body text)

## Style Guide

**All visual and design changes must adhere to the [STYLEGUIDE.md](./STYLEGUIDE.md).**

Before making any styling changes:
1. Read STYLEGUIDE.md to understand the design system
2. Use only the defined colors, spacing, and typography
3. Follow the established component patterns
4. Maintain sharp corners on cards, pill shapes on buttons

## Key Design Rules

### Typography
- **Headings**: EB Garamond (serif), weight 400-600 — use `font-serif`
- **Body text**: Inter, weight 300 — use `font-sans`
- Never use font weights outside the defined scale

### Borders & Cards
- Cards use sharp square corners (no border-radius)
- Use the `card-shadow` utility class for the offset shadow effect

### Buttons & Pills
- Always use full border-radius (pill shape)
- Use `btn btn-dark` or `btn btn-outline` utility classes

### Colors
- Use Tailwind theme colors prefixed with `cc-` (e.g., `bg-cc-1`, `text-cc-dark`)
- Background: white
- Section backgrounds: use color palette (`cc-1` through `cc-6`)

## File Structure

```
ciaociao-web/
├── app/
│   ├── globals.css     # Tailwind v4 theme & custom utilities
│   ├── layout.tsx      # Root layout with font setup
│   └── page.tsx        # Main page composing all sections
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
├── STYLEGUIDE.md       # Design system documentation
└── CLAUDE.md           # This file
```

## Development Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Development Notes

- Use Tailwind utility classes for styling
- Custom utilities defined in `app/globals.css` using `@utility` directive
- Theme colors defined using `@theme` block in globals.css
- Responsive breakpoints: `lg:` (1024px), `sm:` (640px)
- Header is fixed position with h-[75px]

## Do Not

- Add border-radius to cards or content blocks
- Use font weights other than 300, 400, 500, 600
- Add colored dividers between sections
- Deviate from the established color palette
- Create separate CSS files (keep custom styles in globals.css)
