import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Portfolio/", // Ensure this base path for GitHub Pages
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",  // Main entry point
        contact: "./src/Pages/Contact/index.html",  // Additional page for /Contact
        projects: "./src/Pages/Projects/index.html", // Additional page for /Projects
      },
    },
  },
});
