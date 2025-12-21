import { pgTable, primaryKey, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import * as z from "zod";

export const verificationToken = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (verificationToken) => [
    {
      compoundKey: primaryKey({
        columns: [verificationToken.token, verificationToken.identifier],
      }),
    },
  ],
);

export const verificationTokenSchema = createInsertSchema(verificationToken);
export type VerificationTokenSchema = z.infer<typeof verificationTokenSchema>;
