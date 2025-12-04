import "./envConfig.ts";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./",
  schema: "./db/schema/",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
