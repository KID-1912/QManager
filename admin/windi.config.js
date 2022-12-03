import { defineConfig } from "windicss/helpers";

export default defineConfig({
  extract: {
    // A common use case is scanning files from the root directory
    include: ["**/*.{vue,html,jsx,tsx}"],
    // if you are excluding files, make sure you always include node_modules and .git
    exclude: ["node_modules", ".git", "dist"],
  },
  theme: {
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      md: "18px",
      lg: "24px",
      xl: "28px",
      "2xl": "32px",
      "3xl": "36px",
      "4xl": "40px",
      "5xl": "48px",
      "6xl": "56px",
      "7xl": "64px",
    },
  },
});
