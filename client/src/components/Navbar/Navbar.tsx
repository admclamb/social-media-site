import React, { useContext, useState } from "react";
import Link from "next/link";
import { UserContext } from "@/context/UserContext";
import { isObjectEmpty } from "@/utils/isObjectEmpty";
import NavbarNotLoggedIn from "./NavbarNotLoggedIn/NavbarNotLoggedIn";
import NavbarLoggedIn from "./NavbarLoggedIn/NavbarLoggedIn";
import Searchbar from "../Searchbar/Searchbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/sharp-solid-svg-icons";
import ButtonLightPrimary from "../Button/ButtonLightPrimary/ButtonLightPrimary";
import { faSearch } from "@fortawesome/pro-regular-svg-icons";
import NavbarCanvas from "./NavbarCanvas/NavbarCanvas";
import Logo from "../Logo/Logo";

type Props = {};

const Navbar = (props: Props) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);
  const { user } = useContext(UserContext);
  const toggleNav = () => {
    console.log("HERE");
    setIsNavbarOpen((curr) => !curr);
  };
  return (
    <>
      <nav className="bg-white dark:bg-zinc-800 px-2 z-30 sticky bg-white w-full top-0 h-16 py-3 m-0 border-b relative">
        <div className="custom-container flex items-center gap-2 h-full mx-auto relative">
          <ButtonLightPrimary className="md:hidden" onClick={toggleNav}>
            <FontAwesomeIcon icon={faBars} onClick={toggleNav} />
          </ButtonLightPrimary>
          <div className="flex items-center">
            <Logo className="md:mr-7" />
            <Searchbar className="hidden md:block" />
          </div>

          <div className="flex justify-between items-center ml-auto gap-2">
            <ButtonLightPrimary href="search" className="md:hidden">
              <FontAwesomeIcon
                icon={faSearch}
                size="lg"
                className="text-inherit"
              />
            </ButtonLightPrimary>
            {(isObjectEmpty(user) && <NavbarNotLoggedIn />) || (
              <NavbarLoggedIn />
            )}
          </div>
        </div>
      </nav>
      {isNavbarOpen && <NavbarCanvas setIsCanvasOpen={setIsNavbarOpen} />}
    </>
  );
};

export default Navbar;
