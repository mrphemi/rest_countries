import React, { useState } from "react";

export const GlobalContext = React.createContext();

const GlobalState = ({ children }) => {
  const [theme, setTheme] = useState("Light");
  const [loading, setLoading] = useState(false);

  const values = {
    theme,
    loading,
    setTheme,
    setLoading,
  };

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};

export default GlobalState;
