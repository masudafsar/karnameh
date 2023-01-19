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
      primary: {
        DEFAULT: '#27AE60',
        dark: '#229551', // custom
      },
      secondary: {
        DEFAULT: '#F7F8F9',
        lightest: '#F7F8F9',
        light: '#9CAEBB',
      },
      success: '#66CB9F',
      error: '#F16063',
      black: '#222222',
      white: '#FFFFFF',
      gray: {
        darker: '#454545',
        dark: '#777777',
        light: '#E4E9EC',
        lightest: '#F9F9F9',
      },
    },
    borderRadius: {
      sm: '0.375rem',
      DEFAULT: '0.5rem',
      full: '9999px',
    },
    extend: {},
  },
  plugins: [],
};
