/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // utilitaires
  plugins: [
    require('daisyui'),
  ], 
  daisyui: {
    themes: ["light", "grey"],
  },
}

