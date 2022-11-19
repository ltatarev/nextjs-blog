const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx}',
    './components/**/*.{js,ts,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dmSans)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
