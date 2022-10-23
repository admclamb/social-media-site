import React from 'react';
import CircleWrapper from '../../Wrapper/CircleWrapper/CircleWrapper';
import pfp from './default-pfp.jpeg';
type Props = {};

const ProfileIcon = (props: Props) => {
  return (
    <CircleWrapper classes={`icon`}>
      <img
        src={pfp}
        alt="default profile pic"
        width="100%"
        className="icon-pfp"
        draggable="false"
      />
    </CircleWrapper>
  );
};

export default ProfileIcon;
