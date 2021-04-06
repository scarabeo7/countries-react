import React, { useState } from "react";
import "./App.css";
import Countries from "./component/Countries";
import Header from "./component/Header";
import countriesAll from "./data/countriesAll.json";
import SearchBox from "./component/SearchBox";

const App = () => {
  const [searchCountry, setSearchCountry] = useState("");
  const filteredCountry = countriesAll.filter(
    (country) =>
      country.name.toLowerCase().includes(searchCountry.toLowerCase()) ||
      country.capital.toLowerCase().includes(searchCountry.toLowerCase())
  );
  return (
    <div className="App">
      <Header />
      <SearchBox
        searchCountry={searchCountry}
        setSearchCountry={setSearchCountry}
        countriesAll={countriesAll}
      />
      <Countries countriesAll={filteredCountry} />
    </div>
  );
};

export default App;
