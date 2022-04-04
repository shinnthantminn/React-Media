const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [`./src/**/*.{js,jsx,ts,tsx}`],
  theme: {
    extend: {
      fontFamily: {
        default: ["Padauk", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
      addUtilities({
        ".word": {
          wordSpacing: "-4px",
        },
      });
    }),
  ],
};
