import React from "react";

const CountryRegion = ({
  countriesAll,

  setRegionName,
}) => {
  let regionListArray = [];
  countriesAll.forEach((item) => {
    !regionListArray.includes(item.region) && regionListArray.push(item.region);
  });
  const dropDownHandler = (e) => {
    console.log(e.target.value);
    setRegionName(e.target.value);
  };
  return (
    <div className="search-box">
      <label className="right">
        Choose a Region:
        <select onChange={dropDownHandler}>
          <option>All</option>
          {regionListArray.map((region, index) => (
            <option key={index}>{region ? region : "Antarctica"}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default CountryRegion;
