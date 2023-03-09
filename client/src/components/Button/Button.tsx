import { ButtonProps } from "@/ts/inerfaces/ButtonProps";
import Link from "next/link";
import React from "react";

const Button = ({ href, children, className, onClick, type }: ButtonProps) => {
  return href ? (
    <Link href={href} className={`py-2 px-3 text-center  ${className}`}>
      {children}
    </Link>
  ) : typeof onClick === "function" ? (
    <button
      className={`py-2 px-3 text-center ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  ) : (
    <button className={`py-2 px-3 text-center ${className}`}>{children}</button>
  );
};

Button.defaultProps = {
  href: "",
  className: "",
};

export default Button;
