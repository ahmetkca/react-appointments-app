/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./src/**/*.{js,jsx,html}", "./index.html"],

  theme: {
    extend: {},
  },

  plugins: [require("@tailwindcss/forms")],
}
