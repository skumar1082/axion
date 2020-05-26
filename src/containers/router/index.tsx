import React from 'react';
import Login from './login';
import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom';
import Dashboard from './dashboard';

const Router = () => (
  <Routes>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </Routes>
);
export default Router;
