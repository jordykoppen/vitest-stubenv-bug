import * as path from "node:path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "app/tests/setup.ts",
    watchExclude: ["./vitest.config.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "html", "clover", "json", "lcov"],
      include: ["app/**/*.{ts,tsx}"],
      exclude: ["app/tests/setup.ts", "**/index.ts"],
      all: true,
    },
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./app"),
    },
  },
});
