"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { Button, ButtonVariantEnum } from "@/shared/ui";

const GoogleButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";

  return (
    <Button
      className="h-10 !w-auto md:!w-60 !pr-5 !pl-10 google-btn !rounded"
      variant={ButtonVariantEnum.GRAY}
      onClick={() => signIn("google", { callbackUrl })}
    >
      <span className="text-sm">Sign in with Google</span>
    </Button>
  );
};

export default GoogleButton;
