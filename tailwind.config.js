/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily:{
        editorial: ["Editorial Today", "serif"],
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
        manrope: ["var(--font-manrope)", "sans-serif"],
        "editorial-new": ["PP Editorial New", "serif"],
        "league-script": ["var(--font-league-script)", "cursive"]
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
  darkMode: 'class',
}