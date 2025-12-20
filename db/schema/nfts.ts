import {
  doublePrecision,
  pgEnum,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import * as z from "zod";
import { users } from "./users";

export const categoryEnum = pgEnum("category", [
  "art",
  "gaming",
  "music",
  "photography",
  "membership",
]);
export const nfts = pgTable("nfts", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  title: text("title").notNull(),
  description: text("description").notNull(),
  price: doublePrecision("price").notNull(),
  creator: text("creator").notNull(),
  category: categoryEnum("category").notNull(),
  url: text("url").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
});

export const nftSchema = createInsertSchema(nfts);
export const nftSelectSchema = createSelectSchema(nfts);
export type NftSchema = z.infer<typeof nftSchema>;
export type NftSelectSchema = z.infer<typeof nftSelectSchema>;
