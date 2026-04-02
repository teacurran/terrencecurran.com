import node from "@astrojs/node";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import emdash from "emdash/astro";
import { fileURLToPath } from "node:url";
import { resolve, dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  output: "server",
  security: {
    allowedDomains: [
      { hostname: "terrencecurran.com", protocol: "https" },
      { hostname: "www.terrencecurran.com", protocol: "https" },
      { hostname: "beta.terrencecurran.com", protocol: "https" },
    ],
  },
  adapter: node({
    mode: "standalone",
  }),
  integrations: [
    react(),
    emdash({
      database: {
        entrypoint: resolve(__dirname, "src/db-runtime.ts"),
        config: {},
        type: "postgres",
      },
      storage: {
        entrypoint: resolve(__dirname, "src/storage-runtime.ts"),
        config: {},
      },
    }),
  ],
});
