/* eslint-env node */
/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: { xs: "425px", ...defaultTheme.screens },
      zIndex: {
        NAVBAR: "2",
        MODAL: "3",
      },
      borderWidth: {
        1: "1px",
      },
      colors: {
        primary: {
          100: "#cceefe",
          200: "#99defd",
          300: "#66cdfc",
          400: "#33bdfb",
          500: "#00acfa",
          600: "#008ac8",
          700: "#006796",
          800: "#004564",
          900: "#002232",
        },
        secondary: {
          100: "#fddfd7",
          200: "#fbbfaf",
          300: "#f8a086",
          400: "#f6805e",
          500: "#f46036",
          600: "#c34d2b",
          700: "#923a20",
          800: "#622616",
          900: "#31130b",
        },
      },
      backgroundImage: {
        "header-background":
          "linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url('@/assets/images/header-background.webp')",
        "shingle-tiles":
          "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('@/assets/images/shingle-tiles.webp')",
        "slate-tiles":
          "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('@/assets/images/slate-tiles.webp')",
        "velux-window":
          "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('@/assets/images/velux-window.webp')",
        "supply-only":
          "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('@/assets/images/supply-only.webp')",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
