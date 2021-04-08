import React from "react";
import countriesAll from "../data/countriesAll.json";

const CountryView = ({ countryId, handleBackButton, setCountryHandler }) => {
  const country = countriesAll.find(
    (country) => country.alpha3Code === countryId
  );

  return (
    <div className="country-view">
      <button
        className="btn btn-primary back-btn"
        onClick={() => handleBackButton()}
      >
        Back
      </button>
      <div className="country-card">
        <div className="flag">
          <img src={country.flag} alt="country flag" />
        </div>
        <div className="detail">
          <h3 className="card-title">{country.name}</h3>
          <br />

          <p className="card-text">
            <strong>Native Name:</strong> {country.nativeName}
          </p>
          <p className="card-text">
            <strong>Population:</strong>
            {country.population
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
          <p className="card-text">
            <strong>Region:</strong> {country.region}
          </p>
          <p className="card-text">
            <strong>Sub Region:</strong> {country.subregion}
          </p>
          <p className="card-text">
            <strong>Capital:</strong> {country.capital}
          </p>
          <p className="card-text">
            <strong>Top Level Domain:</strong> {country.topLevelDomain}
          </p>
          <p className="card-text">
            <strong>Currencies:</strong>
            {country.currencies.map((el) => el.name).join(" - ")}
          </p>
          <p className="card-text">
            <strong>Languages:</strong>
            {country.languages
              .map((language) => language.nativeName)
              .join(", ")}
          </p>
          <p className="card-text">
            <strong>Border Countries:</strong>
            {country.borders.map((item, index) => (
              <button
                onClick={() => setCountryHandler(item)}
                className="btn btn-dark m-2"
                key={index}
              >
                {countriesAll.find((country) => country.alpha3Code === item).name}
              </button>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryView;
