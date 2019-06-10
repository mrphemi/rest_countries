import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

import styles from "./Filter.module.css";

const Search = () => {
  const { filterByRegion, fetchCountries } = useContext(GlobalContext);

  const onUserInput = e => {
    let value = e.target.value;
    if (value === "") {
      fetchCountries();
    }
    filterByRegion(value);
  };

  return (
    <div className={styles.filter}>
      <select defaultValue onChange={onUserInput}>
        <option value disabled>
          Filter by Region
        </option>
        <option value="">All</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Search;
