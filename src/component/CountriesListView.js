import React, { useState } from "react";
import Countries from "./Countries";
import countriesAll from "../data/countriesAll.json";
import SearchBox from "./SearchBox";
import CountryRegion from "./CountryRegion";

const CountriesListView = ({ setCountryHandler }) => {
  const [searchCountry, setSearchCountry] = useState("");
  const [regionName, setRegionName] = useState("All");

  const filteredCountry = countriesAll.filter((country) => {
    if (regionName === "All") {
      return (
        country.name.toLowerCase().includes(searchCountry.toLowerCase()) ||
        country.capital.toLowerCase().includes(searchCountry.toLowerCase())
      );
    } else {
      return (
        country.region === regionName &&
        (country.name.toLowerCase().includes(searchCountry.toLowerCase()) ||
          country.capital.toLowerCase().includes(searchCountry.toLowerCase()))
      );
    }
  });
  return (
    <div>
      <SearchBox
        searchCountry={searchCountry}
        setSearchCountry={setSearchCountry}
        countriesAll={countriesAll}
      />
      <CountryRegion
        countriesAll={countriesAll}
        regionName={regionName}
        setRegionName={setRegionName}
      />

      <Countries
        countriesAll={filteredCountry}
        setCountryHandler={setCountryHandler}
      />
    </div>
  );
};

export default CountriesListView;
