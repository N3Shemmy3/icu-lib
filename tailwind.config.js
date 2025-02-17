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
        colorPrimary: {
          light: "#18181b", // Surface in light mode
          dark: "#fafafa", // Surface in dark mode
        },
        colorOnPrimary: {
          light: "#fafafa", // Text color on light background (match dark mode surface)
          dark: "#18181b", // Text color on dark background
        },
        colorBackground: {
          light: "#ffffff", // Surface in light mode
          dark: "#09090b", // Surface in dark mode
        },
        colorOnBackground: {
          light: "#09090b", // Text color on light background (match dark mode surface)
          dark: "#878790", // Text color on dark background
        },
        colorSurface: {
          light: "#f4f4f5", // A pure white for light surface
          dark: "#27272a", // Background in dark mode
        },
        colorOnSurface: {
          light: "#000000", //  Text color on light surface
          dark: "#fafafa", //  Text color on dark surface
        },
        colorOutline: {
          light: "#cccc", // Text color on light background (match dark mode surface)
          dark: "#4444", // Text color on dark background
        },
      },
    },
  },
  darkMode: "media",
  plugins: [],
};
