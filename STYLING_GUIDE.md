# Styling Guide & CSS Patterns

Complete reference for Tailwind CSS patterns, custom styles, and design system implementation used in VisionAttend AI.

## Color Palette

### Primary Colors
```css
--accent-green: #00f06f;    /* Primary action, highlights */
--accent-cyan: #00e5ff;     /* Secondary accents, gradients */
```

### Background Colors
```css
--bg-dark: #020617;         /* Darkest background */
--bg-slate-900: #0f1419;    /* Dark cards */
--bg-slate-800: #1a202c;    /* Slightly lighter cards */
```

### Text Colors
```css
--text-white: #ffffff;      /* Primary text */
--text-gray-300: #d1d5db;   /* Secondary text */
--text-gray-400: #9ca3af;   /* Tertiary text */
--text-gray-500: #6b7280;   /* Muted text */
```

## Typography System

### Font Stack

```html
<!-- Heading Font (Orbitron) -->
<h1 class="font-[family-name:Orbitron]">Text</h1>

<!-- Body Font (Plus Jakarta Sans) -->
<p class="font-['Plus_Jakarta_Sans']">Text</p>

<!-- Google Fonts Import -->
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@900&family=Plus+Jakarta+Sans" rel="stylesheet">
```

### Font Sizes & Hierarchy

| Element | Size | Weight | Class |
|---------|------|--------|-------|
| H1 (Hero) | 96px | 900 | `text-9xl font-black` |
| H2 (Section) | 48px | 700 | `text-4xl font-bold` |
| H3 (Subsection) | 36px | 700 | `text-3xl font-bold` |
| H4 (Card Title) | 24px | 600 | `text-2xl font-semibold` |
| Body (Default) | 16px | 400 | `text-base` |
| Small (Caption) | 14px | 400 | `text-sm text-gray-400` |
| Tiny (Hint) | 12px | 400 | `text-xs text-gray-500` |

### Line Height

```css
.heading { line-height: 1.1; }        /* Tight for impact */
.body { line-height: 1.6; }           /* Relaxed for readability */
.caption { line-height: 1.4; }        /* Medium for descriptions */
```

## Component Patterns

### Glass-Morphism Card

```html
<div class="bg-slate-900/50 backdrop-blur-md border border-slate-700/30 rounded-lg p-6 shadow-xl hover:border-slate-600/50 transition-all duration-300">
  <!-- Content -->
</div>
```

**Usage**: General cards, feature blocks, content containers

### Gradient Text

```html
<h1 class="bg-gradient-to-r from-[#00f06f] to-[#00e5ff] bg-clip-text text-transparent drop-shadow-md">
  Gradient Title
</h1>
```

**Rule**: Always add `drop-shadow-md` for readability on dark backgrounds

### Dark Button

```html
<!-- Primary Button -->
<button class="bg-[#00f06f] text-black font-bold px-6 py-2 rounded hover:opacity-90 transition-all duration-300">
  Action
</button>

<!-- Secondary Button -->
<button class="bg-slate-800 text-white border border-slate-600 font-bold px-6 py-2 rounded hover:bg-slate-700 transition-all duration-300">
  Secondary
</button>

<!-- Ghost Button -->
<button class="text-white border border-white px-6 py-2 rounded hover:bg-white/10 transition-all duration-300">
  Ghost
</button>
```

### Icon Button

```html
<button class="text-2xl text-white hover:text-[#00e5ff] transition-colors duration-300" aria-label="Menu">
  <i class="fas fa-bars"></i>
</button>
```

### Input Field

```html
<input 
  type="text"
  class="w-full bg-slate-800 border border-slate-600 rounded px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00f06f] focus:shadow-lg transition-all duration-300"
  placeholder="Placeholder text"
>
```

**Pattern**: 
- Default: slate-600 border
- Focus: green accent border + shadow
- Error: red border

### Select Dropdown

```html
<select class="w-full bg-slate-800 border border-slate-600 rounded px-4 py-2 text-white focus:outline-none focus:border-[#00f06f] transition-all duration-300">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

### Text Area

```html
<textarea 
  class="w-full bg-slate-800 border border-slate-600 rounded px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00f06f] resize-none"
  rows="4"
  placeholder="Message"
></textarea>
```

## Layout Patterns

### Container

```html
<div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
  <!-- Content -->
</div>
```

### Section with Padding

```html
<section class="py-20 md:py-28 px-4">
  <!-- Content -->
</section>
```

### Grid Layout (Responsive)

```html
<!-- 1 col mobile → 2 tablet → 3 desktop -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Flex Stack

```html
<!-- Vertical stack with gap -->
<div class="flex flex-col gap-6">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Horizontal stack with gap -->
<div class="flex flex-row gap-4 items-center justify-between">
  <div>Left</div>
  <div>Right</div>
</div>
```

### Centered Content

