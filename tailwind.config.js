/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#6366F1",
        accent: "#818CF8",
        neutral: "#F3F4F6",
        "base-100": "#FFFFFF",
        info: "#3B82F6",
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif", "Poppins"],
      },
      gridTemplateColumns: {
        "70/30": "70% 28%",
      },
    },
  },
    variants: {
      extend: {},
    },
  plugins: [],
};
