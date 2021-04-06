import React from 'react'

const SearchBox = ({ countriesAll}) => {
  console.log(countriesAll);
  return (
    <div className="search-box">
      <input type="text" placeholder="Search for a country" />
    </div>
  );
};

export default SearchBox
