/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        Poppinsthin:['Poppinsthin','sans-serif'],
        Poppinsblack:['Poppinsblack','sans-serif'],
        Poppinsbold:['Poppinsbold','sans-serif'],
        Poppinsmedium:['Poppinsmedium','sans-serif'],
      },
    },
  },
  plugins: [],
}