/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').defaultTheme} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kiwi: ['Kiwi Maru']
      }
    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    }
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
}
