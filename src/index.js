import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalState from "./components/context/GlobalState";
import Nav from "./components/nav/Nav";
import CountryList from "./components/countryList/CountryList";
import CountryDetails from "./components/countryDetails/CountryDetails";

import "./styles.css";

function App() {
  return (
    <div className="container">
      <Nav />
      <Switch>
        <Route exact path="/" component={CountryList} />
        <Route path="/country/:code" component={CountryDetails} />
      </Switch>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <GlobalState>
    <Router>
      <App />
    </Router>
  </GlobalState>,
  rootElement
);