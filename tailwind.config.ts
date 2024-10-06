import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'coffee': "url('/coffee_image.png')",
        'overlay': "url('/overlay.png')",
      },
      fontFamily: {
        'ClickerScript': ['"Clicker Script"'],
        'PlayfairDisplay': ['"Playfair Display"'],

      }
    },
  },
  plugins: [],
};
export default config;
