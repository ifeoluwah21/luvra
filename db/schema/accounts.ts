import { integer, pgTable, primaryKey, text } from "drizzle-orm/pg-core";
import { users } from "./users";
import type { AdapterAccountType } from "@auth/core/adapters";
import { createInsertSchema } from "drizzle-zod";
import * as z from "zod";

export const accounts = pgTable(
  "account",
  {
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccountType>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("provider_account_id").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => [
    {
      compoundKey: primaryKey({
        columns: [account.provider, account.providerAccountId],
      }),
    },
  ],
);

export const accountsSchema = createInsertSchema(accounts);
export type AccountsSchema = z.infer<typeof accountsSchema>;
