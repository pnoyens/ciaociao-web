# CiaoCiao.social Style Guide

This document defines the visual design system for CiaoCiao.social. All design decisions should adhere to these guidelines.

---

## Implementation

This project uses **Tailwind CSS v4** with custom theme configuration. All design tokens are defined in `app/globals.css` using the `@theme` directive.

### Custom Utility Classes

The following utility classes are available via `@utility` in globals.css:

| Class | Purpose |
|-------|---------|
| `btn` | Base button styling |
| `btn-dark` | Dark button variant |
| `btn-outline` | Outline button variant |
| `card-shadow` | Offset shadow effect for cards |
| `card-shadow-cream` | Cream-colored offset shadow |
| `section-title` | Section heading typography |
| `body-text` | Body text styling |
| `nav-link` | Navigation link with underline animation |
| `badge` | Badge/tag styling |
| `pill` | Pill-shaped tag |
| `check-icon` | Checkmark icon pseudo-element |
| `dot-pattern` | Dot grid background pattern |
| `hide-scrollbar` | Hide scrollbar utility |

---

## Typography

### Font Families

| Usage | Font Family | Tailwind Class | Fallbacks |
|-------|-------------|----------------|-----------|
| Headings & Titles | EB Garamond | `font-serif` | Georgia, "Times New Roman", serif |
| Body Text | Inter | `font-sans` | -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif |

### Font Weights

| Element | Weight | Tailwind Class |
|---------|--------|----------------|
| Body text / Descriptions | 300 (Light) | `font-light` |
| Navigation links | 300 (Light) | `font-light` |
| Card titles | 600 (Semi-bold) | `font-semibold` |
| Section titles | 400 (Regular) | `font-normal` |
| Buttons | 500 (Medium) | `font-medium` |

### Font Sizes

Use Tailwind's built-in text size classes or custom values:

| Size | Tailwind Class | Usage |
|------|----------------|-------|
| 68px | `text-7xl` or custom | Hero titles |
| 54px | `text-5xl` or custom | Section titles |
| 34px | `text-3xl` | Large text |
| 28px | `text-2xl` | Card titles |
| 24px | `text-xl` | Medium headings |
| 20px | `text-lg` | Subheadings |
| 18px | `text-lg` | Body text |
| 14px | `text-sm` | Small text, badges, pills |

### Line Heights

| Usage | Tailwind Class |
|-------|----------------|
| Headings | `leading-tight` (1.1) |
| Default | `leading-normal` (1.4) |
| Body text | `leading-relaxed` (1.6) |

---

## Color Palette

All colors are defined in the `@theme` block with the `cc-` prefix.

### Primary Colors

| Name | Hex | Tailwind Class | Usage |
|------|-----|----------------|-------|
| Color 1 (Green) | `#DCFEBC` | `bg-cc-1`, `text-cc-1` | Accents, highlights |
| Color 2 (Blue) | `#BBECFF` | `bg-cc-2`, `text-cc-2` | Backgrounds, badges, sidebars |
| Color 3 (Yellow/Orange) | `#FFBA00` | `bg-cc-3`, `text-cc-3` | Icons, accents |
| Color 4 (Lavender) | `#E2C6FF` | `bg-cc-4`, `text-cc-4` | Icons, accents |
| Color 5 (Yellow) | `#F1EE83` | `bg-cc-5`, `text-cc-5` | Stat cards, highlights |
| Color 6 (Beige) | `#F7F3EF` | `bg-cc-6`, `text-cc-6` | Section backgrounds |

### Neutral Colors

| Name | Hex | Tailwind Class | Usage |
|------|-----|----------------|-------|
| Black | `#000000` | `border-black`, `text-black` | Borders, text emphasis |
| Dark Grey | `#151515` | `bg-cc-dark`, `text-cc-dark` | Primary text, buttons |
| Grey | `#797979` | `text-cc-grey` | Secondary text |
| Light Grey | `#F7F7F7` | `bg-cc-light` | Subtle backgrounds |
| White | `#FFFFFF` | `bg-white`, `text-white` | Primary background |

### Component-Specific Colors

| Component | Color | Tailwind Class |
|-----------|-------|----------------|
| Card background | `#F3F3F3` | `bg-cc-card` |
| Peach sidebar | `#F5C9B8` | `bg-cc-peach` |
| Yellow sidebar | `#F7D681` | `bg-cc-gold` |
| Cream | `#FFFDD0` | `bg-cc-cream` |
| Highlight | `#FFE8D6` | `bg-cc-highlight` |

---

## Borders & Shadows

### Border Style

- **Weight**: 1px solid — use `border border-black`
- **Color**: Black (`#000000`)
- **Corners**: Sharp/square (no border-radius) for cards and content blocks — use `rounded-none`

### Offset Shadow Border

Cards use a distinctive double-border shadow effect. Use the `card-shadow` utility class:

