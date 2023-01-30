import React from 'react';
import Icon from '../Icon';

type Props = {
  active: string | null;
  changeActive: any;
};
const AppIcon = ({ active, changeActive }: Props) => {
  return (
    <Icon handleChange={changeActive} parentId="app">
      <svg
        fill="currentColor"
        viewBox="0 0 44 44"
        width="1em"
        height="1em"
        className={active === 'app' ? 'icon-active' : ''}
        id="app-i"
      >
        <circle cx="7" cy="7" r="6"></circle>
        <circle cx="22" cy="7" r="6"></circle>
        <circle cx="37" cy="7" r="6"></circle>
        <circle cx="7" cy="22" r="6"></circle>
        <circle cx="22" cy="22" r="6"></circle>
        <circle cx="37" cy="22" r="6"></circle>
        <circle cx="7" cy="37" r="6"></circle>
        <circle cx="22" cy="37" r="6"></circle>
        <circle cx="37" cy="37" r="6"></circle>
      </svg>
    </Icon>
  );
};

export default AppIcon;
