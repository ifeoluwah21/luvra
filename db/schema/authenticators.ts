import {
  boolean,
  integer,
  pgTable,
  primaryKey,
  text,
} from "drizzle-orm/pg-core";
import { users } from "./users";
import { createInsertSchema } from "drizzle-zod";
import * as z from "zod";

export const authenticators = pgTable(
  "authenticator",
  {
    credentialId: text("credential_id").notNull().unique(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    providerAccountId: text("provider_account_id").notNull(),
    credentialPublicKey: text("credential_public_key").notNull(),
    counter: integer("counter").notNull(),
    credentialDeviceType: text("credential_device_type").notNull(),
    credentialBackedUp: boolean("credential_backed_up").notNull(),
    transports: text("transports"),
  },
  (authenticator) => [
    {
      compoundKey: primaryKey({
        columns: [authenticator.userId, authenticator.credentialId],
      }),
    },
  ],
);

export const authenticatorsSchema = createInsertSchema(authenticators);
export type AuthenticatorsSchema = z.infer<typeof authenticatorsSchema>;
