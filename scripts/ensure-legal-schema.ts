/**
 * Ensures the `legal_pages` table (and its relation to Payload's locked-
 * documents system) exists in the connected database.
 *
 * Why this exists instead of a normal Payload migration:
 * this project's database schema is managed by Payload's dev-mode "push"
 * (there is a `batch: -1` marker in `payload_migrations`), so `payload
 * migrate` refuses to run non-interactively and would otherwise try to
 * re-create already-existing tables. This script instead issues only the
 * additive, fully idempotent DDL needed for the new collection, so it is
 * safe to run on every deploy and never touches existing data.
 *
 * Runs as part of `pnpm vercel-build` before `next build`.
 */
import { getPayload } from "payload";
import config from "@payload-config";

const statements = [
  `CREATE TABLE IF NOT EXISTS "legal_pages" (
    "id" serial PRIMARY KEY NOT NULL,
    "title" varchar NOT NULL,
    "slug" varchar NOT NULL,
    "summary" varchar,
    "content" jsonb NOT NULL,
    "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );`,
  `CREATE UNIQUE INDEX IF NOT EXISTS "legal_pages_slug_idx" ON "legal_pages" USING btree ("slug");`,
  `CREATE INDEX IF NOT EXISTS "legal_pages_updated_at_idx" ON "legal_pages" USING btree ("updated_at");`,
  `CREATE INDEX IF NOT EXISTS "legal_pages_created_at_idx" ON "legal_pages" USING btree ("created_at");`,
  `ALTER TABLE "payload_locked_documents_rels" ADD COLUMN IF NOT EXISTS "legal_pages_id" integer;`,
  `DO $$ BEGIN
    ALTER TABLE "payload_locked_documents_rels"
      ADD CONSTRAINT "payload_locked_documents_rels_legal_pages_fk"
      FOREIGN KEY ("legal_pages_id") REFERENCES "public"."legal_pages"("id")
      ON DELETE cascade ON UPDATE no action;
  EXCEPTION WHEN duplicate_object THEN NULL; END $$;`,
  `CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_legal_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("legal_pages_id");`,
];

async function run() {
  const payload = await getPayload({ config });

  for (const raw of statements) {
    await payload.db.execute({ drizzle: payload.db.drizzle, raw });
  }

  payload.logger.info('Ensured "legal_pages" schema is present.');
  process.exit(0);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
