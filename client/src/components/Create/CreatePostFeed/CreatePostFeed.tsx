import React from 'react';
import Card from '../../Card/Card';
import ProfileIcon from '../../Icons/ProfileIcon/ProfileIcon';
import './CreatePostFeed.css';
type Props = {};

const CreatePostFeed = (props: Props) => {
  return (
    <Card classes="create-post-feed">
      <ProfileIcon />
      <form className="create-post-feed--form">
        <input type="text" className="input" placeholder="What's happening?" />
      </form>
    </Card>
  );
};

export default CreatePostFeed;
