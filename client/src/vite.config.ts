import { defineConfig } from "vitest/config";
import path from "node:path";

const clientRoot = path.resolve(__dirname, "client");

export default defineConfig({
  root: clientRoot,
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    globals: true,
  }
});