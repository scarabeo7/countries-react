import React, { useState } from "react";
import "./App.css";
import Countries from "./component/Countries";
import Header from "./component/Header";
import countriesAll from "./data/countriesAll.json";
import SearchBox from "./component/SearchBox";
import CountryRegion from "./component/CountryRegion";

const App = () => {
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
    <div className="App">
      <Header />
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
      <Countries countriesAll={filteredCountry} />
    </div>
  );
};

export default App;
