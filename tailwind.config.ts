import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        "background-dark": "#111111",
        "background-light": "#ffffff",
        foreground: "hsl(var(--foreground))",
        "primary-dark": {
          DEFAULT: "#ffffff",
          foreground: "hsl(var(--primary-foreground))",
        },
        "secondary-dark": {
          DEFAULT: "#bdbdbd",
          foreground: "hsl(var(--secondary-foreground))",
        },
        "primary-light": {
          DEFAULT: "#111111",
          foreground: "hsl(var(--primary-foreground))",
        },
        "secondary-light": {
          DEFAULT: "#767676",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "#fab54e",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        // Your custom shadow
        'shown': `
          rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
          rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
          rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset
        `,
        'pressed': `
          0px 2px 6px rgba(0, 0, 0, 0.2) inset,
          0px 4px 8px rgba(0, 0, 0, 0.1)
        `,
      },
    },
  },
  plugins: [
    // Remove this line if you don't have tailwindcss-animate installed
    // require("tailwindcss-animate")
  ],
} satisfies Config

export default config