/* language: typescript */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

const clientRoot = path.resolve(__dirname, "client");

export default defineConfig({
  root: clientRoot,
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(clientRoot, "src"),
      "@assets": path.resolve(clientRoot, "src/assets"),
      "@data": path.resolve(clientRoot, "src/data"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "docs"), // final static site here
    emptyOutDir: true,
  },
  base: "/",
});