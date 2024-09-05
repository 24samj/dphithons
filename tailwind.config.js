/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#003145",
        secondary: "#002A3B",
        tertiary: "#FFCE5C",
        accent: "#0FA958",
        "backhround-hinted": "#F8F9FD",
        text: "black",
        extra: "#64607D",
        negative: "white",
        border: "#B7B7B7",
      },
      padding: {
        62: "15.5rem",
        34: "8.5rem",
        30: "7.5rem",
        26: "6.5rem",
        22: "5.5rem",
      },
      margin: {
        11: "2.75rem",
        18: "4.5rem",
      },
      width: {
        1.25: "0.3125rem",
        1.5: "0.375rem",
      },
      letterSpacing: {
        "wide-medium": "0.04em",
      },
      fontSize: {
        "4.5xl": ["2.5rem", "2.75rem"],
      },
      gap: {
        0.5: "1px",
        1: "2px",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
