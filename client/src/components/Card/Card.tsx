import React from 'react';

type Props = {
  children: React.ReactNode;
  className: string;
};

const Card = ({ children, className }: Props) => {
  return (
    <article className={`p-3 border rounded ${className} bg-white`}>
      {children}
    </article>
  );
};

Card.defaultProps = {
  className: '',
};

export default Card;
