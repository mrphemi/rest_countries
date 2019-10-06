import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { GlobalContext } from "../context/GlobalState";

import styles from "./Nav.module.css";

const Nav = () => {
  const { theme, setTheme } = useContext(GlobalContext);

  // toggle theme
  const toggleTheme = () => {
    if (theme === "Light") {
      setTheme("Dark");
    } else {
      setTheme("Light");
    }
  };

  return (
    <div className={theme === "Light" ? styles.nav : styles.nav_dark}>
      <Link to="/" className={styles.logo}>
        Where in the world?
      </Link>
      <p onClick={toggleTheme} className={styles.theme_toogle}>
        <ion-icon name="moon" />
        {theme}
      </p>
    </div>
  );
};

export default Nav;
