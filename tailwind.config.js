/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        text: "var(--text)",
        background: "var(--background)",
      },

      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
        "hi-melody": ["Hi Melody", "sans-serif"],
        "roboto-slab": ["Roboto Slab", "sans-serif"],
      },
      animation: {
        "shadow-slide": "shadow-slide 4s linear infinite alternate",
        "unique-typing":
          "unique-typing 4s steps(41, end) 3s infinite, unique-blink 0.5s step-end infinite",
        "pop-out": "pop-out 1s",
        "sweepIn": "sweepIn 0.6s ease-out forwards",
      },
      keyframes: {
        "shadow-slide": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(300px)" },
        },
        "unique-typing": {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        "unique-blink": {
          "50%": { borderColor: "transparent" },
        },
        "pop-out": {
          "0%": { transform: "scale(0.8)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        sweepIn: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        
      },
    },
  },
  darkMode: "class",
  darkModeClass: "dark-mode",
  plugins: [],
};
