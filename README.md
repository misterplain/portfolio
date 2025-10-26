# Portfolio

A modern, responsive portfolio website showcasing web development projects with a clean, professional design.

## Overview

This is a React-based portfolio application featuring dark mode toggle, responsive design, and smooth navigation. Built with Material UI for consistent styling and Figma for design prototyping, it presents personal projects with detailed descriptions, live links, and GitHub repositories.

**Key Features:**

- Dark/light theme toggle with persistent user preference
- Fully responsive design for all screen sizes
- Project showcase with filtering and detailed views
- Contact form with email integration
- Smooth navigation and modern UI components

The deployed site can be found [HERE](https://patrickobrien.onrender.com/)

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. (Optional) Configure environment variables:
   - The contact form connects to a backend API
   - Update the API endpoint in `src/features/contact/ContactForm.js` if needed

## Running the Project

### Development Mode

Start the development server:

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`. The page will reload automatically when you make changes.

### Production Build

Create an optimized production build:

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

### Testing

Run the test suite:

```bash
npm test
```

## Deployment

This project is deployed on Render.com. To deploy your own version:

1. **Build the application:**

   ```bash
   npm run build
   ```

2. **Deploy to Render.com:**
   - Connect your GitHub repository
   - Select "Static Site" as the service type
   - Set build command: `npm install && npm run build`
   - Set publish directory: `build`
   - Deploy!

**Alternative deployment options:**

- **Vercel**: Automatic deployments from GitHub
- **Netlify**: Drag and drop the `build` folder
- **GitHub Pages**: Use `gh-pages` package for deployment

## Key Files / Structure

```
portfolio/
├── public/             # Static assets and HTML template
├── src/
│   ├── assets/        # Images and media files
│   ├── components/    # Reusable UI components
│   │   └── common/    # Shared components (Header, Footer, Layout, Buttons)
│   ├── data/          # Project data and content
│   ├── features/      # Feature-specific components
│   │   ├── about-me/  # About section
│   │   ├── contact/   # Contact form
│   │   ├── hero/      # Hero section
│   │   └── projects/  # Projects showcase
│   ├── pages/         # Page components (routes)
│   ├── theme/         # Material UI theme configuration
│   │   ├── index.js   # Theme setup and export
│   │   ├── palette.js # Color schemes (light/dark)
│   │   └── typography.js # Font configurations
│   ├── App.js         # Main application component
│   └── index.js       # Application entry point
├── package.json       # Dependencies and scripts
└── README.md         # This file
```

## Tech Stack

- **Framework**: React 18
- **UI Library**: Material UI v5
- **Routing**: React Router DOM v6
- **Form Handling**: Formik + Yup validation
- **Icons**: React Icons, Material UI Icons
- **HTTP Client**: Axios
- **Design**: Figma (prototyping and design)

## Features in Detail

### Theme Switching

- Toggle between light and dark modes
- Consistent color schemes across all components
- Custom Material UI theme with brand colors

### Responsive Design

- Mobile-first approach
- Breakpoints for mobile, tablet, and desktop
- Optimized layouts for all screen sizes

### Project Showcase

- Display projects with images, descriptions, and tech stacks
- Links to live demos and GitHub repositories
- Filter and view all projects or featured ones

### Contact Form

- Form validation with Formik and Yup
- Email integration via backend API
- User feedback for successful/failed submissions

## Notes

- The contact form requires a backend API endpoint (currently set to `https://cute-gray-pelican-tux.cyclic.app/portfolio/contact`)
- Update the API endpoint in `ContactForm.js` if you're using a different backend
- Theme preference is controlled via component state (could be enhanced with localStorage)
- Images are imported statically for better build optimization

## Future Enhancements

Potential improvements for this portfolio:

- Add blog section for technical articles
- Implement project filtering by technology
- Add animations and transitions (Framer Motion)
- Store theme preference in localStorage
- Add analytics integration (Google Analytics)
- Implement SEO optimization with React Helmet

## Feedback

Any and all feedback on this project is welcome! You may contact me [HERE](https://www.linkedin.com/in/patrick-o-brien-6743b044/)!
