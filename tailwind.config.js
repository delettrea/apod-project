/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["pastel"],
  },
  theme: {
    extend: {
      colors: {
        'dark-violet': '#3d345e',
      },
      fontFamily: {
        'jost': ['Jost', 'serif'],
      },
      maxHeight: {
        '80-screen': '80vh',
      }
    }
  }
}
