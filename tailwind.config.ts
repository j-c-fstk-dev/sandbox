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
        "slide-up": "slideUp 0.3s ease-out", // Note: Este nome já existe, vamos manter o que você tem.

        // ANIMAÇÕES ADICIONADAS PARA O SCROLL CLUE E PULSAÇÃO DO LOGO
        "bounce": "bounce 1s infinite", // Do scroll clue
        "fade-in-up": "fade-in-up 0.5s ease-out forwards", // Base para delays
        "scroll-clue-wave": "scroll-clue-wave 1.5s infinite ease-in-out", // Do scroll clue (se usar o >>>)
        "subtle-pulse": "subtle-pulse 3s infinite ease-in-out", // Nova animação de pulsação do logo

        // ANIMAÇÕES PARA OS CARDS COM DELAY (se ainda precisar delas para outras seções)
        "fade-in-up-delay-1": "fade-in-up 0.5s ease-out forwards 0.1s",
        "fade-in-up-delay-2": "fade-in-up 0.5s ease-out forwards 0.2s",
        "fade-in-up-delay-3": "fade-in-up 0.5s ease-out forwards 0.3s",
        "fade-in-up-delay-4": "fade-in-up 0.5s ease-out forwards 0.4s",
        "fade-in-up-delay-5": "fade-in-up 0.5s ease-out forwards 0.5s", // Para a lista de objetivos
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

        // KEYFRAMES ADICIONADOS PARA O SCROLL CLUE E PULSAÇÃO DO LOGO
        // Keyframe 'bounce' (se você estiver usando a classe 'animate-bounce' em algum lugar, como na seta do scroll clue)
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
        'fade-in-up': { // Keyframe base para as animações de entrada com delay
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scroll-clue-wave': { // Keyframe para o scroll clue de '>>>' (se você usá-lo)
          '0%, 100%': {
            opacity: '0',
            transform: 'translateY(-5px) rotate(90deg)',
          },
          '50%': {
            opacity: '1',
            transform: 'translateY(0px) rotate(90deg)',
          },
        },
        // --- NOVO KEYFRAME DE PULSAÇÃO DO LOGO ---
        'subtle-pulse': {
          '0%, 100%': {
            transform: 'scale(1)', // Tamanho original
            opacity: '1', // Opacidade original
          },
          '50%': {
            transform: 'scale(1.01)', // Levemente maior
            opacity: '0.95', // Levemente mais transparente
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;