```tsx
<div className="card-shadow bg-cc-card">
  {/* Card content */}
</div>
```

Or apply manually:
```css
border: 1px solid black;
box-shadow: 6px 6px 0 -1px white, 6px 6px 0 0 black;
```

---

## Spacing Scale

Use Tailwind's spacing utilities. Common values:

| Tailwind | Value | Usage |
|----------|-------|-------|
| `p-1`, `m-1` | 4px | Minimal spacing |
| `p-3`, `m-3` | 12px | Small spacing |
| `p-6`, `m-6` | 24px | Medium spacing |
| `p-10`, `m-10` | 40px | Large spacing |
| `py-16` | 64px | Section padding |
| `py-20` | 80px | Large section padding |

---

## Layout

### Container Widths

Use Tailwind's `max-w-*` classes:

| Tailwind Class | Width | Usage |
|----------------|-------|-------|
| `max-w-7xl` | 1280px | Default container |
| `max-w-5xl` | 1024px | Medium container |
| `max-w-3xl` | 768px | Narrow container |

### Grid Patterns

| Section | Tailwind Classes | Description |
|---------|------------------|-------------|
| Hero | `grid lg:grid-cols-2` | Equal split |
| Insights | `grid lg:grid-cols-2` | Equal split with colored left panel |
| How It Works | `grid md:grid-cols-3` | Three equal columns |
| Features | `grid lg:grid-cols-[1fr_2fr]` | Narrow left (sticky), wide right |

### Sticky Positioning

Left-side titles in scrolling sections use sticky positioning:
```tsx
<div className="lg:sticky lg:top-24">
  {/* Sticky title content */}
</div>
```

---

## Components

### Buttons

**Primary/Dark Button** — use `btn btn-dark`
```tsx
<button className="btn btn-dark">
  Get Started
</button>
```

**Outline Button** — use `btn btn-outline`
```tsx
<button className="btn btn-outline">
  Learn More
</button>
```

### Navigation

Use the `nav-link` utility class:
```tsx
<a href="#features" className="nav-link">Features</a>
```
- Font weight: 300 (light)
- Hover effect: Underline slides in from left

### Cards (Feature Cards)

Use `card-shadow` with `bg-cc-card`:
```tsx
<div className="bg-cc-card card-shadow">
  <div className="flex">
    <div className="w-24 bg-cc-peach flex items-center justify-center">
      {/* Icon */}
    </div>
    <div className="p-6">
      <h3 className="font-serif text-xl font-semibold">{title}</h3>
      <p className="body-text">{description}</p>
    </div>
  </div>
</div>
```

**Card Structure:**
- Colored sidebar with icon container
- Content area with title, description, and pill list
- Pills stacked vertically

### Pills/Tags

Use the `pill` utility class:
```tsx
<span className="pill check-icon">{text}</span>
```

### Badges

Use the `badge` utility class:
```tsx
<span className="badge bg-cc-2">
  <Icon /> Label
</span>
```

---

## Background Patterns

### Hero Dot Pattern

Use the `dot-pattern` utility class:
```tsx
<div className="dot-pattern">
  {/* Content with dot background */}
</div>
```

---

## Icons

- Style: Line/outline style (SVG)
- Stroke width: 1.5px - 2.5px
- Color: Inherits from parent (`currentColor`)
- Contained in colored boxes or circles

```tsx
<div className="w-12 h-12 bg-white rounded flex items-center justify-center">
  <svg className="w-6 h-6" strokeWidth="1.5">...</svg>
</div>
```

---

## Section Dividers

- 1px solid black horizontal lines — use `border-t border-black`
- No decorative bars or colored dividers between main sections

---

## Responsive Breakpoints

Tailwind breakpoint prefixes:

| Prefix | Min Width | Usage |
|--------|-----------|-------|
| `sm:` | 640px | Mobile adjustments |
| `md:` | 768px | Tablet portrait |
| `lg:` | 1024px | Tablet landscape / Desktop |
| `xl:` | 1280px | Large desktop |

### Mobile Adaptations

- Navigation collapses to hamburger menu at `lg:` breakpoint
- Grid layouts become single column on mobile (use `lg:grid-cols-*`)
- Cards stack vertically
- Sticky elements become static (use `lg:sticky`)

```tsx
{/* Example responsive grid */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  {/* Items */}
</div>
```

---

## Design Principles

1. **Minimalist**: Clean, uncluttered layouts with generous whitespace
2. **Editorial**: Serif headings (EB Garamond) give a sophisticated, editorial feel
3. **Sharp & Modern**: Square corners on cards contrast with pill-shaped buttons
4. **Subtle Depth**: Offset shadow borders add dimension without being heavy
5. **Light Typography**: 300 weight body text for an airy, readable feel
6. **Colorful Accents**: Bright, friendly colors used sparingly for sidebars and highlights
