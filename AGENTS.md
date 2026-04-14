# AI Agent Skills & Procedures

This document defines focused, granular agent skills for VisionAttend AI development. Each skill is self-contained and does not exceed 100 lines of active code/instructions.

---

## Skill 1: Theme & Color Management

**Purpose**: Apply and maintain the dark mode color system consistently across the application.

**Scope**: Color variables, contrast ratios, accent colors, text shadows

**Key Values**:
- Primary Accent Green: `#00f06f`
- Secondary Accent Cyan: `#00e5ff`
- Background Dark: `#020617`
- Card Background: `rgba(15, 23, 42, 0.75)`
- Text Primary: `#ffffff`
- Text Secondary: `#b0b0b0`

**Procedures**:
1. Apply dark backgrounds using Tailwind classes: `bg-black/80` or `bg-slate-950`
2. Use accent colors for highlights and gradients
3. Add drop-shadows to gradient text: `drop-shadow(0 2px 4px rgba(0,0,0,0.5))`
4. Maintain minimum contrast ratio of 4.5:1 for WCAG AA compliance
5. Test readability with browser's color contrast tool

**Common Patterns**:
```html
<!-- Gradient Text -->
<h1 class="bg-gradient-to-r from-[#00f06f] to-[#00e5ff] bg-clip-text text-transparent drop-shadow-md">
  Title
</h1>

<!-- Dark Card -->
<div class="bg-slate-950/75 backdrop-blur border border-slate-800">Card</div>

<!-- Accent Button -->
<button class="bg-[#00f06f] text-black hover:opacity-90">Action</button>
```

---

## Skill 2: Glass-Morphism UI Components

**Purpose**: Create semi-transparent, frosted glass effect cards and containers.

**Scope**: Card styling, backdrop filters, border treatments, shadow layering

**Implementation**:
1. Base: `bg-slate-900/50` or `rgba(15, 23, 42, 0.75)`
2. Backdrop: `backdrop-blur-md` (blur-12px)
3. Border: `border border-slate-700/30` (subtle edge definition)
4. Shadow: `shadow-xl` combined with custom drop-shadow
5. Hover: Add `hover:border-slate-600/50 transition-all` for interactivity

**Code Template**:
```html
<div class="bg-slate-900/50 backdrop-blur-md border border-slate-700/30 rounded-lg p-6 shadow-xl">
  <!-- Content -->
</div>
```

**Validation**: Component should show frosted glass effect with visible content beneath, no solid backgrounds.

---

## Skill 3: Responsive Layout Grid

**Purpose**: Build mobile-first responsive grid layouts using Tailwind CSS.

**Scope**: Gap sizing, column breakpoints, flex alignment, padding consistency

**Breakpoints**:
- Mobile: `md:` (768px)
- Tablet: `lg:` (1024px)
- Desktop: `xl:` (1280px)

**Grid Patterns**:
```html
<!-- 1 column mobile → 2 tablet → 3 desktop -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<!-- Centered content -->
<div class="flex flex-col items-center justify-center gap-4">
```

**Rules**:
- Always use `gap-6` or `gap-8` for consistent spacing
- Apply `max-w-7xl` to container sections
- Use `px-4` or `px-6` for mobile padding

---

## Skill 4: Typography & Font System

**Purpose**: Maintain consistent font hierarchy and readability across the application.

**Scope**: Font families, sizes, weights, line-height, text effects

**Font Configuration**:
- **Heading Font**: Orbitron (900 weight, imported from Google Fonts)
- **Body Font**: Plus Jakarta Sans (400-600 weight)
- **Monospace**: System fonts for code

**Implementation**:
```html
<!-- Heading (96px, 900 weight) -->
<h1 class="text-9xl font-black">Heading</h1>

<!-- Subheading (36px, 700 weight) -->
<h2 class="text-4xl font-bold">Subheading</h2>

<!-- Body Text (16px, 400 weight, line-height 1.6) -->
<p class="text-base leading-relaxed">Paragraph</p>

<!-- Text Gradient -->
<span class="bg-gradient-to-r from-[#00f06f] to-[#00e5ff] bg-clip-text text-transparent">
  Gradient Text
</span>
```

**Best Practices**:
- Use semantic tags (h1, h2, p, span)
- Apply text shadows for gradient text visibility
- Maintain 1.5-1.75x line height for body text

---

## Skill 5: Form & Input Styling

**Purpose**: Create consistent, accessible form elements with proper validation states.

**Scope**: Text inputs, dropdowns, buttons, labels, error states

**Input Styling**:
```html
<input 
  type="text"
  class="w-full bg-slate-800 border border-slate-600 rounded px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00f06f] transition"
  placeholder="Enter value"
>
```

**Button Variants**:
- **Primary**: `bg-[#00f06f] text-black hover:opacity-90 font-bold px-6 py-2 rounded`
- **Secondary**: `bg-slate-800 text-white border border-slate-600 hover:bg-slate-700 px-6 py-2 rounded`
- **Icon Button**: `text-2xl hover:text-[#00e5ff] transition-colors`

**Validation**:
- Use `focus:border-[#00f06f]` for focus state
- Add `focus:outline-none` to remove default browser outline
- Provide visual feedback on error: `border-red-500`

---

## Skill 6: Animation & Transitions

**Purpose**: Add smooth, purposeful animations to enhance user experience.

**Scope**: Hover effects, transitions, keyframe animations, timing

**Common Transitions**:
```html
<!-- Opacity fade -->
<div class="hover:opacity-80 transition-opacity">Hover me</div>

<!-- Color change -->
<div class="hover:text-[#00e5ff] transition-colors duration-300">Hover me</div>

<!-- Transform scale -->
<button class="hover:scale-105 transition-transform">Click me</button>

<!-- Multiple properties -->
<div class="hover:bg-slate-700 hover:border-[#00f06f] transition-all duration-300">Multi</div>
```

