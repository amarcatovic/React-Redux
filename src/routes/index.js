import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
import Cars from '../pages/cars'; 
import Login from '../pages/login'; 
import Home from '../pages/home'; 

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/cars">
          <Cars />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;