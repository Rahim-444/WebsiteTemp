/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["'Pacifico'", "cursive"],
      },
      colors: {
        primary: "#030712",
        secondary: "#111827",
        accent: "#374151",
      },
    },
  },
  plugins: [],
};
