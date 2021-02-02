import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Detail from './pages/Detail';

import './App.css';

export default function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/detail:volume" component={Detail} />
        </Switch>
      </Router>
    </div>
  );
}
