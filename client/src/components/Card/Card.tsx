import React from "react";

type Props = {
  children: React.ReactNode;
  className: string;
  padding: string;
};

const Card = ({ children, className, padding }: Props) => {
  return (
    <article className={`${padding} border rounded ${className} bg-white`}>
      {children}
    </article>
  );
};

Card.defaultProps = {
  className: "",
  padding: "p-4",
};

export default Card;
