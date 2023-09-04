/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ['var(--font-inter)'],
      },
    },
  },
  daisyui: {
    themes: [
      "light",
      "dark",
      "corporate",
      "aqua",
      "emerald",
      "business",
      "night",
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
