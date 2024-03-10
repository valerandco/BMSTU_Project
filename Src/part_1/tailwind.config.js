/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        customBlue: '#192E54',
        customHeader: '#395489',
        customText: '#8F8F8F'
      },
      
      screens: {
        'xsm': '300px',
        '4k': '3840px',
        '8k': '7680px',
        '2k': '1920px'

      },
      maxWidth: {
        '11xl': '3840 px', 
        '12xl': '7680px',
        '8xl': '3000px',
        '9xl': '2500px'
      },
    },
  },
  variants: {},
  plugins: [],
};