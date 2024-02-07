/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          10: "#0B996F",
          20: "#E2F4EA",
          30: "#319A64",
        },
      },
    },
  },
  plugins: [],
};
