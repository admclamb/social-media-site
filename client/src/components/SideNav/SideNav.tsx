import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../Icons/HomeIcon/HomeIcon';
import MessagesIcon from '../Icons/MessagesIcon/MessagesIcon';
import QuestionIcon from '../Icons/QuestionIcon/QuestionIcon';
import TagsIcon from '../Icons/TagsIcon/TagsIcon';
import './SideNav.css';
type Props = {};

const SideNav = (props: Props) => {
  return (
    <nav className="side-nav">
      <ul>
        <li>
          <HomeIcon />
          <Link to="/">Home</Link>
        </li>
        <li>
          <QuestionIcon />
          <Link to="/questions">Questions</Link>
        </li>
        <li>
          <TagsIcon />
          <Link to="/tags">Tags</Link>
        </li>
        <li>
          <MessagesIcon />
          <Link to="/discussions">Discussions</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
