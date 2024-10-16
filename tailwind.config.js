/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "red": "#e3646e",
        "purple": "#bb72e9",
        "blue": "#3996db",
        "green": "#82bc4f",
        "yellow": "#eabd5f",
      },

      backgroundImage: {
        "bg-home": "url('src/assets/images/bg-colors.svg')",
        "bg-end": "url('src/assets/images/bg-colors-2.svg')",
      }
    },

    fontFamily: {
      "Inconsolata": "Inconsolata, monospace",
      "Maven": "Maven Pro, serif",
      "Asap": "Asap, serif",
    }
  },
  plugins: [],
}

