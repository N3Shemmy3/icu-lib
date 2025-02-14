/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#fafafa', // Surface in light mode
          dark: '#333',     // Background in dark mode
        },
        surface: {
          light: '#ffffff', // A pure white for light surface
          dark: '#1f1f1f',   // Surface in dark mode
        },
        onBackground: {
          light: '#333', // Text color on light background (match dark mode surface)
          dark: '#B4B4B4',   // Text color on dark background
        },
      },
    },
  },
  darkMode: 'media',
  plugins: [],
}