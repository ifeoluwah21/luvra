import "../envConfig.ts";
import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { remember } from "@epic-web/remember";
import * as schema from "./schema/index";

const createPool = () => {
  return new Pool({ connectionString: process.env.DATABASE_URL });
};

const client = remember("dbPool", () => createPool());

export const db = drizzle({ client, schema });
export default db;
export type DB = typeof db;
