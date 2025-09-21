# Convenience Store Map - AI Coding Instructions

## Architecture Overview

This is a React + TypeScript web application that displays an interactive map of Japanese convenience stores using MapLibre GL JS and PMTiles. The app allows filtering stores by chain and displays both store markers and coverage buffer areas.

### Key Components & Data Flow

```
App.tsx → MapView.tsx → {ChainSelector, useMapInit, useMapFilter}
                    ↓
               MapLibre Map ← PMTiles data sources
```

**Core Data Sources** (in `public/styles/style.json`):
- `convenience.pmtiles`: Store point data with name/brand properties
- `convenience_buffer.pmtiles`: Coverage area polygons  
- Mierune raster tiles for base map

## Critical Development Patterns

### 1. MapLibre Integration Architecture
The app uses a **custom hook pattern** for map functionality:

- **`useMapInit`**: Handles map creation, PMTiles protocol setup, and event handlers
- **`useMapFilter`**: Manages layer filtering logic with multilingual store name matching
- Map state flows: `mapRef.current` → filter hooks → MapLibre `setFilter()` calls

```typescript
// Pattern: Always check map state before operations
if (!map.isStyleLoaded() || !map.getLayer("convenience_store_labels")) return;
```

### 2. Multilingual Store Matching
Store names appear in multiple formats (Japanese/English/abbreviated). The filter logic uses MapLibre's `["any", ...]` expressions:

```typescript
// Example: ファミリーマート matches "ファミリーマート", "FamilyMart", "ファミマ"
filter = ["any", 
  ["in", "ファミリーマート", ["get", "name"]], 
  ["in", "FamilyMart", ["get", "name"]], 
  ["in", "ファミマ", ["get", "name"]]
];
```

### 3. Dual Layer Filtering
The app simultaneously filters two layers:
- `convenience_store_labels` (store markers/icons)
- `convenience_store_buffers` (coverage areas)

Both use identical filter expressions applied via `map.setFilter()`.

### 4. Dynamic Icon Loading
Icons are loaded asynchronously in `utils/onMapLoad.ts` and referenced by color names (`"red"`, `"green"`, etc.) in style.json, then mapped to convenience store chains.

## Development Workflow

### Local Development
```bash
npm run dev  # Vite dev server on localhost:5173
```

### Build & Deploy
```bash
npm run build     # TypeScript compilation + Vite build
npm run deploy    # Builds and deploys to GitHub Pages
```

### Key Configuration
- **Base URL**: Set in `vite.config.ts` for GitHub Pages deployment
- **PMTiles paths**: Relative to `public/` directory, referenced in style.json
- **Font loading**: Noto Sans glyphs served from `public/font/` with range-based loading

## File Structure Conventions

```
src/
├── components/     # UI components (ChainSelector, MapView)
├── hooks/         # Custom React hooks for map logic
└── utils/         # Pure functions (popup, pointer handlers)
```

### TypeScript Patterns
- MapLibre filter expressions require casting: `as maplibregl.FilterSpecification`
- Ref types: `useRef<maplibregl.Map | null>(null)` for map instances
- PMTiles Protocol must be registered before map creation

## Testing & Debugging

- Use browser dev tools to inspect MapLibre layer states
- Console logs in `useMapFilter` show filter changes
- Check `map.isStyleLoaded()` for timing issues
- PMTiles data is lazy-loaded based on zoom levels (minzoom: 8)

## External Dependencies

- **MapLibre GL JS**: Core mapping engine
- **PMTiles**: Efficient vector tile format
- **Mierune**: Japanese map tiles (raster base layer)
- **GitHub Pages**: Deployment target with configured base path