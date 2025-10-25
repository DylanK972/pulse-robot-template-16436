import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // IMPORTANT pour GitHub Pages : le site vit sous /pulse-robot-template-16436/
  // On ne met la base qu'en production pour ne pas casser le dev local.
  base: mode === "production" ? "/pulse-robot-template-16436/" : "/",

  server: {
    host: "::",
    port: 8080,
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
  build: {
    outDir: "dist", // sortie standard de Vite
    emptyOutDir: true,
  },
}));
