/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'w300': '30rem',
        'w400':'40rem'

      },
      
    },
    fontFamily:{
      custom: ['Outfit', 'sans-serif']
      }
  },
  plugins: [],
}

