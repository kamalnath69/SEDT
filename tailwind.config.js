/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#245eaa',
        secondary: '#FAC206 '
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem'
        }
      }
    }
  },
  plugins: []
}
