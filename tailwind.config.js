/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        10: "#e4b026",
        light: {
          60: "#12181c",
          30: "#697076",
        },
        dark: {
          60: "#ededed",
          30: "#bbbbbb",
        },
      },
      backgroundColor: {
        10: "#e4b026",
        light: {
          60: "#f6f9fc",
          30: "#ffffff",
          10: "#434344",
        },
        dark: {
          60: "#1c1c1c",
          30: "#232323",
        },
      },
    },
  },
  plugins: [],
};
