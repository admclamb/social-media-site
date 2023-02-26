import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/pro-light-svg-icons';
import Avatar from '@/components/Avatar/Avatar';
type Props = {};

const NavbarLoggedIn = (props: Props) => {
  return (
    <ul className="flex items-center">
      <li className="mr-3">
        <Link
          href="/signup"
          className="border rounded px-3 py-2 text-indigo-800 border-indigo-800 cursor-pointer hover:bg-indigo-800 hover:text-white ease-in-out duration-300"
        >
          Create Post
        </Link>
      </li>
      <li className="mr-3">
        <Link
          href="/signup"
          className=" text-indigo-800 block text-center rounded hover:bg-indigo-200 hover:text-indigo-800 ease-in-out duration-300 px-3 py-2"
        >
          <FontAwesomeIcon icon={faBell} size="xl" />
        </Link>
      </li>
      <li className="mr-3">
        <Link href="/signup">
          <Avatar src="" alt="Profile Picture" className="w-10 h-10" />
        </Link>
      </li>
    </ul>
  );
};

export default NavbarLoggedIn;
