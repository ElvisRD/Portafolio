/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'backgroundAboutMe': '#040406',
        'backgroundSkills': '#151515',
        'huecoSkills': "#3b3b3b",
      },
      width: {
        w48: '46%',
        450: "450px"
      },
      screens: {
        'xs': '320px',
        'xxs': '160px'
      },
      minHeight: {
        '69': '69.5vh',
      }
    },
  },
  plugins: [],
}

