import React from 'react';
import CircleWrapper from '../Wrapper/CircleWrapper/CircleWrapper';
import './Icon.css';
type Props = {
  children: React.ReactNode;
  handleChange?: any;
  parentId?: string;
};

const Icon = ({ children }: Props) => {
  const onClick = () => {};
  return (
    <CircleWrapper showBg={true} classes={`icon`}>
      {children}
    </CircleWrapper>
  );
};

Icon.defaultProps = {
  parentId: '',
};

export default Icon;
