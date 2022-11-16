import React from 'react';
import { Link } from 'react-router-dom';
import './Tags.css';
type Props = {
  tags: [];
};

const Tags = ({ tags }: Props) => {
  return (
    <ul className="tags-ul">
      {Array.isArray(tags) &&
        tags.map((tag) => {
          return (
            <li>
              <Link to={`/category/${tag}`} className="tags-tag">
                <span>#</span> {tag}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default Tags;
