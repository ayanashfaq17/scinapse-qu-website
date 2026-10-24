/**
 * Vite + React. Gzip/brotli plugins run at build time for Vercel static hosting.
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: "gzip",
      ext: ".gz",
    }),
    compression({
      algorithm: "brotliCompress",
      ext: ".br",
    }),
  ],
  build: {
    sourcemap: false,
  },
});
