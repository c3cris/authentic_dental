import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "clinical-blue": "#04A3B3",
        "deep-navy": "#1A2B34",
        "premium-gold": "#DBBC4F",
        surface: "#f5fafb",
        "surface-bright": "#f5fafb",
        "surface-gray": "#F2F3F5",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#eff4f5",
        "surface-container": "#eaeff0",
        "surface-container-high": "#e4e9ea",
        "surface-container-highest": "#dee3e4",
        "on-surface": "#171d1d",
        "on-surface-variant": "#3d494b",
        outline: "#6d797b",
        "outline-variant": "#bcc9cb",
        primary: "#006973",
        "primary-container": "#04a3b3",
        background: "#f5fafb",
        "on-background": "#171d1d",
      },
      fontFamily: {
        head: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-open-sans)", "sans-serif"],
      },
      maxWidth: { container: "1280px" },
      spacing: { gutter: "24px" },
      borderRadius: { DEFAULT: "0.25rem" },
      boxShadow: {
        card: "0 4px 20px rgba(0,0,0,0.05)",
        float: "0 10px 30px rgba(4,163,179,0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
