/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      zIndex: {
        NAVBAR: "2",
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
      },
    },
  },
  plugins: [],
};
