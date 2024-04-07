/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: "hsla(58, 75%, 94%, 1)",
        "light-red": "hsla(0, 91%, 74%, 1)",
        black: "hsla(0, 0%, 0%, 1)",
        "cornell-red": "hsla(1, 77%, 41%, 1)",
        "apple-green": "hsla(82, 70%, 44%, 1)",
      },
      fontFamily: {
        "granstander": "Grandstander, sans-serif",
      }
    },
  },
  plugins: [],
};
