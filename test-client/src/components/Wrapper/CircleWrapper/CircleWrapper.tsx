import React from 'react';
import './CircleWrapper.css';
type Props = {
  children: React.ReactNode;
  showBg: boolean;
  classes?: string;
  onClick?: any;
  parentId?: string;
};

const CircleWrapper = ({
  children,
  showBg,
  classes,
  onClick,
  parentId,
}: Props) => {
  return (
    <div
      className={`wrapper circle-wrapper ${
        showBg && 'circle-wrapper-bg'
      } ${classes}`}
      onClick={onClick ? onClick : () => {}}
      id={parentId}
    >
      {children}
    </div>
  );
};

CircleWrapper.defaultProps = {
  showBg: false,
};

export default CircleWrapper;
