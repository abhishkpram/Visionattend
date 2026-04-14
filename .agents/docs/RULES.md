# Repository Rules & Conventions

Strict guidelines for maintaining code quality, consistency, and scalability in the VisionAttend AI project.

## Core Rules

### Rule 1: Single Responsibility Principle
- Each module/component should have one clear purpose
- Extract reusable patterns into utilities
- Keep functions focused and small

\`\`\`html
<!-- Good: Focused, reusable button -->
<button class="bg-[#00f06f] text-black font-bold px-6 py-2 rounded hover:opacity-90 transition-all">
  Action
</button>

<!-- Bad: Mixed concerns, styling inside -->
<button onclick="doStuff()" style="background: green; padding: 10px;">
  Action
</button>
\`\`\`

### Rule 2: No Hardcoded Values
- Use CSS variables for colors, font sizes, spacing
- Define constants at top of functions
- Extract magic numbers to named variables

\`\`\`javascript
// Good: Named constant
const MAX_QUEUE_ITEMS = 6;
if (records.length > MAX_QUEUE_ITEMS) {
  records = records.slice(0, MAX_QUEUE_ITEMS);
}

// Bad: Magic number
if (records.length > 6) {
  records = records.slice(0, 6);
}
\`\`\`

### Rule 3: Accessibility First
- All interactive elements must be keyboard accessible
- Color contrast minimum 4.5:1 (WCAG AA)
- Semantic HTML required
- ARIA labels for non-semantic elements

**Checklist:**
- [ ] Form labels associated with inputs
- [ ] Buttons have accessible text (not just icons)
- [ ] Focus indicators visible
- [ ] Color contrast verified
- [ ] Tested with keyboard only
- [ ] Tested with screen reader

### Rule 4: Mobile-First Development
- Start with mobile layouts (< 768px)
- Add tablet styles (md:)
- Add desktop enhancements (lg:)
- Test on real devices, not just browser emulation

\`\`\`html
<!-- Good: Mobile first -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<!-- Bad: Desktop first -->
<div class="grid grid-cols-3 sm:grid-cols-2 mobile:grid-cols-1 gap-6">
\`\`\`

### Rule 5: No Inline Styles
- Use Tailwind CSS classes exclusively
- Inline styles override and break styling system
- Exception: Dynamic values from JavaScript only

\`\`\`html
<!-- Good: Uses Tailwind classes -->
<button class="bg-[#00f06f] hover:opacity-90 transition-all">
  Click
</button>

<!-- Bad: Inline styles break design system -->
<button style="background-color: rgb(0, 240, 111); opacity: 0.9;">
  Click
</button>
\`\`\`

### Rule 6: Comment Guidelines
- Comments explain WHY, not WHAT
- Code should be self-explanatory
- Complex business logic gets comments
- One comment per meaningful block

\`\`\`javascript
// Good: Explains intent
// Sort by timestamp descending (most recent first)
const sorted = records.sort((a, b) => b.time - a.time);

// Bad: Obvious from code
// Loop through records
records.forEach(record => {
  // ...
});
\`\`\`

### Rule 7: Console Cleanliness
- No console.log() in production commits
- Use browser DevTools for debugging
- Remove all debugging statements before pushing

\`\`\`javascript
// Good (final code)
function processData(data) {
  return data.filter(item => item.valid);
}

// Bad (debugging left in)
function processData(data) {
  console.log('Processing:', data);
  return data.filter(item => item.valid);
}
\`\`\`

### Rule 8: Responsive Design Breakpoints
- Only use: \`md:\` (768px), \`lg:\` (1024px), \`xl:\` (1280px)
- No arbitrary breakpoints
- Test at each breakpoint with real device sizes

| Device | Viewport | Prefix |
|--------|----------|--------|
| Mobile | < 768px | (none) |
| Tablet | 768px - 1024px | \`md:\` |
| Desktop | 1024px - 1280px | \`lg:\` |
| Large | > 1280px | \`xl:\` |

### Rule 9: Version Control Discipline
- **No force pushing** to main
- **One feature per branch**
- **Atomic commits** (logical, reviewable changes)
- **Descriptive commit messages**
- **Delete branches** after merge

\`\`\`bash
# Good workflow
git checkout -b feature/add-logout
git add specific-file.html
git commit -m "feat: add logout button to navbar"
git push origin feature/add-logout
# Create PR, get review, merge, delete branch

# Bad workflow
git commit -m "stuff"
git push --force
\`\`\`

### Rule 10: No External Framework Dependencies
- Vanilla JavaScript only (no jQuery, React, Vue for this project)
- Keeps page fast and maintainable
- Exception: Libraries for specific needs (jsPDF, Font Awesome via CDN)

## Agent Skill Rules

### Rule 11: Skill Size Constraint
**HARD LIMIT: Maximum 100 lines per agent skill**

- Agent skills defined in [AGENTS.md](AGENTS.md)
- Each skill focuses on ONE concern
- Granular, not monolithic
- Easily teachable and replicable

**Validation:**
\`\`\`bash
# Count lines in AGENTS.md for each skill
wc -l AGENTS.md
# Each skill should be ~40-80 lines
\`\`\`

### Rule 12: Skill Execution Checklist
Before considering a skill complete, verify:

- [ ] Focused on single responsibility
- [ ] Under 100 lines (maximum)
- [ ] Includes code examples
- [ ] Includes validation criteria
- [ ] Tested and verified working
- [ ] Documented in [AGENTS.md](AGENTS.md)
- [ ] Referenced in [DEVELOPMENT.md](DEVELOPMENT.md) if relevant

### Rule 13: Skill Categories
Allowed skill categories:
- **UI/Component Skills**: Theme, Colors, Typography, Forms, Buttons
- **Layout Skills**: Grid, Flexbox, Responsive, Spacing
- **Animation Skills**: Transitions, Hover States, Keyframes
- **Accessibility Skills**: Keyboard Nav, ARIA, Contrast, Semantic HTML
- **Performance Skills**: Optimization, Lazy Loading, Caching
- **Development Skills**: Git, Documentation, Testing

### Rule 14: Skill Discovery & Reuse
- Before writing new code, check if a skill covers it
- Skills are discoverable via [AGENTS.md](AGENTS.md) table of contents
- Reuse patterns from existing skills
- Only add new skill if existing ones don't fit

\`\`\`markdown
Example Skill Table of Contents:
- Skill 1: Theme & Color Management
- Skill 2: Glass-Morphism UI Components
- Skill 3: Responsive Layout Grid
- ...
\`\`\`

## Documentation Rules

### Rule 15: Documentation Hierarchy
All documentation must be present and current:

1. **README.md** (Project overview, setup, features)
2. **AGENTS.md** (Reusable skills, patterns, templates)
3. **ARCHITECTURE.md** (Design system, data flow, components)
4. **STYLING_GUIDE.md** (CSS patterns, color system, components)
5. **DEVELOPMENT.md** (Contribution workflow, standards)
6. **RULES.md** (This file, repository constraints)

**Rule**: Never skip documentation for new features

### Rule 16: Code Examples in Documentation
Every documented pattern must include:
- Clear description
- Working code example
- Usage context
- Common mistakes to avoid

\`\`\`markdown
# Good Example
## Button Patterns

**Primary Button**
\`\`\`html
<button class="bg-[#00f06f] text-black hover:opacity-90">
  Action
</button>
\`\`\`
Usage: Main calls-to-action
**Common mistake**: Don't use inline styles
\`\`\`

### Rule 17: Link Documentation
- Link to related sections using markdown links
- Use relative paths: \`[AGENTS.md](AGENTS.md)\`
- Keep documentation interconnected
- Update links when moving/renaming files

## Code Quality Rules

### Rule 18: Browser Testing Required
Before pushing, test on:
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Chrome (real phone if possible)
- [ ] Mobile Safari (real iPhone if possible)

### Rule 19: Accessibility Non-Negotiable
- WCAG AA compliant (minimum)
- Keyboard navigable (no mouse required)
- Screen reader compatible
- Color contrast 4.5:1+
- Touch targets 44x44px minimum

### Rule 20: Performance Targets
- Lighthouse Performance: > 90
- First Contentful Paint: < 2s
- Cumulative Layout Shift: < 0.1
- CSS < 50KB
- JavaScript < 10KB

## Git Workflow Rules

### Rule 21: Branch Naming Convention
\`\`\`
<type>/<description>

Types:
- feature/ (new features)
- fix/ (bug fixes)
- docs/ (documentation)
- style/ (CSS/formatting)
- refactor/ (code restructure)
- perf/ (performance)
- chore/ (dependencies, build)
\`\`\`

### Rule 22: Commit Message Standards
\`\`\`
<type>: <subject (50 chars max)>

<body (optional, wrap at 72)>

Types: feat, fix, docs, style, refactor, perf, chore
\`\`\`

### Rule 23: Pull Request Requirements
Before merging to main:
- [ ] Tested on multiple browsers/devices
- [ ] Accessibility verified
- [ ] No console errors
- [ ] Documentation updated
- [ ] Code reviewed
- [ ] Responsive design verified

## File Organization Rules

### Rule 24: Project Structure
\`\`\`
vision-attend-ai-website/
├── index.html              # Main website (KEEP SINGLE FILE)
├── favicon.jpg             # Browser tab icon
├── logo.svg                # Archived (deprecated)
├── README.md               # Project overview
├── .agents/                # AI Agent knowledge and instructions
│   ├── docs/               # Documentation directory
│   │   ├── AGENTS.md       # AI agent skills and procedures
│   │   ├── ARCHITECTURE.md # Design system and technical architecture
│   │   ├── STYLING_GUIDE.md# CSS patterns and Tailwind configuration
│   │   ├── DEVELOPMENT.md  # Development workflow and contribution guide
│   │   └── RULES.md        # Repository rules and conventions
│   └── skills/             # Standardized agent workflows
│       ├── batch-issue-creator/
│       │   └── INSTRUCTIONS.md
│       └── multi-agent-workflow/
│           └── INSTRUCTIONS.md
└── .gitignore              # Git ignore rules
\`\`\`

### Rule 25: Keep Single HTML File
- ONE index.html (no separate pages)
- Single-page application (SPA) design
- All sections in one file
- Navigation via anchor links (#section-id)

Exception: Only if feature complexity justifies adding CSS/JS files

### Rule 26: No Unnecessary Files
- No minified versions (handled by build process)
- No backup files (*~, *.bak, *.old)
- No large assets (> 1MB)
- Use .gitignore to exclude temp files

## Naming Conventions

### Rule 27: Consistent Naming
| Entity | Convention | Example | Context |
|--------|-----------|---------|---------|
| Sections | kebab-case IDs | \`id="sorting-lab"\` | HTML |
| CSS Classes | kebab-case | \`class="sort-input"\` | Tailwind |
| Variables | camelCase | \`const sortQueue = []\` | JavaScript |
| Functions | camelCase | \`function processRecords()\` | JavaScript |
| Constants | UPPER_SNAKE | \`MAX_QUEUE = 6\` | JavaScript |
| Data attrs | kebab-case | \`data-sort-by="time"\` | HTML |

## Testing Rules

### Rule 28: Manual Testing Checklist
Before every push:
- [ ] Feature works as intended
- [ ] No JavaScript errors (F12 console)
- [ ] Links navigate correctly
- [ ] Forms validate and submit
- [ ] Mobile layout responsive
- [ ] Keyboard navigation works
- [ ] Contrast meets WCAG AA

### Rule 29: Cross-Browser Testing
Minimum required:
- Chrome/Edge
- Firefox
- Safari
- Mobile (iOS/Android)

## Release Rules

### Rule 30: Main Branch Protection
- Main branch only receives PRs
- All PRs must be reviewed
- All automated checks must pass
- No direct commits to main

## Special Considerations

### SVG Logo Guideline
- ✗ **DO NOT** use upside-down or inverted designs
- ✓ **DO** test orientation and alignment
- ✓ **PREFER** simpler JPEG logos as favicon
- ✓ **CONSIDER** user mental model (logo should be recognizable)

## Violations & Corrections

### Minor Violation: Console Logging
**Impact**: Low (debugging artifact)
**Fix**: Remove in next commit

### Major Violation: Broken Accessibility
**Impact**: High (excludes users)
**Action**: Must fix before merge

### Critical Violation: Force Push to Main
**Impact**: History loss, undo difficulty
**Action**: Do not allow, owner intervention required

## Enforcement

These rules are enforced through:
1. **Code Review** - Peer review of PRs
2. **Automated Tools** - Linters, accessibility checkers
3. **Documentation** - This file + DEVELOPMENT.md
4. **Testing** - Manual + automated testing

## Questions & Exceptions

- **Questions**: Email voxeonlabs@gmail.com
- **Exceptions**: Document in PR with justification
- **Updates**: Update this file, create ticket for discussion

### Rule 13: Accessibility and UI Patterns
- **Semantic HTML:** Always use semantic elements (\`<main>\`, \`<section>\`, \`<nav>\`, \`<footer>\`) to organize the page structure.
- **Images:** All \`<img>\` tags must have descriptive \`alt\` text. Use empty \`alt=""\` only if the image is purely decorative.
- **Interactive Elements:** Icon-only links and buttons must have clear \`aria-label\` attributes.
- **Event Listeners:** Do not use inline event handlers (e.g., \`onclick="doSomething()"\`). Instead, use \`addEventListener\` in external JavaScript files.
- **Links:** For non-navigational anchor tags that trigger JavaScript actions, use \`href="javascript:void(0)"\` or prefer \`<button>\` over \`<a>\`. Avoid \`href="#"\` as it causes page jumping.

### Rule 14: Client-Side Persistence
- When mimicking backend functionality (like storing form submissions or settings), use \`localStorage\` or \`sessionStorage\` to ensure data persists across page reloads.

### Rule 15: PDF Generation
- When generating PDFs from complex HTML DOM elements, prefer libraries like \`html2canvas\` combined with \`jsPDF\` (\`doc.html()\`) to capture styling correctly, rather than passing raw HTML strings to \`doc.text()\` or \`doc.splitTextToSize()\`.

### Rule 16: Prototype Security
- Never store sensitive credentials in plain text. For prototypes, use at least simple obfuscation (e.g., Base64/btoa) to prevent casual discovery, and clearly document that it is NOT a secure production-grade solution.
