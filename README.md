# Intuitive Spine

A React web application for Intuitive Spine - Spinal Flow wellness practice.

## Features

- **Landing Page**: Welcome section with hero banner, features showcase, and call-to-action
- **About Page**: Information about the practice, mission, and Spinal Flow technique
- **Our Practitioners**: Profiles of certified practitioners with their specialties
- **Booking Page**: Interactive appointment booking form with validation

## Tech Stack

- React 19
- React Router DOM for navigation
- Vite for fast development and building
- Modern CSS with responsive design

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mahamjamal/intuitive-spine.git
cd intuitive-spine
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Build the application:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
intuitive-spine/
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navigation.jsx
│   │   └── Navigation.css
│   ├── pages/          # Page components
│   │   ├── Landing.jsx
│   │   ├── About.jsx
│   │   ├── Practitioners.jsx
│   │   └── Booking.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
└── package.json        # Project dependencies
```

## License

ISC
