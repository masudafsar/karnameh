/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['IRANYekan', 'sans-serif'],
    },
    fontSize: {
      xl: ['1.5rem', '2.25rem'],
      lg: ['1rem', '1.5rem'],
      md: ['0.875rem', '1.25rem'],
      sm: ['0.75rem', '1.25rem'],
      h1: ['1.5rem', '2.25rem'],
      h2: ['1rem', '1.5rem'],
      base: ['.875rem', '1.25rem'],
    },
    colors: {
      primary: '#27AE60',
      SecondaryLightest: '#F7F8F9',
      SecondaryMoreLight: '#9CAEBB',
      black: '#222222',
      white: '#FFFFFF',
      grayDarker: '#454545',
      grayDark: '#777777',
      grayLightest: '#F9F9F9',
    },
    extend: {},
  },
  plugins: [],
};
