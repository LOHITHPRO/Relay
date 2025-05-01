/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/App.jsx", "./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("daisyui")],
}