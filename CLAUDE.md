# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Gestoria business report/landing page project built with React 19 and Vite 7. The project displays structured content about gestoria services in a premium, scrollable single-page format with fade-in animations.

## Commands

```bash
# Development
npm run dev          # Start development server (Vite)
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

All commands should be run from the `gestoria-report` directory.

## Architecture

### Structure
- `gestoria-report/` - Main React application
  - `src/App.jsx` - Main component with all rendering logic
  - `src/data/content.js` - Content data (all text, sections, features)
  - `src/index.css` - Global styles with CSS variables
  - `src/App.css` - Component-specific styles
- `docs/` - Business documentation and analysis files (Russian)

### Key Patterns

**Content-driven rendering**: The app renders from a structured `content` object imported from `src/data/content.js`. Content includes:
- Hero section (title, subtitle, CTA)
- Chapters with sections, text arrays, highlights, comparisons, and features

**Animation system**: Uses `FadeIn` component with IntersectionObserver for scroll-triggered animations. Supports `delay` prop for staggered effects.

**Text formatting**: `FormatText` component parses `**bold**` syntax in content strings.

### Styling
- Uses CSS custom properties (`--accent-primary`, `--accent-secondary`)
- Dark theme (#050505, #0a0a0a backgrounds)
- Inline styles for dynamic layout variations
- Responsive grid system

### Content Structure (in content.js)
```javascript
{
  hero: { title, subtitle, cta },
  chapters: [{
    id, title, heading,
    sections: [{ title, text: [], list: [] }],
    highlight,
    comparison: [{ type, pros, cons }],
    features: [{ title, desc }],
    cta
  }]
}
```

## ESLint Configuration

- Targets ES2020+ with JSX
- Uses `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`
- Custom rule: `no-unused-vars` ignores variables starting with uppercase or underscore
