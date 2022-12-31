/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.elm"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Source Sans Pro",
          "Trebuchet MS",
          "Lucida Grande",
          "Bitstream Vera Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      colors: {
        blue: {
          elm: "#5fabdc",
        },
        body: "#000e16",
      },
    },
  },
  plugins: [],
};
