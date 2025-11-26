# CLAUDE.md - CiaoCiao.social Project Guidelines

## Project Overview

CiaoCiao.social is a landing page for a LinkedIn engagement and relationship intelligence tool. The design follows a minimalist, editorial aesthetic with a focus on clean typography and subtle visual depth.

## Style Guide

**All visual and design changes must adhere to the [STYLEGUIDE.md](./STYLEGUIDE.md).**

Before making any styling changes:
1. Read STYLEGUIDE.md to understand the design system
2. Use only the defined colors, spacing, and typography
3. Follow the established component patterns
4. Maintain sharp corners on cards, pill shapes on buttons

## Key Design Rules

### Typography
- **Headings**: EB Garamond (serif), weight 400-600
- **Body text**: Inter, weight 300
- Never use font weights outside the defined scale

### Borders & Cards
- Cards use sharp square corners (no border-radius)
- Border: 1px solid black
- Offset shadow: `box-shadow: 6px 6px 0 -1px #fff, 6px 6px 0 0 #000`

### Buttons & Pills
- Always use full border-radius (pill shape)
- Primary buttons: dark grey background, white text

### Colors
- Use only colors defined in CSS variables
- Background: white
- Section backgrounds: use color palette (color-1 through color-6)

## File Structure

```
ciaociao-social/
├── index.html          # Main HTML
├── styles.css          # All styles (CSS variables at top)
├── fonts/              # EB Garamond font files
├── STYLEGUIDE.md       # Design system documentation
└── CLAUDE.md           # This file
```

## Development Notes

- CSS uses BEM-style naming convention
- All spacing uses CSS custom properties (--space-1 through --space-8)
- Responsive breakpoints: 1024px (tablet), 640px (mobile)
- Header is fixed position with 75px height

## Do Not

- Add border-radius to cards or content blocks
- Use font weights other than 300, 400, 500, 600
- Add colored dividers between sections
- Deviate from the established color palette
- Create new CSS files (keep styles in styles.css)
