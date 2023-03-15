const { neutral, indigo } = require("tailwindcss/colors");
const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"
  ],

  theme: {
    extend: {
      colors: {
				blue: indigo,
				gray: neutral
      }
    }
  },

  plugins: [require("flowbite/plugin")],
  darkMode: "media"
};

module.exports = config;
