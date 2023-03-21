/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        'in': '0px',
        'atF8': '480px',
      },
    },
  },
  plugins: [],
  fontFamily:{
    Whitney:["Whitney"],
    Ginto:["Ginto"],
    ggSans:["ggSans"],
  },
}
