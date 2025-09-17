/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // tailwind.config.js > extend > colors
    extend: {
      colors: {
        color1: "#13242E",
        color2: "#2C5666",
        color3: "#5F8F9D",
        color4: "#81AAB3",
        color5: "#6A6967",
        color6: "#ACA7A3",
        color7: "rgba(86, 59, 110, 1)",
        color8: "#111111",
        color9: "#F5F4EC",
        color11: "#E0E0E0",
        color22: "#45556C",
        color33: "#0F172B",
        color44: "#020618",
        color55: "#FDFDFD",
        color66: "#303030",
        color77: "#CCCCCC",
        color88: "#EEEEEE",
        color99: "#62748E",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(0deg, #f9f9db 0%, #F5F4ED 100%)",
        "gradient-dark": "linear-gradient(0deg, #45556C 0%, #0F172B 100%)",
      },
      keyframes: {
        "border-spin": {
          "100%": { transform: "rotate(360deg)" },
        },
        "rotate-border": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
        "border-spin": "border-spin 4s linear infinite",
        "rotate-border": "rotate-border 4s linear infinite", // Yeni animasyon
      },
    },
  },
  // tailwind.config.js
  plugins: [
    require("@tailwindcss/typography"),
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".scrollbar-hide::-webkit-scrollbar": {
          display: "none",
        },
      });
    },
    require("tailwindcss-animated"),
  ],
};
