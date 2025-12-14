"use server";

import { signIn, signOut } from "@/lib/auth";

export async function onSubmit(formData: FormData) {
  console.log(formData.get("email"), formData.get("password"), "Hello world!!");
}

export async function signinWithGoogle() {
  await signIn("google", { redirectTo: "/", redirect: true });
}

export async function signout() {
  await signOut({ redirectTo: "/", redirect: true });
}
