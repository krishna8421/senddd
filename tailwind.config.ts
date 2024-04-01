import { type Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./src/**/*.tsx",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6243DE",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;
