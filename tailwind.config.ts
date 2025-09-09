import type { Config } from "tailwindcss"
export default {
  content: ["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { primary: "#0d6efd", dark: "#0b2239" },
      borderRadius: { xl: "14px" }
    }
  },
  plugins: []
} satisfies Config
