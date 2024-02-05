import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// vite.config.js
export default {
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8000", // your Express.js server url
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
};
