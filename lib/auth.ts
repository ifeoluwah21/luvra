import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  session: {
    //1 day
    maxAge: 1 * 24 * 60 * 60,
  },
});
