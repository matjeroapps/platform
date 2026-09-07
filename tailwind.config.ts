import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui-sdk/packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0d5c46",
          dark: "#083b2c",
          light: "#188062",
          tint: "#226a53",
          container: "#0d5c46",
          "on-container": "#8cd2b6"
        },
        secondary: {
          DEFAULT: "#0284c7",
          dark: "#0369a1",
          light: "#38bdf8",
          container: "#5bb8fe"
        },
        tertiary: {
          DEFAULT: "#10b981",
          dark: "#047857",
          light: "#34d399",
          container: "#005d3e"
        },
        surface: {
          DEFAULT: "#faf8ff",
          dim: "#d2d9f4",
          bright: "#faf8ff",
          container: "#eaedff",
          low: "#f2f3ff",
          lowest: "#ffffff",
          high: "#e2e7ff",
          highest: "#dae2fd"
        },
        slate: {
          900: "#0f172a",
          800: "#1e293b",
          700: "#334155",
          600: "#475569",
          500: "#64748b",
          400: "#94a3b8",
          300: "#cbd5e1",
          200: "#e2e8f0",
          100: "#f1f5f9",
          50: "#f8fafc"
        }
      },
      fontFamily: {
        heading: ["Plus Jakarta Sans", "Inter", "sans-serif"],
        body: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
