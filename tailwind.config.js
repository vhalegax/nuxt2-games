/** @type {import('tailwindcss').Config} */

const myTheme = {
  fontFamily: {},
  colors: {
    primary: {},
    secondary: {},
  },
}

module.exports = {
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
