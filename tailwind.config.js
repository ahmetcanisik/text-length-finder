/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter Variable', ui-serif",
        concertOne: "'Concert One', ui-serif"
      }
    },
  },
  plugins: [],
}

