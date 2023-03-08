import React from "react";
import Button from "../Button";

type Props = {
  href: string;
  children: React.ReactNode;
};

const ButtonOutlinePrimary = ({ href = "", children, className }: Props) => {
  return (
    <Button
      href={href}
      className={`border rounded px-3 py-2 text-indigo-800 border-indigo-800 cursor-pointer hover:bg-indigo-800 hover:text-white ease-in-out duration-300 ${className}`}
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
