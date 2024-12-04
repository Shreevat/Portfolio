import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', 
  build: {
    outDir: "dist",  // Specify the build output directory
    rollupOptions: {
      input: "./index.html",  // The main entry point for Vite
    },
  },
});
