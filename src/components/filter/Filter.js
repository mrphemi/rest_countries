import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

import styles from "./Filter.module.css";

const Search = ({ setRegion }) => {
  const { theme } = useContext(GlobalContext);
  const onUserInput = (e) => {
    let value = e.target.value;
    setRegion(value);
  };

  return (
    <div className={styles.filter}>
      <select
        onChange={onUserInput}
        className={theme === "Light" ? "" : styles.dark}
        defaultValue="title"
      >
        <option disabled value="title">
          Filter by Region
        </option>
        <option value="">All</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <title>Chevron Down</title>
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="48"
          d="M112 184l144 144 144-144"
        />
      </svg>
    </div>
  );
};

export default Search;
