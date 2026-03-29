// tailwind.config.js
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
        "neon-green": "#39FF14",
        // Keep existing variables for compatibility
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      animation: {
        // Suas animações existentes
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",

        // ANIMAÇÕES ADICIONADAS PARA O SCROLL CLUE E PULSAÇÃO DO LOGO
        "bounce": "bounce 1s infinite",
        "fade-in-up": "fade-in-up 0.5s ease-out forwards",
        "scroll-clue-wave": "scroll-clue-wave 1.5s infinite ease-in-out",
        "subtle-pulse": "subtle-pulse 3s infinite ease-in-out",
        "neon-pulse": "neon-pulse 2s infinite ease-in-out",

        // ANIMAÇÕES PARA OS CARDS COM DELAY
        "fade-in-up-delay-1": "fade-in-up 0.5s ease-out forwards 0.1s",
        "fade-in-up-delay-2": "fade-in-up 0.5s ease-out forwards 0.2s",
        "fade-in-up-delay-3": "fade-in-up 0.5s ease-out forwards 0.3s",
        "fade-in-up-delay-4": "fade-in-up 0.5s ease-out forwards 0.4s",
        "fade-in-up-delay-5": "fade-in-up 0.5s ease-out forwards 0.5s",
      },
      keyframes: {
        // Seus keyframes existentes
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },

        // KEYFRAMES ADICIONADOS
        bounce: {
            '0%, 100%': {
                transform: 'translateY(-25%)',
                animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
            },
            '50%': {
                transform: 'none',
                animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
            },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scroll-clue-wave': {
          '0%, 100%': {
            opacity: '0',
            transform: 'translateY(-5px) rotate(90deg)',
          },
          '50%': {
            opacity: '1',
            transform: 'translateY(0px) rotate(90deg)',
          },
        },
        'subtle-pulse': {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '50%': {
            transform: 'scale(1.01)',
            opacity: '0.95',
          },
        },
        'neon-pulse': {
          '0%, 100%': {
            transform: 'scale(1)',
            boxShadow: '0 0 5px #39FF14, 0 0 10px #39FF14, 0 0 15px #39FF14',
          },
          '50%': {
            transform: 'scale(1.05)',
            boxShadow: '0 0 10px #39FF14, 0 0 20px #39FF14, 0 0 30px #39FF14',
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
