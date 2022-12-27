/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins, sans-serif"],
      },
      colors: {
        cadet: "#180D5B",
        fulvous: "#E68900",
        indigo: "#29384E",
        brown: "#C28E8E",
        white: "#FFFFFF",
        violets: "#8A79F1",
        verylightblue: "#6851F6",
        lavender: "#E2EDFF",
      },
    },
  },
  plugins: [],
};
