/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        tilt: "tilt 10s infinite linear",
        rot: "rot 2s infinite ease"
      },
      keyframes:{
        rot:{
          '0%' :{
            transform: 'rotateX(-15deg) translateY(0px)',
          },
        
          '50%' :{
            transform: 'rotateX(-15deg) translateY(-10px)',
          },
        
          '100%' :{
            transform: 'rotateX(-15deg) translateY(0px)',
          },
        },
        tilt: {
          '0%, 50%, 100%': {
            transform : "rotate(0deg)", 
          },
          "25%":{
            transform: "rotate(1deg)",
          },
          "75%":{
            transform: "rotate(-1deg)",
          },
      },
    },
    spacing: {
      '540': '540px',
      '70': '70%',
    },
    scale: {
      '120': '1.2',
    },
    opacity: {
      '70': '0.7',
    },
    transformStyle: {
      'preserve-3d': 'preserve-3d',
    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
    colors: {
      bgColor: "#191924",
      textcol: "#d3dbf9",
      darkPurple: "#191627",
      navred: "#ff0100",
      grey: "#ffffffa3",
      royalBlue: "#0c0c1c",
      navblack: "#2B2B2B",
      navcol: "#020617"
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Dosis: ["Dosis", "sans-serif"],
    },
    boxShadow: {
      'custom-2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      'custom-shadow-hover': '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
    },
    },
  },
  plugins: [
    function({addUtilities}){
      const newUltilities = {
        ".no-scrollbar::-webkit-scrollbar":{
          display:"none"
        },
        ".no-scrollbar": {
          "ms-overflow-style":"none",
          "scrollbar-width":"none",
        },
      };
      addUtilities(newUltilities);
    }
  ],
};
