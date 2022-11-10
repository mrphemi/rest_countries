import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { GlobalContext } from "../../context/GlobalState";
import Search from "../search/Search";
import Filter from "../filter/Filter";
import CountryCard from "./CountryCard";

import styles from "./CountryList.module.css";

const CountryList = () => {
  const { setLoading } = useContext(GlobalContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("");

  // Get all countries
  const fetchCountries = () => {
    setLoading(true);
    axios
      .get("https://restcountries.com/v2/all", {
        params: {
          fields: "alpha2Code,alpha3Code,name,region,capital,population,flags",
        },
      })
      .then((res) => {
        setCountries(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  //  Filter countries by region
  const filterByRegion = (region) => {
    setLoading(true);
    axios
      .get(`https://restcountries.com/v2/region/${region}`)
      .then((res) => {
        setCountries(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    if (!region) {
      fetchCountries();
    } else {
      filterByRegion(region);
    }
  }, [region]);

  return (
    <div className={styles.list_container}>
      <div className={styles.filters}>
        <Search setSearchTerm={setSearchTerm} />
        <Filter setRegion={setRegion} />
      </div>
      <div className={styles.list}>
        {countries
          .filter((country) =>
            country.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((country) => (
            <Link
              to={`/country/${country.alpha3Code}`}
              key={country.alpha2Code}
            >
              <CountryCard details={country} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default CountryList;
