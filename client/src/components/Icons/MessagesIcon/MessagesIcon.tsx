import React from 'react';
import Icon from '../Icon';

type Props = {
  active: string | null;
  changeActive: any;
};

const MessagesIcon = ({ active, changeActive }: Props) => {
  return (
    <Icon handleChange={changeActive} parentId={'messages'}>
      <i
        className={`fa-solid fa-messages ${
          active === 'messages' ? 'icon-active' : ''
        }`}
        id="messages-i"
      ></i>
    </Icon>
  );
};

export default MessagesIcon;
