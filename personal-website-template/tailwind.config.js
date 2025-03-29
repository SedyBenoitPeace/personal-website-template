// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure this matches your project structure
  ],
  theme: {
    extend: {
      // Define your custom theme palette so you can use names like 'text-accent-orange'
      colors: {
        "primary-dark": "#1a1a1a", // Maps to var(--color-primary-dark) if using CSS vars too
        "secondary-dark": "#2a2a2a",
        "accent-orange": "#ff8c00",
        "accent-orange-light": "#ffa500",
        "text-light": "#e0e0e0",
        "text-muted": "#a0a0a0",
      },
      // You can still extend other theme aspects here if needed
      fontFamily: {
        // sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
  // No postcss section usually needed here for v4 with Vite
};
