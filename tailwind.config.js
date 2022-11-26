const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx}', './modules/**/*.{js,ts,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dmSans)', ...fontFamily.sans],
      },
      colors: {
        'accent-1': '#ca718d',
        success: '#0070f3',
      },
      boxShadow: {
        button: '0 4px 14px 0px',
      },
    },
  },
  plugins: [],
};
