import React from 'react';
import './Searchbar.css';
type Props = {};

const Searchbar = (props: Props) => {
  return (
    <form className="search-form">
      <input type="search" className="input search" placeholder="search" />
      <button className="search-button">
        <i className="fa-solid fa-magnifying-glass fa-lg"></i>
      </button>
    </form>
  );
};

export default Searchbar;
