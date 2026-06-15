import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

function healthCheckPlugin(): Plugin {
  return {
    name: "health-check",
    configureServer(server) {
      server.middlewares.use("/health", (_req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.end(
          JSON.stringify({
            status: "ok",
            service: "test-dashboard",
            timestamp: new Date().toISOString(),
          }),
        );
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), healthCheckPlugin()],
});
