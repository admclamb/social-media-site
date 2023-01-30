import React from 'react';

type Props = {
  children: React.ReactNode;
  classes: string;
};

const ContainerColumns = ({ children, classes }: Props) => {
  return <div className={`custom-container-cols ${classes}`}>{children}</div>;
};

ContainerColumns.defaultProps = {
  classes: '',
};

export default ContainerColumns;
