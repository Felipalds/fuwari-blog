/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,mjs}"],
  darkMode: "class", // allows toggling dark mode manually
  ttheme: {
    extend: {
      colors: {
        main: "#88aaee",
        mainAccent: "#4d80e6", // not needed for shadcn components
        overlay: "rgba(0,0,0,0.8)",
        // background color overlay for alert dialogs, modals, etc.

        // light mode
        bg: "#dfe5f2",
        text: "#000",
        border: "#000",

        // dark mode
        darkBg: "#272933",
        darkText: "#eeefe9",
        darkBorder: "#000",
      },
      borderRadius: {
        base: "2px",
      },
      boxShadow: {
        light: "1px 4px 0px 0px #000",
        dark: "1px 4px 0px 0px #000",
      },
      translate: {
        boxShadowX: "1px",
        boxShadowY: "4px",
        reverseBoxShadowX: "-1px",
        reverseBoxShadowY: "-4px",
      },
      fontWeight: {
        base: "500",
        heading: "800",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
