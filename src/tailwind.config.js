/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // önemli
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a', // primary rengi
        secondary: '#6b6b6b', // secondary rengi
      },
      borderRadius: {
        none: '0px', // border-radius none
        sm: '4px', // border-radius small
        DEFAULT: '8px', // border-radius default
        md: '12px', // border-radius medium
        lg: '16px', // border-radius large
        xl: '20px', // border-radius xlarge
        '2xl': '24px', // border-radius 2x large
        '3xl': '32px', // border-radius 3x large
        full: '9999px', // full border-radius
        button: '8px', // özel button border-radius
      },
    },
  },
  plugins: [],
};
