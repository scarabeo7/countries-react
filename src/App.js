import React from "react";
import "./App.css";
import Countries from "./component/Countries";
import Header from "./component/Header";
import countriesAll from "./data/countriesAll.json";
import SearchBox from "./component/SearchBox";


const App = () => {
  return (
    <div className="App">
      <Header />
      <SearchBox countriesAll={countriesAll} />
      <Countries countriesAll={countriesAll} />
    </div>
  );
};

export default App;

