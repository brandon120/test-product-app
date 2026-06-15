import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

/** Auto-generated for agent-product-builder preview — do not edit. */
export default defineConfig({
  plugins: [react()],
  base: "/api/preview/cmqeg1as00005qu26lwps6xx9/",
  server: {
    host: "127.0.0.1",
    port: 38921,
    strictPort: true,
    origin: "https://agent-product-builder-production.up.railway.app/api/preview/cmqeg1as00005qu26lwps6xx9",
    hmr: false,
  },
});
