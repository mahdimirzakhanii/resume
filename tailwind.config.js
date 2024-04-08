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
        'primary': '#070F2B',
        'secondary': '#00C6C1',
        'tertiary': '#EBEEFF',
      },
    },
  },
  plugins: [],
}

