/**
 * Custom database entrypoint that reads DATABASE_URL at runtime.
 * EmDash serializes config at build time, so we ignore the passed config
 * and read the environment variable instead.
 */
import { PostgresDialect } from "kysely";
import { Pool } from "pg";

export function createDialect(): PostgresDialect {
  const connectionString =
    process.env.DATABASE_URL ||
    "postgres://terrencecurran_dev:password@localhost:5432/terrencecurran_dev";

  return new PostgresDialect({
    pool: new Pool({ connectionString }),
  });
}
