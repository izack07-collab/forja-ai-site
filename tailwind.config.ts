import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        md: "2rem",
        lg: "4rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // Paleta Forja AI — sóbria + tech (off-white quente + grafite + dourado fosco)
        bg: {
          DEFAULT: "#FAFAF8",
          warm: "#F2EFE8",
          deep: "#1A1815",
        },
        ink: {
          DEFAULT: "#1F1D1A",
          soft: "#3D3934",
          muted: "#6B645A",
          subtle: "#9A938A",
        },
        accent: {
          DEFAULT: "#A88B5C",
          deep: "#7A6444",
          soft: "#D4C2A0",
          wash: "#F5EFE3",
        },
        line: {
          DEFAULT: "#E5DFD3",
          soft: "#EEEBE3",
          deep: "#C4BCA9",
        },
        success: "#4F7A55",
        danger: "#A0463C",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 6vw, 5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      letterSpacing: {
        tightish: "-0.012em",
        wider2: "0.08em",
      },
      borderRadius: {
        xs: "0.25rem",
        DEFAULT: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(31, 29, 26, 0.04), 0 2px 8px rgba(31, 29, 26, 0.04)",
        medium: "0 4px 12px rgba(31, 29, 26, 0.06), 0 2px 4px rgba(31, 29, 26, 0.04)",
        elevated: "0 10px 30px rgba(31, 29, 26, 0.08), 0 4px 8px rgba(31, 29, 26, 0.04)",
        accent: "0 8px 24px rgba(168, 139, 92, 0.18)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "fade-in": "fade-in 0.4s ease-out both",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
