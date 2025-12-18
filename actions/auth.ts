"use server";

import { createUser, signIn, signOut } from "@/lib/auth";
import { getUserByEmail } from "@/lib/dal";
import { AuthError, CredentialsSignin } from "next-auth";
import * as z from "zod";

export async function onSubmit(formData: FormData) {
  console.log(formData.get("email"), formData.get("password"), "Hello world!!");
}

export async function signinWithGoogle() {
  try {
    await signIn("google", { redirectTo: "/", redirect: true });
  } catch (err) {
    if (err instanceof AuthError) {
      console.log(`ERROR is signing in ❌ ${err.type}`);
      // return err.type;
    }
    throw err;
  }
}

export async function signout() {
  await signOut({ redirectTo: "/", redirect: true });
}

const signupFormSchema = z
  .object({
    name: z
      .string()
      .min(2, { error: "Name must be at least 2 characters long." }),
    email: z.email({ error: "Please enter a valid email." }),
    password: z
      .string()
      .min(8, { error: "Be at least 8 characters long." })
      .regex(/[a-zA-z]/, { error: "Contain at least one letter." })
      .regex(/[0-9]/, "Contain at least one number.")
      .regex(/[^a-zA-Z0-9]/, {
        error: "Contain at least one special character.",
      })
      .trim(),
    confirm_password: z
      .string()
      .min(8, { error: "Be at least 8 characters long." })
      .regex(/[a-zA-z]/, { error: "Contain at least one letter." })
      .regex(/[0-9]/, "Contain at least one number.")
      .regex(/[^a-zA-Z0-9]/, {
        error: "Contain at least one special character.",
      })
      .trim(),
  })
  .refine((data) => data.confirm_password === data.password, {
    error: "Passwords don't match",
    path: ["confirm_password"],
  });

const signinFormSchema = z.object({
  email: z.email({ error: "Please enter a valid email." }),
  password: z
    .string()
    .min(8, { error: "Be at least 8 characters long." })
    .regex(/[a-zA-z]/, { error: "Contain at least one letter." })
    .regex(/[0-9]/, "Contain at least one number.")
    .regex(/[^a-zA-Z0-9]/, {
      error: "Contain at least one special character.",
    })
    .trim(),
});

export type FormActionState = {
  success: boolean;
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
    confirm_password?: string[];
  };
  message?: string;
};

export async function signupWithCredentials(
  formData: FormData,
): Promise<FormActionState> {
  //Validate the form data
  const validationResult = signupFormSchema.safeParse({
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    confirm_password: formData.get("confirm_password") as string,
  });

  //Return early if validation fails
  if (!validationResult.success) {
    return {
      success: false,
      errors: validationResult.error.flatten().fieldErrors,
      message: "Validation failed",
    };
  }

  //Prepare data for insertion into database
  const { name, email, password } = validationResult.data;

  // Check if user exist in database already
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return {
      success: false,
      message: "User with this email already exists",
      errors: { email: ["User with this email already exists"] },
    };
  }

  // Create User
  const user = await createUser(name, email, password);
  if (!user) {
    return { success: false, message: "Failed to create user" };
  }

  // signIn with the name and email
  console.log("sign in user now");
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/",
    });
    return {
      success: true,
      message: "Successfully created and logged in User",
    };
  } catch (err) {
    if (err instanceof CredentialsSignin) {
      return { success: false, message: `Type: ${err.type}. ${err.message}` };
    }
    throw err;
  }
}

// Sign in with credential function
export async function signInWithCredential(
  formData: FormData,
): Promise<FormActionState> {
  // Validate the form data
  const validationResult = signinFormSchema.safeParse({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  //Return early if validation fails
  if (!validationResult.success) {
    return {
      success: false,
      errors: validationResult.error.flatten().fieldErrors,
      message: "Validation failed",
    };
  }

  //Prepare data
  const { email, password } = validationResult.data;

  try {
    await signIn("credentials", { email, password, redirectTo: "/" });
    return { success: true, message: "User is logged in" };
  } catch (err) {
    if (err instanceof CredentialsSignin) {
      return { success: false, message: `Type: ${err.type}. ${err.message}` };
    }
    throw err;
  }
}
