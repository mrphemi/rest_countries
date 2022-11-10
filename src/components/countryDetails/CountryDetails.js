import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { GlobalContext } from "../../context/GlobalState";
import BorderList from "./BorderList";
import Info from "./Info";
import ExtraInfo from "./ExtraInfo";

import styles from "./CountryDetails.module.css";

const CountryDetails = ({ match }) => {
  const { setLoading, theme } = useContext(GlobalContext);
  const [country, setCountry] = useState({});

  const countryCode = match.params.code;

  useEffect(() => {
    //  Get single country details
    const fetchCountry = (code) => {
      setLoading(true);
      axios
        .get(`https://restcountries.com/v2/alpha/${code}`)
        .then((res) => {
          setCountry(res.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    };

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
    languages = [],
  } = country;

  return (
    <div className={styles.country_details}>
      <Link
        to="/"
        className={theme === "Light" ? styles.back : styles.back_dark}
      >
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
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <line x1="5" y1="12" x2="9" y2="16"></line>
          <line x1="5" y1="12" x2="9" y2="8"></line>
        </svg>
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
