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
        black: "#0a0a0a",
        forest: "#0f1a0a",
        turf: "#3d6b47",
        rust: "#7a2e1f",
        cream: "#f0ebe0",
        sand: "#d4c9b0",
        white: "#fafaf8",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero-xl": "clamp(4rem, 10vw, 9rem)",
        "hero-lg": "clamp(3rem, 7vw, 6rem)",
        "section-h": "clamp(2rem, 4vw, 3.5rem)",
      },
    },
  },
  plugins: [],
};

export default config;
