import React from 'react';

type Props = {
  query: string;
  setQuery: (s: string) => void;
};

const FeedNav = ({ setQuery, query }: Props) => {
  const handleChange = ({ target: { id } }) => {
    setQuery(id);
  };
  return (
    <ul>
      <li>
        <button>Relevant</button>
      </li>
      <li>
        <button>Latest</button>
      </li>
      <li>
        <button>Top</button>
      </li>
    </ul>
  );
};

export default FeedNav;
