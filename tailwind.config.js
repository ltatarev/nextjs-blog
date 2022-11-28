const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx}', './src/modules/**/*.{js,ts,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dmSans)', ...fontFamily.sans],
      },
      colors: {
        'accent-1': '#ca718d',
        'tag-1': '#AF5AB0',
        'tag-2': '#5780C2',
        'tag-3': '#A8C96C',
        'tag-4': '#DE5A90',
      },
      boxShadow: {
        button: '0 4px 14px 0px',
        filter: '0 2px 10px 0px',
      },
    },
  },
  plugins: [],
};
