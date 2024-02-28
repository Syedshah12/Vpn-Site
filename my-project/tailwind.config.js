

/** 
 * 
 * 
 * @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'map-bg': "url('./src/assets/Flags/map.svg')",
        
      },


      screens: {
        '3xl': '1600px',
      },

      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },


colors:{
  "orange-primary":'#ED743F',
  "jet-black":"#ED743F",
  "light-pink":"#FBE3D9"
}

    },
  },
  darkMode: "class",
  plugins: [require("tw-elements-react/dist/plugin.cjs")]
}