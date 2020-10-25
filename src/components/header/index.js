import React  from "react";
import "./header.css";

import {    BrowserRouter as Router, 
Switch,
Route,
Link
} from "react-router-dom";
import { HomePage, ChartPage } from "../../pages";

const Header = () => {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/chart">Chart</Link>
            </nav>

            <Switch>
                <Route path="/chart">
                    <ChartPage />
                </Route>

                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
        </Router>
    )
}

export default Header;