# VisionAttend AI - Smart Attendance by Voxeon Labs

Enterprise-grade vision AI for automated, low-latency facial tracking and attendance management. Built for universal connectivity and modern enterprise infrastructure.

## Project Overview

VisionAttend is a fully responsive, dark-mode web application showcasing Voxeon Labs' AI capabilities:
- **Real-time Sorting Engine**: High-speed edge processing for facial recognition categorization
- **AI Policy Architect**: Customizable institutional punctuality logic generator
- **Interactive Demo**: Live sorting lab demonstrating attendance classification (On Time, Grace, Late)

## Technology Stack

- **Frontend**: HTML5, Tailwind CSS (dark mode)
- **Design**: Glass-morphism cards, gradient overlays, animated UI elements
- **Typography**: Orbitron (headings, 900px), Plus Jakarta Sans (body)
- **Icons**: Font Awesome 6.5.1
- **Utilities**: jsPDF (document generation)

## Key Features

1. **Dark Mode Design**: Full dark theme with accent colors (green #00f06f, cyan #00e5ff)
2. **Glass-Morphism UI**: Semi-transparent cards with backdrop filters
3. **Responsive Layout**: Mobile-first, fully responsive design
4. **Interactive Tabs**: Voxeon ecosystem showcase with switchable content
5. **Contact Integration**: Demo request form with validation
6. **Accessibility**: Semantic HTML, proper contrast ratios, keyboard navigation

## Project Structure

```
vision-attend-ai-website/
├── index.html           # Main website (single-page application)
├── favicon.jpg          # Browser tab icon (Voxeon Labs logo)
├── logo.svg            # Archived SVG logo (deprecated)
├── README.md           # This file
├── AGENTS.md           # AI agent skills and procedures
├── ARCHITECTURE.md     # Design system and technical architecture
├── STYLING_GUIDE.md    # CSS patterns and Tailwind configuration
├── DEVELOPMENT.md      # Development workflow and contribution guide
└── RULES.md            # Repository rules and conventions
```

## Setup & Development

1. Clone the repository:
   ```bash
   git clone https://github.com/adhimanoj/vision-attend-ai-website.git
   cd vision-attend-ai-website
   ```

2. Open `index.html` in a modern web browser or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   # Using Node.js http-server
   npx http-server
   ```

3. Navigate to `http://localhost:8000` (or `file:///path/to/index.html`)

## Color System

| Purpose | Color | Hex |
|---------|-------|-----|
| Primary Accent | Green | #00f06f |
| Secondary Accent | Cyan | #00e5ff |
| Background Dark | Black | #020617 |
| Card Background | Semi-transparent | rgba(15, 23, 42, 0.75) |
| Text Primary | White | #ffffff |
| Text Secondary | Gray | #b0b0b0 |

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contact & Support

- **Email**: voxeonlabs@gmail.com
- **Response Time**: 24-hour cycle
- **Headquarters**: Level 2, Thejus Engineering College, Vellarkad, Thrissur, India
- **Instagram**: [@voxeonlabs](https://instagram.com/voxeonlabs)

## License

© 2026 Voxeon Labs • VoxeonLabs Initiative

## Contributing

See [DEVELOPMENT.md](DEVELOPMENT.md) for contribution guidelines and [AGENTS.md](AGENTS.md) for AI agent skill documentation.
