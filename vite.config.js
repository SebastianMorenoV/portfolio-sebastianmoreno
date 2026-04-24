import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/portfolio-sebastianmoreno/",
  build: {
    outDir: "docs", // <--- This tells Vite to name the folder "docs"
  },
});
