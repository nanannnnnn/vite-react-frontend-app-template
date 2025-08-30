import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    include: ["**/*.spec.{ts,tsx}"],
    exclude: ["node_modules", "dist"],
    coverage: {
      reporter: ["text", "json", "html"],
      exclude: ["node_modules/", "vitest.config.ts", "vite.config.ts"],
    },
  },
});
