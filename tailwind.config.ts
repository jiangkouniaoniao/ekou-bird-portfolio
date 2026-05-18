import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F6F3EE",
        ink: "#111111",
        navy: "#121A2E",
        bluegray: "#DCEAF2",
        cyan: "#62F1E8",
        pink: "#FF5FA2",
        acid: "#D6FF4D",
        orange: "#F4B48C"
      },
      fontFamily: {
        display: ["var(--font-space)", "Noto Sans SC", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "Noto Sans SC", "system-ui", "sans-serif"]
      },
      boxShadow: {
        sticker: "5px 5px 0 #111111",
        soft: "0 24px 70px rgba(18, 26, 46, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
