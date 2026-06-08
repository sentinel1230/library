# Library Project

A web application for searching books using the Open Library API.
Users can search for books by title or author, view results in a grid, and save favorites to localStorage.

## TASK - https://drive.google.com/file/d/1RBRcuH-_oAvtjem5Xs0c4NXZ8I38aYyH/view

## HOW TO RUN

Requirements: Node.js 18+

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview


## PROJECT STRUCTURE

library-project/
├── index.html              # App entry point, main HTML markup
├── vite.config.js          # Vite bundler configuration
├── src/
│   ├── main.js             # App entry point, event listeners and render logic
│   ├── style.css           # Global styles, CSS variables, responsive layout
│   ├── assets/             # Static assets: SVG icons (heart, search, book)
│   ├── components/         # UI components — functions that return HTML strings
│   │   ├── BookCard.js         # Single book card with cover, title, author, year
│   │   ├── BookList.js         # Grid of BookCard components
│   │   ├── FavoriteBookCard.js # Single favorite item in the sidebar
│   │   └── FavoriteBookList.js # Renders the full favorites sidebar
│   └── utils/              # Helper functions and business logic
│       ├── api.js              # Fetch requests to the Open Library API
│       └── storage.js          # localStorage read/write for favorites
