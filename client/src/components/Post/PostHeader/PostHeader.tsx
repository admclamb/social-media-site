import React from 'react';
import { Link } from 'react-router-dom';
import ProfileIcon from '../../Icons/ProfileIcon/ProfileIcon';
import './PostHeader.css';
type Props = {};

const PostHeader = (props: Props) => {
  return (
    <div className="post-header__container p-md">
      <ProfileIcon />
      <div className="post-header__container-sub">
        <Link to="/profile/1" className="post-header__header">
          Anthony Mclamb
        </Link>
        <p className="post-header__description">Dec 1st</p>
      </div>
    </div>
  );
};

export default PostHeader;
