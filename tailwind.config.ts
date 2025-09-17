import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
    },
  },
  plugins: [],
};

export default config;
