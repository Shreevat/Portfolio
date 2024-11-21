/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0AD0BC",
        tertiary: "#FF725C",
        secondary: "#FFCA47",
      },
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
        "hi-melody": ["Hi Melody", "sans-serif"],
      },
    },
    darkMode: 'class', // Add this line
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  },
  plugins: [],
};