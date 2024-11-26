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
      animation: {
        'shadow-slide': 'shadow-slide 4s linear infinite alternate',
        'unique-typing': 'unique-typing 4s steps(41, end) 1s infinite, unique-blink 0.5s step-end infinite',
      },
      keyframes: {
        'shadow-slide': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(300px)' },
        },
        'unique-typing': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        'unique-blink': {
          '50%': { borderColor: 'transparent' },
        },
      },
    },
  },
  darkMode: 'class',
  darkModeClass: 'dark-mode',
  plugins: [],
};

