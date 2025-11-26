# CiaoCiao.social Style Guide

This document defines the visual design system for CiaoCiao.social. All design decisions should adhere to these guidelines.

---

## Typography

### Font Families

| Usage | Font Family | Fallbacks |
|-------|-------------|-----------|
| Headings & Titles | EB Garamond | Georgia, "Times New Roman", serif |
| Body Text | Inter | -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif |

### Font Weights

| Element | Weight |
|---------|--------|
| Body text / Descriptions | 300 (Light) |
| Navigation links | 300 (Light) |
| Card titles | 600 (Semi-bold) |
| Section titles | 400 (Regular) |
| Buttons | 500 (Medium) |

### Font Sizes

```
--text-4xl: 68px    (Hero titles)
--text-3xl: 54px    (Section titles)
--text-2xl: 34px
--text-xl: 28px     (Card titles)
--text-lg: 24px
--text-md: 20px
--text-base: 18px   (Body text)
--text-sm: 14px     (Small text, badges, pills)
```

### Line Heights

```
--leading-tight: 1.1     (Headings)
--leading-normal: 1.4    (Default)
--leading-relaxed: 1.6   (Body text, descriptions)
```

---

## Color Palette

### Primary Colors

| Name | Hex | Usage |
|------|-----|-------|
| Color 1 (Green) | `#DCFEBC` | Accents, highlights |
| Color 2 (Blue) | `#BBECFF` | Backgrounds, badges, sidebars |
| Color 3 (Yellow/Orange) | `#FFBA00` | Icons, accents |
| Color 4 (Lavender) | `#E2C6FF` | Icons, accents |
| Color 5 (Yellow) | `#F1EE83` | Stat cards, highlights |
| Color 6 (Beige) | `#F7F3EF` | Section backgrounds |

### Neutral Colors

| Name | Hex | Usage |
|------|-----|-------|
| Black | `#000000` | Borders, text emphasis |
| Dark Grey | `#151515` | Primary text, buttons |
| Grey | `#797979` | Secondary text |
| Light Grey | `#F7F7F7` | Subtle backgrounds |
| White | `#FFFFFF` | Primary background |

### Component-Specific Colors

| Component | Color | Hex |
|-----------|-------|-----|
| Card background | Light grey | `#F3F3F3` |
| Peach sidebar | Peach | `#F5C9B8` |
| Yellow sidebar | Gold | `#F7D681` |

---

## Borders & Shadows

### Border Style

- **Weight**: 1px solid
- **Color**: Black (`#000000`)
- **Corners**: Sharp/square (no border-radius) for cards and content blocks

### Offset Shadow Border

Cards use a distinctive double-border shadow effect:

```css
border: 1px solid var(--color-black);
box-shadow: 6px 6px 0 -1px var(--color-white), 6px 6px 0 0 var(--color-black);
```

This creates a white-filled offset shadow with a black border.

---

## Spacing Scale

```
--space-1: 4px
--space-2: 12px
--space-3: 26px
--space-4: 40px
--space-5: 60px
--space-6: 80px
--space-7: 100px
--space-8: 120px
```

---

## Layout

### Container Widths

```
--container-default: 1380px
--container-lg: 1040px
--container-md: 780px
```

### Grid Patterns

| Section | Grid Ratio | Description |
|---------|------------|-------------|
| Hero | 1fr 1fr | Equal split |
| Insights | 1fr 1fr | Equal split with colored left panel |
| How It Works | repeat(3, 1fr) | Three equal columns |
| Features/Included | 1fr 2fr | Narrow left (sticky), wide right (cards) |

### Sticky Positioning

Left-side titles in scrolling sections use sticky positioning:
```css
position: sticky;
top: calc(var(--header-height) + var(--space-4));
```

---

## Components

### Buttons

**Primary/Dark Button**
- Background: Dark grey (`#151515`)
- Text: White
- Border-radius: Full (pill shape, 50px)
- Padding: 14px 24px
- Hover: Slight lift (`translateY(-2px)`)

**Outline Button**
- Background: White
- Border: 2px solid dark grey
- Text: Dark grey
- Border-radius: Full (pill shape)

### Navigation

- Font weight: 300
- Hover effect: Underline slides in from left
- Animation: `transform: scaleX()` with 0.3s ease

### Cards (Feature Cards)

```css
background-color: #F3F3F3;
border-radius: 0;              /* Sharp corners */
border: 1px solid #000;
box-shadow: 6px 6px 0 -1px #fff, 6px 6px 0 0 #000;
```

**Card Structure:**
- Colored sidebar (100x100px) with white icon box inside
- Content area with title, description, and pill list
- Pills stacked vertically

### Pills/Tags

- Background: White
- Border-radius: 50px (full pill shape)
- Padding: 8px 14px
- Font size: 14px
- Include checkmark icon via pseudo-element

### Badges

- Background: Colored (typically color-2 blue or dark grey)
- Border-radius: Full (pill shape)
- Padding: 8px 16px
- Font size: 14px
- Letter-spacing: 0.5px
- Often includes icon

---

## Background Patterns

### Hero Dot Pattern

```css
background-image: radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
background-size: 24px 24px;
```

---

## Icons

- Style: Line/outline style
- Stroke width: 1.5px - 2.5px
- Color: Inherits from parent (currentColor)
- Contained in colored boxes or circles

---

## Section Dividers

- 1px solid black horizontal lines
- No decorative bars or colored dividers between main sections

---

## Responsive Breakpoints

```
1024px - Tablet (switch to single column layouts)
640px  - Mobile (further simplification)
```

### Mobile Adaptations

- Navigation collapses to hamburger menu
- Grid layouts become single column
- Cards stack vertically
- Sticky elements become static

---

## Design Principles

1. **Minimalist**: Clean, uncluttered layouts with generous whitespace
2. **Editorial**: Serif headings (EB Garamond) give a sophisticated, editorial feel
3. **Sharp & Modern**: Square corners on cards contrast with pill-shaped buttons
4. **Subtle Depth**: Offset shadow borders add dimension without being heavy
5. **Light Typography**: 300 weight body text for an airy, readable feel
6. **Colorful Accents**: Bright, friendly colors used sparingly for sidebars and highlights
