import React from "react";

const Countries = ({countriesAll}) => {
    
  return (
    <div className="container">     
      {countriesAll.map((country, index) => (
        <div className="countries-info" key={index}>
          <img src={country.flag} alt="country flag" />
          <h4>{country.name}</h4>
          <p>
            <strong>Population:</strong> {country.population}
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
