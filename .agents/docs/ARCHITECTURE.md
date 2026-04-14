# Architecture & Design System

Comprehensive guide to VisionAttend AI's technical architecture, design patterns, and app structure.

## Design Principles

1. **Dark-First Approach**: All designs start with dark backgrounds and light text
2. **Minimalist Elegance**: Glass-morphism and subtle animations for sophistication
3. **Performance Priority**: Optimized for both desktop and mobile devices
4. **Accessibility Focused**: WCAG AA compliance for inclusive experience
5. **Scalability**: Modular component design for easy expansion

## Information Architecture

### Application Structure

```
VisionAttend Website
├── Navigation (Fixed Header)
│   ├── Brand Logo/Text
│   ├── Voxeon Labs (section link)
│   ├── Sorting Lab (section link)
│   ├── AI Hub (section link)
│   └── Book Demo (CTA)
├── Hero Section
│   ├── Tagline
│   ├── Main Headline
│   ├── Description
│   └── Call-to-Action Buttons
├── Voxeon Ecosystem (Tabs)
│   ├── The Genesis
│   ├── Our Services
│   ├── Pricing Tiers
│   └── BTech DNA
├── Real-Time Sorting Engine
│   ├── Input Queue (sortable list)
│   ├── AI Processing
│   └── Output Categories (On Time, Grace, Late)
├── AI Policy Architect
│   ├── Organization Input
│   ├── Entity Type Selector
│   └── Protocol Generator
├── Contact Section
│   ├── Direct Communication Info
│   ├── Address & Maps
│   ├── Contact Form
│   └── Social Links
└── Footer
    └── Copyright & Links
```

## Component Architecture

### Base Components

#### 1. Card (Glass-Morphism)
- Background: `rgba(15, 23, 42, 0.75)` with `backdrop-blur-md`
- Border: Subtle light border at 30% opacity
- Shadow: Layered shadows for depth
- Padding: 24px (1.5rem) to 32px (2rem)

