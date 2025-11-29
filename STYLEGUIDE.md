# CiaoCiao Style Guide — RetroUI Edition

This document defines the visual design system for CiaoCiao, built on **RetroUI** with customized CiaoCiao brand colors.

---

## Implementation

This project uses:
- **Tailwind CSS v4** with `@theme` configuration
- **RetroUI** component library (via shadcn CLI)
- **CiaoCiao brand colors** integrated into the RetroUI theme

### RetroUI Components

Components are installed in `components/retroui/`:

| Component | Usage |
|-----------|-------|
| `Button` | Primary actions, CTAs, navigation |
| `Card` | Content containers, feature cards, pricing cards |
| `Text` | Typography with heading styles |
| `Badge` | Labels, tags, category indicators |
| `Accordion` | FAQ sections, expandable content |

### Import Pattern

```tsx
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";
import { Badge } from "@/components/retroui/Badge";
import { Accordion } from "@/components/retroui/Accordion";
```

---

## Typography

### Font Families

| Usage | Font Family | CSS Variable | Tailwind Class |
|-------|-------------|--------------|----------------|
| Headings & Titles | Archivo Black | `--font-head` | `font-head` |
| Body Text | Space Grotesk | `--font-sans` | `font-sans` |

Fonts are loaded via Next.js `next/font/google` in `layout.tsx`.

### Text Component

Use the `Text` component for headings:

```tsx
<Text as="h1">Hero Heading</Text>
<Text as="h2" className="section-title">Section Title</Text>
<Text as="h3">Card Title</Text>
```

### Font Weights

| Element | Weight | Tailwind Class |
|---------|--------|----------------|
| Body text | 400 (Normal) | `font-normal` |
| Emphasis | 500 (Medium) | `font-medium` |
| Buttons | 500 (Medium) | Built into Button component |
| Headings | 400-700 | Built into Text component |

---

## Color Palette

Based on the **Sepidy Color Palette** - a vibrant, playful collection perfect for the RetroUI aesthetic.

### Theme Colors (RetroUI integrated)

| Variable | Light Value | Usage |
|----------|-------------|-------|
| `--background` | `#fff` | Page background |
| `--foreground` | `#151515` | Primary text |
| `--primary` | `#FFDB58` | Primary buttons, accents |
| `--primary-hover` | `#F4D738` | Button hover state |
| `--secondary` | `#151515` | Dark buttons, footer |
| `--muted` | `#DAF5F0` | Subtle backgrounds |
| `--muted-foreground` | `#797979` | Secondary text |
| `--accent` | `#FDFD96` | Highlights |
| `--border` | `#151515` | All borders |
| `--card` | `#DAF5F0` | Card backgrounds |
| `--destructive` | `#FF6B6B` | Error states |

### CiaoCiao Brand Colors (Sepidy Palette)

**Primary Colors:**

| Name | Hex | Tailwind Class | Usage |
|------|-----|----------------|-------|
| Green | `#BAFCA2` | `bg-cc-1` | CTA backgrounds |
| Sky Blue | `#87CEEB` | `bg-cc-2` | Badges, feature sidebars |
| Golden Yellow | `#FFDB58` | `bg-cc-3` | Primary color, icons |
| Lavender | `#C4A1FF` | `bg-cc-4` | Section backgrounds |
| Light Yellow | `#FDFD96` | `bg-cc-5` | Highlights, accents |
| Peach | `#F8D6B3` | `bg-cc-6` | Section backgrounds |

**Accent Colors:**

| Name | Hex | Tailwind Class | Usage |
|------|-----|----------------|-------|
| Salmon | `#FFA07A` | `bg-cc-peach` | Feature sidebars |
| Gold | `#F4D738` | `bg-cc-gold` | Feature sidebars |
| Cream | `#FDFD96` | `bg-cc-cream` | Featured cards |
| Pink | `#FFC0CB` | `bg-cc-highlight` | Active states |
| Coral | `#FF7A5C` | `bg-cc-coral` | Warm accents |
| Hot Pink | `#FF69B4` | `bg-cc-hotpink` | Bold accents |
| Purple | `#A388EE` | `bg-cc-purple` | Cool accents |
| Teal | `#69D2E7` | `bg-cc-teal` | Cool highlights |
| Sage | `#7FBC8C` | `bg-cc-sage` | Nature tones |

**Neutral Colors:**

| Name | Hex | Tailwind Class | Usage |
|------|-----|----------------|-------|
| Light Mint | `#DAF5F0` | `bg-cc-light` | Subtle backgrounds |
| Dark | `#151515` | `bg-cc-dark` | Text, borders |
| Grey | `#797979` | `text-cc-grey` | Secondary text |

### Full Sepidy Palette Reference

