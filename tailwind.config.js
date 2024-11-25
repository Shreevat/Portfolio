/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)',
      },
      dark: {
        colors: {
          primary: 'var(--primary)',
          secondary: 'var(--secondary)',
          tertiary: 'var(--tertiary)',
        },
      },
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
        "hi-melody": ["Hi Melody", "sans-serif"],
      },
    },
  },
  darkMode: 'class',
  darkModeClass: 'dark-mode',
  plugins: [],
};