/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./layouts/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#323335',
        white: '#f7f8fa',
        primary: '#ccff00'
      }
    },
    fontFamily: {
      sans: ['Raleway', 'sans-serif']
    }
  },
  plugins: []
};
