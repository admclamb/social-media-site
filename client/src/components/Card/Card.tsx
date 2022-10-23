import React from 'react';
import './Card.css';
type Props = {
  children: React.ReactNode;
  background: string;
  padding: string;
  classes: string;
};

const Card = ({ children, background, padding, classes }: Props) => {
  return (
    <article className={`card ${background} ${padding} ${classes}`}>
      {children}
    </article>
  );
};

Card.defaultProps = {
  background: 'bg-primary-main-alt',
  padding: 'p-m',
  classes: '',
};

export default Card;
