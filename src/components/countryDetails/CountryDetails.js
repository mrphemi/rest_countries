import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { GlobalContext } from "../context/GlobalState";
import BorderList from "./BorderList";

import styles from "./CountryDetails.module.css";

const CountryDetails = ({ match }) => {
  const { country, fetchCountry, theme } = useContext(GlobalContext);
  const countryCode = match.params.code;

  useEffect(() => {
    fetchCountry(countryCode);
  }, [countryCode]);

  const displayList = list => {
    return list.map((item, i) => {
      if (i === list.length - 1)
        return <span key={item.name}>{item.name}</span>;
      return <span key={item.name}>{item.name}, </span>;
    });
  };

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
      <Link
        to="/"
        className={theme === "Light" ? styles.back : styles.back_dark}
      >
        <ion-icon name="arrow-round-back" />
        Back
      </Link>
      <div className={styles.details}>
        <div className={styles.flag}>{flag && <img src={flag} alt="" />}</div>
        <div>
          {name && <h2>{name}</h2>}
          <div className={styles.info_group}>
            <div className={styles.info}>
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
                  {displayList(currencies)}
                </p>
              )}

              {languages.length !== 0 && (
                <p>
                  <strong>Languages: </strong>
                  {displayList(languages)}
                </p>
              )}
            </div>
          </div>
          <div className={styles.borders}>
            {borders.length !== 0 && (
              <>
                <p>
                  <strong>Border Countries:</strong>
                </p>
                <BorderList borders={borders} theme={theme} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
