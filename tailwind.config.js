/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        bgColor: "#191924",
        darkPurple: "#191627",
        red: "#ff0100",
        grey: "#ffffffa3",
        royalBlue: "#0c0c1c",
        black: "2B2B2B"
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Dosis: ["Dosis", "sans-serif"],
      },
      boxShadow: {
        skillShad: "#6e57e01a 0px 4px 24px",
      },
    },
  },
  plugins: [],
};
