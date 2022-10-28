import React from 'react';
import CircleWrapper from '../../Wrapper/CircleWrapper/CircleWrapper';
import { Link } from 'react-router-dom';
import pfp from './default-pfp.jpeg';
type Props = {};

const ProfileIcon = (props: Props) => {
  return (
    <Link to="/profile/1">
      <CircleWrapper classes={`icon`}>
        <img
          src={pfp}
          alt="default profile pic"
          width="100%"
          className="icon-pfp"
          draggable="false"
        />
      </CircleWrapper>
    </Link>
  );
};

export default ProfileIcon;
