import React from "react";

import styles from "./Search.module.css";

const Search = ({ setTerm }) => {
  const onUserInput = e => {
    setTerm(e.target.value);
  };
  return (
    <div className={styles.search}>
      <input
        type="text"
        onChange={onUserInput}
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default Search;
