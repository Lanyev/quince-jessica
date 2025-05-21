/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#800020', // Color principal (Borgoña)
        'primary-light': '#a02040', // Versión más clara del color principal
        'primary-dark': '#600010', // Versión más oscura del color principal
        'secondary': '#FFFFFF', // Color secundario (Blanco)
      },      fontFamily: {
        'script': ['Dancing Script', 'cursive'], // Fuente elegante para títulos principales
        'serif': ['Libre Baskerville', 'Georgia', 'serif'], // Fuente serif para textos formales
        'display': ['Noto Sans Display', 'sans-serif'], // Fuente sans para la navbar y modal
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#800020",
          "secondary": "#FFFFFF",
          "accent": "#a02040",
          "neutral": "#3d4451",
          "base-100": "#FFFFFF",
          "base-200": "#f8f9fa",
          "base-300": "#e9ecef",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
}
