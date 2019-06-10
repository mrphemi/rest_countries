import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { GlobalContext } from "../context/GlobalState";
import Search from "../search/Search";
import Filter from "../filter/Filter";
import CountryCard from "./CountryCard";

import styles from "./CountryList.module.css";

const CountryList = () => {
  const { countries, fetchCountries } = useContext(GlobalContext);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchCountries();
  }, [countries]);

  return (
    <div className={styles.list_container}>
      <div className={styles.filters}>
        <Search setTerm={setSearchTerm} />
        <Filter />
      </div>
      <div className={styles.list}>
        {countries
          .filter(country => country.name.toLowerCase().includes(searchTerm))
          .map(country => (
            <Link
              to={`/country/${country.alpha3Code}`}
              key={country.alpha2Code}
            >
              <CountryCard details={country} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default CountryList;
