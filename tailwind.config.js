/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
    colors: {
      both: "var(--both)",
      accordion: "var(--accordion)",
    },
    fontFamily: {
      segoe: "segoe",
      segoeBold: "segoeBold",
    },
  },
  plugins: [require("daisyui")],
}

