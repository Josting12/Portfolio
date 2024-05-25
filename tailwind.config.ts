import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary:"#07E1E3",
        darkBg:"#131424"
      },
      backgroundImage: {
        "gradient-cover":
          "Linear-gradient(90.21deg, rgba(170,54,124,05) -5.91%, rgba(74,47,189,0.5) 111.58%)",
        }

      },
    },
  
  plugins: [],
};
export default config;
