# Development Guide & Contribution Workflow

Guidelines for contributing to VisionAttend AI and maintaining code quality standards.

## Getting Started

### Prerequisites
- Git installed ([git-scm.com](https://git-scm.com))
- Code editor (VS Code recommended)
- Modern web browser
- Basic knowledge of HTML, CSS, JavaScript

### Initial Setup

```bash
# 1. Clone the repository
git clone https://github.com/adhimanoj/vision-attend-ai-website.git
cd vision-attend-ai-website

# 2. Verify you're on main branch
git branch

# 3. Create a local development branch
git checkout -b feature/your-feature-name

# 4. Open in your editor
code .

# 5. Start a local server (optional but recommended)
# Python 3:
python -m http.server 8000

# Node.js:
npx http-server

# 6. Open http://localhost:8000 in your browser
```

## Development Workflow

### Step 1: Create Feature Branch

Use descriptive branch names following the pattern: `type/description`

```bash
# Feature
git checkout -b feature/add-dark-mode-toggle

# Bug fix
git checkout -b fix/header-overlap-issue

# Documentation
git checkout -b docs/update-readme

# Refactor
git checkout -b refactor/simplify-grid-layout

# Performance
git checkout -b perf/optimize-image-loading

# Chore
git checkout -b chore/update-dependencies
```

### Step 2: Make Changes

1. Edit code following [AGENTS.md](AGENTS.md) skills
2. Test in browser (multiple devices/browsers)
3. Verify accessibility (keyboard navigation, screen readers)
4. Check responsive design (mobile, tablet, desktop)

### Step 3: Commit Changes

Follow atomic commit pattern: one logical change per commit

```bash
# Stage specific files
git add path/to/file.html

# Commit with descriptive message
git commit -m "feat: add dark mode toggle to navigation"

# View commit history
git log --oneline
```

### Commit Message Format

```
<type>: <subject> (50 characters max)

<body - optional, wrap at 72 characters>

<footer - optional>

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: CSS/formatting (no logic change)
- refactor: Code restructure (no behavior change)
- perf: Performance improvement
- test: Tests
- chore: Dependencies, build, etc.

Examples:
feat: add carousel to hero section
fix: resolve header text overflow on mobile
docs: update styling guide with new patterns
style: reorganize CSS for better readability
refactor: extract button component to reusable function
perf: lazy load images below fold
chore: update tailwind to v3.3
```

### Step 4: Test Thoroughly

#### Functionality Testing
- [ ] Feature works as intended
- [ ] No JavaScript errors (check console)
- [ ] All links work
- [ ] Forms submit correctly
- [ ] No console warnings

#### Browser Testing
- [ ] Chrome/Edge 90+
- [ ] Firefox 88+
- [ ] Safari 14+
- [ ] Mobile Chrome
- [ ] Mobile Safari

#### Responsive Testing
- [ ] Mobile (320px - 480px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (1280px+)
- [ ] Large desktop (1920px+)

#### Accessibility Testing
- [ ] Keyboard navigation works (Tab, Enter, Space)
- [ ] Focus indicators visible
- [ ] Screen reader compatible
- [ ] Color contrast adequate (4.5:1)
- [ ] Alt text on images
- [ ] Form labels present

### Step 5: Review & Self-Check

Before pushing, review your changes:

```bash
# Show staged changes
git diff --cached

# Show all changes
git diff

# Show commit history
git log --decorate --oneline
```

**Self-Review Checklist:**
- [ ] Code follows project style (see [AGENTS.md](AGENTS.md))
- [ ] No debugging code left (console.log, etc.)
- [ ] No hardcoded values (use variables/constants)
- [ ] Comments explain complex logic only
- [ ] Updated documentation if needed
- [ ] No breaking changes to existing features

### Step 6: Push & Create Pull Request

```bash
# Push to remote
git push origin feature/your-feature-name

# Create pull request on GitHub
# Go to https://github.com/adhimanoj/vision-attend-ai-website/pulls
# Click "New Pull Request"
# Select your branch
# Add description
```

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] New feature
- [ ] Bug fix
- [ ] Documentation
- [ ] Refactor
- [ ] Performance

## Related Issues
Fixes # (issue number)

## Testing Done
- [ ] Desktop browsers tested
- [ ] Mobile responsiveness verified
- [ ] Accessibility checked
- [ ] No console errors

## Screenshots
[If applicable, add screenshots or GIFs]

## Breaking Changes?
- [ ] Yes
- [ ] No

## Checklist
- [ ] Code follows style guidelines
- [ ] Documentation updated
- [ ] No debug code left
- [ ] Tested on multiple browsers
```

### Step 7: Address Feedback

1. Review feedback from maintainers
2. Make requested changes
3. Commit with descriptive messages
4. Push updates (PR automatically updates)

### Step 8: Merge to Main

Once approved:

```bash
# Ensure main is up-to-date
git checkout main
git pull origin main

# Merge feature branch
git merge feature/your-feature-name

# Push to remote
git push origin main

# Delete local branch
git branch -d feature/your-feature-name

# Delete remote branch (in GitHub UI or via CLI)
git push origin --delete feature/your-feature-name
```

## Code Style Guidelines

### HTML
- Use semantic HTML5 tags
- Proper nesting and indentation (2 spaces)
- Self-closing tags for void elements
- Lowercase tag names and attribute names

```html
<!-- Good -->
<section>
  <article>
    <h2>Title</h2>
    <p>Content</p>
  </article>
</section>

<!-- Bad -->
<DIV>
  <P>Content</P>
</DIV>
```

### CSS/Tailwind
- Use Tailwind utility classes (not custom CSS unless necessary)
- Logical class order: layout → sizing → colors → effects
- Use custom variables for theme colors
- Mobile-first responsive design

```html
<!-- Good -->
<div class="w-full max-w-7xl mx-auto px-4 py-12 bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors">
  Content
</div>

<!-- Bad -->
<div style="width: 100%; background-color: rgb(15, 23, 42);">
  Content
</div>
```

### JavaScript
- Use descriptive variable/function names
- Keep functions small and focused
- Add comments for complex logic
- Use vanilla JavaScript (no unnecessary frameworks)

```javascript
// Good
function sortAttendanceRecords(records) {
  const onTime = records.filter(r => r.status === 'on-time');
  const late = records.filter(r => r.status === 'late');
  
  return { onTime, late };
}

// Bad
function s(r) {
  // weird array operations
}
```

### Naming Conventions

| Entity | Convention | Example |
|--------|-----------|---------|
| CSS Classes | kebab-case | `.navbar-container` |
| IDs | kebab-case | `#sorting-lab` |
| JS Variables | camelCase | `attendanceData` |
| JS Functions | camelCase | `calculateGraceTime()` |
| Constants | UPPER_SNAKE_CASE | `MAX_QUEUE_SIZE` |
| HTML Data Attrs | kebab-case | `data-sort-type` |

## Common Tasks

### Adding a New Section

1. Create section HTML with semantic tags:
```html
<section id="section-name" class="py-20 px-4">
  <div class="max-w-7xl mx-auto">
    <h2 class="text-4xl font-bold mb-12">Section Title</h2>
    <!-- Content -->
  </div>
</section>
```

2. Add navigation link:
```html
<a href="#section-name">Section</a>
```

3. Style using [AGENTS.md](AGENTS.md) skills (Theme, Glass-Morphism, Typography, etc.)

4. Test responsive design and accessibility

5. Commit: `git commit -m "feat: add new section"`

### Updating Colors

1. Update color value in README.md color system
2. Find all usages: `grep -r "old-color" .`
3. Replace with new color value
4. Test contrast ratio (WCAG AA)
5. Commit: `git commit -m "style: update accent color"`

### Adding a New Font

1. Add Google Fonts import to index.html:
```html
<link href="https://fonts.googleapis.com/css2?family=Font+Name" rel="stylesheet">
```

2. Use in CSS classes or Tailwind config

3. Test across browsers for render time

4. Commit: `git commit -m "style: add new font family"`

### Optimizing Images

1. Compress image (TinyPNG, ImageOptim)
2. Choose format: JPEG (photos), PNG (transparency), SVG (icons/logos)
3. Add alt text and lazy loading:
```html
<img src="image.jpg" alt="Description" loading="lazy">
```

4. Replace old image
5. Commit: `git commit -m "perf: optimize image files"`

## Troubleshooting

### Issue: Font not loading
**Solution**: Check Google Fonts link in `<head>`, verify font name spelling, check network tab

### Issue: Tailwind classes not applying
**Solution**: Ensure class name matches Tailwind utility exactly, check responsive prefixes, clear browser cache

### Issue: Layout breaks on mobile
**Solution**: Test with `md:` and responsive classes, use `.hidden.md:block` for breakpoints

### Issue: Accessibility issues
**Solution**: Check color contrast (use WebAIM tool), verify keyboard navigation, test with screen reader

### Issue: Live server not working
**Solution**: 
```bash
# If port 8000 in use, try different port:
python -m http.server 8001

# Or use Python 2:
python -m SimpleHTTPServer
```

## Performance Standards

### Target Metrics
- Lighthouse Performance: > 90
- Lighthouse Accessibility: > 95
- Lighthouse Best Practices: > 90
- Lighthouse SEO: > 90

### Optimization Guidelines
- Keep CSS file < 50KB
- JavaScript < 10KB (non-framework pages)
- Images < 2MB total
- Zero blocking stylesheets/scripts above fold
- Lazy load below-fold images

## Documentation Standards

### When to Document

1. **New Feature**: Add to README or ARCHITECTURE.md
2. **New Pattern**: Add to AGENTS.md (< 100 lines)
3. **Bug Fix**: Include in commit message why it happened
4. **Complex Logic**: Add inline comments
5. **API Changes**: Update DEVELOPMENT.md

### Documentation Checklist
- [ ] Clear and concise
- [ ] Include code examples
- [ ] Link to related documentation
- [ ] Syntax highlighting for code
- [ ] Step-by-step instructions where needed

## Review Process

### What Gets Reviewed
✓ Code quality and style
✓ Functionality correctness
✓ Accessibility compliance
✓ Responsive design verification
✓ Performance impact
✓ Documentation updates

### Common Feedback Patterns
- "Please add accessibility labels"
- "Test on mobile device"
- "Update documentation"
- "Simplify with Tailwind utility"
- "Add error handling"

## Rules & Best Practices

1. **One feature per branch** - Easier to review and revert if needed
2. **Atomic commits** - Logical, reviewable changes
3. **No force pushing** - Preserve history (except on personal branches)
4. **Update main frequently** - Prevents large merge conflicts
5. **Test before pushing** - Don't rely on CI/CD to catch errors
6. **Document as you code** - Don't leave it for later
7. **Review your own code first** - Catch obvious issues before review
8. **Be respectful in code review** - Assume good intent
9. **Keep PRs focused** - Easier to review and understand
10. **Delete branches after merge** - Keep repository clean

## Getting Help

- Check [README.md](README.md) for project overview
- Review [AGENTS.md](AGENTS.md) for coding skills
- See [ARCHITECTURE.md](ARCHITECTURE.md) for design system
- Read [STYLING_GUIDE.md](STYLING_GUIDE.md) for CSS patterns
- Ask in pull request comments or email voxeonlabs@gmail.com
