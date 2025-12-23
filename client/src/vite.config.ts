/* language: typescript */
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "node:path";

const clientRoot = __dirname;

export default defineConfig({
  plugins: [react()],
  root: clientRoot,
  resolve: {
    alias: {
      "@": path.resolve(clientRoot, "src"),
      "@assets": path.resolve(clientRoot, "src/assets"),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    globals: true,
    css: true,
  },
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
  base: "/",
});