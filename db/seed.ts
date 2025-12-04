import { sql, Table } from "drizzle-orm";
import * as seeds from "./seeds/index.ts";
import * as schema from "./schema/index.ts";
import db, { type DB } from "./index.ts";

async function resetTable(db: DB, table: Table) {
  return db.execute(sql`truncate table ${table} restart identity cascade`);
}

async function main() {
  // console.log("resetting db");
  // await resetTable(db, schema.nftTable);

  console.log("cleaned db");

  await seeds.nft(db);
}

main()
  .catch((e) => {
    if (e instanceof Error) console.log(`${e.cause} ❌`);
    process.exit(1);
  })
  .finally(async () => {
    console.log("seeding done!!");
    console.log("✅ data seeding successful");
    process.exit(0);
  });
