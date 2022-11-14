import React from 'react';
import './PostImage.css';
type Props = {};

const PostImage = (props: Props) => {
  return (
    <div className="post-image__container">
      <img
        src="https://source.unsplash.com/random"
        alt="Random Banner"
        width="100%"
        className="post-image__image"
      />
    </div>
  );
};

export default PostImage;
