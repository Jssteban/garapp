/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        montserrat:["Montserrat", "sans-serif"],
      },
      colors:{
        color1: "#1c1c1c",
        color2: "#fa3d3b",
        color3: "#c6c6c6"
      }
    },
  },
  plugins: [],
}

