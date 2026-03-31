import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        background: "#F8F9FA",
        foreground: "#0F172A",
        primary: {
          DEFAULT: "#B7042C", // Crimson
          foreground: "#ffffff"
        },
        secondary: {
          DEFAULT: "#B59720", // Gold
          foreground: "#ffffff"
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#0F172A"
        },
        border: "#E2E8F0",
      },
      borderRadius: {
        'lg': '0.5rem',
        'md': '0.375rem',
        'sm': '0.25rem',
      }
    },
  },
  plugins: [],
};
export default config;
