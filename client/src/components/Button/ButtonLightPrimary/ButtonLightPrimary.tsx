import { ButtonProps } from "@/ts/inerfaces/ButtonProps";
import React from "react";
import Button from "../Button";

const ButtonLightPrimary = ({
  href = "",
  children,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <Button
      href={href}
      className={`rounded hover:bg-indigo-200 hover:text-indigo-800 ease-in-out duration-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

ButtonLightPrimary.defaultProps = {
  href: "",
  className: "",
};

export default ButtonLightPrimary;
