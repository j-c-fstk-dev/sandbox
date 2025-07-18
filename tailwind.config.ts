import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // #MonthlyEarthDay Color Palette
        primary: {
          green: "#4CAF50",
          "green-secondary": "#8BC34A",
          "green-dark": "#2E7D32",
        },
        earth: {
          brown: "#795548",
          blue: "#2196F3",
        },
        neutral: {
          "light-gray": "#F5F5F5",
          "medium-gray": "#E0E0E0",
          "dark-gray": "#424242",
          "text-light": "#FFFFFF",
          "text-dark": "#212121",
        },
        // Keep existing variables for compatibility
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
