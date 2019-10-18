import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { GlobalContext } from "../context/GlobalState";
import BorderList from "./BorderList";
import Info from "./Info";
import ExtraInfo from "./ExtraInfo";

import styles from "./CountryDetails.module.css";

const CountryDetails = ({ match }) => {
  const { country, fetchCountry, theme } = useContext(GlobalContext);
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
            <Info
              values={{ nativeName, population, region, subregion, capital }}
            />
            <ExtraInfo values={{ topLevelDomain, currencies, languages }} />
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
