# Derrick Furtado's Portfolio

A modern, minimalistic portfolio website built with Vue 3, TypeScript, and Tailwind CSS.

## Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Next-generation frontend tooling

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/      # Vue components
│   │   ├── Navigation.vue
│   │   ├── About.vue
│   │   ├── Skills.vue
│   │   ├── Projects.vue
│   │   └── Contact.vue
│   ├── App.vue          # Root component
│   ├── main.ts          # Entry point
│   └── style.css        # Global styles with Tailwind
├── public/              # Static assets
├── index.html           # HTML template
└── vite.config.ts       # Vite configuration
```

## Deployment

This portfolio is automatically deployed to GitHub Pages using GitHub Actions. The workflow is configured in `.github/workflows/deploy.yml`.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The `dist` folder contains the production-ready files that can be deployed to any static hosting service.

## Features

- ✅ Responsive design
- ✅ Smooth scrolling navigation
- ✅ Type-safe with TypeScript
- ✅ Modern, minimalistic UI
- ✅ Optimized build with Vite
- ✅ Automated deployment with GitHub Actions

## License

This project is open source and available under the MIT License.

