const BebasNeue = require('./src/fonts/BebasNeue-regular.ttf');

/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fontSeller': ['Bebas Neue', 'sans-serif'],
      }
    },
  },
  plugins: [],
}