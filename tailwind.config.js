/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primaryColor': '#fff',
      'secoundColor': '#ef4444',
      'backgroundColor': '#030712',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      writeFamily: ['Caveat'],
      monospace: ['Space Mono'],
      display: ['Gruppo'],
    },
    extend: {},
  },
  plugins: [],
}