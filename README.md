# Personal Website Template

A modern, responsive personal website/portfolio template built with:

- React 19
- TypeScript
- Vite
- Tailwind CSS

This template provides a clean, professional design for developers, designers, and other professionals to showcase their skills, experience, and projects.

## Features

- 📱 Fully responsive design
- 🎨 Modern, clean UI with customizable color scheme
- 🔍 SEO-friendly structure
- ⚡ Fast performance with Vite
- 🎛️ Easy to customize and extend
- 📊 Sections for skills, experience, projects, and contact information

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm or yarn

### Installation

1. Clone this repository

```bash
git clone https://github.com/yourusername/personal-website-template.git
cd personal-website-template
```

2. Install dependencies

```bash
npm install
# or
yarn
```

3. Start the development server

```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:5173`

## Customization

### Personal Information

Edit the `src/data.ts` file to update your personal information, skills, experience, projects, and more.

```typescript
// Example of updating contact information
export const contactInfo: ContactInfo = {
  email: "your.email@example.com",
  linkedin: "https://www.linkedin.com/in/yourprofile/",
  github: "https://github.com/yourusername",
};

// Update your professional summary
export const summary = "Your professional summary here...";
```

### Colors and Styling

The color scheme can be customized in the `tailwind.config.js` file:

```javascript
colors: {
  "primary-dark": "#1a1a1a", // Main background color
  "secondary-dark": "#2a2a2a", // Secondary background color
  "accent-orange": "#ff8c00", // Primary accent color
  "accent-orange-light": "#ffa500", // Secondary accent color
  "text-light": "#e0e0e0", // Light text color
  "text-muted": "#a0a0a0", // Muted text color
},
```

### Adding Your Photo

Uncomment and update the image tag in the `src/components/Hero.tsx` file to add your photo:

```jsx
<img
  src="/path/to/your/photo.jpg"
  alt="Your Name"
  className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-accent-orange"
/>
```

## Building for Production

To build the site for production:

```bash
npm run build
# or
yarn build
```

The production-ready files will be generated in the `dist` directory.

## License

This template is available under the MIT License. Feel free to use it for your personal or professional website.

## Credits

Created with ♥ by Stefano Rifici

Icons provided by [React Icons](https://react-icons.github.io/react-icons/)
