import React from 'react';
import QuestionCard from '../QuestionCard/QuestionCard';
import './QuestionFeed.css';
import QuestionFeedNav from './QuestionFeedNav/QuestionFeedNav';
type Props = {};

const QuestionFeed = (props: Props) => {
  return (
    <section className="question-feed">
      <QuestionFeedNav />
      <ul className="question-feed__ul">
        <li className="question-feed__li">
          <QuestionCard />
        </li>
        <li>
          <QuestionCard />
        </li>
        <li>
          <QuestionCard />
        </li>
      </ul>
    </section>
  );
};

export default QuestionFeed;
