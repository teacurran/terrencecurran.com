import node from "@astrojs/node";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import emdash, { s3 } from "emdash/astro";
import { postgres } from "emdash/db";

export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  integrations: [
    react(),
    emdash({
      database: postgres({
        connectionString:
          process.env.DATABASE_URL ||
          "postgres://terrencecurran_dev:password@localhost:5432/terrencecurran_dev",
      }),
      storage: process.env.S3_ENDPOINT
        ? s3({
            endpoint: process.env.S3_ENDPOINT,
            bucket: process.env.S3_BUCKET,
            accessKeyId: process.env.S3_ACCESS_KEY_ID,
            secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
            publicUrl: process.env.S3_PUBLIC_URL,
          })
        : undefined,
    }),
  ],
});
