import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {default: flattenColorPalette,} = require("tailwindcss/lib/util/flattenColorPalette");

// Removed addSvgPatterns plugin function

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: "class",
  theme: {
    extend: { 
      colors:{
        BlueNew:{
            DEFAULT: '#000',
            100:'#28A6BC'
        },
        GreenNew:{
          DEFAULT:'#000',
          100:'#27BC9E'
      },
      },
      textColor: {
        'transparent': 'transparent',
      },
      textStroke: {
        '1': '1px',
      },
      textStrokeColor: {
        'white': '#fff',
      },
      animation: {
        //hero section,spolight effect
        spotlight: "spotlight 2s ease .75s 1 forwards",
        //infinite scroll
        scroll:"scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        //About us
        grow: 'grow 2s infinite',
      },
      keyframes: {
        //home Page
        spotlight: {
          "0%": {
            opacity: '0',
            transform: "translate(-72%, -62%) scale(0.5)",
          },

          "100%": {
            opacity: '1',
            transform: "translate(-50%,-40%) scale(1)",
          },
        },

        //infinite moving cards ,testimonial
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },

        //About us 
        grow: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },


      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },

  plugins: [
    addVariablesForColors, // Kept addVariablesForColors plugin
    function ({ addUtilities }) {
      addUtilities({
        '.hollow-text': {
          '-webkit-text-fill-color': 'transparent',
          '-webkit-text-stroke-width': '1px',
          '-webkit-text-stroke-color': '#fff',
          'color': 'transparent',
        },
      }, ['responsive', 'hover']);
    },
  ],
};



function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme('colors'));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, value]) => [`--${key}`, value])
  );

  addBase({
    ':root': newVars,
  });
}

export default config;
