# World Population Explorer — Interview Demo

React + TypeScript demo app that fetches country data from the REST Countries API and renders an interactive bar chart.

## Your Task

Complete the three marked TODOs so the app:
1. **Fetches** the top 15 countries by population from the REST Countries API
2. **Renders** a bar chart using Recharts
3. **Shows** a detail panel when a bar is clicked

| File | What to implement |
|---|---|
| `src/utils/transform.ts` | Sort and slice countries by population |
| `src/hooks/useCountries.ts` | Fetch data, manage loading/error state |
| `src/components/CountryChart.tsx` | Build chart data + click handler |


## Stack
- **React 19** + **TypeScript** (strict, `verbatimModuleSyntax`)
- **Vite** — bundler
- **Recharts** — bar chart with click events
- **REST Countries API** — free, no API key required

## Run
```bash
npm install
npm run dev
```

## Project structure
```
src/
├── types/country.ts      # Country interface (pre-built)
├── hooks/useCountries.ts # Data fetching hook   ← TODO
├── utils/transform.ts    # Sort + slice helper   ← TODO
├── components/
│   ├── CountryChart.tsx  # Recharts bar chart    ← TODO (partial)
│   └── CountryDetail.tsx # Detail panel (pre-built)
└── App.tsx               # Root wiring (pre-built)
```

## Notes
- Chart library: switched from `react-plotly.js` to `recharts` — better ESM compatibility, pure-React API, simpler TypeScript integration.
- All type-only imports use `import type` due to `verbatimModuleSyntax: true` in tsconfig.
