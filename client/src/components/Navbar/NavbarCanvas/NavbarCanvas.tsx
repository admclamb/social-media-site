import ButtonLightPrimary from "@/components/Button/ButtonLightPrimary/ButtonLightPrimary";
import JoinCommunity from "@/components/JoinCommunity/JoinCommunity";
import Logo from "@/components/Logo/Logo";
import { UserContext } from "@/context/UserContext";
import { isObjectEmpty } from "@/utils/isObjectEmpty";
import { faXmark } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";

type Props = {
  setIsCanvasOpen: (arg0: boolean) => void;
};

const NavbarCanvas = ({ setIsCanvasOpen }: Props) => {
  const { user } = useContext(UserContext);
  const closeCanvas = () => setIsCanvasOpen(false);
  return (
    <>
      <div className="modal-backdrop z-40" onClick={closeCanvas}></div>
      <div className="absolute left-0 top-0 z-50 w-11/12 sm:w-5/12 md:w-4/12 bg-white border-r min-h-screen">
        <header className="p-2 flex justify-between items-center">
          <Logo />
          <ButtonLightPrimary onClick={closeCanvas}>
            <FontAwesomeIcon icon={faXmark} size="lg" />
          </ButtonLightPrimary>
        </header>
        <section>{isObjectEmpty(user) && <JoinCommunity />}</section>
      </div>
    </>
  );
};

export default NavbarCanvas;
