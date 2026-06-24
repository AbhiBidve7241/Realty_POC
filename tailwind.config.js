/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#222831',
        concrete: '#393E46',
        primary: '#FFD369', // Gold/orange accent
        light: '#EEEEEE',
        forest: '#224141',
        sage: '#486664',
        gold: '#C3B388',
        ivory: '#E9E5DD',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
