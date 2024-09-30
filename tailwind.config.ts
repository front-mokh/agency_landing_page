import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      backgroundImage: {
        "benefits-section":
          "linear-gradient(180deg, #25344F 35.36%, #F5F8FF 35.37%);",
      },

      backgroundColor: {
        dark: "#15161E",
        light: "hsl(0, 0%, 100%)",
        inverted: "#25344F",
        // "mid-tone": "hsl(206, 89%, 97%)",
        "mid-tone": "#F5F8FF",
        "light-background": "#EEEFFA",
        // "mid-tone":"#EEEFFA",
        highlight: "#2093D6",
        "highlight-hover": "hsl(202, 74%, 42%)",
        "light-highlight": "#E5EFFF",
        // "light-background": "#00425F",
        "primary-cta": "hsl(222, 47%, 15%)",
        dimmed: "hsl(222, 47%, 80%)",
        // highlight: "#3FA2F6",
        cta: {
          primary: "#2093D6",
          secondary: "hsl(222, 47%, 15%)",
        },
      },
      borderColor: {
        dark: "#121619",
        light: "hsl(0, 0%, 100%)",
        "mid-tone": "#4B5563",
        "border-color": "hsl(222, 47%, 25%, 0.7)",
        dimmed: "hsl(222, 47%, 80%)",
        ring: "hsl(222, 47%, 14%)",
        faq: {
          1: "#3FA2F6",
          2: "#3FA2F6",
        },
      },
      borderRadius: {
        sm: "2.5px",
      },
      colors: {
        highlight: "#238BE8",
        dark: "#15161E",
        light: "hsl(0, 0%, 100%)",
        inverted: "#1D3442",
        "mid-tone": "#F5F8FF",
        "light-background": "#EEEFFA",
        accent: "#E5EFFF",
      },
      textColor: {
        dark: {
          primary: "#25344F",
          secondary: "#52627A",
        },
        light: {
          primary: "#FFFFFF",
          secondary: "#dee4ed",
        },
        highlight: "#2093D6",
      },
    },
    fontFamily: {
      body: ["var(--font-body)"],
      heading: ["var(--font-heading)"],
    },
  },
  plugins: [],
};
export default config;
