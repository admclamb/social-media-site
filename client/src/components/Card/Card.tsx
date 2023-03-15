import React from "react";

type Props = {
  children: React.ReactNode;
  className: string;
  padding: string;
  isMobileResponsive: boolean;
};

const Card = ({ children, className, padding, isMobileResponsive }: Props) => {
  console.log(isMobileResponsive);
  return (
    <article
      className={`${padding} bg-white ${
        isMobileResponsive ? "border-b md:border md:rounded" : "border rounded"
      } ${className} `}
    >
      {children}
    </article>
  );
};

Card.defaultProps = {
  className: "",
  padding: "p-4",
  isMobileResponsive: false,
};

export default Card;
