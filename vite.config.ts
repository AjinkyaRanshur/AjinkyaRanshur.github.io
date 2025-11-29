import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Use relative asset paths so the built `dist` works when served from GitHub Pages
export default defineConfig({
  base: "./",
  plugins: [react()],
});
