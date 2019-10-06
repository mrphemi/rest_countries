import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import styles from "./CountryDetails.module.css";

const BorderList = ({ borders, theme }) => {
  const [borderCountries, setBorderCountries] = useState([]);
  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/alpha?codes=${borders.join(";")}`)
      .then(res => setBorderCountries(res.data))
      .catch(err => console.log(err));
  }, [borders]);

  return (
    <>
      {borderCountries.map(country => (
        <Link
          className={theme === "Light" ? styles.border : styles.border_dark}
          to={`/country/${country.alpha3Code}`}
          key={country.alpha3Code}
        >
          {country.name}
        </Link>
      ))}
    </>
  );
};

export default BorderList;
