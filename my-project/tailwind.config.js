/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
      screens: {
        '3xl': '1600px',
      },

      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },


colors:{
  "orange-primary":'#ED743F',
  "jet-black":"#ED743F"
}

    },
  },
  plugins: [],
}