"use client";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import type { FormEventHandler } from "react";
import { Input, Button, ButtonVariantEnum, Checkbox } from "@/shared/ui";

const SignInForm = () => {
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (res && !res.error) {
      router.push("/profile");
    } else {
      console.log(res);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        className="border h-10 px-3"
        type="email"
        name="email"
        placeholder="E-mail"
        required
      />
      <input
        className="border h-10 px-3"
        type="password"
        name="password"
        placeholder="Password"
        required
      />
      <Button
        className="h-10 !w-auto md:!w-60 !rounded"
        variant={ButtonVariantEnum.GRAY}
        type="submit"
      >
        Sign In
      </Button>
    </form>
  );
};

export default SignInForm;
