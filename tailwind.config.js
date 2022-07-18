const defualtTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./app/**/*.tsx', './app/**/*.ts'],
  theme: {},
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
};
