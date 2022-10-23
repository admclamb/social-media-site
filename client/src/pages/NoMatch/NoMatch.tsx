import React from 'react';
import { Link } from 'react-router-dom';
import './NoMatch.css';
type Props = {};

const NoMatch = (props: Props) => {
  return (
    <main className="no-match">
      <article className="no-match--container">
        <h2 className="no-match--container-heading">
          This Page Does Not Exist
        </h2>
        <p>The link may be broken, or the page has been removed.</p>
        <Link to="/" className="no-match--container-link">
          Homepage
        </Link>
      </article>
    </main>
  );
};

export default NoMatch;
