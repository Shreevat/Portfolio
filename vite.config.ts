import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Portfolio/",  // Ensure this base path for GitHub Pages
  build: {
    rollupOptions: {
      input: "./index.html",  // Only the main entry point for Vite
    },
  },
});
