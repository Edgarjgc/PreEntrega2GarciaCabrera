import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/PreEntrega1GarciaCabrera/",
  build: {
    outDir: "dist", // Specify the output directory
  },
});
