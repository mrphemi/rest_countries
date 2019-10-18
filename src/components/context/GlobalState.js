import React, { useState } from "react";

import axios from "axios";

export const GlobalContext = React.createContext();

const GlobalState = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState({});
  const [theme, setTheme] = useState("Light");
  const [loading, setLoading] = useState(false);

  // Get all countries
  const fetchCountries = () => {
    setLoading(true);
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(res => {
        setCountries(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 300);
      })
      .catch(err => console.log(err));
  };

  //  Get single country details
  const fetchCountry = code => {
    setLoading(true);
    axios
      .get(`https://restcountries.eu/rest/v2/alpha/${code}`)
      .then(res => {
        setCountry(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 300);
      })
      .catch(err => console.log(err));
  };

  //  Filter countries by region
  const filterByRegion = region => {
    setLoading(true);
    axios
      .get(`https://restcountries.eu/rest/v2/region/${region}`)
      .then(res => {
        setCountries(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 300);
      })
      .catch(err => console.log(err));
  };

  const values = {
    countries,
    country,
    theme,
    loading,
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
