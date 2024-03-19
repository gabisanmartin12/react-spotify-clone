/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        primary: theme.colors.black,
      }),
      colors: (theme) => ({
        ...theme.colors,
        black: "#181414",
        "blue-moon": "#649AED",
        evergreen: "#D5F479",
        gray: {
          0: `rgba(255, 255, 255, 0.04)`,
          1: `rgba(255, 255, 255, 0.08)`,
          2: `rgba(255, 255, 255, 0.12)`,
          3: `rgba(255, 255, 255, 0.20)`,
          4: `rgba(255, 255, 255, 0.30)`,
          5: `rgba(255, 255, 255, 0.40)`,
          6: `rgba(255, 255, 255, 0.50)`,
        },
        green: "#57B660",
        "mellow-yellow": "#F6C874",
        "pink-moon": "#E57BA1",
        "pretty-in-pink": "#F7CFD4",
        "red-red-wine": "#EB5640",
        "whiter-shade-of-pale": "#A7C2D1",
        "yellow-submarine": "#F4E357",
      }),
      fontFamily: {
        heading: "CircularSpotifyText",
        text: "SfProText",
      },
    },
  },
  plugins: [],
};
