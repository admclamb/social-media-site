import React from "react";
import Link from "next/link";
import ButtonLightPrimary from "@/components/Button/ButtonLightPrimary/ButtonLightPrimary";

type Props = {};

const NavbarNotLoggedIn = (props: Props) => {
  return (
    <ul className="flex items-center">
      <li className="mr-3 hidden md:block">
        <ButtonLightPrimary href="/login">Log in</ButtonLightPrimary>
      </li>
      <li>
        <Link
          href="/signup"
          className="hidden min-[384px]:block border rounded px-3 py-2 text-indigo-800 border-indigo-800 cursor-pointer hover:bg-indigo-800 hover:text-white ease-in-out duration-300"
        >
          Create Account
        </Link>
      </li>
    </ul>
  );
};

export default NavbarNotLoggedIn;
