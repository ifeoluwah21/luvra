"use server";

import { auth, signIn, signOut } from "@/lib/auth";
import { AuthError } from "next-auth";

export async function onSubmit(formData: FormData) {
  console.log(formData.get("email"), formData.get("password"), "Hello world!!");
}

export async function signinWithGoogle() {
  try {
    await signIn("google", { redirectTo: "/", redirect: true });
  } catch (err) {
    if (err instanceof AuthError) {
      console.log(`ERROR is signing in ❌ ${err.type}`);
      return err.type;
    }
    throw err;
  }
}

export async function signout() {
  await signOut({ redirectTo: "/", redirect: true });
}
