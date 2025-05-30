import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary-color)',
        'primary-light': 'var(--primary-light)',
        'primary-dark': 'var(--primary-dark)',
        'primary-muted': 'var(--primary-muted)',
        'primary-lighter': 'var(--primary-lighter)',
        'primary-darker': 'var(--primary-darker)',
        'secondary': 'var(--secondary-color)',
        'accent': 'var(--accent-color)',
        'silver': 'var(--silver-color)',
        'silver-light': 'var(--silver-light)',
        'text': {
          'primary': 'var(--text-primary)',
          'light': 'var(--text-light)',
          'dark': 'var(--text-dark)',
          'on-primary': 'var(--text-on-primary)',
          'on-light': 'var(--text-on-light)',
          'on-dark': 'var(--text-on-dark)'
        }
      },
      fontFamily: {
        'script': ['Great Vibes', 'Allura', 'Dancing Script', 'cursive'],
        'serif': ['Libre Baskerville', 'Georgia', 'serif'],
        'display': ['Noto Sans Display', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "var(--primary-color)",
          "secondary": "var(--secondary-color)",
          "accent": "var(--accent-color)",
          "neutral": "#3d4451",
          "base-100": "var(--secondary-color)",
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
