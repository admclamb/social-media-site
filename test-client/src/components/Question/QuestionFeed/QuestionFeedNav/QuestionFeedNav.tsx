import React from 'react';
import './QuestionFeedNav.css';
type Props = {};

const QuestionFeedNav = (props: Props) => {
  return (
    <nav className="question-feed-nav">
      <button className="question-feed-nav__button">Popular</button>
      <button className="question-feed-nav__button">Latest</button>
    </nav>
  );
};

export default QuestionFeedNav;
