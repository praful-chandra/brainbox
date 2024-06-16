import type { Config } from "tailwindcss";
import typographyStyles from "./themeConfigs/typography";
/** @type {import('tailwindcss').Config} */

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#f7fdbf",
          foreground: "#fafafa",
        },
        secondary: {
          DEFAULT: "#161616",
          foreground: "#fafafa",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        brand: {
          primary: {
            "50": "#fefff9",
            "100": "#fdfeeb",
            "200": "#fbfee2",
            "300": "#fafed4",
            "400": "#f9fdcc",
            "500": "#f7fdbf",
            "600": "#e1e6ae",
            "700": "#afb488",
            "800": "#888b69",
            "900": "#686a50",
          },
          secondary: {
            "50": "#e8e8e8",
            "100": "#b7b7b7",
            "200": "#949494",
            "300": "#636363",
            "400": "#454545",
            "500": "#161616",
            "600": "#141414",
            "700": "#101010",
            "800": "#0c0c0c",
            "900": "#090909",
          },
          accent: {
            "50": "#fefff2",
            "100": "#fafed8",
            "200": "#f8fec5",
            "300": "#f5feab",
            "400": "#f3fd9a",
            "500": "#f0fd81",
            "600": "#dae675",
            "700": "#aab45c",
            "800": "#848b47",
            "900": "#656a36",
          },
          fill: {
            "50": "#f3f4ff",
            "100": "#d8defe",
            "200": "#c6cefe",
            "300": "#abb8fe",
            "400": "#9baafd",
            "500": "#8295fd",
            "600": "#7688e6",
            "700": "#5c6ab4",
            "800": "#48528b",
            "900": "#373f6a",
          },
          dark: "#051028",
          light: "#fafafa",
        },
        dark: {
          "1": "#ffffff",
          "2": "#fdfdfd",
          "3": "#f5f5f6",
          "4": "#f0f1f2",
          "5": "#dadbdf",
          "6": "#c1c3c9",
          "7": "#8f939e",
          "8": "#5d6473",
          "9": "#495162",
          "10": "#2b3448",
          "11": "#232d42",
          "12": "#192339",
          "13": "#051028",
        },
        light: {
          "50": "#ffffff",
          "100": "#fdfdfd",
          "200": "#fdfdfd",
          "300": "#fcfcfc",
          "400": "#fbfbfb",
          "500": "#fafafa",
          "600": "#e4e4e4",
          "700": "#b2b2b2",
          "800": "#8a8a8a",
          "900": "#696969",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        section: "50px",
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
      fontFamily: {
        sourceSans3: ["SourceSans3", "sans-serif"],
      },
    },

    typography: typographyStyles,
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography")({
      className: "typo",
    }),
  ],
} satisfies Config;

export default config;
