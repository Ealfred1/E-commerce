/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
        primary: '#F62626', // red navbar and buttons
        secondary: '#F8F8F8', // background
        grayDark: '#333', // text color
        grayLight: '#D1D5DB', // light borders
        black: '#000', // default text color
        white: '#FFF', // white background or text
        accent: '#FF4500', // hot tag, highlights
      },
    },
  },
  plugins: [],
}