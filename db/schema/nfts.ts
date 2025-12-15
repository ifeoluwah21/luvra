import { relations } from "drizzle-orm";
import {
  bigint,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
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
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  price: bigint("price", { mode: "number" }).notNull(),
  creator: text("creator").notNull(),
  category: categoryEnum("category").notNull(),
  url: varchar("url").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  userId: text("user_id").notNull(),
});

export const nftsRelation = relations(nfts, ({ one }) => ({
  user: one(users, {
    fields: [nfts.userId],
    references: [users.id],
  }),
}));
export const usersRelation = relations(users, ({ many }) => ({
  nfts: many(nfts),
}));

export const nftSchema = createInsertSchema(nfts);
export type NftSchema = z.infer<typeof nftSchema>;
