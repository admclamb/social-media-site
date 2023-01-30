import React from 'react';
import Icon from '../Icon';

type Props = {
  active: string | null;
  changeActive: any | null;
};

const HomeIcon = ({ active, changeActive }: Props) => {
  return (
    <Icon handleChange={changeActive} parentId={'messages'}>
      <i
        className={`fa-sharp fa-solid fa-house-chimney ${
          active === 'messages' ? 'icon-active' : ''
        }`}
        id="messages-i"
      ></i>
    </Icon>
  );
};

export default HomeIcon;
