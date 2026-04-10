/**
 * Apply seed.json to the production PostgreSQL database.
 *
 * Usage:
 *   DATABASE_URL="postgres://..." npx tsx scripts/apply-seed.ts
 */
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { Kysely } from "kysely";
import { runMigrations } from "emdash/db";
import { createDialect } from "emdash/db/postgres";
import { applySeed, validateSeed } from "emdash/seed";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function main() {
  const connectionString =
    process.env.DATABASE_URL ||
    "postgres://terrencecurran_dev:password@localhost:5432/terrencecurran_dev";

  const dialect = createDialect({ connectionString });
  const db = new Kysely<any>({ dialect });

  const seedPath = resolve(__dirname, "../seed/seed.json");
  const seed = JSON.parse(readFileSync(seedPath, "utf-8"));

  const validation = validateSeed(seed);
  if (!validation.valid) {
    console.error("Seed validation failed:", validation.errors);
    process.exit(1);
  }
  console.log("Seed file valid");

  console.log("Running migrations...");
  const { applied } = await runMigrations(db);
  console.log(`Applied ${applied.length} migrations`);

  console.log("Applying seed...");
  const result = await applySeed(db, seed, {
    includeContent: true,
    onConflict: "skip",
  });

  console.log("Seed applied!");
  console.log(`Collections: ${result.collections.created} created, ${result.collections.skipped} skipped`);
  console.log(`Fields: ${result.fields.created} created, ${result.fields.skipped} skipped`);
  console.log(`Content: ${result.content.created} created, ${result.content.skipped} skipped`);

  await db.destroy();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
