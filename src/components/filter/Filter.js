import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import styles from "./Filter.module.css";

const Search = () => {
  const { filterByRegion, fetchCountries, theme } = useContext(GlobalContext);
  const onUserInput = e => {
    let value = e.target.value;
    if (!value) {
      fetchCountries();
    } else {
      filterByRegion(value);
    }
  };

  return (
    <div className={styles.filter}>
      <select
        onChange={onUserInput}
        className={theme === "Light" ? "" : styles.dark}
      >
        <option disabled>Filter by Region</option>
        <option value="">All</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
      <ion-icon name="arrow-dropdown" />
    </div>
  );
};

export default Search;
