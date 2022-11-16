import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../Card/Card';
import ProfileIcon from '../../Icons/ProfileIcon/ProfileIcon';
import Tags from '../../Tags/Tags';
import './QuestionCard.css';
type Props = {};

const QuestionCard = ({
  question = 'How do I loop through an object?',
  author = 'Anthony Mclamb',
  created_at = 'May 1st',
  updated_at = '',
  categories = ['javascript', 'webdev'],
  user_id = 0,
  question_id = 0,
  views = 0,
  comments = 0,
  likes = 0,
  dislikes = 0,
}: Props) => {
  return (
    <Card>
      <header className="question-card__header">
        <ProfileIcon />
        <div className="question-card__header-info">
          <Link to={`/profile/${user_id}`} className="question-card__author">
            <p>{author}</p>
          </Link>
          <p className="question-card__date">{created_at}</p>
        </div>
      </header>
      <div className="question-card__main">
        <Link
          to={`/question/${question_id}`}
          className="question-card__question"
        >
          <h5>{question}</h5>
        </Link>

        <Tags tags={categories} />
      </div>
      <footer className="question-card__footer">
        <Link
          to={`/question/${question_id}`}
          className="question-card__footer-link"
        >
          {likes} <i className="fa-sharp fa-solid fa-arrow-up fa-lg"></i>
        </Link>
        <Link
          to={`/question/${question_id}`}
          className="question-card__footer-link"
        >
          {dislikes} <i className="fa-sharp fa-solid fa-arrow-down fa-lg"></i>
        </Link>
        <Link
          to={`/question/${question_id}`}
          className="question-card__footer-link question-card__views"
        >
          {views} Views
        </Link>
        <Link
          to={`/question/${question_id}`}
          className="question-card__footer-link"
        >
          {comments} Comments
        </Link>
      </footer>
    </Card>
  );
};

export default QuestionCard;
