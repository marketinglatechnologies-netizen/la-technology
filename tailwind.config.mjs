/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Defining your brand colors from the mockups
        "la-red": "#DC2A3C",
        "la-orange": "#F58028",
        "la-cream": "#FFF6E9", // The footer background color
      },
      backgroundImage: {
        "la-gradient": "linear-gradient(to right, #DC2A3C, #F97316)",
      },
    },
  },
  plugins: [],
};