**Timing Guidelines**:
- Simple effects: 150-200ms (default)
- Complex effects: 300-500ms
- Avoid animations > 500ms (feels sluggish)

---

## Skill 7: Navigation & Routing

**Purpose**: Build smooth, accessible navigation between sections using anchor links.

**Scope**: Navigation structure, smooth scrolling, active states, accessibility

**Implementation**:
```html
<!-- Navigation Link -->
<a href="#about-voxeon" class="text-white hover:text-[#00f06f] transition-colors">
  About Voxeon
</a>

<!-- Target Section -->
<section id="about-voxeon" class="py-20">
  <!-- Content -->
</section>
```

**Best Practices**:
- Use semantic section IDs matching navigation links
- Add `scroll-smooth` to body for smooth scroll behavior
- Use `aria-current="page"` for active navigation state
- Test keyboard navigation (Tab key)

---

## Skill 8: Image & Media Handling

**Purpose**: Optimize images, implement favicons, and handle media assets efficiently.

**Scope**: Image formats, favicon setup, responsive images, lazy loading

**Favicon Setup**:
```html
<!-- Modern favicon support -->
<link rel="icon" type="image/jpeg" href="favicon.jpg">
<!-- Optional: Apple touch icon -->
<link rel="apple-touch-icon" href="favicon.jpg">
```

**Image Optimization**:
- Use JPEG for photographs (smaller file size)
- Use SVG for logos and icons (scalable, crisp)
- Use PNG for graphics with transparency
- Include `alt` attributes for accessibility

**Lazy Loading**:
```html
<img src="image.jpg" alt="Description" loading="lazy" class="w-full">
```

---

## Skill 9: Accessible Markup & ARIA

**Purpose**: Ensure application is perceivable, operable, understandable, and robust for all users.

**Scope**: Semantic HTML, ARIA labels, keyboard navigation, screen readers

**Semantic Elements**:
```html
<header><!-- Top navigation --></header>
<nav><!-- Navigation menu --></nav>
<section><!-- Content sections --></section>
<article><!-- Main content --></article>
<footer><!-- Footer content --></footer>
```

**ARIA Attributes**:
- `aria-label="Description"` - Label for icon buttons
- `aria-current="page"` - Active navigation link
- `aria-hidden="true"` - Hide decorative elements from screen readers
- `role="button"` - Identify non-button clickable elements

**Keyboard Navigation**:
- All interactive elements must be keyboard accessible
- Use Tab key to navigate
- Use Enter/Space to activate buttons
- Test with keyboard-only navigation

---

## Skill 10: Performance Optimization

**Purpose**: Ensure fast load times, smooth rendering, and efficient resource usage.

**Scope**: CDN usage, CSS optimization, JavaScript efficiency, caching

**Best Practices**:
1. Use CDN for external libraries (Tailwind, Font Awesome)
2. Minimize CSS - only load used Tailwind classes
3. Inline critical CSS for above-the-fold content
4. Lazy-load non-critical images
5. Avoid render-blocking CSS/JavaScript
6. Cache static assets with appropriate headers

**Lighthouse Target Scores**:
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 90

---

## Skill 11: Git Workflow & Version Control

**Purpose**: Maintain clean, organized version control and collaboration practices.

**Scope**: Branching, commits, pull requests, documentation

**Workflow**:
1. Create feature branch: `git checkout -b feature/description`
2. Make focused commits: `git commit -m "skill: description of change"`
3. Push to remote: `git push origin feature/description`
4. Create pull request with documentation
5. Review, approve, and merge to main
6. Delete feature branch after merge

**Commit Message Format**:
```
<type>: <message>

<body (optional)>

<footer (optional)>
```

Types: feat, fix, docs, style, refactor, perf, test

---

## Skill 12: Documentation & Knowledge Management

**Purpose**: Maintain comprehensive documentation for current and future developers.

**Scope**: README, ARCHITECTURE, STYLING_GUIDE, inline comments, commit messages

**Documentation Priority**:
1. READme - Project overview and setup (required)
2. AGENTS.md - Agent skills (required)
3. ARCHITECTURE.md - Design system (required)
4. STYLING_GUIDE.md - CSS patterns (required)
5. DEVELOPMENT.md - Contribution guide (required)
6. RULES.md - Repository rules (required)
7. Inline comments - Complex logic only

**Guidelines**:
- Keep documentation updated with code changes
- Use clear examples and code snippets
- Link to related sections
- Maintain table of contents

---

## Skill 13: Prototype Analysis & Issue Automation

**Purpose**: Analyze monolithic or prototype codebases and efficiently batch-create GitHub issues for identified technical debt, readability, usability, and security concerns.

**Scope**: Code review, GitHub issue creation automation, technical debt identification

**Workflow**:
1. Analyze the file(s) (e.g., a monolithic `index.html` with inline CSS/JS) for readability, usability, accessibility, and security issues.
2. Formulate clear, actionable issue descriptions with problem statements and recommendations.
3. Use a bash script to batch-create issues using the `gh issue create` command to avoid interactive prompt limitations.
4. Execute the script and clean it up afterward.

**Script Pattern**:
```bash
#!/bin/bash
gh issue create --title "[Category] Title" --body "**Description:** ... **Recommendation:** ..."
# ... repeat for each issue ...
```

**Best Practices**:
- Always separate concerns (CSS, JS, HTML).
- Never hardcode sensitive credentials (passwords, API keys) in client-side code.
- Ensure interactive elements are backed by functioning backend endpoints or clear prototype warnings.
- Provide descriptive `alt` tags and `aria-labels`.