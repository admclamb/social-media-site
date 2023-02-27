import React from 'react';

type Props = {
  query: string;
  setQuery: (s: string) => void;
};

const FeedNav = ({ setQuery, query }: Props) => {
  const handleChange = ({ target: { id } }) => {
    setQuery(id);
  };
  console.log(query);
  return (
    <ul className="flex gap-1">
      <li>
        <button
          id="relevant"
          className={`p-3 rounded ${
            query === 'relevant' && 'font-semibold'
          } hover:text-indigo-800 hover:bg-white`}
          onClick={handleChange}
        >
          Relevant
        </button>
      </li>
      <li>
        <button
          id="relevant"
          className={`p-3  rounded ${
            query === 'latest' && 'font-semibold'
          } hover:text-indigo-800 hover:bg-white`}
          onClick={handleChange}
        >
          Latest
        </button>
      </li>
      <li>
        <button
          id="relevant"
          className={`p-3 rounded ${
            query === 'top' && 'font-semibold'
          } hover:text-indigo-800 hover:bg-white`}
          onClick={handleChange}
        >
          Top
        </button>
      </li>
    </ul>
  );
};

export default FeedNav;
