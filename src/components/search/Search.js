import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

import styles from "./Search.module.css";

const Search = ({ setSearchTerm }) => {
  const { theme } = useContext(GlobalContext);
  const onUserInput = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className={theme === "Light" ? styles.search : styles.search_dark}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <circle cx="10" cy="10" r="7"></circle>
        <line x1="21" y1="21" x2="15" y2="15"></line>
      </svg>
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
