/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'avenir next',
          'avenir',
          'segoe ui',
          'helvetica neue',
          'Cantarell',
          'Ubuntu',
          'roboto',
          'noto',
          'helvetica',
          'arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}

