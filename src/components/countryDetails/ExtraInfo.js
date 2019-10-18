import React from "react";

import styles from "./CountryDetails.module.css";

const displayList = list => {
  return list.map((item, i) => {
    if (i === list.length - 1) return <span key={item.name}>{item.name}</span>;
    return <span key={item.name}>{item.name}, </span>;
  });
};

const ExtraInfo = ({ values }) => (
  <div className={styles.extra_info}>
    {values.topLevelDomain.length !== 0 && (
      <p>
        <strong>Top Level Domain: </strong>
        {values.topLevelDomain.map(domain => (
          <span key={domain}>{domain}</span>
        ))}
      </p>
    )}
    {values.currencies.length !== 0 && (
      <p>
        <strong>Currencies: </strong>
        {displayList(values.currencies)}
      </p>
    )}

    {values.languages.length !== 0 && (
      <p>
        <strong>Languages: </strong>
        {displayList(values.languages)}
      </p>
    )}
  </div>
);

export default ExtraInfo;
