import React from "react";

import styles from "./CountryList.module.css";

const CountryCard = ({ details }) => {
  const { flags, name, population, region, capital } = details;
  return (
    <div className={styles.country_card}>
      <img src={flags.svg} alt={`${name}'s Flag`} />
      <div className={styles.info}>
        <p className={styles.country_name}>{name}</p>
        <p>
          <strong>Population: </strong>
          {population}
        </p>
        <p>
          <strong>Region: </strong>
          {region}
        </p>
        <p>
          <strong>Capital: </strong>
          {capital}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
