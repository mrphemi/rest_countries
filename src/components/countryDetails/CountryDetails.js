import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { GlobalContext } from "../context/GlobalState";

import styles from "./CountryDetails.module.css";

const CountryDetails = ({ match }) => {
  const { country, fetchCountry } = useContext(GlobalContext);
  const countryCode = match.params.code;

  useEffect(() => {
    fetchCountry(countryCode);
  }, [countryCode]);

  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    borders = [],
    topLevelDomain = [],
    currencies = [],
    languages = []
  } = country;

  return (
    <div className={styles.country_details}>
      <Link to="/" className={styles.back}>
        <ion-icon name="arrow-round-back" />
        Back
      </Link>

      <div className={styles.details}>
        {flag && <img src={flag} alt="" />}
        {name && <h2>{name}</h2>}
        {nativeName && (
          <p>
            <strong>Native Name: </strong>
            {nativeName}
          </p>
        )}
        {population && (
          <p>
            <strong>Population: </strong>
            {population}
          </p>
        )}
        {region && (
          <p>
            <strong>Region: </strong>
            {region}
          </p>
        )}
        {subregion && (
          <p>
            <strong>Sub Region: </strong>
            {subregion}
          </p>
        )}
        {capital && (
          <p>
            <strong>Capital: </strong>
            {capital}
          </p>
        )}
      </div>
      <div className={styles.extra_info}>
        {topLevelDomain.length !== 0 && (
          <p>
            <strong>Top Level Domain: </strong>
            {topLevelDomain.map(domain => (
              <span key={domain}>{domain}</span>
            ))}
          </p>
        )}
        {currencies.length !== 0 && (
          <p>
            <strong>Currencies: </strong>
            {currencies.map(currency => (
              <span key={currency.name}>{currency.name}</span>
            ))}
          </p>
        )}

        {languages.length !== 0 && (
          <p>
            <strong>Languages: </strong>
            {languages.map((language, i) => (
              <span key={language.name}>{language.name},</span>
            ))}
          </p>
        )}
      </div>
      <div className={styles.borders}>
        <p>
          <strong>Border Countries</strong>
        </p>
        {borders.map(border => (
          <Link
            className={styles.border}
            to={`/country/${border}`}
            key={border}
          >
            {border}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CountryDetails;
