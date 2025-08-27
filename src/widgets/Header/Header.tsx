"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { NavBar } from "@/widgets";
import { signOut, useSession } from "next-auth/react";

import {
  Button,
  ButtonVariantEnum,
  BurgerButton,
  MenuContainer,
} from "@/shared/ui";
import logo from "@/shared/assets/icons/logo.avif";

import { useAppSelector } from "@/base/store";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import clsx from "clsx";

const Header = () => {
  const session = useSession();
  const isMenuOpen = useAppSelector((state) => state.header.isMenuOpen);

  useEffect(() => {
    const bodyElement = document.body;

    if (isMenuOpen) {
      disableBodyScroll(bodyElement);
    } else {
      enableBodyScroll(bodyElement);
    }
  }, [isMenuOpen]);

  return (
    <header className="fixed z-[99999] bg-[#020202] w-full flex items-center px-10 py-3 flex items-center justify-between font-lora">
      <Link
        className="flex items-center justify-center w-fit text-gray-100 hover:text-tone-700 "
        href="/"
      >
        <Image className="w-full h-6" src={logo} alt="Back arrow" />
      </Link>
      <NavBar />
      <div className="hidden sm:flex">
        {session?.data ? (
          <Button
            className="h-10 md:w-36 !rounded"
            variant={ButtonVariantEnum.PRIMARY}
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            <span className="text-sm font-medium">Sign Out</span>
          </Button>
        ) : (
          <Button
            className="h-10 md:w-36 !rounded"
            variant={ButtonVariantEnum.PRIMARY}
            href="/signin"
          >
            <span className="text-sm font-medium text-white">Sign In</span>
          </Button>
        )}
      </div>
      <div className="sm:hidden relative w-fit h-full shrink-0 flex items-center">
        <BurgerButton className="group-hover:pointer-events-none" />
        <MenuContainer
          className={clsx(
            "fixed top-16 bg-black z-10 left-0 bottom-0 w-screen translate-x-[110%]",
            "transition-all ease-linear",
            {
              "!translate-x-0": isMenuOpen,
            }
          )}
        />
      </div>
    </header>
  );
};

export default Header;
