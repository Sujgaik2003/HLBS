import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A192F",
          light: "#112240",
          dark: "#020C1B",
        },
        cyan: {
          DEFAULT: "#64FFDA",
          dark: "#00C9A7",
        },
        saffron: {
          DEFAULT: "#FF6B35",
          light: "#FF8C42",
        },
        slate: {
          DEFAULT: "#8892B0",
          light: "#A8B2D1",
          lighter: "#CCD6F6",
        },
        offwhite: "#F8F9FA",
      },
      fontFamily: {
        heading: ["Inter", "Poppins", "sans-serif"],
        body: ["Inter", "Open Sans", "sans-serif"],
        mono: ["JetBrains Mono", "Roboto Mono", "monospace"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.5s ease-out forwards",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "marquee": "marquee 30s linear infinite",
        "count-up": "countUp 2s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(100, 255, 218, 0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(100, 255, 218, 0.3)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #0A192F 0%, #112240 100%)",
        "accent-gradient": "linear-gradient(135deg, #64FFDA 0%, #00C9A7 100%)",
        "cta-gradient": "linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(17, 34, 64, 0.8) 0%, rgba(10, 25, 47, 0.9) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
