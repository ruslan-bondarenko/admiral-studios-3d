import { SignInForm, GoogleButton } from "@/shared/ui";

export default async function Signin() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-lora text-center mb-10">Sign In</h1>
      <div className="flex flex-col gap-2 items-center">
        <GoogleButton />
        <div>or</div>
        <SignInForm />
      </div>
    </div>
  );
}
