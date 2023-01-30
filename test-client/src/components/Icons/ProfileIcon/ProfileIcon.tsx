import React from 'react';
import CircleWrapper from '../../Wrapper/CircleWrapper/CircleWrapper';
import { Link } from 'react-router-dom';
import pfp from './default-pfp.jpeg';
type Props = {
  pfp_url: string;
};

const ProfileIcon = ({ pfp_url }: Props) => {
  return (
    <Link to="/profile/1">
      <CircleWrapper classes={`icon`}>
        <img
          src={pfp_url}
          alt="default profile pic"
          width="100%"
          className="icon-pfp"
          draggable="false"
        />
      </CircleWrapper>
    </Link>
  );
};

ProfileIcon.defaultProps = {
  pfp_url: pfp,
};

export default ProfileIcon;
