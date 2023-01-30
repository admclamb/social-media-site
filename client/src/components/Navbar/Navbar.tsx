import React, { useContext } from 'react';
import Link from 'next/link';
import { UserContext } from '@/context/UserContext';
import { isObjectEmpty } from '@/utils/isObjectEmpty';
import NavbarNotLoggedIn from './NavbarNotLoggedIn/NavbarNotLoggedIn';
import NavbarLoggedIn from './NavbarLoggedIn/NavbarLoggedIn';
import Searchbar from '../Searchbar/Searchbar';

type Props = {};

const Navbar = (props: Props) => {
  const { user } = useContext(UserContext);
  return (
    <nav className="z-50 sticky top-0 h-16 py-3 m-0 border-b">
      <div className="custom-container flex items-center justify-between h-full mx-auto relative">
        <div className="flex items-center">
          <Link href="/" className="hover:dark:text-indigo-800 mr-5">
            <h1 className="text-lg font-semibold">Devify</h1>
          </Link>
          <Searchbar />
        </div>

        <div className="flex justify-between items-center">
          {(isObjectEmpty(user) && <NavbarNotLoggedIn />) || <NavbarLoggedIn />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
