const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents, theme}) {
      addComponents([
        {
          '.xyz': {
            color: theme('borderColor.DEFAULT', '#f00'),
          },
        },
      ]);
    }),
  ],
};
