import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "work-sans": ["var(--font-work-sans)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          200: "#929BFF",
          400: "#7286FF",
          600: "#1e1c26",
          700: "#4D61DC",
          800: "#2F305C",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
