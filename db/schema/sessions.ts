import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "./users";
import { createInsertSchema } from "drizzle-zod";
import * as z from "zod";

export const sessions = pgTable("session", {
  sessionToken: text("session_token").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const sessionsSchema = createInsertSchema(sessions);
export type SessionsSchema = z.infer<typeof sessionsSchema>;
