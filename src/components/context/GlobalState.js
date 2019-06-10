import React, { useState } from "react";

import axios from "axios";

export const GlobalContext = React.createContext();

const GlobalState = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState({});
  const [theme, setTheme] = useState("Light");

  // Get all countries
  const fetchCountries = () => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(res => setCountries(res.data))
      .catch(err => console.log(err));
  };

  //  Get single country details
  const fetchCountry = code => {
    axios
      .get(`https://restcountries.eu/rest/v2/alpha/${code}`)
      .then(res => setCountry(res.data))
      .catch(err => console.log(err));
  };

  //  Filter countries by region
  const filterByRegion = region => {
    axios
      .get(`https://restcountries.eu/rest/v2/region/${region}`)
      .then(res => setCountries(res.data))
      .catch(err => console.log(err));
  };

  const values = {
    countries,
    country,
    theme,
    setTheme,
    fetchCountries,
    fetchCountry,
    filterByRegion
  };

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};

export default GlobalState;
