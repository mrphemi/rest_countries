import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { GlobalContext } from "../../context/GlobalState";

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
    <nav className={theme === "Light" ? styles.nav : styles.nav_dark}>
      <Link to="/" className={styles.logo}>
        Where in the world?
      </Link>
      <div onClick={toggleTheme} className={styles.theme_toogle}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <title>Moon</title>
          <path
            d="M264 480A232 232 0 0132 248c0-94 54-178.28 137.61-214.67a16 16 0 0121.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0121.06 21.06C442.28 426 358 480 264 480z"
            fill={theme === "Light" ? "black" : "white"}
          />
        </svg>
        <p>{theme === "Light" ? "Dark Mode" : "Light Mode"}</p>
      </div>
    </nav>
  );
};

export default Nav;
