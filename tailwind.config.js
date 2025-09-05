/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A2A80",
        secondary: "#3B38A0",
        accent: "#7A85C1",
        light: "#B2B0E8",
      },
    },
  },
  plugins: [],
};
