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
        roofliner: {
          blue: "#00ABFB",
          orange: "#E58F65",
          red: "#cd5334",
          dark: "#151515",
          purple: "#9F87AF",
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
