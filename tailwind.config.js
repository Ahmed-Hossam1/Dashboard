/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#4cceac",
        secondaryColor: "#3e4396",
      },
    },
  },
  plugins: [ require('daisyui'),],
};

