/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/app/**/*/.{js,ts,jsx,tsx}",
    "./src/components/*/.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBg: "var(--bg-main)",
        brandBgSecondary: "var(--bg-secondary)",
        brandText: "var(--text-main)",
        brandTextSecondary: "var(--text-secondary)",
        brandButton: "var(--bg-primary)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
