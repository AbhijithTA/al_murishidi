/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      colors:{
        'bluee':"#4c6ba2",
        'redd':"#ac5247"
      }
    },
  },
  plugins: [],
}