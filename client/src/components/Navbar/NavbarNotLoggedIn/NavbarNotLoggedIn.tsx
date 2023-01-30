import Link from 'next/link';
import React from 'react';

type Props = {};

const NavbarNotLoggedIn = (props: Props) => {
  return (
    <ul className="flex items-center">
      <li className="mr-3">
        <Link
          href="/login"
          className="block text-center rounded hover:bg-indigo-200 hover:text-indigo-800 ease-in-out duration-300 px-3 py-2"
        >
          Log in
        </Link>
      </li>
      <li>
        <Link
          href="/signup"
          className="border rounded px-3 py-2 text-indigo-800 border-indigo-800 cursor-pointer hover:bg-indigo-800 hover:text-white ease-in-out duration-300"
        >
          Create Account
        </Link>
      </li>
    </ul>
  );
};

export default NavbarNotLoggedIn;
