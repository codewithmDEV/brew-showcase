# Brew Showcase ☕

An admin portal for an e-commerce coffee store, built as a React-based Single Page Application (SPA). Administrators can view, search, add, and edit coffee products through a simulated backend.

## Features

- **Landing page** introducing the store
- **Product list** with live search/filtering by product name
- **Add Product** form to create new coffee listings
- **Product detail page** with price editing (PATCH)
- **Client-side routing** between all pages (React Router)
- **State management** via `useState`, `useContext`, `useEffect`, `useRef`, and a custom hook (`useProducts`)
- **Simulated backend** using `json-server` and `db.json`, supporting GET, POST, and PATCH requests
- **Component tests** written with Vitest and React Testing Library
- **Responsive, styled UI** with a cream and burgundy coffee-shop theme

## Tech Stack

- React (Vite)
- React Router
- CSS Modules
- json-server (simulated REST API)
- Vitest + React Testing Library

## Getting Started

### 1. Clone the repository

```bash
git clone git@github.com:codewithmDEV/brew-showcase.git
cd brew-showcase
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the simulated backend

In one terminal:

```bash
npm run server
```

This runs `json-server` against `db.json` at `http://localhost:3000`.

### 4. Start the development server

In a separate terminal:

```bash
npm run dev
```

The app will be available at the local URL shown in the terminal (typically `http://localhost:5173` or the next available port).

### 5. Run tests

```bash
npm run test
```

## Project Structure

```
src/
├── components/       # Reusable UI components (Navbar, SearchBar, ProductCard, ProductForm)
├── pages/             # Route-level pages (Landing, ProductList, ProductPage, AddProductPage)
├── hooks/             # Custom hooks (useProducts)
├── context/           # React Context for shared product state
├── styles/            # Shared/global styles
tests/                 # Component test files
db.json                # Simulated backend data
```

## Known Limitations

- Product data (`db.json`) is served locally per machine via `json-server`; changes made by one team member's local server (e.g. adding a test product) do not automatically sync to teammates unless committed and pushed to the repository.
- Prices are stored/entered and converted between currencies; ensure consistent currency handling when adding new products.
- No authentication — this is an internal admin demo, not a production-secured application.

## Team

Built by a 4-person team as part of a Summative Lab covering advanced React concepts: state management, routing, data fetching, and testing.