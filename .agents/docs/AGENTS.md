# AI Agent Skills & Procedures

This document defines focused, granular agent skills for VisionAttend AI development. Each skill is self-contained and does not exceed 100 lines of active code/instructions.

---

## Skill 1: Theme & Color Management

**Purpose**: Apply and maintain the dark mode color system consistently across the application.

**Scope**: Color variables, contrast ratios, accent colors, text shadows

**Key Values**:
- Primary Accent Green: \`#00f06f\`
- Secondary Accent Cyan: \`#00e5ff\`
- Background Dark: \`#020617\`
- Card Background: \`rgba(15, 23, 42, 0.75)\`
- Text Primary: \`#ffffff\`
- Text Secondary: \`#b0b0b0\`

**Procedures**:
1. Apply dark backgrounds using Tailwind classes: \`bg-black/80\` or \`bg-slate-950\`
2. Use accent colors for highlights and gradients
3. Add drop-shadows to gradient text: \`drop-shadow(0 2px 4px rgba(0,0,0,0.5))\`
4. Maintain minimum contrast ratio of 4.5:1 for WCAG AA compliance
5. Test readability with browser's color contrast tool

**Common Patterns**:
\`\`\`html
<!-- Gradient Text -->
<h1 class="bg-gradient-to-r from-[#00f06f] to-[#00e5ff] bg-clip-text text-transparent drop-shadow-md">
  Title
</h1>

<!-- Dark Card -->
<div class="bg-slate-950/75 backdrop-blur border border-slate-800">Card</div>

<!-- Accent Button -->
<button class="bg-[#00f06f] text-black hover:opacity-90">Action</button>
\`\`\`

---

## Skill 2: Glass-Morphism UI Components

**Purpose**: Create semi-transparent, frosted glass effect cards and containers.

**Scope**: Card styling, backdrop filters, border treatments, shadow layering

**Implementation**:
1. Base: \`bg-slate-900/50\` or \`rgba(15, 23, 42, 0.75)\`
2. Backdrop: \`backdrop-blur-md\` (blur-12px)
3. Border: \`border border-slate-700/30\` (subtle edge definition)
4. Shadow: \`shadow-xl\` combined with custom drop-shadow
5. Hover: Add \`hover:border-slate-600/50 transition-all\` for interactivity

**Code Template**:
\`\`\`html
<div class="bg-slate-900/50 backdrop-blur-md border border-slate-700/30 rounded-lg p-6 shadow-xl">
  <!-- Content -->
</div>
\`\`\`

**Validation**: Component should show frosted glass effect with visible content beneath, no solid backgrounds.

---

## Skill 3: Responsive Layout Grid

**Purpose**: Build mobile-first responsive grid layouts using Tailwind CSS.

**Scope**: Gap sizing, column breakpoints, flex alignment, padding consistency

**Breakpoints**:
- Mobile: \`md:\` (768px)
- Tablet: \`lg:\` (1024px)
- Desktop: \`xl:\` (1280px)

**Grid Patterns**:
\`\`\`html
<!-- 1 column mobile → 2 tablet → 3 desktop -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<!-- Centered content -->
<div class="flex flex-col items-center justify-center gap-4">
\`\`\`

**Rules**:
- Always use \`gap-6\` or \`gap-8\` for consistent spacing
- Apply \`max-w-7xl\` to container sections
- Use \`px-4\` or \`px-6\` for mobile padding

---

## Skill 4: Typography & Font System

**Purpose**: Maintain consistent font hierarchy and readability across the application.

**Scope**: Font families, sizes, weights, line-height, text effects

**Font Configuration**:
- **Heading Font**: Orbitron (900 weight, imported from Google Fonts)
- **Body Font**: Plus Jakarta Sans (400-600 weight)
- **Monospace**: System fonts for code

**Implementation**:
\`\`\`html
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
\`\`\`

**Best Practices**:
- Use semantic tags (h1, h2, p, span)
- Apply text shadows for gradient text visibility
- Maintain 1.5-1.75x line height for body text

---

## Skill 5: Form & Input Styling

**Purpose**: Create consistent, accessible font elements with proper validation states.

**Scope**: Text inputs, dropdowns, buttons, labels, error states

**Input Styling**:
\`\`\`html
<input 
  type="text"
  class="w-full bg-slate-800 border border-slate-600 rounded px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00f06f] transition"
  placeholder="Enter value"
>
\`\`\`

**Button Variants**:
- **Primary**: \`bg-[#00f06f] text-black hover:opacity-90 font-bold px-6 py-2 rounded\`
- **Secondary**: \`bg-slate-800 text-white border border-slate-600 hover:bg-slate-700 px-6 py-2 rounded\`
- **Icon Button**: \`text-2xl hover:text-[#00e5ff] transition-colors\`

**Validation**:
- Use \`focus:border-[#00f06f]\` for focus state
- Add \`focus:outline-none\` to remove default browser outline
- Provide visual feedback on error: \`border-red-500\`

---

## Skill 6: Animation & Transitions

**Purpose**: Add smooth, purposeful animations to enhance user experience.

**Scope**: Hover effects, transitions, keyframe animations, timing

**Common Transitions**:
\`\`\`html
<!-- Opacity fade -->
<div class="hover:opacity-80 transition-opacity">Hover me</div>

<!-- Color change -->
<div class="hover:text-[#00e5ff] transition-colors duration-300">Hover me</div>

<!-- Transform scale -->
<button class="hover:scale-105 transition-transform">Click me</button>

<!-- Multiple properties -->
<div class="hover:bg-slate-700 hover:border-[#00f06f] transition-all duration-300">Multi</div>
\`\`\`

**Timing Guidelines**:
- Simple effects: 150-200ms (default)
- Complex effects: 300-500ms
- Avoid animations > 500ms (feels sluggish)

---

## Skill 7: Navigation & Routing

**Purpose**: Build smooth, accessible navigation between sections using anchor links.

**Scope**: Navigation structure, smooth scrolling, active states, accessibility

**Implementation**:
\`\`\`html
<!-- Navigation Link -->
<a href="#about-voxeon" class="text-white hover:text-[#00f06f] transition-colors">
  About Voxeon
</a>

<!-- Target Section -->
<section id="about-voxeon" class="py-20">
  <!-- Content -->
</section>
\`\`\`

**Best Practices**:
- Use semantic section IDs matching navigation links
- Add \`scroll-smooth\` to body for smooth scroll behavior
- Use \`aria-current="page"\` for active navigation state
- Test keyboard navigation (Tab key)

---

## Skill 8: Image & Media Handling

**Purpose**: Optimize images, implement favicons, and handle media assets efficiently.

**Scope**: Image formats, favicon setup, responsive images, lazy loading

**Favicon Setup**:
\`\`\`html
<!-- Modern favicon support -->
<link rel="icon" type="image/jpeg" href="favicon.jpg">
<!-- Optional: Apple touch icon -->
<link rel="apple-touch-icon" href="favicon.jpg">
\`\`\`

**Image Optimization**:
- Use JPEG for photographs (smaller file size)
- Use SVG for logos and icons (scalable, crisp)
- Use PNG for graphics with transparency
- Include \`alt\` attributes for accessibility

**Lazy Loading**:
\`\`\`html
<img src="image.jpg" alt="Description" loading="lazy" class="w-full">
\`\`\`

---

## Skill 9: Accessible Markup & ARIA

**Purpose**: Ensure application is perceivable, operable, understandable, and robust for all users.

**Scope**: Semantic HTML, ARIA labels, keyboard navigation, screen readers

**Semantic Elements**:
\`\`\`html
<header><!-- Top navigation --></header>
<nav><!-- Navigation menu --></nav>
<section><!-- Content sections --></section>
<article><!-- Main content --></article>
<footer><!-- Footer content --></footer>
\`\`\`

**ARIA Attributes**:
- \`aria-label="Description"\` - Label for icon buttons
- \`aria-current="page"\` - Active navigation link
- \`aria-hidden="true"\` - Hide decorative elements from screen readers
- \`role="button"\` - Identify non-button clickable elements

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
1. Create feature branch: \`git checkout -b feature/description\`
2. Make focused commits: \`git commit -m "skill: description of change"\`
3. Push to remote: \`git push origin feature/description\`
4. Create pull request with documentation
5. Review, approve, and merge to main
6. Delete feature branch after merge

**Commit Message Format**:
\`\`\`
<type>: <message>

<body (optional)>

<footer (optional)>
\`\`\`

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
1. Analyze the file(s) (e.g., a monolithic \`index.html\` with inline CSS/JS) for readability, usability, accessibility, and security issues.
2. Formulate clear, actionable issue descriptions with problem statements and recommendations.
3. Use a bash script to batch-create issues using the \`gh issue create\` command to avoid interactive prompt limitations.
4. Execute the script and clean it up afterward.

**Script Pattern**:
\`\`\`bash
#!/bin/bash
gh issue create --title "[Category] Title" --body "**Description:** ... **Recommendation:** ..."
# ... repeat for each issue ...
\`\`\`

**Best Practices**:
- Always separate concerns (CSS, JS, HTML).
- Never hardcode sensitive credentials (passwords, API keys) in client-side code.
- Ensure interactive elements are backed by functioning backend endpoints or clear prototype warnings.
- Provide descriptive \`alt\` tags and \`aria-labels\`.

---

## Skill 14: Mobile Responsive UI Implementation

**Purpose**: Apply mobile-first responsive patterns to fix UI issues across all sections of a single-page application.

**Scope**: Navigation menus, hero sections, tab components, grid layouts, contact forms

**Key Patterns from Issue #11 (VisionAttend AI)**:

### 1. Mobile Hamburger Menu
\`\`\`html
<!-- Toggle button (visible only on mobile) -->
<button id="mobile-menu-btn" class="md:hidden text-white text-2xl p-2" aria-label="Toggle mobile menu" aria-expanded="false">
    <i class="fa-solid fa-bars"></i>
</button>

<!-- Nav: hidden on mobile, flex on desktop -->
<div id="nav-links" class="hidden md:flex absolute md:static top-full left-0 w-full md:w-auto bg-slate-950/98 md:bg-transparent backdrop-blur-xl md:backdrop-blur-0 border-b border-white/10 md:border-0 flex-col md:flex-row">
    <!-- Links with mobile-friendly padding -->
    <a href="#section" class="py-3 md:py-0 w-full md:w-auto text-center">Section</a>
</div>
\`\`\`

### 2. JavaScript Menu Toggle
\`\`\`javascript
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-links');
mobileMenuBtn.addEventListener('click', function() {
    navLinks.classList.toggle('hidden');
    const icon = this.querySelector('i');
    const isExpanded = !navLinks.classList.contains('hidden');
    icon.className = isExpanded ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    this.setAttribute('aria-expanded', String(isExpanded));
});
\`\`\`

### 3. Responsive Text Sizing
\`\`\`html
<!-- Hero heading: 5xl mobile → 6xl small → 7xl tablet → 10rem desktop -->
<h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-[10rem]">Heading</h1>

<!-- Subtitle -->
<p class="text-lg md:text-xl lg:text-2xl">Description</p>
\`\`\`

### 4. Responsive Spacing & Padding
\`\`\`html
<!-- Section padding -->
<section class="py-16 md:py-24 lg:py-32 px-4 md:px-6">

<!-- Card padding -->
<div class="p-6 md:p-8 lg:p-10">

<!-- Gap between items -->
<div class="gap-4 md:gap-6 lg:gap-8">
\`\`\`

### 5. Responsive Grid Layouts
\`\`\`html
<!-- 1 column mobile → 2 tablet → 4 desktop -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
\`\`\`

### 6. Mobile Tab Navigation (Horizontal Scroll)
\`\`\`html
<div class="flex md:flex-col flex-row overflow-x-auto md:overflow-y-auto scrollbar-hide">
    <button class="flex-shrink-0 min-w-[140px] p-4 md:p-8 text-center md:text-left">Tab 1</button>
    <button class="flex-shrink-0 min-w-[140px] p-4 md:p-8 text-center md:text-left">Tab 2</button>
</div>
\`\`\`
With CSS utility:
\`\`\`css
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
\`\`\`

### 7. Skip-to-Content Link (Accessibility)
\`\`\`html
<a href="#main-content" class="skip-link">Skip to main content</a>
\`\`\`
\`\`\`css
.skip-link {
    position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
    overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;
}
.skip-link:focus {
    position: fixed; top: 1rem; left: 1rem; width: auto; height: auto;
    padding: 0.5rem 1rem; background: var(--accent-green); color: var(--bg-dark);
    border-radius: 0.5rem; font-weight: 700; z-index: 200;
}
\`\`\`

### 8. Responsive External Links
Always add \`rel="noopener noreferrer"\` to external links:
\`\`\`html
<a href="https://instagram.com/voxeonlabs" target="_blank" rel="noopener noreferrer" aria-label="Visit Voxeon Labs on Instagram">
\`\`\`

### 9. Form Validation Placeholders
Add hidden error elements for each required field:
\`\`\`html
<input id="field-name" required>
<p id="error-name" class="text-red-400 text-xs hidden" role="alert"></p>
\`\`\`

**Responsive Sizing Reference**:
| Element | Mobile | Small | Tablet | Desktop |
|---------|--------|-------|--------|---------|
| Hero heading | text-5xl | sm:text-6xl | md:text-7xl | lg:text-[10rem] |
| Section heading | text-3xl | - | md:text-5xl | lg:text-6xl |
| Body text | text-lg | - | md:text-xl | lg:text-2xl |
| Button text | text-base | - | md:text-lg | lg:text-xl |
| Card padding | p-6 | - | md:p-8 | lg:p-10 |
| Section padding | py-16 | - | md:py-24 | lg:py-32 |
| Container padding | px-4 | - | md:px-6 | - |

**Validation Checklist**:
- [ ] Hamburger menu works on mobile (< 768px)
- [ ] Nav collapses after link click on mobile
- [ ] All text sizes have responsive breakpoints
- [ ] Grid layouts adapt to screen size
- [ ] Tab navigation is accessible on mobile
- [ ] Skip link visible on focus
- [ ] All external links have rel="noopener noreferrer"
- [ ] Form error placeholders present
- [ ] Tested on real mobile device (not just browser emulation)

---

## Skill 15: Interactive Prototyping Patterns

**Purpose**: Use specialized techniques to make static prototypes feel like functional web applications.

**Scope**: Simulated APIs, client-side persistence, dynamic document generation, prototype security.

**Procedures**:
1. **Simulated Backend**: Use \`fetch()\` with mock endpoints (e.g., JSONPlaceholder) to demonstrate asynchronous request handling, loading states, and success/failure UI feedback.
2. **Client-Side Persistence**: Use \`localStorage\` to store user-submitted data (like form responses or admin lists) so that the prototype maintains its state after a page refresh.
3. **High-Fidelity PDF Generation**: Instead of passing raw strings to \`doc.text()\`, use \`doc.html()\` combined with \`html2canvas\` to capture the actual styled DOM element as a PDF.
4. **Credential Obfuscation**: Avoid storing passwords in plain text in JavaScript. Use \`btoa()\` and \`atob()\` for simple Base64 obfuscation to prevent casual discovery while clearly stating its limitations.

**Implementation Example (Persistence)**:
\`\`\`javascript
function saveRequest(data) {
    const stored = JSON.parse(localStorage.getItem('myRequests') || '[]');
    stored.unshift(data);
    localStorage.setItem('myRequests', JSON.stringify(stored));
}

function loadRequests() {
    return JSON.parse(localStorage.getItem('myRequests') || '[]');
}
\`\`\`

**Validation**:
- Prototype should maintain state after refresh (if persistence is used).
- Async actions (like form submission) show clear loading indicators.
- PDF exports accurately reflect the UI's layout and styling.

---

## Skill 16: Asset Consolidation & Maintainability

**Purpose**: Move inline styles and scripts into external files to improve codebase organization and performance.

**Scope**: CSS extraction, JavaScript extraction, linking external assets, modularity.

**Procedures**:
1. **CSS Extraction**: Extract styles from \`<style>\` tags into separate \`.css\` files (e.g., \`styles.css\`).
2. **JavaScript Extraction**: Extract scripts from \`<script>\` tags into separate \`.js\` files (e.g., \`script.js\`).
3. **Linking External Assets**: Link extracted files in the HTML \`<head>\` using \`<link rel="stylesheet" href="...">\` and at the end of the \`<body>\` using \`<script src="..."></script>\`.
4. **Modularity**: Break down large scripts or styles into smaller, themed files if they grow beyond 500 lines for better maintainability.

**Code Template (Linking)**:
\`\`\`html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Content -->
    <script src="script.js"></script>
</body>
\`\`\`

**Validation**:
- No inline \`<style>\` or \`<script>\` tags should remain in the HTML file.
- The page should look and function identically to the previous version with inline assets.
- External files are clearly named and logically organized.

---

## Multi-Agent Collaboration Workflow (GitHub Issues)

When working in a multi-agent environment (e.g., Claude, Codex, Qwen, Gemini, and other agents collaborating on a repository), follow these strict GitHub Issue workflows to avoid conflicts and overlapping work:

1. **One Issue at a Time**:
   - Only pick up 1 GitHub issue at a time. Do not attempt to batch fix multiple unassigned issues unless specifically requested or using a dedicated batch skill.

2. **Mark Your Presence**:
   - Before starting work, comment on the issue to signal that you are working on it.
   - Example: \`gh issue comment <issue_number> -b "Working on this."\`
   - This ensures other agents checking the issue queue know it is claimed.

3. **Isolated Fixes**:
   - Make your changes targeting *only* the scope of the issue.
   - Commit the change with a clear message: \`git commit -m "Fix #<issue_number>: <Description>"\`

4. **Closing the Loop**:
   - Push your changes to the target branch (e.g., \`main\`).
   - Add a final comment to the issue summarizing the fix.
   - Close the issue properly: \`gh issue close <issue_number>\`

5. **Continuous Processing**:
   - After completing the loop, return to the queue and repeat the process for the next available issue.
