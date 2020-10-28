import React from "react";
import "./header.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HomePage, CartPage } from "../../pages";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HomeIcon from "@material-ui/icons/Home";

import { connect } from "react-redux";

const Header = (props) => {
  return (
    <Router>
      <header className="header">
        <Link to="/" className="header__title">
          Shopping Cart
        </Link>

        <nav className="nav">
          <div className="nav__router">
            <Link to="/" className="navbar__link">
              <HomeIcon />
              <span className="link__text">Home</span>
            </Link>
          </div>

          <div className="nav__router">
            <Link to="/cart" className="navbar__link">
              {props.notification ? (
                <div className="icon">
                  <ShoppingCartIcon />
                  <div className="iconNotf"></div>
                </div>
              ) : (
                <div className="icon">
                  <ShoppingCartIcon size={20} className="icon" />
                </div>
              )}
              <span className="link__text">Cart</span>
            </Link>
          </div>
        </nav>
      </header>

      <Switch children>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/cart">
          <CartPage />
        </Route>
      </Switch>
    </Router>
  );
};

const getStoreProps = (state) => {
  return {
    notification: state.notification,
  };
};

export default connect(getStoreProps)(Header);
