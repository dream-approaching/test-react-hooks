import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './utils/history';
import Home from './pages/home';
import StateHook from './pages/stateHook';
import EffectHook from './pages/effectHook';

function RouterConfig() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/stateHook" exact component={StateHook} />
        <Route path="/effectHook" exact component={EffectHook} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
