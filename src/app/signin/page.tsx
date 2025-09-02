import { Suspense } from "react";
import { SignInForm, GoogleButton } from "@/shared/ui";

export default async function Signin() {
  return (
    <div className="p-10 pt-20 bg-amber-50 w-fit mx-auto">
      <h1 className="text-3xl font-lora text-center mb-10">Sign In</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex flex-col gap-2 items-center">
          <GoogleButton />
          <div>or</div>
          <SignInForm />
        </div>
      </Suspense>
    </div>
  );
}
