import React, { useContext } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalState, { GlobalContext } from "./context/GlobalState";
import Nav from "./components/nav/Nav";
import CountryList from "./components/countryList/CountryList";
import CountryDetails from "./components/countryDetails/CountryDetails";
import Loader from "./components/loader/Loader";

import "./styles.css";

function App() {
  const { theme } = useContext(GlobalContext);
  return (
    <div className={theme === "Light" ? "container" : "container_dark"}>
      <Loader />
      <Nav />
      <Switch>
        <Route exact path="/" component={CountryList} />
        <Route path="/country/:code" component={CountryDetails} />
      </Switch>
    </div>
  );
}

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <GlobalState>
    <Router>
      <App />
    </Router>
  </GlobalState>
);
