/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#F4E041",
      secondary: "#00BDD3",
      "light-gray": "#F8F8F8",
      "primary-hover": "#FFE302",
      disabled: "#B4B4B4",
      gray:'#7E7E7E',
      black:'#000',
      white:'#fff',
      error:"#CB3D40"
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1170px",
    },

    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1170px",
      },
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "2rem",
        lg: "3rem",
      },
    },
  },
  plugins: [],
};

