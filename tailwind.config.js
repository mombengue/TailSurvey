const  defaultTheme = require ('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extends: {
      fontFamily : { 
        sans : ['Inter' , ...defaultTheme.fontFamily.sans] , 
      } , 
    },
  },
  plugins: [
  ],
}