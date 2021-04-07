import React from "react";

const Countries = ({ countriesAll, setCountryHandler }) => {
  const handleClick = (country) => {
    setCountryHandler(country.alpha3Code);
  };
  return (
    <div className="container">
      {countriesAll.map((country, index) => (
        <div
          onClick={() => handleClick(country)}
          className="countries-info"
          key={index}
        >
          <img src={country.flag} alt="country flag" />
          <h3>{country.name}</h3>
          <p>
            <strong>Population:</strong>
            {country.population
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
          <p>
            <strong>Region:</strong> {country.region}
          </p>
          <p>
            <strong>Capital:</strong> {country.capital}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Countries;
