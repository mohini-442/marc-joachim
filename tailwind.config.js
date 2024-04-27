/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/assets/images/headerimg.png')",
        "gradient-1": "linear-gradient(107.9deg, #0C5FD1 1.25%, #8703C5 93.71%)",
        'herobg': "url('/assets/images/headerimg.png')",
        'faultbg': "url('/assets/images/faultimg.png')",
        'goal': "url('/assets/images/goal.png')",
        'eximg': "url('/assets/images/eximg.png')",
        'takestep': "url('/assets/images/takestep.png')",
        'footerbg': "url('/assets/images/footerbg.png')",
      },
      fontFamily: {
        helv: ["helvlight", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"]
      },
      screens: {
        'xxs':'400px',
      }
    },
  },
  plugins: [],
};
