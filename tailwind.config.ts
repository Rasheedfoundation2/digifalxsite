import type { Config } from "tailwindcss";
import { PluginAPI } from 'tailwindcss/types/config';  // Import PluginAPI type

const svgToDataUri = require("mini-svg-data-uri");
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        BlueNew: {
          DEFAULT: '#28A6BC'
        },
        GreenNew: {
          DEFAULT: '#27BC9E',
        },
        graycard:{
          DEFAULT: '#151515'  
        },
        whiteheading:{
          DEFAULT: '#F3F3F3'
        },
        graysubheading:{
          DEFAULT: '#A1A1A1'
        }
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
        spotlight: "spotlight 2s ease .75s 1 forwards",
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        grow: 'grow 2s infinite',
      },
      keyframes: {
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
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        grow: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ addUtilities }: PluginAPI) {
      const newUtilities = {
        '.hollow-text': {
          '-webkit-text-fill-color': 'transparent',
          '-webkit-text-stroke-width': '1px',
          '-webkit-text-stroke-color': '#fff',
          'color': 'transparent',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};

function addVariablesForColors({ addBase, theme }: PluginAPI) {
  const allColors = flattenColorPalette(theme('colors'));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, value]) => [`--${key}`, value as string])  // Cast values to string
  );
  addBase({
    ':root': newVars as { [key: string]: string },  // Cast newVars to the appropriate type
  });
}

export default config;
