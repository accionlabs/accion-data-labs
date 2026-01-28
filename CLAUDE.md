# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands

```bash
npm start           # Start development server (http://localhost:3000)
npm test            # Run tests in watch mode
npm run build       # Build for production (outputs to ./docs for GitHub Pages)
npm run build:default  # Build to default ./build folder
```

## Architecture Overview

This is a React 19 + TypeScript marketing site for Accion Labs' data practice, using Create React App with Tailwind CSS.

### Routing Structure

Routes are defined in `src/App.tsx` using React Router v7 with a base path of `/accion-data-labs` (for GitHub Pages). The navigation follows a "Data Journey" sequence:

1. **Data Strategy** → 2. **Data Governance** → 3. **MDM** → 4. **Transformation** → 5. **Gen AI**

### Component Organization

- **AppLayout** (`src/components/AppLayout.tsx`): Root layout with Header/Footer wrapping all routes via `<Outlet />`
- **Pages** (`src/pages/`): Each route has a dedicated page component
- **Shared Components** (`src/components/`): Reusable UI pieces (ServiceCard, CaseStudyCard, PageHeader, etc.)

### Type Definitions

Core interfaces in `src/types/index.ts`:
- `ServiceOffering`, `CaseStudy`, `Technology`, `DataCapability`, `Partnership`

### Styling

- Tailwind CSS with custom `primary` color palette defined in `tailwind.config.js`
- Global styles in `src/index.css`

## Deployment

Production builds go to `/docs` folder for GitHub Pages deployment at https://accionlabs.github.io/accion-data-labs
