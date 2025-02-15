/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
		"./*.{vue,js,ts,css}",
		"./assets/**/*.{vue,js,css}",
		"./components/**/*.{vue,js}",
		"./layOuts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
	],
  theme: {
    extend: {
      colors: {
        colorBackground: {
          light: '#fafafa', // Surface in light mode
          dark: '#1f1f1f',   // Surface in dark mode
        },
        colorSurface: {
          light: '#ffffff', // A pure white for light surface
          dark: '#333',     // Background in dark mode
        },
        colorOnBackground: {
          light: '#333', // Text color on light background (match dark mode surface)
          dark: '#B4B4B4',   // Text color on dark background
        },
      },
    },
  },
  darkMode: 'media',
  plugins: [],
}