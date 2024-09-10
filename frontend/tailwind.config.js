/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      yui: "var(--primary-500)",
      misa: "var(--secondary-500)"
    },
    extend: {
      spacing: {
        200: "30rem"
      }
    }
  },
  plugins: []
};
