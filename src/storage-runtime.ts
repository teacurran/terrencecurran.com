/**
 * Custom storage entrypoint that reads S3 config from env vars at runtime.
 * EmDash serializes config at build time, so we ignore the passed config
 * and read environment variables instead.
 */
import { S3Storage } from "emdash/storage/s3";
import type { Storage } from "emdash/storage";

export function createStorage(): Storage {
  const endpoint = process.env.S3_ENDPOINT;
  const bucket = process.env.S3_BUCKET;
  const accessKeyId = process.env.S3_ACCESS_KEY_ID;
  const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY;
  const publicUrl = process.env.S3_PUBLIC_URL;
  const region = process.env.S3_REGION || "auto";

  if (!endpoint || !bucket || !accessKeyId || !secretAccessKey) {
    throw new Error(
      "S3 storage requires S3_ENDPOINT, S3_BUCKET, S3_ACCESS_KEY_ID, and S3_SECRET_ACCESS_KEY environment variables",
    );
  }

  return new S3Storage({
    endpoint,
    bucket,
    accessKeyId,
    secretAccessKey,
    region,
    publicUrl,
  });
}
