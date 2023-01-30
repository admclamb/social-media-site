import React from 'react';
import ProfileNavbar from './ProfileNavbar/ProfileNavbar';
import { Link } from 'react-router-dom';
import Searchbar from '../Searchbar/Searchbar';

import './Navbar.css';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="navbar">
      <div className="navbar--left">
        <Link to="/" className="navbar-brand">
          <i className="fa-solid fa-code-simple fa-lg"></i>
        </Link>
        <Searchbar />
      </div>

      <ProfileNavbar />
    </nav>
  );
};

export default Navbar;
