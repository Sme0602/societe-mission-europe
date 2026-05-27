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
        rose: {
          50: "#FDECEA",
          100: "#FBD5D0",
          500: "#EF3869",
          600: "#E33766",
          700: "#C42E57",
        },
        orange: {
          50: "#FEF5F1",
          100: "#FDE8DC",
          200: "#FBCCB6",
          300: "#FA9366",
          500: "#F57028",
          600: "#F26722",
          700: "#D85A1E",
        },
        jaune: {
          400: "#FDCC01",
          500: "#E5B800",
        },
        navy: {
          50: "#EEF2F8",
          100: "#D5DEE9",
          200: "#B0C1D4",
          400: "#4A6A8A",
          500: "#385577",
          600: "#2D4468",
          700: "#243267",
          800: "#093A65",
          900: "#072E51",
        },
        beige: {
          50: "#FEF5F1",
          100: "#FBF1E8",
          200: "#FDE8DC",
          300: "#FBCCB6",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "Arial", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        badge: "25px",
      },
      backgroundImage: {
        "gradient-main":
          "linear-gradient(135deg, #F3B7AC 0%, #FDE8DC 40%, #FFFFFF 100%)",
        "gradient-cover":
          "linear-gradient(180deg, #FDE8DC 0%, #FA9366 60%, #F57028 100%)",
        "gradient-tricolor":
          "linear-gradient(90deg, #FDCC01 0%, #FDCC01 33%, #F57028 33%, #F57028 50%, #E33766 50%)",
      },
    },
  },
  plugins: [],
};
export default config;
