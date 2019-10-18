import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

import styles from "./Loader.module.css";

const Loader = () => {
  const { loading } = useContext(GlobalContext);

  return (
    <div className={`${styles.loader} ${loading === true ? styles.show : ""}`}>
      <div className={styles.spinner}>
        <div className={styles.double_bounce1} />
        <div className={styles.double_bounce2} />
      </div>
      <h1>Loading...</h1>
    </div>
  );
};

export default Loader;
