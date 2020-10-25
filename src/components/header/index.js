import React from "react";
import "./header.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HomePage, ChartPage } from "../../pages";

const Header = () => {
  return (
    <Router>
      <header className="header">
        <Link to="/" className="header__title">
          Shopping Chart
        </Link>

        <nav>
          <Link to="/" className="navbar__link">
            Home
          </Link>

          <Link to="/chart" className="navbar__link">
            Chart
          </Link>
        </nav>
      </header>

      <Switch children>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/chart">
          <ChartPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Header;
