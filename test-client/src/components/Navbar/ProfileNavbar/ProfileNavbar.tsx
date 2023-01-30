import React, { useState } from 'react';
import MessagesIcon from '../../Icons/MessagesIcon/MessagesIcon';
import NotificationIcon from '../../Icons/NotificationIcon/NotificationIcon';
import AppIcon from '../../Icons/AppIcon/AppIcon';
import ProfileIcon from '../../Icons/ProfileIcon/ProfileIcon';

type Props = {};

const ProfileNavbar = (props: Props) => {
  const [active, setActive] = useState<string | null>(null);
  const changeActive = (event) => {
    setActive(event.currentTarget);
  };
  return (
    <>
      <div className="navbar--profile">
        <MessagesIcon active={active} changeActive={changeActive} />
        <NotificationIcon active={active} changeActive={changeActive} />
        <AppIcon active={active} changeActive={changeActive} />
        <ProfileIcon />
      </div>
    </>
  );
};

export default ProfileNavbar;
