// Tailwind CSS configuration for 10XMA Creative Production & Media Agency website
// Currently using Bootstrap as the primary styling framework
// This config is kept minimal for potential future use or gradual migration

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom font families
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
