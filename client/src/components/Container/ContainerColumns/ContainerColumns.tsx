import React from "react";

type Props = {
  children: React.ReactNode;
  className: string;
  isDoubleCols: boolean;
};

const ContainerColumns = ({ children, className, isDoubleCols }: Props) => {
  return (
    <div
      className={`${
        isDoubleCols ? "custom-container-2-cols" : "custom-container-cols"
      } ${className}`}
    >
      {children}
    </div>
  );
};

ContainerColumns.defaultProps = {
  className: "",
  isDoubleCols: false,
};

export default ContainerColumns;
