/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  screens: {
    xsm: '500px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  theme: {
    extend: {
      // screens: {
      //   xsm: '500px'
      // },
      spacing: {
        13: '3.25rem'
      },
      fontSize: {
        '10xl': ['9rem', { lineHeight: '1.2' }],
      }
    },
  },
  plugins: [],
}

