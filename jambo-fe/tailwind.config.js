/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      jakarta: ["Plus Jakarta Sans", "sans-serif"],
      britanica: ["../public/britanica-extrabold.ttf"]
    }
  },
  plugins: [],
}

