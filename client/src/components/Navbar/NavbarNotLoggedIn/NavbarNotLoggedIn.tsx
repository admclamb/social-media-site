import Link from 'next/link';
import React from 'react';

type Props = {};

const NavbarNotLoggedIn = (props: Props) => {
  return (
    <ul className="flex items-center">
      <li className="mr-4">
        <Link href="/login">Log in</Link>
      </li>
      <li className="border rounded px-3 py-2 text-indigo-800 border-indigo-800 cursor-pointer hover:bg-indigo-800 hover:text-white ease-in-out duration-300">
        <Link href="/signup">Create Account</Link>
      </li>
    </ul>
  );
};

export default NavbarNotLoggedIn;
