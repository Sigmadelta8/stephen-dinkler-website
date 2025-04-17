/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
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

