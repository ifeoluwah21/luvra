import { doublePrecision, varchar, pgTable } from "drizzle-orm/pg-core";

export const nftsTable = pgTable("nfts", {
  id: varchar("id").primaryKey(),
  contract_address: varchar("contract_address"),
  asset_platform_id: varchar("asset_platform_id").notNull(),
  name: varchar("name").notNull(),
  symbol: varchar("symbol").notNull(),
  image: varchar("image").notNull(),
  banner_img: varchar("banner_image"),
  description: varchar("description").notNull(),
  native_currency: varchar("native_currency").notNull(),
  native_currency_symbol: varchar("native_currency_symbol"),
  price: doublePrecision("price").notNull(),
});
