import React from 'react';
import './PostFooter.css';
type Props = {};

const PostFooter = (props: Props) => {
  return (
    <>
      <div className="post-footer__likes-container">
        <p>0 Likes</p>
        <p>0 Comments</p>
      </div>
      <div className="post-footer__buttons-container">
        <button className="post-footer__buttons-button">
          <i className="fa-regular fa-thumbs-up fa-xl"></i> Like
        </button>
        <button className="post-footer__buttons-button">
          <i className="fa-regular fa-comment fa-xl"></i> Comment
        </button>
        <button className="post-footer__buttons-button">
          <i className="fa-solid fa-share fa-xl"></i> Share
        </button>
      </div>
    </>
  );
};

export default PostFooter;