```
Row 1 (Lightest):
#DAF5F0  #B5D2AD  #FDFD96  #F8D6B3  #FCDFF   #E3DFF2

Row 2:
#A7DBD8  #BAFCA2  #FFDB58  #FFA07A  #FFC0CB  #C4A1FF

Row 3:
#87CEEB  #90EE90  #F4D738  #FF7A5C  #FFB2EF  #A388EE

Row 4 (Most Saturated):
#69D2E7  #7FBC8C  #E3A018  #FF6B6B  #FF69B4  #9723C9
```

---

## Borders & Shadows

### RetroUI Shadow System

All shadows use offset box-shadow with `--border` color:

| Tailwind | CSS | Usage |
|----------|-----|-------|
| `shadow-xs` | `1px 1px 0 0 var(--border)` | Minimal depth |
| `shadow-sm` | `2px 2px 0 0 var(--border)` | Small elements |
| `shadow` | `3px 3px 0 0 var(--border)` | Default shadow |
| `shadow-md` | `4px 4px 0 0 var(--border)` | Buttons, badges |
| `shadow-lg` | `6px 6px 0 0 var(--border)` | Cards |
| `shadow-xl` | `10px 10px 0 1px var(--border)` | Large cards |

### Border Style

- **Width**: 2px solid — use `border-2 border-border`
- **Color**: Uses `--border` (dark grey `#151515`)
- **Corners**: Sharp/square (no border-radius) — `--radius: 0`

---

## Components

### Button

RetroUI Button with offset shadow and hover animations:

```tsx
// Primary (default)
<Button asChild size="lg">
  <Link href="#cta">Get Started</Link>
</Button>

// Outline
<Button variant="outline" size="md">Learn More</Button>

// Secondary (dark)
<Button variant="secondary">Contact Sales</Button>
```

**Variants**: `default`, `secondary`, `outline`, `link`, `ghost`
**Sizes**: `sm`, `md`, `lg`, `icon`

### Card

```tsx
<Card className="p-6">
  <Card.Header>
    <Card.Title>Feature Title</Card.Title>
    <Card.Description>Description text</Card.Description>
  </Card.Header>
  <Card.Content>
    {/* Content */}
  </Card.Content>
</Card>
```

### Badge

```tsx
<Badge variant="solid">HOW IT WORKS</Badge>
<Badge variant="surface" className="border-2 border-border">FEATURES</Badge>
```

**Variants**: `default`, `outline`, `solid`, `surface`

### Accordion (FAQ)

```tsx
<Accordion type="single" collapsible className="flex flex-col gap-4">
  <Accordion.Item value="item-1">
    <Accordion.Header>Question?</Accordion.Header>
    <Accordion.Content>Answer text here.</Accordion.Content>
  </Accordion.Item>
</Accordion>
```

---

## Custom Utilities

Defined in `app/globals.css`:

| Class | Purpose |
|-------|---------|
| `btn` | Base button (custom utility) |
| `btn-primary` | Yellow/orange button |
| `btn-secondary` | Dark button |
| `btn-outline` | Outline button |
| `card-shadow` | 6px offset shadow |
| `card-shadow-sm` | 3px offset shadow |
| `section-title` | Section heading with font-head |
| `body-text` | Body paragraph styling |
| `nav-link` | Navigation link with underline |
| `badge` | Custom badge styling |
| `pill` | Pill-shaped tag with shadow |
| `dot-pattern` | Dot grid background |
| `hide-scrollbar` | Hide scrollbar utility |

---

## Layout

### Container Widths

| Tailwind Class | Width | Usage |
|----------------|-------|-------|
| `max-w-[1380px]` | 1380px | Main content container |
| `max-w-[1040px]` | 1040px | FAQ section |
| `max-w-[780px]` | 780px | CTA section |

### Grid Patterns

| Section | Classes |
|---------|---------|
| Hero | `grid lg:grid-cols-2` |
| Features | `grid lg:grid-cols-[1fr_2fr]` |
| How It Works | `grid lg:grid-cols-3` |
| Pricing | `grid lg:grid-cols-3` |

---

## Responsive Breakpoints

| Prefix | Min Width |
|--------|-----------|
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |
| `xl:` | 1280px |

---

## Design Principles

1. **Bold & Retro**: Sharp corners, offset shadows, chunky borders
2. **Playful Typography**: Archivo Black headings create visual impact
3. **High Contrast**: Dark borders on light backgrounds
4. **Interactive Feedback**: Buttons move on hover/click with shadow changes
5. **CiaoCiao Colors**: Bright, friendly accent colors for sidebars and highlights
6. **Consistent Spacing**: 2px borders, consistent padding patterns

---

## Quick Reference

### Section Background Pattern

```tsx
// Standard section
<section className="bg-background border-t-2 border-border py-12 md:py-[100px]">

// Colored section
<section className="bg-cc-6 border-t-2 border-border py-12 md:py-[100px]">
```

### Adding Icons

```tsx
import { IconName } from "lucide-react";

<div className="w-12 h-12 border-2 border-border bg-cc-2 flex items-center justify-center">
  <IconName size={24} strokeWidth={1.5} />
</div>
```
