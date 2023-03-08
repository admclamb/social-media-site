import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  className: string;
};

const Button = ({ href, children, className }: Props) => {
  return href ? (
    <Link href={href} className={className}>
      {children}
    </Link>
  ) : (
    <button className={className}>{children}</button>
  );
};

Button.defaultProps = {
  href: "",
  className: "",
};

export default Button;
