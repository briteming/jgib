import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...colors,
      primary: "var(--primary-color)",
      secondary: "var(--secondary-color)",
      commentBg: "var(--comment-bg)",
      commentBorder: "var(--comment-border)",
      textareaBg: "var(--textarea-bg)",
    },
  },
  plugins: [],
};
export default config;
