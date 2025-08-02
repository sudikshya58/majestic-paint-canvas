import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc"; // default import, NOT { react }
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  
  base: process.env.VITE_BASE_PATH || "/majestic-paint-canvas",
  server: {
    host: "::",
    port: 8081,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
