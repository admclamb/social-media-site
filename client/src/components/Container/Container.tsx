import React from 'react';

type Props = {
  children: React.ReactNode;
  classes: string;
};

const Container = ({ children, classes }: Props) => {
  return <div className={`custom-container ${classes}`}>{children}</div>;
};

Container.defaultProps = {
  classes: '',
};

export default Container;
