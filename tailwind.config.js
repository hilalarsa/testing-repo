module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        turqoise: "#51B7AE"
      },
      outline: {
        gray: '1px solid #B3B3B3',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
