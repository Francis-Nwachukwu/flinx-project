/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neutralGray: "#A3A3A3",
        neutralBlack: "#2E2E2E",
        faintGray: "#7A7A7A",
        borderGray: "#E7E6EA",
        blue: "#075AAA",
        textRed: "#B42318",
        lightRedBg: "#FEF3F2",
        green: "#027A48",
        lightGreenBg: "#ECFDF3",
      },
    },
  },
  plugins: [],
};
