import React from 'react';
import Icon from '../Icon';

type Props = {
  active: string | null;
  changeActive: any;
};

const NotificationIcon = ({ active, changeActive }: Props) => {
  return (
    <Icon handleChange={changeActive} parentId="notifications">
      <i
        className={`fa-solid fa-bell ${
          active === 'notifications' ? 'icon-active' : ''
        }`}
        id="notifications-i"
      ></i>
    </Icon>
  );
};

export default NotificationIcon;
