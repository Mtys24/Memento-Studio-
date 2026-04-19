/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        art: ['"Cormorant Garamond"', 'serif'],
        textile: ['"Montserrat"', 'sans-serif'],
      },
      colors: {
        memento: {
          charcoal: '#1A1A1A',
          bone: '#F4F1EA',
          gold: '#D4AF37',
          earth: '#8B4513',
          wool: '#E5D3B3',
        }
      },
    },
  },
  plugins: [],
}
