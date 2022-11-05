const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      typography: {
        abc: {
          css: {
            color: '#f00',
            '> a': {
              color: '#0f0',
              '&:hover': {
                color: '#00f',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.xyz': {
          color: theme('borderColor.DEFAULT', '#f00'),
          '.a': {
            color: '#ff0',
          },
        },
        '.card': {
          backgroundColor: '#fff',
          borderRadius: '.25rem',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
          '&:hover': {
            boxShadow: '0 10px 15px rgba(0,0,0,0.2)',
          },
          '@media (min-width: 500px)': {
            borderRadius: '.5rem',
          },
        },
      });
    }),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
};
