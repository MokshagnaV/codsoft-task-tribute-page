/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gloock: ["Gloock", ...defaultTheme.fontFamily.serif],
        sans: ["Libre Franklin", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
