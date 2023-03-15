import { ButtonProps } from "@/ts/inerfaces/ButtonProps";
import React from "react";
import Button from "../Button";

const ButtonPrimary = ({
  href = "",
  children,
  className,
  type,
  onClick,
}: ButtonProps) => {
  return (
    <Button
      href={href}
      className={`bg-indigo-800 text-white rounded w-[8rem] ease-in-out duration-300 ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

ButtonPrimary.defaultProps = {
  href: "",
  className: "",
};

export default ButtonPrimary;
