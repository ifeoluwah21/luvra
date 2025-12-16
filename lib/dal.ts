import db from "@/db";
import { users } from "@/db/schema/users";
import { eq } from "drizzle-orm";

export async function getUserByEmail(email: string) {
  try {
    const result = await db.select().from(users).where(eq(users.email, email));
    return result[0] || null;
  } catch (err) {
    console.error(
      "Error occurred getting user by email: ",
      (err as Error).message,
    );
    return null;
  }
}
