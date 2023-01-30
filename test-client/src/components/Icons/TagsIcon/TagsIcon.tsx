import React from 'react';
import Icon from '../Icon';

type Props = {
  active: string | null;
  changeActive: any;
};

const TagsIcon = ({ active }: Props) => {
  return (
    <Icon parentId={'messages'}>
      <i
        className={`fa-sharp fa-solid fa-hashtag ${
          active === 'messages' ? 'icon-active' : ''
        }`}
        id="messages-i"
      ></i>
    </Icon>
  );
};

export default TagsIcon;
