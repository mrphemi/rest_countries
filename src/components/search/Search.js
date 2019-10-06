import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import styles from "./Search.module.css";

const Search = ({ setSearchTerm }) => {
  const { theme } = useContext(GlobalContext);
  const onUserInput = e => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className={styles.search}>
      <input
        type="text"
        onChange={onUserInput}
        placeholder="Search for a country..."
        className={theme === "Light" ? "" : styles.dark}
      />
    </div>
  );
};

export default Search;
