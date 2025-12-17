/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Graphura Brand */
        primary: "#C9A24D",     // Gold
        secondary: "#1F1F1F",   // Charcoal
        accent: "#F5E6C8",      // Light Gold
        background: "#FAF7F2",
        surface: "#FFFFFF",

        /* Status */
        success: "#22C55E",
        danger: "#EF4444",
      },
    },
  },
};