```html
<div class="flex flex-col items-center justify-center min-h-screen">
  <!-- Content -->
</div>
```

## Animation & Transition Patterns

### Hover Opacity

```html
<div class="hover:opacity-80 transition-opacity duration-300">Hover me</div>
```

### Hover Color

```html
<div class="text-white hover:text-[#00e5ff] transition-colors duration-300">
  Hover me
</div>
```

### Hover Scale

```html
<button class="hover:scale-105 transition-transform duration-300">
  Click me
</button>
```

### Multi-Property Transition

```html
<div class="hover:bg-slate-700 hover:border-[#00f06f] hover:shadow-xl transition-all duration-300">
  Hover me
</div>
```

### Pulse Animation

```html
<div class="animate-pulse">
  Loading...
</div>
```

## Spacing System

| Size | px | rem | Class |
|------|----|----|-------|
| XS | 4 | 0.25 | `p-1` |
| SM | 8 | 0.5 | `p-2` |
| MD | 16 | 1 | `p-4` |
| LG | 24 | 1.5 | `p-6` |
| XL | 32 | 2 | `p-8` |
| 2XL | 48 | 3 | `p-12` |
| 3XL | 64 | 4 | `p-16` |

**Usage**: Apply consistently across all components

## Shadow System

| Level | Class | Usage |
|-------|-------|-------|
| Subtle | `shadow` | Minimal elevation |
| Medium | `shadow-md` | Standard cards |
| Large | `shadow-lg` | Floating elements |
| Extra Large | `shadow-xl` | Prominent cards |
| 2XL | `shadow-2xl` | Modal dialogs |

## Border Patterns

### Subtle Border
```html
<div class="border border-slate-700/30">
  <!-- Content -->
</div>
```

### Accent Border
```html
<div class="border border-[#00f06f]/50">
  <!-- Content -->
</div>
```

### Focus Border
```html
<input class="focus:border-[#00f06f]">
```

## Responsive Design Patterns

### Mobile-First Approach

```html
<!-- Mobile default: single column, large padding -->
<div class="grid grid-cols-1 px-4 py-4">

<!-- Tablet: two columns, medium padding -->
<div class="md:grid-cols-2 md:px-6 md:py-6">

<!-- Desktop: three columns, small padding -->
<div class="lg:grid-cols-3 lg:px-8 lg:py-8">
```

### Hidden/Visible

```html
<!-- Hide on mobile, show on tablet+ -->
<div class="hidden md:block">Desktop only</div>

<!-- Show on mobile, hide on tablet+ -->
<div class="md:hidden">Mobile only</div>
```

### Text Sizing

```html
<h1 class="text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
  Responsive Heading
</h1>
```

## Dark Mode Implementation

### Base Setup
```html
<html class="dark">
  <!-- All content inherits dark mode -->
</html>
```

### Dark Mode Classes
```html
<!-- Light mode (default) -->
<div class="bg-white text-black">

<!-- Dark mode override -->
<div class="dark:bg-black dark:text-white">
```

## Custom CSS

### Backdrop Filter Support
```css
.backdrop-blur-md {
  backdrop-filter: blur(12px);
}
```

### Gradient Backgrounds
```css
.gradient-accent {
  background: linear-gradient(135deg, #00f06f 0%, #00e5ff 100%);
}
```

### Custom Shadows
```css
.shadow-glow {
  box-shadow: 0 0 30px rgba(0, 240, 111, 0.3);
}
```

## Performance Optimizations

### CSS Purging
- Only used Tailwind classes are included
- No duplicate styles
- Minimal CSS file size

### Critical CSS
- Hero section styles inlined
- Prevents render-blocking
- Better Core Web Vitals

### Optimization Checklist
- [ ] No unused CSS classes
- [ ] Images optimized and lazy-loaded
- [ ] Fonts loaded asynchronously
- [ ] Minimal JavaScript
- [ ] Gzip compression enabled
- [ ] Browser caching configured

## Accessibility Standards

### Color Contrast
```css
/* WCAG AA (minimum 4.5:1) */
Color: #ffffff on #020617 = 21.1:1 ✓
Color: #00f06f on #020617 = 8.2:1 ✓
Color: #00e5ff on #020617 = 11.2:1 ✓
```

### Focus Indicators
```html
<input class="focus:ring-2 focus:ring-[#00f06f] focus:outline-none">
```

### Semantic Markup
```html
<button class="...">Click me</button>  <!-- Good -->
<div class="...">Click me</div>        <!-- Bad -->
```

## Testing Checklist

- [ ] Desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)
- [ ] Tablet devices
- [ ] Screen readers (NVDA, JAWS, VoiceOver)
- [ ] Keyboard navigation
- [ ] Color contrast ratio (4.5:1+)
- [ ] Responsive layouts
- [ ] Touch targets (minimum 44x44px)
