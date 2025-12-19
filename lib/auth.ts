import NextAuth, { type DefaultSession } from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { compare, hash } from "bcrypt";
import db from "@/db";
import { users, UsersSchema } from "@/db/schema/users";
import { accounts } from "@/db/schema/accounts";
import { verificationToken } from "@/db/schema/verificationToken";
import { getUserByEmail } from "./dal";
import { sessions } from "@/db/schema/sessions";

declare module "next-auth" {
  interface Session {
    user: {
      name: string;
      id: string;
      email: string;
    } & DefaultSession["user"];
  }
}

//
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationToken,
  }),
  providers: [
    Google,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const user = await getUserByEmail(credentials.email as string);
        //If user does not exist, throw error with invalid credentials
        if (!user) {
          throw new Error("Invalid Credentials.");
        }
        if (!user.password) {
          throw new Error("Sign in with your OAuth provider.");
        }
        return (await verifyPassword(
          credentials.password as string,
          user.password,
        ))
          ? user
          : null;
      },
      type: "credentials",
    }),
  ],
  session: {
    strategy: "jwt",
    //1 day
    maxAge: 1 * 24 * 60 * 60,
  },
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: ({ token, session }) => {
      session.user.id = token.id as string;
      return session;
    },
  },
});

// Has a password
export async function hashPassword(password: string) {
  return await hash(password, 10);
}

export async function verifyPassword(password: string, hashedPassword: string) {
  return await compare(password, hashedPassword);
}

export async function createUser(
  name: string,
  email: string,
  password: string,
) {
  const hashedPassword = await hashPassword(password);
  const value: UsersSchema = { email, password: hashedPassword, name };
  try {
    const data = await db
      .insert(users)
      .values(value)
      .returning({ id: users.id });
    return data[0];
  } catch (err) {
    console.error(
      "Error occurred while creating your account:",
      (err as Error).message,
    );
    return null;
  }
}
