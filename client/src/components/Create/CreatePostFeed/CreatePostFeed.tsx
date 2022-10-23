import React from 'react';
import Card from '../../Card/Card';
import ProfileIcon from '../../Icons/ProfileIcon/ProfileIcon';
import { Link } from 'react-router-dom';
import './CreatePostFeed.css';
type Props = {};

const CreatePostFeed = (props: Props) => {
  return (
    <Card classes="create-post-feed">
      <div className="create-post-feed--header">
        <ProfileIcon />
        <form className="create-post-feed--form">
          <input
            type="text"
            className="input"
            placeholder="What's happening?"
          />
        </form>
      </div>
      <div className="create-post-feed--links">
        <Link to="/create/photo">
          <i className="fa-solid fa-image text-secondary fa-lg mr-sm"></i> Photo
        </Link>
        <Link to="/create/video">
          <i className="fa-solid fa-video text-secondary fa-lg mr-sm"></i> Video
        </Link>
        <Link to="/create/article">
          <i className="fa-solid fa-newspaper text-secondary fa-lg mr-sm"></i>
          Article
        </Link>
      </div>
    </Card>
  );
};

export default CreatePostFeed;
