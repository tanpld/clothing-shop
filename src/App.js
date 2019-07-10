import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage';

import './App.css';

const Hats = () => <h1>Hats</h1>;

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
