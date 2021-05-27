module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  important: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        turqoise: "#51B7AE",
        "turqoise-100": "#EFFAF9",
        "turqoise-110": "#51B7AE",
        "blue-100": "#1B4F7B",
        "blue-110": "#18476F",
        black: "#363435",
        "black-600": "#666666",
        "black-40": "#999999",
      },
      outline: {
        gray: "1px solid #B3B3B3",
      },
      animation: {
        fadein: "fadein 1s",
        fadeout: "fadeout 1s",
      },
      keyframes: {
        fadein: {
          from: {
            top: "0px",
            opacity: 0,
          },
          to: {
            top: "30px",
            opacity: 1,
          },
        },
        fadeout: {
          from: {
            top: "30px",
            opacity: 1,
          },
          to: {
            top: "0px",
            opacity: 0,
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
