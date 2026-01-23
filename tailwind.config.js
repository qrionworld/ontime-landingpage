/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "green-gradient": "linear-gradient(135deg, #DFF5EA, #B8EAD4)",
        "red-gradient": "linear-gradient(135deg, #FFE2E2, #FFC1C1)",
      },
    },
  },
  plugins: [],

  extend: {
  backgroundImage: {
    "green-soft": "linear-gradient(135deg, #E6FFF4, #C9F2E0)",
  },
}
};
