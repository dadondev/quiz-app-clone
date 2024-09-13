/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        purple:'#A729F5',
        darkNavy:"#313E51",
        navy:"#3B4D66",
        greyNavy:"#626C7F",
        bluish:"#ABC1E1",
        lightGrey:"#F4F6FA",
        white:"#FFFFFF",
        green:"#26D782",
        red:"#EE5454"
      }
    },
  },
  plugins: [],
}

