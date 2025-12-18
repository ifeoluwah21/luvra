"use client";
import React, { useActionState, useTransition } from "react";
import FormGroup from "./FormGroup";
import { Button } from "./ui/button";
import { Wallet } from "lucide-react";
import Link from "next/link";
import {
  FormActionState,
  signInWithCredential,
  signinWithGoogle,
} from "@/actions/auth";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";

const initialFormActionState: FormActionState = { success: false, message: "" };

const SignInForm: React.FC = () => {
  const [state, action, isPending] = useActionState<FormActionState, FormData>(
    async (prevState, formData) => {
      try {
        const result = await signInWithCredential(formData);
        if (result.success) {
          toast.success(result.message);
        } else {
          toast.error(result.message);
        }
        return result;
      } catch (err) {
        return {
          success: false,
          message: (err as Error).message || "An error occurred",
        };
      }
    },
    initialFormActionState,
  );
  const [isActionPending, startTransition] = useTransition();
  return (
    <form action={action} className="flex w-full flex-col items-center gap-4">
      <FormGroup
        name="email"
        type="email"
        placeholder="Enter your email address"
        autocomplete="off"
        error={state.errors?.email}
      />
      <FormGroup
        name="password"
        type="password"
        placeholder="8+ characters"
        autocomplete="off"
        error={state.errors?.password}
      />
      <Button
        disabled={isPending}
        type="submit"
        className="bg-pry disabled:bg-pry/50 hover:bg-pry/90 mt-4 flex h-14 w-full cursor-pointer items-center gap-3 rounded-2xl text-base leading-normal font-bold tracking-[-0.015rem] transition-colors"
      >
        <ClipLoader size={24} loading={isPending} color="#ffffff" />
        <span>Sign In</span>
      </Button>
      <div className="flex w-full items-center gap-4 py-2">
        <hr className="border-custom-border flex-1 border-t" />
        <p className="text-sm font-medium">OR</p>
        <hr className="border-custom-border flex-1 border-t" />
      </div>
      <Button
        disabled={isActionPending}
        formAction={() => {
          startTransition(async () => {
            await signinWithGoogle();
          });
        }}
        variant={"outline"}
        className="hover:bg-custom-border/20 text-custom-text hover:text-custom-text flex h-14 w-full cursor-pointer items-center gap-3 rounded-2xl bg-transparent text-base leading-normal font-bold tracking-[-0.015rem] transition-colors disabled:bg-white/20"
      >
        <ClipLoader size={24} color="#a0a0a0" loading={isActionPending} />
        <div className="flex items-center gap-4">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-custom-border size-6"
          >
            <title>Google</title>
            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
          </svg>
          <span>Continue with Google</span>
        </div>
      </Button>
      <Button
        variant={"outline"}
        className="hover:bg-custom-border/20 text-custom-text hover:text-custom-text h-14 w-full cursor-pointer rounded-2xl bg-transparent text-base leading-normal font-bold tracking-[-0.015rem] transition-colors"
      >
        <div className="flex items-center gap-4">
          <Wallet className="size-6" />
          <span>Continue with Wallet</span>
        </div>
      </Button>
      <p className="pt-4 text-center text-sm font-medium">
        Already have an account?{" "}
        <Link href={"/sign-up"} className="text-pry font-bold hover:underline">
          Sign Up
        </Link>
      </p>
    </form>
  );
};

export default SignInForm;
