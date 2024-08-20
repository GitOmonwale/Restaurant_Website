/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'green': '#39DB4A',
        'gray': '#4A4A4A',
        'red':'#FF6868',
        'turquois':'#C1F1C6'
      },
      fontFamily:{
        'inter': ['Inter', 'sans*serif'],
      }
    },
  },
  plugins: [],
}