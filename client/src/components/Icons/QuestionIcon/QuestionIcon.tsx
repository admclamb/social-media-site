import React from 'react';
import Icon from '../Icon';
type Props = {
  active: string | null;
  changeActive: any;
};

const QuestionIcon = ({ active, changeActive }: Props) => {
  return (
    <Icon handleChange={changeActive} parentId={'messages'}>
      <i
        className={`fa-solid fa-message-question ${
          active === 'messages' ? 'icon-active' : ''
        }`}
        id="messages-i"
      ></i>
    </Icon>
  );
};

export default QuestionIcon;
