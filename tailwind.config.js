/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        background: '#0e011a',
        'background-varient': '#1a042d',
        primary: '#4e2a84',
        'primary-varient': '#836eaa',
        white: '#ffffff',
        light: '#bbb8b8',
      },
    },
  },
  plugins: [],
};
