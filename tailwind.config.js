/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif']
      },
      colors: {
        'blue-color': "#020c2B",
        'light-blue': "#060125"
      }
    },
  },
  plugins: [],
}
