/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}',
  'node_modules/preline/dist/*.js',],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        customBlue: '#192E54',
        customHeader: '#395489',
        customText: '#8F8F8F', 
        customText_green: '#155265', 
        bluestart: '#062052', 
        blueend: '#475E89', 
        user_review_bg: '#1B3661',
        price: '#11F8C4',
        button: '#223D71'
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
  plugins: [
    require('preline/plugin')
  ],
};