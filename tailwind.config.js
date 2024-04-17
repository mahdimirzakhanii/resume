/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#050b20',
        'secondary': '#00C6C1',
        'tertiary': '#EBEEFF',
      },
      boxShadow: {
        '3xl': '0px 0px 30px 2px #00c7c0,0px 1px 10px 1px #00c7c0;',
      }
    },
  },
  plugins: [],
}

