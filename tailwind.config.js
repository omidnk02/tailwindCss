/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },

    extend: {
      colors: {
        primary: {
          default: "#",
          lighter: "#",
          darker: "#",
        },
      },
    },

    container: {
      center: true,
      padding: "0.6rem",
    },
  },

  plugins: [],
};
