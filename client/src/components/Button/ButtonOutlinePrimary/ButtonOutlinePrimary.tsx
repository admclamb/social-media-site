import { ButtonProps } from "@/ts/inerfaces/ButtonProps";
import React from "react";
import Button from "../Button";

const ButtonOutlinePrimary = ({
  href = "",
  children,
  className,
}: ButtonProps) => {
  return (
    <Button
      href={href}
      className={`border rounded text-indigo-800 border-indigo-800 cursor-pointer hover:bg-indigo-800 hover:text-white ease-in-out duration-300 ${className}`}
    >
      {children}
    </Button>
  );
};

ButtonOutlinePrimary.defaultProps = {
  href: "",
  className: "",
};

export default ButtonOutlinePrimary;
