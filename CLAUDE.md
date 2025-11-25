# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Gestoria 2.0 — strategic dashboard for launching a gestoría (accounting agency) in Spain. Built with React 19 and Vite 7, featuring modular component architecture, dark theme, and password protection.

## Commands

```bash
# Development (run from gestoria-report/)
npm run dev          # Start development server (Vite HMR)
npm run build        # Build for production (61 modules)
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

All commands should be run from the `gestoria-report` directory.

## Architecture

### Directory Structure
```
gestoria-report/
├── src/
│   ├── App.jsx                    # Main component, chapter routing
│   ├── main.jsx                   # Entry point
│   ├── data/
│   │   └── content.js             # All report content (~2000 lines)
│   ├── components/
│   │   ├── auth/                  # LoginScreen
│   │   ├── layout/                # Sidebar, MobileHeader
│   │   ├── ui/                    # MetricCard, BarChart, PricingTable
│   │   ├── chapters/              # Chapter components
│   │   │   ├── MarketArchitecture.jsx
│   │   │   ├── FiscalTraps.jsx
│   │   │   ├── UnitEconomics.jsx
│   │   │   ├── StrategyLaunch.jsx
│   │   │   └── LegalProtection.jsx
│   │   ├── competitors/           # CompetitorTable
│   │   └── tech/                  # TechStackGrid
│   ├── index.css                  # Global styles, CSS variables
│   └── App.css                    # Component styles
docs/                              # Business documentation (Russian)
```

### Key Patterns

**Content-driven rendering**: App renders from structured `content` object in `src/data/content.js`. Each chapter has unique data structure consumed by its component.

**Chapter components**: Each chapter in `components/chapters/` handles its own rendering logic based on chapter data from content.js. App.jsx routes by `chapter.id`:
```jsx
if (chapter.id === 'market-deep') return <MarketArchitecture chapter={chapter} />;
if (chapter.id === 'fiscal-traps') return <FiscalTraps chapter={chapter} />;
// etc.
```

**Component exports**: Each component folder has `index.js` barrel export:
```javascript
// components/chapters/index.js
export { default as MarketArchitecture } from './MarketArchitecture';
export { default as StrategyLaunch } from './StrategyLaunch';
// etc.
```

### Chapter Data Structures

**MarketArchitecture** (`market-deep`):
- `market_size`, `growth_drivers`, `segments[]`, `psychotypes[]`

**FiscalTraps** (`fiscal-traps`):
- `categories[]` with `risks[]`, each having `title`, `description`, `penalty`

**UnitEconomics** (`unit-economics`):
- `pricing_tiers[]`, `salary_benchmarks[]`, `financial_projection`, `break_even`

**StrategyLaunch** (`strategy-launch`):
- `positioning`, `pricing_tiers[]`, `differentiators[]`, `execution_roadmap[]`, `tech_stack`, `moats`

**LegalProtection** (`legal-risk`):
- `legal_reality`, `insurance{}`, `company_guarantees{}`, `zero_multas{}`, `contract_clauses{}`, `risk_process{}`, `recommendations{}`

**Competitors** (`competitors`):
- `segments[]`, `matrix[]`, `insights[]`, `gaps[]`, `sla_comparison{}`, `insurance_comparison{}`, `intl_trade_comparison{}`

### Styling
- CSS custom properties (`--accent-primary`, `--accent-cyan`, `--accent-purple`, `--accent-green`)
- Dark theme (#050505, #0a0a0a backgrounds)
- Inline styles for dynamic layout variations
- Responsive grid with `minmax(min(100%, Xpx), 1fr)`

## ESLint Configuration

- Targets ES2020+ with JSX
- Uses `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`
- Custom rule: `no-unused-vars` ignores variables starting with uppercase or underscore

## Adding New Chapters

1. Add chapter data to `src/data/content.js` in `chapters[]` array
2. Create component in `src/components/chapters/NewChapter.jsx`
3. Export from `src/components/chapters/index.js`
4. Add routing case in `App.jsx` `ChapterContent` component
