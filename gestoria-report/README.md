# Gestoria Report — React Application

Интерактивный дашборд для анализа рынка gestoría в Испании.

## Быстрый старт

```bash
npm install
npm run dev
```

Открыть http://localhost:5173 (пароль: `5555`)

## Команды

| Команда | Описание |
|---------|----------|
| `npm run dev` | Запуск dev сервера (Vite HMR) |
| `npm run build` | Production сборка (61 модуль) |
| `npm run preview` | Превью production билда |
| `npm run lint` | ESLint проверка |

## Архитектура

```
src/
├── App.jsx                 # Главный компонент, роутинг глав
├── data/content.js         # Контент всех глав (~2000 строк)
├── components/
│   ├── auth/               # LoginScreen
│   ├── layout/             # Sidebar, MobileHeader
│   ├── ui/                 # MetricCard, BarChart, PricingTable
│   ├── chapters/           # Компоненты глав
│   │   ├── MarketArchitecture.jsx
│   │   ├── FiscalTraps.jsx
│   │   ├── UnitEconomics.jsx
│   │   ├── StrategyLaunch.jsx
│   │   └── LegalProtection.jsx
│   ├── competitors/        # CompetitorTable
│   └── tech/               # TechStackGrid
├── index.css               # CSS variables, dark theme
└── App.css                 # Component styles
```

## Компоненты глав

### MarketArchitecture
- Размер рынка €4.2B
- 3 сегмента клиентов по обороту
- Психотипы и pain points

### FiscalTraps
- Риски IS (Impuesto de Sociedades)
- НДС ловушки
- Intrastat требования

### UnitEconomics
- Тарифы €400-950/мес
- P&L прогноз на 3 года
- Break-even анализ

### StrategyLaunch
- Целевой клиент (persona)
- Ценовые пакеты (3 тира)
- 4-фазный план запуска
- Competitive moats

### LegalProtection
- RC страховка (Markel, Hiscox, AIG)
- Cero Multas механика
- Гарантии компаний (GESTIUN, бутиковые)
- Контрактные клаузулы
- 4-уровневый risk process

## Стилизация

- **Dark theme:** #050505, #0a0a0a
- **Accent colors:** cyan (#00f2ff), purple (#7000ff), green (#00ff88)
- **CSS Variables:** `--accent-primary`, `--bg-card`, `--text-secondary`
- **Responsive:** mobile-first, grid auto-fit

## Технологии

- React 19
- Vite 7
- ESLint (react-hooks, react-refresh)
