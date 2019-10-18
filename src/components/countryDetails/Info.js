import React from "react";

import styles from "./CountryDetails.module.css";

const info = ({ values }) => (
  <div className={styles.info}>
    {values.nativeName && (
      <p>
        <strong>Native Name: </strong>
        {values.nativeName}
      </p>
    )}
    {values.population && (
      <p>
        <strong>Population: </strong>
        {values.population}
      </p>
    )}
    {values.region && (
      <p>
        <strong>Region: </strong>
        {values.region}
      </p>
    )}
    {values.subregion && (
      <p>
        <strong>Sub Region: </strong>
        {values.subregion}
      </p>
    )}
    {values.capital && (
      <p>
        <strong>Capital: </strong>
        {values.capital}
      </p>
    )}
  </div>
);

export default info;
