import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Relative base so the build works at any URL — a project page
  // (user.github.io/repo/), a user page (user.github.io/), or a custom
  // domain — without editing this file.
  base: "./",
});
