import { varchar, pgTable, bigint, timestamp, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import z from "zod";

export const nftTable = pgTable("nft", {
  id: varchar("id").primaryKey(),
  name: varchar("name").notNull(),
  description: varchar("description").notNull().default(""),
  symbol: varchar("symbol").notNull(),
  asset_platform_id: varchar("asset_platform_id").notNull(),
  native_currency: varchar("native_currency").notNull(),
  native_currency_symbol: varchar("native_currency_symbol").notNull(),
  total_supply: bigint("total_supply", { mode: "number" }).notNull(),
  ath_date: timestamp("ath_date", { mode: "string" }).notNull(),
  contract_address: varchar("contract_address").notNull().default(""),
  price: json("price")
    .$type<{ usd: number; native_currency: number }>()
    .notNull(),
  image: json("image")
    .$type<{ src: string; banner_src: string }>()
    .notNull()
    .default({ src: "", banner_src: "" }),
  links: json("links")
    .$type<{ homepage: string; twitter: string; discord: string }>()
    .notNull()
    .default({ homepage: "", twitter: "", discord: "" }),
});

export const nftSchema = createInsertSchema(nftTable);
export type NftSchema = z.infer<typeof nftSchema>;
