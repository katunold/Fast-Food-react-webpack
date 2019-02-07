import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from "../app/app.jsx";
import Authentication from "../js/components/container/auth/index.jsx";

const Routes = () => (
    <Router>
        <Switch>
            <Route component={App} path="/" exact />
            <Route component={Authentication} path="/signUp" exact />
            <Route component={Authentication} path="/login" exact />
        </Switch>
    </Router>
);

export default Routes;
