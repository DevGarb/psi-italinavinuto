import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: '#E9DDD1',
        'beige-light': '#F5EFE8',
        brown: '#A97155',
      },
    },
    fontFamily: {
      playfair: ['"Playfair Display"', 'serif'],
    },
  },
  plugins: [
    require("tailgrids/plugin"),
    require('tailwindcss-animated')
  ],
};
export default config;
