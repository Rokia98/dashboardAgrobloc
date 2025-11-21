/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        agrobloc: {
          primary: '#16a34a',
          secondary: '#15803d',
          accent: '#22c55e',
          dark: '#14532d',
        },
      },
    },
  },
  plugins: [],
}
