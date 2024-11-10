// src/components/SearchButton.js
import React from 'react';
import searchIcon from '../assets/icons/search-icon.svg';

function SearchButton() {
  return (
    <button>
      <img src={searchIcon} alt="Search" style={{ width: '20px', height: '20px' }} />
      Search
    </button>
  );
}

export default SearchButton;
