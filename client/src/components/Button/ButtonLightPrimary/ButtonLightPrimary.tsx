import React from "react";
import Button from "../Button";

type Props = {
  href: string;
  children: React.ReactNode;
  className: string;
};

const ButtonLightPrimary = ({ href = "", children, className }: Props) => {
  return (
    <Button
      href={href}
      className={`text-center rounded hover:bg-indigo-200 hover:text-indigo-800 ease-in-out duration-300 px-3 py-2 ${className}`}
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
