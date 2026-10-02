/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#fbf7f2',
          100: '#f3e8d8',
          200: '#e5cfae',
          500: '#b8864a',
          700: '#7a5324',
          900: '#2a1a0b',
        },
      },
    },
  },
  plugins: [],
};
