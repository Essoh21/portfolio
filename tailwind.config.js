/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '480px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        'Playfair-display': ['"Playfair Display", serif'],
      },
      colors: {
        'header-color': '#0ea5e9',
      },

      keyframes: {
        fade: {
          '0%': {
            transform: 'translateX(200%)',
            visibility: 'visible',
          },
          '100%': { transform: 'translateX(0)', visibility: 'visible' },
        },
      },
      animation: {
        'fad-anime': 'fade 4s ease-out 2s forwards  ',
      },
    },
  },
  plugins: [],
};
