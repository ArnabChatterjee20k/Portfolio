/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}","./src/content/**/*.mdx"],
  darkMode:"class",
  theme: {
    extend: {
      backgroundColor: ({ theme }) => ({
        primary: {
          light: theme("colors.gray.100"),
          dark: theme("colors.slate.950"),
        },
        secondary: {
          light: "white",
          dark: theme("colors.slate.900"),
        },
      }),
      textColor: ({ theme }) => ({
        primary: {
          light: "black",
          dark: theme("colors.gray.200"),
        },
        secondary: {
          light: theme("colors.slate.800"),
          dark: "white",
        },
        link: theme("colors.blue.600"),
      }),
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
