/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    './node_modules/preline/dist/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '639px',
        'xe': '475px',
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

