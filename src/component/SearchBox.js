import React from "react";

const SearchBox = ({ searchCountry, setSearchCountry }) => {
  const handleSearch = (e) => {
    setSearchCountry(e.target.value);
  };
  return (
    <div className="search-box">
      <input
        className="left"
        type="text"
        placeholder="Search for a country"
        onChange={handleSearch}
        value={searchCountry}
      />
    </div>
  );
};

export default SearchBox;
