/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Poppins"', "sans-serif"],
      text: ['"Open Sans"', "sans-serif"],
      montserrat: ['"Montserrat"', "sans-serif"]
    },
    extend: {}
  },
  plugins: []
};
