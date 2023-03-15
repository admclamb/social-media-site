import React from "react";
import Link from "next/link";
type Props = {
  className: string;
};

const Logo = ({ className }: Props) => {
  return (
    <Link href="/" className={`hover:dark:text-indigo-800${" " + className}`}>
      <h1 className="text-lg font-semibold">Devify</h1>
    </Link>
  );
};

Logo.defaultProps = {
  className: "",
};

export default Logo;
