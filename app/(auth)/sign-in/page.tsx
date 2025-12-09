import SignInForm from "@/components/SignInForm";
import React from "react";

const signInPage: React.FC = () => {
  return (
    <>
      <div className="flex w-full max-w-md flex-col items-center justify-center p-4">
        <div className="mb-6 flex items-center gap-4">
          <div className="text-primary size-8">
            <svg
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
                className="fill-pry"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <h2 className="text-2xl leading-tight font-bold tracking-[-0.015em]">
            LUVRA
          </h2>
        </div>
        <h1 className="px-4 pb-6 text-center text-[32px] font-bold tracking-tight">
          Sign In to Your Account
        </h1>
        <SignInForm />
      </div>
    </>
  );
};

export default signInPage;