#### 2. Button
- Primary: Green accent (#00f06f) with black text
- Secondary: Slate background with white text
- Tertiary: Transparent with border
- States: Default, Hover, Focus, Active, Disabled

#### 3. Input Field
- Background: Dark slate (bg-slate-800)
- Border: Subtle border (border-slate-600)
- Focus: Green accent border (border-[#00f06f])
- Placeholder: Gray text

#### 4. Text Gradient
- `bg-gradient-to-r from-[#00f06f] to-[#00e5ff]`
- `bg-clip-text text-transparent`
- Drop-shadow for readability

### Complex Components

#### Section Header
```html
<div class="text-center mb-12">
  <p class="text-[#00f06f] font-semibold mb-4">Label</p>
  <h2 class="text-4xl md:text-5xl font-bold mb-4">Heading</h2>
  <p class="text-gray-300 max-w-2xl mx-auto">Description</p>
</div>
```

#### Feature Card
```html
<div class="bg-slate-900/50 backdrop-blur border border-slate-700/30 rounded-lg p-6 hover:border-slate-600/50 transition-all">
  <div class="text-4xl mb-4">🎯</div>
  <h3 class="text-xl font-bold mb-2">Title</h3>
  <p class="text-gray-400">Description</p>
</div>
```

## State Management

### Tab System (Voxeon Ecosystem)
- Single active tab at any time
- Content switches via JavaScript
- Visual indicator: Green accent border/background
- Smooth transition between states

### Queue System (Sorting Lab)
- Real-time item display from input list
- Categorization into three output buckets
- Animated transitions
- Processing state feedback

### Form States
- **Empty**: Placeholder text, default styling
- **Focused**: Green accent border, shadow
- **Filled**: White text, active styling
- **Error**: Red border, error message
- **Submitted**: Success feedback, form reset

## Data Flow

```
User Input (Form/Buttons)
    ↓
JavaScript Event Handler
    ↓
Data Processing/Validation
    ↓
DOM Manipulation/API Call
    ↓
Visual Feedback (Success/Error)
    ↓
State Update
```

## Performance Considerations

### CSS Strategy
- Tailwind CSS for utility-first styling
- No unused CSS included (tree-shaking)
- Custom variables for theme colors
- Minimal media queries (mobile-first)

### Asset Optimization
- Favicon: JPEG (smaller than PNG/SVG for photos)
- Google Fonts: Only 2 font families loaded
- Icons: Font Awesome (cached by CDN)
- Images: Lazy-loaded when applicable

### JavaScript Optimization
- Vanilla JavaScript (no frameworks)
- Event delegation for DOM efficiency
- Minimal reflows/repaints
- Debounced resize handlers

## Responsive Breakpoints

| Device | Size | Class Prefix | Viewport Width |
|--------|------|-------------|----------------|
| Mobile | < 640px | (no prefix) | 320px - 480px |
| Small | ≥ 640px | `sm:` | 480px - 768px |
| Tablet | ≥ 768px | `md:` | 768px - 1024px |
| Desktop | ≥ 1024px | `lg:` | 1024px - 1280px |
| Large Desktop | ≥ 1280px | `xl:` | 1280px+ |

### Mobile Navigation Pattern

The navigation bar implements a hamburger menu pattern for mobile devices:

```
Desktop (≥768px): Horizontal nav links visible
Mobile (<768px): Hamburger button → full-width dropdown menu
```

**Implementation**:
- Nav container uses `hidden md:flex` to hide on mobile, show on desktop
- Mobile toggle button uses `md:hidden` to show on mobile, hide on desktop
- Mobile menu appears as full-width dropdown below navbar with `absolute` positioning
- Menu auto-closes when a link is tapped on mobile

### Mobile Tab Navigation

Tab components (e.g., Voxeon Ecosystem tabs) switch from vertical sidebar to horizontal scrollable bar on mobile:

```
Desktop (≥768px): Vertical tab sidebar (1/3 width)
Mobile (<768px): Horizontal scrollable tab bar (full width)
```

**Key features**:
- `flex md:flex-col flex-row` - horizontal on mobile, vertical on desktop
- `overflow-x-auto md:overflow-y-auto scrollbar-hide` - scrollable with hidden scrollbar
- `flex-shrink-0 min-w-[140px]` - tabs don't shrink, minimum width for readability
- Tab labels abbreviated on mobile (e.g., "The Genesis" → "Genesis")

### Responsive Typography Scale

| Element | Mobile (<640px) | Small (≥640px) | Tablet (≥768px) | Desktop (≥1024px) |
|---------|-----------------|----------------|-----------------|-------------------|
| Hero H1 | text-5xl (48px) | sm:text-6xl (60px) | md:text-7xl (72px) | lg:text-[10rem] (160px) |
| Section H2 | text-3xl (30px) | - | md:text-5xl (48px) | lg:text-6xl (60px) |
| Body text | text-lg (18px) | - | md:text-xl (20px) | lg:text-2xl (24px) |
| Button text | text-base (16px) | - | md:text-lg (18px) | lg:text-xl (20px) |

### Responsive Spacing Scale

| Property | Mobile | Tablet | Desktop |
|----------|--------|--------|---------|
| Section padding | py-16 (64px) | md:py-24 (96px) | lg:py-32 (128px) |
| Container padding | px-4 (16px) | md:px-6 (24px) | - |
| Card padding | p-6 (24px) | md:p-8 (32px) | lg:p-10 (40px) |
| Gap between items | gap-4 (16px) | md:gap-6 (24px) | lg:gap-8 (32px) |

## Browser Support

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS 14+, Android Chrome)

## Accessibility Features

### Color Contrast
- Text on backgrounds: 4.5:1 or higher (WCAG AA)
- Decorative elements: No contrast requirement
- Icon-only buttons: 3:1 minimum

### Semantic Structure
- Proper heading hierarchy (h1, h2, h3)
- Semantic HTML tags (header, nav, section, footer)
- ARIA labels for icon buttons
- Form labels associated with inputs

### Keyboard Navigation
- All interactive elements tab-accessible
- Focus visible indicator (green border)
- Skip links for keyboard users
- Logical tab order

### Screen Readers
- Semantic markup for content structure
- ARIA attributes for dynamic content
- Alt text for images
- Meaningful button text (not "Click here")

## Future Considerations

### Scalability Paths
1. Component library (Storybook)
2. CSS-in-JS for dynamic theme switching
3. Backend integration (API endpoints)
4. User authentication system
5. Analytics integration

### Performance Improvements
1. Service workers for offline support
2. Code splitting for faster initial load
3. Image optimization pipeline
4. CSS minification
5. JavaScript bundling and minification

### Feature Enhancements
1. Dark/Light mode toggle
2. Language localization (i18n)
3. Real-time API integration
4. Advanced form validation
5. User dashboard
