/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

const myTheme = {
  fontFamily: {},
  colors: {
    transparent: 'transparent',
    base: colors.gray,
    neutral: colors.gray,
    primary: colors.purple,
    secondary: colors.pink,
    accent: colors.blue,
    success: colors.green,
    error: colors.red,
    info: colors.blue,
    warning: colors.yellow,
  },
}

module.exports = {
  darkMode: 'class',

  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      ...myTheme,
    },
  },
  plugins: [],
}
