import React from 'react';
import Card from '../../Card/Card';
import ProfileIcon from '../../Icons/ProfileIcon/ProfileIcon';
import { Link } from 'react-router-dom';
import './CreatePostFeed.css';
type Props = {};

const CreatePostFeed = (props: Props) => {
  return (
    <Card classes="create-post-feed" padding={'p-sm'}>
      <div className="create-post-feed--header">
        <ProfileIcon />
        <div className="create-post-feed--form">
          <Link to="/create" className="create-post-feed-input-button input">
            What's happening?
          </Link>
        </div>
      </div>
      <hr className="create-post-feed--hr" />
      <div className="create-post-feed--links">
        <Link to="/create/photo">
          <i className="fa-solid fa-image text-blue fa-lg mr-sm"></i> Photo
        </Link>
        <Link to="/create/video">
          <i className="fa-solid fa-video text-green fa-lg mr-sm"></i> Video
        </Link>
        <Link to="/create/article">
          <i className="fa-solid fa-newspaper text-red fa-lg mr-sm"></i>
          Article
        </Link>
      </div>
    </Card>
  );
};

export default CreatePostFeed;
