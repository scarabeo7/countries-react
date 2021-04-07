import React, { useState } from "react";
import "./App.css";
import CountriesListView from "./component/CountriesListView";
import CountryView from "./component/CountryView";
import Header from "./component/Header";

const App = () => {
  const [view, setView] = useState("list");
  const [countryId, setCountryId] = useState("");

  const setCountryHandler = (countryId) => {
    setView("oneCountry");
    setCountryId(countryId);
  };

  const handleBackButton = () => {
    setView("list");
  };

  return (
    <div className="App">
      <Header />
      
      {view === "list" ? (
        <CountriesListView setCountryHandler={setCountryHandler} />
      ) : (
        <CountryView
          countryId={countryId}
          handleBackButton={handleBackButton}
          setCountryHandler={setCountryHandler}
        />
      )}
    </div>
  );
};

export default App;
