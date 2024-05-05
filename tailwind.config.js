/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        background: "#041e3a",
        text: "#f1f5f8",
        primary: "#28bced",
        secondary: "#004289",
      },
    },
  },
  plugins: [],
};
