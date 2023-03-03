import React from 'react';

type Props = {
  children: React.ReactNode;
  classes: string;
  isDoubleCols: boolean;
};

const ContainerColumns = ({ children, classes, isDoubleCols }: Props) => {
  return (
    <div
      className={`${
        isDoubleCols ? 'custom-container-2-cols' : 'custom-container-cols'
      } ${classes}`}
    >
      {children}
    </div>
  );
};

ContainerColumns.defaultProps = {
  classes: '',
  isDoubleCols: false,
};

export default ContainerColumns;
