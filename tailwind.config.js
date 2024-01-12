/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        desktop: { max: "75em" },
        laptop: { max: "64em" },
        tablet: { max: "56.25em" },
        mobile: { max: "37.5em" },
      },
    },
  },
  plugins: [],
};
