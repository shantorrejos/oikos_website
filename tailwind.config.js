/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      nav: "17px",
      header: "80px",
    },
    extend: {
      colors: {
        "element-purple": "#745D79",
        "element-purpink": "#B393AB",
        "element-41black": "#414141",
        "element-b39pink": "#B393AB",
        "element-E7Cpink": "#E7C2CA",
        "element-24black": "#2F2F2F",
      },
    },
  },
  plugins: [],
};
